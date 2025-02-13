import{e as S,a as h,b as T,s as G,r as Y,j as Z,d as H}from"./disclose-version.D_0R5w7p.js";import{i as P}from"./legacy.WUkXPhl2.js";import{am as tt,an as J,p as z,F as k,G as j,f as $,c as K,r as Q,t as x,a as L,z as N,g as f,H as p,b as E,D as O}from"./utils.6KhQ9vBw.js";import{o as et,k as at,l as st,m as D,n as F,a as w,d as I,j as V,p as nt,f as R}from"./base.CZx_qxO9.js";import{l as m,a as c,i as q,b as B,s as U}from"./index-client.CzxfyyCv.js";import{o as lt}from"./events.DTq70BOM.js";import{w as rt}from"./paths.CD4IIa5_.js";import{t as ot,c as it,r as dt,g as ct}from"./stores.CmvZVZeA.js";const ut={src:"",delayMs:0,onLoadingStatusChange:void 0},ft=s=>{const t={...ut,...s},r=ot(et(t,"loadingStatus","onLoadingStatusChange")),{src:u,delayMs:n}=r,o=t.loadingStatus??rt("loading"),a=lt(o,t==null?void 0:t.onLoadingStatusChange);at([u,n],([d,_])=>{if(st){const v=new Image;v.src=d,v.onload=()=>{if(n!==void 0){const y=window.setTimeout(()=>{a.set("loaded")},_);return()=>window.clearTimeout(y)}else a.set("loaded")},v.onerror=()=>{a.set("error")}}});const i=D("avatar-image",{stores:[u,a],returned:([d,_])=>{const v=F({display:_==="loaded"?"block":"none"});return{src:d,style:v}}}),g=D("avatar-fallback",{stores:[a],returned:([d])=>({style:d==="loaded"?F({display:"none"}):void 0,hidden:d==="loaded"?!0:void 0})});return{elements:{image:i,fallback:g},states:{loadingStatus:a},options:r}};function W(){return{NAME:"avatar",PARTS:["root","image","fallback"]}}function gt(s){const{NAME:t,PARTS:r}=W(),u=it(t,r),n={...ft(dt(s)),getAttrs:u};return tt(t,n),{...n,updateOption:ct(n.options)}}function vt(s=""){const{NAME:t}=W(),r=J(t);return s?r.options.src.set(s):r.options.src.set(""),r}function mt(){const{NAME:s}=W();return J(s)}var _t=T("<div><!></div>");function bt(s,t){const r=m(t,["children","$$slots","$$events","$$legacy"]),u=m(r,["delayMs","loadingStatus","onLoadingStatusChange","asChild","el"]);z(t,!1);let n=c(t,"delayMs",24,()=>{}),o=c(t,"loadingStatus",28,()=>{}),a=c(t,"onLoadingStatusChange",24,()=>{}),i=c(t,"asChild",8,!1),g=c(t,"el",28,()=>{});const{states:{loadingStatus:d},updateOption:_,getAttrs:v}=gt({src:"",delayMs:n(),onLoadingStatusChange:({next:l})=>{var e;return o(l),(e=a())==null||e(l),l}}),y=v("root");k(()=>N(o()),()=>{o()!==void 0&&d.set(o())}),k(()=>N(n()),()=>{_("delayMs",n())}),j(),P();var C=S(),M=$(C);q(M,i,l=>{var e=S(),b=$(e);w(b,t,"default",{attrs:y}),h(l,e)},l=>{var e=_t();let b;var A=K(e);w(A,t,"default",{attrs:y}),Q(e),B(e,X=>g(X),()=>g()),x(()=>b=I(e,b,{...u,...y})),h(l,e)}),h(s,C),L()}var ht=T("<img>");function yt(s,t){const r=m(t,["children","$$slots","$$events","$$legacy"]),u=m(r,["src","alt","asChild","el"]);z(t,!1);const n=G(),o=()=>H(f(a),"$image",n),a=p(),i=p();let g=c(t,"src",24,()=>{}),d=c(t,"alt",24,()=>{}),_=c(t,"asChild",8,!1),v=c(t,"el",28,()=>{});const y={"data-bits-avatar-image":""};k(()=>N(g()),()=>{Z(E(a,vt(g()).elements.image),"$image",n)}),k(()=>o(),()=>{E(i,o())}),k(()=>f(i),()=>{Object.assign(f(i),y)}),j(),P();var C=S(),M=$(C);q(M,_,l=>{var e=S(),b=$(e);w(b,t,"default",{get builder(){return f(i)}}),h(l,e)},l=>{var e=ht();let b;B(e,A=>v(A),()=>v()),V(e,A=>f(i).action(A)),x(()=>b=I(e,b,{...f(i),alt:d(),...u})),nt(e),Y(e),h(l,e)}),h(s,C),L()}var At=T("<span><!></span>");function St(s,t){const r=m(t,["children","$$slots","$$events","$$legacy"]),u=m(r,["asChild","el"]);z(t,!1);const n=G(),o=()=>H(d,"$fallback",n),a=p();let i=c(t,"asChild",8,!1),g=c(t,"el",28,()=>{});const{elements:{fallback:d},getAttrs:_}=mt(),v=_("fallback");k(()=>o(),()=>{E(a,o())}),k(()=>f(a),()=>{Object.assign(f(a),v)}),j(),P();var y=S(),C=$(y);q(C,i,M=>{var l=S(),e=$(l);w(e,t,"default",{get builder(){return f(a)}}),h(M,l)},M=>{var l=At();let e;var b=K(l);w(b,t,"default",{get builder(){return f(a)}}),Q(l),B(l,A=>g(A),()=>g()),V(l,A=>f(a).action(A)),x(()=>e=I(l,e,{...f(a),...u})),h(M,l)}),h(s,y),L()}function Nt(s,t){const r=m(t,["children","$$slots","$$events","$$legacy"]),u=m(r,["class","delayMs"]);z(t,!1);let n=c(t,"class",8,void 0),o=c(t,"delayMs",8,void 0);P();var a=O(()=>R("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n()));bt(s,U({get delayMs(){return o()},get class(){return f(a)}},()=>u,{children:(i,g)=>{var d=S(),_=$(d);w(_,t,"default",{}),h(i,d)},$$slots:{default:!0}})),L()}function pt(s,t){const r=m(t,["children","$$slots","$$events","$$legacy"]),u=m(r,["class","src","alt"]);z(t,!1);let n=c(t,"class",8,void 0),o=c(t,"src",8,void 0),a=c(t,"alt",8,void 0);P();var i=O(()=>R("aspect-square h-full w-full",n()));yt(s,U({get src(){return o()},get alt(){return a()},get class(){return f(i)}},()=>u)),L()}function Et(s,t){const r=m(t,["children","$$slots","$$events","$$legacy"]),u=m(r,["class"]);z(t,!1);let n=c(t,"class",8,void 0);P();var o=O(()=>R("bg-muted flex h-full w-full items-center justify-center rounded-full",n()));St(s,U({get class(){return f(o)}},()=>u,{children:(a,i)=>{var g=S(),d=$(g);w(d,t,"default",{}),h(a,g)},$$slots:{default:!0}})),L()}export{Nt as A,Et as a,pt as b};
