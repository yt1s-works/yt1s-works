(self.webpackChunkyt1s=self.webpackChunkyt1s||[]).push([[950],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),c=new RegExp(o.source+a.source,"gu"),s=new RegExp("\\d+"+a.source,"gu"),l=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),l=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,i=!1,c=!1;for(let s=0;s<e.length;s++){const l=e[s];o&&t.test(l)?(e=e.slice(0,s)+"-"+e.slice(s),o=!1,c=i,i=!0,s++):i&&c&&n.test(l)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),c=i,i=!1,o=!0):(o=r(l)===l&&a(l)!==l,c=i,i=a(l)===l&&r(l)!==l)}return e})(e,o,l)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,s.lastIndex=0,e.replace(c,((e,n)=>t(n))).replace(s,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,n){"use strict";n.d(t,{L:function(){return m},M:function(){return T},P:function(){return E},S:function(){return F},_:function(){return c},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return s}});var r=n(7294),a=(n(3204),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,o,c,s){const l={};o&&(l.backgroundColor=o,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),s&&(l.objectPosition=s);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const f=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=c(e,f);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:s}=e,l=c(e,g);return r.createElement("img",i({},l,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:o}))},b=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=c(e,h);const s=o.sizes||(null==t?void 0:t.sizes),l=r.createElement(y,i({},o,t,{sizes:s,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:s})})),l):l};var v;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,n=c(e,w);return t?r.createElement(b,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const T=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],k=e=>e.replace(/\n/g,""),S=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:o().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],j=new Set;let I,P;const N=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:d,class:f,onStartLoad:p,onLoad:m,onError:g}=e,h=c(e,L);const{width:y,height:b,layout:v}=a,w=l(y,b,v),{style:E,className:T}=w,x=c(w,A),C=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);f&&(d=f);const S=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{I||(I=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(k);if(P&&j.has(k))return;let t,r;return I.then((e=>{let{renderImageToString:n,swapPlaceholderImage:c}=e;C.current&&(C.current.innerHTML=n(i({isLoading:!0,isLoaded:j.has(k),image:a},h)),j.has(k)||(t=requestAnimationFrame((()=>{C.current&&(r=c(C.current,k,j,o,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{j.has(k)&&P&&(C.current.innerHTML=P(i({isLoading:j.has(k),isLoaded:j.has(k),image:a},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},x,{style:i({},E,o,{backgroundColor:u}),className:T+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));_.propTypes=O,_.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:n,__imageData:a,__error:o}=t,s=c(t,M);return o&&console.warn(o),a?r.createElement(e,i({image:a},s)):(console.warn("Image not loaded",n),null)}}const q=R((function(e){let{as:t="div",className:n,class:a,style:o,image:s,loading:f="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=c(e,x);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),g=i({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:w,height:S,layout:O,images:L,placeholder:A,backgroundColor:j}=s,I=l(w,S,O),{style:P,className:N}=I,_=c(I,C),M={fallback:void 0,sources:[]};return L.fallback&&(M.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?k(L.fallback.srcSet):void 0})),L.sources&&(M.sources=L.sources.map((e=>i({},e,{srcSet:k(e.srcSet)})))),r.createElement(t,i({},_,{style:i({},P,o,{backgroundColor:h}),className:N+(n?" "+n:"")}),r.createElement(m,{layout:O,width:w,height:S},r.createElement(E,i({},d(A,!1,O,w,S,j,y,b))),r.createElement(T,i({"data-gatsby-image-ssr":"",className:p},v,u("eager"===f,!1,M,f,g)))))})),z=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),D={src:o().string.isRequired,alt:S,width:z,height:z,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=D;const F=R(_);F.displayName="StaticImage",F.propTypes=D},4058:function(e,t,n){"use strict";var r=n(4836),a=n(5263);t.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var i=n(8053);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=i[e]))}));var c=a(n(9029));t.Link=c.default,t.navigate=c.navigate,t.changeLocale=c.changeLocale;var s=r(n(9982));t.withIntl=s.default;var l=n(6971);t.IntlContextProvider=l.IntlContextProvider,t.IntlContextConsumer=l.IntlContextConsumer},9029:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var a=r(n(434)),o=r(n(7071)),i=r(n(7294)),c=r(n(5697)),s=n(1883),l=n(6971),u=function(e){var t=e.to,n=e.language,r=e.children,c=e.onClick,u=(0,o.default)(e,["to","language","children","onClick"]);return i.default.createElement(l.IntlContextConsumer,null,(function(e){var o=n||e.language,l=e.routed||n?"/"+o+t:""+t;return i.default.createElement(s.Link,(0,a.default)({},u,{to:l,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),c&&c(e)}}),r)}))};u.propTypes={children:c.default.node.isRequired,to:c.default.string,language:c.default.string},u.defaultProps={to:""};var d=u;t.default=d;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,r=n.language,a=n.routed?"/"+r+e:""+e;(0,s.navigate)(a,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,r="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,s.navigate)(r)}}},9982:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var a=r(n(7294)),o=n(8053);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),a.default.createElement((0,o.injectIntl)(e),t)}}},8008:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(8032),o=n(4058),i=n(5967);var c=()=>r.createElement("div",{className:"navigation-module--navigation--63bfb"},i.wd.map(((e,t)=>r.createElement("div",{className:"navigation-module--menuList--2dd47",key:e.url},r.createElement(o.Link,{className:"navigation-module--menuLink--ee5db",to:e.url,activeClassName:"navigation-module--activeLink--696d2"},e.text)))));var s=()=>{var e;const t=(0,o.useIntl)(),{0:s,1:l}=(0,r.useState)(!1),u=i.AN.filter((e=>e.code===t.locale));return r.createElement("header",null,r.createElement("div",{className:"header-module--mainHeader--c6858"},r.createElement(o.Link,{className:"header-module--logo--d8441",to:"/"},r.createElement(a.S,{src:"../images/logo.svg",loading:"eager",alt:"logo",quality:100,__imageData:n(7309)}),r.createElement("span",{className:"header-module--LinkTitle--08ea6"},"YT1s")),r.createElement("div",{className:"header-module--language--549f5"},r.createElement("div",{style:{display:"flex"},onClick:()=>l(!s)},r.createElement("div",null,null===(e=u[0])||void 0===e?void 0:e.text),r.createElement("div",null,r.createElement(a.S,{className:"header-module--arrowIcon--be1e0",src:"../images/arrow.svg",loading:"eager",alt:"logo",quality:100,__imageData:n(6247)})))),r.createElement("div",null,r.createElement(o.IntlContextConsumer,null,(e=>{let{languages:t}=e;return r.createElement("div",null,s&&r.createElement("ul",{className:"header-module--subMenuLang--69b87"},t.map((e=>r.createElement("li",{className:"header-module--list--5422c"},r.createElement("a",{className:"header-module--languageName--7fcdb",key:e,onClick:()=>(0,o.changeLocale)("en"!==e?e:"en")},i.w4[e]))))))})))),r.createElement(c,null))};var l=()=>r.createElement("div",{className:"footer-module--footer--33bb1"},r.createElement("div",{className:"footer-module--menuList--9f902"},i.WW.map(((e,t)=>r.createElement(o.Link,{key:t,className:"footer-module--menuLink--55295",to:e.url},e.text)))),r.createElement("p",{className:"footer-module--copyright--43e5e"},"© 2020 yt1s.works "));var u=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement("div",{className:"layout"},r.createElement("main",null,t)),r.createElement(l,null))}},8183:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,a,o,i,c=n(7294),s=n(5697),l=n.n(s),u=n(3524),d=n.n(u),f=n(9590),p=n.n(f),m=n(4852),g=n.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",x="http-equiv",C="innerHTML",k="itemprop",S="name",O="property",L="rel",A="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,v.TITLE),n=Z(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,P);return t||r||void 0},J=function(e){return Z(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===L&&"canonical"===e[n].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==E&&c!==k||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=g()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(v.BODY,r),se(v.HTML,a),ce(d,f);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,o),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=p[e].oldTags)})),t&&t(),s(e,m,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+H+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,a=de(n,r),[c.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+" "+H+'="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+" "+H+'="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+" "+H+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(h,n,r),htmlAttributes:fe(y,a,r),link:fe(v.LINK,o,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,s,r),style:fe(v.STYLE,l,r),title:fe(v.TITLE,{title:d,titleAttributes:f},r)}},me=d()((function(e){return{baseTag:G([T,j],e),bodyAttributes:$(h,e),defer:Z(e,N),encode:Z(e,_),htmlAttributes:$(y,e),linkTags:Q(v.LINK,[L,T],e),metaTags:Q(v.META,[S,w,x,O,k],e),noscriptTags:Q(v.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:Q(v.SCRIPT,[A,C],e),styleTags:Q(v.STYLE,[E],e),title:K(e),titleAttributes:$(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ge=(a=me,i=o=function(e){function t(){return F(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case v.BODY:return Y({},a,{bodyAttributes:Y({},o)});case v.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(B(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},W(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind;var he=n(1883),ye=n(5967);var be=function(e){var t;let{description:n,lang:r,title:a,pathname:o,endpoint:i,index:s}=e;const{site:l}=(0,he.useStaticQuery)("63159454");return c.createElement(ge,null,c.createElement("html",{lang:r||"en"}),c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,a),c.createElement("meta",{name:"description",content:n}),c.createElement("meta",{property:"og:title",content:a}),c.createElement("meta",{property:"og:description",content:n}),c.createElement("meta",{property:"og:url",content:"https://yt1s.works"+i}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:creator",content:(null===(t=l.siteMetadata)||void 0===t?void 0:t.author)||""}),c.createElement("meta",{name:"twitter:title",content:a}),c.createElement("meta",{name:"twitter:description",content:n}),c.createElement("meta",{name:"robots",content:s}),c.createElement("meta",{name:"google-site-verification",content:"Ru5brt9NL0oMkvkLOxapstJ8x649cTwqEaRTSeQOTCE"}),c.createElement("link",{rel:"canonical",href:"https://yt1s.works"+i}),ye.k1.map((e=>"en"===e.code?c.createElement("link",{rel:"alternate",href:"https://yt1s.works"+o,hrefLang:e.code,key:e.code}):c.createElement("link",{rel:"alternate",href:"https://yt1s.works/"+e.code+o,hrefLang:e.code,key:e.code}))),c.createElement("link",{rel:"alternate",href:"https://yt1s.works"+o,hrefLang:"x-default"}))}},5967:function(e,t,n){"use strict";n.d(t,{AN:function(){return o},WW:function(){return c},k1:function(){return i},w4:function(){return a},wd:function(){return r}});const r=[{text:"Youtube Downloader",url:"/"},{text:"Youtube to MP3",url:"/youtube-to-mp3"},{text:"Youtube to MP4",url:"/youtube-to-mp4"}],a={en:"English",de:"Deutsch",es:"Español",fr:"Français",hi:"हिन्दी / Hindī",id:"Indonesian",it:"Italiano",ja:"日本語",ko:"한국어",my:"Myanmar (မြန်မာ)",ms:"Malay",pt:"Português",ru:"Русский",th:"ไทย",tr:"Türkçe",vi:"Tiếng Việt","tl-PH":"Filipino","zh-cn":"简体中文","zh-tw":"繁體中文",ar:"العربية",bn:"বাঙালি"},o=[{code:"en",text:"English"},{code:"de",text:"Deutsch"},{code:"es",text:"Español"},{code:"fr",text:"Français"},{code:"hi",text:"हिन्दी / Hindī"},{code:"id",text:"Indonesian"},{code:"it",text:"Italiano"},{code:"ja",text:"日本語"},{code:"ko",text:"한국어"},{code:"my",text:"Myanmar (မြန်မာ)"},{code:"ms",text:"Malay"},{code:"tl-PH",text:"Filipino"},{code:"pt",text:"Português"},{code:"ru",text:"Русский"},{code:"th",text:"ไทย"},{code:"tr",text:"Türkçe"},{code:"vi",text:"Tiếng Việt"},{code:"zh-cn",text:"简体中文"},{code:"zh-tw",text:"繁體中文"},{code:"ar",text:"العربية"},{code:"bn",text:"বাঙালি"}],i=[{code:"en"},{code:"de"},{code:"es"},{code:"fr"},{code:"hi"},{code:"id"},{code:"it"},{code:"ja"},{code:"ko"},{code:"my"},{code:"ms"},{code:"tl-PH"},{code:"pt"},{code:"ru"},{code:"th"},{code:"tr"},{code:"vi"},{code:"zh-cn"},{code:"zh-tw"},{code:"ar"},{code:"bn"}],c=[{text:"Contact us",url:"/contact-us"},{text:"Privacy Policy",url:"/privacy-policy"},{text:"Terms of service",url:"/terms-of-service"}]},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!o(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",c),d}}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5263:function(e,t,n){var r=n(8698).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=i?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(o,c,s):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7309:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e81808","images":{"fallback":{"src":"/static/b3e463d9e080ee6c82c09b1dd3281908/421a6/logo.svg","srcSet":"/static/b3e463d9e080ee6c82c09b1dd3281908/c27ca/logo.svg 9w,\\n/static/b3e463d9e080ee6c82c09b1dd3281908/b6497/logo.svg 19w,\\n/static/b3e463d9e080ee6c82c09b1dd3281908/421a6/logo.svg 37w","sizes":"(min-width: 37px) 37px, 100vw"},"sources":[{"srcSet":"/static/b3e463d9e080ee6c82c09b1dd3281908/eea8e/logo.webp 9w,\\n/static/b3e463d9e080ee6c82c09b1dd3281908/4a249/logo.webp 19w,\\n/static/b3e463d9e080ee6c82c09b1dd3281908/1008e/logo.webp 37w","type":"image/webp","sizes":"(min-width: 37px) 37px, 100vw"}]},"width":37,"height":28}')},6247:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a212621c13107437773437ed24ae5e7c/942fe/arrow.svg","srcSet":"/static/a212621c13107437773437ed24ae5e7c/286dc/arrow.svg 4w,\\n/static/a212621c13107437773437ed24ae5e7c/ca6bd/arrow.svg 8w,\\n/static/a212621c13107437773437ed24ae5e7c/942fe/arrow.svg 16w","sizes":"(min-width: 16px) 16px, 100vw"},"sources":[{"srcSet":"/static/a212621c13107437773437ed24ae5e7c/ea9a5/arrow.webp 4w,\\n/static/a212621c13107437773437ed24ae5e7c/a322c/arrow.webp 8w,\\n/static/a212621c13107437773437ed24ae5e7c/fbaad/arrow.webp 16w","type":"image/webp","sizes":"(min-width: 16px) 16px, 100vw"}]},"width":16,"height":8}')}}]);
//# sourceMappingURL=20943c12dee318b80771fd8061d895e9bfcaf064-f3d49a84b214ed46b30e.js.map