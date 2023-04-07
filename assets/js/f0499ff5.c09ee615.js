"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Basics",l={unversionedId:"CMake/basics",id:"CMake/basics",title:"Basics",description:"CMake is a tool that generates Makefiles from a given CmakeLists.txt file. Once Cmake is invoked for a given directory, cmake will search for CMakeLists.txt file in that directory, and will generate the Makefiles. The user can then invoke make to build the project. The generated Make files will do every step of the build process: compiling into object files and linking (by invoking configured/default compiler).",source:"@site/docs/CMake/basics.md",sourceDirName:"CMake",slug:"/CMake/basics",permalink:"/notes/CMake/basics",draft:!1,editUrl:"https://github.com/hasauino/notes/edit/master/docs/CMake/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector",permalink:"/notes/C++/vector"},next:{title:"APT",permalink:"/notes/Ubuntu/apt"}},s={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics"},"Basics"),(0,a.kt)("p",null,"CMake is a tool that generates Makefiles from a given ",(0,a.kt)("inlineCode",{parentName:"p"},"CmakeLists.txt")," file. Once ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmake")," is invoked for a given directory, ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake")," will search for ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file in that directory, and will generate the Makefiles. The user can then invoke make to build the project. The generated Make files will do every step of the build process: compiling into object files and linking (by invoking configured/default compiler)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"to learn more about make, ",(0,a.kt)("a",{parentName:"p",href:"https://makefiletutorial.com/"},"this")," link is the best reference. Make is a very powerful tool that can be used beyond build C++ files.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"cmake_minimum_required(VERSION 3.5.1)  # cmake version\nproject(exmaple)  # every cmake project should have a name\nset(CMAKE_CXX_STANDARD 17)  # set CMAKE_CXX_STANDARD environment variable\n\nadd_executable(example src/vect_add_one.cpp src/main.cpp src/increment_and_sum.cpp)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CMAKE_CXX_STANDARD")," environment variable is used by the compiler to select the C++ standard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"add_executable"),": the order of ",(0,a.kt)("inlineCode",{parentName:"p"},".cpp")," files does not matter, compiler will search in this pool of source files for ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function. It will search for implementations in this pool. So order does not matter."))))}m.isMDXComponent=!0}}]);