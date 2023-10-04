"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[2239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||s;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={},i="User accounts",l={unversionedId:"guides/user-accounts",id:"guides/user-accounts",title:"User accounts",description:"The administrator of a Komga server has the ability to create other User Accounts for that server.",source:"@site/docs/guides/user-accounts.md",sourceDirName:"guides",slug:"/guides/user-accounts",permalink:"/docs/guides/user-accounts",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/user-accounts.md",tags:[],version:"current",lastUpdatedAt:1696408454,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Local Artwork Assets",permalink:"/docs/guides/local-artwork-assets"},next:{title:"Read progress",permalink:"/docs/guides/read-progress"}},o={},c=[{value:"Creating Users",id:"creating-users",level:2},{value:"User Roles",id:"user-roles",level:2},{value:"Administrator",id:"administrator",level:3},{value:"Page Streaming",id:"page-streaming",level:3},{value:"File Download",id:"file-download",level:3},{value:"Shared Libraries",id:"shared-libraries",level:2},{value:"Content Restrictions",id:"content-restrictions",level:2},{value:"Age Rating",id:"age-rating",level:3},{value:"Labels",id:"labels",level:3},{value:"Multiple restrictions",id:"multiple-restrictions",level:3},{value:"Deleting Users",id:"deleting-users",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-accounts"},"User accounts"),(0,n.kt)("p",null,"The administrator of a Komga server has the ability to create other User Accounts for that server."),(0,n.kt)("p",null,"You can manage Users in ",(0,n.kt)("em",{parentName:"p"},"Server Settings > Users"),"."),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/users-management.png",style:{maxHeight:"300px"},alt:"Users management"}),(0,n.kt)("h2",{id:"creating-users"},"Creating Users"),(0,n.kt)("p",null,"You can add a user by clicking on the ",(0,n.kt)("em",{parentName:"p"},"+")," button."),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/add-user.png",style:{maxHeight:"200px"},alt:"Add User"}),(0,n.kt)("p",null,"A dialog will show up. Fill in all the required information, and press ",(0,n.kt)("em",{parentName:"p"},"Add"),"."),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/add-user-dialog.png",style:{maxHeight:"400px"},alt:"Add User Dialog"}),(0,n.kt)("h2",{id:"user-roles"},"User Roles"),(0,n.kt)("p",null,"Users can have different roles, giving them the ability to do certain things."),(0,n.kt)("h3",{id:"administrator"},"Administrator"),(0,n.kt)("p",null,"An administrator can perform all the management actions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add, edit, and delete libraries"),(0,n.kt)("li",{parentName:"ul"},"add, edit, and delete users"),(0,n.kt)("li",{parentName:"ul"},"add, edit, and delete collections"),(0,n.kt)("li",{parentName:"ul"},"edit series and book metadata"),(0,n.kt)("li",{parentName:"ul"},"manually scan, analyze and refresh metadata")),(0,n.kt)("h3",{id:"page-streaming"},"Page Streaming"),(0,n.kt)("p",null,"A user with this role will be able to stream individual pages, for example to read using the Webreader."),(0,n.kt)("h3",{id:"file-download"},"File Download"),(0,n.kt)("p",null,"A user with this role will be able to download the file of a book."),(0,n.kt)("h2",{id:"shared-libraries"},"Shared Libraries"),(0,n.kt)("p",null,"An administrator can limit what libraries users can access. This is done via the ",(0,n.kt)("em",{parentName:"p"},"Edit Restrictions")," button."),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/edit-libraries.png",style:{maxHeight:"50px"},alt:"Edit Restrictions"}),(0,n.kt)("p",null,"Choose the libraries the user will be able to access, or select ",(0,n.kt)("em",{parentName:"p"},"All libraries")," for unrestricted access (default option)."),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/edit-libraries-dialog.png",style:{maxHeight:"400px"},alt:"Edit Shared Libraries"}),(0,n.kt)("h2",{id:"content-restrictions"},"Content Restrictions"),(0,n.kt)("p",null,"Content restrictions lets you control more finely the content you share. You can select specific age rating as well as content that you\u2019ve set with a specific Label."),(0,n.kt)("p",null,"Content restriction is performed at series level, and will also apply to books, collections and reading lists. "),(0,n.kt)("h3",{id:"age-rating"},"Age Rating"),(0,n.kt)("p",null,"Select which age rating you wish to only allow or exclude. For instance, if you choose to only allow content under 10 as the restriction, then only content that has an age rating of 10 or under will be shared . If you choose to exclude content over 16 then those will be hidden."),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/restriction-age-allow.png",style:{maxHeight:"400px"},alt:"Age Restriction Allow under"}),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/restriction-age-exclude.png",style:{maxHeight:"400px"},alt:"Age Restriction Exclude over"}),(0,n.kt)("h3",{id:"labels"},"Labels"),(0,n.kt)("p",null,"You can create arbitrary Labels when editing library content. When sharing, you can then choose to allow one or more Labels to have content matching those Labels shared. You can also exclude labels."),(0,n.kt)("p",null,"Labels are defined on Series:"),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/series-sharing.png",style:{maxHeight:"400px"},alt:"Edit Shared Libraries"}),(0,n.kt)("h3",{id:"multiple-restrictions"},"Multiple restrictions"),(0,n.kt)("p",null,"When combining multiple restrictions, the following rules apply:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Exclusion rules have always priority over allow rules."),(0,n.kt)("li",{parentName:"ul"},"Allow rules apply with an ",(0,n.kt)("em",{parentName:"li"},"OR"),' condition: for example allowing a user to access content rated 10 or under, or labelled "kids", the user will be able to access content matching one or the other.')),(0,n.kt)("img",{src:"/assets/media/guides/user-accounts/restrictions-dialog.png",style:{maxHeight:"400px"},alt:"Edit Restrictions"}),(0,n.kt)("h2",{id:"deleting-users"},"Deleting Users"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Deleting a user will remove all read progress for this user."),(0,n.kt)("p",{parentName:"admonition"},"This cannot be undone.")))}p.isMDXComponent=!0}}]);