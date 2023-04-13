# OOP



## Multiple inheritance 

According the [C++ core guidelines](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines), multiple inheritance can be used in two cases:

1. To represent [distinct interfaces](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c135-use-multiple-inheritance-to-represent-multiple-distinct-interfaces).
2. To represent a [union](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c136-use-multiple-inheritance-to-represent-the-union-of-implementation-attributes)

Example:

```cpp
#include <assert.h>
#include <string>

class Pet {
   public:
    virtual std::string sit() const { return "OK!"; }
};

class Animal {
   public:
    virtual std::string talk() const { return ""; };
};

class Cat : public Animal, public Pet {
   public:
    std::string talk() const override { return "Meow"; }
};

class Lion : public Cat {
   public:
    std::string talk() const override { return "Roar"; }
};

int main(int argc, char** argv) {
    Lion lion;
    Animal& animal = lion;
    Pet& pet = lion;
    assert(animal.talk() == "Roar");
    assert(pet.sit() == "OK!");
}
```



:warning: :fire: Always define a destructor in the interface, in order to allow calling the destructor of the derived class when the instance is manipulated through a pointer of the base class.