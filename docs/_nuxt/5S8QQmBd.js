import{L as _e,d as Oe,c as v,g as m,M as qe,K,N as ne,O as X,P as G,Q as Ce,R as ae,r as F,e as oe,S as O,T as Se,U as Me,V as Ne,W as ze,X as Q,Y as je,Z as Ve,$ as J,G as D,a0 as De,a1 as Fe,a2 as Ke,o as we,a3 as ue,a4 as Qe,_ as Ue,v as Xe,z as Y,A as H,t as We,C as Ye,D as He,x as M}from"./BnDKJgWa.js";const W=e=>_e(Oe(e)),Pe=e=>_e(e),ie={xs:18,sm:24,md:32,lg:38,xl:46},$e={size:String};function Ee(e,t=ie){return v(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function Z(e,t){return e!==void 0&&e()||t}function V(e,t){return e!==void 0?t.concat(e()):t}function Ge(e,t,a,i,o,n){t.key=i+o;const r=m(e,t,a);return o===!0?qe(r,n()):r}const se="0 0 24 24",ce=e=>e,ee=e=>`ionicons ${e}`,Be={"mdi-":e=>`mdi ${e}`,"icon-":ce,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":ee,"ion-ios":ee,"ion-logo":ee,"iconfont ":ce,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Te={o_:"-outlined",r_:"-round",s_:"-sharp"},Ae={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ze=new RegExp("^("+Object.keys(Be).join("|")+")"),Je=new RegExp("^("+Object.keys(Te).join("|")+")"),de=new RegExp("^("+Object.keys(Ae).join("|")+")"),et=/^[Mm]\s?[-+]?\.?\d/,tt=/^img:/,nt=/^svguse:/,at=/^ion-/,it=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,ve=W({name:"QIcon",props:{...$e,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=K(),i=Ee(e),o=v(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),n=v(()=>{let r,l=e.name;if(l==="none"||!l)return{none:!0};if(a.iconMapFn!==null){const c=a.iconMapFn(l);if(c!==void 0)if(c.icon!==void 0){if(l=c.icon,l==="none"||!l)return{none:!0}}else return{cls:c.cls,content:c.content!==void 0?c.content:" "}}if(et.test(l)===!0){const[c,p=se]=l.split("|");return{svg:!0,viewBox:p,nodes:c.split("&&").map(s=>{const[y,b,q]=s.split("@@");return m("path",{style:b,d:y,transform:q})})}}if(tt.test(l)===!0)return{img:!0,src:l.substring(4)};if(nt.test(l)===!0){const[c,p=se]=l.split("|");return{svguse:!0,src:c.substring(7),viewBox:p}}let k=" ";const h=l.match(Ze);if(h!==null)r=Be[h[1]](l);else if(it.test(l)===!0)r=l;else if(at.test(l)===!0)r=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(de.test(l)===!0){r="notranslate material-symbols";const c=l.match(de);c!==null&&(l=l.substring(6),r+=Ae[c[1]]),k=l}else{r="notranslate material-icons";const c=l.match(Je);c!==null&&(l=l.substring(2),r+=Te[c[1]]),k=l}return{cls:r,content:k}});return()=>{const r={class:o.value,style:i.value,"aria-hidden":"true",role:"presentation"};return n.value.none===!0?m(e.tag,r,Z(t.default)):n.value.img===!0?m(e.tag,r,V(t.default,[m("img",{src:n.value.src})])):n.value.svg===!0?m(e.tag,r,V(t.default,[m("svg",{viewBox:n.value.viewBox||"0 0 24 24"},n.value.nodes)])):n.value.svguse===!0?m(e.tag,r,V(t.default,[m("svg",{viewBox:n.value.viewBox},[m("use",{"xlink:href":n.value.src})])])):(n.value.cls!==void 0&&(r.class+=" "+n.value.cls),m(e.tag,r,V(t.default,[n.value.content])))}}}),ot={dark:{type:Boolean,default:null}};function rt(e,t){return v(()=>e.dark===null?t.dark.isActive:e.dark)}const Re={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},lt=Object.keys(Re),ut={align:{type:String,validator:e=>lt.includes(e)}};function st(e){return v(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Re[t]}`})}function Le(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{Le(e,a)}):e.add(t)}function ct(e){const t=new Set;return e.forEach(a=>{Le(t,a)}),Array.from(t)}function Ie(e){return e.appContext.config.globalProperties.$router!==void 0}function fe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function me(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function dt(e,t){for(const a in t){const i=t[a],o=e[a];if(typeof i=="string"){if(i!==o)return!1}else if(Array.isArray(o)===!1||o.length!==i.length||i.some((n,r)=>n!==o[r]))return!1}return!0}function ge(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,i)=>a===t[i]):e.length===1&&e[0]===t}function vt(e,t){return Array.isArray(e)===!0?ge(e,t):Array.isArray(t)===!0?ge(t,e):e===t}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(vt(e[a],t[a])===!1)return!1;return!0}const mt={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function gt({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=K(),{props:i,proxy:o,emit:n}=a,r=Ie(a),l=v(()=>i.disable!==!0&&i.href!==void 0),k=t===!0?v(()=>r===!0&&i.disable!==!0&&l.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!==""):v(()=>r===!0&&l.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!==""),h=v(()=>k.value===!0?A(i.to):null),c=v(()=>h.value!==null),p=v(()=>l.value===!0||c.value===!0),s=v(()=>i.type==="a"||p.value===!0?"a":i.tag||e||"div"),y=v(()=>l.value===!0?{href:i.href,target:i.target}:c.value===!0?{href:h.value.href,target:i.target}:{}),b=v(()=>{if(c.value===!1)return-1;const{matched:x}=h.value,{length:w}=x,C=x[w-1];if(C===void 0)return-1;const E=o.$route.matched;if(E.length===0)return-1;const T=E.findIndex(me.bind(null,C));if(T!==-1)return T;const _=fe(x[w-2]);return w>1&&fe(C)===_&&E[E.length-1].path!==_?E.findIndex(me.bind(null,x[w-2])):T}),q=v(()=>c.value===!0&&b.value!==-1&&dt(o.$route.params,h.value.params)),f=v(()=>q.value===!0&&b.value===o.$route.matched.length-1&&ft(o.$route.params,h.value.params)),S=v(()=>c.value===!0?f.value===!0?` ${i.exactActiveClass} ${i.activeClass}`:i.exact===!0?"":q.value===!0?` ${i.activeClass}`:"":"");function A(x){try{return o.$router.resolve(x)}catch{}return null}function $(x,{returnRouterError:w,to:C=i.to,replace:E=i.replace}={}){if(i.disable===!0)return x.preventDefault(),Promise.resolve(!1);if(x.metaKey||x.altKey||x.ctrlKey||x.shiftKey||x.button!==void 0&&x.button!==0||i.target==="_blank")return Promise.resolve(!1);x.preventDefault();const T=o.$router[E===!0?"replace":"push"](C);return w===!0?T:T.then(()=>{}).catch(()=>{})}function B(x){if(c.value===!0){const w=C=>$(x,C);n("click",x,w),x.defaultPrevented!==!0&&w()}else n("click",x)}return{hasRouterLink:c,hasHrefLink:l,hasLink:p,linkTag:s,resolvedLink:h,linkIsActive:q,linkIsExactActive:f,linkClass:S,linkAttrs:y,getLink:A,navigateToRouterLink:$,navigateOnClick:B}}const ht={size:{type:[Number,String],default:"1em"},color:String};function pt(e){return{cSize:v(()=>e.size in ie?`${ie[e.size]}px`:e.size),classes:v(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const yt=W({name:"QSpinner",props:{...ht,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=pt(e);return()=>m("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[m("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function bt(e,t){const a=e.style;for(const i in t)a[i]=t[i]}function xt(e,t=250){let a=!1,i;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),i=e.apply(this,arguments)),i}}function he(e,t,a,i){a.modifiers.stop===!0&&Ce(e);const o=a.modifiers.color;let n=a.modifiers.center;n=n===!0||i===!0;const r=document.createElement("span"),l=document.createElement("span"),k=ae(e),{left:h,top:c,width:p,height:s}=t.getBoundingClientRect(),y=Math.sqrt(p*p+s*s),b=y/2,q=`${(p-y)/2}px`,f=n?q:`${k.left-h-b}px`,S=`${(s-y)/2}px`,A=n?S:`${k.top-c-b}px`;l.className="q-ripple__inner",bt(l,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${f},${A},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${o?" text-"+o:""}`,r.setAttribute("dir","ltr"),r.appendChild(l),t.appendChild(r);const $=()=>{r.remove(),clearTimeout(B)};a.abort.push($);let B=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${q},${S},0) scale3d(1,1,1)`,l.style.opacity=.2,B=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,B=setTimeout(()=>{r.remove(),a.abort.splice(a.abort.indexOf($),1)},275)},250)},50)}function pe(e,{modifiers:t,value:a,arg:i}){const o=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||i,keyCodes:[].concat(o.keyCodes||13)}}const kt=Pe({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const i={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(o){i.enabled===!0&&o.qSkipRipple!==!0&&o.type===(i.modifiers.early===!0?"pointerdown":"click")&&he(o,e,i,o.qKeyEvent===!0)},keystart:xt(o=>{i.enabled===!0&&o.qSkipRipple!==!0&&ne(o,i.modifiers.keyCodes)===!0&&o.type===`key${i.modifiers.early===!0?"down":"up"}`&&he(o,e,i,!0)},300)};pe(i,t),e.__qripple=i,X(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&pe(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),G(t,"main"),delete e._qripple)}}),ye={none:0,xs:4,sm:8,md:16,lg:24,xl:32},_t={xs:8,sm:10,md:14,lg:20,xl:24},qt=["button","submit","reset"],Ct=/[^\s]\/[^\s]/,St=["flat","outline","push","unelevated"],wt=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Pt={...$e,...mt,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...St.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ut.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function $t(e){const t=Ee(e,_t),a=st(e),{hasRouterLink:i,hasLink:o,linkTag:n,linkAttrs:r,navigateOnClick:l}=gt({fallbackTag:"button"}),k=v(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(S=>S in ye?ye[S]+"px":S).join(" "),minWidth:"0",minHeight:"0"}):f}),h=v(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),c=v(()=>e.disable!==!0&&e.loading!==!0),p=v(()=>c.value===!0?e.tabindex||0:-1),s=v(()=>wt(e,"standard")),y=v(()=>{const f={tabindex:p.value};return o.value===!0?Object.assign(f,r.value):qt.includes(e.type)===!0&&(f.type=e.type),n.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),i.value!==!0&&Ct.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),b=v(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const S=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${s.value} q-btn--${S}`+(f!==void 0?" "+f:"")+(c.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),q=v(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:k,innerClasses:q,attributes:y,hasLink:o,linkTag:n,navigateOnClick:l,isActionable:c}}const{passiveCapture:L}=Me;let N=null,z=null,j=null;const te=W({name:"QBtn",props:{...Pt,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:i}=K(),{classes:o,style:n,innerClasses:r,attributes:l,hasLink:k,linkTag:h,navigateOnClick:c,isActionable:p}=$t(e),s=F(null),y=F(null);let b=null,q,f=null;const S=v(()=>e.label!==void 0&&e.label!==null&&e.label!==""),A=v(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:k.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),$=v(()=>({center:e.round})),B=v(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),x=v(()=>{if(e.loading===!0)return{onMousedown:d,onTouchstart:d,onClick:d,onKeydown:d,onKeyup:d};if(p.value===!0){const u={onClick:C,onKeydown:E,onMousedown:_};if(i.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";u[`onTouchstart${g}`]=T}return u}return{onClick:O}}),w=v(()=>({ref:s,class:"q-btn q-btn-item non-selectable no-outline "+o.value,style:n.value,...l.value,...x.value}));function C(u){if(s.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&s.value.contains(g)===!1&&g.contains(s.value)===!1){s.value.focus();const R=()=>{document.removeEventListener("keydown",O,!0),document.removeEventListener("keyup",R,L),s.value!==null&&s.value.removeEventListener("blur",R,L)};document.addEventListener("keydown",O,!0),document.addEventListener("keyup",R,L),s.value.addEventListener("blur",R,L)}}c(u)}}function E(u){s.value!==null&&(a("keydown",u),ne(u,[13,32])===!0&&z!==s.value&&(z!==null&&I(),u.defaultPrevented!==!0&&(s.value.focus(),z=s.value,s.value.classList.add("q-btn--active"),document.addEventListener("keyup",P,!0),s.value.addEventListener("blur",P,L)),O(u)))}function T(u){s.value!==null&&(a("touchstart",u),u.defaultPrevented!==!0&&(N!==s.value&&(N!==null&&I(),N=s.value,b=u.target,b.addEventListener("touchcancel",P,L),b.addEventListener("touchend",P,L)),q=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,q=!1},200)))}function _(u){s.value!==null&&(u.qSkipRipple=q===!0,a("mousedown",u),u.defaultPrevented!==!0&&j!==s.value&&(j!==null&&I(),j=s.value,s.value.classList.add("q-btn--active"),document.addEventListener("mouseup",P,L)))}function P(u){if(s.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===s.value)){if(u!==void 0&&u.type==="keyup"){if(z===s.value&&ne(u,[13,32])===!0){const g=new MouseEvent("click",u);g.qKeyEvent=!0,u.defaultPrevented===!0&&Ne(g),u.cancelBubble===!0&&Ce(g),s.value.dispatchEvent(g),O(u),u.qKeyEvent=!0}a("keyup",u)}I()}}function I(u){const g=y.value;u!==!0&&(N===s.value||j===s.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),N===s.value&&(b!==null&&(b.removeEventListener("touchcancel",P,L),b.removeEventListener("touchend",P,L)),N=b=null),j===s.value&&(document.removeEventListener("mouseup",P,L),j=null),z===s.value&&(document.removeEventListener("keyup",P,!0),s.value!==null&&s.value.removeEventListener("blur",P,L),z=null),s.value!==null&&s.value.classList.remove("q-btn--active")}function d(u){O(u),u.qSkipRipple=!0}return oe(()=>{I(!0)}),Object.assign(i,{click:C}),()=>{let u=[];e.icon!==void 0&&u.push(m(ve,{name:e.icon,left:e.stack!==!0&&S.value===!0,role:"img","aria-hidden":"true"})),S.value===!0&&u.push(m("span",{class:"block"},[e.label])),u=V(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(m(ve,{name:e.iconRight,right:e.stack!==!0&&S.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},u)),e.loading!==null&&g.push(m(Se,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(yt)])]:null)),qe(m(h.value,w.value,g),[[kt,A.value,void 0,$.value]])}}});function Et(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ze.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const re={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Bt=Object.keys(re);re.all=!0;function be(e){const t={};for(const a of Bt)e[a]===!0&&(t[a]=!0);return Object.keys(t).length===0?re:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Tt=["INPUT","TEXTAREA"];function xe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Tt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function At(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,i)=>{const o=parseFloat(a);o&&(t[i]=o)}),t}const Rt=Pe({name:"touch-swipe",beforeMount(e,{value:t,arg:a,modifiers:i}){if(i.mouse!==!0&&Q.has.touch!==!0)return;const o=i.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:At(a),direction:be(i),noop:je,mouseStart(r){xe(r,n)&&Ve(r)&&(X(n,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(r,!0))},touchStart(r){if(xe(r,n)){const l=r.target;X(n,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),n.start(r)}},start(r,l){Q.is.firefox===!0&&J(e,!0);const k=ae(r);n.event={x:k.left,y:k.top,time:Date.now(),mouse:l===!0,dir:!1}},move(r){if(n.event===void 0)return;if(n.event.dir!==!1){O(r);return}const l=Date.now()-n.event.time;if(l===0)return;const k=ae(r),h=k.left-n.event.x,c=Math.abs(h),p=k.top-n.event.y,s=Math.abs(p);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&s<n.sensitivity[1]){n.end(r);return}}else if(window.getSelection().toString()!==""){n.end(r);return}else if(c<n.sensitivity[2]&&s<n.sensitivity[2])return;const y=c/l,b=s/l;n.direction.vertical===!0&&c<s&&c<100&&b>n.sensitivity[0]&&(n.event.dir=p<0?"up":"down"),n.direction.horizontal===!0&&c>s&&s<100&&y>n.sensitivity[0]&&(n.event.dir=h<0?"left":"right"),n.direction.up===!0&&c<s&&p<0&&c<100&&b>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<s&&p>0&&c<100&&b>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>s&&h<0&&s<100&&y>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>s&&h>0&&s<100&&y>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(O(r),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Et(),n.styleCleanup=q=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const f=()=>{document.body.classList.remove("no-pointer-events--children")};q===!0?setTimeout(f,50):f()}),n.handler({evt:r,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:l,distance:{x:c,y:s}})):n.end(r)},end(r){n.event!==void 0&&(G(n,"temp"),Q.is.firefox===!0&&J(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),r!==void 0&&n.event.dir!==!1&&O(r),n.event=void 0)}};if(e.__qtouchswipe=n,i.mouse===!0){const r=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";X(n,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}Q.has.touch===!0&&X(n,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const a=e.__qtouchswipe;a!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&a.end(),a.handler=t.value),a.direction=be(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(G(t,"main"),G(t,"temp"),Q.is.firefox===!0&&J(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Lt(){let e=Object.create(null);return{getCache:(t,a)=>e[t]===void 0?e[t]=typeof a=="function"?a():a:e[t],setCache(t,a){e[t]=a},hasCache(t){return e.hasOwnProperty(t)},clearCache(t){t!==void 0?delete e[t]:e={}}}}const It={name:{required:!0},disable:Boolean},ke={setup(e,{slots:t}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},Z(t.default))}},Ot={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Mt=["update:modelValue","beforeTransition","transition"];function Nt(){const{props:e,emit:t,proxy:a}=K(),{getCache:i}=Lt();let o,n;const r=F(null),l=F(null);function k(d){const u=e.vertical===!0?"up":"left";C((a.$q.lang.rtl===!0?-1:1)*(d.direction===u?1:-1))}const h=v(()=>[[Rt,k,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),q=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);D(()=>e.modelValue,(d,u)=>{const g=$(d)===!0?B(d):-1;n!==!0&&w(g===-1?0:g<B(u)?-1:1),r.value!==g&&(r.value=g,t("beforeTransition",d,u),De(()=>{t("transition",d,u)}))});function f(){C(1)}function S(){C(-1)}function A(d){t("update:modelValue",d)}function $(d){return d!=null&&d!==""}function B(d){return o.findIndex(u=>u.props.name===d&&u.props.disable!==""&&u.props.disable!==!0)}function x(){return o.filter(d=>d.props.disable!==""&&d.props.disable!==!0)}function w(d){const u=d!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(d===-1?c.value:p.value):null;l.value!==u&&(l.value=u)}function C(d,u=r.value){let g=u+d;for(;g!==-1&&g<o.length;){const R=o[g];if(R!==void 0&&R.props.disable!==""&&R.props.disable!==!0){w(d),n=!0,t("update:modelValue",R.props.name),setTimeout(()=>{n=!1});return}g+=d}e.infinite===!0&&o.length!==0&&u!==-1&&u!==o.length&&C(d,d===-1?o.length:-1)}function E(){const d=B(e.modelValue);return r.value!==d&&(r.value=d),!0}function T(){const d=$(e.modelValue)===!0&&E()&&o[r.value];return e.keepAlive===!0?[m(Fe,b.value,[m(q.value===!0?i(y.value,()=>({...ke,name:y.value})):ke,{key:y.value,style:s.value},()=>d)])]:[m("div",{class:"q-panel scroll",style:s.value,key:y.value,role:"tabpanel"},[d])]}function _(){if(o.length!==0)return e.animated===!0?[m(Se,{name:l.value},T)]:T()}function P(d){return o=ct(Z(d.default,[])).filter(u=>u.props!==null&&u.props.slot===void 0&&$(u.props.name)===!0),o.length}function I(){return o}return Object.assign(a,{next:f,previous:S,goTo:A}),{panelIndex:r,panelDirectives:h,updatePanelsList:P,updatePanelIndex:E,getPanelContent:_,getEnabledPanels:x,getPanels:I,isValidPanelName:$,keepAliveProps:b,needsUniqueKeepAliveWrapper:q,goToPanelByOffset:C,goToPanel:A,nextPanel:f,previousPanel:S}}let U=0;const zt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},jt=["update:fullscreen","fullscreen"];function Vt(){const e=K(),{props:t,emit:a,proxy:i}=e;let o,n,r;const l=F(!1);Ie(e)===!0&&D(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),D(()=>t.fullscreen,p=>{l.value!==p&&k()}),D(l,p=>{a("update:fullscreen",p),a("fullscreen",p)});function k(){l.value===!0?c():h()}function h(){l.value!==!0&&(l.value=!0,r=i.$el.parentNode,r.replaceChild(n,i.$el),document.body.appendChild(i.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:c},ue.add(o))}function c(){l.value===!0&&(o!==void 0&&(ue.remove(o),o=void 0),r.replaceChild(i.$el,n),l.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return Ke(()=>{n=document.createElement("span")}),we(()=>{t.fullscreen===!0&&h()}),oe(c),Object.assign(i,{toggleFullscreen:k,setFullscreen:h,exitFullscreen:c}),{inFullscreen:l,toggleFullscreen:k}}const Dt=["top","right","bottom","left"],Ft=["regular","flat","outline","push","unelevated"],Kt=W({name:"QCarousel",props:{...ot,...Ot,...zt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ft.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Dt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...jt,...Mt],setup(e,{slots:t}){const{proxy:{$q:a}}=K(),i=rt(e,a);let o=null,n;const{updatePanelsList:r,getPanelContent:l,panelDirectives:k,goToPanel:h,previousPanel:c,nextPanel:p,getEnabledPanels:s,panelIndex:y}=Nt(),{inFullscreen:b}=Vt(),q=v(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),f=v(()=>e.vertical===!0?"vertical":"horizontal"),S=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${f.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${x.value}`:"")),A=v(()=>{const _=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?_.reverse():_}),$=v(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),B=v(()=>e.navigationActiveIcon||$.value),x=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),w=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));D(()=>e.modelValue,()=>{e.autoplay&&C()}),D(()=>e.autoplay,_=>{_?C():o!==null&&(clearTimeout(o),o=null)});function C(){const _=Qe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,_>=0?p():c()},_)}we(()=>{e.autoplay&&C()}),oe(()=>{o!==null&&clearTimeout(o)});function E(_,P){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${_} q-carousel__navigation--${x.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(P))])}function T(){const _=[];if(e.navigation===!0){const P=t["navigation-icon"]!==void 0?t["navigation-icon"]:d=>m(te,{key:"nav"+d.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${d.active===!0?"":"in"}active`,...d.btnProps,onClick:d.onClick}),I=n-1;_.push(E("buttons",(d,u)=>{const g=d.props.name,R=y.value===u;return P({index:u,maxIndex:I,name:g,active:R,btnProps:{icon:R===!0?B.value:$.value,size:"sm",...w.value},onClick:()=>{h(g)}})}))}else if(e.thumbnails===!0){const P=e.controlColor!==void 0?` text-${e.controlColor}`:"";_.push(E("thumbnails",I=>{const d=I.props;return m("img",{key:"tmb#"+d.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${d.name===e.modelValue?"":"in"}active`+P,src:d.imgSrc||d["img-src"],onClick:()=>{h(d.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&_.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${f.value} absolute flex flex-center`},[m(te,{icon:A.value[0],...w.value,onClick:c})])),(e.infinite===!0||y.value<n-1)&&_.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${f.value} absolute flex flex-center`},[m(te,{icon:A.value[1],...w.value,onClick:p})]))),V(t.control,_)}return()=>(n=r(t),m("div",{class:S.value,style:q.value},[Ge("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>k.value)].concat(T())))}}),Qt=W({name:"QCarouselSlide",props:{...It,imgSrc:String},setup(e,{slots:t}){const a=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:a.value},Z(t.default))}}),le=e=>(Ye("data-v-ba6f7e9d"),e=e(),He(),e),Ut={class:"q-pa-md"},Xt=le(()=>M("div",{class:"absolute-bottom custom-caption"},[M("div",{class:"text-h2"},"First stop"),M("div",{class:"text-subtitle1"},"Mountains")],-1)),Wt=le(()=>M("div",{class:"absolute-bottom custom-caption"},[M("div",{class:"text-h2"},"Second stop"),M("div",{class:"text-subtitle1"},"Famous City")],-1)),Yt=le(()=>M("div",{class:"absolute-bottom custom-caption"},[M("div",{class:"text-h2"},"Third stop"),M("div",{class:"text-subtitle1"},"Famous Bridge")],-1)),Ht={__name:"index",setup(e){const t=F("first");return(a,i)=>{const o=Qt,n=Kt;return We(),Xe("div",Ut,[Y(n,{arrows:"",animated:"",modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=r=>t.value=r),height:"400px"},{default:H(()=>[Y(o,{name:"first","img-src":"https://cdn.quasar.dev/img/mountains.jpg"},{default:H(()=>[Xt]),_:1}),Y(o,{name:"second","img-src":"https://cdn.quasar.dev/img/parallax1.jpg"},{default:H(()=>[Wt]),_:1}),Y(o,{name:"third","img-src":"https://cdn.quasar.dev/img/parallax2.jpg"},{default:H(()=>[Yt]),_:1})]),_:1},8,["modelValue"])])}}},Zt=Ue(Ht,[["__scopeId","data-v-ba6f7e9d"]]);export{Zt as default};