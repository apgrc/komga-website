"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[4128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is Komga?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1694413270,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/docs/category/installation"}},s={},m=[{value:"What is Komga?",id:"what-is-komga",level:2},{value:"What media and devices work?",id:"what-media-and-devices-work",level:2},{value:"Komga supports these media file types",id:"komga-supports-these-media-file-types",level:3},{value:"Komga server compatibility",id:"komga-server-compatibility",level:3},{value:"Demo",id:"demo",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"what-is-komga"},"What is Komga?"),(0,a.kt)("p",null,"Komga is a media server for your comics, mangas, BDs and magazines."),(0,a.kt)("p",null,"How it works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install and run Komga on a computer or NAS."),(0,a.kt)("li",{parentName:"ol"},"Add libraries by type of content and let Komga do the rest."),(0,a.kt)("li",{parentName:"ol"},"Use the web interface or any compatible client."),(0,a.kt)("li",{parentName:"ol"},"Enjoy your books!")),(0,a.kt)("h2",{id:"what-media-and-devices-work"},"What media and devices work?"),(0,a.kt)("h3",{id:"komga-supports-these-media-file-types"},"Komga supports these media file types"),(0,a.kt)("p",null,"Komga supports the following file types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comic book archives: ",(0,a.kt)("em",{parentName:"li"},"CBZ")," and ",(0,a.kt)("em",{parentName:"li"},"CBR")," (except RAR5 and solid archives)"),(0,a.kt)("li",{parentName:"ul"},"Comic books in ",(0,a.kt)("em",{parentName:"li"},"EPUB")," format (only images)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"PDF")," files")),(0,a.kt)("h3",{id:"komga-server-compatibility"},"Komga server compatibility"),(0,a.kt)("p",null,"Komga can run on any system that can run Java or Docker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"macOS"),(0,a.kt)("li",{parentName:"ul"},"Linux"),(0,a.kt)("li",{parentName:"ul"},"Many popular NAS devices such as QNAP, Synology and more")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"A demonstration website is available at: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.komga.org"},"https://demo.komga.org")),(0,a.kt)("p",null,"You can log in using the following credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login: ",(0,a.kt)("inlineCode",{parentName:"li"},"demo@komga.org")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"komga-demo"))))}u.isMDXComponent=!0}}]);