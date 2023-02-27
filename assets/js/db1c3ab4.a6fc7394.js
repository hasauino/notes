"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,v=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},l="Essential Operations",s={unversionedId:"C++/essential_operations",id:"C++/essential_operations",title:"Essential Operations",description:"Copying",source:"@site/docs/C++/essential_operations.md",sourceDirName:"C++",slug:"/C++/essential_operations",permalink:"/notes/C++/essential_operations",draft:!1,editUrl:"https://github.com/hasauino/notes/edit/master/docs/C++/essential_operations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"My Personal Notes",permalink:"/notes/"},next:{title:"C++ Tips + Style",permalink:"/notes/C++/modern_cpp"}},a={},c=[{value:"Copying",id:"copying",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"essential-operations"},"Essential Operations"),(0,o.kt)("h2",{id:"copying"},"Copying"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <algorithm>\n#include <initializer_list>\n#include "spdlog/spdlog.h"\n\nclass Vector {\n public:\n  Vector(int _size) : size{_size}, elem{new double[_size]} {};\n  ~Vector() {\n    spdlog::info("destructor..");\n    delete[] elem;\n  }\n  Vector(std::initializer_list<double> elem_)\n      : size{static_cast<int>(elem_.size())}, elem{new double[elem_.size()]} {\n    std::copy(elem_.begin(), elem_.end(), elem);\n  }\n\n  Vector(const Vector& v) : size{v.size}, elem{new double[v.size]} {\n    spdlog::info("copy constructor..");\n    std::copy(v.elem, v.elem + size, elem);\n  }\n\n  const double& operator[](int indx) const { return elem[indx]; }\n  double& operator[](int indx) { return elem[indx]; }\n\n  Vector& operator=(const Vector& v) {\n    double* temp = new double[v.size];\n    std::copy(v.elem, v.elem + v.size, temp);\n    delete[] elem;\n    elem = temp;\n    size = v.size;\n    return *this;\n  }\n\n private:\n  double* elem;\n  int size = 0;\n};\n\nint main(int argc, char** argv) {\n  Vector v({1.0, 2.0, 3.0});\n  Vector vv(v);\n  Vector vvv({100, 22, 33, 44, 55});\n  vvv = v;\n  auto vvvv =\n      v;  // this will call copy constructor (if u add "explicit" it will raise an error)\n  v[0] = 12345;\n  spdlog::info("{}        {}          {}", v[0], vv[0], vvv[0]);\n  return 0;\n}\n')))}u.isMDXComponent=!0}}]);