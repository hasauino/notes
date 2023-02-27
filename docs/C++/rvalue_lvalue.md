# rvalue & lvalue

Here's an example that demonstrates the difference between an lvalue and an rvalue:

```c++
int x = 5;   // "x" is an lvalue
int y = x;   // "x" is an lvalue, "y" is also an lvalue
int z = 3 + 4;   // "3 + 4" is an rvalue, "z" is an lvalue
```



## rvalue reference

An rvalue reference is a new feature introduced in C++11, which extends the concept of reference types in C++. An rvalue reference is a reference that is used to refer to an object that has a limited lifespan, often referred to as an rvalue.

In C++, an lvalue is an expression that refers to an object that has a persistent storage location in memory, such as a variable, an array, or a struct. An rvalue, on the other hand, is an expression that refers to a temporary value that is not stored in a persistent location in memory, such as the result of a function call or a literal value.

An rvalue reference can be declared using the "&&" symbol. Here's an example that demonstrates how an rvalue reference can be used:

```c++
int&& r = 5 + 6;
std::cout << r << std::endl;
```

In this example, the expression "5 + 6" is an rvalue, and the rvalue reference "r" is used to refer to it. The rvalue reference "r" can be used in the same way as an lvalue reference to access the value of the temporary object.

Rvalue references are often used in move semantics, which is a technique that enables efficient transfer of resources from one object to another. Move semantics can be used to avoid unnecessary copying of objects, which can improve the performance of C++ programs. Rvalue references are also used to implement perfect forwarding, which is a technique for forwarding function arguments to other functions without losing their value category (lvalue or rvalue).