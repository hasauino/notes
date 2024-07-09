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

