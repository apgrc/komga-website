(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{404:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"social-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#social-login"}},[t._v("#")]),t._v(" Social login "),a("Badge",{attrs:{text:"0.130.0+"}})],1),t._v(" "),a("p",[t._v("Komga supports social login via "),a("strong",[t._v("OAuth2")]),t._v(" and "),a("strong",[t._v("OpenID Connect")]),t._v(". In order for this to work, Komga needs to retrieve the user's email address via your provider, and will match it with the email of the Komga users.")]),t._v(" "),a("p",[t._v("In order to setup social login, you will need to create an application in the developer portal of the social login provider of your choice (Google, Facebook, Github…), and retrieve a "),a("em",[t._v("Client ID")]),t._v(" and "),a("em",[t._v("Client Secret")]),t._v(". You will also need to configure a "),a("em",[t._v("Redirect URI")]),t._v(" in the application you created.")]),t._v(" "),a("h2",{attrs:{id:"guide-for-common-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-for-common-providers"}},[t._v("#")]),t._v(" Guide for common providers")]),t._v(" "),a("p",[t._v("You can easily configure Google, Github, and Facebook without any complex configuration.")]),t._v(" "),a("h3",{attrs:{id:"google"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google"}},[t._v("#")]),t._v(" Google")]),t._v(" "),a("p",[t._v("Follow the instructions on the "),a("a",{attrs:{href:"https://developers.google.com/identity/protocols/OpenIDConnect",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect page"),a("OutboundLink")],1),t._v(', starting in the section, "Setting up OAuth 2.0".')]),t._v(" "),a("p",[t._v('When asked for a "Redirect URI", use '),a("code",[t._v("{baseUrl}/login/oauth2/code/google")]),t._v(", where "),a("code",[t._v("baseUrl")]),t._v(" is your server's address.")]),t._v(" "),a("p",[t._v('After completing the "Obtain OAuth 2.0 credentials" instructions, you should have a new OAuth Client with credentials consisting of a Client ID and a Client Secret.')]),t._v(" "),a("p",[t._v("Modify your "),a("code",[t._v("application.yml")]),t._v(" as below and replace the values in the "),a("code",[t._v("client-id")]),t._v(" and "),a("code",[t._v("client-secret")]),t._v(" property with the OAuth 2.0 credentials you created earlier.")]),t._v(" "),a("p",[t._v("Sample configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oauth2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1044613984fsf335"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mnsdvkjy3yf98294unfmnvd8.apps.googleusercontent.com\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jwhfkjhwefkn44t8vcxml3m\n")])])]),a("h2",{attrs:{id:"facebook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#facebook"}},[t._v("#")]),t._v(" Facebook")]),t._v(" "),a("p",[t._v("Follow the "),a("a",{attrs:{href:"https://developers.facebook.com/docs/development/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions"),a("OutboundLink")],1),t._v(" to create an App, and add the Facebook Login product.")]),t._v(" "),a("p",[t._v("In the "),a("code",[t._v("Valid OAuth Redirect URIs")]),t._v(", use "),a("code",[t._v("{baseUrl}/login/oauth2/code/facebook")]),t._v(", where "),a("code",[t._v("baseUrl")]),t._v(" is your server's address.")]),t._v(" "),a("p",[t._v("Modify your "),a("code",[t._v("application.yml")]),t._v(" as below and replace the values in the "),a("code",[t._v("client-id")]),t._v(" and "),a("code",[t._v("client-secret")]),t._v(" property with the App ID and App Secret.")]),t._v(" "),a("p",[t._v("Sample configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oauth2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("facebook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("227581266063919")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 47f03915334f49cdueru810069321964929\n")])])]),a("h3",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" Github")]),t._v(" "),a("p",[t._v("Register a "),a("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("new application"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v('For the "Authorization callback URL", use '),a("code",[t._v("{baseUrl}/login/oauth2/code/github")]),t._v(", where "),a("code",[t._v("baseUrl")]),t._v(" is your server's address.")]),t._v(" "),a("p",[t._v("Generate a new Client Secret, you should now have a Client ID and Client Secret.")]),t._v(" "),a("p",[t._v("Modify your "),a("code",[t._v("application.yml")]),t._v(" as below and replace the values in the "),a("code",[t._v("client-id")]),t._v(" and "),a("code",[t._v("client-secret")]),t._v(" property with the OAuth 2.0 credentials you created earlier.")]),t._v(" "),a("p",[t._v("Sample configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oauth2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 62736jnfksui37384hnmsdnf\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jhjgfy67363uhif762328938844940e3e8c8629c18f9\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("email\n")])])]),a("h2",{attrs:{id:"advanced-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration"}},[t._v("#")]),t._v(" Advanced configuration")]),t._v(" "),a("p",[t._v("You can configure any OAuth2 provider, but you will need to provide a more extensive configuration. The below example shows how to configure a Keycloak instance, but any provider could be configured in a similar fashion.")]),t._v(" "),a("p",[t._v("Modify your "),a("code",[t._v("application.yml")]),t._v(" as below and replace the values in the "),a("code",[t._v("client-id")]),t._v(" and "),a("code",[t._v("client-secret")]),t._v(" property with your credentials You will also need to update the various URIs in the "),a("code",[t._v("provider")]),t._v(" section.")]),t._v(" "),a("p",[t._v("You need to make sure that the users have an email setup, and that it has been marked as verified.")]),t._v(" "),a("p",[t._v("When configuring the client in your provider, you may need to input a redirect URI. Use the following: "),a("code",[t._v("{baseUrl}/login/oauth2/code/{registrationId}")]),t._v(", where "),a("code",[t._v("baseUrl")]),t._v(" is your server's address, and "),a("code",[t._v("registrationId")]),t._v(" is the name of the configuration key ("),a("code",[t._v("keycloak")]),t._v(" in the below example).")]),t._v(" "),a("p",[t._v("Sample configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oauth2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keycloak")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("id\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" c830e452"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("a2a9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("40a0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("93c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eb84ea688245\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Keycloak\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("email\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authorization-grant-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" authorization_code\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redirect-uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{baseUrl}/{action}/oauth2/code/{registrationId}"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keycloak")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authorization-uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8085/auth/realms/komgatest/protocol/openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("connect/auth\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token-uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8085/auth/realms/komgatest/protocol/openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("connect/token\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jwk-set-uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8085/auth/realms/komgatest/protocol/openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("connect/certs\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-info-uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8085/auth/realms/komgatest/protocol/openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("connect/userinfo\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-name-attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sub\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);