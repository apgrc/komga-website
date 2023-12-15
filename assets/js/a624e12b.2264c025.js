"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3287],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(5773),a=(n(7378),n(5318));const i={},r="Social login",l={unversionedId:"installation/oauth2",id:"installation/oauth2",title:"Social login",description:"Komga supports social login via OAuth2 and OpenID Connect. In order for this to work, Komga needs to retrieve the user's email address via your provider, and will match it with the email of the Komga users.",source:"@site/docs/installation/oauth2.md",sourceDirName:"installation",slug:"/installation/oauth2",permalink:"/docs/installation/oauth2",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/oauth2.md",tags:[],version:"current",lastUpdatedAt:1702618466,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Expose your server",permalink:"/docs/installation/https"},next:{title:"Google Drive and rclone",permalink:"/docs/installation/gdrive"}},p={},c=[{value:"Guide for common providers",id:"guide-for-common-providers",level:2},{value:"Google",id:"google",level:3},{value:"Facebook",id:"facebook",level:3},{value:"Github",id:"github",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"social-login"},"Social login"),(0,a.kt)("p",null,"Komga supports social login via ",(0,a.kt)("strong",{parentName:"p"},"OAuth2")," and ",(0,a.kt)("strong",{parentName:"p"},"OpenID Connect"),". In order for this to work, Komga needs to retrieve the user's email address via your provider, and will match it with the email of the Komga users."),(0,a.kt)("p",null,"In order to setup social login, you will need to create an application in the developer portal of the social login provider of your choice (Google, Facebook, Github\u2026), and retrieve a ",(0,a.kt)("em",{parentName:"p"},"Client ID")," and ",(0,a.kt)("em",{parentName:"p"},"Client Secret"),". You will also need to configure a ",(0,a.kt)("em",{parentName:"p"},"Redirect URI")," in the application you created."),(0,a.kt)("p",null,"You can enable automatic account creation upon successful social login, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/configuration#komga-oauth2-account-creation-komga-oauth2-account-creation-true-false"},"here")," for more details."),(0,a.kt)("h2",{id:"guide-for-common-providers"},"Guide for common providers"),(0,a.kt)("p",null,"You can easily configure Google, Github, and Facebook without any complex configuration."),(0,a.kt)("h3",{id:"google"},"Google"),(0,a.kt)("p",null,"Follow the instructions on the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OpenIDConnect"},"OpenID Connect page"),', starting in the section, "Setting up OAuth 2.0".'),(0,a.kt)("p",null,'When asked for a "Redirect URI", use ',(0,a.kt)("inlineCode",{parentName:"p"},"{baseUrl}/login/oauth2/code/google"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," is your server's address."),(0,a.kt)("p",null,'After completing the "Obtain OAuth 2.0 credentials" instructions, you should have a new OAuth Client with credentials consisting of a Client ID and a Client Secret.'),(0,a.kt)("p",null,"Modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," as below and replace the values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"client-id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client-secret")," property with the OAuth 2.0 credentials you created earlier."),(0,a.kt)("p",null,"Sample configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          google:\n            client-id: 1044613984fsf335-mnsdvkjy3yf98294unfmnvd8.apps.googleusercontent.com\n            client-secret: jwhfkjhwefkn44t8vcxml3m\n")),(0,a.kt)("h3",{id:"facebook"},"Facebook"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/development/register"},"instructions")," to create an App, and add the Facebook Login product."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid OAuth Redirect URIs"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"{baseUrl}/login/oauth2/code/facebook"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," is your server's address."),(0,a.kt)("p",null,"Modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," as below and replace the values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"client-id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client-secret")," property with the App ID and App Secret."),(0,a.kt)("p",null,"Sample configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          facebook:\n            client-id: 227581266063919\n            client-secret: 47f03915334f49cdueru810069321964929\n")),(0,a.kt)("h3",{id:"github"},"Github"),(0,a.kt)("p",null,"Register a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/applications/new"},"new application"),"."),(0,a.kt)("p",null,'For the "Authorization callback URL", use ',(0,a.kt)("inlineCode",{parentName:"p"},"{baseUrl}/login/oauth2/code/github"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," is your server's address."),(0,a.kt)("p",null,"Generate a new Client Secret, you should now have a Client ID and Client Secret."),(0,a.kt)("p",null,"Modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," as below and replace the values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"client-id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client-secret")," property with the OAuth 2.0 credentials you created earlier."),(0,a.kt)("p",null,"Sample configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          github:\n            client-id: 62736jnfksui37384hnmsdnf\n            client-secret: jhjgfy67363uhif762328938844940e3e8c8629c18f9\n            scope: user:email\n")),(0,a.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("p",null,"You can configure any OAuth2 provider, but you will need to provide a more extensive configuration. The below example shows how to configure a Keycloak instance, but any provider could be configured in a similar fashion."),(0,a.kt)("p",null,"Modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," as below and replace the values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"client-id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client-secret")," property with your credentials You will also need to update the various URIs in the ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," section."),(0,a.kt)("p",null,"You need to make sure that the users have an email setup, and that it has been marked as verified."),(0,a.kt)("p",null,"When configuring the client in your provider, you may need to input a redirect URI. Use the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"{baseUrl}/login/oauth2/code/{registrationId}"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," is your server's address, and ",(0,a.kt)("inlineCode",{parentName:"p"},"registrationId")," is the name of the configuration key (",(0,a.kt)("inlineCode",{parentName:"p"},"keycloak")," in the below example)."),(0,a.kt)("p",null,"There are 2 options to configure a provider, either set ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer-uri")," or all of the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization-uri"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"token-uri"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"jwk-set-uri"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"user-info-uri"),". If your authentication server provides ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer-uri"),", this option is preferred."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"registration")," section contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," option, this must be the same name as specified in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," configuration. (In the example below, we've configured ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," with name ",(0,a.kt)("inlineCode",{parentName:"p"},"keycloak"),", so in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"registration")," section we set ",(0,a.kt)("inlineCode",{parentName:"p"},"provider: keycloak"),"). The name of the provider can be whatever you want, no need\nto use the service's name if you don't want to."),(0,a.kt)("p",null,"Sample configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          keycloak:\n            provider: keycloak # this must match the provider below\n            client-id: your-client-id\n            client-secret: c830e452-a2a9-40a0-93c1-eb84ea688245\n            client-name: Keycloak\n            scope: openid,email\n            authorization-grant-type: authorization_code\n            # the placeholders in {} will be replaced automatically, you don\'t need to change this line\n            redirect-uri: "{baseUrl}/{action}/oauth2/code/{registrationId}"\n        provider:\n          keycloak: # this must match the provider above\n            user-name-attribute: sub\n            # either set the issuer-uri, in which case the app will lookup the configuration for you automatically\n            issuer-uri: http://localhost:8085/auth/realms/komgatest\n            # or set all of the following\n            authorization-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/auth\n            token-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/token\n            jwk-set-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/certs\n            user-info-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/userinfo\n')))}d.isMDXComponent=!0}}]);