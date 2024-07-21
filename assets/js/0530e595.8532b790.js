"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[30],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const l={},o="Concurrency",i={unversionedId:"C++/concurrency",id:"C++/concurrency",title:"Concurrency",description:"Running Threads",source:"@site/docs/C++/concurrency.md",sourceDirName:"C++",slug:"/C++/concurrency",permalink:"/notes/C++/concurrency",draft:!1,editUrl:"https://github.com/hasauino/notes/edit/master/docs/C++/concurrency.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"My Personal Notes",permalink:"/notes/"},next:{title:"Debugging",permalink:"/notes/C++/debugging"}},s={},d=[{value:"Running Threads",id:"running-threads",level:2},{value:"Detach",id:"detach",level:3},{value:"Thread with normal functions",id:"thread-with-normal-functions",level:3},{value:"Thread with Functors",id:"thread-with-functors",level:3},{value:"Thread with Lambda",id:"thread-with-lambda",level:3},{value:"Threads &amp; Variadic templates",id:"threads--variadic-templates",level:3},{value:"Starting threads with member functions",id:"starting-threads-with-member-functions",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"concurrency"},"Concurrency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <thread>\n\nvoid callback() {\n    std::cout << "callback..." << std::endl;\n}\n\n\nvoid example() {\n    std::thread thread{callback};\n    thread.join();\n}\n')),(0,r.kt)("h2",{id:"running-threads"},"Running Threads"),(0,r.kt)("p",null,"Threads can execute any callable in parallel to the main thread. A callable can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A function (or function pointer)"),(0,r.kt)("li",{parentName:"ul"},"A lambda expression (in-line anonymous function)."),(0,r.kt)("li",{parentName:"ul"},"An object that overloads the call operator")),(0,r.kt)("p",null,'Lambdas and callable objects are also known as "',(0,r.kt)("strong",{parentName:"p"},"Functors"),'".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get hardware threads:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void example(){\n    unsigned int n_threads = std::thread::hardware_concurrency();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get thread ID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::thread::get_id();\n")),(0,r.kt)("h3",{id:"detach"},"Detach"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets ",(0,r.kt)("inlineCode",{parentName:"li"},"joinable")," to false and suppress error if thread is destructed before finishing execution."),(0,r.kt)("li",{parentName:"ul"},"Detached threads can never be joined again."),(0,r.kt)("li",{parentName:"ul"},"OS will terminate detached threads harshly without giving them enough time to do proper clean-up (not waiting for destructor). ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <chrono>\n#incldue <thread>\n#include <iostream>\n\nusing namespace chono_literals;\n\nvoid example(){\n    std::thread thread([](){\n        std::this_thread::sleep_for(500ms);\n    });\n    \n    thread.detach();\n    \n    std::cout << "Done main thread" << std::endl;\n}\n\n')),(0,r.kt)("h3",{id:"thread-with-normal-functions"},"Thread with normal functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// simple\nvoid callback(){}\nstd::thread thread{callback};\n\n// with args\nvoid callback(const std::string& msg){}\nstd::thread thread{callback, "hello"};\n')),(0,r.kt)("h3",{id:"thread-with-functors"},"Thread with Functors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'class Foo {\n   private:\n   public:\n    Foo() {}\n\n    void operator()() { std::cout << "Foo called!" << std::endl; }\n};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It could be ambiguous for the C++ compiler to parse an expression, as in the following case:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"}," Foo f();\n")),(0,r.kt)("p",null,"This can be a deceleration of ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," function that returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo"),". Or can be a instantiation of ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," . To resolve such ambiguity, the following can be done:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Foo f{};  // use uniform initialization\nauto f = Foo(); // use copy initialization\n")),(0,r.kt)("h3",{id:"thread-with-lambda"},"Thread with Lambda"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::thread thread{[](){\n    std::cout << "hello!" << std::endl;\n}};\n')),(0,r.kt)("p",null,"Lambda can take different forms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// simple lambda \nauto hello = [](){\n    std::cout << "hello" << std::endl;\n};\n\n// omitted (), possible only when not using "mutable" specifier\nauto hello2 = []{\n    std::cout << "hello" << std::endl;\n};\n\nhello();\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// with parameters\nauto add = [](int a, int b){\n    std::cout << a+b << std::endl;\n};\n\nadd(1, 2);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// with capture list - by value\n\nint a=10, b=20;\n\nauto add = [a, b](){\n    std::cout << a+b << std::endl;\n};\n\n// by value, mutable (can change a)\nauto add = [a, b]() mutable {\n    a++;\n    std::cout << a+b << std::endl;\n};\n\n\nadd();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// with capture list - by reference\n\nint a=10, b=20;\n\nauto add = [&a, &b](){\n    std::cout << a+b << std::endl;\n}\n\nadd(); // object created from a lambda is called a "closure" \n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// with return value (explicitly defined)\nauto sum = [](int a, int b) -> int{\n    return a+b;\n};\n\n// with return value (auto-deduction of return type)\nauto sum = [](int a, int b){\n    return a+b;\n};\n")),(0,r.kt)("p",null,"The object created from a lambda expression is called ",(0,r.kt)("strong",{parentName:"p"},"closure"),"."),(0,r.kt)("h3",{id:"threads--variadic-templates"},"Threads & Variadic templates"),(0,r.kt)("p",null,"The thread constructor is a variadic template function. So we can pass as many arguments as the callback function needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void callback(const std::string& msg){}\n\nstd::thread thread{callback, "hello!"};\n')),(0,r.kt)("p",null,"When passing arguments to variadic functions, the behavior is slightly different than that of a normal function. Arguments are passed by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copying (if passed argument is an lvalue)."),(0,r.kt)("li",{parentName:"ul"},"Moving (if passed argument is an rvalue)."),(0,r.kt)("li",{parentName:"ul"},"To move an ",(0,r.kt)("inlineCode",{parentName:"li"},"lvalue"),", you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"std::move")),(0,r.kt)("li",{parentName:"ul"},"To force pass by reference, we have to use ",(0,r.kt)("inlineCode",{parentName:"li"},"std::ref()"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string msg{"hello there!"};\n\nstd::thread thread{callback, std::ref(msg)};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"std::ref")," can also be used with ",(0,r.kt)("inlineCode",{parentName:"li"},"std::bind")," to pass args by reference.")),(0,r.kt)("h3",{id:"starting-threads-with-member-functions"},"Starting threads with member functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <memory>\n#include <thread>\n#include <vector>\n\nclass Dog {\n   public:\n    Dog(const std::string& name) : _name{name} {}\n    void make_sound() {\n        std::cout << "Dog " << this->_name << " Says: Wo Wo WO" << std::endl;\n    }\n\n   private:\n    std::string _name;\n};\n\nint main() {\n    Dog dog{"Cesar"};\n    std::thread thread{&Dog::make_sound, dog}; // a copy is made for dog\n    std::thread thread{&Dog::make_sound, &dog}; // by reference\n    thread.join();\n    return 0;\n}\n')),(0,r.kt)("p",null,"Better approach is to used heap-allocated object while making sure it's life is longer than the thread. Good choice is a shared pointer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'auto dog = std::make_shared<Dog>("Cesar");\nstd::thread thread{&Dog::make_sound, dog};\n')))}u.isMDXComponent=!0}}]);