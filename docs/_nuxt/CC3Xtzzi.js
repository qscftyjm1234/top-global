import{y as oe,b as G,d as H,k as W,_ as D,w as Z,f as se,E as U,i as ae}from"./D-Ms0KlZ.js";import{Y,A as $,a7 as P,x as C,E as F,R as N,r as b,G as S,h as O,n as j,f as le,o as m,c as x,a as o,H as Q,q as M,I as i,s as E,B as ne,z as V,w as y,X as ie,_ as re,y as A,b as u,d as B,U as q,v as de,p as ce,e as fe}from"./BI1XKiUc.js";import{i as pe}from"./CsPhUhjh.js";import{e as ue,f as R,a as me}from"./4KJAtOhx.js";import{C as ve,t as _e}from"./CelxogyL.js";import{_ as he}from"./ConODg0K.js";const ge=(s,l)=>{if(!Y)return!1;const a={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(l)],e=oe(s,a);return["scroll","auto","overlay"].some(c=>e.includes(c))},ye=(s,l)=>{if(!Y)return;let a=s;for(;a;){if([window,document,document.documentElement].includes(a))return window;if(ge(a,l))return a;a=a.parentNode}return a},xe=G({zIndex:{type:H([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),we={scroll:({scrollTop:s,fixed:l})=>$(s)&&P(l),[ve]:s=>P(s)},J="ElAffix",be=C({name:J}),Se=C({...be,props:xe,emits:we,setup(s,{expose:l,emit:a}){const e=s,c=F("affix"),f=N(),_=N(),r=N(),{height:p}=ue(),{height:t,width:h,top:w,bottom:g,update:k}=R(_,{windowScroll:!1}),z=R(f),d=b(!1),I=b(0),T=b(0),X=S(()=>({height:d.value?`${t.value}px`:"",width:d.value?`${h.value}px`:""})),ee=S(()=>{if(!d.value)return{};const n=e.offset?W(e.offset):0;return{height:`${t.value}px`,width:`${h.value}px`,top:e.position==="top"?n:"",bottom:e.position==="bottom"?n:"",transform:T.value?`translateY(${T.value}px)`:"",zIndex:e.zIndex}}),L=()=>{if(r.value)if(I.value=r.value instanceof Window?document.documentElement.scrollTop:r.value.scrollTop||0,e.position==="top")if(e.target){const n=z.bottom.value-e.offset-t.value;d.value=e.offset>w.value&&z.bottom.value>0,T.value=n<0?n:0}else d.value=e.offset>w.value;else if(e.target){const n=p.value-z.top.value-e.offset-t.value;d.value=p.value-e.offset<g.value&&p.value>z.top.value,T.value=n<0?-n:0}else d.value=p.value-e.offset<g.value},te=()=>{k(),a("scroll",{scrollTop:I.value,fixed:d.value})};return O(d,n=>a("change",n)),j(()=>{var n;e.target?(f.value=(n=document.querySelector(e.target))!=null?n:void 0,f.value||_e(J,`Target is not existed: ${e.target}`)):f.value=document.documentElement,r.value=ye(_.value,!0),k()}),me(r,"scroll",te),le(L),l({update:L,updateRoot:k}),(n,ot)=>(m(),x("div",{ref_key:"root",ref:_,class:M(i(c).b()),style:E(i(X))},[o("div",{class:M({[i(c).m("fixed")]:d.value}),style:E(i(ee))},[Q(n.$slots,"default")],6)],6))}});var Ee=D(Se,[["__file","affix.vue"]]);const ze=Z(Ee),Te=G({size:{type:[Number,String],values:se,default:"",validator:s=>$(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:pe},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:H(String),default:"cover"}}),Ce={error:s=>s instanceof Event},ke=["src","alt","srcset"],Ne=C({name:"ElAvatar"}),Ae=C({...Ne,props:Te,emits:Ce,setup(s,{emit:l}){const a=s,e=F("avatar"),c=b(!1),f=S(()=>{const{size:t,icon:h,shape:w}=a,g=[e.b()];return ne(t)&&g.push(e.m(t)),h&&g.push(e.m("icon")),w&&g.push(e.m(w)),g}),_=S(()=>{const{size:t}=a;return $(t)?e.cssVarBlock({size:W(t)||""}):void 0}),r=S(()=>({objectFit:a.fit}));O(()=>a.src,()=>c.value=!1);function p(t){c.value=!0,l("error",t)}return(t,h)=>(m(),x("span",{class:M(i(f)),style:E(i(_))},[(t.src||t.srcSet)&&!c.value?(m(),x("img",{key:0,src:t.src,alt:t.alt,srcset:t.srcSet,style:E(i(r)),onError:p},null,44,ke)):t.icon?(m(),V(i(U),{key:1},{default:y(()=>[(m(),V(ie(t.icon)))]),_:1})):Q(t.$slots,"default",{key:2})],6))}});var Be=D(Ae,[["__file","avatar.vue"]]);const Me=Z(Be),$e=window.setInterval,K=""+new URL("line.BuKYNq9B.webp",import.meta.url).href,Ie=""+new URL("fb.CmgJh3Hd.png",import.meta.url).href,Le=""+new URL("ig.CTpV5pmH.webp",import.meta.url).href,v=s=>(ce("data-v-4417dfa1"),s=s(),fe(),s),Pe={style:{"text-align":"center",padding:"0px 32px"}},Ve=v(()=>o("img",{src:he},null,-1)),qe=v(()=>o("h4",{style:{margin:"8px 0px"}},"TGE 邏捷運通有限公司",-1)),Re=v(()=>o("p",{style:{color:"#dbdbdb",margin:"8px 0px","font-size":"14px"}},"Top Global Express",-1)),Ge={style:{padding:"0px 16px",display:"flex"}},He={style:{padding:"0px 16px"}},We={style:{color:"#dbdbdb"}},De=de('<ul data-v-4417dfa1><li data-v-4417dfa1> Tel: 03-3230090 </li><li data-v-4417dfa1> Email: tyn@topglobal.com.tw </li><li data-v-4417dfa1> Add: 桃園市桃園區春日路1171號4樓 </li><li data-v-4417dfa1><div style="display:flex;align-items:center;" data-v-4417dfa1><div style="width:32px;margin-right:12px;" data-v-4417dfa1><a href="https://lin.ee/lgoVP3a" target="_blank" data-v-4417dfa1><img style="width:100%;" src="'+K+'" data-v-4417dfa1></a></div><div style="width:32px;margin-right:12px;" data-v-4417dfa1><a href="https://www.facebook.com/topglobal.ltd?locale=zh_TW" data-v-4417dfa1><img style="width:100%;" src="'+Ie+'" data-v-4417dfa1></a></div><div style="width:32px;margin-right:12px;" data-v-4417dfa1><a href="https://www.instagram.com/tge_global_express/" data-v-4417dfa1><img style="width:100%;" src="'+Le+'" data-v-4417dfa1></a></div></div></li></ul>',1),Ze={style:{padding:"0px 16px"}},Ue={style:{color:"#dbdbdb"}},Ye=v(()=>o("ul",null,[o("li",null," 週一至週五 9點～18點 ")],-1)),Fe={key:0,style:{padding:"0px 16px"}},Oe={style:{color:"#dbdbdb"}},je=v(()=>o("ul",null,[o("li",null,[o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5712305863913!2d121.30653177592563!3d25.014681439068205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e4cd0b02939%3A0xf3e7402685e239e!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6LevMTE3MeiZnzQ!5e0!3m2!1szh-TW!2stw!4v1712651770637!5m2!1szh-TW!2stw",width:"280",height:"auto",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1)),Qe={key:0,style:{"text-align":"center","margin-top":"8px"}},Je=v(()=>o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5712305863913!2d121.30653177592563!3d25.014681439068205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e4cd0b02939%3A0xf3e7402685e239e!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6LevMTE3MeiZnzQ!5e0!3m2!1szh-TW!2stw!4v1712651770637!5m2!1szh-TW!2stw",width:"100%",height:"auto",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),Ke=[Je],Xe=v(()=>o("div",{style:{"text-align":"center","background-color":"#333",color:"#dbdbdb",padding:"12px 0px","font-size":"12px"}}," Copyright 2024 © 邏捷運通有限公司 All Rights Reserved ",-1)),et=v(()=>o("div",{style:{width:"48px","margin-right":"12px"},class:"logo"},[o("a",{href:"https://lin.ee/lgoVP3a",target:"_blank"},[o("img",{style:{width:"100%"},src:K})])],-1)),tt={__name:"Footer",setup(s){j(()=>{l.value=ae(),$e(function(){a()},5e3)});const l=b(!1),a=()=>{var e=document.querySelector(".logo");e.style.animation="none",setTimeout(function(){e.style.animation="bounce 3s infinite"},1e3)};return(e,c)=>{const f=Me,_=A("PhoneFilled"),r=U,p=A("Headset"),t=A("OfficeBuilding"),h=ze;return m(),x("div",null,[o("div",{style:E([{display:"flex","justify-content":"center",color:"white",background:"linear-gradient(to bottom, #333333 0%, #595959 100%)",padding:"36px"},{flexDirection:i(l)?"column":"row",padding:i(l)?"8px":"36px"}])},[o("div",Pe,[u(f,{size:64},{default:y(()=>[Ve]),_:1}),qe,Re]),o("div",Ge,[o("div",He,[o("div",We,[u(r,{style:{"margin-right":"4px"}},{default:y(()=>[u(_)]),_:1}),B(" 聯絡我們 ")]),De]),o("div",Ze,[o("div",Ue,[u(r,{style:{"margin-right":"4px"}},{default:y(()=>[u(p)]),_:1}),B(" 客服時間 ")]),Ye]),i(l)?q("",!0):(m(),x("div",Fe,[o("div",Oe,[u(r,{style:{"margin-right":"4px"}},{default:y(()=>[u(t)]),_:1}),B(" 公司位置 ")]),je]))]),i(l)?(m(),x("div",Qe,Ke)):q("",!0)],4),Xe,u(h,{offset:0,style:{position:"fixed",bottom:"20px",right:"20px"}},{default:y(()=>[et]),_:1})])}}},dt=re(tt,[["__scopeId","data-v-4417dfa1"]]);export{Me as E,dt as _,ze as a};