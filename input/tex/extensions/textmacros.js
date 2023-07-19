(()=>{"use strict";var t={d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{TextParser:()=>T});var a={};t.r(a),t.d(a,{TextMacrosMethods:()=>I});var o={};t.r(o),t.d(o,{TextBaseConfiguration:()=>w,TextMacrosConfiguration:()=>H});const s=("undefined"!=typeof window?window:global).MathJax._.components.global,r=(s.GLOBAL,s.isObject,s.combineConfig,s.combineDefaults,s.combineWithMathJax),n=(s.MathJax,MathJax._.input.tex.Configuration),i=n.Configuration,c=(n.ConfigurationHandler,n.ParserConfiguration),l=MathJax._.input.tex.ParseOptions.default,h=MathJax._.input.tex.Tags,m=(h.Label,h.TagInfo,h.AbstractTags,h.NoTags,h.AllTags,h.TagsFactory),p=MathJax._.input.tex.base.BaseItems,u=p.StartItem,d=p.StopItem,x=(p.OpenItem,p.CloseItem,p.PrimeItem,p.SubsupItem,p.OverItem,p.LeftItem,p.Middle,p.RightItem,p.BreakItem,p.BeginItem,p.EndItem,p.StyleItem),g=(p.PositionItem,p.CellItem,p.MmlItem),M=(p.FnItem,p.NotItem,p.NonscriptItem,p.DotsItem,p.ArrayItem,p.EqnArrayItem,p.MstyleItem,p.EquationItem,MathJax._.input.tex.TexParser.default),S=MathJax._.input.tex.TexError.default,f=MathJax._.input.tex.ParseUtil.default,k=MathJax._.core.MmlTree.MmlNode,A=(k.TEXCLASS,k.TEXCLASSNAMES,k.MATHVARIANTS,k.indentAttributes,k.AbstractMmlNode),b=(k.AbstractMmlTokenNode,k.AbstractMmlLayoutNode,k.AbstractMmlBaseNode,k.AbstractMmlEmptyNode,k.TextNode,k.XMLNode,MathJax._.input.tex.NodeUtil.default);class T extends M{get texParser(){return this.configuration.packageData.get("textmacros").texParser}get tags(){return this.texParser.tags}constructor(t,e,a,o){super(t,e,a),this.level=o}mml(){return this.copyLists(),this.configuration.popParser(),null!=this.level?this.create("node","mstyle",this.nodes,{displaystyle:!1,scriptlevel:this.level}):1===this.nodes.length?this.nodes[0]:this.create("node","mrow",this.nodes)}copyLists(){const t=this.texParser.configuration;for(const[e,a]of Object.keys(this.configuration.nodeLists))for(const o of a)t.addNode(e,o);this.configuration.nodeLists={}}Parse(){this.text="",this.nodes=[],this.envStack=[],super.Parse()}saveText(){if(this.text){const t=this.stack.env.mathvariant,e=f.internalText(this,this.text,t?{mathvariant:t}:{});this.text="",this.Push(e)}}Push(t){if(this.text&&this.saveText(),t instanceof d)return super.Push(t);t instanceof x?this.stack.env.mathcolor=this.stack.env.color:t instanceof A&&(this.addAttributes(t),this.nodes.push(t))}PushMath(t){const e=this.stack.env;t.isKind("TeXAtom")||(t=this.create("node","TeXAtom",[t]));for(const a of["mathsize","mathcolor"])e[a]&&!t.attributes.getExplicit(a)&&(t.isToken||t.isKind("mstyle")||(t=this.create("node","mstyle",[t])),b.setAttribute(t,a,e[a]));t.isInferred&&(t=this.create("node","mrow",t.childNodes)),this.nodes.push(t)}addAttributes(t){const e=this.stack.env;if(t.isToken)for(const a of["mathsize","mathcolor","mathvariant"])e[a]&&!t.attributes.getExplicit(a)&&b.setAttribute(t,a,e[a])}ParseTextArg(t,e){const a=this.GetArgument(t);return e=Object.assign(Object.assign({},this.stack.env),e),new T(a,e,this.configuration).mml()}ParseArg(t){return new T(this.GetArgument(t),this.stack.env,this.configuration).mml()}Error(t,e,...a){throw new S(t,e,...a)}}const v=MathJax._.util.Retries,y=(v.handleRetriesFor,v.retryAfter),P=MathJax._.input.tex.base.BaseMethods,C=(P.splitAlignArray,P.default),I={Comment(t,e){for(;t.i<t.string.length&&"\n"!==t.string.charAt(t.i);)t.i++;t.i++},Math(t,e){t.saveText();let a,o,s=t.i,r=0;for(;o=t.GetNext();)switch(a=t.i++,o){case"\\":")"===t.GetCS()&&(o="\\(");case"$":if(0===r&&e===o){const e=t.texParser.configuration,o=new M(t.string.substr(s,a-s),t.stack.env,e).mml();return void t.PushMath(o)}break;case"{":r++;break;case"}":0===r&&t.Error("ExtraCloseMissingOpen","Extra close brace or missing open brace"),r--}t.Error("MathNotTerminated","Math-mode is not properly terminated")},MathModeOnly(t,e){t.Error("MathModeOnly","'%1' allowed only in math mode",e)},Misplaced(t,e){t.Error("Misplaced","'%1' can not be used here",e)},OpenBrace(t,e){const a=t.stack.env;t.envStack.push(a),t.stack.env=Object.assign({},a)},CloseBrace(t,e){t.envStack.length?(t.saveText(),t.stack.env=t.envStack.pop()):t.Error("ExtraCloseMissingOpen","Extra close brace or missing open brace")},OpenQuote(t,e){t.string.charAt(t.i)===e?(t.text+="\u201c",t.i++):t.text+="\u2018"},CloseQuote(t,e){t.string.charAt(t.i)===e?(t.text+="\u201d",t.i++):t.text+="\u2019"},Tilde(t,e){t.text+="\xa0"},Space(t,e){for(t.text+=" ";t.GetNext().match(/\s/);)t.i++},SelfQuote(t,e){t.text+=e.substr(1)},Insert(t,e,a){t.text+=a},Accent(t,e,a){const o=t.ParseArg(e),s=t.create("token","mo",{},a);t.addAttributes(s),t.Push(t.create("node","mover",[o,s]))},Emph(t,e){const a="-tex-mathit"===t.stack.env.mathvariant?"normal":"-tex-mathit";t.Push(t.ParseTextArg(e,{mathvariant:a}))},TextFont(t,e,a){t.saveText(),t.Push(t.ParseTextArg(e,{mathvariant:a}))},SetFont(t,e,a){t.saveText(),t.stack.env.mathvariant=a},SetSize(t,e,a){t.saveText(),t.stack.env.mathsize=a},CheckAutoload(t,e){const a=t.configuration.packageData.get("autoload"),o=t.texParser;e=e.slice(1);const s=o.lookup("macro",e);if(!s||a&&s._func===a.Autoload){if(o.parse("macro",[o,e]),!s)return;y(Promise.resolve())}o.parse("macro",[t,e])},Macro:C.Macro,Spacer:C.Spacer,Hskip:C.Hskip,rule:C.rule,Rule:C.Rule,HandleRef:C.HandleRef,UnderOver:C.UnderOver,Lap:C.Lap,Phantom:C.Phantom,Smash:C.Smash,MmlToken:C.MmlToken},O=MathJax._.input.tex.SymbolMap,E=(O.parseResult,O.AbstractSymbolMap,O.RegExpMap,O.AbstractParseMap,O.CharacterMap,O.DelimiterMap,O.MacroMap),L=O.CommandMap,N=(O.EnvironmentMap,MathJax._.input.tex.TexConstants.TexConstant),R=MathJax._.util.lengths,_=(R.BIGDIMEN,R.UNITS,R.RELUNITS,R.MATHSPACE),F=(R.length2em,R.percent,R.em,R.emRounded,R.px,N.Variant);new E("text-special",{$:"Math","%":"Comment","^":"MathModeOnly",_:"MathModeOnly","&":"Misplaced","#":"Misplaced","~":"Tilde"," ":"Space","\t":"Space","\r":"Space","\n":"Space","\xa0":"Tilde","{":"OpenBrace","}":"CloseBrace","`":"OpenQuote","'":"CloseQuote"},I),new L("text-macros",{"(":"Math",$:"SelfQuote",_:"SelfQuote","%":"SelfQuote","{":"SelfQuote","}":"SelfQuote"," ":"SelfQuote","&":"SelfQuote","#":"SelfQuote","\\":["Macro","$\\\\$"],"'":["Accent","\xb4"],"\u2019":["Accent","\xb4"],"`":["Accent","`"],"\u2018":["Accent","`"],"^":["Accent","^"],'"':["Accent","\xa8"],"~":["Accent","~"],"=":["Accent","\xaf"],".":["Accent","\u02d9"],u:["Accent","\u02d8"],v:["Accent","\u02c7"],emph:"Emph",rm:["SetFont",F.NORMAL],mit:["SetFont",F.ITALIC],oldstyle:["SetFont",F.OLDSTYLE],cal:["SetFont",F.CALLIGRAPHIC],it:["SetFont","-tex-mathit"],bf:["SetFont",F.BOLD],sf:["SetFont",F.SANSSERIF],tt:["SetFont",F.MONOSPACE],frak:["TextFont",F.FRAKTUR],Bbb:["TextFont",F.DOUBLESTRUCK],tiny:["SetSize",.5],Tiny:["SetSize",.6],scriptsize:["SetSize",.7],small:["SetSize",.85],normalsize:["SetSize",1],large:["SetSize",1.2],Large:["SetSize",1.44],LARGE:["SetSize",1.73],huge:["SetSize",2.07],Huge:["SetSize",2.49],textnormal:["Macro","{\\rm #1}",1],textup:["Macro","{\\rm #1}",1],textrm:["Macro","{\\rm #1}",1],textit:["Macro","{\\it #1}",1],textbf:["Macro","{\\bf #1}",1],textsf:["Macro","{\\sf #1}",1],texttt:["Macro","{\\tt #1}",1],dagger:["Insert","\u2020"],ddagger:["Insert","\u2021"],S:["Insert","\xa7"],",":["Spacer",_.thinmathspace],":":["Spacer",_.mediummathspace],">":["Spacer",_.mediummathspace],";":["Spacer",_.thickmathspace],"!":["Spacer",_.negativethinmathspace],enspace:["Spacer",.5],quad:["Spacer",1],qquad:["Spacer",2],thinspace:["Spacer",_.thinmathspace],negthinspace:["Spacer",_.negativethinmathspace],hskip:"Hskip",hspace:"Hskip",kern:"Hskip",mskip:"Hskip",mspace:"Hskip",mkern:"Hskip",rule:"rule",Rule:["Rule"],Space:["Rule","blank"],color:"CheckAutoload",textcolor:"CheckAutoload",colorbox:"CheckAutoload",fcolorbox:"CheckAutoload",href:"CheckAutoload",style:"CheckAutoload",class:"CheckAutoload",data:"CheckAutoload",cssId:"CheckAutoload",unicode:"CheckAutoload",U:"CheckAutoload",char:"CheckAutoload",ref:["HandleRef",!1],eqref:["HandleRef",!0],underline:["UnderOver","2015"],llap:"Lap",rlap:"Lap",phantom:"Phantom",vphantom:["Phantom",1,0],hphantom:["Phantom",0,1],smash:"Smash",mmlToken:"MmlToken"},I);const w=i.create("text-base",{parser:"text",handler:{character:["command","text-special"],macro:["text-macros"]},fallback:{character:(t,e)=>{t.text+=e},macro:(t,e)=>{const a=t.texParser,o=a.lookup("macro",e);o&&o._func!==I.Macro&&t.Error("MathMacro","%1 is only supported in math mode","\\"+e),a.parse("macro",[t,e])}},items:{[u.prototype.kind]:u,[d.prototype.kind]:d,[g.prototype.kind]:g,[x.prototype.kind]:x}});function J(t,e,a,o){const s=t.configuration.packageData.get("textmacros");return t instanceof T||(s.texParser=t),s.parseOptions.clear(),[new T(e,o?{mathvariant:o}:{},s.parseOptions,a).mml()]}const H=i.create("textmacros",{config(t,e){const a=new c(e.parseOptions.options.textmacros.packages,["tex","text"]);a.init();const o=new l(a,[]);o.options=e.parseOptions.options,a.config(e),m.addTags(a.tags),o.tags=m.getDefault(),o.tags.configuration=o,o.packageData=e.parseOptions.packageData,o.packageData.set("textmacros",{parseOptions:o,jax:e,texParser:null}),o.options.internalMath=J},preprocessors:[t=>{const e=t.data.packageData.get("textmacros");e.parseOptions.nodeFactory.setMmlFactory(e.jax.mmlFactory)}],options:{textmacros:{packages:["text-base"]}}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/textmacros","4.0.0-beta.3","tex-extension"),r({_:{input:{tex:{textmacros:{TextMacrosConfiguration:o,TextMacrosMethods:a,TextParser:e}}}}})})();