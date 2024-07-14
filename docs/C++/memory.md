# Memory





## Memory Types

In computers, there are multiple types of memory. The following is a list of memory types ordered from closest/fastest to furthest/slowest:

1. CPU registers.
2. L1 cache.
3. L2 cache.
4. L3 cache (facilitates the protocol used for caching in multi-core CPUs).
5. RAM/ROM (not sure which one is faster).
6. Hard disks (HDD, SDD)...etc

- CPU registers, the cache memory (L1-L3), are not directly accessible by the programmer.
- A very important memory type, though not physical, is **Virtual Memory**.



## Virtual Memory

- Each program is mapped to a virtual memory space which is mapped to the physical memory (RAM, and also hard disk - swap).
- Physical memory is mainly the RAM (but it also include other device registers).
- So a program does not interact with the physical memory directly and does not use the physical addresses.



**Why?**

- To avoid having programs competing against same address space.
- Solves the problem of fragmentation: allocating large chunks of memory when there is fragmentation could fail even when there is still free physical space.
- each program now is not limited by the available free space in the RAM. Since virtual memory could be mapped to hard disk in case no available free space or in case of **page fault** (when there is less RAM available the largest addressable location in the memory).





- When the RAM is full, the operating system starts swapping: it moves a chunk of memory from the RAM to the hard disk. The swapped memory could be stored in a file (swap file), or a partition (swap partition). In Linux, you could check how much swap is used using these commands:

```bash
free -h
```

```bash
swapon --show
```





## Cache

In CPUs, there is a caching mechanism which stores chunks of memory that is likely to be used for speeding up access to it. Cache memory is something the programmer does not have access to, but there are 2 things that should be kept in mind:

- **Temporal Locality**: data that was accessed recently, will be more likely cached than data access earlier.
- **Spacial Locality**: data closer to recently accessed data is more likely to be cached.



**Example**

```cpp
#include <chrono>
#include <cstdio>
#include <iostream>

using namespace std;

void contigious(unsigned long rows, unsigned long cols) {
    int* matrix = new int[rows * cols];

    auto t_start = chrono::high_resolution_clock::now();
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            *(matrix + (i * cols + j)) = 1;
        }
    }
    auto t_end = chrono::high_resolution_clock::now();
    auto duration = t_end - t_start;
    printf("contigious access duration: %ld\n", duration.count());
}

void non_contigious(unsigned long rows, unsigned long cols) {
    int* matrix = new int[rows * cols];

    auto t_start = chrono::high_resolution_clock::now();
    for (int j = 0; j < cols; j++) {
        for (int i = 0; i < rows; i++) {
            *(matrix + (i * cols + j)) = 1;
        }
    }
    auto t_end = chrono::high_resolution_clock::now();
    auto duration = t_end - t_start;
    printf("non-contigious access duration: %ld\n", duration.count());
}

int main(int argc, char** argv) {
    contigious(10000, 10000);
    non_contigious(10000, 10000);
    return 0;
}
```



## Process Memory Model

Each process is given a virtual memory space by the operating system. It consists of the following sections:

1. OS kernel.
2. Stack: Automatic variables in local scopes.
3. Heap: Dynamically allocated variables.
4. BSS: uninitialized static variables.
5. Data: explicitly initialized static variables
6. Text: program code

variables in sections 4 & 5 are allocated once at start and persist throughout the program lifetime. 





## `malloc`, `calloc`, `realloc`, and `free`

These are functions which are part of the `stdlib.h` header file in C.

```cpp
#include <cstdlib>
#include <cstddef>
#include <string>

using namespace std;

// malloc & free
void example_1(){
    int* ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    free(ptr);
}

// calloc
void example_2(){
    size_t size{10};
    int* ptr = (int*)calloc(size, sizeof(int));
    for (int i=0; i<size; i++){
        ptr[i] = 0;
    }
    free(ptr);
}

// array of custom type
void example_3(){
    struct Person{
        string first_name;
        string last_name;
        float age;
    };
    
    Person* students = (Person*) calloc(3, sizeof(Person));
    students[0].first_name = "Hassan";
    students[0].last_name = "Umari";
    students[0].age = 33.0;
}

// realloc
void example_4(){
    int* ptr = (int*)malloc(sizeof(int));
    int* ptr = (int*)realloc(ptr, 2*sizeof(int));
    ptr[0] = 10;
    ptr[1] = 100;
    free(ptr);    
}
```



## `new` and `delete`

`new` and `delete` operators are the C++ counter part of C  `malloc` and `free` functions. The following are the differences:

- `new` and `delete` are operators. They can be overloaded in classes unlike `malloc` and `free` which are functions.
- Instantiating an object with  `new` automatically calls the constructor. Similarly, with `delete` , the destructor is automatically called.
- type safety: `malloc` returns a void pointer which needs to be cast into the appropriate type.



```cpp
#include <cstdio>
#include <string>

using namespace std;

// simple example
void example_1() {
    int* ptr = new int(10);
    ptr[0] = 100;
    delete ptr;
}

// array of simple types
void example_2() {
    int* ptr = new int[3];
    ptr[0] = 1;
    ptr[1] = 2;
    ptr[2] = 3;
    delete[] ptr;
}

// array of custom types
void example_3() {

    struct Person {
        string name;
        float age;
    };

    int count{10};
    Person* people = new Person[count];

    for (int i = 0; i < count; i++) {
        people[i].name = "Hassan Umari";
        people[i].age = 33.0;
    }
    delete[] people;
}

// placement new operator example
void example_4() {

    struct Person {
        string name;
        float age;

        ~Person() { printf("Person destructor\n"); }
    };

    Person* hassan = (Person*)malloc(sizeof(Person));
    new (hassan) Person;
    hassan->~Person();
    free(hassan); // must use free in this case (cannot use delete). Hence the explicit call to the destructor 
}
```

### Overriding `new`/`delete` operators

```cpp
#include <cstddef>
#include <cstdio>
#include <cstdlib>

using namespace std;

class MyClass {
   public:
    MyClass() { printf("Constructor..\n"); }
    ~MyClass() { printf("Destructor..\n"); }

    void* operator new(size_t size) {
        printf("allocating memory..\n");
        return malloc(size);
    }

    void* operator new[](size_t size) {
        printf("allocating memory..\n");
        return malloc(size);
    }

    void operator delete(void* ptr) {
        printf("freeing memory..\n");
        free(ptr);
    }

    void operator delete[](void* ptr) {
        printf("freeing memory..\n");
        free(ptr);
    }
};

void example() {
    // single element
    auto ptr = new MyClass();
    delete ptr;

    // array
    ptr = new MyClass[5];
    delete[] ptr;
}

int main() {
    example();
}
```



## Valgrind

```bash
valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes --log-file=/home/workspace/valgrind-out.txt /home/workspace/a.out

```





## Copy & Move Semantics

- Without defining a copy or move constructor/operator, the compiler defines default ones which perform a shallow copy/move.

```cpp
#include <cstddef>
#include <iostream>

using namespace std;

class Simple{
    public:
    	Simple(size_t size){
            this->memory_block = new int[size];
        }
    	~Simple(){
            delete[] this->memory_block;
        }
    	void print_addresses(){
            cout << "Object address: " << this << endl;
            cout << "Memory block address: " << this->memory_block << endl;
        }
    private:
    	int* memory_block;
};


void example(){
    Simple object1{10};
    Simple object2{object1};
    
    object1.print_addresses();
    object2.print_addresses();
    
    // when destructors are called, an error will be raised due to releasing same memory twice 
}
```



### Copy-ownership Policy

A design choice must be made when creating a class, is the copying policy.

#### 1. No copying/moving

```cpp

class NoCopyNoMove{
	public:
		NoCopyNoMove(const NoCopyNoMove& other) = delete;
    	NoCopyNoMove& operator=(const NoCopyNoMove& other) = delete;
    
    	NoCopyNoMove(NoCopyNoMove&& other) = delete();
    	NoCopyNoMove& operator=(NoCopyNoMove&& other) = delete;
};
```



#### 2. Exclusive Ownership

```cpp
#include <cstddef>
#include <utility>

using namespace std;

class Example{
    public:
    	Example(size_t size){
            memory_block = new int[size];            
        };
    	~Example(){
            delete[] memory_block;
        }
    	Example(Example& other) = delete;
    	Example& operator=(Example& other) = delete;
    
    	Example(Example&& other){
            this->memory_block = other.memory_block;
            other.memory_block = nullptr;
        }
    private:
    	int* memory_block;
};

int main(int argc, char** argv) {
    Example object1{10};
    Example object2{move(object1)};
    return 0;
}
```



#### 3. Deep Copy

```cpp
#include <iostream>

class DeepCopy
{
private:
    int *_myInt;

public:
    DeepCopy(int val)
    {
        _myInt = (int *)malloc(sizeof(int));
        *_myInt = val;
        std::cout << "resource allocated at address " << _myInt << std::endl;
    }
    ~DeepCopy()
    {
        free(_myInt);
        std::cout << "resource freed at address " << _myInt << std::endl;
    }
    DeepCopy(DeepCopy &source)
    {
        _myInt = (int *)malloc(sizeof(int));
        *_myInt = *source._myInt;
        std::cout << "resource allocated at address " << _myInt << " with _myInt = " << *_myInt << std::endl;
    }
    DeepCopy &operator=(DeepCopy &source)
    {
        _myInt = (int *)malloc(sizeof(int));
        std::cout << "resource allocated at address " << _myInt << " with _myInt=" << *_myInt << std::endl;
        *_myInt = *source._myInt;
        return *this;
    }
};

int main()
{
    DeepCopy source(42);
    DeepCopy dest1(source);
    DeepCopy dest2 = dest1;

    return 0;
}
```



#### 4. Shared Ownership

```cpp
#include <iostream>

class SharedCopy
{
private:
    int *_myInt;
    static int _cnt;

public:
    SharedCopy(int val);
    ~SharedCopy();
    SharedCopy(SharedCopy &source);
};

int SharedCopy::_cnt = 0;

SharedCopy::SharedCopy(int val)
{
    _myInt = (int *)malloc(sizeof(int));
    *_myInt = val;
    ++_cnt;
    std::cout << "resource allocated at address " << _myInt << std::endl;
}

SharedCopy::~SharedCopy()
{
    --_cnt;
    if (_cnt == 0)
    {
        free(_myInt);
        std::cout << "resource freed at address " << _myInt << std::endl;
    }
    else
    {
        std::cout << "instance at address " << this << " goes out of scope with _cnt = " << _cnt << std::endl;
    }
}

SharedCopy::SharedCopy(SharedCopy &source)
{
    _myInt = source._myInt;
    ++_cnt;
    std::cout << _cnt << " instances with handles to address " << _myInt << " with _myInt = " << *_myInt << std::endl;
}

int main()
{
    SharedCopy source(42);
    SharedCopy destination1(source);
    SharedCopy destination2(source);
    SharedCopy destination3(source);

    return 0;
}
```



#### Rule of Three

If a class defines on of: a destructor, copy constructor, or copy assignment operator, then it must define the other two and properly manage resources.



### rvalue & lvalue

Here's an example that demonstrates the difference between an lvalue and an rvalue:

```cpp
int x = 5;   // "x" is an lvalue
int y = x;   // "x" is an lvalue, "y" is also an lvalue
int z = 3 + 4;   // "3 + 4" is an rvalue, "z" is an lvalue
```



#### rvalue reference

An rvalue reference is a new feature introduced in C++11, which extends the concept of reference types in C++. An rvalue reference is a reference that is used to refer to an object that has a limited lifespan, often referred to as an rvalue.

In C++, an lvalue is an expression that refers to an object that has a persistent storage location in memory, such as a variable, an array, or a struct. An rvalue, on the other hand, is an expression that refers to a temporary value that is not stored in a persistent location in memory, such as the result of a function call or a literal value.

An rvalue reference can be declared using the "&&" symbol. Here's an example that demonstrates how an rvalue reference can be used:

```cpp
int&& r = 5 + 6; % rvalue reference
int a{5};
int& b = a; % lvalue refernece
std::cout << r << std::endl;
```

In this example, the expression "5 + 6" is an rvalue, and the rvalue reference "r" is used to refer to it. The rvalue reference "r" can be used in the same way as an lvalue reference to access the value of the temporary object.

Rvalue references are often used in move semantics, which is a technique that enables efficient transfer of resources from one object to another. Move semantics can be used to avoid unnecessary copying of objects, which can improve the performance of C++ programs. Rvalue references are also used to implement perfect forwarding, which is a technique for forwarding function arguments to other functions without losing their value category (lvalue or rvalue).





## Essential Operations





### Copying

```cpp
#include <algorithm>
#include <initializer_list>
#include "spdlog/spdlog.h"

class Vector {
 public:
  Vector(int _size) : size{_size}, elem{new double[_size]} {};
  ~Vector() {
    spdlog::info("destructor..");
    delete[] elem;
  }
  Vector(std::initializer_list<double> elem_)
      : size{static_cast<int>(elem_.size())}, elem{new double[elem_.size()]} {
    std::copy(elem_.begin(), elem_.end(), elem);
  }

  Vector(const Vector& v) : size{v.size}, elem{new double[v.size]} {
    spdlog::info("copy constructor..");
    std::copy(v.elem, v.elem + size, elem);
  }

  const double& operator[](int indx) const { return elem[indx]; }
  double& operator[](int indx) { return elem[indx]; }

  Vector& operator=(const Vector& v) {
    double* temp = new double[v.size];
    std::copy(v.elem, v.elem + v.size, temp);
    delete[] elem;
    elem = temp;
    size = v.size;
    return *this;
  }

 private:
  double* elem;
  int size = 0;
};

int main(int argc, char** argv) {
  Vector v({1.0, 2.0, 3.0});
  Vector vv(v);
  Vector vvv({100, 22, 33, 44, 55});
  vvv = v;
  auto vvvv =
      v;  // this will call copy constructor (if u add "explicit" it will raise an error)
  v[0] = 12345;
  spdlog::info("{}        {}          {}", v[0], vv[0], vvv[0]);
  return 0;
}
```

- copy assignment operator is not called when we instantiate an object. Example:

```cpp
MyClass obj2 = obj1; // will call the copy constructor
obj2 = obj1; // will call copy assignment operator 
```

 

### Moving

- A move operation is performed when an rvalue reference is used as:

  - an initializer
  - right hand side of an assignment

  For the previous `Vector` class, move constructor and move assignment might look like this:

```cpp
  Vector(Vector&& v) : size{static_cast<int>(v.size)}, elem{v.elem} {
    v.elem = nullptr;
    v.size = 0;
  }

  Vector& operator=(Vector&& v) {
    delete[] elem;
    elem = v.elem;
    size = v.size;
    v.size = 0;
    v.elem = nullptr;
  }
```



### Rule of 5

Exmaple:

```cpp
#include <stdlib.h>
#include <iostream>

class MyMovableClass
{
private:
    int _size;
    int *_data;

public:
    MyMovableClass(size_t size) // constructor
    {
        _size = size;
        _data = new int[_size];
        std::cout << "CREATING instance of MyMovableClass at " << this << " allocated with size = " << _size*sizeof(int)  << " bytes" << std::endl;
    }

    ~MyMovableClass() // 1 : destructor
    {
        std::cout << "DELETING instance of MyMovableClass at " << this << std::endl;
        delete[] _data;
    }
    
    MyMovableClass(const MyMovableClass &source) // 2 : copy constructor
    {
        _size = source._size;
        _data = new int[_size];
        *_data = *source._data;
        std::cout << "COPYING content of instance " << &source << " to instance " << this << std::endl;
    }
    
    MyMovableClass &operator=(const MyMovableClass &source) // 3 : copy assignment operator
    {
        std::cout << "ASSIGNING content of instance " << &source << " to instance " << this << std::endl;
        if (this == &source)
            return *this;
        delete[] _data;
        _data = new int[source._size];
        *_data = *source._data;
        _size = source._size;
        return *this;
    }
    MyMovableClass(MyMovableClass &&source) // 4 : move constructor
    {
        std::cout << "MOVING (c’tor) instance " << &source << " to instance " << this << std::endl;
        _data = source._data;
        _size = source._size;
        source._data = nullptr;
        source._size = 0;
    }
    MyMovableClass &operator=(MyMovableClass &&source) // 5 : move assignment operator
    {
        std::cout << "MOVING (assign) instance " << &source << " to instance " << this << std::endl;
        if (this == &source)
            return *this;

        delete[] _data;

        _data = source._data;
        _size = source._size;

        source._data = nullptr;
        source._size = 0;

        return *this;
    }    
};

void useObject(MyMovableClass obj)
{
    std::cout << "using object " << &obj << std::endl;
}

int main()
{
    MyMovableClass obj1(100); // constructor

    useObject(std::move(obj1));

    return 0;
}
```



### Moving an lvalue

- When an rvalue reference is passed to the constructor, the move constructor will be the one called, but when an lvalue reference is passed, the copy constructor will be called instead. To force the compiler to choose the move constructor, `std::move()` can be used.
- `std::move()` is function that accepts an lvalue and returns it as an rvalue.

Example

```cpp
#include <iostream>

void useObject(MyMovableClass obj)
{
    std::cout << "using object " << &obj << std::endl;
}

int main()
{
    MyMovableClass obj1(100); // constructor

    useObject(std::move(obj1));

    return 0;
}
```



## Smart Pointers

## Conversion between smart pointers

```cpp
#include <iostream>
#include <memory>

int main()
{
    // construct a unique pointer
    std::unique_ptr<int> uniquePtr(new int);
    
    // (1) shared pointer from unique pointer
    std::shared_ptr<int> sharedPtr1 = std::move(uniquePtr);

    // (2) shared pointer from weak pointer
    std::weak_ptr<int> weakPtr(sharedPtr1);
    std::shared_ptr<int> sharedPtr2 = weakPtr.lock();

    // (3) raw pointer from shared (or unique) pointer   
    int *rawPtr = sharedPtr2.get();
    delete rawPtr;

    return 0;
}
```

