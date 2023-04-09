# Basics

CMake is a tool that generates Makefiles from a given `CmakeLists.txt` file. Once `Cmake` is invoked for a given directory, `cmake` will search for `CMakeLists.txt` file in that directory, and will generate the Makefiles. The user can then invoke make to build the project. The generated Make files will do every step of the build process: compiling into object files and linking (by invoking configured/default compiler).



:::tip

to learn more about make, [this](https://makefiletutorial.com/) link is the best reference. Make is a very powerful tool that can be used beyond build C++ files.

:::

CMake actually can also generate files for other build systems beyond make (ex: ninja). Ideally, you can build a CMake project independently from the underlaying build system, with this command:

```bash
cmake --build .
```



## Install & Unisntall

#### Install

Once a project is built, it can be installed using:

```bash
make install
```

installation is basically copying build targets (shared libraries, or executables, etc..) to locations where compilers use when they search for libraries. In linux for example one of the locations is:

```
/usr/local/lib/
```

it also copies header files. Example locations:

```bash
/usr/local/include/
```



#### Uninstall

Some projects add an uninstall target in the generated make files, so you can simply do the following:

```bash
make uninstall
```



if `uninstall` target is not added. You would need to remove added files manually. To get a list of all the files that were added, check the `install_manifest.txt` file. It shows a list of all the files that were added



:::note

In all operating systems, installation is about copying libraries and executables to the system, and sometimes also involves defining environment variables. In windows this is also the case. The developer must ensure that all necessary dependencies are present on any machine that has the target os installed. Shipping software :ship: :rocket:

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
