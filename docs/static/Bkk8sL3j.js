import{Z as $e,G as h,m as Fe,r as V,S as te,h as ae,$ as Je,A as ke,B as ue,x as H,a0 as et,R as tt,E as oe,a1 as A,n as Pe,a2 as at,o as p,c as g,V as y,F as W,q as f,I as t,H as B,a as x,z as k,w,Y as U,a3 as de,b as _,M as ot,a4 as nt,t as P,s as Be,a5 as Te,D as st,a6 as lt,Q as ce,d as ee,v as Ve,p as it,e as rt,_ as ut}from"./BdzjtcIh.js";import{a as dt,u as ct}from"./DjmNT4fk.js";import{g as pt,b as Re,d as pe,v as ft,h as mt,E as L,j as vt,_ as Me,w as Ae,c as yt,i as ht}from"./DF_OZKVI.js";import{b as gt,u as bt,c as wt,a as xt,E as St}from"./DBcgAVdv.js";import{i as fe,V as _t}from"./BBPhVsfS.js";import{m as It}from"./DRuetYDV.js";import{U as me,d as ze}from"./CelxogyL.js";import{u as Et,a as Ct,E as kt}from"./66Oa5Riv.js";import{i as Tt}from"./CHIgUVhi.js";import{E as Vt,a as zt}from"./B8vqF2Lj.js";import"./r5W6hzzQ.js";import"./BUADUvnR.js";import"./8bjpfNPi.js";import"./C1eLqqJF.js";const Nt=()=>$e&&/firefox/i.test(window.navigator.userAgent),$t=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),Ft=["class","style"],Pt=/^on[A-Z]/,Bt=(o={})=>{const{excludeListeners:d=!1,excludeKeys:n}=o,a=h(()=>((n==null?void 0:n.value)||[]).concat(Ft)),s=Fe();return s?h(()=>{var l;return pt(Object.entries((l=s.proxy)==null?void 0:l.$attrs).filter(([c])=>!a.value.includes(c)&&!(d&&Pt.test(c))))}):h(()=>({}))};function Rt(o){const d=V();function n(){if(o.value==null)return;const{selectionStart:s,selectionEnd:l,value:c}=o.value;if(s==null||l==null)return;const v=c.slice(0,Math.max(0,s)),m=c.slice(Math.max(0,l));d.value={selectionStart:s,selectionEnd:l,value:c,beforeTxt:v,afterTxt:m}}function a(){if(o.value==null||d.value==null)return;const{value:s}=o.value,{beforeTxt:l,afterTxt:c,selectionStart:v}=d.value;if(l==null||c==null||v==null)return;let m=s.length;if(s.endsWith(c))m=s.length-c.length;else if(s.startsWith(l))m=l.length;else{const I=l[v-1],E=s.indexOf(I,v-1);E!==-1&&(m=E+1)}o.value.setSelectionRange(m,m)}return[n,a]}function Mt(o,{afterFocus:d,beforeBlur:n,afterBlur:a}={}){const s=Fe(),{emit:l}=s,c=te(),v=V(!1),m=i=>{v.value||(v.value=!0,l("focus",i),d==null||d())},I=i=>{var z;Je(n)&&n(i)||i.relatedTarget&&((z=c.value)!=null&&z.contains(i.relatedTarget))||(v.value=!1,l("blur",i),a==null||a())},E=()=>{var i;(i=o.value)==null||i.focus()};return ae(c,i=>{i&&i.setAttribute("tabindex","-1")}),dt(c,"click",E),{wrapperRef:c,isFocused:v,handleFocus:m,handleBlur:I}}let C;const At=`
  height:0 !important;
  visibility:hidden !important;
  ${Nt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Lt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ht(o){const d=window.getComputedStyle(o),n=d.getPropertyValue("box-sizing"),a=Number.parseFloat(d.getPropertyValue("padding-bottom"))+Number.parseFloat(d.getPropertyValue("padding-top")),s=Number.parseFloat(d.getPropertyValue("border-bottom-width"))+Number.parseFloat(d.getPropertyValue("border-top-width"));return{contextStyle:Lt.map(c=>`${c}:${d.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:n}}function Ne(o,d=1,n){var a;C||(C=document.createElement("textarea"),document.body.appendChild(C));const{paddingSize:s,borderSize:l,boxSizing:c,contextStyle:v}=Ht(o);C.setAttribute("style",`${v};${At}`),C.value=o.value||o.placeholder||"";let m=C.scrollHeight;const I={};c==="border-box"?m=m+l:c==="content-box"&&(m=m-s),C.value="";const E=C.scrollHeight-s;if(ke(d)){let i=E*d;c==="border-box"&&(i=i+s+l),m=Math.max(i,m),I.minHeight=`${i}px`}if(ke(n)){let i=E*n;c==="border-box"&&(i=i+s+l),m=Math.min(i,m)}return I.height=`${m}px`,(a=C.parentNode)==null||a.removeChild(C),C=void 0,I}const Ot=Re({id:{type:String,default:void 0},size:gt,disabled:Boolean,modelValue:{type:pe([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:pe([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:fe},prefixIcon:{type:fe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:pe([Object,Array,String]),default:()=>It({})},autofocus:{type:Boolean,default:!1}}),Dt={[me]:o=>ue(o),input:o=>ue(o),change:o=>ue(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Kt=["role"],jt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Ut=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Wt=H({name:"ElInput",inheritAttrs:!1}),Yt=H({...Wt,props:Ot,emits:Dt,setup(o,{expose:d,emit:n}){const a=o,s=et(),l=tt(),c=h(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e}),v=h(()=>[a.type==="textarea"?S.b():r.b(),r.m(Y.value),r.is("disabled",N.value),r.is("exceed",Ke.value),{[r.b("group")]:l.prepend||l.append,[r.bm("group","append")]:l.append,[r.bm("group","prepend")]:l.prepend,[r.m("prefix")]:l.prefix||a.prefixIcon,[r.m("suffix")]:l.suffix||a.suffixIcon||a.clearable||a.showPassword,[r.bm("suffix","password-clear")]:Q.value&&le.value,[r.b("hidden")]:a.type==="hidden"},s.class]),m=h(()=>[r.e("wrapper"),r.is("focus",se.value)]),I=Bt({excludeKeys:h(()=>Object.keys(c.value))}),{form:E,formItem:i}=Et(),{inputId:z}=Ct(a,{formItemContext:i}),Y=bt(),N=wt(),r=oe("input"),S=oe("textarea"),$=te(),T=te(),ne=V(!1),O=V(!1),X=V(!1),ve=V(),Z=te(a.inputStyle),R=h(()=>$.value||T.value),{wrapperRef:He,isFocused:se,handleFocus:q,handleBlur:G}=Mt(R,{afterBlur(){var e;a.validateEvent&&((e=i==null?void 0:i.validate)==null||e.call(i,"blur").catch(u=>ze()))}}),ye=h(()=>{var e;return(e=E==null?void 0:E.statusIcon)!=null?e:!1}),D=h(()=>(i==null?void 0:i.validateState)||""),he=h(()=>D.value&&_t[D.value]),Oe=h(()=>X.value?ft:mt),De=h(()=>[s.style]),ge=h(()=>[a.inputStyle,Z.value,{resize:a.resize}]),F=h(()=>Tt(a.modelValue)?"":String(a.modelValue)),Q=h(()=>a.clearable&&!N.value&&!a.readonly&&!!F.value&&(se.value||ne.value)),le=h(()=>a.showPassword&&!N.value&&!a.readonly&&!!F.value&&(!!F.value||se.value)),M=h(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!N.value&&!a.readonly&&!a.showPassword),ie=h(()=>F.value.length),Ke=h(()=>!!M.value&&ie.value>Number(a.maxlength)),je=h(()=>!!l.suffix||!!a.suffixIcon||Q.value||a.showPassword||M.value||!!D.value&&ye.value),[Ue,We]=Rt($);ct(T,e=>{if(Ye(),!M.value||a.resize!=="both")return;const u=e[0],{width:b}=u.contentRect;ve.value={right:`calc(100% - ${b+15+6}px)`}});const K=()=>{const{type:e,autosize:u}=a;if(!(!$e||e!=="textarea"||!T.value))if(u){const b=Te(u)?u.minRows:void 0,J=Te(u)?u.maxRows:void 0,Ce=Ne(T.value,b,J);Z.value={overflowY:"hidden",...Ce},A(()=>{T.value.offsetHeight,Z.value=Ce})}else Z.value={minHeight:Ne(T.value).minHeight}},Ye=(e=>{let u=!1;return()=>{var b;if(u||!a.autosize)return;((b=T.value)==null?void 0:b.offsetParent)===null||(e(),u=!0)}})(K),j=()=>{const e=R.value,u=a.formatter?a.formatter(F.value):F.value;!e||e.value===u||(e.value=u)},re=async e=>{Ue();let{value:u}=e.target;if(a.formatter&&(u=a.parser?a.parser(u):u),!O.value){if(u===F.value){j();return}n(me,u),n("input",u),await A(),j(),We()}},be=e=>{n("change",e.target.value)},we=e=>{n("compositionstart",e),O.value=!0},xe=e=>{var u;n("compositionupdate",e);const b=(u=e.target)==null?void 0:u.value,J=b[b.length-1]||"";O.value=!$t(J)},Se=e=>{n("compositionend",e),O.value&&(O.value=!1,re(e))},Xe=()=>{X.value=!X.value,_e()},_e=async()=>{var e;await A(),(e=R.value)==null||e.focus()},Ze=()=>{var e;return(e=R.value)==null?void 0:e.blur()},qe=e=>{ne.value=!1,n("mouseleave",e)},Ge=e=>{ne.value=!0,n("mouseenter",e)},Ie=e=>{n("keydown",e)},Qe=()=>{var e;(e=R.value)==null||e.select()},Ee=()=>{n(me,""),n("change",""),n("clear"),n("input","")};return ae(()=>a.modelValue,()=>{var e;A(()=>K()),a.validateEvent&&((e=i==null?void 0:i.validate)==null||e.call(i,"change").catch(u=>ze()))}),ae(F,()=>j()),ae(()=>a.type,async()=>{await A(),j(),K()}),Pe(()=>{!a.formatter&&a.parser,j(),A(K)}),d({input:$,textarea:T,ref:R,textareaStyle:ge,autosize:at(a,"autosize"),focus:_e,blur:Ze,select:Qe,clear:Ee,resizeTextarea:K}),(e,u)=>(p(),g("div",de(t(c),{class:t(v),style:t(De),role:e.containerRole,onMouseenter:Ge,onMouseleave:qe}),[y(" input "),e.type!=="textarea"?(p(),g(W,{key:0},[y(" prepend slot "),e.$slots.prepend?(p(),g("div",{key:0,class:f(t(r).be("group","prepend"))},[B(e.$slots,"prepend")],2)):y("v-if",!0),x("div",{ref_key:"wrapperRef",ref:He,class:f(t(m))},[y(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),g("span",{key:0,class:f(t(r).e("prefix"))},[x("span",{class:f(t(r).e("prefix-inner"))},[B(e.$slots,"prefix"),e.prefixIcon?(p(),k(t(L),{key:0,class:f(t(r).e("icon"))},{default:w(()=>[(p(),k(U(e.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),x("input",de({id:t(z),ref_key:"input",ref:$,class:t(r).e("inner")},t(I),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?X.value?"text":"password":e.type,disabled:t(N),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:we,onCompositionupdate:xe,onCompositionend:Se,onInput:re,onFocus:u[0]||(u[0]=(...b)=>t(q)&&t(q)(...b)),onBlur:u[1]||(u[1]=(...b)=>t(G)&&t(G)(...b)),onChange:be,onKeydown:Ie}),null,16,jt),y(" suffix slot "),t(je)?(p(),g("span",{key:1,class:f(t(r).e("suffix"))},[x("span",{class:f(t(r).e("suffix-inner"))},[!t(Q)||!t(le)||!t(M)?(p(),g(W,{key:0},[B(e.$slots,"suffix"),e.suffixIcon?(p(),k(t(L),{key:0,class:f(t(r).e("icon"))},{default:w(()=>[(p(),k(U(e.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),t(Q)?(p(),k(t(L),{key:1,class:f([t(r).e("icon"),t(r).e("clear")]),onMousedown:ot(t(nt),["prevent"]),onClick:Ee},{default:w(()=>[_(t(vt))]),_:1},8,["class","onMousedown"])):y("v-if",!0),t(le)?(p(),k(t(L),{key:2,class:f([t(r).e("icon"),t(r).e("password")]),onClick:Xe},{default:w(()=>[(p(),k(U(t(Oe))))]),_:1},8,["class"])):y("v-if",!0),t(M)?(p(),g("span",{key:3,class:f(t(r).e("count"))},[x("span",{class:f(t(r).e("count-inner"))},P(t(ie))+" / "+P(e.maxlength),3)],2)):y("v-if",!0),t(D)&&t(he)&&t(ye)?(p(),k(t(L),{key:4,class:f([t(r).e("icon"),t(r).e("validateIcon"),t(r).is("loading",t(D)==="validating")])},{default:w(()=>[(p(),k(U(t(he))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),e.$slots.append?(p(),g("div",{key:1,class:f(t(r).be("group","append"))},[B(e.$slots,"append")],2)):y("v-if",!0)],64)):(p(),g(W,{key:1},[y(" textarea "),x("textarea",de({id:t(z),ref_key:"textarea",ref:T,class:t(S).e("inner")},t(I),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(N),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ge),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:we,onCompositionupdate:xe,onCompositionend:Se,onInput:re,onFocus:u[2]||(u[2]=(...b)=>t(q)&&t(q)(...b)),onBlur:u[3]||(u[3]=(...b)=>t(G)&&t(G)(...b)),onChange:be,onKeydown:Ie}),null,16,Ut),t(M)?(p(),g("span",{key:0,style:Be(ve.value),class:f(t(r).e("count"))},P(t(ie))+" / "+P(e.maxlength),7)):y("v-if",!0)],64))],16,Kt))}});var Xt=Me(Yt,[["__file","input.vue"]]);const Zt=Ae(Xt),qt=H({name:"ElTimeline",setup(o,{slots:d}){const n=oe("timeline");return st("timeline",d),()=>lt("ul",{class:[n.b()]},[B(d,"default")])}}),Gt=Re({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:fe},hollow:{type:Boolean,default:!1}}),Qt=H({name:"ElTimelineItem"}),Jt=H({...Qt,props:Gt,setup(o){const d=o,n=oe("timeline-item"),a=h(()=>[n.e("node"),n.em("node",d.size||""),n.em("node",d.type||""),n.is("hollow",d.hollow)]);return(s,l)=>(p(),g("li",{class:f([t(n).b(),{[t(n).e("center")]:s.center}])},[x("div",{class:f(t(n).e("tail"))},null,2),s.$slots.dot?y("v-if",!0):(p(),g("div",{key:0,class:f(t(a)),style:Be({backgroundColor:s.color})},[s.icon?(p(),k(t(L),{key:0,class:f(t(n).e("icon"))},{default:w(()=>[(p(),k(U(s.icon)))]),_:1},8,["class"])):y("v-if",!0)],6)),s.$slots.dot?(p(),g("div",{key:1,class:f(t(n).e("dot"))},[B(s.$slots,"dot")],2)):y("v-if",!0),x("div",{class:f(t(n).e("wrapper"))},[!s.hideTimestamp&&s.placement==="top"?(p(),g("div",{key:0,class:f([t(n).e("timestamp"),t(n).is("top")])},P(s.timestamp),3)):y("v-if",!0),x("div",{class:f(t(n).e("content"))},[B(s.$slots,"default")],2),!s.hideTimestamp&&s.placement==="bottom"?(p(),g("div",{key:1,class:f([t(n).e("timestamp"),t(n).is("bottom")])},P(s.timestamp),3)):y("v-if",!0)],2)],2))}});var Le=Me(Jt,[["__file","timeline-item.vue"]]);const ea=Ae(qt,{TimelineItem:Le}),ta=yt(Le),aa=o=>(it("data-v-0a2500a5"),o=o(),rt(),o),oa=aa(()=>x("div",{class:"title"},"單號查詢",-1)),na={style:{"margin-bottom":"32px"}},sa={style:{"margin-bottom":"32px"}},la=H({__name:"orderNum",setup(o){Pe(()=>{d.value=ht()});const d=V(!1),n=V("1"),a=(c,v)=>{console.log(c,v)},s=[{content:"已將貨物寄送本國物流",timestamp:"2018-04-15"},{content:"進入台灣機場",timestamp:"2018-04-13"},{content:"已送達他國物流中心",timestamp:"2018-04-11"}],l=V("");return(c,v)=>{const m=Zt,I=kt,E=ta,i=ea,z=Vt,Y=zt,N=xt,r=St;return p(),g("section",null,[x("div",{class:f(t(d)?"":"wrap")},[oa,_(r,{justify:"space-between",gutter:20,style:{"align-items":"center"}},{default:w(()=>[_(N,{span:24},{default:w(()=>[_(Y,{modelValue:t(n),"onUpdate:modelValue":v[2]||(v[2]=S=>ce(n)?n.value=S:null),type:"card",class:"demo-tabs",onTabClick:a},{default:w(()=>[_(z,{label:"集運單號查詢",name:"1"},{default:w(()=>[x("section",null,[x("div",na,[_(m,{modelValue:t(l),"onUpdate:modelValue":v[0]||(v[0]=S=>ce(l)?l.value=S:null),style:{width:"240px","margin-right":"8px"},placeholder:"請輸入集運單號"},null,8,["modelValue"]),_(I,{type:"primary"},{default:w(()=>[ee("查詢")]),_:1})]),_(i,{style:{"max-width":"600px"}},{default:w(()=>[(p(),g(W,null,Ve(s,(S,$)=>_(E,{key:$,timestamp:S.timestamp},{default:w(()=>[ee(P(S.content),1)]),_:2},1032,["timestamp"])),64))]),_:1})])]),_:1}),_(z,{label:"貨運單號查詢",name:"2"},{default:w(()=>[x("section",null,[x("div",sa,[_(m,{modelValue:t(l),"onUpdate:modelValue":v[1]||(v[1]=S=>ce(l)?l.value=S:null),style:{width:"240px","margin-right":"8px"},placeholder:"請輸入集運單號"},null,8,["modelValue"]),_(I,{type:"primary"},{default:w(()=>[ee("查詢")]),_:1})]),_(i,{style:{"max-width":"600px"}},{default:w(()=>[(p(),g(W,null,Ve(s,(S,$)=>_(E,{key:$,timestamp:S.timestamp},{default:w(()=>[ee(P(S.content),1)]),_:2},1032,["timestamp"])),64))]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],2)])}}}),Sa=ut(la,[["__scopeId","data-v-0a2500a5"]]);export{Sa as default};