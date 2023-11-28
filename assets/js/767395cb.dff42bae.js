"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[3526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Expose your server",s={unversionedId:"installation/https",id:"installation/https",title:"Expose your server",description:"HTTPS",source:"@site/docs/installation/https.md",sourceDirName:"installation",slug:"/installation/https",permalink:"/docs/installation/https",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/https.md",tags:[],version:"current",lastUpdatedAt:1701165617,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration options",permalink:"/docs/installation/configuration"},next:{title:"Social login",permalink:"/docs/installation/oauth2"}},p={},l=[{value:"HTTPS",id:"https",level:2},{value:"Reverse proxy",id:"reverse-proxy",level:2},{value:"Caddy (v1)",id:"caddy-v1",level:3},{value:"Caddy (v2)",id:"caddy-v2",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expose-your-server"},"Expose your server"),(0,o.kt)("h2",{id:"https"},"HTTPS"),(0,o.kt)("p",null,"If you want to open your Komga server outside your local network, it is strongly advised to secure it with ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," (especially due to the use of http basic authentication)."),(0,o.kt)("p",null,"Spring Boot supports ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," out of the box, but you will have to configure it, and ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," is most useful only with valid certificates (not self-signed), which most people don't readily have available."),(0,o.kt)("p",null,"I recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy")," as a reverse proxy, as it supports the automatic generation of ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," certificates."),(0,o.kt)("h2",{id:"reverse-proxy"},"Reverse proxy"),(0,o.kt)("p",null,"Here are some sample configuration on how to configure reverse proxy for Komga."),(0,o.kt)("h3",{id:"caddy-v1"},"Caddy (v1)"),(0,o.kt)("p",null,"Without a base URL configured in Komga, using a subdomain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"komga.yourdomain.com {\n  proxy / http://your-komga-server:25600 {\n    transparent\n  }\n}\n")),(0,o.kt)("p",null,"With a base URL configured in Komga:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yourdomain.com {\n  proxy /komga http://your-komga-server:25600 {\n    transparent\n  }\n}\n")),(0,o.kt)("h3",{id:"caddy-v2"},"Caddy (v2)"),(0,o.kt)("p",null,"Without a base URL configured in Komga, using a subdomain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"komga.yourdomain.com {\n  reverse_proxy http://your-komga-server:25600\n}\n")),(0,o.kt)("p",null,"With a base URL configured in Komga:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yourdomain.com {\n  reverse_proxy /komga/* http://your-komga-server:25600\n}\n")))}d.isMDXComponent=!0}}]);