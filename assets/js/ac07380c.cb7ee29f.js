"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[4434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Run with Docker",l={unversionedId:"installation/docker",id:"installation/docker",title:"Run with Docker",description:"Registries",source:"@site/docs/installation/docker.md",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/docker.md",tags:[],version:"current",lastUpdatedAt:1696408454,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install the Desktop application",permalink:"/docs/installation/desktop"},next:{title:"Run with the Jar file",permalink:"/docs/installation/jar"}},p={},s=[{value:"Registries",id:"registries",level:2},{value:"Version tags",id:"version-tags",level:2},{value:"Usage",id:"usage",level:2},{value:"docker",id:"docker",level:3},{value:"docker-compose",id:"docker-compose",level:3},{value:"Parameters",id:"parameters",level:2},{value:"User / Group Identifiers",id:"user--group-identifiers",level:2},{value:"Increase memory limit",id:"increase-memory-limit",level:2},{value:"Support info",id:"support-info",level:2},{value:"Updating",id:"updating",level:2},{value:"Via Docker Run/Create",id:"via-docker-runcreate",level:3},{value:"Via Docker Compose",id:"via-docker-compose",level:3},{value:"Automatic updates",id:"automatic-updates",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-with-docker"},"Run with Docker"),(0,r.kt)("h2",{id:"registries"},"Registries"),(0,r.kt)("p",null,"The Docker images are published on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/gotson/komga"},"DockerHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gotson/komga/pkgs/container/komga"},"ghcr.io"))),(0,r.kt)("h2",{id:"version-tags"},"Version tags"),(0,r.kt)("p",null,"This image provides various versions that are available via tags."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Tag")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"latest")),(0,r.kt)("td",{parentName:"tr",align:null},"latest commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MAJOR.x")),(0,r.kt)("td",{parentName:"tr",align:null},"latest ",(0,r.kt)("inlineCode",{parentName:"td"},"MAJOR")," version, for example ",(0,r.kt)("inlineCode",{parentName:"td"},"0.x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"x.y.z")),(0,r.kt)("td",{parentName:"tr",align:null},"version ",(0,r.kt)("inlineCode",{parentName:"td"},"x.y.z"))))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Here are some example snippets to help you get started creating a container."),(0,r.kt)("h3",{id:"docker"},"docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker create \\\n  --name=komga \\\n  --user 1000:1000 \\\n  -p 25600:25600 \\\n  --mount type=bind,source=/path/to/config,target=/config \\\n  --mount type=bind,source=/path/to/data,target=/data \\\n  --restart unless-stopped \\\n  gotson/komga\n")),(0,r.kt)("p",null,"Then start the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker start komga\n")),(0,r.kt)("h3",{id:"docker-compose"},"docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nversion: '3.3'\nservices:\n  komga:\n    image: gotson/komga\n    container_name: komga\n    volumes:\n      - type: bind\n        source: /path/to/config\n        target: /config\n      - type: bind\n        source: /path/to/data\n        target: /data\n      - type: bind\n        source: /etc/timezone #alternatively you can use a TZ environment variable, like TZ=Europe/London\n        target: /etc/timezone\n        read_only: true\n    ports:\n      - 25600:25600\n    user: \"1000:1000\"\n    # remove the whole environment section if you don't need it\n    environment:\n      - <ENV_VAR>=<extra configuration>\n    restart: unless-stopped\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Container images are configured using parameters passed at runtime (such as those above).\nThese parameters are separated by a colon and indicate ",(0,r.kt)("inlineCode",{parentName:"p"},"external:internal")," respectively.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 8080:80")," would expose port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," from inside the container to be accessible from the host's IP on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," outside the container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-p 25600")),(0,r.kt)("td",{parentName:"tr",align:null},"The port for the Komga APIs and web interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"--user: 1000:1000")),(0,r.kt)("td",{parentName:"tr",align:null},"User:Group identifier - see below for explanation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"--mount type=bind,source=/path/to/config,target=/config")),(0,r.kt)("td",{parentName:"tr",align:null},"Database and Komga configurations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"--mount type=bind,source=/path/to/data,target=/data")),(0,r.kt)("td",{parentName:"tr",align:null},"Location of your data directory on disk. Choose a folder that contains both your books and your preferred import location for hardlinks to work.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-e ENV_VAR=value")),(0,r.kt)("td",{parentName:"tr",align:null},"Any ",(0,r.kt)("a",{parentName:"td",href:"/docs/installation/configuration"},"configuration")," environment variable")))),(0,r.kt)("h2",{id:"user--group-identifiers"},"User / Group Identifiers"),(0,r.kt)("p",null,"When using volumes (",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user ID and group ID."),(0,r.kt)("p",null,"Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic."),(0,r.kt)("p",null,"In this instance ",(0,r.kt)("inlineCode",{parentName:"p"},"UID=1000")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GID=1000"),", to find yours use ",(0,r.kt)("inlineCode",{parentName:"p"},"id <your_user>")," as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ id <your_user>\n  uid=1000(jdoe) gid=1000(jdgroup) groups=1000(jdgroup)\n")),(0,r.kt)("h2",{id:"increase-memory-limit"},"Increase memory limit"),(0,r.kt)("p",null,"By default the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some ",(0,r.kt)("inlineCode",{parentName:"p"},"OutOfMemoryException")," in the logs you probably need to increase the maximum memory Komga can use."),(0,r.kt)("p",null,"To do so, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_TOOL_OPTIONS=-Xmx<limit>")," environment variable, where ",(0,r.kt)("inlineCode",{parentName:"p"},"<limit>")," can be any amount like ",(0,r.kt)("inlineCode",{parentName:"p"},"2048m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4g")," etc. For example to run Komga with a maximum of 4gb of memory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"JAVA_TOOL_OPTIONS=-Xmx4g\n")),(0,r.kt)("h2",{id:"support-info"},"Support info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shell access whilst the container is running: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker exec -it komga /bin/bash")),(0,r.kt)("li",{parentName:"ul"},"To monitor the logs of the container in realtime: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker logs -f komga"))),(0,r.kt)("h2",{id:"updating"},"Updating"),(0,r.kt)("p",null,"Below are the instructions for updating containers:"),(0,r.kt)("h3",{id:"via-docker-runcreate"},"Via Docker Run/Create"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update the image: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker pull gotson/komga")),(0,r.kt)("li",{parentName:"ul"},"Stop the running container: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker stop komga")),(0,r.kt)("li",{parentName:"ul"},"Delete the container: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker rm komga")),(0,r.kt)("li",{parentName:"ul"},"Recreate a new container with the same docker create parameters as instructed above (if mapped correctly to a host folder, your ",(0,r.kt)("inlineCode",{parentName:"li"},"/config")," folder and settings will be preserved)"),(0,r.kt)("li",{parentName:"ul"},"Start the new container: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker start komga")),(0,r.kt)("li",{parentName:"ul"},"You can also remove the old dangling images: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker image prune"))),(0,r.kt)("h3",{id:"via-docker-compose"},"Via Docker Compose"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update all images: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose pull"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or update a single image: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose pull komga")))),(0,r.kt)("li",{parentName:"ul"},"Let compose update all containers as necessary: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or update a single container: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up -d komga")))),(0,r.kt)("li",{parentName:"ul"},"You can also remove the old dangling images: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker image prune"))),(0,r.kt)("h3",{id:"automatic-updates"},"Automatic updates"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containrrr/watchtower"},"Watchtower")," to automatically update your containers."))}u.isMDXComponent=!0}}]);