import{_ as ie,n as O,x as te,y as me,z as We,T as De,d as be,i as Z,t as ae,s as Fe,m as je,E as ke,r as $e,e as he,A as Ve,f as qe,B as Ee,h as Ge,w as Ue,j as Me}from"./71Ig08ZR.js";import{Z as Ke,am as Ze,d as z,R as P,t as B,T as re,A as _,a5 as A,ab as Oe,an as Xe,M as Ye,Y as Pe,c as g,N as le,r as T,a3 as ye,H as ne,a2 as ge,o as _e,e as Ne,g as x,ac as G,U as Be,X as Je,$ as xe,K as Ie,ao as Te,F as Qe,a8 as et,a1 as tt,S as nt,i as ot,v as X,x as Y,V as ue,B as $,y as st,z as E,_ as at,ap as lt}from"./obtzoWgS.js";import{_ as ut}from"./DVBL96Tl.js";const oe=function(e,o,...n){let a;o.includes("mouse")||o.includes("click")?a="MouseEvents":o.includes("key")?a="KeyboardEvent":a="HTMLEvents";const t=document.createEvent(a);return t.initEvent(o,...n),e.dispatchEvent(t),e},it=e=>e,H=new Map;let Se;Ke&&(document.addEventListener("mousedown",e=>Se=e),document.addEventListener("mouseup",e=>{for(const o of H.values())for(const{documentHandler:n}of o)n(e,Se)}));function we(e,o){let n=[];return Array.isArray(o.arg)?n=o.arg:Ze(o.arg)&&n.push(o.arg),function(a,t){const d=o.instance.popperRef,c=a.target,f=t==null?void 0:t.target,u=!o||!o.instance,m=!c||!f,v=e.contains(c)||e.contains(f),b=e===c,I=n.length&&n.some(D=>D==null?void 0:D.contains(c))||n.length&&n.includes(f),S=d&&(d.contains(c)||d.contains(f));u||m||v||b||I||S||o.value(a,t)}}const rt={beforeMount(e,o){H.has(e)||H.set(e,[]),H.get(e).push({documentHandler:we(e,o),bindingFn:o.value})},updated(e,o){H.has(e)||H.set(e,[]);const n=H.get(e),a=n.findIndex(d=>d.bindingFn===o.oldValue),t={documentHandler:we(e,o),bindingFn:o.value};a>=0?n.splice(a,1,t):n.push(t)},unmounted(e){H.delete(e)}},ct=z({name:"ElCollapseTransition"}),dt=z({...ct,setup(e){const o=P("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},a={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,d)=>(B(),re(Pe,Oe({name:Ye(o).b()},Xe(a)),{default:_(()=>[A(t.$slots,"default")]),_:3},16,["name"]))}});var se=ie(dt,[["__file","collapse-transition.vue"]]);se.install=e=>{e.component(se.name,se)};const mt=se;let pt=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",a=>{let t=!1;switch(a.code){case O.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case O.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case O.tab:{oe(o,"mouseleave");break}case O.enter:case O.space:{t=!0,a.currentTarget.click();break}}return t&&(a.preventDefault(),a.stopPropagation()),!1})})}},ft=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new pt(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case O.down:{oe(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case O.up:{oe(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case O.tab:{oe(o.currentTarget,"mouseleave");break}case O.enter:case O.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},vt=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(a=>{a.nodeType===1&&new ft(a,o)})}};const ht=z({name:"ElMenuCollapseTransition",setup(){const e=P("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,a){te(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",a()},onAfterEnter(n){me(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),We(n,e.m("collapse"))?(me(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),te(n,e.m("collapse"))):(te(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),me(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){te(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function gt(e,o,n,a,t,d){return B(),re(Pe,Oe({mode:"out-in"},e.listeners),{default:_(()=>[A(e.$slots,"default")]),_:3},16)}var bt=ie(ht,[["render",gt],["__file","menu-collapse-transition.vue"]]);function He(e,o){const n=g(()=>{let t=e.parent;const d=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:g(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function Mt(e){return g(()=>{const n=e.backgroundColor;return n?new De(n).shade(20).toString():""})}const Ae=(e,o)=>{const n=P("menu");return g(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Mt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},yt=be({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:Z},expandOpenIcon:{type:Z},collapseCloseIcon:{type:Z},collapseOpenIcon:{type:Z}}),pe="ElSubMenu";var Ce=z({name:pe,props:yt,setup(e,{slots:o,expose:n}){const a=Ie(),{indexPath:t,parentMenu:d}=He(a,g(()=>e.index)),c=P("menu"),f=P("sub-menu"),u=le("rootMenu");u||ae(pe,"can not inject root menu");const m=le(`subMenu:${d.value.uid}`);m||ae(pe,"can not inject sub menu");const v=T({}),b=T({});let I;const S=T(!1),D=T(),J=T(null),L=g(()=>W.value==="horizontal"&&R.value?"bottom-start":"right-start"),F=g(()=>W.value==="horizontal"&&R.value||W.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?w.value?e.expandOpenIcon:e.expandCloseIcon:Fe:e.collapseCloseIcon&&e.collapseOpenIcon?w.value?e.collapseOpenIcon:e.collapseCloseIcon:je),R=g(()=>m.level===0),U=g(()=>{const i=e.teleported;return i===void 0?R.value:i}),ce=g(()=>u.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),de=g(()=>W.value==="horizontal"&&R.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),w=g(()=>u.openedMenus.includes(e.index)),j=g(()=>{let i=!1;return Object.values(v.value).forEach(p=>{p.active&&(i=!0)}),Object.values(b.value).forEach(p=>{p.active&&(i=!0)}),i}),W=g(()=>u.props.mode),V=ye({index:e.index,indexPath:t,active:j}),K=Ae(u.props,m.level+1),Q=g(()=>{var i;return(i=e.popperOffset)!=null?i:u.props.popperOffset}),q=g(()=>{var i;return(i=e.popperClass)!=null?i:u.props.popperClass}),ee=g(()=>{var i;return(i=e.showTimeout)!=null?i:u.props.showTimeout}),s=g(()=>{var i;return(i=e.hideTimeout)!=null?i:u.props.hideTimeout}),l=()=>{var i,p,y;return(y=(p=(i=J.value)==null?void 0:i.popperRef)==null?void 0:p.popperInstanceRef)==null?void 0:y.destroy()},r=i=>{i||l()},M=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:t.value,active:j.value})},h=(i,p=ee.value)=>{var y;if(i.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){m.mouseInChild.value=!0;return}m.mouseInChild.value=!0,I==null||I(),{stop:I}=Te(()=>{u.openMenu(e.index,t.value)},p),U.value&&((y=d.value.vnode.el)==null||y.dispatchEvent(new MouseEvent("mouseenter")))}},k=(i=!1)=>{var p;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){m.mouseInChild.value=!1;return}I==null||I(),m.mouseInChild.value=!1,{stop:I}=Te(()=>!S.value&&u.closeMenu(e.index,t.value),s.value),U.value&&i&&((p=m.handleMouseleave)==null||p.call(m,!0))};ne(()=>u.props.collapse,i=>r(!!i));{const i=y=>{b.value[y.index]=y},p=y=>{delete b.value[y.index]};ge(`subMenu:${a.uid}`,{addSubMenu:i,removeSubMenu:p,handleMouseleave:k,mouseInChild:S,level:m.level+1})}return n({opened:w}),_e(()=>{u.addSubMenu(V),m.addSubMenu(V)}),Ne(()=>{m.removeSubMenu(V),u.removeSubMenu(V)}),()=>{var i;const p=[(i=o.title)==null?void 0:i.call(o),x(ke,{class:f.e("icon-arrow"),style:{transform:w.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>G(F.value)?x(a.appContext.components[F.value]):x(F.value)})],y=u.isMenuPopup?x($e,{ref:J,visible:w.value,effect:"light",pure:!0,offset:Q.value,showArrow:!1,persistent:!0,popperClass:q.value,placement:L.value,teleported:U.value,fallbackPlacements:de.value,transition:ce.value,gpuAcceleration:!1},{content:()=>{var C;return x("div",{class:[c.m(W.value),c.m("popup-container"),q.value],onMouseenter:N=>h(N,100),onMouseleave:()=>k(!0),onFocus:N=>h(N,100)},[x("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${L.value}`)],style:K.value},[(C=o.default)==null?void 0:C.call(o)])])},default:()=>x("div",{class:f.e("title"),onClick:M},p)}):x(xe,{},[x("div",{class:f.e("title"),ref:D,onClick:M},p),x(mt,{},{default:()=>{var C;return Be(x("ul",{role:"menu",class:[c.b(),c.m("inline")],style:K.value},[(C=o.default)==null?void 0:C.call(o)]),[[Je,w.value]])}})]);return x("li",{class:[f.b(),f.is("active",j.value),f.is("opened",w.value),f.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:w.value,onMouseenter:h,onMouseleave:()=>k(),onFocus:h},[y])}}});const _t=be({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:he(Array),default:()=>it([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:Z,default:()=>Ve},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),fe=e=>Array.isArray(e)&&e.every(o=>G(o)),xt={close:(e,o)=>G(e)&&fe(o),open:(e,o)=>G(e)&&fe(o),select:(e,o,n,a)=>G(e)&&fe(o)&&et(n)&&(a===void 0||a instanceof Promise)};var It=z({name:"ElMenu",props:_t,emits:xt,setup(e,{emit:o,slots:n,expose:a}){const t=Ie(),d=t.appContext.config.globalProperties.$router,c=T(),f=P("menu"),u=P("sub-menu"),m=T(-1),v=T(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),b=T(e.defaultActive),I=T({}),S=T({}),D=g(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),J=()=>{const s=b.value&&I.value[b.value];if(!s||e.mode==="horizontal"||e.collapse)return;s.indexPath.forEach(r=>{const M=S.value[r];M&&L(r,M.indexPath)})},L=(s,l)=>{v.value.includes(s)||(e.uniqueOpened&&(v.value=v.value.filter(r=>l.includes(r))),v.value.push(s),o("open",s,l))},F=s=>{const l=v.value.indexOf(s);l!==-1&&v.value.splice(l,1)},R=(s,l)=>{F(s),o("close",s,l)},U=({index:s,indexPath:l})=>{v.value.includes(s)?R(s,l):L(s,l)},ce=s=>{(e.mode==="horizontal"||e.collapse)&&(v.value=[]);const{index:l,indexPath:r}=s;if(!(Ee(l)||Ee(r)))if(e.router&&d){const M=s.route||l,h=d.push(M).then(k=>(k||(b.value=l),k));o("select",l,r,{index:l,indexPath:r,route:M},h)}else b.value=l,o("select",l,r,{index:l,indexPath:r})},de=s=>{const l=I.value,r=l[s]||b.value&&l[b.value]||l[e.defaultActive];r?b.value=r.index:b.value=s},w=s=>{const l=getComputedStyle(s),r=Number.parseInt(l.marginLeft,10),M=Number.parseInt(l.marginRight,10);return s.offsetWidth+r+M||0},j=()=>{var s,l;if(!c.value)return-1;const r=Array.from((l=(s=c.value)==null?void 0:s.childNodes)!=null?l:[]).filter(N=>N.nodeName!=="#comment"&&(N.nodeName!=="#text"||N.nodeValue)),M=64,h=getComputedStyle(c.value),k=Number.parseInt(h.paddingLeft,10),i=Number.parseInt(h.paddingRight,10),p=c.value.clientWidth-k-i;let y=0,C=0;return r.forEach((N,Re)=>{y+=w(N),y<=p-M&&(C=Re+1)}),C===r.length?-1:C},W=s=>S.value[s].indexPath,V=(s,l=33.34)=>{let r;return()=>{r&&clearTimeout(r),r=setTimeout(()=>{s()},l)}};let K=!0;const Q=()=>{if(m.value===j())return;const s=()=>{m.value=-1,tt(()=>{m.value=j()})};K?s():V(s)(),K=!1};ne(()=>e.defaultActive,s=>{I.value[s]||(b.value=""),de(s)}),ne(()=>e.collapse,s=>{s&&(v.value=[])}),ne(I.value,J);let q;Qe(()=>{e.mode==="horizontal"&&e.ellipsis?q=Ge(c,Q).stop:q==null||q()});const ee=T(!1);{const s=h=>{S.value[h.index]=h},l=h=>{delete S.value[h.index]};ge("rootMenu",ye({props:e,openedMenus:v,items:I,subMenus:S,activeIndex:b,isMenuPopup:D,addMenuItem:h=>{I.value[h.index]=h},removeMenuItem:h=>{delete I.value[h.index]},addSubMenu:s,removeSubMenu:l,openMenu:L,closeMenu:R,handleMenuItemClick:ce,handleSubMenuClick:U})),ge(`subMenu:${t.uid}`,{addSubMenu:s,removeSubMenu:l,mouseInChild:ee,level:0})}return _e(()=>{e.mode==="horizontal"&&new vt(t.vnode.el,f.namespace.value)}),a({open:l=>{const{indexPath:r}=S.value[l];r.forEach(M=>L(M,r))},close:F,handleResize:Q}),()=>{var s,l;let r=(l=(s=n.default)==null?void 0:s.call(n))!=null?l:[];const M=[];if(e.mode==="horizontal"&&c.value){const p=qe(r),y=m.value===-1?p:p.slice(0,m.value),C=m.value===-1?[]:p.slice(m.value);C!=null&&C.length&&e.ellipsis&&(r=y,M.push(x(Ce,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>x(ke,{class:u.e("icon-more")},{default:()=>x(e.ellipsisIcon)}),default:()=>C})))}const h=Ae(e,0),k=e.closeOnClickOutside?[[rt,()=>{v.value.length&&(ee.value||(v.value.forEach(p=>o("close",p,W(p))),v.value=[]))}]]:[],i=Be(x("ul",{key:String(e.collapse),role:"menubar",ref:c,style:h.value,class:{[f.b()]:!0,[f.m(e.mode)]:!0,[f.m("collapse")]:e.collapse}},[...r,...M]),k);return e.collapseTransition&&e.mode==="vertical"?x(bt,()=>i):i}}});const Ct=be({index:{type:he([String,null]),default:null},route:{type:he([String,Object])},disabled:Boolean}),Et={click:e=>G(e.index)&&Array.isArray(e.indexPath)},ve="ElMenuItem",Tt=z({name:ve,components:{ElTooltip:$e},props:Ct,emits:Et,setup(e,{emit:o}){const n=Ie(),a=le("rootMenu"),t=P("menu"),d=P("menu-item");a||ae(ve,"can not inject root menu");const{parentMenu:c,indexPath:f}=He(n,nt(e,"index")),u=le(`subMenu:${c.value.uid}`);u||ae(ve,"can not inject sub menu");const m=g(()=>e.index===a.activeIndex),v=ye({index:e.index,indexPath:f,active:m}),b=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:f.value,route:e.route}),o("click",v))};return _e(()=>{u.addSubMenu(v),a.addMenuItem(v)}),Ne(()=>{u.removeSubMenu(v),a.removeMenuItem(v)}),{parentMenu:c,rootMenu:a,active:m,nsMenu:t,nsMenuItem:d,handleClick:b}}});function St(e,o,n,a,t,d){const c=ot("el-tooltip");return B(),X("li",{class:ue([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...f)=>e.handleClick&&e.handleClick(...f))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(B(),re(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:_(()=>[A(e.$slots,"title")]),default:_(()=>[Y("div",{class:ue(e.nsMenu.be("tooltip","trigger"))},[A(e.$slots,"default")],2)]),_:3},8,["effect"])):(B(),X(xe,{key:1},[A(e.$slots,"default"),A(e.$slots,"title")],64))],2)}var ze=ie(Tt,[["render",St],["__file","menu-item.vue"]]);const wt={title:String},kt="ElMenuItemGroup",$t=z({name:kt,props:wt,setup(){return{ns:P("menu-item-group")}}});function Ot(e,o,n,a,t,d){return B(),X("li",{class:ue(e.ns.b())},[Y("div",{class:ue(e.ns.e("title"))},[e.$slots.title?A(e.$slots,"title",{key:1}):(B(),X(xe,{key:0},[$(st(e.title),1)],64))],2),Y("ul",null,[A(e.$slots,"default")])],2)}var Le=ie($t,[["render",Ot],["__file","menu-item-group.vue"]]);const Pt=Ue(It,{MenuItem:ze,MenuItemGroup:Le,SubMenu:Ce}),Nt=Me(ze);Me(Le);const Bt=Me(Ce),Ht=Y("img",{style:{width:"100px"},alt:"Element logo"},null,-1),At=Y("div",{class:"flex-grow"},null,-1),zt=z({__name:"Header",setup(e){const o=T("1"),n=(a,t)=>{console.log(a,t)};return(a,t)=>{const d=Nt,c=Bt,f=Pt;return B(),re(f,{"default-active":o.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:n},{default:_(()=>[E(d,{index:"0"},{default:_(()=>[Ht]),_:1}),At,E(d,{index:"1"},{default:_(()=>[$("Processing Center")]),_:1}),E(c,{index:"2"},{title:_(()=>[$("Workspace")]),default:_(()=>[E(d,{index:"2-1"},{default:_(()=>[$("item one")]),_:1}),E(d,{index:"2-2"},{default:_(()=>[$("item two")]),_:1}),E(d,{index:"2-3"},{default:_(()=>[$("item three")]),_:1}),E(c,{index:"2-4"},{title:_(()=>[$("item four")]),default:_(()=>[E(d,{index:"2-4-1"},{default:_(()=>[$("item one")]),_:1}),E(d,{index:"2-4-2"},{default:_(()=>[$("item two")]),_:1}),E(d,{index:"2-4-3"},{default:_(()=>[$("item three")]),_:1})]),_:1})]),_:1})]),_:1},8,["default-active"])}}}),Lt={};function Rt(e,o){const n=zt,a=lt,t=ut;return B(),X("div",null,[E(n),E(a),E(t)])}const Gt=at(Lt,[["render",Rt]]);export{Gt as default};
