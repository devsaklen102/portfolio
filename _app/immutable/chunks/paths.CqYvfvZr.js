import{B as w,k as l,y as m,C as q}from"./utils.6KhQ9vBw.js";const c=[];function v(s,t){return{subscribe:z(s,t).subscribe}}function z(s,t=l){let n=null;const o=new Set;function a(r){if(q(s,r)&&(s=r,n)){const i=!c.length;for(const e of o)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){a(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(a,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:a,update:b,subscribe:f}}function T(s,t,n){const o=!Array.isArray(s),a=o?[s]:s;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return v(n,(f,r)=>{let i=!1;const e=[];let p=0,d=l;const g=()=>{if(p)return;d();const u=t(o?e[0]:e,f,r);b?f(u):d=typeof u=="function"?u:l},x=a.map((u,_)=>w(u,k=>{e[_]=k,p&=~(1<<_),i&&g()},()=>{p|=1<<_}));return i=!0,g(),function(){m(x),d(),i=!1}})}function C(s){return{subscribe:s.subscribe.bind(s)}}function E(s){let t;return w(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_1aba8xp)==null?void 0:y.base)??"/portfolio";var h;const S=((h=globalThis.__sveltekit_1aba8xp)==null?void 0:h.assets)??A;export{v as a,A as b,S as c,T as d,E as g,C as r,z as w};
