(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{void 0!==u&&u.toStringTag&&Object.defineProperty(e,u.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ConfigMacrosConfiguration:()=>J});const n=("undefined"!=typeof window?window:global).MathJax._.components.global,o=(n.GLOBAL,n.isObject,n.combineConfig,n.combineDefaults,n.combineWithMathJax),a=(n.MathJax,MathJax._.input.tex.Configuration),i=a.Configuration,r=(a.ConfigurationHandler,a.ParserConfiguration,MathJax._.util.Options),s=(r.isObject,r.APPEND,r.REMOVE,r.OPTIONS,r.Expandable,r.expandable),c=(r.makeArray,r.keys,r.copy,r.insert,r.defaultOptions,r.userOptions,r.selectOptions,r.selectOptionsFromKeys,r.separateOptions,r.lookup,MathJax._.input.tex.SymbolMap),p=(c.parseResult,c.AbstractSymbolMap,c.RegExpMap,c.AbstractParseMap,c.CharacterMap,c.DelimiterMap,c.MacroMap),m=c.CommandMap,l=c.EnvironmentMap,d=MathJax._.input.tex.ParseMethods.default,f=MathJax._.input.tex.Symbol,u=f.Symbol,M=f.Macro,g=MathJax._.input.tex.newcommand.NewcommandMethods.default,x=MathJax._.input.tex.newcommand.NewcommandItems.BeginEnvItem,h=MathJax._.input.tex.base.BaseMethods,b=(h.splitAlignArray,h.default),O="configmacros-map",y="configmacros-active-map",v="configmacros-env-map";function w(e,t,n){const o=n.parseOptions.handlers.retrieve(t),a=n.parseOptions.options[e];for(const e of Object.keys(a)){const t="string"==typeof a[e]?[a[e]]:a[e],n=Array.isArray(t[2])?new M(e,g.MacroWithTemplate,t.slice(0,2).concat(t[2])):new M(e,g.Macro,t);o.add(e,n)}}const J=i.create("configmacros",{init:function(e){new p(y,{},b),new m(O,{},{}),new l(v,d.environment,{},{}),e.append(i.local({handler:{character:[y],macro:[O],environment:[v]},priority:3}))},config:function(e,t){!function(e){w("active",y,e)}(t),function(e){w("macros",O,e)}(t),function(e){const t=e.parseOptions.handlers.retrieve(v),n=e.parseOptions.options.environments;for(const e of Object.keys(n))t.add(e,new M(e,g.BeginEnv,[!0].concat(n[e])))}(t)},items:{[x.prototype.kind]:x},options:{active:s({}),macros:s({}),environments:s({})}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/configmacros","4.0.0-beta.3","tex-extension"),o({_:{input:{tex:{configmacros:{ConfigMacrosConfiguration:t}}}}})})();