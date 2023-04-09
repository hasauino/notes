# Strings

## Basics


```cpp
#include <string>

std::string name{"Hassan"};  // define a string
name[0] = 'A';  // access element
name.size();  // get length

// a string is iterable
for (auto c : name){
    // do something
}

// convert to s-string (char*)
name.c_str();

// a string a dynamic
name = "Hassan Umari";

// search in a string
name.find("Umari");

// string concatination
"Hello " + name + "!";
```

## sstream

for parsing string and casting parsed text into a data type, the string stream comes in handy


```cpp
#include <string>
#include <sstream>
#include <iostream>

std::string data;
data += "15,20,30,40,\n";
data += "90,80,70,60,\n";
data += "15,20,30,40,\n";

std::istringstream data_stream{data};
std::string line;

data_stream >> line;
int n[4];
char l;

while(data_stream >> n[0] >> l >> n[1] >> l >> n[2] >> l >> n[3] >> l){
    std::cout << n[0] << std::endl;
}

```
