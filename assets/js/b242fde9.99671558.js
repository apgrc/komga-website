"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[5647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={},l="Duplicate Files",o={unversionedId:"guides/duplicate-files",id:"guides/duplicate-files",title:"Duplicate Files",description:"Komga can detect duplicate files among your books.",source:"@site/docs/guides/duplicate-files.md",sourceDirName:"guides",slug:"/guides/duplicate-files",permalink:"/docs/guides/duplicate-files",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/duplicate-files.md",tags:[],version:"current",lastUpdatedAt:1688953387,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Import Books",permalink:"/docs/guides/import-books"},next:{title:"Duplicate Pages",permalink:"/docs/guides/duplicate-pages"}},s={},c=[{value:"Browsing Duplicate Files",id:"browsing-duplicate-files",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"duplicate-files"},"Duplicate Files"),(0,i.kt)("p",null,"Komga can detect duplicate files among your books."),(0,i.kt)("p",null,"You need to enable ",(0,i.kt)("a",{parentName:"p",href:"libraries#compute-hash-for-files"},"file hashing")," for your libraries."),(0,i.kt)("p",null,"You can manage duplicate pages from ",(0,i.kt)("em",{parentName:"p"},"Server Settings > Duplicate Files"),"."),(0,i.kt)("h2",{id:"browsing-duplicate-files"},"Browsing Duplicate Files"),(0,i.kt)("p",null,"This screen will show all the duplicate files."),(0,i.kt)("img",{src:"/assets/media/guides/duplicate-files/duplicate-files.png",style:{maxHeight:" 400px"},alt:"Browse Duplicate Files"}),(0,i.kt)("p",null,"You can direcly delete a duplicate file by clicking on the trashcan icon."))}d.isMDXComponent=!0}}]);