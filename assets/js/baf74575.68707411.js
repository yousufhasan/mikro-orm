(window.webpackJsonp=window.webpackJsonp||[]).push([[839],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),m=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=m(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(t),O=a,s=d["".concat(b,".").concat(O)]||d[O]||l[O]||i;return t?r.a.createElement(s,p(p({ref:n},c),{},{components:t})):r.a.createElement(s,p({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,b=new Array(i);b[0]=O;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,b[1]=p;for(var c=2;c<i;c++)b[c]=t[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},908:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),i=(t(0),t(1253)),b={id:"knex.knex.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",hide_title:!0},p={unversionedId:"api/interfaces/knex.knex.mssqlconnectionconfig",id:"version-4.4/api/interfaces/knex.knex.mssqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MsSqlConnectionConfig",description:"Interface: MsSqlConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.mssqlconnectionconfig.md",slug:"/api/interfaces/knex.knex.mssqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex.mssqlconnectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.mssqlconnectionconfig.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1612145018,sidebar_label:"MsSqlConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: MigratorConfig",permalink:"/docs/api/interfaces/knex.knex.migratorconfig"},next:{title:"Interface: MultikeyForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex.multikeyforeignconstraintbuilder"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"connectionTimeout",id:"connectiontimeout",children:[]},{value:"database",id:"database",children:[]},{value:"domain",id:"domain",children:[]},{value:"driver",id:"driver",children:[]},{value:"options",id:"options",children:[]},{value:"parseJSON",id:"parsejson",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"server",id:"server",children:[]},{value:"stream",id:"stream",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],c={toc:o};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-mssqlconnectionconfig"},"Interface: MsSqlConnectionConfig"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".MsSqlConnectionConfig"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MsSqlConnectionConfig"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"connectiontimeout"},"connectionTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"connectionTimeout"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1907"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"database"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1906"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"domain"},"domain"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"domain"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1905"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1900"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"p"},"abortTransactionOnError?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"appName?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"enableArithAbort?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"encrypt?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"instanceName?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"isolationLevel?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"READ_UNCOMMITTED")," ","|"," ",Object(i.b)("em",{parentName:"p"},"READ_COMMITTED")," ","|"," ",Object(i.b)("em",{parentName:"p"},"REPEATABLE_READ")," ","|"," ",Object(i.b)("em",{parentName:"p"},"SERIALIZABLE")," ","|"," ",Object(i.b)("em",{parentName:"p"},"SNAPSHOT")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"maxRetriesOnTransientErrors?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"multiSubnetFailover?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"packetSize?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"tdsVersion?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"trustedConnection?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"useUTC?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean"),"  }",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1912"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"parsejson"},"parseJSON"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"parseJSON"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1910"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1902"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"pool"},"pool"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"pool"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"p"},"Promise?"),": ",Object(i.b)("em",{parentName:"p"},"any")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"acquireTimeoutMillis?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"autostart?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"evictionRunIntervalMillis?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"fifo?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"idleTimeoutMillis?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"max?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"maxWaitingClients?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"min?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"numTestsPerRun?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"priorityRange?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"softIdleTimeoutMillis?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"testOnBorrow?"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean"),"  }",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1926"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"port"},"port"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"port"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1904"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"requesttimeout"},"requestTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"requestTimeout"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1908"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"server"},"server"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"server"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1903"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stream"},"stream"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stream"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1909"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"user"},"user"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"user"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1901"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"expirationChecker"),":"))}m.isMDXComponent=!0}}]);