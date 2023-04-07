# Basics

CMake is a tool that generates Makefiles from a given `CmakeLists.txt` file. Once `Cmake` is invoked for a given directory, `cmake` will search for `CMakeLists.txt` file in that directory, and will generate the Makefiles. The user can then invoke make to build the project. The generated Make files will do every step of the build process: compiling into object files and linking (by invoking configured/default compiler).



:::tip

to learn more about make, [this](https://makefiletutorial.com/) link is the best reference. Make is a very powerful tool that can be used beyond build C++ files.

:::



##  Example

```cmake
cmake_minimum_required(VERSION 3.5.1)  # cmake version
project(exmaple)  # every cmake project should have a name
set(CMAKE_CXX_STANDARD 17)  # set CMAKE_CXX_STANDARD environment variable

add_executable(example src/vect_add_one.cpp src/main.cpp src/increment_and_sum.cpp)
```

- `CMAKE_CXX_STANDARD` environment variable is used by the compiler to select the C++ standard

- `add_executable`: the order of `.cpp` files does not matter, compiler will search in this pool of source files for `main()` function. It will search for implementations in this pool. So order does not matter. 
