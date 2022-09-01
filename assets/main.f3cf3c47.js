(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function w(){}function F(e,t){for(const n in t)e[n]=t[n];return e}function Kt(e){return e()}function Ot(){return Object.create(null)}function Y(e){e.forEach(Kt)}function Qt(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let et;function ne(e,t){return et||(et=document.createElement("a")),et.href=t,e===et.href}function oe(e){return Object.keys(e).length===0}function Yt(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function B(e,t,n){e.$$.on_destroy.push(Yt(t,n))}function kt(e,t,n,o){if(e){const r=Gt(e,t,n,o);return e[0](r)}}function Gt(e,t,n,o){return e[1]&&o?F(n.ctx.slice(),e[1](o(t))):n.ctx}function wt(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(t.dirty.length,r.length);for(let c=0;c<u;c+=1)s[c]=t.dirty[c]|r[c];return s}return t.dirty|r}return t.dirty}function $t(e,t,n,o,r,s){if(r){const u=Gt(t,n,o,s);e.p(u,r)}}function Et(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function dt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function jt(e,t){const n={};t=new Set(t);for(const o in e)!t.has(o)&&o[0]!=="$"&&(n[o]=e[o]);return n}function re(e){return e==null?"":e}function k(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function Wt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function P(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function R(){return K(" ")}function Pt(){return K("")}function Zt(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function M(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Nt(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)t[o]==null?e.removeAttribute(o):o==="style"?e.style.cssText=t[o]:o==="__value"?e.value=e[o]=t[o]:n[o]&&n[o].set?e[o]=t[o]:M(e,o,t[o])}function se(e){return Array.from(e.childNodes)}function ie(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}let V;function J(e){V=e}function tt(){if(!V)throw new Error("Function called outside component initialization");return V}function ce(e){tt().$$.on_mount.push(e)}function le(e){tt().$$.on_destroy.push(e)}function ue(){const e=tt();return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t];if(r){const s=ie(t,n,{cancelable:o});return r.slice().forEach(u=>{u.call(e,s)}),!s.defaultPrevented}return!0}}function Rt(e,t){return tt().$$.context.set(e,t),t}function Q(e){return tt().$$.context.get(e)}const W=[],it=[],rt=[],Mt=[],ae=Promise.resolve();let _t=!1;function fe(){_t||(_t=!0,ae.then(Jt))}function gt(e){rt.push(e)}const at=new Set;let nt=0;function Jt(){const e=V;do{for(;nt<W.length;){const t=W[nt];nt++,J(t),pe(t.$$)}for(J(null),W.length=0,nt=0;it.length;)it.pop()();for(let t=0;t<rt.length;t+=1){const n=rt[t];at.has(n)||(at.add(n),n())}rt.length=0}while(W.length);for(;Mt.length;)Mt.pop()();_t=!1,at.clear(),J(e)}function pe(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(gt)}}const st=new Set;let q;function St(){q={r:0,c:[],p:q}}function Ct(){q.r||Y(q.c),q=q.p}function E(e,t){e&&e.i&&(st.delete(e),e.i(t))}function A(e,t,n,o){if(e&&e.o){if(st.has(e))return;st.add(e),q.c.push(()=>{st.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function Vt(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const u=e[s],c=t[s];if(c){for(const l in u)l in c||(o[l]=1);for(const l in c)r[l]||(n[l]=c[l],r[l]=1);e[s]=c}else for(const l in u)r[l]=1}for(const u in o)u in n||(n[u]=void 0);return n}function zt(e){return typeof e=="object"&&e!==null?e:{}}function I(e){e&&e.c()}function z(e,t,n,o){const{fragment:r,on_mount:s,on_destroy:u,after_update:c}=e.$$;r&&r.m(t,n),o||gt(()=>{const l=s.map(Kt).filter(Qt);u?u.push(...l):Y(l),e.$$.on_mount=[]}),c.forEach(gt)}function T(e,t){const n=e.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(W.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,o,r,s,u,c=[-1]){const l=V;J(e);const i=e.$$={fragment:null,ctx:null,props:s,update:w,not_equal:r,bound:Ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ot(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};u&&u(i.root);let a=!1;if(i.ctx=n?n(e,t.props||{},(b,p,...f)=>{const y=f.length?f[0]:p;return i.ctx&&r(i.ctx[b],i.ctx[b]=y)&&(!i.skip_bound&&i.bound[b]&&i.bound[b](y),a&&me(e,b)),p}):[],i.update(),a=!0,Y(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const b=se(t.target);i.fragment&&i.fragment.l(b),b.forEach(S)}else i.fragment&&i.fragment.c();t.intro&&E(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),Jt()}J(l)}class H{$destroy(){T(this,1),this.$destroy=w}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=[];function he(e,t){return{subscribe:Z(e,t).subscribe}}function Z(e,t=w){let n;const o=new Set;function r(c){if(x(e,c)&&(e=c,n)){const l=!U.length;for(const i of o)i[1](),U.push(i,e);if(l){for(let i=0;i<U.length;i+=2)U[i][0](U[i+1]);U.length=0}}}function s(c){r(c(e))}function u(c,l=w){const i=[c,l];return o.add(i),o.size===1&&(n=t(r)||w),c(e),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:u}}function de(e,t,n){const o=!Array.isArray(e),r=o?[e]:e,s=t.length<2;return he(n,u=>{let c=!1;const l=[];let i=0,a=w;const b=()=>{if(i)return;a();const f=t(o?l[0]:l,u);s?u(f):a=Qt(f)?f:w},p=r.map((f,y)=>Yt(f,m=>{l[y]=m,i&=~(1<<y),c&&b()},()=>{i|=1<<y}));return c=!0,b(),function(){Y(p),a()}})}const ct={},lt={};function ft(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function _e(e,t){const n=[];let o=ft(e);return{get location(){return o},listen(r){n.push(r);const s=()=>{o=ft(e),r({location:o,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const u=n.indexOf(r);n.splice(u,1)}},navigate(r,{state:s,replace:u=!1}={}){s={...s,key:Date.now()+""};try{u?e.history.replaceState(s,null,r):e.history.pushState(s,null,r)}catch{e.location[u?"replace":"assign"](r)}o=ft(e),n.forEach(c=>c({location:o,action:"PUSH"}))}}}function ge(e="/"){let t=0;const n=[{pathname:e,search:""}],o=[];return{get location(){return n[t]},addEventListener(r,s){},removeEventListener(r,s){},history:{get entries(){return n},get index(){return t},get state(){return o[t]},pushState(r,s,u){const[c,l=""]=u.split("?");t++,n.push({pathname:c,search:l}),o.push(r)},replaceState(r,s,u){const[c,l=""]=u.split("?");n[t]={pathname:c,search:l},o[t]=r}}}}const be=Boolean(typeof window<"u"&&window.document&&window.document.createElement),bt=_e(be?window:ge()),{navigate:ye}=bt,Xt=/^:(.+)/,Tt=4,ke=3,we=2,$e=1,Ee=1;function yt(e,t){return e.substr(0,t.length)===t}function Pe(e){return e===""}function Se(e){return Xt.test(e)}function te(e){return e[0]==="*"}function X(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function pt(e){return e.replace(/(^\/+|\/+$)/g,"")}function Ce(e,t){const n=e.default?0:X(e.path).reduce((o,r)=>(o+=Tt,Pe(r)?o+=Ee:Se(r)?o+=we:te(r)?o-=Tt+$e:o+=ke,o),0);return{route:e,score:n,index:t}}function Le(e){return e.map(Ce).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function ee(e,t){let n,o;const[r]=t.split("?"),s=X(r),u=s[0]==="",c=Le(e);for(let l=0,i=c.length;l<i;l++){const a=c[l].route;let b=!1;if(a.default){o={route:a,params:{},uri:t};continue}const p=X(a.path),f={},y=Math.max(s.length,p.length);let m=0;for(;m<y;m++){const _=p[m],C=s[m];if(_!==void 0&&te(_)){const N=_==="*"?"*":_.slice(1);f[N]=s.slice(m).map(decodeURIComponent).join("/");break}if(C===void 0){b=!0;break}let v=Xt.exec(_);if(v&&!u){const N=decodeURIComponent(C);f[v[1]]=N}else if(_!==C){b=!0;break}}if(!b){n={route:a,params:f,uri:"/"+s.slice(0,m).join("/")};break}}return n||o||null}function ve(e,t){return ee([e],t)}function mt(e,t){return e+(t?`?${t}`:"")}function Ae(e,t){if(yt(e,"/"))return e;const[n,o]=e.split("?"),[r]=t.split("?"),s=X(n),u=X(r);if(s[0]==="")return mt(r,o);if(!yt(s[0],".")){const i=u.concat(s).join("/");return mt((r==="/"?"":"/")+i,o)}const c=u.concat(s),l=[];return c.forEach(i=>{i===".."?l.pop():i!=="."&&l.push(i)}),mt("/"+l.join("/"),o)}function It(e,t){return`${pt(t==="/"?e:`${pt(e)}/${pt(t)}`)}/`}function Oe(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function je(e){let t;const n=e[9].default,o=kt(n,e,e[8],null);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,[s]){o&&o.p&&(!t||s&256)&&$t(o,n,r,r[8],t?wt(n,r[8],s,null):Et(r[8]),null)},i(r){t||(E(o,r),t=!0)},o(r){A(o,r),t=!1},d(r){o&&o.d(r)}}}function Ne(e,t,n){let o,r,s,{$$slots:u={},$$scope:c}=t,{basepath:l="/"}=t,{url:i=null}=t;const a=Q(ct),b=Q(lt),p=Z([]);B(e,p,d=>n(6,r=d));const f=Z(null);let y=!1;const m=a||Z(i?{pathname:i}:bt.location);B(e,m,d=>n(5,o=d));const _=b?b.routerBase:Z({path:l,uri:l});B(e,_,d=>n(7,s=d));const C=de([_,f],([d,$])=>{if($===null)return d;const{path:g}=d,{route:j,uri:G}=$;return{path:j.default?g:j.path.replace(/\*.*$/,""),uri:G}});function v(d){const{path:$}=s;let{path:g}=d;if(d._path=g,d.path=It($,g),typeof window>"u"){if(y)return;const j=ve(d,o.pathname);j&&(f.set(j),y=!0)}else p.update(j=>(j.push(d),j))}function N(d){p.update($=>{const g=$.indexOf(d);return $.splice(g,1),$})}return a||(ce(()=>bt.listen($=>{m.set($.location)})),Rt(ct,m)),Rt(lt,{activeRoute:f,base:_,routerBase:C,registerRoute:v,unregisterRoute:N}),e.$$set=d=>{"basepath"in d&&n(3,l=d.basepath),"url"in d&&n(4,i=d.url),"$$scope"in d&&n(8,c=d.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:d}=s;p.update($=>($.forEach(g=>g.path=It(d,g._path)),$))}if(e.$$.dirty&96){const d=ee(r,o.pathname);f.set(d)}},[p,m,_,l,i,o,r,s,c,u]}class Re extends H{constructor(t){super(),D(this,t,Ne,je,x,{basepath:3,url:4})}}const Me=e=>({params:e&4,location:e&16}),xt=e=>({params:e[2],location:e[4]});function Dt(e){let t,n,o,r;const s=[Te,ze],u=[];function c(l,i){return l[0]!==null?0:1}return t=c(e),n=u[t]=s[t](e),{c(){n.c(),o=Pt()},m(l,i){u[t].m(l,i),L(l,o,i),r=!0},p(l,i){let a=t;t=c(l),t===a?u[t].p(l,i):(St(),A(u[a],1,1,()=>{u[a]=null}),Ct(),n=u[t],n?n.p(l,i):(n=u[t]=s[t](l),n.c()),E(n,1),n.m(o.parentNode,o))},i(l){r||(E(n),r=!0)},o(l){A(n),r=!1},d(l){u[t].d(l),l&&S(o)}}}function ze(e){let t;const n=e[10].default,o=kt(n,e,e[9],xt);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,s){o&&o.p&&(!t||s&532)&&$t(o,n,r,r[9],t?wt(n,r[9],s,Me):Et(r[9]),xt)},i(r){t||(E(o,r),t=!0)},o(r){A(o,r),t=!1},d(r){o&&o.d(r)}}}function Te(e){let t,n,o;const r=[{location:e[4]},e[2],e[3]];var s=e[0];function u(c){let l={};for(let i=0;i<r.length;i+=1)l=F(l,r[i]);return{props:l}}return s&&(t=new s(u())),{c(){t&&I(t.$$.fragment),n=Pt()},m(c,l){t&&z(t,c,l),L(c,n,l),o=!0},p(c,l){const i=l&28?Vt(r,[l&16&&{location:c[4]},l&4&&zt(c[2]),l&8&&zt(c[3])]):{};if(s!==(s=c[0])){if(t){St();const a=t;A(a.$$.fragment,1,0,()=>{T(a,1)}),Ct()}s?(t=new s(u()),I(t.$$.fragment),E(t.$$.fragment,1),z(t,n.parentNode,n)):t=null}else s&&t.$set(i)},i(c){o||(t&&E(t.$$.fragment,c),o=!0)},o(c){t&&A(t.$$.fragment,c),o=!1},d(c){c&&S(n),t&&T(t,c)}}}function Ie(e){let t,n,o=e[1]!==null&&e[1].route===e[7]&&Dt(e);return{c(){o&&o.c(),t=Pt()},m(r,s){o&&o.m(r,s),L(r,t,s),n=!0},p(r,[s]){r[1]!==null&&r[1].route===r[7]?o?(o.p(r,s),s&2&&E(o,1)):(o=Dt(r),o.c(),E(o,1),o.m(t.parentNode,t)):o&&(St(),A(o,1,1,()=>{o=null}),Ct())},i(r){n||(E(o),n=!0)},o(r){A(o),n=!1},d(r){o&&o.d(r),r&&S(t)}}}function xe(e,t,n){let o,r,{$$slots:s={},$$scope:u}=t,{path:c=""}=t,{component:l=null}=t;const{registerRoute:i,unregisterRoute:a,activeRoute:b}=Q(lt);B(e,b,_=>n(1,o=_));const p=Q(ct);B(e,p,_=>n(4,r=_));const f={path:c,default:c===""};let y={},m={};return i(f),typeof window<"u"&&le(()=>{a(f)}),e.$$set=_=>{n(13,t=F(F({},t),dt(_))),"path"in _&&n(8,c=_.path),"component"in _&&n(0,l=_.component),"$$scope"in _&&n(9,u=_.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&o&&o.route===f&&n(2,y=o.params);{const{path:_,component:C,...v}=t;n(3,m=v)}},t=dt(t),[l,o,y,m,r,b,p,f,c,u,s]}class ot extends H{constructor(t){super(),D(this,t,xe,Ie,x,{path:8,component:0})}}function De(e){let t,n,o,r;const s=e[16].default,u=kt(s,e,e[15],null);let c=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],l={};for(let i=0;i<c.length;i+=1)l=F(l,c[i]);return{c(){t=P("a"),u&&u.c(),Nt(t,l)},m(i,a){L(i,t,a),u&&u.m(t,null),n=!0,o||(r=Zt(t,"click",e[5]),o=!0)},p(i,[a]){u&&u.p&&(!n||a&32768)&&$t(u,s,i,i[15],n?wt(s,i[15],a,null):Et(i[15]),null),Nt(t,l=Vt(c,[(!n||a&1)&&{href:i[0]},(!n||a&4)&&{"aria-current":i[2]},a&2&&i[1],a&64&&i[6]]))},i(i){n||(E(u,i),n=!0)},o(i){A(u,i),n=!1},d(i){i&&S(t),u&&u.d(i),o=!1,r()}}}function He(e,t,n){let o;const r=["to","replace","state","getProps"];let s=jt(t,r),u,c,{$$slots:l={},$$scope:i}=t,{to:a="#"}=t,{replace:b=!1}=t,{state:p={}}=t,{getProps:f=()=>({})}=t;const{base:y}=Q(lt);B(e,y,g=>n(14,c=g));const m=Q(ct);B(e,m,g=>n(13,u=g));const _=ue();let C,v,N,d;function $(g){if(_("click",g),Oe(g)){g.preventDefault();const j=u.pathname===C||b;ye(C,{state:p,replace:j})}}return e.$$set=g=>{t=F(F({},t),dt(g)),n(6,s=jt(t,r)),"to"in g&&n(7,a=g.to),"replace"in g&&n(8,b=g.replace),"state"in g&&n(9,p=g.state),"getProps"in g&&n(10,f=g.getProps),"$$scope"in g&&n(15,i=g.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,C=a==="/"?c.uri:Ae(a,c.uri)),e.$$.dirty&8193&&n(11,v=yt(u.pathname,C)),e.$$.dirty&8193&&n(12,N=C===u.pathname),e.$$.dirty&4096&&n(2,o=N?"page":void 0),e.$$.dirty&15361&&n(1,d=f({location:u,href:C,isPartiallyCurrent:v,isCurrent:N}))},[C,d,o,y,m,$,s,a,b,p,f,v,N,u,c,i,l]}class ht extends H{constructor(t){super(),D(this,t,He,De,x,{to:7,replace:8,state:9,getProps:10})}}const qe=[{img:"/notezzz.png",title:"Notezzz",desc:"A cross platform note-taking app",links:[{type:"globe",link:"https://notezzz.web.app"},{type:"github",link:"https://github.com/Abban-Fahim/notezzz"}]},{img:"/ez-mcq.png",title:"EZ MCQs",desc:"A little app to help you prepare for the IGCSE Science MCQs",links:[{type:"globe",link:"https://ez-mcq.herokuapp.com"},{type:"github",link:"https://github.com/Abban-Fahim/MCQ"}]}],Ht={web:qe};function qt(e,t,n){const o=e.slice();return o[0]=t[n],o}function Bt(e,t,n){const o=e.slice();return o[3]=t[n],o}function Ft(e){let t,n;return{c(){t=P("a"),n=P("i"),M(n,"class",re("bi bi-"+e[3].type)+" svelte-1erj9le"),M(t,"class","project-link svelte-1erj9le"),M(t,"href",e[3].link)},m(o,r){L(o,t,r),k(t,n)},p:w,d(o){o&&S(t)}}}function Ut(e){let t,n,o=e[0].title+"",r,s,u,c=e[0].desc+"",l,i,a,b=e[0].links,p=[];for(let f=0;f<b.length;f+=1)p[f]=Ft(Bt(e,b,f));return{c(){t=P("div"),n=P("h5"),r=K(o),s=R(),u=P("p"),l=K(c),i=R();for(let f=0;f<p.length;f+=1)p[f].c();a=R(),M(t,"class","item")},m(f,y){L(f,t,y),k(t,n),k(n,r),k(t,s),k(t,u),k(u,l),k(t,i);for(let m=0;m<p.length;m+=1)p[m].m(t,null);k(t,a)},p(f,y){if(y&0){b=f[0].links;let m;for(m=0;m<b.length;m+=1){const _=Bt(f,b,m);p[m]?p[m].p(_,y):(p[m]=Ft(_),p[m].c(),p[m].m(t,a))}for(;m<p.length;m+=1)p[m].d(1);p.length=b.length}},d(f){f&&S(t),Wt(p,f)}}}function Be(e){let t,n,o,r,s=Ht.web,u=[];for(let c=0;c<s.length;c+=1)u[c]=Ut(qt(e,s,c));return{c(){t=P("main"),n=P("h3"),n.textContent="Web related projects",o=R(),r=P("div");for(let c=0;c<u.length;c+=1)u[c].c();M(r,"class","grid")},m(c,l){L(c,t,l),k(t,n),k(t,o),k(t,r);for(let i=0;i<u.length;i+=1)u[i].m(r,null)},p(c,[l]){if(l&0){s=Ht.web;let i;for(i=0;i<s.length;i+=1){const a=qt(c,s,i);u[i]?u[i].p(a,l):(u[i]=Ut(a),u[i].c(),u[i].m(r,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=s.length}},i:w,o:w,d(c){c&&S(t),Wt(u,c)}}}class Fe extends H{constructor(t){super(),D(this,t,null,Be,x,{})}}const Ue="/personal-site/assets/abban-logo.e75e67e1.svg";function Ke(e){let t;return{c(){t=P("main"),t.innerHTML=`<p>You can use the social media links in the header to contact me.</p> 
  <p>All my accounts are public, but for serious communciation you can <a href="mailto:lloydtechno58@gmail.com">email</a>
    me (serious stuff only)</p> 
  <p>I&#39;d be happy to work on any good-willed project with you, or assisst you as possible.</p>`},m(n,o){L(n,t,o)},p:w,i:w,o:w,d(n){n&&S(t)}}}class Qe extends H{constructor(t){super(),D(this,t,null,Ke,x,{})}}function Ye(e){let t;return{c(){t=P("main"),t.innerHTML=`<h1>Hi there!</h1> 
  <h2>I&#39;m <strong>Abban Fahim</strong></h2> 
  <h2 dir="rtl">\u0627\u0633\u0645\u064A <strong>\u0627\u0628\u0627\u0646 \u0641\u0647\u064A\u0645</strong></h2>`},m(n,o){L(n,t,o)},p:w,i:w,o:w,d(n){n&&S(t)}}}class Ge extends H{constructor(t){super(),D(this,t,null,Ye,x,{})}}function We(e){let t;return{c(){t=P("main"),t.textContent="nothing was found"},m(n,o){L(n,t,o)},p:w,i:w,o:w,d(n){n&&S(t)}}}class Ze extends H{constructor(t){super(),D(this,t,null,We,x,{})}}function Je(e){let t,n;return{c(){t=P("img"),ne(t.src,n=Ue)||M(t,"src",n),M(t,"alt","Logo")},m(o,r){L(o,t,r)},p:w,d(o){o&&S(t)}}}function Ve(e){let t;return{c(){t=K("My projects")},m(n,o){L(n,t,o)},d(n){n&&S(t)}}}function Xe(e){let t;return{c(){t=K("Contact")},m(n,o){L(n,t,o)},d(n){n&&S(t)}}}function tn(e){let t,n,o,r,s,u,c,l,i,a,b,p,f,y,m,_,C,v,N,d,$,g,j,G,ut;return n=new ht({props:{to:"/",id:"logo",$$slots:{default:[Je]},$$scope:{ctx:e}}}),l=new ht({props:{to:"work",$$slots:{default:[Ve]},$$scope:{ctx:e}}}),a=new ht({props:{to:"contact",$$slots:{default:[Xe]},$$scope:{ctx:e}}}),_=new ot({props:{component:Fe,path:"/work"}}),v=new ot({props:{component:Qe,path:"/contact"}}),d=new ot({props:{component:Ge,path:"/"}}),g=new ot({props:{component:Ze}}),{c(){t=P("header"),I(n.$$.fragment),o=R(),r=P("button"),s=P("i"),u=R(),c=P("nav"),I(l.$$.fragment),i=R(),I(a.$$.fragment),b=R(),p=P("a"),p.textContent="My Blog",f=R(),y=P("div"),y.innerHTML=`<a target="__blank" href="https://github.com/Abban-Fahim/"><i class="bi bi-github"></i></a> 
        <a target="__blank" href="https://www.instagram.com/abbanfahim__/"><i class="bi bi-instagram"></i></a> 
        <a target="__blank" href="https://www.linkedin.com/in/abban-fahim/"><i class="bi bi-linkedin"></i></a>`,m=R(),I(_.$$.fragment),C=R(),I(v.$$.fragment),N=R(),I(d.$$.fragment),$=R(),I(g.$$.fragment),M(s,"class","bi bi-plus hidden"),M(r,"type","button"),M(r,"id","collapser"),M(p,"target","__blank"),M(p,"href","https://abban-fahim.github.io/blog/")},m(h,O){L(h,t,O),z(n,t,null),k(t,o),k(t,r),k(r,s),e[3](s),k(t,u),k(t,c),z(l,c,null),k(c,i),z(a,c,null),k(c,b),k(c,p),k(c,f),k(c,y),e[4](c),L(h,m,O),z(_,h,O),L(h,C,O),z(v,h,O),L(h,N,O),z(d,h,O),L(h,$,O),z(g,h,O),j=!0,G||(ut=Zt(r,"click",e[2]),G=!0)},p(h,O){const Lt={};O&32&&(Lt.$$scope={dirty:O,ctx:h}),n.$set(Lt);const vt={};O&32&&(vt.$$scope={dirty:O,ctx:h}),l.$set(vt);const At={};O&32&&(At.$$scope={dirty:O,ctx:h}),a.$set(At)},i(h){j||(E(n.$$.fragment,h),E(l.$$.fragment,h),E(a.$$.fragment,h),E(_.$$.fragment,h),E(v.$$.fragment,h),E(d.$$.fragment,h),E(g.$$.fragment,h),j=!0)},o(h){A(n.$$.fragment,h),A(l.$$.fragment,h),A(a.$$.fragment,h),A(_.$$.fragment,h),A(v.$$.fragment,h),A(d.$$.fragment,h),A(g.$$.fragment,h),j=!1},d(h){h&&S(t),T(n),e[3](null),T(l),T(a),e[4](null),h&&S(m),T(_,h),h&&S(C),T(v,h),h&&S(N),T(d,h),h&&S($),T(g,h),G=!1,ut()}}}function en(e){let t,n;return t=new Re({props:{basepath:"/personal-site",$$slots:{default:[tn]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},m(o,r){z(t,o,r),n=!0},p(o,[r]){const s={};r&35&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(E(t.$$.fragment,o),n=!0)},o(o){A(t.$$.fragment,o),n=!1},d(o){T(t,o)}}}function nn(e,t,n){let o,r;function s(){o.classList.toggle("hidden"),r.classList.toggle("hidden")}function u(l){it[l?"unshift":"push"](()=>{r=l,n(1,r)})}function c(l){it[l?"unshift":"push"](()=>{o=l,n(0,o)})}return[o,r,s,u,c]}class on extends H{constructor(t){super(),D(this,t,nn,en,x,{})}}new on({target:document.getElementById("app")});
