"use strict";(self.webpackChunkyt1s=self.webpackChunkyt1s||[]).push([[529],{7969:function(e,t,a){a.d(t,{Z:function(){return i}});var c=a(7294),s=a(4058);var i=()=>{const{0:e,1:t}=(0,c.useState)(),a=(0,s.useIntl)(),i=e=>new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g).test(e);return c.createElement(c.Fragment,null,c.createElement("div",{className:"converter-module--converter--343e8"},c.createElement("input",{type:"search",className:"converter-module--search--3d96a",placeholder:a.formatMessage({id:"search-placeholder"}),onChange:e=>{t(e.target.value)},onKeyDown:t=>{13===t.keyCode&&(i(e)?(0,s.navigate)("/download",{state:{url:e}}):(0,s.navigate)("/search",{state:{url:e}}))}}),c.createElement("button",{className:"converter-module--button--dd9c1",type:"button",onClick:()=>{i(e)?(0,s.navigate)("/download",{state:{url:e}}):(0,s.navigate)("/search",{state:{url:e}})}},c.createElement(s.FormattedMessage,{id:"convert-btn"}))))}},7366:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var c=a(7294),s=a(4058),i=a(8008),n=a(8183),o=a(7969),d=a(8032);const r=[{description:c.createElement(s.FormattedMessage,{id:"best-desc-one-mp4"})},{description:c.createElement(s.FormattedMessage,{id:"best-desc-two-mp4"})}],l=[{text:c.createElement(s.FormattedMessage,{id:"box-title-one-mp4"}),url:c.createElement(d.S,{src:"./images/clock.svg",loading:"eager",alt:"clock",width:200,quality:100,__imageData:a(5295)}),style:{background:"#d2e3fc"},description:c.createElement(s.FormattedMessage,{id:"box-desc-one-mp4"})},{text:c.createElement(s.FormattedMessage,{id:"box-title-two-mp4"}),url:c.createElement(d.S,{src:"./images/limit.svg",loading:"eager",alt:"limit",width:200,quality:100,__imageData:a(311)}),style:{background:"#fad2cf"},description:c.createElement(s.FormattedMessage,{id:"box-desc-two-mp4"})},{text:c.createElement(s.FormattedMessage,{id:"box-title-three-mp4"}),url:c.createElement(d.S,{src:"./images/safe.svg",loading:"eager",alt:"safe",width:200,quality:100,__imageData:a(1588)}),style:{background:"#ceead6"},description:c.createElement(s.FormattedMessage,{id:"box-desc-three-mp4"})},{text:c.createElement(s.FormattedMessage,{id:"box-title-four-mp4"}),url:c.createElement(d.S,{src:"./images/platform.svg",loading:"eager",alt:"platform",width:200,quality:100,__imageData:a(9372)}),style:{background:"#feefc3"},description:c.createElement(s.FormattedMessage,{id:"box-desc-four-mp4"})},{text:c.createElement(s.FormattedMessage,{id:"box-title-five-mp4"}),url:c.createElement(d.S,{src:"./images/support.svg",loading:"eager",alt:"support",width:200,quality:100,__imageData:a(324)}),style:{background:"#ffd5ec"},description:c.createElement(c.Fragment,null,c.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},c.createElement(s.FormattedMessage,{id:"box-desc-five-mp4-key",defaultMessage:" "})),c.createElement(s.FormattedMessage,{id:"box-desc-five-mp4"}))},{text:c.createElement(s.FormattedMessage,{id:"box-title-six-mp4"}),url:c.createElement(d.S,{src:"./images/cloud.svg",loading:"eager",alt:"cloud",width:200,quality:100,__imageData:a(9768)}),style:{background:"#d1f4ff"},description:c.createElement(s.FormattedMessage,{id:"box-desc-six-mp4"})}],f=[{url:c.createElement(d.S,{src:"./images/icon1.svg",loading:"eager",alt:"icon1",quality:100,__imageData:a(4107)})},{url:c.createElement(d.S,{src:"./images/icon2.svg",loading:"eager",alt:"icon2",quality:100,__imageData:a(5791)})},{url:c.createElement(d.S,{src:"./images/icon3.svg",loading:"eager",alt:"icon3",quality:100,__imageData:a(5688)})},{url:c.createElement(d.S,{src:"./images/icon4.svg",loading:"eager",alt:"icon4",quality:100,__imageData:a(4825)})},{url:c.createElement(d.S,{src:"./images/icon5.svg",loading:"eager",alt:"icon5",quality:100,__imageData:a(8423)})}],m=c.createElement(s.FormattedMessage,{id:"download-extensions-desc-mp4"}),b=[{number:1,description:c.createElement(s.FormattedMessage,{id:"how-download-desc-one-mp4"}),style:{background:"#d2e3fc",color:"#4285f4"}},{number:2,description:c.createElement(s.FormattedMessage,{id:"how-download-desc-two-mp4"}),style:{background:"#fad2cf",color:"#ed6357"}},{number:3,description:c.createElement(s.FormattedMessage,{id:"how-download-desc-three-mp4"}),style:{background:"#ceead6",color:"#34a853"}}];var u=a(6227);var p=()=>c.createElement("div",{className:u.nC},c.createElement("div",{className:u.mt},c.createElement("h2",null,c.createElement(s.FormattedMessage,{id:"best-desc-title-mp4"})),c.createElement("div",null,r.map(((e,t)=>c.createElement("p",{key:t,className:u.WL},e.description)))),c.createElement("ul",{className:u.qb},l.map(((e,t)=>c.createElement("li",{key:t,className:u.pb},c.createElement("div",{className:u.BH,style:e.style},e.url),c.createElement("div",{className:u.C},c.createElement("h3",null,e.text),c.createElement("p",{className:u.bt},e.description)))))),c.createElement("div",{className:u._t},c.createElement("h2",null,c.createElement(s.FormattedMessage,{id:"download-extensions-title-mp4"})),c.createElement("ul",{className:u.Uh},f.map(((e,t)=>c.createElement("li",{key:t,className:u.G7},e.url)))),c.createElement("p",{className:u.WL},m),c.createElement("button",{className:u.AC,onClick:()=>{(0,s.navigate)("/")}},c.createElement(s.FormattedMessage,{id:"convert-now-btn"}))),c.createElement("div",{className:u.t5},c.createElement("h2",null,c.createElement(s.FormattedMessage,{id:"how-download-title-mp4"})),c.createElement("ul",{className:u.ft},b.map(((e,t)=>c.createElement("li",{key:t,className:u.qS},c.createElement("span",{style:e.style,className:u.cp},e.number),c.createElement("span",{className:u.l_},e.description)))))))),w=a(7815);var g=e=>{const t=(0,s.useIntl)(),{pathname:a}=e.location;return c.createElement(i.Z,null,c.createElement(n.Z,{lang:t.locale,title:t.formatMessage({id:"mp4-seo-title"}),pathname:a.split("/").length<4?a:a.replace(/^\/?[^\/]+/,""),endpoint:a,description:t.formatMessage({id:"mp4-seo-desc"}),index:"index,follow"}),c.createElement("div",{className:w.Xw},c.createElement("h1",null,c.createElement(s.FormattedMessage,{id:"mp4-title"})),c.createElement("div",null,c.createElement("p",null,c.createElement(s.FormattedMessage,{id:"mp4-desc"}))),c.createElement(o.Z,null)),c.createElement(p,null))}},7815:function(e,t,a){a.d(t,{PX:function(){return c},Xw:function(){return i},b7:function(){return s},rt:function(){return n},sP:function(){return o},xO:function(){return d}});var c="index-module--contact--df19a",s="index-module--listVideo--611f9",i="index-module--mainWrapper--45cff",n="index-module--videoBox--8a625",o="index-module--videoHeading--e54e9",d="index-module--videoImg--d490f"},6227:function(e,t,a){a.d(t,{AC:function(){return n},BH:function(){return r},C:function(){return o},G7:function(){return b},Kz:function(){return c},Uh:function(){return m},WL:function(){return d},_t:function(){return E},aP:function(){return y},bt:function(){return s},cp:function(){return p},cs:function(){return v},ft:function(){return f},l_:function(){return w},mt:function(){return x},nC:function(){return i},pb:function(){return l},qS:function(){return g},qb:function(){return u},t5:function(){return h}});var c="sections-module--answer--c19fc",s="sections-module--boxDes--65d82",i="sections-module--container--579d0",n="sections-module--convertNext--6f97b",o="sections-module--desList--2f2e7",d="sections-module--description--425b7",r="sections-module--image--70dbe",l="sections-module--list--22eba",f="sections-module--listCount--2ff18",m="sections-module--listIcon--74c36",b="sections-module--listIconImg--035dc",u="sections-module--listItem--32d6b",p="sections-module--listStep--c4673",w="sections-module--listText--8ec5a",g="sections-module--listWrapper--198ad",v="sections-module--queHeading--03703",x="sections-module--sectionBest--3c7cb",h="sections-module--sectionCount--c38ab",E="sections-module--sectionDownType--85bd9",y="sections-module--sectionQue--8aeac"},9768:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/465ebad6d1ba707202b34c2736dac438/3afab/cloud.svg","srcSet":"/static/465ebad6d1ba707202b34c2736dac438/e0fb6/cloud.svg 35w,\\n/static/465ebad6d1ba707202b34c2736dac438/2c196/cloud.svg 70w,\\n/static/465ebad6d1ba707202b34c2736dac438/3afab/cloud.svg 140w","sizes":"(min-width: 140px) 140px, 100vw"},"sources":[{"srcSet":"/static/465ebad6d1ba707202b34c2736dac438/53f45/cloud.webp 35w,\\n/static/465ebad6d1ba707202b34c2736dac438/b376f/cloud.webp 70w,\\n/static/465ebad6d1ba707202b34c2736dac438/a8419/cloud.webp 140w","type":"image/webp","sizes":"(min-width: 140px) 140px, 100vw"}]},"width":200,"height":191.42857142857144}')},4107:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/112077b843c9a4624e0d691952aee4f3/915cf/icon1.svg","srcSet":"/static/112077b843c9a4624e0d691952aee4f3/121f8/icon1.svg 28w,\\n/static/112077b843c9a4624e0d691952aee4f3/d5cb6/icon1.svg 55w,\\n/static/112077b843c9a4624e0d691952aee4f3/915cf/icon1.svg 110w","sizes":"(min-width: 110px) 110px, 100vw"},"sources":[{"srcSet":"/static/112077b843c9a4624e0d691952aee4f3/10f08/icon1.webp 28w,\\n/static/112077b843c9a4624e0d691952aee4f3/6d333/icon1.webp 55w,\\n/static/112077b843c9a4624e0d691952aee4f3/529ff/icon1.webp 110w","type":"image/webp","sizes":"(min-width: 110px) 110px, 100vw"}]},"width":110,"height":110}')},5791:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/b933e4efbfe08be92f454ada86a6e310/915cf/icon2.svg","srcSet":"/static/b933e4efbfe08be92f454ada86a6e310/121f8/icon2.svg 28w,\\n/static/b933e4efbfe08be92f454ada86a6e310/d5cb6/icon2.svg 55w,\\n/static/b933e4efbfe08be92f454ada86a6e310/915cf/icon2.svg 110w","sizes":"(min-width: 110px) 110px, 100vw"},"sources":[{"srcSet":"/static/b933e4efbfe08be92f454ada86a6e310/10f08/icon2.webp 28w,\\n/static/b933e4efbfe08be92f454ada86a6e310/6d333/icon2.webp 55w,\\n/static/b933e4efbfe08be92f454ada86a6e310/529ff/icon2.webp 110w","type":"image/webp","sizes":"(min-width: 110px) 110px, 100vw"}]},"width":110,"height":110}')},8423:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/a3b833decf12802ce45ed77d09f45304/915cf/icon5.svg","srcSet":"/static/a3b833decf12802ce45ed77d09f45304/121f8/icon5.svg 28w,\\n/static/a3b833decf12802ce45ed77d09f45304/d5cb6/icon5.svg 55w,\\n/static/a3b833decf12802ce45ed77d09f45304/915cf/icon5.svg 110w","sizes":"(min-width: 110px) 110px, 100vw"},"sources":[{"srcSet":"/static/a3b833decf12802ce45ed77d09f45304/10f08/icon5.webp 28w,\\n/static/a3b833decf12802ce45ed77d09f45304/6d333/icon5.webp 55w,\\n/static/a3b833decf12802ce45ed77d09f45304/529ff/icon5.webp 110w","type":"image/webp","sizes":"(min-width: 110px) 110px, 100vw"}]},"width":110,"height":110}')},324:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f7f4669383ffcbd339a98619a0f1967e/5b0a7/support.svg","srcSet":"/static/f7f4669383ffcbd339a98619a0f1967e/2da47/support.svg 33w,\\n/static/f7f4669383ffcbd339a98619a0f1967e/1c17c/support.svg 65w,\\n/static/f7f4669383ffcbd339a98619a0f1967e/5b0a7/support.svg 130w","sizes":"(min-width: 130px) 130px, 100vw"},"sources":[{"srcSet":"/static/f7f4669383ffcbd339a98619a0f1967e/d6e55/support.webp 33w,\\n/static/f7f4669383ffcbd339a98619a0f1967e/98f37/support.webp 65w,\\n/static/f7f4669383ffcbd339a98619a0f1967e/f18ce/support.webp 130w","type":"image/webp","sizes":"(min-width: 130px) 130px, 100vw"}]},"width":200,"height":200}')},9372:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/40e90962c62cc5b285208741c786cd93/86ef9/platform.svg","srcSet":"/static/40e90962c62cc5b285208741c786cd93/b71aa/platform.svg 38w,\\n/static/40e90962c62cc5b285208741c786cd93/66537/platform.svg 75w,\\n/static/40e90962c62cc5b285208741c786cd93/86ef9/platform.svg 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/40e90962c62cc5b285208741c786cd93/71a93/platform.webp 38w,\\n/static/40e90962c62cc5b285208741c786cd93/96891/platform.webp 75w,\\n/static/40e90962c62cc5b285208741c786cd93/3554d/platform.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":200,"height":200}')},5688:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/f988ea21e6965cfba3e1acd1390fdaca/915cf/icon3.svg","srcSet":"/static/f988ea21e6965cfba3e1acd1390fdaca/121f8/icon3.svg 28w,\\n/static/f988ea21e6965cfba3e1acd1390fdaca/d5cb6/icon3.svg 55w,\\n/static/f988ea21e6965cfba3e1acd1390fdaca/915cf/icon3.svg 110w","sizes":"(min-width: 110px) 110px, 100vw"},"sources":[{"srcSet":"/static/f988ea21e6965cfba3e1acd1390fdaca/10f08/icon3.webp 28w,\\n/static/f988ea21e6965cfba3e1acd1390fdaca/6d333/icon3.webp 55w,\\n/static/f988ea21e6965cfba3e1acd1390fdaca/529ff/icon3.webp 110w","type":"image/webp","sizes":"(min-width: 110px) 110px, 100vw"}]},"width":110,"height":110}')},311:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/fa0285ecd83d4e443afbe791199bbb8f/29f77/limit.svg","srcSet":"/static/fa0285ecd83d4e443afbe791199bbb8f/019f2/limit.svg 38w,\\n/static/fa0285ecd83d4e443afbe791199bbb8f/ed715/limit.svg 75w,\\n/static/fa0285ecd83d4e443afbe791199bbb8f/29f77/limit.svg 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/fa0285ecd83d4e443afbe791199bbb8f/fe38c/limit.webp 38w,\\n/static/fa0285ecd83d4e443afbe791199bbb8f/3982e/limit.webp 75w,\\n/static/fa0285ecd83d4e443afbe791199bbb8f/11515/limit.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":200,"height":104}')},4825:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/f9162942af88b1729bf4760afb00f862/915cf/icon4.svg","srcSet":"/static/f9162942af88b1729bf4760afb00f862/121f8/icon4.svg 28w,\\n/static/f9162942af88b1729bf4760afb00f862/d5cb6/icon4.svg 55w,\\n/static/f9162942af88b1729bf4760afb00f862/915cf/icon4.svg 110w","sizes":"(min-width: 110px) 110px, 100vw"},"sources":[{"srcSet":"/static/f9162942af88b1729bf4760afb00f862/10f08/icon4.webp 28w,\\n/static/f9162942af88b1729bf4760afb00f862/6d333/icon4.webp 55w,\\n/static/f9162942af88b1729bf4760afb00f862/529ff/icon4.webp 110w","type":"image/webp","sizes":"(min-width: 110px) 110px, 100vw"}]},"width":110,"height":110}')},5295:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/84c7e0fb8671955f5e84f64f2009a5d2/86ef9/clock.svg","srcSet":"/static/84c7e0fb8671955f5e84f64f2009a5d2/b71aa/clock.svg 38w,\\n/static/84c7e0fb8671955f5e84f64f2009a5d2/66537/clock.svg 75w,\\n/static/84c7e0fb8671955f5e84f64f2009a5d2/86ef9/clock.svg 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/84c7e0fb8671955f5e84f64f2009a5d2/71a93/clock.webp 38w,\\n/static/84c7e0fb8671955f5e84f64f2009a5d2/96891/clock.webp 75w,\\n/static/84c7e0fb8671955f5e84f64f2009a5d2/3554d/clock.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":200,"height":200}')},1588:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ba433b0e30fdc381c4f21e1237c33941/5b0a7/safe.svg","srcSet":"/static/ba433b0e30fdc381c4f21e1237c33941/2da47/safe.svg 33w,\\n/static/ba433b0e30fdc381c4f21e1237c33941/1c17c/safe.svg 65w,\\n/static/ba433b0e30fdc381c4f21e1237c33941/5b0a7/safe.svg 130w","sizes":"(min-width: 130px) 130px, 100vw"},"sources":[{"srcSet":"/static/ba433b0e30fdc381c4f21e1237c33941/d6e55/safe.webp 33w,\\n/static/ba433b0e30fdc381c4f21e1237c33941/98f37/safe.webp 65w,\\n/static/ba433b0e30fdc381c4f21e1237c33941/f18ce/safe.webp 130w","type":"image/webp","sizes":"(min-width: 130px) 130px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-youtube-to-mp-4-js-bab1f9fe292437826377.js.map