# Concurrency



```cpp
#include <iostream>
#include <thread>

void callback() {
    std::cout << "callback..." << std::endl;
}


void example() {
    std::thread thread{callback};
    thread.join();
}
```



## Running Threads

Threads can execute any callable in parallel to the main thread. A callable can be:

- A function (or function pointer)
- A lambda expression (in-line anonymous function).
- An object that overloads the call operator

Lambdas and callable objects are also known as "**Functors**".



- get hardware threads:

```cpp
void example(){
	unsigned int n_threads = std::thread::hardware_concurrency();
}
```

- Get thread ID

```cpp
std::thread::get_id();
```



### Detach

- Sets `joinable` to false and suppress error if thread is destructed before finishing execution.
- Detached threads can never be joined again.
- OS will terminate detached threads harshly without giving them enough time to do proper clean-up (not waiting for destructor). 

```cpp
#include <chrono>
#incldue <thread>
#include <iostream>

using namespace chono_literals;

void example(){
    std::thread thread([](){
        std::this_thread::sleep_for(500ms);
    });
    
    thread.detach();
    
    std::cout << "Done main thread" << std::endl;
}

```



### Thread with normal functions

```cpp
// simple
void callback(){}
std::thread thread{callback};

// with args
void callback(const std::string& msg){}
std::thread thread{callback, "hello"};
```



### Thread with Functors

```cpp
class Foo {
   private:
   public:
    Foo() {}

    void operator()() { std::cout << "Foo called!" << std::endl; }
};
```



- It could be ambiguous for the C++ compiler to parse an expression, as in the following case:

```cpp
 Foo f();
```

This can be a deceleration of `f` function that returns `Foo`. Or can be a instantiation of `f` . To resolve such ambiguity, the following can be done:

```cpp
Foo f{};  // use uniform initialization
auto f = Foo(); // use copy initialization
```



### Thread with Lambda

```cpp
std::thread thread{[](){
	std::cout << "hello!" << std::endl;
}};
```



Lambda can take different forms:

```cpp
// simple lambda 
auto hello = [](){
    std::cout << "hello" << std::endl;
};

// omitted (), possible only when not using "mutable" specifier
auto hello2 = []{
    std::cout << "hello" << std::endl;
};

hello();
```



```cpp
// with parameters
auto add = [](int a, int b){
    std::cout << a+b << std::endl;
};

add(1, 2);
```



```cpp
// with capture list - by value

int a=10, b=20;

auto add = [a, b](){
    std::cout << a+b << std::endl;
};

// by value, mutable (can change a)
auto add = [a, b]() mutable {
    a++;
    std::cout << a+b << std::endl;
};


add();
```



```cpp
// with capture list - by reference

int a=10, b=20;

auto add = [&a, &b](){
    std::cout << a+b << std::endl;
}

add(); // object created from a lambda is called a "closure" 
```



```cpp
// with return value (explicitly defined)
auto sum = [](int a, int b) -> int{
    return a+b;
};

// with return value (auto-deduction of return type)
auto sum = [](int a, int b){
    return a+b;
};
```



The object created from a lambda expression is called **closure**.





### Threads & Variadic templates

The thread constructor is a variadic template function. So we can pass as many arguments as the callback function needs.

```cpp
void callback(const std::string& msg){}

std::thread thread{callback, "hello!"};
```

When passing arguments to variadic functions, the behavior is slightly different than that of a normal function. Arguments are passed by:

- Copying (if passed argument is an lvalue).
- Moving (if passed argument is an rvalue).
- To move an `lvalue`, you can use `std::move`
- To force pass by reference, we have to use `std::ref()`

```cpp
std::string msg{"hello there!"};

std::thread thread{callback, std::ref(msg)};
```

- `std::ref` can also be used with `std::bind` to pass args by reference.



### Starting threads with member functions

```cpp
#include <iostream>
#include <memory>
#include <thread>
#include <vector>

class Dog {
   public:
    Dog(const std::string& name) : _name{name} {}
    void make_sound() {
        std::cout << "Dog " << this->_name << " Says: Wo Wo WO" << std::endl;
    }

   private:
    std::string _name;
};

int main() {
    Dog dog{"Cesar"};
    std::thread thread{&Dog::make_sound, dog}; // a copy is made for dog
    std::thread thread{&Dog::make_sound, &dog}; // by reference
    thread.join();
    return 0;
}
```

Better approach is to used heap-allocated object while making sure it's life is longer than the thread. Good choice is a shared pointer:

```
auto dog = std::make_shared<Dog>("Cesar");
std::thread thread{&Dog::make_sound, dog};
```





## Running Multiple Threads



### Fork-Join Parallelism

- split work across threads (worker threads) + main thread.
- let main thread join all threads (join is the barrier).



```cpp
#include <vector>
#include <thread>
#include <iostream>

int main(){
    std::vector<std::thread> workers;
    // fork
    for (int i=0; i<5; i++){
        workers.emplace_back(std::thread{[i](){
			std::cout << "thread: " << i << std::endl;            
        }});
    }
    //join
    for (auto& worker : workers){
        worker.join();
    }
    
    return 0;
}
```

