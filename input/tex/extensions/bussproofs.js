(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{balanceRules:()=>J,clearDocument:()=>G,getProperty:()=>E,makeBsprAttributes:()=>U,removeProperty:()=>O,saveDocument:()=>q,setProperty:()=>_});var n={};e.r(n),e.d(n,{ProofTreeItem:()=>D});var o={};e.r(o),e.d(o,{default:()=>V});var r={};e.r(r),e.d(r,{BussproofsConfiguration:()=>ee});const i=("undefined"!=typeof window?window:global).MathJax._.components.global,a=(i.GLOBAL,i.isObject,i.combineConfig,i.combineDefaults,i.combineWithMathJax),l=(i.MathJax,MathJax._.input.tex.Configuration),s=l.Configuration,d=(l.ConfigurationHandler,l.ParserConfiguration,MathJax._.input.tex.TexError.default),c=MathJax._.input.tex.StackItem,f=(c.MmlStack,c.BaseItem),u=MathJax._.input.tex.Stack.default,p=MathJax._.input.tex.NodeUtil.default,m=MathJax._.input.tex.ParseUtil.default;let h=null,g=null,y=function(e){g.root=e;let{w:t}=h.outputJax.getBBox(g,h);return t},P=function(e){let t=0;for(;e&&!p.isType(e,"mtable");){if(p.isType(e,"text"))return null;p.isType(e,"mrow")?(e=e.childNodes[0],t=0):(e=e.parent.childNodes[t],t++)}return e},w=function(e,t){return e.childNodes["up"===t?1:0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]},x=function(e,t){return e.childNodes[t].childNodes[0].childNodes[0]},b=function(e){return x(e,0)},T=function(e){return x(e,e.childNodes.length-1)},N=function(e,t){return e.childNodes["up"===t?0:1].childNodes[0].childNodes[0].childNodes[0]},I=function(e){for(;e&&!p.isType(e,"mtd");)e=e.parent;return e},M=function(e){return e.parent.childNodes[e.parent.childNodes.indexOf(e)+1]},C=function(e){for(;e&&null==E(e,"inference");)e=e.parent;return e},L=function(e,t,n=!1){let o=0;if(e===t)return o;if(e!==t.parent){let r=e.childNodes,i=n?r.length-1:0;p.isType(r[i],"mspace")&&(o+=y(r[i])),e=t.parent}if(e===t)return o;let r=e.childNodes,i=n?r.length-1:0;return r[i]!==t&&(o+=y(r[i])),o},A=function(e,t=!1){let n=P(e),o=N(n,E(n,"inferenceRule"));return L(e,n,t)+(y(n)-y(o))/2},k=function(e,t,n,o=!1){if(E(t,"inferenceRule")||E(t,"labelledRule")){const n=e.nodeFactory.create("node","mrow");t.parent.replaceChild(n,t),n.setChildren([t]),S(t,n),t=n}const r=o?t.childNodes.length-1:0;let i=t.childNodes[r];p.isType(i,"mspace")?p.setAttribute(i,"width",m.Em(m.dimen2em(p.getAttribute(i,"width"))+n)):(i=e.nodeFactory.create("node","mspace",[],{width:m.Em(n)}),o?t.appendChild(i):(i.parent=t,t.childNodes.unshift(i)))},S=function(e,t){["inference","proof","maxAdjust","labelledRule"].forEach((n=>{let o=E(e,n);null!=o&&(_(t,n,o),O(e,n))}))};const v=function(e,t,n,o,r){let i=e.nodeFactory.create("node","mspace",[],{width:m.Em(r)});if("left"===o){let e=t.childNodes[n].childNodes[0];i.parent=e,e.childNodes.unshift(i)}else t.childNodes[n].appendChild(i);_(t.parent,"sequentAdjust_"+o,r)},B=function(e,t){let n=t.pop();for(;t.length;){let o=t.pop(),[r,i]=R(n,o);E(n.parent,"axiom")&&(v(e,r<0?n:o,0,"left",Math.abs(r)),v(e,i<0?n:o,2,"right",Math.abs(i))),n=o}},R=function(e,t){const n=y(e.childNodes[2]),o=y(t.childNodes[2]);return[y(e.childNodes[0])-y(t.childNodes[0]),n-o]};let J=function(e){g=new e.document.options.MathItem("",null,e.math.display);let t=e.data;!function(e){let t=e.nodeLists.sequent;if(t)for(let n,o=t.length-1;n=t[o];o--){if(E(n,"sequentProcessed")){O(n,"sequentProcessed");continue}let t=[],o=C(n);if(1===E(o,"inference")){for(t.push(n);1===E(o,"inference");){o=P(o);let e=b(w(o,E(o,"inferenceRule"))),r=E(e,"inferenceRule")?N(e,E(e,"inferenceRule")):e;E(r,"sequent")&&(n=r.childNodes[0],t.push(n),_(n,"sequentProcessed",!0)),o=e}B(e,t)}}}(t);let n=t.nodeLists.inference||[];for(let e of n){let n=E(e,"proof"),o=P(e),r=w(o,E(o,"inferenceRule")),i=b(r);if(E(i,"inference")){let n=A(i);if(n){k(t,i,-n);let r=L(e,o,!1);k(t,e,n-r)}}let a=T(r);if(null==E(a,"inference"))continue;let l=A(a,!0);k(t,a,-l,!0);let s,d=L(e,o,!0),c=E(e,"maxAdjust");if(null!=c&&(l=Math.max(l,c)),n||!(s=I(e))){k(t,E(e,"proof")?e:e.parent,l-d,!0);continue}let f=M(s);if(f){const n=t.nodeFactory.create("node","mspace",[],{width:l-d+"em"});f.appendChild(n),e.removeProperty("maxAdjust");continue}let u=C(s);u&&(l=E(u,"maxAdjust")?Math.max(E(u,"maxAdjust"),l):l,_(u,"maxAdjust",l))}},j="bspr_",F={[j+"maxAdjust"]:!0},_=function(e,t,n){p.setProperty(e,j+t,n)},E=function(e,t){return p.getProperty(e,j+t)},O=function(e,t){e.removeProperty(j+t)},U=function(e){e.data.root.walkTree(((e,t)=>{let n=[];e.getPropertyNames().forEach((t=>{!F[t]&&t.match(RegExp("^"+j))&&n.push(t+":"+e.getProperty(t))})),n.length&&p.setAttribute(e,"semantics",n.join(";"))}))},q=function(e){if(h=e.document,!("getBBox"in h.outputJax))throw Error("The bussproofs extension requires an output jax with a getBBox() method")},G=function(e){h=null};class D extends f{constructor(){super(...arguments),this.leftLabel=null,this.rigthLabel=null,this.innerStack=new u(this.factory,{},!0)}get kind(){return"proofTree"}checkItem(e){if(e.isKind("end")&&"prooftree"===e.getName()){let t=this.toMml();return _(t,"proof",!0),[[this.factory.create("mml",t),e],!0]}if(e.isKind("stop"))throw new d("EnvMissingEnd","Missing \\end{%1}",this.getName());return this.innerStack.Push(e),f.fail}toMml(){const e=super.toMml(),t=this.innerStack.Top();if(t.isKind("start")&&!t.Size())return e;this.innerStack.Push(this.factory.create("stop"));let n=this.innerStack.Top().toMml();return this.create("node","mrow",[n,e],{})}}const Q=MathJax._.input.tex.TexParser.default;let z={Prooftree:function(e,t){return e.Push(t),e.itemFactory.create("proofTree").setProperties({name:t.getName(),line:"solid",currentLine:"solid",rootAtTop:!1})},Axiom:function(e,t){let n=e.stack.Top();if("proofTree"!==n.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");let o=K(e,e.GetArgument(t));_(o,"axiom",!0),n.Push(o)}};const K=function(e,t){let n=m.internalMath(e,m.trimSpaces(t),0);if(!n[0].childNodes[0].childNodes.length)return e.create("node","mrow",[]);let o=e.create("node","mspace",[],{width:".5ex"}),r=e.create("node","mspace",[],{width:".5ex"});return e.create("node","mrow",[o,...n,r])};function $(e,t,n,o,r,i,a){const l=e.create("node","mtr",[e.create("node","mtd",[t],{})],{}),s=e.create("node","mtr",[e.create("node","mtd",n,{})],{});let d,c,f,u,p=e.create("node","mtable",a?[s,l]:[l,s],{align:"top 2",rowlines:i,framespacing:"0 0"});if(_(p,"inferenceRule",a?"up":"down"),o&&(d=e.create("node","mpadded",[o],{height:"+.5em",width:"+.5em",voffset:"-.15em"}),_(d,"prooflabel","left")),r&&(c=e.create("node","mpadded",[r],{height:"+.5em",width:"+.5em",voffset:"-.15em"}),_(c,"prooflabel","right")),o&&r)f=[d,p,c],u="both";else if(o)f=[d,p],u="left";else{if(!r)return p;f=[p,c],u="right"}return p=e.create("node","mrow",f),_(p,"labelledRule",u),p}function H(e,t){if("$"!==e.GetNext())throw new d("IllegalUseOfCommand","Use of %1 does not match it's definition.",t);e.i++;let n=e.GetUpTo(t,"$");if(-1===n.indexOf("\\fCenter"))throw new d("IllegalUseOfCommand","Missing \\fCenter in %1.",t);let[o,r]=n.split("\\fCenter"),i=new Q(o,e.stack.env,e.configuration).mml(),a=new Q(r,e.stack.env,e.configuration).mml(),l=new Q("\\fCenter",e.stack.env,e.configuration).mml();const s=e.create("node","mtd",[i],{}),c=e.create("node","mtd",[l],{}),f=e.create("node","mtd",[a],{}),u=e.create("node","mtr",[s,c,f],{}),p=e.create("node","mtable",[u],{columnspacing:".5ex",columnalign:"center 2"});return _(p,"sequent",!0),e.configuration.addNode("sequent",u),p}z.Inference=function(e,t,n){let o=e.stack.Top();if("proofTree"!==o.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");if(o.Size()<n)throw new d("BadProofTree","Proof tree badly specified.");const r=o.getProperty("rootAtTop"),i=1!==n||o.Peek()[0].childNodes.length?n:0;let a=[];do{a.length&&a.unshift(e.create("node","mtd",[],{})),a.unshift(e.create("node","mtd",[o.Pop()],{rowalign:r?"top":"bottom"})),n--}while(n>0);let l=e.create("node","mtr",a,{}),s=e.create("node","mtable",[l],{framespacing:"0 0"}),c=K(e,e.GetArgument(t)),f=o.getProperty("currentLine");f!==o.getProperty("line")&&o.setProperty("currentLine",o.getProperty("line"));let u=$(e,s,[c],o.getProperty("left"),o.getProperty("right"),f,r);o.setProperty("left",null),o.setProperty("right",null),_(u,"inference",i),e.configuration.addNode("inference",u),o.Push(u)},z.Label=function(e,t,n){let o=e.stack.Top();if("proofTree"!==o.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");let r=m.internalMath(e,e.GetArgument(t),0),i=r.length>1?e.create("node","mrow",r,{}):r[0];o.setProperty(n,i)},z.SetLine=function(e,t,n,o){let r=e.stack.Top();if("proofTree"!==r.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");r.setProperty("currentLine",n),o&&r.setProperty("line",n)},z.RootAtTop=function(e,t,n){let o=e.stack.Top();if("proofTree"!==o.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");o.setProperty("rootAtTop",n)},z.AxiomF=function(e,t){let n=e.stack.Top();if("proofTree"!==n.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");let o=H(e,t);_(o,"axiom",!0),n.Push(o)},z.FCenter=function(e,t){},z.InferenceF=function(e,t,n){let o=e.stack.Top();if("proofTree"!==o.kind)throw new d("IllegalProofCommand","Proof commands only allowed in prooftree environment.");if(o.Size()<n)throw new d("BadProofTree","Proof tree badly specified.");const r=o.getProperty("rootAtTop"),i=1!==n||o.Peek()[0].childNodes.length?n:0;let a=[];do{a.length&&a.unshift(e.create("node","mtd",[],{})),a.unshift(e.create("node","mtd",[o.Pop()],{rowalign:r?"top":"bottom"})),n--}while(n>0);let l=e.create("node","mtr",a,{}),s=e.create("node","mtable",[l],{framespacing:"0 0"}),c=H(e,t),f=o.getProperty("currentLine");f!==o.getProperty("line")&&o.setProperty("currentLine",o.getProperty("line"));let u=$(e,s,[c],o.getProperty("left"),o.getProperty("right"),f,r);o.setProperty("left",null),o.setProperty("right",null),_(u,"inference",i),e.configuration.addNode("inference",u),o.Push(u)};const V=z,W=MathJax._.input.tex.ParseMethods.default,X=MathJax._.input.tex.SymbolMap,Y=(X.parseResult,X.AbstractSymbolMap,X.RegExpMap,X.AbstractParseMap,X.CharacterMap,X.DelimiterMap,X.MacroMap,X.CommandMap),Z=X.EnvironmentMap;new Y("Bussproofs-macros",{AxiomC:"Axiom",UnaryInfC:["Inference",1],BinaryInfC:["Inference",2],TrinaryInfC:["Inference",3],QuaternaryInfC:["Inference",4],QuinaryInfC:["Inference",5],RightLabel:["Label","right"],LeftLabel:["Label","left"],AXC:"Axiom",UIC:["Inference",1],BIC:["Inference",2],TIC:["Inference",3],RL:["Label","right"],LL:["Label","left"],noLine:["SetLine","none",!1],singleLine:["SetLine","solid",!1],solidLine:["SetLine","solid",!1],dashedLine:["SetLine","dashed",!1],alwaysNoLine:["SetLine","none",!0],alwaysSingleLine:["SetLine","solid",!0],alwaysSolidLine:["SetLine","solid",!0],alwaysDashedLine:["SetLine","dashed",!0],rootAtTop:["RootAtTop",!0],alwaysRootAtTop:["RootAtTop",!0],rootAtBottom:["RootAtTop",!1],alwaysRootAtBottom:["RootAtTop",!1],fCenter:"FCenter",Axiom:"AxiomF",UnaryInf:["InferenceF",1],BinaryInf:["InferenceF",2],TrinaryInf:["InferenceF",3],QuaternaryInf:["InferenceF",4],QuinaryInf:["InferenceF",5]},V),new Z("Bussproofs-environments",W.environment,{prooftree:["Prooftree",null,!1]},V);const ee=s.create("bussproofs",{handler:{macro:["Bussproofs-macros"],environment:["Bussproofs-environments"]},items:{[D.prototype.kind]:D},preprocessors:[[q,1]],postprocessors:[[G,3],[U,2],[J,1]]});MathJax.loader&&MathJax.loader.checkVersion("[tex]/bussproofs","4.0.0-beta.3","tex-extension"),a({_:{input:{tex:{bussproofs:{BussproofsConfiguration:r,BussproofsItems:n,BussproofsMethods:o,BussproofsUtil:t}}}}})})();