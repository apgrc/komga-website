"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=o,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const i={},r="Configuration options",l={unversionedId:"installation/configuration",id:"installation/configuration",title:"Configuration options",description:"Komga has sensible default values for all configuration keys. You only need to configure it if you want to change the default behaviour.",source:"@site/docs/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/docs/installation/configuration",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/configuration.md",tags:[],version:"current",lastUpdatedAt:1694413270,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install via third-party integrations",permalink:"/docs/installation/thirdparty"},next:{title:"Expose your server",permalink:"/docs/installation/https"}},s={},m=[{value:"Optional configuration",id:"optional-configuration",level:2},{value:"KOMGA_CONFIGDIR / komga.config-dir: <code>&lt;directory&gt;</code>",id:"komga_configdir--komgaconfig-dir-directory",level:4},{value:"SERVER_PORT / server.port: <code>&lt;port&gt;</code>",id:"server_port--serverport-port",level:4},{value:"SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: <code>&lt;baseUrl&gt;</code>",id:"server_servlet_context_path--serverservletcontext-path-baseurl",level:4},{value:"KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: <code>&lt;cron&gt;</code>",id:"komga_libraries_scan_cron--komgalibraries-scan-cron-cron",level:4},{value:"KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: <code>&lt;true/false&gt;</code>",id:"komga_libraries_scan_startup--komgalibraries-scan-startup-truefalse",level:4},{value:"KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: <code>&lt;exclusions&gt;</code>",id:"komga_libraries_scan_directory_exclusions--komgalibraries-scan-directory-exclusions-exclusions",level:4},{value:"KOMGA_REMEMBERME_KEY / komga.remember-me.key: <code>&lt;key&gt;</code>",id:"komga_rememberme_key--komgaremember-mekey-key",level:4},{value:"KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: <code>&lt;duration&gt;</code>",id:"komga_rememberme_validity--komgaremember-mevalidity-duration",level:4},{value:"KOMGA_SESSIONTIMEOUT / komga.session-timeout: <code>&lt;duration&gt;</code>",id:"komga_sessiontimeout--komgasession-timeout-duration",level:4},{value:"KOMGA_DATABASE_FILE / komga.database.file: <code>&lt;file path&gt;</code>",id:"komga_database_file--komgadatabasefile-file-path",level:4},{value:"KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: <code>&lt;origins&gt;</code>",id:"komga_cors_allowed_origins--komgacorsallowed-origins-origins",level:4},{value:"KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: <code>&lt;true/false&gt;</code>",id:"komga_delete_empty_collections--komgadelete-empty-collections-truefalse",level:4},{value:"KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: <code>&lt;true/false&gt;</code>",id:"komga_delete_empty_read_lists--komgadelete-empty-read-lists-truefalse",level:4},{value:"KOMGA_FILE_HASHING / komga.file-hashing: <code>&lt;true/false&gt;</code>",id:"komga_file_hashing--komgafile-hashing-truefalse",level:4},{value:"KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: <code>&lt;true/false&gt;</code>",id:"komga_oauth2_account_creation--komgaoauth2-account-creation-truefalse",level:4},{value:"KOMGA_OIDC_EMAIL_VERIFICATION / komga.oidc-email-verification: <code>&lt;true/false&gt;</code>",id:"komga_oidc_email_verification--komgaoidc-email-verification-truefalse",level:4},{value:"LOGGING_FILE_NAME / logging.file.name: <code>&lt;logfile name&gt;</code>",id:"logging_file_name--loggingfilename-logfile-name",level:4},{value:"KOMGA_TASKCONSUMERS / komga.task-consumers: <code>&lt;int&gt;</code>",id:"komga_taskconsumers--komgatask-consumers-int",level:4},{value:"KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: <code>&lt;int&gt;</code>",id:"komga_taskconsumersmax--komgatask-consumers-max-int",level:4},{value:"Sample Configuration File",id:"sample-configuration-file",level:2},{value:"Database performance",id:"database-performance",level:2}],c={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-options"},"Configuration options"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Komga has sensible default values for all configuration keys. You only need to configure it if you want to change the default behaviour."),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," file does not exist by default, you need to create one if you want to customize the configuration.")),(0,o.kt)("p",null,"Komga relies heavily on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html"},"Spring Boot's configuration"),", leveraging ",(0,o.kt)("inlineCode",{parentName:"p"},"profiles")," and configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"properties"),"."),(0,o.kt)("p",null,"The easiest way to configure is either via environment variables (a good fit for ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),") or by using an ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," file located in the configuration directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Docker image will load any ",(0,o.kt)("inlineCode",{parentName:"li"},"application.yml")," file located in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/config")," mounted folder."),(0,o.kt)("li",{parentName:"ul"},"The Jar will load any ",(0,o.kt)("inlineCode",{parentName:"li"},"application.yml")," file located in the ",(0,o.kt)("inlineCode",{parentName:"li"},"komga.config-dir")," directory (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.komga"),", ",(0,o.kt)("a",{parentName:"li",href:"#komga-configdir-komga-config-dir-directory"},"more details"),").")),(0,o.kt)("p",null,"Each configuration key can have a different format depending if it's from the environment variable, or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," file. In the following section I will provide both format in the form ",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT_VARIABLE")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"application-property"),"."),(0,o.kt)("p",null,"You can also specify configuration via the command line, when launching the ",(0,o.kt)("inlineCode",{parentName:"p"},"jar"),". Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"application-property")," form, and prefix with ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'java -jar komga.jar --server.servlet.context-path="/komga" --server.port=8443\n')),(0,o.kt)("h2",{id:"optional-configuration"},"Optional configuration"),(0,o.kt)("p",null,"You can use some optional configuration keys:"),(0,o.kt)("h4",{id:"komga_configdir--komgaconfig-dir-directory"},"KOMGA_CONFIGDIR / komga.config-dir: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<directory>")),(0,o.kt)("p",null,"The Komga configuration directory. Will be used to store the logs, database, and any other file Komga needs."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.komga"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," is your home directory on Unix, and your User profile on Windows."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"When overriding this configuration, you need to use ",(0,o.kt)("inlineCode",{parentName:"em"},"${user.home}")," instead of ",(0,o.kt)("inlineCode",{parentName:"em"},"~")," (this is a specific Spring Boot variable).")),(0,o.kt)("h4",{id:"server_port--serverport-port"},"SERVER_PORT / server.port: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<port>")),(0,o.kt)("p",null,"Port to listen to for the API and web interface."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"25600"),"."),(0,o.kt)("h4",{id:"server_servlet_context_path--serverservletcontext-path-baseurl"},"SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<baseUrl>")),(0,o.kt)("p",null,"Base URL, useful if you need to reverse proxy with a subfolder."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("h4",{id:"komga_libraries_scan_cron--komgalibraries-scan-cron-cron"},"KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<cron>")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/scheduling/support/CronSequenceGenerator.html"},"Spring cron expression")," for libraries periodic scans.\nFor example ",(0,o.kt)("inlineCode",{parentName:"p"},"0 0 * * * ?")," will rescan every hour. ",(0,o.kt)("inlineCode",{parentName:"p"},"0 */15 * * * ?")," will rescan every 15 minutes."),(0,o.kt)("p",null,"To disable the periodic scan, set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"0 0 */8 * * ?")," (every 8 hours)."),(0,o.kt)("h4",{id:"komga_libraries_scan_startup--komgalibraries-scan-startup-truefalse"},"KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<true/false>")),(0,o.kt)("p",null,"A boolean indicating if Komga should scan your libraries at startup."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h4",{id:"komga_libraries_scan_directory_exclusions--komgalibraries-scan-directory-exclusions-exclusions"},"KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<exclusions>")),(0,o.kt)("p",null,"A list of patterns to exclude directories from the scan. If the full path contains any of the patterns, the directory will be ignored. If using the environment variable you need to use a comma-separated list."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"#recycle,@eaDir,@Recycle"),"."),(0,o.kt)("h4",{id:"komga_rememberme_key--komgaremember-mekey-key"},"KOMGA_REMEMBERME_KEY / komga.remember-me.key: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<key>")),(0,o.kt)("p",null,"If set, the remember-me auto-login feature will be activated, and will generate a cookie with encoded login information to perform auto-login. Set ",(0,o.kt)("inlineCode",{parentName:"p"},"<key>")," to any random string."),(0,o.kt)("p",null,"Not set by default, you need to set it to enable this feature."),(0,o.kt)("h4",{id:"komga_rememberme_validity--komgaremember-mevalidity-duration"},"KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<duration>")),(0,o.kt)("p",null,"The validity of the generated remember-me cookie. You can specify the timeunit, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"14d")," for 14 days, or ",(0,o.kt)("inlineCode",{parentName:"p"},"24h")," for 24 hours. If no unit is set, seconds will be used."),(0,o.kt)("p",null,"Defaults to 2 weeks."),(0,o.kt)("h4",{id:"komga_sessiontimeout--komgasession-timeout-duration"},"KOMGA_SESSIONTIMEOUT / komga.session-timeout: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<duration>")),(0,o.kt)("p",null,"The duration after which an inactive session will expire. You can specify the timeunit, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"14d")," for 14 days, or ",(0,o.kt)("inlineCode",{parentName:"p"},"24h")," for 24 hours. If no unit is set, seconds will be used."),(0,o.kt)("p",null,"Defaults to 7 days."),(0,o.kt)("h4",{id:"komga_database_file--komgadatabasefile-file-path"},"KOMGA_DATABASE_FILE / komga.database.file: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<file path>")),(0,o.kt)("p",null,"File path for the SQLite database."),(0,o.kt)("p",null,"If you want to change the directory, it is advised to change ",(0,o.kt)("inlineCode",{parentName:"p"},"komga.config-dir")," instead."),(0,o.kt)("p",null,"Defaults to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\${komga.config-dir}/database.sqlite")," for ",(0,o.kt)("em",{parentName:"li"},"Jar"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/config/database.sqlite")," for ",(0,o.kt)("em",{parentName:"li"},"Docker"),".")),(0,o.kt)("h4",{id:"komga_cors_allowed_origins--komgacorsallowed-origins-origins"},"KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<origins>")),(0,o.kt)("p",null,"A list of origins to allow for CORS."),(0,o.kt)("p",null,"Defaults to empty list."),(0,o.kt)("h4",{id:"komga_delete_empty_collections--komgadelete-empty-collections-truefalse"},"KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<true/false>")),(0,o.kt)("p",null,"A boolean indicating if Komga should delete empty collections after a scan."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"komga_delete_empty_read_lists--komgadelete-empty-read-lists-truefalse"},"KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<true/false>")),(0,o.kt)("p",null,"A boolean indicating if Komga should delete empty read lists after a scan."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"komga_file_hashing--komgafile-hashing-truefalse"},"KOMGA_FILE_HASHING / komga.file-hashing: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<true/false>")),(0,o.kt)("p",null,"This has been moved to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/libraries#compute-hash-for-files"},"Library options"),"."),(0,o.kt)("h4",{id:"komga_oauth2_account_creation--komgaoauth2-account-creation-truefalse"},"KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<true/false>")),(0,o.kt)("p",null,"A boolean indicating whether Komga should create new users when a login via OAuth2/OIDC succeeds, but there is no existing user with that email."),(0,o.kt)("p",null,"Such users will be created with a random password, which the user can subsequently change from the ",(0,o.kt)("em",{parentName:"p"},"Account Settings")," page later on, for example to be able to connect using OPDS or Tachiyomi."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to enable this only with OAuth2 providers you control")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h4",{id:"komga_oidc_email_verification--komgaoidc-email-verification-truefalse"},"KOMGA_OIDC_EMAIL_VERIFICATION / komga.oidc-email-verification: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<true/false>")),(0,o.kt)("p",null,"A boolean indicating whether Komga should check whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"email_verified")," claim is present and true in the OpenID Connect request."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to disable this only with OIDC providers that do not verify emails (like Azure AD)")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"logging_file_name--loggingfilename-logfile-name"},"LOGGING_FILE_NAME / logging.file.name: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<logfile name>")),(0,o.kt)("p",null,"Name of the log file."),(0,o.kt)("p",null,"If you want to change the directory, it is advised to change ",(0,o.kt)("inlineCode",{parentName:"p"},"komga.config-dir")," instead."),(0,o.kt)("p",null,"Defaults to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\${komga.config-dir}/komga.log")," for ",(0,o.kt)("em",{parentName:"li"},"Jar"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/config/logs/komga.log")," for ",(0,o.kt)("em",{parentName:"li"},"Docker"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"When overriding this configuration, you need to use ",(0,o.kt)("inlineCode",{parentName:"em"},"${user.home}")," instead of ",(0,o.kt)("inlineCode",{parentName:"em"},"~")," (this is a specific Spring Boot variable).")),(0,o.kt)("h4",{id:"komga_taskconsumers--komgatask-consumers-int"},"KOMGA_TASKCONSUMERS / komga.task-consumers: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<int>")),(0,o.kt)("p",null,"The initial number of thread that will consume tasks. Must be positive and lower or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"komga.task-consumers-max"),"."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("h4",{id:"komga_taskconsumersmax--komgatask-consumers-max-int"},"KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: ",(0,o.kt)("inlineCode",{parentName:"h4"},"<int>")),(0,o.kt)("p",null,"The maximum number of thread that will consume tasks. Must be positive and greater or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"komga.task-consumers"),"."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("h2",{id:"sample-configuration-file"},"Sample Configuration File"),(0,o.kt)("p",null,"Here is a sample ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," file in case you need to customize it. Keep only the lines you need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Only keep lines that are relevant to you!\n# Lines starting with # are comments\n# Make sure indentation is correct (2 spaces at every indentation level), yaml is very sensitive!\nkomga:\n  libraries-scan-cron: "0 0 */8 * * ?"  # periodic scan every 8 hours\n  libraries-scan-cron: "-"              # disable periodic scan\n  libraries-scan-startup: false         # scan libraries at startup\n  libraries-scan-directory-exclusions:  # patterns to exclude directories from the scan\n    - "#recycle" # synology NAS recycle bin\n    - "@eaDir"   # synology NAS index/metadata folders\n    - "@Recycle" # QNAP NAS recycle bin\n  remember-me:\n    key: changeMe!    # required to activate the remember-me auto-login via cookies\n    validity: 30d     # validity of the cookie in seconds, here 30 days\n  session-timeout: 7d # session timeout, here 7 days\n  database:\n    file: ${user.home}/.komga/database.sqlite\n  cors.allowed-origins:\n    - http://localhost:8081\n    - http://localhost:8082\n  delete-empty-collections: true\n  delete-empty-read-lists: true\nserver:\n  port: 25600\n  servlet.context-path: /komga\n')),(0,o.kt)("h2",{id:"database-performance"},"Database performance"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Use at your own risk!")),(0,o.kt)("p",null,"Some specific configuration keys are available to tweak the database performance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"komga:\n  database:\n    # sets the retry timeout when SQLITE_BUSY error happens\n    busy-timeout: 30s\n    \n    # changes the journal mode\n    # accepted values are: DELETE, TRUNCATE, PERSIST, MEMORY, WAL, OFF\n    # most likely to be set to wal if needed, check https://sqlite.org/wal.html for more details\n    journal-mode: wal\n    \n    # pool size will determine the number of connections in the pool\n    # this takes precedence over max-pool-size if set\n    # defaults to undefined\n    pool-size: 1\n    \n    # max-pool-size will determine the maximum number of connections in the pool\n    # when set, the number of connections is set to the number of available processors capped at max-pool-size\n    # defaults to 1\n    max-pool-size: 8\n    \n    # pragmas accepts a list of key/value pairs where:\n    # - key is the pragma name (see https://www.sqlite.org/pragma.html)\n    # - value is the pragma value\n    pragmas:\n      # here are some example pragmas\n      page_size: 1024\n      synchronous: OFF\n")))}p.isMDXComponent=!0}}]);