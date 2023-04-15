#  C++



## IntelliSense Configurations (C/C++ plugin)

- <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd>, search of `C/C++ Edit configurations (UI)`. You can change C++ standard there as well

https://code.visualstudio.com/docs/cpp/config-linux



## C++ Configuration

```json
{
    "configurations": [
        {
            "name": "Linux",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [],
            "compilerPath": "/usr/bin/g++",
            "cStandard": "c17",
            "intelliSenseMode": "linux-clang-x64",
            "compileCommands": "${config:cmake.buildDirectory}/compile_commands.json",
            "configurationProvider": "ms-vscode.makefile-tools"
        }
    ],
    "version": 4
}
```



this line:

```json
"compileCommands": "${config:cmake.buildDirectory}/compile_commands.json",
```

will allow vs code to navigate and fine project header files.

this line:

```json
"compilerPath": "/usr/bin/g++",
```

allows vscode to find C++ standard library recognized by the compiler.



## Formatting

After installing C++ extension, you can add `.clang-format` to the workspace, or define it globally somewhere else. To define it globally: 

- Go to settings and search for `clang_format_style`
- define the path to your Clang file, example:

```
file:/home/hassan/.clang-format
```

