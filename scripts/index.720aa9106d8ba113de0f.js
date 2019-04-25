!function(e){function t(t){for(var n,r,o=t[0],a=t[1],s=0,u=[];s<o.length;s++)r=o[s],i[r]&&u.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={2:0},i={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1,1:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var i="styles/"+({}[e]||e)+"."+{0:"c527b109ec51e383c59d",1:"d36df9093719a79d2bbf"}[e]+".css",a=o.p+i,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=(d=s[u]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===a))return t()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){var d;if((l=(d=c[u]).getAttribute("data-href"))===i||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.request=i,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){r[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+"scripts/"+({}[e]||e)+"."+{0:"09d5bfa337e68629deb3",1:"ff65ed6260f4b97fcd75"}[e]+".js"}(e),s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;o(o.s=1)}({1:function(e,t,n){e.exports=n("e6Wu")},VxdY:function(e,t,n){},YEPY:function(e,t,n){},e6Wu:function(e,t,n){"use strict";n.r(t);n("YEPY"),n("VxdY");var r=n("lG0c");const i=()=>{let e=window.location.href.split("#")[1],t=null;e&&(t=e.split("?")[0]);let i=window.location.href.split("?type=")[1];t?n("rqRs")("./"+t).then(e=>{window.scrollTo(0,0),void 0!==i&&null!==i&&""!==i?e.render_core(i):e.render_core(),document.querySelector(".latte-dataload").setAttribute("status","")}):(()=>{Object(r["bind"])(document.body)`
    <div class="latte-root">
        <div class="latte-header" status="">
            <div class="static-header" status="n">
                <div class="latte-logo">Todd Oh</div>
            </div>
            <ul class="latte-menu" status="n">
                <li class="menu-action open">
                    <div alt="Navigation menu open icon"></div>
                </li>
                <li class="menu-action close">
                    <div alt="Navigation menu close icon"></div>
                </li>
                ${[{id:"nav-section-work",name:"work",path:"work"},{id:"nav-section-about",name:"about",path:"about"}].map(e=>`\n                    <li class="sections" data-sectionid="${e.id}"><a href="#${e.path}">${e.name}</a></li>\n                `)}
            </ul>
        </div>

        <div class="latte-hero">
            <div class="hero-heading">
                <p>Pushing the boundaries in</p>
                <p>everything I do.</p>
            </div>
            <div class="hero-subheading">
                <p>A diverse experience in startups,</p>
                <p>now looking forward to contributing to integrate</p>
                <p>technology into our daily lives.</p>
            </div>
            <div class="hero-scrollguide" alt="chevron heading the contents below for scroll"></div>
        </div>

        <div class="latte-work-introduction">
            <div class="workintro thisisallabout">
                <div class="grid-1">
                    <div class="grid-image g1"></div>
                    <div class="grid-image g2"></div>
                </div>
                <div class="grid-2">
                    <div class="grid-image g3"></div>
                    <div class="grid-combination">
                        <div class="grid-image g4"></div>
                        <div class="grid-text">
                            <p class="subheading">thisisallabout</p>
                            <p class="description">The data-driven journalism project unravels complex issues and agendas by group, timeframe, and key topic using intelligent data analysis and great visualization.</p>
                            <p class="description">I developed a full set of website and back-end including the algorithm that examines a wide range of media in order to create a qualified look at important issues.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="workintro newsrooms">
                <div class="grid-text">
                    <p class="subheading">#Newsrooms</p>
                    <p class="description">A customized news aggregator application that provided the most updated articles on the issues and find important trending stories of which they were unaware.</p>
                    <p class="description">Furthermore, it eliminated possible systematic biases in delivering news articles and extracting the key points of the articles.</p>
                </div>
                <div class="grid-1">
                    <div class="grid-image g1"></div>
                </div>
                <div class="grid-2">
                    <div class="grid-image g2"></div>
                    <div class="grid-image g3"></div>
                </div>
            </div>

            <div class="workintro geolocation">
                <div class="grid-1">
                    <div class="grid-image g1"></div>
                    <p class="appdescription">“Poplar” app allowed you see and share status only with nearby friends</p>
                </div>
                <div class="grid-2">
                    <div class="grid-image g2"></div>
                    <div class="grid-combination">
                        <div class="grid-image g3"></div>
                        <p class="appdescription">"Adventure" was all about bringing us closer to each other through intelligent stories and nearby notification.</p>
                    </div>
                </div>
                <div class="grid-text">
                    <p class="subheading">Geolocation that is designed truly for time with friends</p>
                    <p class="description">It used geolocation tracking and real-time notification logic specifically designed to connect between multiple nearby people without revealing actual location.</p>
                </div>
                
            </div>

            <a href="#work"><div class="work-action-more">
                <p>Read more about me</p>
                <div alt="Read more about me link icon chevron next shaped"></div>
            </div></a>
        </div>

        <div class="latte-dataload"></div>
        <div class="latte-bidobido"</div>
    </div>`,window.screen.width<=980?document.body.setAttribute("banana-type","mobile"):document.body.setAttribute("banana-type","");const e=document.querySelectorAll(".latte-menu .menu-action"),t=document.querySelector(".latte-menu"),n=document.querySelector(".latte-header .static-header");e.forEach(e=>{e.addEventListener("click",()=>{"y"==t.getAttribute("status")?(t.setAttribute("status","n"),n.setAttribute("status","n")):(t.setAttribute("status","y"),n.setAttribute("status","y"))})}),n.addEventListener("click",()=>{"y"==t.getAttribute("status")?(t.setAttribute("status","n"),n.setAttribute("status","n")):(t.setAttribute("status","y"),n.setAttribute("status","y"))}),window.addEventListener("scroll",e=>{const t=document.querySelector(".latte-header");window.scrollY>=70?t.setAttribute("status","not_viewport"):t.setAttribute("status","")})})()};i(),window.addEventListener("hashchange",function(e){i()})},lG0c:function(e,t,n){var r,i,o;"undefined"!=typeof self&&self,i=[],void 0===(o="function"==typeof(r=function(){return function(e){"use strict";function t(){return this}function n(e){return e.join(I).replace(re,o).replace(ne,r)}function r(e,t,n,r){return"<"+t+n.replace(ie,i)+r}function i(e,t,n){return t+(n||'"')+H+(n||'"')}function o(e,t,n){return K.test(t)?e:"<"+t+n+"></"+t+">"}function a(e,t,n,r){return{name:r,node:t,path:n,type:e}}function s(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function u(e,t,n,r){for(var i=e.childNodes,o=i.length,s=0;s<o;){var c=i[s];switch(c.nodeType){case Z:var d=r.concat(s);l(c,t,n,d),u(c,t,n,d);break;case V:c.textContent===H&&(n.shift(),t.push(U.test(e.nodeName)?a("text",e,r):a("any",c,r.concat(s))));break;case J:U.test(e.nodeName)&&z.call(c.textContent)===I&&(n.shift(),t.push(a("text",e,r)))}s++}}function l(t,n,r,i){for(var o=new N,s=t.attributes,u=[],l=u.slice.call(s,0),c=l.length,d=0;d<c;){var f=l[d++];if(f.value===H){var v=f.name;if(!o.has(v)){var p=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),h=s[p]||s[p.toLowerCase()];o.set(v,h),n.push(a("attr",h,i,p))}u.push(f)}}for(c=u.length,d=0;d<c;){var g=u[d++];/^id$/i.test(g.name)?t.removeAttribute(g.name):t.removeAttributeNode(g)}var m=t.nodeName;if(/^script$/i.test(m)){var b=e.createElement(m);for(c=s.length,d=0;d<c;)b.setAttributeNode(s[d++].cloneNode(!0));b.textContent=t.textContent,t.parentNode.replaceChild(b,t)}}function c(e,t){var r=n(t),i=e.transform;i&&(r=i(r));var o=G(r,e.type);!function(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===z.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];u(o,a,t.slice(0),[]);var l={content:o,updates:function(n){for(var r=[],i=a.length,o=0;o<i;){var u=a[o++],l=s(n,u.path);switch(u.type){case"any":r.push(e.any(l,[]));break;case"attr":r.push(e.attribute(l,u.name,u.node));break;case"text":r.push(e.text(l)),l.textContent=""}}return function(){var e=arguments.length,o=e-1,a=1;if(i!==o)throw new Error(o+" values instead of "+i+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return oe.set(t,l),l}function d(t,n){var r=oe.get(n)||c(t,n),i=Y.call(e,r.content,!0),o={content:i,template:n,updates:r.updates(i)};return ae.set(t,o),o}function f(e){return this.type=e,function(e){return function(t){var n=ae.get(e);return null!=n&&n.template===t||(n=d(e,t)),n.updates.apply(null,arguments),n.content}}(this)}function v(e){for(var t=arguments.length,n=[ye(e)],r=1;r<t;)n.push(arguments[r++]);return n}function p(){var e=Ee.get(this),t=v.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):function(e){var t=new f(le in this?"svg":"html");Ee.set(this,{tagger:t,template:e}),this.textContent="",this.appendChild(t.apply(null,arguments))}.apply(this,t),this}function h(e){return arguments.length<2?null==e?Ne("html"):"string"==typeof e?h.wire(null,e):"raw"in e?Ne("html")(e):"nodeType"in e?h.bind(e):ke(e,"html"):("raw"in e?Ne("html"):h.wire).apply(null,arguments)}/*! (c) Andrea Giammarchi - ISC */var g={};try{g.WeakMap=WeakMap}catch(e){g.WeakMap=function(e,t){function n(t){i(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(r,this)}function r(e){this.set(e[0],e[1])}var i=t.defineProperty,o=t.hasOwnProperty,a=n.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return o.call(e,this._)},a.set=function(e,t){return i(e,this._,{configurable:!0,value:t}),this},n}(Math.random(),Object)}var m=g.WeakMap,b={};try{b.WeakSet=WeakSet}catch(e){!function(e,t){function n(){t(this,"_",{value:"_@ungap/weakmap"+e++})}var r=n.prototype;r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r.delete=function(e){return this.has(e)&&delete e[this._]},b.WeakSet=n}(Math.random(),Object.defineProperty)}var y=b.WeakSet,w={};try{w.Map=Map}catch(e){w.Map=function(){function e(e){return-1<(t=n.indexOf(e))}var t=0,n=[],r=[];return{delete:function(i){var o=e(i);return o&&(n.splice(t,1),r.splice(t,1)),o},get:function(n){return e(n)?r[t]:void 0},has:function(t){return e(t)},set:function(i,o){return r[e(i)?t:n.push(i)-1]=o,this}}}}var N=w.Map,k=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},x=function(e,t){return e==t},E=function(e){return e},A=function(e,t,n,r,i,o,a){var s=o-i;if(s<1)return-1;for(;n-t>=s;){for(var u=t,l=i;u<n&&l<o&&a(e[u],r[l]);)u++,l++;if(l===o)return t;t=u+1}return-1},C=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},j=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},O=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},S=function(e,t,n,r,i,o,a,s,u,l,c,d,f){!function(e,t,n,r,i,o,a,s,u){for(var l=new N,c=e.length,d=a,f=0;f<c;)switch(e[f++]){case 0:i++,d++;break;case 1:l.set(r[i],1),k(t,n,r,i++,i,d<s?t(o[d],0):u);break;case-1:d++}for(f=0;f<c;)switch(e[f++]){case 0:a++;break;case-1:l.has(o[a])?a++:j(t,n,o,a++,a)}}(function(e,t,n,r,i,o,a){var s,u,l,c,d,f,v,p=n+o,h=[];e:for(s=0;s<=p;s++){if(s>50)return null;for(v=s-1,d=s?h[s-1]:[0,0],f=h[s]=[],u=-s;u<=s;u+=2){for(c=u===-s||u!==s&&d[v+u-1]<d[v+u+1]?d[v+u+1]:d[v+u-1]+1,l=c-u;c<o&&l<n&&a(r[i+c],e[t+l]);)c++,l++;if(c===o&&l===n)break e;f[s+u]=c}}var g=Array(s/2+p/2),m=g.length-1;for(s=h.length-1;s>=0;s--){for(;c>0&&l>0&&a(r[i+c-1],e[t+l-1]);)g[m--]=0,c--,l--;if(!s)break;v=s-1,d=s?h[s-1]:[0,0],(u=c-l)==-s||u!==s&&d[v+u-1]<d[v+u+1]?(l--,g[m--]=1):(c--,g[m--]=-1)}return g}(n,r,o,a,s,l,d)||function(e,t,n,r,i,o,a,s){var u=0,l=r<s?r:s,c=Array(l++),d=Array(l);d[0]=-1;for(var f=1;f<l;f++)d[f]=a;for(var v=new N,p=o;p<a;p++)v.set(i[p],p);for(var h=t;h<n;h++){var g=v.get(e[h]);null!=g&&-1<(u=O(d,l,g))&&(d[u]=g,c[u]={newi:h,oldi:g,prev:c[u-1]})}for(u=--l,--a;d[u]>a;)--u;l=s+r-u;var m=Array(l),b=c[u];for(--n;b;){for(var y=b,w=y.newi,k=y.oldi;n>w;)m[--l]=1,--n;for(;a>k;)m[--l]=-1,--a;m[--l]=0,--n,--a,b=b.prev}for(;n>=t;)m[--l]=1,--n;for(;a>=o;)m[--l]=-1,--a;return m}(n,r,i,o,a,s,u,l),e,t,n,r,a,s,c,f)},T=function(e,t,n,r){r||(r={});for(var i=r.compare||x,o=r.node||E,a=null==r.before?null:o(r.before,0),s=t.length,u=s,l=0,c=n.length,d=0;l<u&&d<c&&i(t[l],n[d]);)l++,d++;for(;l<u&&d<c&&i(t[u-1],n[c-1]);)u--,c--;var f=l===u,v=d===c;if(f&&v)return n;if(f&&d<c)return k(o,e,n,d,c,C(o,t,l,s,a)),n;if(v&&l<u)return j(o,e,t,l,u),n;var p=u-l,h=c-d,g=-1;if(p<h){if(-1<(g=A(n,d,c,t,l,u,i)))return k(o,e,n,d,g,o(t[l],0)),k(o,e,n,g+p,c,C(o,t,u,s,a)),n}else if(h<p&&-1<(g=A(t,l,u,n,d,c,i)))return j(o,e,t,l,g),j(o,e,t,g+h,u),n;return p<2||h<2?(k(o,e,n,d,c,o(t[l],0)),j(o,e,t,l,u),n):p===h&&function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,c,t,l,u,i)?(k(o,e,n,d,c,C(o,t,u,s,a)),n):(S(o,e,n,d,c,h,t,l,u,p,s,i,a),n)},_={};_.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){function n(t,n){n||(n={});var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),r}return n.prototype=new n("").constructor.prototype,n}();var P=_.CustomEvent,M=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||L(this,n,t.call(this,e))},set:function(e){L(this,n,e)}}},L=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]};Object.defineProperties(t.prototype,{ELEMENT_NODE:{value:1},nodeType:{value:-1}});var D={},W={},$=[],R=W.hasOwnProperty,q=0,F={attributes:D,define:function(e,t){e.indexOf("-")<0?(e in W||(q=$.push(e)),W[e]=t):D[e]=t},invoke:function(e,t){for(var n=0;n<q;n++){var r=$[n];if(R.call(e,r))return W[r](e[r],t)}}},B=Array.isArray||function(e){var t=e.call([]);return function(n){return e.call(n)===t}}({}.toString),G=function(e){function t(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function n(t){return t===i?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var r=n(i),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",t(r,o.firstChild.childNodes),r}var i="fragment",o="content"in n("template"),a=o?function(e){var t=n("template");return t.innerHTML=e,t.content}:function(e){var r=n(i),o=n("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var s=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(s)}else o.innerHTML=e,a=o.childNodes;return t(r,a),r};return function(e,t){return("svg"===t?r:a)(e)}}(e),Y=function(e,t,n,r,i){var o="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(o?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),i=t.childNodes||[],o=i.length,a=0;n&&a<o;a++)r.appendChild(e(i[a],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),z="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},H="-"+Math.random().toFixed(6)+"%";(function(e,t,n){return"content"in e&&(e.innerHTML='<p tabindex="'+H+'"></p>',e.content.childNodes[0].getAttribute("tabindex")==H)})(e.createElement("template"))||(H="_dt: "+H.slice(1,-1)+";");var I="\x3c!--"+H+"--\x3e",V=8,Z=1,J=3,U=/^(?:style|textarea)$/i,K=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,Q=" \\f\\n\\r\\t",X="[ "+Q+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",ee="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",te="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",ne=new RegExp(ee+X+te+"+)([ "+Q+"]*/?>)","g"),re=new RegExp(ee+X+te+"*)([ "+Q+"]*/>)","g"),ie=new RegExp("("+X+"\\s*=\\s*)(['\"]?)"+I+"\\2","gi"),oe=new m,ae=new m,se=function(){function e(e,t,n){return t+"-"+n.toLowerCase()}function t(t){var n,r=[];for(n in t)r.push(n.replace(i,e),":",t[n],";");return r.join("")}function n(e,n){var i,o;return function(a){var s,u,l,c;switch(typeof a){case"object":if(a){if("object"===i){if(!n&&o!==a)for(u in o)u in a||(e[u]="")}else n?e.value="":e.cssText="";for(u in s=n?{}:e,a)c=a[u],l="number"!=typeof c||r.test(u)?c:c+"px",!n&&/^--/.test(u)?s.setProperty(u,l):s[u]=l;i="object",n?e.value=t(o=s):o=a;break}default:o!=a&&(i="string",o=a,n?e.value=a||"":e.cssText=a||"")}}}var r=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,i=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var r;return t?r=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),r=e.getAttributeNode("style")),r.value="",e.setAttributeNode(r),n(r,!0)}(e,t):n(e.style,!1)}}(),ue=function(e,t){function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var i=this.ownerDocument.createRange();i.setStartBefore(e?t[1]:n),i.setEndAfter(r),i.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,i=0,o=r.length;i<o;i++)t.appendChild(r[i]);return t},n}([].slice),le="ownerSVGElement",ce=t.prototype.nodeType,de=ue.prototype.nodeType,fe=/*! (c) Andrea Giammarchi */
function(e){var t="connected",n="dis"+t,r=e.Event,i=e.WeakSet,o=!0,a=new i;return function(e){return o&&(o=!o,function(e){function o(e){c=new l;for(var r,i=e.length,o=0;o<i;o++)s((r=e[o]).removedNodes,n,t),s(r.addedNodes,t,n);c=null}function s(e,t,n){for(var i,o=new r(t),a=e.length,s=0;s<a;1===(i=e[s++]).nodeType&&u(i,o,t,n));}function u(e,t,n,r){a.has(e)&&!c[n].has(e)&&(c[r].delete(e),c[n].add(e),e.dispatchEvent(t));for(var i=e.children||[],o=i.length,s=0;s<o;u(i[s++],t,n,r));}function l(){this[t]=new i,this[n]=new i}var c=null;try{new MutationObserver(o).observe(e,{subtree:!0,childList:!0})}catch(t){var d=0,f=[],v=function(e){f.push(e),clearTimeout(d),d=setTimeout(function(){o(f.splice(d=0,f.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){v({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){v({addedNodes:[e.target],removedNodes:[]})},!0)}}(e.ownerDocument)),a.add(e),e}}({Event:P,WeakSet:y}),ve=function(e){return{html:e}},pe=function e(t,n){switch(t.nodeType){case de:return 1/n<0?n?t.remove(!0):t.lastChild:n?t.valueOf(!0):t.firstChild;case ce:return e(t.render(),n);default:return t}},he=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ve).then(t):Promise.resolve(F.invoke(e,t)).then(t)},ge=function(e){return null!=e&&"then"in e},me=/^(?:form|list)$/i,be=[].slice;f.prototype={attribute:function(e,t,n){var r,i=le in e;if("style"===t)return se(e,n,i);if(/^on/.test(t)){var o=t.slice(2);return"connected"===o||"disconnected"===o?fe(e):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){r!==t&&(r&&e.removeEventListener(o,r,!1),r=t,t&&e.addEventListener(o,t,!1))}}if("data"===t||!i&&t in e&&!me.test(t))return function(n){r!==n&&(r=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in F.attributes)return function(n){var i=F.attributes[t](e,n);r!==i&&(r=i,null==i?e.removeAttribute(t):e.setAttribute(t,i))};var a=!1,s=n.cloneNode(!0);return function(t){r!==t&&(r=t,s.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(s)),s.value=t):(s.value=t,a||(a=!0,e.setAttributeNode(s)))))}},any:function(e,t){var n,r={node:pe,before:e},i=le in e?"svg":"html",o=!1;return function a(s){switch(typeof s){case"string":case"number":case"boolean":o?n!==s&&(n=s,t[0].textContent=s):(o=!0,n=s,t=T(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,s)],r));break;case"function":a(s(e));break;case"object":case"undefined":if(null==s){o=!1,t=T(e.parentNode,t,[],r);break}default:if(o=!1,n=s,B(s))if(0===s.length)t.length&&(t=T(e.parentNode,t,[],r));else switch(typeof s[0]){case"string":case"number":case"boolean":a({html:s});break;case"object":if(B(s[0])&&(s=s.concat.apply([],s)),ge(s[0])){Promise.all(s).then(a);break}default:t=T(e.parentNode,t,s,r)}else!function(e){return"ELEMENT_NODE"in e}(s)?ge(s)?s.then(a):"placeholder"in s?he(s,a):"text"in s?a(String(s.text)):"any"in s?a(s.any):"html"in s?t=T(e.parentNode,t,be.call(G([].concat(s.html).join(""),i).childNodes),r):a("length"in s?be.call(s):F.invoke(s,a)):t=T(e.parentNode,t,11===s.nodeType?be.call(s.childNodes):[s],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?ge(r)?r.then(n):"placeholder"in r?he(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?be.call(r).join(""):F.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}}}};/*! (c) Andrea Giammarchi - ISC */
var ye=function(){function t(e){return n?e:r(e)}var n=!1,r=function(i){if(!("raw"in i)||i.propertyIsEnumerable("raw")||!Object.isFrozen(i.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var o={};r=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)}}else n=!0;return t(i)};return t}(),we=new m,Ne=function(e){var t,n,r;return function(){var i=v.apply(null,arguments);return r!==i[0]?(r=i[0],n=new f(e),t=xe(n.apply(n,i))):n.apply(n,i),t}},ke=function(e,t){var n=t.indexOf(":"),r=we.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||we.set(e,r={}),r[i]||(r[i]=Ne(t))},xe=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new ue(t):e},Ee=new m,Ae=F.define,Ce=f.prototype;return h.Component=t,h.bind=function(e){return p.bind(e)},h.define=Ae,h.diff=T,h.hyper=h,h.observe=fe,h.tagger=Ce,h.wire=function(e,t){return null==e?Ne(t||"html"):ke(e,t||"html")},h._={WeakMap:m,WeakSet:y},function(e){var n=new m,r=Object.create,i=function(e,t){var n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(t,{for:{configurable:!0,value:function(e,t){return function(e,t,n,o){var a=t.get(e)||i(e,t);switch(typeof o){case"object":case"function":var s=a.w||(a.w=new m);return s.get(o)||function(e,t,n){return e.set(t,n),n}(s,o,new e(n));default:var u=a.p||(a.p=r(null));return u[o]||(u[o]=new e(n))}}(this,n.get(e)||function(e){var t=new N;return n.set(e,t),t}(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:M("html",e),svg:M("svg",e),state:M("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new P(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.firstChild).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Ne),h}(document)})?r.apply(t,i):r)||(e.exports=o)},rqRs:function(e,t,n){var r={"./":["e6Wu"],"./about":["mka7",0],"./about.js":["mka7",0],"./index":["e6Wu"],"./index.js":["e6Wu"],"./work":["GuD+",1],"./work.js":["GuD+",1]};function i(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(r)},i.id="rqRs",e.exports=i}});