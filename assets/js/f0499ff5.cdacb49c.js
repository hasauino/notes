"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const l={},r="Basics",o={unversionedId:"CMake/basics",id:"CMake/basics",title:"Basics",description:"CMake is a tool that generates Makefiles from a given CmakeLists.txt file. Once Cmake is invoked for a given directory, cmake will search for CMakeLists.txt file in that directory, and will generate the Makefiles. The user can then invoke make to build the project. The generated Make files will do every step of the build process: compiling into object files and linking (by invoking configured/default compiler).",source:"@site/docs/CMake/basics.md",sourceDirName:"CMake",slug:"/CMake/basics",permalink:"/notes/CMake/basics",draft:!1,editUrl:"https://github.com/hasauino/notes/edit/master/docs/CMake/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector",permalink:"/notes/C++/vector"},next:{title:"Thirdparty",permalink:"/notes/CMake/thirdparty"}},s={},c=[{value:"Install &amp; Unisntall",id:"install--unisntall",level:2},{value:"Install",id:"install",level:4},{value:"Uninstall",id:"uninstall",level:4},{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics"},"Basics"),(0,i.kt)("p",null,"CMake is a tool that generates Makefiles from a given ",(0,i.kt)("inlineCode",{parentName:"p"},"CmakeLists.txt")," file. Once ",(0,i.kt)("inlineCode",{parentName:"p"},"Cmake")," is invoked for a given directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake")," will search for ",(0,i.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file in that directory, and will generate the Makefiles. The user can then invoke make to build the project. The generated Make files will do every step of the build process: compiling into object files and linking (by invoking configured/default compiler)."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"to learn more about make, ",(0,i.kt)("a",{parentName:"p",href:"https://makefiletutorial.com/"},"this")," link is the best reference. Make is a very powerful tool that can be used beyond build C++ files.")),(0,i.kt)("p",null,"CMake actually can also generate files for other build systems beyond make (ex: ninja). Ideally, you can build a CMake project independently from the underlaying build system, with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --build .\n")),(0,i.kt)("h2",{id:"install--unisntall"},"Install & Unisntall"),(0,i.kt)("h4",{id:"install"},"Install"),(0,i.kt)("p",null,"Once a project is built, it can be installed using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,i.kt)("p",null,"installation is basically copying build targets (shared libraries, or executables, etc..) to locations where compilers use when they search for libraries. In linux for example one of the locations is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/local/lib/\n")),(0,i.kt)("p",null,"it also copies header files. Example locations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/include/\n")),(0,i.kt)("h4",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"Some projects add an uninstall target in the generated make files, so you can simply do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make uninstall\n")),(0,i.kt)("p",null,"if ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall")," target is not added. You would need to remove added files manually. To get a list of all the files that were added, check the ",(0,i.kt)("inlineCode",{parentName:"p"},"install_manifest.txt")," file. It shows a list of all the files that were added"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In all operating systems, installation is about copying libraries and executables to the system, and sometimes also involves defining environment variables. In windows this is also the case. The developer must ensure that all necessary dependencies are present on any machine that has the target os installed. Shipping software \ud83d\udea2 \ud83d\ude80")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmake"},"cmake_minimum_required(VERSION 3.5.1)  # cmake version\nproject(exmaple)  # every cmake project should have a name\nset(CMAKE_CXX_STANDARD 17)  # set CMAKE_CXX_STANDARD environment variable\n\nadd_executable(example src/vect_add_one.cpp src/main.cpp src/increment_and_sum.cpp)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CMAKE_CXX_STANDARD")," environment variable is used by the compiler to select the C++ standard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"add_executable"),": the order of ",(0,i.kt)("inlineCode",{parentName:"p"},".cpp")," files does not matter, compiler will search in this pool of source files for ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," function. It will search for implementations in this pool. So order does not matter."))))}d.isMDXComponent=!0}}]);