(window.webpackJsonp=window.webpackJsonp||[]).push([[725],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(a),g=n,j=p["".concat(c,".").concat(g)]||p[g]||o[g]||b;return a?r.a.createElement(j,m(m({ref:t},l),{},{components:a})):r.a.createElement(j,m({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=g;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},795:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(1253)),c={id:"mongonamingstrategy",title:"Class: MongoNamingStrategy",sidebar_label:"MongoNamingStrategy"},m={unversionedId:"api/classes/mongonamingstrategy",id:"version-4.3/api/classes/mongonamingstrategy",isDocsHomePage:!1,title:"Class: MongoNamingStrategy",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/mongonamingstrategy.md",slug:"/api/classes/mongonamingstrategy",permalink:"/docs/4.3/api/classes/mongonamingstrategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/mongonamingstrategy.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612006423,sidebar_label:"MongoNamingStrategy",sidebar:"version-4.3/API",previous:{title:"Class: MongoExceptionConverter",permalink:"/docs/4.3/api/classes/mongoexceptionconverter"},next:{title:"Class: MongoPlatform",permalink:"/docs/4.3/api/classes/mongoplatform"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],l={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"MongoNamingStrategy")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"classtomigrationname"},"classToMigrationName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"classToMigrationName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"timestamp"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#classtomigrationname"}),"classToMigrationName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"}),"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamp")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"classtotablename"},"classToTableName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"classToTableName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#classtotablename"}),"classToTableName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L5"}),"packages/core/src/naming-strategy/MongoNamingStrategy.ts:5"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getclassname"},"getClassName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getClassName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"file"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"separator?"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#getclassname"}),"getClassName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"}),"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"separator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"-"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joincolumnname"},"joinColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"joinColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#joincolumnname"}),"joinColumnName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L9"}),"packages/core/src/naming-strategy/MongoNamingStrategy.ts:9"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"joinKeyColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"referencedColumnName?"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#joinkeycolumnname"}),"joinKeyColumnName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L13"}),"packages/core/src/naming-strategy/MongoNamingStrategy.ts:13"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"referencedColumnName?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"jointablename"},"joinTableName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"joinTableName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sourceEntity"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"targetEntity"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#jointablename"}),"joinTableName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L17"}),"packages/core/src/naming-strategy/MongoNamingStrategy.ts:17"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sourceEntity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"targetEntity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"propertyToColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": string): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#propertytocolumnname"}),"propertyToColumnName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L21"}),"packages/core/src/naming-strategy/MongoNamingStrategy.ts:21"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencecolumnname"},"referenceColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"referenceColumnName"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/namingstrategy"}),"NamingStrategy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy"}),"AbstractNamingStrategy"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/abstractnamingstrategy#referencecolumnname"}),"referenceColumnName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L25"}),"packages/core/src/naming-strategy/MongoNamingStrategy.ts:25"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"))}s.isMDXComponent=!0}}]);