import{a as ct,E as rt}from"./COEu9I0K.js";import{E as dt}from"./B0Dorw9O.js";import{E as pt}from"./BzZ7uMNe.js";import{E as ut}from"./BB5EUX1h.js";import{E as _t,a as mt}from"./DIp2bBIw.js";import{b as Z,d as J,_ as Q,a as ft,E as X,w as ht,c as yt,i as gt}from"./Dvh8EhV1.js";import{_ as vt}from"./p3bryree.js";import{A as xt,B as bt,C as wt,r as K,h as Ct,D as Et,E as P,G as C,x as D,o as u,c as h,H as O,q as I,I as o,J as It,K as kt,a as t,b as s,w as e,L as Ut,M as Nt,N as jt,O as Kt,d as w,t as m,_ as Tt,n as St,P as V,F as k,y as Bt,u as U,p as Vt,e as $t,z as A,s as Lt}from"./Dqk7lbA7.js";import{m as At}from"./DRuetYDV.js";import{U as tt,C as et}from"./CelxogyL.js";import{i as Mt}from"./BjmaYLOI.js";import{_ as Rt}from"./B0Nlwyy1.js";import{E as Dt,a as Ht}from"./E4k_CKUV.js";import{c as Ft,a as Ot,b as Pt}from"./C4hQ6bNI.js";import"./COq5dqzp.js";import"./XcOUQwoR.js";import"./DmZxPXeQ.js";import"./BLmZGiSc.js";import"./r5W6hzzQ.js";import"./BUADUvnR.js";function q(){if(!arguments.length)return[];var a=arguments[0];return Mt(a)?a:[a]}const Y=a=>xt(a)||bt(a)||wt(a),Gt=Z({accordion:Boolean,modelValue:{type:J([Array,String,Number]),default:()=>At([])}}),Wt={[tt]:Y,[et]:Y},st=Symbol("collapseContextKey"),zt=(a,p)=>{const n=K(q(a.modelValue)),i=r=>{n.value=r;const d=a.accordion?n.value[0]:n.value;p(tt,d),p(et,d)},c=r=>{if(a.accordion)i([n.value[0]===r?"":r]);else{const d=[...n.value],f=d.indexOf(r);f>-1?d.splice(f,1):d.push(r),i(d)}};return Ct(()=>a.modelValue,()=>n.value=q(a.modelValue),{deep:!0}),Et(st,{activeNames:n,handleItemClick:c}),{activeNames:n,setActiveNames:i}},qt=()=>{const a=P("collapse");return{rootKls:C(()=>a.b())}},Yt=D({name:"ElCollapse"}),Zt=D({...Yt,props:Gt,emits:Wt,setup(a,{expose:p,emit:n}){const i=a,{activeNames:c,setActiveNames:r}=zt(i,n),{rootKls:d}=qt();return p({activeNames:c,setActiveNames:r}),(f,E)=>(u(),h("div",{class:I(o(d))},[O(f.$slots,"default")],2))}});var Jt=Q(Zt,[["__file","collapse.vue"]]);const Qt=Z({title:{type:String,default:""},name:{type:J([String,Number]),default:void 0},disabled:Boolean}),Xt=a=>{const p=It(st),{namespace:n}=P("collapse"),i=K(!1),c=K(!1),r=kt(),d=C(()=>r.current++),f=C(()=>{var N;return(N=a.name)!=null?N:`${n.value}-id-${r.prefix}-${o(d)}`}),E=C(()=>p==null?void 0:p.activeNames.value.includes(o(f)));return{focusing:i,id:d,isActive:E,handleFocus:()=>{setTimeout(()=>{c.value?c.value=!1:i.value=!0},50)},handleHeaderClick:()=>{a.disabled||(p==null||p.handleItemClick(o(f)),i.value=!1,c.value=!0)},handleEnterClick:()=>{p==null||p.handleItemClick(o(f))}}},te=(a,{focusing:p,isActive:n,id:i})=>{const c=P("collapse"),r=C(()=>[c.b("item"),c.is("active",o(n)),c.is("disabled",a.disabled)]),d=C(()=>[c.be("item","header"),c.is("active",o(n)),{focusing:o(p)&&!a.disabled}]),f=C(()=>[c.be("item","arrow"),c.is("active",o(n))]),E=C(()=>c.be("item","wrap")),T=C(()=>c.be("item","content")),S=C(()=>c.b(`content-${o(i)}`)),B=C(()=>c.b(`head-${o(i)}`));return{arrowKls:f,headKls:d,rootKls:r,itemWrapperKls:E,itemContentKls:T,scopedContentId:S,scopedHeadId:B}},ee=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],se=["id","aria-hidden","aria-labelledby"],le=D({name:"ElCollapseItem"}),oe=D({...le,props:Qt,setup(a,{expose:p}){const n=a,{focusing:i,id:c,isActive:r,handleFocus:d,handleHeaderClick:f,handleEnterClick:E}=Xt(n),{arrowKls:T,headKls:S,rootKls:B,itemWrapperKls:N,itemContentKls:H,scopedContentId:y,scopedHeadId:_}=te(n,{focusing:i,isActive:r,id:c});return p({isActive:r}),(g,x)=>(u(),h("div",{class:I(o(B))},[t("button",{id:o(_),class:I(o(S)),"aria-expanded":o(r),"aria-controls":o(y),"aria-describedby":o(y),tabindex:g.disabled?-1:0,type:"button",onClick:x[0]||(x[0]=(...v)=>o(f)&&o(f)(...v)),onKeydown:x[1]||(x[1]=Ut(Nt((...v)=>o(E)&&o(E)(...v),["stop","prevent"]),["space","enter"])),onFocus:x[2]||(x[2]=(...v)=>o(d)&&o(d)(...v)),onBlur:x[3]||(x[3]=v=>i.value=!1)},[O(g.$slots,"title",{},()=>[w(m(g.title),1)]),s(o(X),{class:I(o(T))},{default:e(()=>[s(o(ft))]),_:1},8,["class"])],42,ee),s(o(Rt),null,{default:e(()=>[jt(t("div",{id:o(y),role:"region",class:I(o(N)),"aria-hidden":!o(r),"aria-labelledby":o(_)},[t("div",{class:I(o(H))},[O(g.$slots,"default")],2)],10,se),[[Kt,o(r)]])]),_:3})],2))}});var lt=Q(oe,[["__file","collapse-item.vue"]]);const ae=ht(Jt,{CollapseItem:lt}),ne=yt(lt),ot=""+new URL("banner-1.TIt68cE_.jpg",import.meta.url).href,ie=""+new URL("goods-img-01.BUYtodmk.jpg",import.meta.url).href,ce=""+new URL("goods-img-02.BE9q1Qi7.jpg",import.meta.url).href,re=""+new URL("goods-img-03.DUNc1oy9.jpg",import.meta.url).href,de=""+new URL("goods-img-04.xxiwkOqD.jpg",import.meta.url).href,$=a=>(Vt("data-v-64c4d50c"),a=a(),$t(),a),pe={class:"block text-center"},ue=$(()=>t("img",{style:{width:"100%",height:"auto"},src:ot},null,-1)),_e=$(()=>t("img",{style:{width:"100%",height:"auto"},src:ot},null,-1)),me={style:{position:"relative",display:"flex","justify-content":"center"}},fe=$(()=>t("div",{class:"title"}," 最新消息 ",-1)),he=["src"],ye={style:{padding:"12px"}},ge={style:{margin:"0px 0px 8px 0px"}},ve={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-top":"12px"}},xe=["href"],be=["src"],we={style:{padding:"12px"}},Ce={style:{margin:"0px 0px 8px 0px"}},Ee={style:{display:"flex",width:"100%","justify-content":"space-between","align-items":"center"}},Ie=["href"],ke={style:{"text-align":"center","margin-top":"32px"}},Ue={style:{"background-color":"#f7f7f7",display:"flex","justify-content":"center"}},Ne=$(()=>t("div",{class:"title"}," 服務項目 ",-1)),je=["src"],Ke={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"0px 16px",width:"100%"}},Te={style:{margin:"0px"}},Se=["src"],Be={style:{margin:"0px"}},Ve={style:{"text-align":"center","margin-top":"32px"}},$e={style:{display:"flex","justify-content":"center"}},Le=$(()=>t("div",{class:"title"}," 常見問題 ",-1)),Ae={class:"demo-collapse",style:{width:"100%"}},Me=["innerHTML"],Re={style:{display:"flex","justify-content":"center"}},De=$(()=>t("div",{class:"title"}," 流程 ",-1)),He={class:"step-card",style:{margin:"16px 0px"}},Fe={class:"step-num"},Oe={class:"step-content"},Pe={style:{margin:"0px"}},Ge={class:"step-card",style:{margin:"16px 0px"}},We={class:"step-num"},ze={class:"step-content"},qe={style:{margin:"0px"}},Ye={class:"step-card",style:{margin:"16px 0px"}},Ze={class:"step-num"},Je={class:"step-content"},Qe={style:{margin:"0px"}},Xe={__name:"index",setup(a){const p=K("1"),n=K([]),i=K(!1);St(()=>{n.value=Array.from(document.getElementsByClassName("fade-in")),document.addEventListener("scroll",c),c(),fetch("https://api.unsplash.com/photos/?client_id=XeMLEo-cG4umamAaRPxahF5CC7nhdSYGtbKlmU1O7Sk").then(async y=>y.json()).then(y=>{console.log(y)}),i.value=gt()});const c=y=>{for(var _=0;_<n.value.length;_++){var g=n.value[_];r(g)&&(g.style.opacity="1",g.style.transform="scale(1)",n.value.splice(_,1))}},r=y=>{var _=y.getBoundingClientRect(),g=_.top+200,x=_.bottom;return g<window.innerHeight&&x>=0},d=K("first"),f=(y,_)=>{console.log(y,_)},E=V([{title:"空運快遞",content:"迅速將您的包裹送達全球，提供高效、安全的國際運輸服務。",imgUrl:ie},{title:"專業貨運服務",content:"專業、快速，完美處理您的物流需求。",imgUrl:ce},{title:"集運海運",content:"全球物流解決方案，海運專業服務。",imgUrl:re},{title:"多國進出口服務",content:"精準物流方案，專業解決您的進出口需求。",imgUrl:de}]),T=V([{title:"下單前請先確認商品是否可以進口?"},{title:"申請EZ WAY實名認證"},{title:"下單後請告知我們您的運單號碼"},{title:"告知我們您的實名認證+收件資訊(姓名、電話、地址、身分證)"},{title:"貨到台灣會通知付款(運費+稅金)"},{title:"確認款項後就可以發貨質送到家"}]),S=V([{title:"先確認是否可以進口"},{title:"將貨寄至TGE倉庫"},{title:"告知我們您的實名認證+收件資訊(姓名、電話、地址、身分證)"},{title:"貨到台灣會通知付款(運費+稅金)"},{title:"確認款項後就可以發貨送到門"}]),B=V([{title:"先確認是否可以出口"},{title:"將貨寄至TGE倉庫(或是請我們收件)"},{title:"請我們收件(需提供 姓名，地址，電話)"},{title:"告知我們收件端( 姓名，地址，電話)"},{title:"確認款項後就可以發貨送到門"}]),N=V([{imgUrl:Ft,title:"清明連假",content:"4/4~4/7 有連續假期。",fbUrl:"https://www.facebook.com/photo.php?fbid=333397176402219&set=pb.100091958164533.-2207520000&type=3",date:"2024-04-11"},{imgUrl:Ot,title:"越南生活用品快遞 只要230元",content:"每週三跟週五發貨，有興趣寄送的請洽業務。",fbUrl:"https://www.facebook.com/photo/?fbid=325322593876344&set=pb.100091958164533.-2207520000",date:"2024-04-11"},{imgUrl:Pt,title:"紀念 “婦女節” ",content:"TGE向廣大客戶致以最美好的祝福！ 祝福全世界的女性朋友們每天都過得快快樂樂🎉。",fbUrl:"https://www.facebook.com/photo.php?fbid=319334087808528&set=pb.100091958164533.-2207520000&type=3",date:"2024-04-11"}]),H=V([{title:"服務國家?",content:"包含越南、印尼、泰國、大陸、日本、菲律賓、美國等等，更多詳細內容可詢問小編喔!!",name:1},{title:"如何聯絡我們?",content:"<a href='https://line.me/R/ti/p/@893zlowm' target='_blan'>https://line.me/R/ti/p/@893zlowm</a>  或透過搜尋ID：@893ZLOWM，歡迎詢問我們唷!",name:2}]);return(y,_)=>{const g=rt,x=ct,v=dt,M=pt,R=ut,b=mt,j=_t,G=Bt("ArrowRightBold"),W=X,z=vt,at=ne,nt=ae,F=Dt,it=Ht;return u(),h(k,null,[t("div",pe,[s(x,{autoplay:"",height:"auto"},{default:e(()=>[s(g,{style:{width:"100%",height:"auto"}},{default:e(()=>[ue]),_:1}),s(g,{style:{width:"100%",height:"auto"}},{default:e(()=>[_e]),_:1})]),_:1})]),t("section",me,[t("div",{class:I(i.value?"":"wrap")},[fe,s(j,{gutter:20,style:{"align-items":"center","border-radius":"8px"}},{default:e(()=>[i.value?(u(!0),h(k,{key:1},U(N,l=>(u(),A(b,null,{default:e(()=>[s(R,{shadow:"hover","body-style":{width:"100%",padding:"8px",display:"flex",flexWrap:"nowrap"},style:{border:"0px","margin-bottom":"20px",width:"100%"}},{default:e(()=>[s(j,null,{default:e(()=>[s(b,{span:8,style:{display:"flex","align-items":"center"}},{default:e(()=>[t("img",{style:{width:"100%"},src:l.imgUrl},null,8,be)]),_:2},1024),s(b,{span:16},{default:e(()=>[t("div",we,[t("h3",Ce,m(l.title),1),s(v,{class:"mx-1 text-limit two-lines",type:"info"},{default:e(()=>[w(m(l.content),1)]),_:2},1024),t("div",Ee,[s(v,{class:"",type:"info"},{default:e(()=>[w(m(l.date),1)]),_:2},1024),t("a",{href:l.fbUrl,style:{}},[s(M,{type:"primary",plain:""},{default:e(()=>[w(" 前往貼文 ")]),_:1})],8,Ie)])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)):(u(!0),h(k,{key:0},U(N,l=>(u(),A(b,{span:8,xs:24},{default:e(()=>[s(R,{shadow:"hover","body-style":{width:"100%",padding:"0px"},style:{border:"0px","margin-bottom":"20px"},class:"fade-in"},{default:e(()=>[t("img",{style:{width:"100%"},src:l.imgUrl},null,8,he),t("div",ye,[t("h3",ge,m(l.title),1),s(v,{class:"mx-1 text-limit two-lines",type:"info"},{default:e(()=>[w(m(l.content),1)]),_:2},1024),t("div",ve,[s(v,{class:"",type:"info"},{default:e(()=>[w(m(l.date),1)]),_:2},1024),t("a",{href:l.fbUrl,style:{}},[s(M,{type:"primary",plain:""},{default:e(()=>[w(" 前往貼文 ")]),_:1})],8,xe)])])]),_:2},1024)]),_:2},1024))),256))]),_:1}),t("div",ke,[s(z,{to:"/news",class:"text-decoration-none"},{default:e(()=>[s(M,{type:"primary",round:""},{default:e(()=>[w("查看更多公告"),s(W,null,{default:e(()=>[s(G)]),_:1})]),_:1})]),_:1})])],2)]),t("section",Ue,[t("div",{class:I(i.value?"":"wrap")},[s(j,{justify:"space-between",gutter:20},{default:e(()=>[s(b,null,{default:e(()=>[Ne,s(j,{gutter:20},{default:e(()=>[i.value?(u(!0),h(k,{key:1},U(E,l=>(u(),A(b,null,{default:e(()=>[s(R,{shadow:"hover","body-style":{width:"100%",padding:"0px",display:"flex",flexWrap:"nowrap"},style:{border:"0px","margin-bottom":"20px",width:"100%"}},{default:e(()=>[s(j,{style:{width:"100%"}},{default:e(()=>[s(b,{span:8},{default:e(()=>[t("img",{src:l.imgUrl,style:{width:"100%","vertical-align":"middle","aspect-ratio":"1/1","object-fit":"cover"}},null,8,Se)]),_:2},1024),s(b,{span:16,style:{padding:"16px"}},{default:e(()=>[t("h3",Be,m(l.title),1),s(v,{class:"mx-1",type:"info"},{default:e(()=>[w(m(l.content),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)):(u(!0),h(k,{key:0},U(E,l=>(u(),A(b,{span:12,xs:24,style:{"margin-bottom":"20px"}},{default:e(()=>[s(R,{style:{border:"0px",height:"100%"},"body-style":{width:"100%",display:"flex",padding:"0px"},class:"fade-in"},{default:e(()=>[t("div",{style:Lt([{"min-width":"180px",width:"180px",height:"100%"},{maxWidth:i.value?"120px":"180px"}])},[t("img",{src:l.imgUrl,style:{width:"100%","vertical-align":"middle","aspect-ratio":"1/1","object-fit":"cover"}},null,8,je)],4),t("div",Ke,[t("h2",Te,m(l.title),1),t("p",null,[s(v,{class:"mx-1",type:"info"},{default:e(()=>[w(m(l.content),1)]),_:2},1024)])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t("div",Ve,[s(z,{to:"/server",class:"text-decoration-none"},{default:e(()=>[s(M,{type:"primary",round:"",href:"#"},{default:e(()=>[w("查看更多服務項目"),s(W,null,{default:e(()=>[s(G)]),_:1})]),_:1})]),_:1})])],2)]),t("section",$e,[s(j,{justify:"space-between",gutter:20,class:I(i.value?"":"wrap"),style:{width:"100%"}},{default:e(()=>[s(b,null,{default:e(()=>[Le,t("div",Ae,[s(nt,{modelValue:p.value,"onUpdate:modelValue":_[0]||(_[0]=l=>p.value=l),accordion:""},{default:e(()=>[(u(!0),h(k,null,U(H,l=>(u(),A(at,{title:l.title,name:l.name},{default:e(()=>[t("div",{style:{"font-size":"16px"},innerHTML:l.content},null,8,Me)]),_:2},1032,["title","name"]))),256))]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["class"])]),t("section",Re,[s(j,{justify:"space-between",gutter:20,class:I(i.value?"":"wrap"),style:{width:"100%"}},{default:e(()=>[s(b,null,{default:e(()=>[De,s(it,{modelValue:d.value,"onUpdate:modelValue":_[1]||(_[1]=l=>d.value=l),class:"demo-tabs",onTabClick:f},{default:e(()=>[s(F,{label:"集運流程",name:"first"},{default:e(()=>[(u(!0),h(k,null,U(T,(l,L)=>(u(),h("div",He,[t("div",Fe,m(L+1)+". ",1),t("div",Oe,[t("h2",Pe,[t("strong",null,m(l.title),1)])])]))),256))]),_:1}),s(F,{label:"進口流程",name:"second"},{default:e(()=>[(u(!0),h(k,null,U(S,(l,L)=>(u(),h("div",Ge,[t("div",We,m(L+1)+". ",1),t("div",ze,[t("h2",qe,[t("strong",null,m(l.title),1)])])]))),256))]),_:1}),s(F,{label:"出口流程",name:"third"},{default:e(()=>[(u(!0),h(k,null,U(B,(l,L)=>(u(),h("div",Ye,[t("div",Ze,m(L+1)+". ",1),t("div",Je,[t("h2",Qe,[t("strong",null,m(l.title),1)])])]))),256))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["class"])])],64)}}},xs=Tt(Xe,[["__scopeId","data-v-64c4d50c"]]);export{xs as default};