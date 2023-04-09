# Thirdparty

There are several ways for using thirdparty libraries in a C++ (CMake) project. Here is some of the common ways people use.



## 1. Header-only libraries

These are easy to use. Just copy the header files and place them in your project next to your own header files.

This method is slow in development, as you have to compile the header library everytime, and the size of your targets becomes big. Suppose you have to executables that use the same header library, both of them will have a copy of the library (compiled), which is bad.

 

## 2. By Installing in your system

Another way, is to [install](./basics#install--unisntall) the thirdparty package so it becomes available for the compiler, similar to the standard library for example (in system libraries). Then, in your `CMakeLists.txt` you use [find_package()](https://cmake.org/cmake/help/latest/command/find_package.html) CMake function. `find_package()` will search in multiple places including your system libraries.



#### Example: OpenCV in Ubuntu

One can install OpenCV library (it also come with executables/tools) using:

```bash
sudo apt install libopencv-dev
```

:::tip Note

There is a convention to name libraries this way, i.e. `lib<package name>-dev`

:::

Then, your `CMakeLists.txt` file can be as follows:

```cmake
cmake_minimum_required(VERSION 2.8)
project( Terimg )
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# here we include OpenCV cmake file
find_package( OpenCV REQUIRED )
include_directories( ${OpenCV_INCLUDE_DIRS} ${CMAKE_CURRENT_SOURCE_DIR}/include)

add_executable( terimg main.cpp converter.cpp)            
target_link_libraries( terimg ${OpenCV_LIBS} )

```

In the above snippet, `OpenCV_INCLUDE_DIRS` and `OpenCV_LIBS` are defined by the CMake file that was included/executed when we add the `find_package(OpenCV REQUIRED)` line.

This method is bad as it will clutter your system libraries.



## 3. Using cmake file of other packages

Another common way, is to add the cmake files of thirdparty packages to your project, and use `find_package()` to include them.

Example:

Check the following snippet from this [CMakeLists.txt](https://github.com/udacity/CppND-Route-Planning-Project/blob/39460d05c2f28e1e5b83a1dfb2d8cddcfa20cb65/CMakeLists.txt) file:

```cmake
# Add the path of the cmake files to the CMAKE_MODULE_PATH
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} ${CMAKE_SOURCE_DIR}/cmake)
```

This tells `CMake` to look for cmake files of thirdparty packages inside the local folder :file_folder: `cmake`. The full project can be found [here](https://github.com/udacity/CppND-Route-Planning-Project/tree/39460d05c2f28e1e5b83a1dfb2d8cddcfa20cb65). Notice the folder structure and the use of git submodules to include the source files of the thirdparty packages.



This method is nice, many thirdparty packages provide cmake files to be used, but some of them don't.



## 4. Using a Package Manager: Conan

Conan is a popular C++ package manager (can be abused to package many other things, Python, npm, etc..). Similar to other package managers, it consists of a remote server (called conan artifactory) hosting all Conan projects (thirdparty packages), and a client tool (conan CLI tool) that allows for fetching remote packages and compiling against them.

In your project, one needs to add an additional file call "Conan recipe", which defines your dependencies (and much more configs and meta data about your package). Then, the `conan` CLI tool can be used generate CMake files which you can include in your project `CMakeLists.txt` file.

Check this [example project](https://github.com/hasauino/cpp_template)  



This method is bay far the best. But Not all thirparty libraries are published as a Conan package. You also need to learn about [Conan](https://docs.conan.io)