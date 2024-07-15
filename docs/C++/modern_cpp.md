# C++ Tips + Style

## Range-for

```cpp
int a[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
for (auto num : a){
    // do something here
}
```

```cpp
void incr(map<string, int> &m)
{
    for (auto &[key, value] : m)
        ++value;
}
```

- Using `auto&` will get you a reference to the elements of the sequence:

  ```cpp
  int v[] = {1, 2, 3, 4, 5};
  
  // by value, elements are unchanged
  for (int num : v) {
      num++;
  }
  
  // by reference, elements will be modified
  for (int& num : v) {
      num++;
  }
  ```

- This works for any type, not just arrays. As long the type has `begin()` and `end()` methods that return pointers to the first and last element in the sequence respectively.



## Returns

```cpp
// normal return
int main(){}

// trailing return
auto main() -> int {}
```

- If `main` returns non-zero, it means program failed. Used by Linux when `a && b` for example.
- default return is zero



## Strings

- Raw string:

  ```cpp
  std::string stringInQuote = R"(This is a "string")";
  ```

  ```cpp
  std::string stringInQuote = R"(This is a "string"
                                 and a second line)";
  ```

  ```cpp
  std::string s(10, 'a'); // read: 10 times 'a'
  ```

  

- Nice library for formatting std::strings: **{fmt}**. Example:

  ```cpp
  #include <string>
  #define FMT_HEADER_ONLY
  #include <fmt/format.h>
  
  int main()
  {
      std::string s = fmt::format("The answer is {}.", 42);
  }
  ```



## Operator Overloading

Example:

```cpp
#include <cmath>
#include <iostream>

class Box
{
public:
    float length;
    Box(float _length)
    {
        length = _length;
    }

    float get_volume()
    {
        return std::pow(length, 3);
    }

    float get_area()
    {
        return std::pow(length, 2);
    }

    Box operator+(Box &b)
    {
        Box new_box{length + b.length};
        return new_box;
    }

private:
};

int main()
{
    Box b1{3.0};
    Box b2{1.0};
    Box b3 = b1 + b2;
    std::cout << b3.get_volume() << std::endl;
}
```



## Initialization: = vs {}

- Recommended to use `{}`. Reason:

```cpp
int i1 = 7.8;  // i1 becomes 7 (surprise?)
int i2 {7.8}; // error: floating-point to integer conversion
```

narrowing conversions are applied implicitly when using `=` operator, but not when using `{}`



## Type deduction

```cpp
auto age{31};
```

- We use **auto** where we don’t have a specific reason to mention the type explicitly. ‘‘Specific
  reasons’’ include:
  - The definition is in a large scope where we want to make the type clearly visible to readers
    of our code.
  - We want to be explicit about a variable’s range or precision (e.g., double rather than float).



## Dynamic Memory: Heap

```cpp
#include <cmath>
#include <iostream>

class Box
{
public:
    float length;
    Box(float _length)
    {
        length = _length;
    }

    float get_volume()
    {
        return std::pow(length, 3);
    }
};

int main()
{
    Box *box = new Box(5.0);
    std::cout << box->get_volume() << std::endl;
    delete box;
}
```



## const & constexp

- Both define immutable objects, but the difference:

```cpp
const auto length = std::pow(2, 3); // allowed (const can have the value defined at run-time)
constexpr auto length = std::pow(2, 3); // not allowed (value must be defined at compile time)
```

- Pass by reference but prevent change. Example:

```cpp
float area(const float &lenght)
{
    return std::pow(lenght, 2);
}
```

## nullptr

- A test of a pointer value (e.g., `if (p)`) is equivalent to comparing the value to
  **nullptr** (e.g., `if (p!=nullptr)`).



## initializer in if-statement

```cpp
void do_something(vector<int>& v)
{
    if (auto n = v.size(); n!=0) {
    // ... we get here if n!=0 ...
    }
	// ...
}

// or

void do_something(vector<int>& v)
{
    if (auto n = v.size()) {
    // ... we get here if n!=0 ...
    }
    // ...
}
```





## Enums

Use **enum class ** instead of just **enum** to avoid implicitly mixing them with integers. Also scope of the enumerators in this case is enum class, this avoids any confusion.

```cpp
int i = Color::red;// error: Color::red is not an int
Color c = 2;// initialization error: 2 is not a Color
```

- init enum using int:

```cpp
Color y {6}; // is OK
```

- an enum can have additional operators defines





## Structured binding

- Packing: a function returning a struct/class (a good way for returning multiple values):

```cpp
struct Entry
{
    string name;
    int value;
};

Entry read_entry(istream &is)
{
    string s;
    int i;
    is >> s >> i;
    return {s, i};
}
```

- Unpacking:

```cpp
auto [n,v] = read_entry(is);
```





## Inline-functions

Use in-line functions instead of macros

```cpp
inline return-type function-name(parameters)
{
    // function code
}  
```







## Class Hierarchy Navigation

```cpp
// example:
Shape∗ ps{read_shape(cin)};

if (Smiley∗ p = dynamic_cast<Smiley∗>(ps)){ // ... does ps point to a Smiley? ...
    // ... a Smiley; use it
}
else
{
    // ... not a Smiley, try something else ...
}
```



## Lambda Functions

```cpp
void example(){
    
    auto add1 = [](int a, int b)-> int {return a+b;};
    
    auto add2 = [](int a, int b) {return a+b;}; // auto deduction of return type
    
    int a = 100;
    int b = 200;
    
    auto add3 = [a, b](){return a+b;}; // capture clause (by value)

    auto add4 = [&a, &b](){return a+b;}; // capture clause (by reference)

    add1(1, 2);
    add2(10, 20);
    add3();
    
}
```

