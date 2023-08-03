"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[5671],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(i),u=a,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||n;return i?r.createElement(h,o(o({ref:t},m),{},{components:i})):r.createElement(h,o({ref:t},m))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<n;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5888:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=i(7462),a=(i(7294),i(3905));const n={},o="Read with Tachiyomi",s={unversionedId:"guides/tachiyomi",id:"guides/tachiyomi",title:"Read with Tachiyomi",description:"Install and configure",source:"@site/docs/guides/tachiyomi.md",sourceDirName:"guides",slug:"/guides/tachiyomi",permalink:"/docs/guides/tachiyomi",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/tachiyomi.md",tags:[],version:"current",lastUpdatedAt:1691031594,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Read with the Webreader",permalink:"/docs/guides/webreader"},next:{title:"Read with Paperback",permalink:"/docs/guides/paperback"}},c={},l=[{value:"Install and configure",id:"install-and-configure",level:2},{value:"Browse",id:"browse",level:2},{value:"Track read progress",id:"track-read-progress",level:2},{value:"Changelog and Compatibility",id:"changelog-and-compatibility",level:2}],m={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"read-with-tachiyomi"},"Read with Tachiyomi"),(0,a.kt)("h2",{id:"install-and-configure"},"Install and configure"),(0,a.kt)("p",null,"Komga has an official extension for ",(0,a.kt)("a",{parentName:"p",href:"https://tachiyomi.org"},"Tachiyomi"),", available from within Tachiyomi's extension menu."),(0,a.kt)("p",null,"Once installed, the extension will let you configure up to 3 Komga servers."),(0,a.kt)("img",{src:"/assets/media/guides/tachiyomi/tachiyomi-extension-info.png",style:{maxHeight:"600px"},alt:"Tachiyomi extension info"}),(0,a.kt)("img",{src:"/assets/media/guides/tachiyomi/tachiyomi-configuration.png",style:{maxHeight:"600px"},alt:"Tachiyomi extension configuration"}),(0,a.kt)("p",null,"You will need to configure the extension with your ",(0,a.kt)("em",{parentName:"p"},"server address"),", ",(0,a.kt)("em",{parentName:"p"},"username")," and ",(0,a.kt)("em",{parentName:"p"},"password")," before you can use it."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Example server address: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://my.server:25600(/baseUrl)")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Note that there is no trailing slash (",(0,a.kt)("inlineCode",{parentName:"strong"},"/"),")."))),(0,a.kt)("h2",{id:"browse"},"Browse"),(0,a.kt)("p",null,"You can browse series, use the filter menu, and search for series."),(0,a.kt)("img",{src:"/assets/media/guides/tachiyomi/tachiyomi-browse.png",style:{maxHeight:"500px"},alt:"Tachiyomi extension browse"}),(0,a.kt)("img",{src:"/assets/media/guides/tachiyomi/tachiyomi-filters.png",style:{maxHeight:"500px"},alt:"Tachiyomi extension filters"}),(0,a.kt)("img",{src:"/assets/media/guides/tachiyomi/tachiyomi-search.png",style:{maxHeight:"500px"},alt:"Tachiyomi extension search"}),(0,a.kt)("h2",{id:"track-read-progress"},"Track read progress"),(0,a.kt)("p",null,"Tachiyomi starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"0.12.1")," can keep your read progress in sync with your Komga server. Check the official Tachiyomi website for ",(0,a.kt)("a",{parentName:"p",href:"https://tachiyomi.org/help/guides/tracking/#what-is-tracking"},"instructions"),"."),(0,a.kt)("p",null,"Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tachiyomi ",(0,a.kt)("inlineCode",{parentName:"li"},"0.12.1+")),(0,a.kt)("li",{parentName:"ul"},"Komga ",(0,a.kt)("inlineCode",{parentName:"li"},"0. 95.2+")),(0,a.kt)("li",{parentName:"ul"},"Tachiyomi Komga extension ",(0,a.kt)("inlineCode",{parentName:"li"},"1.2.24+"))),(0,a.kt)("h2",{id:"changelog-and-compatibility"},"Changelog and Compatibility"),(0,a.kt)("p",null,"Each version of the Komga extension need a specific version of the Komga server to work properly. Check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/inorichi/tachiyomi-extensions/blob/master/src/all/komga/CHANGELOG.md"},"CHANGELOG")," for more information."))}d.isMDXComponent=!0}}]);