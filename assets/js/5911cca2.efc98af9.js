(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(t),u=r,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||i;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},459:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(1253)),c={id:"knex.indexdef",title:"Interface: IndexDef",sidebar_label:"IndexDef",hide_title:!0},o={unversionedId:"api/interfaces/knex.indexdef",id:"version-4.4/api/interfaces/knex.indexdef",isDocsHomePage:!1,title:"Interface: IndexDef",description:"Interface: IndexDef",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.indexdef.md",slug:"/api/interfaces/knex.indexdef",permalink:"/docs/api/interfaces/knex.indexdef",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.indexdef.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1612145018,sidebar_label:"IndexDef",sidebar:"version-4.4/API",previous:{title:"Interface: Index",permalink:"/docs/api/interfaces/knex.index"},next:{title:"Interface: IsSame",permalink:"/docs/api/interfaces/knex.issame"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnNames",id:"columnnames",children:[]},{value:"keyName",id:"keyname",children:[]},{value:"unique",id:"unique",children:[]}]}],s={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-indexdef"},"Interface: IndexDef"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".IndexDef"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IndexDef"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"columnnames"},"columnNames"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columnNames"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L63"}),"packages/knex/src/typings.ts:63")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"keyname"},"keyName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"keyName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L62"}),"packages/knex/src/typings.ts:62")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unique"},"unique"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"unique"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L64"}),"packages/knex/src/typings.ts:64")))}b.isMDXComponent=!0}}]);