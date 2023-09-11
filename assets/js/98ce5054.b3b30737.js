"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[8209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="Local Artwork Assets",s={unversionedId:"guides/local-artwork-assets",id:"guides/local-artwork-assets",title:"Local Artwork Assets",description:"Supported Artwork Image Formats",source:"@site/docs/guides/local-artwork-assets.md",sourceDirName:"guides",slug:"/guides/local-artwork-assets",permalink:"/docs/guides/local-artwork-assets",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/local-artwork-assets.md",tags:[],version:"current",lastUpdatedAt:1694413270,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Edit Metadata",permalink:"/docs/guides/edit-metadata"},next:{title:"User accounts",permalink:"/docs/guides/user-accounts"}},i={},p=[{value:"Supported Artwork Image Formats",id:"supported-artwork-image-formats",level:2},{value:"Poster Artwork",id:"poster-artwork",level:2},{value:"Books",id:"books",level:4},{value:"Series",id:"series",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-artwork-assets"},"Local Artwork Assets"),(0,o.kt)("h2",{id:"supported-artwork-image-formats"},"Supported Artwork Image Formats"),(0,o.kt)("p",null,"There are a number of supported custom media items that need to be named correctly to be detected. The supported image file formats are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"jpg"),(0,o.kt)("li",{parentName:"ul"},"jpeg"),(0,o.kt)("li",{parentName:"ul"},"png"),(0,o.kt)("li",{parentName:"ul"},"tbn")),(0,o.kt)("h2",{id:"poster-artwork"},"Poster Artwork"),(0,o.kt)("p",null,"Posters are typically displayed for books, series and collections on dashboards, library views, and when looking at details for the element. Poster art is typically of 21:29.7 aspect ratio. Custom Poster artwork will be detected and used if named and stored as follows."),(0,o.kt)("h4",{id:"books"},"Books"),(0,o.kt)("p",null,"Custom poster must have the same name as the book file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Exact book name.ext"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ext")," is the file extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Series\n  Book 10.cbz\n  Book 10.jpg\n")),(0,o.kt)("p",null,"More than one poster image can be included. For multiple items to be scanned, they should be named as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Exact book name-X.ext"))),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"-X")," is a number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Series\n  Book 12.cbz\n  Book 12-1.jpg\n  Book 12-2.png\n")),(0,o.kt)("h4",{id:"series"},"Series"),(0,o.kt)("p",null,"Custom poster must be located in the Series directory and named as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cover.ext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default.ext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"folder.ext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"series.ext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"poster.ext"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ext")," is the file extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Series\n  poster.jpg\n")))}d.isMDXComponent=!0}}]);