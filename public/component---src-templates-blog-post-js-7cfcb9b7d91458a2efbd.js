(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{273:function(e,t,n){"use strict";n.r(t);n(10),n(160),n(63),n(6);var a=n(0),r=n.n(a),l=n(49),i=n(266),o=n.n(i),c=(n(283),n(278)),s=n(265),u=n(281);n(284);r.a.Component;var p=n(280),m=n(275),d=n(62),b=n(285),f=function(e){return b.supportedLanguages[e].replace(/ /g," ")};function g(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"pageQuery",function(){return v});var h='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',y=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,i=e.editUrl,o=t.filter(function(e){return"ru"!==e}),c=-1!==t.indexOf("ru");return r.a.createElement("div",{className:"translations"},r.a.createElement(p.a,{style:{fontFamily:h}},t.length>0&&r.a.createElement("span",null,c&&r.a.createElement("span",null,"Originally written in:"," ","en"===n?r.a.createElement("b",null,f("en")):r.a.createElement(l.Link,{to:a("en")},"English")," • ","ru"===n?r.a.createElement("b",null,"Русский (авторский перевод)"):r.a.createElement(l.Link,{to:a("ru")},"Русский (авторский перевод)"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("span",null,"Translated by readers into: "),o.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:e},e===n?r.a.createElement("b",null,f(e)):r.a.createElement(l.Link,{to:a(e)},f(e)),t===o.length-1?"":" • ")})),"en"!==n&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),"ru"!==n&&r.a.createElement("div",null,r.a.createElement(l.Link,{to:a("en")},"Read the original")," • ",r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),r.a.createElement(l.Link,{to:"/"+n},"View all translated posts")," ")))},t}(r.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=o()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,i=a.previous,p=a.next,b=a.slug,g=a.translations,E=a.translatedLinks,v=e.fields.langKey,k=e.html;E.forEach(function(e){var t="/"+v+e;k=k.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')}),(g=g.slice()).sort(function(e,t){return f(e)<f(t)?-1:1}),function(e){switch(e){case"ru":case"bg":n.e(0).then(n.t.bind(null,286,7)),n.e(0).then(n.t.bind(null,287,7));break;case"uk":n.e(0).then(n.t.bind(null,286,7)),n.e(0).then(n.t.bind(null,287,7)),n.e(0).then(n.t.bind(null,288,7)),n.e(0).then(n.t.bind(null,289,7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n.e(0).then(n.t.bind(null,288,7)),n.e(0).then(n.t.bind(null,289,7));break;case"vi":n.e(0).then(n.t.bind(null,290,7)),n.e(0).then(n.t.bind(null,291,7));break;case"fa":n.e(0).then(n.t.bind(null,292,7));break;case"ar":n.e(0).then(n.t.bind(null,293,7))}}(v);var w=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:""+e+n}}(b,v),j=w("en"),x="https://github.com/ayoubelk/ayoubelk.com/edit/master/src/pages/"+j.slice(1,j.length-1)+"/index"+("en"===v?"":"."+v)+".md",O="https://mobile.twitter.com/search?q="+encodeURIComponent("https://ayoubelk.com"+j);return r.a.createElement(s.a,{location:this.props.location,title:t},r.a.createElement(u.a,{lang:v,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-.8)})},Object(m.a)(e.frontmatter.date,v)," • "+Object(m.b)(e.timeToRead)),g.length>0&&r.a.createElement(y,{translations:g,editUrl:x,languageLink:w,lang:v})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:O,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",r.a.createElement("a",{href:x,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),r.a.createElement("aside",null,r.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:h}}),r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(d.a)(.25)}},r.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"ayoubelk.com")),r.a.createElement(c.a,null),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,i&&r.a.createElement(l.Link,{to:i.fields.slug,rel:"prev",style:{marginRight:20}},"← ",i.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(l.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(r.a.Component),v=(t.default=E,"1123297852")},275:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return l});n(116),n(159),n(22),n(2),n(50),n(34),n(12),n(276);function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,a(r))}},276:function(e,t,n){var a=n(1);a(a.P,"Array",{fill:n(277)}),n(115)("fill")},277:function(e,t,n){"use strict";var a=n(21),r=n(158),l=n(24);e.exports=function(e){for(var t=a(this),n=l(t.length),i=arguments.length,o=r(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,s=void 0===c?n:r(c,n);s>o;)t[o++]=e;return t}},278:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(279),i=n.n(l),o=n(62);var c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2)}},r.a.createElement("img",{src:i.a,alt:"Ayoub El Khattabi",style:{marginRight:Object(o.a)(.5),marginBottom:0,width:Object(o.a)(2),height:Object(o.a)(2),borderRadius:"50%"}}),r.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",r.a.createElement("a",{href:"https://twitter.com/ayoubelkh"},"Ayoub El Khattabi"),"."," "))},a}(r.a.Component);t.a=c},279:function(e,t,n){e.exports=n.p+"static/profile-pic-6165ba4dd27cb3749cfcc175114aae1d.jpg"},280:function(e,t,n){"use strict";n(10);var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},281:function(e,t,n){"use strict";n(10);var a=n(282),r=n(0),l=n.n(r),i=n(117),o=n.n(i),c=n(49),s="3236765318";function u(e){var t=e.meta,n=e.image,r=e.title,i=e.description,u=e.slug,p=e.lang,m=void 0===p?"en":p;return l.a.createElement(c.StaticQuery,{query:s,render:function(e){var a=e.site.siteMetadata,c=i||a.description,s=n?a.siteUrl+"/"+n:null,p=""+a.siteUrl+u;return l.a.createElement(o.a,Object.assign({htmlAttributes:{lang:m}},r?{titleTemplate:"%s — "+a.title,title:r}:{title:a.title+" — A blog by Ayoub El Khattabi"},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:r||a.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:c}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}))},data:a})}u.defaultProps={meta:[],title:"",slug:""},t.a=u},282:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Personal blog","author":"Ayoub El Khattabi","description":"Personal blog by Ayoub El Khattabi. I explain with words and code.","siteUrl":"https://ayoubelk.com","social":{"twitter":"@ayoubelkh"}}}}}')},285:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7cfcb9b7d91458a2efbd.js.map