(()=>{"use strict";var e={d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ExtpfeilConfiguration:()=>d,ExtpfeilMethods:()=>c});const a=("undefined"!=typeof window?window:global).MathJax._.components.global,r=(a.GLOBAL,a.isObject,a.combineConfig,a.combineDefaults,a.combineWithMathJax),o=(a.MathJax,MathJax._.input.tex.Configuration),n=o.Configuration,i=(o.ConfigurationHandler,o.ParserConfiguration,MathJax._.input.tex.SymbolMap),x=(i.parseResult,i.AbstractSymbolMap,i.RegExpMap,i.AbstractParseMap,i.CharacterMap,i.DelimiterMap,i.MacroMap,i.CommandMap),m=(i.EnvironmentMap,MathJax._.input.tex.ams.AmsMethods),u=m.AmsMethods,l=(m.NEW_OPS,MathJax._.input.tex.newcommand.NewcommandUtil.default),w=MathJax._.input.tex.newcommand.NewcommandConfiguration.NewcommandConfiguration,p=MathJax._.input.tex.TexError.default;let c={};c.xArrow=u.xArrow,c.NewExtArrow=function(e,t){let a=e.GetArgument(t);const r=e.GetArgument(t),o=e.GetArgument(t);if(!a.match(/^\\([a-z]+|.)$/i))throw new p("NewextarrowArg1","First argument to %1 must be a control sequence name",t);if(!r.match(/^(\d+),(\d+)$/))throw new p("NewextarrowArg2","Second argument to %1 must be two integers separated by a comma",t);if(!o.match(/^(\d+|0x[0-9A-F]+)$/i))throw new p("NewextarrowArg3","Third argument to %1 must be a unicode character number",t);a=a.substr(1);let n=r.split(",");l.addMacro(e,a,c.xArrow,[parseInt(o),parseInt(n[0]),parseInt(n[1])])},new x("extpfeil",{xtwoheadrightarrow:["xArrow",8608,12,16],xtwoheadleftarrow:["xArrow",8606,17,13],xmapsto:["xArrow",8614,6,7],xlongequal:["xArrow",61,7,7],xtofrom:["xArrow",8644,12,12],Newextarrow:"NewExtArrow"},c);const d=n.create("extpfeil",{handler:{macro:["extpfeil"]},init:function(e){w.init(e)}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/extpfeil","4.0.0-beta.3","tex-extension"),r({_:{input:{tex:{extpfeil:{ExtpfeilConfiguration:t}}}}})})();