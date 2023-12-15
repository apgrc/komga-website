"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9112],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(5773),o=(r(7378),r(5318));const a={},i="Google Drive and rclone",l={unversionedId:"installation/gdrive",id:"installation/gdrive",title:"Google Drive and rclone",description:"If your books are stored on Google Drive, you can use Plexdrive or rclone to make them accessible to Komga.",source:"@site/docs/installation/gdrive.md",sourceDirName:"installation",slug:"/installation/gdrive",permalink:"/docs/installation/gdrive",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/gdrive.md",tags:[],version:"current",lastUpdatedAt:1702618466,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Social login",permalink:"/docs/installation/oauth2"},next:{title:"Guides",permalink:"/docs/category/guides"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-drive-and-rclone"},"Google Drive and rclone"),(0,o.kt)("p",null,"If your books are stored on Google Drive, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/plexdrive/plexdrive"},"Plexdrive")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rclone.org/"},"rclone")," to make them accessible to Komga."),(0,o.kt)("p",null,"You will need to configure your library to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/libraries#force-directory-modified-time"},"force the directory modified time"),"."),(0,o.kt)("p",null,"Rclone requires some specific configuration to cache files locally, and work better with Komga.\nHere is a user-provided configuration that works well (thanks Magikarp):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rclone mount <name>:<path> <mount_point/folder> \\\n  --no-checksum \\\n  --use-server-modtime \\\n  --no-gzip-encoding \\\n  --no-update-modtime \\\n  --no-seek \\\n  --modify-window 2m \\\n  --allow-other \\\n  --allow-non-empty \\\n  --dir-cache-time 30m \\\n  --cache-read-retries 15 \\\n  --cache-db-purge \\\n  --timeout 30m \\\n  --vfs-cache-mode full \\\n  --vfs-read-chunk-size 2M \\\n  --vfs-read-chunk-size-limit 5M \\\n  --vfs-cache-max-age 30m \\\n  --attr-timeout 20s \\\n  --poll-interval 9m \\\n  --vfs-cache-poll-interval 10m\n")))}d.isMDXComponent=!0}}]);