(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{NoErrorsConfiguration:()=>i});const r=("undefined"!=typeof window?window:global).MathJax._.components.global,t=(r.GLOBAL,r.isObject,r.combineConfig,r.combineDefaults,r.combineWithMathJax),n=(r.MathJax,MathJax._.input.tex.Configuration),a=n.Configuration;n.ConfigurationHandler,n.ParserConfiguration;const i=a.create("noerrors",{nodes:{error:function(e,o,r,t){let n=e.create("token","mtext",{},t.replace(/\n/g," "));return e.create("node","merror",[n],{"data-mjx-error":o,title:o})}}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/noerrors","4.0.0-beta.3","tex-extension"),t({_:{input:{tex:{noerrors:{NoErrorsConfiguration:o}}}}})})();