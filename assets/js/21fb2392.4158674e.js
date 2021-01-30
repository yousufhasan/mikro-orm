(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(1253)),i={title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},s={unversionedId:"usage-with-js",id:"version-4.0/usage-with-js",isDocsHomePage:!1,title:"Usage with JavaScript",description:"Since MikroORM 3.2, we can use EntitySchema helper to define own entities without",source:"@site/versioned_docs/version-4.0/usage-with-js.md",slug:"/usage-with-js",permalink:"/docs/4.0/usage-with-js",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/usage-with-js.md",version:"4.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612006423,sidebar_label:"Usage with Vanilla JS",sidebar:"version-4.0/docs",previous:{title:"Using MikroORM with NestJS framework",permalink:"/docs/4.0/usage-with-nestjs"},next:{title:"Using Entity Constructors",permalink:"/docs/4.0/entity-constructors"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Since MikroORM 3.2, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"EntitySchema")," helper to define own entities without\ndecorators, which works also for Vanilla JavaScript."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Read more about ",Object(a.b)("inlineCode",{parentName:"p"},"EntitySchema")," in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.0/entity-schema"}),"this section"),".")),Object(a.b)("p",null,"Here is an example of such entity:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./entities/Author.js"',title:'"./entities/Author.js"'}),"const { Collection, EntitySchema } = require('@mikro-orm/core');\nconst { Book } = require('./Book');\nconst { BaseEntity } = require('./BaseEntity');\n\n/**\n * @property {number} id\n * @property {Date} createdAt\n * @property {Date} updatedAt\n * @property {string} name\n * @property {string} email\n * @property {number} age\n * @property {boolean} termsAccepted\n * @property {string[]} identities\n * @property {Date} born\n * @property {Collection<Book>} books\n * @property {Book} favouriteBook\n * @property {number} version\n * @property {string} versionAsString\n */\nclass Author extends BaseEntity {\n\n  /**\n   * @param {string} name\n   * @param {string} email\n   */\n  constructor(name, email) {\n    super();\n    this.name = name;\n    this.email = email;\n    this.books = new Collection(this);\n    this.createdAt = new Date();\n    this.updatedAt = new Date();\n    this.termsAccepted = false;\n  }\n\n}\n\nexport const schema = new EntitySchema({\n  class: Author,\n  properties: {\n    name: { type: 'string' },\n    email: { type: 'string', unique: true },\n    age: { type: 'number', nullable: true },\n    termsAccepted: { type: 'boolean', default: 0, onCreate: () => false },\n    identities: { type: 'string[]', nullable: true },\n    born: { type: DateType, nullable: true, length: 3 },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    favouriteBook: { reference: 'm:1', type: 'Book' },\n    version: { type: 'number', persist: false },\n  },\n});\n\nmodule.exports.Author = Author;\nmodule.exports.entity = Author;\nmodule.exports.schema = schema;\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Do not forget to provide ",Object(a.b)("inlineCode",{parentName:"p"},"name")," and ",Object(a.b)("inlineCode",{parentName:"p"},"path")," schema parameters as well as ",Object(a.b)("inlineCode",{parentName:"p"},"entity"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"schema")," exports.")),Object(a.b)("p",null,"Reference parameter can be one of (where ",Object(a.b)("inlineCode",{parentName:"p"},"SCALAR")," is the default one):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export enum ReferenceType {\n  SCALAR = 'scalar',\n  ONE_TO_ONE = '1:1',\n  MANY_TO_ONE = 'm:1',\n  ONE_TO_MANY = '1:m',\n  MANY_TO_MANY = 'm:n',\n  EMBEDDED = 'embedded',\n}\n")),Object(a.b)("p",null,"You can register your entities as usual."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag, BaseEntity],\n  dbName: 'my-db-name',\n  type: 'mysql',\n});\n")),Object(a.b)("p",null,"For more examples of plain JavaScript entity definitions take a look\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/express-js-example-app"}),"Express JavaScript example"),". "))}l.isMDXComponent=!0}}]);