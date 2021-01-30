(window.webpackJsonp=window.webpackJsonp||[]).push([[856],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),i=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=i(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),O=i(a),d=n,u=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return a?r.a.createElement(u,l(l({ref:t},m),{},{components:a})):r.a.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var m=2;m<b;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},925:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),b=(a(0),a(1253)),c={id:"knex.knex-1.whereraw",title:"Interface: WhereRaw<TRecord, TResult>",sidebar_label:"WhereRaw",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.whereraw",id:"api/interfaces/knex.knex-1.whereraw",isDocsHomePage:!1,title:"Interface: WhereRaw<TRecord, TResult>",description:"Interface: WhereRaw",source:"@site/docs/api/interfaces/knex.knex-1.whereraw.md",slug:"/api/interfaces/knex.knex-1.whereraw",permalink:"/docs/next/api/interfaces/knex.knex-1.whereraw",editUrl:null,version:"current",sidebar_label:"WhereRaw",sidebar:"API",previous:{title:"Interface: WhereNull<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.wherenull"},next:{title:"Interface: WhereWrapped<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.wherewrapped"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-whererawtrecord-tresult"},"Interface: WhereRaw<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".WhereRaw"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.rawquerybuilder"}),Object(b.b)("em",{parentName:"a"},"RawQueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw")),Object(b.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.where"}),Object(b.b)("em",{parentName:"a"},"Where"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw"),"(",Object(b.b)("inlineCode",{parentName:"p"},"condition"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"condition")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1257"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"bindings?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," Date ","|"," ",Object(b.b)("em",{parentName:"p"},"Buffer")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),"[] ","|"," Date[] ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean"),"[] ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," readonly ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bindings?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," Date ","|"," ",Object(b.b)("em",{parentName:"td"},"Buffer")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"td"},"number"),"[] ","|"," Date[] ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean"),"[] ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," readonly ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1483"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"raw"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">","): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"raw")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1487"))}i.isMDXComponent=!0}}]);