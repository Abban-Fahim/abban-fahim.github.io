function E(){}function T(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function C(){return Object.create(null)}function x(t){t.forEach(M)}function O(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let y;function ct(t,e){return y||(y=document.createElement("a")),y.href=e,t===y.href}function D(t){return Object.keys(t).length===0}function ut(t,e,n,i){if(t){const r=k(t,e,n,i);return t[0](r)}}function k(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let f=0;f<l;f+=1)a[f]=e.dirty[f]|r[f];return a}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,a){if(r){const l=k(e,n,i,a);t.p(l,r)}}function st(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ot(t){return t??""}let b=!1;function z(){b=!0}function F(){b=!1}function H(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const o=e[u];o.claim_order!==void 0&&c.push(o)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,o=(r>0&&e[n[r]].claim_order<=u?r+1:H(1,r,p=>e[n[p]].claim_order,u))-1;i[c]=n[o]+1;const s=o+1;n[s]=c,r=Math.max(s,r)}const a=[],l=[];let f=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);f>=c;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);a.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<a.length&&l[c].claim_order>=a[u].claim_order;)u++;const o=u<a.length?a[u]:null;t.insertBefore(l[c],o)}}function W(t,e){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){b&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function J(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function ht(){return N(" ")}function mt(){return N("")}function pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function K(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){Q(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const c=n(f);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const c=n(f);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function R(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const f=r.attributes[l];n[f.name]||a.push(f.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function gt(t,e,n){return R(t,e,n,J)}function V(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function xt(t){return V(t," ")}function bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let A;function m(t){A=t}const _=[],q=[];let h=[];const B=[],X=Promise.resolve();let w=!1;function Y(){w||(w=!0,X.then(P))}function v(t){h.push(t)}const $=new Set;let d=0;function P(){if(d!==0)return;const t=A;do{try{for(;d<_.length;){const e=_[d];d++,m(e),Z(e.$$)}}catch(e){throw _.length=0,d=0,e}for(m(null),_.length=0,d=0;q.length;)q.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];$.has(n)||($.add(n),n())}h.length=0}while(_.length);for(;B.length;)B.pop()();w=!1,$.clear(),m(t)}function Z(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}function U(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}const g=new Set;let tt;function et(t,e){t&&t.i&&(g.delete(t),t.i(e))}function Et(t,e,n,i){if(t&&t.o){if(g.has(t))return;g.add(t),tt.c.push(()=>{g.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function wt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function nt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||v(()=>{const l=t.$$.on_mount.map(M).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):x(l),t.$$.on_mount=[]}),a.forEach(v)}function it(t,e){const n=t.$$;n.fragment!==null&&(U(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(_.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Nt(t,e,n,i,r,a,l,f=[-1]){const c=A;m(t);const u=t.$$={fragment:null,ctx:[],props:a,update:E,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:C(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let o=!1;if(u.ctx=n?n(t,e.props||{},(s,p,...S)=>{const j=S.length?S[0]:p;return u.ctx&&r(u.ctx[s],u.ctx[s]=j)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](j),o&&rt(t,s)),p}):[],u.update(),o=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){z();const s=K(e.target);u.fragment&&u.fragment.l(s),s.forEach(G)}else u.fragment&&u.fragment.c();e.intro&&et(t.$$.fragment),nt(t,e.target,e.anchor,e.customElement),F(),P()}m(c)}class At{$destroy(){it(this,1),this.$destroy=E}$on(e,n){if(!O(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!D(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{$t as A,mt as B,bt as C,ct as D,pt as E,q as F,At as S,vt as a,Et as b,wt as c,it as d,ut as e,J as f,N as g,ht as h,Nt as i,gt as j,K as k,V as l,nt as m,G as n,xt as o,yt as p,dt as q,W as r,lt as s,et as t,at as u,st as v,ft as w,E as x,_t as y,ot as z};
