(()=>{"use strict";var e={d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Package:()=>l,PackageError:()=>h});var s={};e.r(s),e.d(s,{CONFIG:()=>g,Loader:()=>x,MathJax:()=>f,PathFilters:()=>m});const n="4.0.0-beta.3",a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:{};function o(e){return"object"==typeof e&&null!==e}function i(e,t){for(const s of Object.keys(t))"__esModule"!==s&&(!o(e[s])||!o(t[s])||t[s]instanceof Promise?null!==t[s]&&void 0!==t[s]&&e[s]!==t[s]&&(e[s]=t[s]):i(e[s],t[s]));return e}function r(e,t,s){e[t]||(e[t]={}),e=e[t];for(const t of Object.keys(s))o(e[t])&&o(s[t])?r(e,t,s[t]):null==e[t]&&null!=s[t]&&(e[t]=s[t]);return e}function d(e){return i(c,e)}void 0===a.MathJax&&(a.MathJax={}),a.MathJax.version||(a.MathJax={version:n,_:{},config:a.MathJax});const c=a.MathJax;class h extends Error{constructor(e,t){super(e),this.package=t}}class l{get canLoad(){return 0===this.dependencyCount&&!this.noLoad&&!this.isLoading&&!this.hasFailed}static resolvePath(e,t=!0){const s={name:e,original:e,addExtension:t};return x.pathFilters.execute(s),s.name}static loadAll(){for(const e of this.packages.values())e.canLoad&&e.load()}constructor(e,t=!1){this.isLoaded=!1,this.isLoading=!1,this.hasFailed=!1,this.dependents=[],this.dependencies=[],this.dependencyCount=0,this.provided=[],this.name=e,this.noLoad=t,l.packages.set(e,this),this.promise=this.makePromise(this.makeDependencies())}makeDependencies(){const e=[],t=l.packages,s=this.noLoad,n=this.name,a=[];g.dependencies.hasOwnProperty(n)?a.push(...g.dependencies[n]):"core"!==n&&a.push("core");for(const n of a){const a=t.get(n)||new l(n,s);this.dependencies.indexOf(a)<0&&(a.addDependent(this,s),this.dependencies.push(a),a.isLoaded||(this.dependencyCount++,e.push(a.promise)))}return e}makePromise(e){let t=new Promise(((e,t)=>{this.resolve=e,this.reject=t}));const s=g[this.name]||{};return s.ready&&(t=t.then((e=>s.ready(this.name)))),e.length&&(e.push(t),t=Promise.all(e).then((e=>e.join(", ")))),s.failed&&t.catch((e=>s.failed(new h(e,this.name)))),t}load(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=!0;const e=l.resolvePath(this.name);g.require?this.loadCustom(e):this.loadScript(e)}}loadCustom(e){try{const t=g.require(e);t instanceof Promise?t.then((()=>this.checkLoad())).catch((t=>this.failed("Can't load \""+e+'"\n'+t.message.trim()))):this.checkLoad()}catch(e){this.failed(e.message)}}loadScript(e){const t=document.createElement("script");t.src=e,t.charset="UTF-8",t.onload=e=>this.checkLoad(),t.onerror=t=>this.failed("Can't load \""+e+'"'),document.head.appendChild(t)}loaded(){this.isLoaded=!0,this.isLoading=!1;for(const e of this.dependents)e.requirementSatisfied();for(const e of this.provided)e.loaded();this.resolve(this.name)}failed(e){this.hasFailed=!0,this.isLoading=!1,this.reject(new h(e,this.name))}checkLoad(){((g[this.name]||{}).checkReady||(()=>Promise.resolve()))().then((()=>this.loaded())).catch((e=>this.failed(e)))}requirementSatisfied(){this.dependencyCount&&(this.dependencyCount--,this.canLoad&&this.load())}provides(e=[]){for(const t of e){let e=l.packages.get(t);e||(g.dependencies[t]||(g.dependencies[t]=[]),g.dependencies[t].push(t),e=new l(t,!0),e.isLoading=!0),this.provided.push(e)}}addDependent(e,t){this.dependents.push(e),t||this.checkNoLoad()}checkNoLoad(){if(this.noLoad){this.noLoad=!1;for(const e of this.dependencies)e.checkNoLoad()}}}l.packages=new Map;class p{constructor(){this.items=[],this.items=[]}[Symbol.iterator](){let e=0,t=this.items;return{next:()=>({value:t[e++],done:e>t.length})}}add(e,t=p.DEFAULTPRIORITY){let s=this.items.length;do{s--}while(s>=0&&t<this.items[s].priority);return this.items.splice(s+1,0,{item:e,priority:t}),e}remove(e){let t=this.items.length;do{t--}while(t>=0&&this.items[t].item!==e);t>=0&&this.items.splice(t,1)}}p.DEFAULTPRIORITY=5;class u extends p{execute(...e){for(const t of this){if(!1===t.item(...e))return!1}return!0}asyncExecute(...e){let t=-1,s=this.items;return new Promise(((n,a)=>{!function o(){for(;++t<s.length;){let i=s[t].item(...e);if(i instanceof Promise)return void i.then(o).catch((e=>a(e)));if(!1===i)return void n(!1)}n(!0)}()}))}}const m={source:e=>(g.source.hasOwnProperty(e.name)&&(e.name=g.source[e.name]),!0),normalize:e=>{const t=e.name;return t.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i)||(e.name="[mathjax]/"+t.replace(/^\.\//,"")),e.addExtension&&!t.match(/\.[^\/]+$/)&&(e.name+=".js"),!0},prefix:e=>{let t;for(;(t=e.name.match(/^\[([^\]]*)\]/))&&g.paths.hasOwnProperty(t[1]);)e.name=g.paths[t[1]]+e.name.substr(t[0].length);return!0}};var x;!function(e){const t=c.version;function s(s){e.versions.set(l.resolvePath(s),t)}e.versions=new Map,e.ready=function(...e){0===e.length&&(e=Array.from(l.packages.keys()));const t=[];for(const s of e){const e=l.packages.get(s)||new l(s,!0);t.push(e.promise)}return Promise.all(t)},e.load=function(...t){if(0===t.length)return Promise.resolve();const s=[];for(const n of t){let t=l.packages.get(n);t||(t=new l(n),t.provides(g.provides[n])),t.checkNoLoad(),s.push(t.promise.then((()=>{g.versionWarnings&&t.isLoaded&&!e.versions.has(l.resolvePath(n))&&console.warn(`No version information available for component ${n}`)})))}return l.loadAll(),Promise.all(s)},e.preLoad=function(...e){for(const t of e){let e=l.packages.get(t);e||(e=new l(t,!0),e.provides(g.provides[t])),e.loaded()}},e.defaultReady=function(){void 0!==f.startup&&f.config.startup.ready()},e.getRoot=function(){if("undefined"!=typeof document){const e=document.currentScript||document.getElementById("MathJax-script");if(e)return e.src.replace(/\/[^\/]*$/,"")}return"/"},e.checkVersion=function(e,n,a){return s(e),!(!g.versionWarnings||n===t)&&(console.warn(`Component ${e} uses ${n} of MathJax; version in use is ${t}`),!0)},e.saveVersion=s,e.pathFilters=new u,e.pathFilters.add(m.source,0),e.pathFilters.add(m.normalize,10),e.pathFilters.add(m.prefix,20)}(x||(x={}));const f=c;if(void 0===f.loader){r(f.config,"loader",{paths:{mathjax:x.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:x.defaultReady.bind(x),failed:e=>console.log(`MathJax(${e.package||"?"}): ${e.message}`),require:null,pathFilters:[],versionWarnings:!0}),d({loader:x});for(const e of f.config.loader.pathFilters)Array.isArray(e)?x.pathFilters.add(e[0],e[1]):x.pathFilters.add(e)}const g=f.config.loader;MathJax.loader&&MathJax.loader.checkVersion("loader",n,"loader"),d({_:{components:{loader:s,package:t}}});const b={"a11y/semantic-enrich":["input/mml","a11y/sre"],"a11y/complexity":["a11y/semantic-enrich"],"a11y/explorer":["a11y/semantic-enrich","ui/menu"],"[mml]/mml3":["input/mml"],"[tex]/all-packages":["input/tex-base"],"[tex]/action":["input/tex-base","[tex]/newcommand"],"[tex]/autoload":["input/tex-base","[tex]/require"],"[tex]/ams":["input/tex-base"],"[tex]/amscd":["input/tex-base"],"[tex]/bbox":["input/tex-base","[tex]/ams","[tex]/newcommand"],"[tex]/boldsymbol":["input/tex-base"],"[tex]/braket":["input/tex-base"],"[tex]/bussproofs":["input/tex-base"],"[tex]/cancel":["input/tex-base","[tex]/enclose"],"[tex]/centernot":["input/tex-base"],"[tex]/color":["input/tex-base"],"[tex]/colorv2":["input/tex-base"],"[tex]/colortbl":["input/tex-base","[tex]/color"],"[tex]/configmacros":["input/tex-base","[tex]/newcommand"],"[tex]/enclose":["input/tex-base"],"[tex]/extpfeil":["input/tex-base","[tex]/newcommand","[tex]/ams"],"[tex]/html":["input/tex-base"],"[tex]/mathtools":["input/tex-base","[tex]/newcommand","[tex]/ams"],"[tex]/mhchem":["input/tex-base","[tex]/ams"],"[tex]/newcommand":["input/tex-base"],"[tex]/noerrors":["input/tex-base"],"[tex]/noundefined":["input/tex-base"],"[tex]/physics":["input/tex-base"],"[tex]/require":["input/tex-base"],"[tex]/setoptions":["input/tex-base"],"[tex]/tagformat":["input/tex-base"],"[tex]/texhtml":["input/tex-base"],"[tex]/textcomp":["input/tex-base","[tex]/textmacros"],"[tex]/textmacros":["input/tex-base"],"[tex]/unicode":["input/tex-base"],"[tex]/verb":["input/tex-base"],"[tex]/cases":["[tex]/empheq"],"[tex]/empheq":["input/tex-base","[tex]/ams"]},y=Array.from(Object.keys(b)).filter((e=>"[tex]"===e.substr(0,5)&&"[tex]/autoload"!==e&&"[tex]/colorv2"!==e&&"[tex]/all-packages"!==e)),v={startup:["loader"],"input/tex":["input/tex-base","[tex]/ams","[tex]/newcommand","[tex]/noundefined","[tex]/require","[tex]/autoload","[tex]/configmacros"],"input/tex-full":["input/tex-base","[tex]/all-packages",...y],"[tex]/all-packages":y};r(MathJax.config.loader,"dependencies",b),r(MathJax.config.loader,"paths",{tex:"[mathjax]/input/tex/extensions",mml:"[mathjax]/input/mml/extensions",sre:"[mathjax]/sre/mathmaps"}),r(MathJax.config.loader,"provides",v),x.load(...g.load).then((()=>g.ready())).catch(((e,t)=>g.failed(e,t)))})();