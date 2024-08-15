import{y as oe,b as q,d as G,k as H,_ as Z,w as D,f as se,E as O,i as ae}from"./l_nwd4Kh.js";import{Y as U,A as $,a7 as P,x as C,E as j,R as N,r as b,G as S,h as F,n as Y,f as le,o as m,c as x,a as o,H as Q,q as M,I as i,s as E,B as ne,z as W,w as y,X as ie,_ as re,y as A,b as u,d as I,U as R,v as ce,p as de,e as fe}from"./vAz8DnAr.js";import{i as pe}from"./BQV9Mksd.js";import{e as ue,f as V,a as me}from"./C6nflK5H.js";import{C as ve,t as _e}from"./CelxogyL.js";import{_ as he}from"./BaSAyX7x.js";const ge=(s,l)=>{if(!U)return!1;const a={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(l)],e=oe(s,a);return["scroll","auto","overlay"].some(d=>e.includes(d))},ye=(s,l)=>{if(!U)return;let a=s;for(;a;){if([window,document,document.documentElement].includes(a))return window;if(ge(a,l))return a;a=a.parentNode}return a},xe=q({zIndex:{type:G([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),we={scroll:({scrollTop:s,fixed:l})=>$(s)&&P(l),[ve]:s=>P(s)},J="ElAffix",be=C({name:J}),Se=C({...be,props:xe,emits:we,setup(s,{expose:l,emit:a}){const e=s,d=j("affix"),f=N(),_=N(),r=N(),{height:p}=ue(),{height:t,width:h,top:w,bottom:g,update:k}=V(_,{windowScroll:!1}),z=V(f),c=b(!1),B=b(0),T=b(0),K=S(()=>({height:c.value?`${t.value}px`:"",width:c.value?`${h.value}px`:""})),ee=S(()=>{if(!c.value)return{};const n=e.offset?H(e.offset):0;return{height:`${t.value}px`,width:`${h.value}px`,top:e.position==="top"?n:"",bottom:e.position==="bottom"?n:"",transform:T.value?`translateY(${T.value}px)`:"",zIndex:e.zIndex}}),L=()=>{if(r.value)if(B.value=r.value instanceof Window?document.documentElement.scrollTop:r.value.scrollTop||0,e.position==="top")if(e.target){const n=z.bottom.value-e.offset-t.value;c.value=e.offset>w.value&&z.bottom.value>0,T.value=n<0?n:0}else c.value=e.offset>w.value;else if(e.target){const n=p.value-z.top.value-e.offset-t.value;c.value=p.value-e.offset<g.value&&p.value>z.top.value,T.value=n<0?-n:0}else c.value=p.value-e.offset<g.value},te=()=>{k(),a("scroll",{scrollTop:B.value,fixed:c.value})};return F(c,n=>a("change",n)),Y(()=>{var n;e.target?(f.value=(n=document.querySelector(e.target))!=null?n:void 0,f.value||_e(J,`Target is not existed: ${e.target}`)):f.value=document.documentElement,r.value=ye(_.value,!0),k()}),me(r,"scroll",te),le(L),l({update:L,updateRoot:k}),(n,ot)=>(m(),x("div",{ref_key:"root",ref:_,class:M(i(d).b()),style:E(i(K))},[o("div",{class:M({[i(d).m("fixed")]:c.value}),style:E(i(ee))},[Q(n.$slots,"default")],6)],6))}});var Ee=Z(Se,[["__file","affix.vue"]]);const ze=D(Ee),Te=q({size:{type:[Number,String],values:se,default:"",validator:s=>$(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:pe},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:G(String),default:"cover"}}),Ce={error:s=>s instanceof Event},ke=["src","alt","srcset"],Ne=C({name:"ElAvatar"}),Ae=C({...Ne,props:Te,emits:Ce,setup(s,{emit:l}){const a=s,e=j("avatar"),d=b(!1),f=S(()=>{const{size:t,icon:h,shape:w}=a,g=[e.b()];return ne(t)&&g.push(e.m(t)),h&&g.push(e.m("icon")),w&&g.push(e.m(w)),g}),_=S(()=>{const{size:t}=a;return $(t)?e.cssVarBlock({size:H(t)||""}):void 0}),r=S(()=>({objectFit:a.fit}));F(()=>a.src,()=>d.value=!1);function p(t){d.value=!0,l("error",t)}return(t,h)=>(m(),x("span",{class:M(i(f)),style:E(i(_))},[(t.src||t.srcSet)&&!d.value?(m(),x("img",{key:0,src:t.src,alt:t.alt,srcset:t.srcSet,style:E(i(r)),onError:p},null,44,ke)):t.icon?(m(),W(i(O),{key:1},{default:y(()=>[(m(),W(ie(t.icon)))]),_:1})):Q(t.$slots,"default",{key:2})],6))}});var Ie=Z(Ae,[["__file","avatar.vue"]]);const Me=D(Ie),$e=window.setInterval,X=""+new URL("line.C62OyIZW.jpg",import.meta.url).href,Be=""+new URL("fb.CmgJh3Hd.png",import.meta.url).href,Le=""+new URL("ig.BhO8_eEW.jpg",import.meta.url).href,v=s=>(de("data-v-4fa63ef6"),s=s(),fe(),s),Pe={style:{"text-align":"center",padding:"0px 32px"}},We=v(()=>o("img",{src:he},null,-1)),Re=v(()=>o("h4",{style:{margin:"8px 0px"}},"TGE 邏捷運通有限公司",-1)),Ve=v(()=>o("p",{style:{color:"#dbdbdb",margin:"8px 0px","font-size":"14px"}},"Top Global Express",-1)),qe={style:{padding:"0px 16px",display:"flex"}},Ge={style:{padding:"0px 16px"}},He={style:{color:"#dbdbdb"}},Ze=ce('<ul data-v-4fa63ef6><li data-v-4fa63ef6> Tel: 03-3230090 </li><li data-v-4fa63ef6> Email: tyn@topglobal.com.tw </li><li data-v-4fa63ef6> Add: 桃園市桃園區春日路1171號4樓 </li><li data-v-4fa63ef6><div style="display:flex;align-items:center;" data-v-4fa63ef6><div style="width:32px;margin-right:12px;" data-v-4fa63ef6><a href="https://lin.ee/lgoVP3a" target="_blank" data-v-4fa63ef6><img style="width:100%;" src="'+X+'" data-v-4fa63ef6></a></div><div style="width:32px;margin-right:12px;" data-v-4fa63ef6><a href="https://www.facebook.com/topglobal.ltd?locale=zh_TW" data-v-4fa63ef6><img style="width:100%;" src="'+Be+'" data-v-4fa63ef6></a></div><div style="width:32px;margin-right:12px;" data-v-4fa63ef6><a href="https://www.instagram.com/tge_global_express/" data-v-4fa63ef6><img style="width:100%;" src="'+Le+'" data-v-4fa63ef6></a></div></div></li></ul>',1),De={style:{padding:"0px 16px"}},Oe={style:{color:"#dbdbdb"}},Ue=v(()=>o("ul",null,[o("li",null," 週一至週五 9點～18點 ")],-1)),je={key:0,style:{padding:"0px 16px"}},Fe={style:{color:"#dbdbdb"}},Ye=v(()=>o("ul",null,[o("li",null,[o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5712305863913!2d121.30653177592563!3d25.014681439068205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e4cd0b02939%3A0xf3e7402685e239e!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6LevMTE3MeiZnzQ!5e0!3m2!1szh-TW!2stw!4v1712651770637!5m2!1szh-TW!2stw",width:"280",height:"auto",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1)),Qe={key:0,style:{"text-align":"center","margin-top":"8px"}},Je=v(()=>o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5712305863913!2d121.30653177592563!3d25.014681439068205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e4cd0b02939%3A0xf3e7402685e239e!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6LevMTE3MeiZnzQ!5e0!3m2!1szh-TW!2stw!4v1712651770637!5m2!1szh-TW!2stw",width:"100%",height:"auto",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),Xe=[Je],Ke=v(()=>o("div",{style:{"text-align":"center","background-color":"#333",color:"#dbdbdb",padding:"12px 0px","font-size":"12px"}}," Copyright 2024 © 邏捷運通有限公司 All Rights Reserved ",-1)),et=v(()=>o("div",{style:{width:"48px","margin-right":"12px"},class:"logo"},[o("a",{href:"https://lin.ee/lgoVP3a",target:"_blank"},[o("img",{style:{width:"100%"},src:X})])],-1)),tt={__name:"Footer",setup(s){Y(()=>{l.value=ae(),$e(function(){a()},5e3)});const l=b(!1),a=()=>{var e=document.querySelector(".logo");e.style.animation="none",setTimeout(function(){e.style.animation="bounce 3s infinite"},1e3)};return(e,d)=>{const f=Me,_=A("PhoneFilled"),r=O,p=A("Headset"),t=A("OfficeBuilding"),h=ze;return m(),x("div",null,[o("div",{style:E([{display:"flex","justify-content":"center",color:"white",background:"linear-gradient(to bottom, #333333 0%, #595959 100%)",padding:"36px"},{flexDirection:i(l)?"column":"row",padding:i(l)?"8px":"36px"}])},[o("div",Pe,[u(f,{size:64},{default:y(()=>[We]),_:1}),Re,Ve]),o("div",qe,[o("div",Ge,[o("div",He,[u(r,{style:{"margin-right":"4px"}},{default:y(()=>[u(_)]),_:1}),I(" 聯絡我們 ")]),Ze]),o("div",De,[o("div",Oe,[u(r,{style:{"margin-right":"4px"}},{default:y(()=>[u(p)]),_:1}),I(" 客服時間 ")]),Ue]),i(l)?R("",!0):(m(),x("div",je,[o("div",Fe,[u(r,{style:{"margin-right":"4px"}},{default:y(()=>[u(t)]),_:1}),I(" 公司位置 ")]),Ye]))]),i(l)?(m(),x("div",Qe,Xe)):R("",!0)],4),Ke,u(h,{offset:0,style:{position:"fixed",bottom:"20px",right:"20px"}},{default:y(()=>[et]),_:1})])}}},ct=re(tt,[["__scopeId","data-v-4fa63ef6"]]);export{Me as E,ct as _,ze as a};