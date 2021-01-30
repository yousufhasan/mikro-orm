(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,O=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return r?a.a.createElement(O,i(i({ref:t},b),{},{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},479:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(1253)),o={id:"core.factoryoptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.factoryoptions",id:"api/interfaces/core.factoryoptions",isDocsHomePage:!1,title:"Interface: FactoryOptions",description:"Interface: FactoryOptions",source:"@site/docs/api/interfaces/core.factoryoptions.md",slug:"/api/interfaces/core.factoryoptions",permalink:"/docs/next/api/interfaces/core.factoryoptions",editUrl:null,version:"current",sidebar_label:"FactoryOptions",sidebar:"API",previous:{title:"Interface: EventSubscriber<T>",permalink:"/docs/next/api/interfaces/core.eventsubscriber"},next:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/next/api/interfaces/core.findoneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"merge",id:"merge",children:[]},{value:"newEntity",id:"newentity",children:[]},{value:"refresh",id:"refresh",children:[]}]}],b={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-factoryoptions"},"Interface: FactoryOptions"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".FactoryOptions"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FactoryOptions"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dfa27a4/packages/core/src/entity/EntityFactory.ts#L12"}),"packages/core/src/entity/EntityFactory.ts:12")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initialized"},"initialized"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"initialized"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dfa27a4/packages/core/src/entity/EntityFactory.ts#L8"}),"packages/core/src/entity/EntityFactory.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"merge"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"merge"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dfa27a4/packages/core/src/entity/EntityFactory.ts#L10"}),"packages/core/src/entity/EntityFactory.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"newentity"},"newEntity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"newEntity"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dfa27a4/packages/core/src/entity/EntityFactory.ts#L9"}),"packages/core/src/entity/EntityFactory.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"refresh"},"refresh"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"refresh"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/dfa27a4/packages/core/src/entity/EntityFactory.ts#L11"}),"packages/core/src/entity/EntityFactory.ts:11")))}l.isMDXComponent=!0}}]);