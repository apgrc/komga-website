"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[4119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Duplicate Pages",l={unversionedId:"guides/duplicate-pages",id:"guides/duplicate-pages",title:"Duplicate Pages",description:"Komga can detect duplicate pages among your books, and delete them manually or automatically.",source:"@site/docs/guides/duplicate-pages.md",sourceDirName:"guides",slug:"/guides/duplicate-pages",permalink:"/docs/guides/duplicate-pages",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/duplicate-pages.md",tags:[],version:"current",lastUpdatedAt:1694413270,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Duplicate Files",permalink:"/docs/guides/duplicate-files"},next:{title:"Readers",permalink:"/docs/category/readers"}},p={},s=[{value:"Browsing New Duplicates",id:"browsing-new-duplicates",level:2},{value:"Browsing Known Duplicates",id:"browsing-known-duplicates",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"duplicate-pages"},"Duplicate Pages"),(0,r.kt)("p",null,"Komga can detect duplicate pages among your books, and delete them manually or automatically."),(0,r.kt)("p",null,"You need to enable ",(0,r.kt)("a",{parentName:"p",href:"libraries#compute-hash-for-pages"},"page hashing")," for your libraries."),(0,r.kt)("p",null,"You can manage duplicate pages from ",(0,r.kt)("em",{parentName:"p"},"Server Settings > Duplicate Pages"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Duplicate page removal will modify your files.")),(0,r.kt)("p",{parentName:"admonition"},"It is recommended to perform a backup, and to try using manual deletion before using automatic deletion.")),(0,r.kt)("h2",{id:"browsing-new-duplicates"},"Browsing New Duplicates"),(0,r.kt)("p",null,"This screen will show all the newly detected duplicate pages. You can sort them by ",(0,r.kt)("em",{parentName:"p"},"Count")," of duplicates, ",(0,r.kt)("em",{parentName:"p"},"Size")," of the image, or the ",(0,r.kt)("em",{parentName:"p"},"Total Size")," you could save by deleting it."),(0,r.kt)("img",{src:"/assets/media/guides/duplicate-pages/duplicate-pages-new.png",style:{maxHeight:" 400px"},alt:"Browse New Duplicates"}),(0,r.kt)("p",null,"For each duplicate page, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Ignore"),": It won't show anymore on this page, and Komga won't do anything about it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Manual Delete"),": You will be able to trigger manual deletion from the ",(0,r.kt)("em",{parentName:"li"},"Known")," view."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Auto Delete"),": Komga will automatically remove those pages after a library scan.")),(0,r.kt)("p",null,"You can also see the detailed list of matches by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Matches")," button. It will show all the books containing the duplicate page, as well as the image for each, so you can perform a visual check. You can also delete matches individually."),(0,r.kt)("h2",{id:"browsing-known-duplicates"},"Browsing Known Duplicates"),(0,r.kt)("p",null,"This screen will show all the duplicate pages for which you chose an action. You can sort them by ",(0,r.kt)("em",{parentName:"p"},"Deletion Count")," , ",(0,r.kt)("em",{parentName:"p"},"Size")," of the image, or the ",(0,r.kt)("em",{parentName:"p"},"Space Saved")," so far."),(0,r.kt)("img",{src:"/assets/media/guides/duplicate-pages/duplicate-pages-known.png",style:{maxHeight:" 400px"},alt:"Browse Known Duplicates"}),(0,r.kt)("p",null,"For each page, you can change the action. You can ",(0,r.kt)("em",{parentName:"p"},"Ignore")," a page that was set for deletion, or mark an ignored one for deletion, if you changed your mind."),(0,r.kt)("p",null,"For pages set for ",(0,r.kt)("em",{parentName:"p"},"Manual Delete"),", you can trigger the deletion using the ",(0,r.kt)("em",{parentName:"p"},"Delete Matches")," button."))}m.isMDXComponent=!0}}]);