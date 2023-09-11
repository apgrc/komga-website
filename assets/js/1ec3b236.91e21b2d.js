"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[7021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="Command Line Interface",i={unversionedId:"guides/cli",id:"guides/cli",title:"Command Line Interface",description:"Komga offers a few commands available from the command line.",source:"@site/docs/guides/cli.md",sourceDirName:"guides",slug:"/guides/cli",permalink:"/docs/guides/cli",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/cli.md",tags:[],version:"current",lastUpdatedAt:1694413270,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Announcements",permalink:"/docs/guides/announcements"},next:{title:"Contribution",permalink:"/docs/contribution"}},s={},u=[{value:"How to use?",id:"how-to-use",level:2},{value:"With the <code>jar</code> file",id:"with-the-jar-file",level:3},{value:"With docker run",id:"with-docker-run",level:3},{value:"With docker-compose",id:"with-docker-compose",level:3},{value:"Available commands",id:"available-commands",level:2},{value:"List users",id:"list-users",level:3},{value:"Reset password for a user",id:"reset-password-for-a-user",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,a.kt)("p",null,"Komga offers a few commands available from the command line."),(0,a.kt)("h2",{id:"how-to-use"},"How to use?"),(0,a.kt)("p",null,"You just need to append the command to the command line. Note that Komga will still start and run as usual."),(0,a.kt)("h3",{id:"with-the-jar-file"},"With the ",(0,a.kt)("inlineCode",{parentName:"h3"},"jar")," file"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar komga-x.y.z.jar --list-users\n")),(0,a.kt)("h3",{id:"with-docker-run"},"With docker run"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run ghcr.io/gotson/komga:latest --list-users\n")),(0,a.kt)("h3",{id:"with-docker-compose"},"With docker-compose"),(0,a.kt)("p",null,"You can override the ",(0,a.kt)("inlineCode",{parentName:"p"},"command"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  komga:\n    image: gotson/komga:latest\n    command: --newpassword=toto --reset=admin@example.org\n")),(0,a.kt)("h2",{id:"available-commands"},"Available commands"),(0,a.kt)("h3",{id:"list-users"},"List users"),(0,a.kt)("p",null,"Command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-users")),(0,a.kt)("p",null,"This will output all the users configured in the database. The output will be shown in the console or the logs."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2023-08-02T13:41:45.215+08:00  INFO 1979 --- [           main] o.g.k.i.apprunner.ListUsersRunner        : Here is a list of all users: [admin@example.org, jacky@example.org]")),(0,a.kt)("h3",{id:"reset-password-for-a-user"},"Reset password for a user"),(0,a.kt)("p",null,"Command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--reset=user@domain.com --newpassword=YourNewPassword")),(0,a.kt)("p",null,"This will reset the password for the specified user."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2023-08-02T13:50:42.998+08:00  INFO 2806 --- [           main] o.g.k.i.apprunner.PasswordResetRunner    : Reset password for user: admin@example.org")))}d.isMDXComponent=!0}}]);