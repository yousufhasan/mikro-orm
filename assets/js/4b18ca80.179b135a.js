(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),m=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=m(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),l=m(t),O=a,u=l["".concat(i,".").concat(O)]||l[O]||d[O]||b;return t?r.a.createElement(u,p(p({ref:n},o),{},{components:t})):r.a.createElement(u,p({ref:n},o))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var b=t.length,i=new Array(b);i[0]=O;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<b;o++)i[o]=t[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},395:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),b=(t(0),t(1253)),i={id:"knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.knex-1.mssqlconnectionconfig",id:"api/interfaces/knex.knex-1.mssqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MsSqlConnectionConfig",description:"Interface: MsSqlConnectionConfig",source:"@site/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.mssqlconnectionconfig",permalink:"/docs/next/api/interfaces/knex.knex-1.mssqlconnectionconfig",editUrl:null,version:"current",sidebar_label:"MsSqlConnectionConfig",sidebar:"API",previous:{title:"Interface: MigratorConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.migratorconfig"},next:{title:"Interface: MultikeyForeignConstraintBuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"connectionTimeout",id:"connectiontimeout",children:[]},{value:"database",id:"database",children:[]},{value:"domain",id:"domain",children:[]},{value:"driver",id:"driver",children:[]},{value:"options",id:"options",children:[]},{value:"parseJSON",id:"parsejson",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"server",id:"server",children:[]},{value:"stream",id:"stream",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],o={toc:c};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-mssqlconnectionconfig"},"Interface: MsSqlConnectionConfig"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".MsSqlConnectionConfig"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MsSqlConnectionConfig"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"connectiontimeout"},"connectionTimeout"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"connectionTimeout"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1907"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"database"},"database"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"database"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1906"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"domain"},"domain"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"domain"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1905"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1900"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"options"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"p"},"abortTransactionOnError?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"appName?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"enableArithAbort?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"encrypt?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"instanceName?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"isolationLevel?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"READ_UNCOMMITTED")," ","|"," ",Object(b.b)("em",{parentName:"p"},"READ_COMMITTED")," ","|"," ",Object(b.b)("em",{parentName:"p"},"REPEATABLE_READ")," ","|"," ",Object(b.b)("em",{parentName:"p"},"SERIALIZABLE")," ","|"," ",Object(b.b)("em",{parentName:"p"},"SNAPSHOT")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"maxRetriesOnTransientErrors?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"multiSubnetFailover?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"packetSize?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"tdsVersion?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"trustedConnection?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"useUTC?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean"),"  }",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1912"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"parsejson"},"parseJSON"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"parseJSON"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1910"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"password"},"password"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"password"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1902"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"pool"},"pool"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"pool"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"p"},"Promise?"),": ",Object(b.b)("em",{parentName:"p"},"any")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"acquireTimeoutMillis?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"autostart?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"evictionRunIntervalMillis?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"fifo?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"idleTimeoutMillis?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"max?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"maxWaitingClients?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"min?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"numTestsPerRun?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"priorityRange?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"softIdleTimeoutMillis?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"testOnBorrow?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean"),"  }",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1926"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"port"},"port"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"port"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1904"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"requesttimeout"},"requestTimeout"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"requestTimeout"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1908"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"server"},"server"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"server"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1903"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"stream"},"stream"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"stream"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1909"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"user"},"user"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"user"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1901"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"expirationChecker"),":"))}m.isMDXComponent=!0}}]);