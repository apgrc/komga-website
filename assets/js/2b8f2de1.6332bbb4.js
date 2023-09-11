"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[9925],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),d=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(r),u=n,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return r?a.createElement(k,l(l({ref:e},s),{},{components:r})):a.createElement(k,l({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:n,l[1]=p;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7574:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={},l="Read with any OPDS reader",p={unversionedId:"guides/opds",id:"guides/opds",title:"Read with any OPDS reader",description:"Komga should work with any OPDS reader, unfortunately most readers badly implement the OPDS protocol.",source:"@site/docs/guides/opds.md",sourceDirName:"guides",slug:"/guides/opds",permalink:"/docs/guides/opds",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/opds.md",tags:[],version:"current",lastUpdatedAt:1694413270,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Read with CDisplayEx",permalink:"/docs/guides/cdisplayex"},next:{title:"Read with Panels on iOS",permalink:"/docs/guides/panels"}},i={},d=[],s={toc:d},m="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"read-with-any-opds-reader"},"Read with any OPDS reader"),(0,n.kt)("p",null,"Komga should work with any OPDS reader, unfortunately most readers badly implement the OPDS protocol."),(0,n.kt)("p",null,"Komga supports OPDS v1 and v2, the URL should be configured accordingly:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OPDS v1: ",(0,n.kt)("inlineCode",{parentName:"li"},"http(s)://your-server(:25600)(/baseUrl)/opds/v1.2/catalog")),(0,n.kt)("li",{parentName:"ul"},"OPDS v2: ",(0,n.kt)("inlineCode",{parentName:"li"},"http(s)://your-server(:25600)(/baseUrl)/opds/v2/catalog"))),(0,n.kt)("p",null,"Here is a list of reader applications that have been tested:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"OS"),(0,n.kt)("th",{parentName:"tr",align:null},"App name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Status"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OpenSearch support"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Page streaming support"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Android"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=org.geometerplus.zlibrary.ui.android"},"FBReader: Favorite Book Reader")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c Can't download CBR/CBZ, only PDF. PDF only supported in Premium version. Does not remember password."),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Android"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=com.flyersoft.moonreader"},"Moon+ Reader")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Android"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=com.foobnix.pdf.reader"},"Librera")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Android"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=com.obreey.reader"},"PocketBook")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c Doesn't show CBR/CBZ"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iOS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://kybook-reader.com/"},"KyBook 3")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"center"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iOS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://chunkyreader.com/"},"Chunky Comic Reader")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"OPDS PSE 1.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iOS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://panels.app/"},"Panels")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Yes"),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"(v2.8.2+)")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"OPDS PSE 1.0")," (v2.8.0+)",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"OPDS PSE 1.1")," (v2.9.7+)")))),(0,n.kt)("p",null,"The OPDS feed also supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OpenSearch functionality, to search by ",(0,n.kt)("inlineCode",{parentName:"li"},"Series")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://anansi-project.github.io/docs/opds-pse/intro"},"OPDS Page Streaming Extension 1.2"))))}c.isMDXComponent=!0}}]);