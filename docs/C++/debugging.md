# Debugging



## GNU Debugger (`gdb`)

You can configure the compiler to enable debug mode. In `g++` this can be done as follows:

```bash
g++ -g <cpp files>
```

In CMake, it can be done as follows:

```bash
cmake -DCMAKE_BUILD_TYPE=debug ..
```

Once files are compiled in debug mode, you can use `gdb` to add break point, watch variables, etc..

In vscode, you can simply add a debug configuration file that launches gdb for the binary you just compiled in debug mode. Example debug configuration file may look as follows:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "gdb test",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceFolder}/build/test",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}/",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                },
                {
                    "description": "Set Disassembly Flavor to Intel",
                    "text": "-gdb-set disassembly-flavor intel",
                    "ignoreFailures": true
                }
            ]
        }
    ]
}
```



## Valgrind Memcheck

To check for memory leaks, `Memcheck` tool that comes with Valgrind can be used.

Example command:

```bash
valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes --log-file=valgrind-out.txt a.out

```

