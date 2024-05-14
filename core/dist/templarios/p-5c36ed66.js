const e="templarios";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:true,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:true,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:true,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};var l=Object.defineProperty;var r=(e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:true})};var s=e=>{const t=new URL(e,Ve.t);return t.origin!==Ie.location.origin?t.href:t.pathname};var n={};var i="http://www.w3.org/2000/svg";var a="http://www.w3.org/1999/xhtml";var o=e=>e!=null;var f=e=>{e=typeof e;return e==="object"||e==="function"};function u(e){var t,l,r;return(r=(l=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:l.getAttribute("content"))!=null?r:void 0}var c={};r(c,{err:()=>d,map:()=>p,ok:()=>v,unwrap:()=>h,unwrapErr:()=>m});var v=e=>({isOk:true,isErr:false,value:e});var d=e=>({isOk:false,isErr:true,value:e});function p(e,t){if(e.isOk){const l=t(e.value);if(l instanceof Promise){return l.then((e=>v(e)))}else{return v(l)}}if(e.isErr){const t=e.value;return d(t)}throw"should never get here"}var h=e=>{if(e.isOk){return e.value}else{throw e.value}};var m=e=>{if(e.isErr){return e.value}else{throw e.value}};var y=(e,t="")=>{{return()=>{}}};var b=(e,t)=>{{return()=>{}}};var w="{visibility:hidden}.hydrated{visibility:inherit}";var g="slot-fb{display:contents}slot-fb[hidden]{display:none}";var $="http://www.w3.org/1999/xlink";var S=(e,t,...l)=>{let r=null;let s=null;let n=null;let i=false;let a=false;const o=[];const u=t=>{for(let l=0;l<t.length;l++){r=t[l];if(Array.isArray(r)){u(r)}else if(r!=null&&typeof r!=="boolean"){if(i=typeof e!=="function"&&!f(r)){r=String(r)}if(i&&a){o[o.length-1].l+=r}else{o.push(i?k(null,r):r)}a=i}}};u(l);if(t){if(t.key){s=t.key}if(t.name){n=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const c=k(e,null);c.i=t;if(o.length>0){c.o=o}{c.u=s}{c.v=n}return c};var k=(e,t)=>{const l={p:0,h:e,l:t,m:null,o:null};{l.i=null}{l.u=null}{l.v=null}return l};var O={};var C=e=>e&&e.h===O;var j=(e,t)=>{if(e!=null&&!f(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var x=e=>Ne(e).$hostElement$;var L=(e,t,l)=>{const r=x(e);return{emit:e=>T(r,t,{bubbles:!!(l&4),composed:!!(l&2),cancelable:!!(l&1),detail:e})}};var T=(e,t,l)=>{const r=Ve.ce(t,l);e.dispatchEvent(r);return r};var R=new WeakMap;var D=(e,t,l)=>{let r=qe.get(e);if(Ge&&l){r=r||new CSSStyleSheet;if(typeof r==="string"){r=t}else{r.replaceSync(t)}}else{r=t}qe.set(e,r)};var F=(e,t,l)=>{var r;const s=A(t);const n=qe.get(s);e=e.nodeType===11?e:Ke;if(n){if(typeof n==="string"){e=e.head||e;let l=R.get(e);let i;if(!l){R.set(e,l=new Set)}if(!l.has(s)){{i=Ke.createElement("style");i.innerHTML=n;const t=(r=Ve.$)!=null?r:u(Ke);if(t!=null){i.setAttribute("nonce",t)}e.insertBefore(i,e.querySelector("link"))}if(t.p&4){i.innerHTML+=g}if(l){l.add(s)}}}else if(!e.adoptedStyleSheets.includes(n)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]}}return s};var M=e=>{const t=e.S;const l=e.$hostElement$;const r=t.p;const s=y("attachStyles",t.k);const n=F(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);if(r&10){l["s-sc"]=n;l.classList.add(n+"-h");if(r&2){l.classList.add(n+"-s")}}s()};var A=(e,t)=>"sc-"+e.k;var P=(e,t,l,r,s,n)=>{if(l!==r){let i=ze(e,t);let a=t.toLowerCase();if(t==="class"){const t=e.classList;const s=N(l);const n=N(r);t.remove(...s.filter((e=>e&&!n.includes(e))));t.add(...n.filter((e=>e&&!s.includes(e))))}else if(t==="style"){{for(const t in l){if(!r||r[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in r){if(!l||r[t]!==l[t]){if(t.includes("-")){e.style.setProperty(t,r[t])}else{e.style[t]=r[t]}}}}else if(t==="key");else if(t==="ref"){if(r){r(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(ze(Ie,a)){t=a.slice(2)}else{t=a[2]+t.slice(3)}if(l||r){const s=t.endsWith(U);t=t.replace(W,"");if(l){Ve.rel(e,t,l,s)}if(r){Ve.ael(e,t,r,s)}}}else{const o=f(r);if((i||o&&r!==null)&&!s){try{if(!e.tagName.includes("-")){const s=r==null?"":r;if(t==="list"){i=false}else if(l==null||e[t]!=s){e[t]=s}}else{e[t]=r}}catch(e){}}let u=false;{if(a!==(a=a.replace(/^xlink\:?/,""))){t=a;u=true}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){if(u){e.removeAttributeNS($,t)}else{e.removeAttribute(t)}}}else if((!i||n&4||s)&&!o){r=r===true?"":r;if(u){e.setAttributeNS($,t,r)}else{e.setAttribute(t,r)}}}}};var E=/\s/;var N=e=>!e?[]:e.split(E);var U="Capture";var W=new RegExp(U+"$");var z=(e,t,l,r)=>{const s=t.m.nodeType===11&&t.m.host?t.m.host:t.m;const i=e&&e.i||n;const a=t.i||n;{for(r of B(Object.keys(i))){if(!(r in a)){P(s,r,i[r],void 0,l,t.p)}}}for(r of B(Object.keys(a))){P(s,r,i[r],a[r],l,t.p)}};function B(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var H;var Q;var q;var I=false;var K=false;var V=false;var X=false;var _=(e,t,l,r)=>{var s;const n=t.o[l];let f=0;let u;let c;let v;if(!I){V=true;if(n.h==="slot"){if(H){r.classList.add(H+"-s")}n.p|=n.o?2:1}}if(n.l!==null){u=n.m=Ke.createTextNode(n.l)}else if(n.p&1){u=n.m=Ke.createTextNode("")}else{if(!X){X=n.h==="svg"}u=n.m=Ke.createElementNS(X?i:a,n.p&2?"slot-fb":n.h);if(X&&n.h==="foreignObject"){X=false}{z(null,n,X)}if(o(H)&&u["s-si"]!==H){u.classList.add(u["s-si"]=H)}if(n.o){for(f=0;f<n.o.length;++f){c=_(e,n,f,u);if(c){u.appendChild(c)}}}{if(n.h==="svg"){X=false}else if(u.tagName==="foreignObject"){X=true}}}u["s-hn"]=q;{if(n.p&(2|1)){u["s-sr"]=true;u["s-cr"]=Q;u["s-sn"]=n.v||"";u["s-rf"]=(s=n.i)==null?void 0:s.ref;v=e&&e.o&&e.o[l];if(v&&v.h===n.h&&e.m){{G(e.m,false)}}}}return u};var G=(e,l)=>{Ve.p|=1;const r=Array.from(e.childNodes);if(e["s-sr"]&&t.experimentalSlotFixes){let t=e;while(t=t.nextSibling){if(t&&t["s-sn"]===e["s-sn"]&&t["s-sh"]===q){r.push(t)}}}for(let e=r.length-1;e>=0;e--){const t=r[e];if(t["s-hn"]!==q&&t["s-ol"]){le(t).insertBefore(t,te(t));t["s-ol"].remove();t["s-ol"]=void 0;t["s-sh"]=void 0;V=true}if(l){G(t,l)}}Ve.p&=~1};var J=(e,t,l,r,s,n)=>{let i=e["s-cr"]&&e["s-cr"].parentNode||e;let a;if(i.shadowRoot&&i.tagName===q){i=i.shadowRoot}for(;s<=n;++s){if(r[s]){a=_(null,l,s,e);if(a){r[s].m=a;i.insertBefore(a,te(t))}}}};var Y=(e,t,l)=>{for(let r=t;r<=l;++r){const t=e[r];if(t){const e=t.m;oe(t);if(e){{K=true;if(e["s-ol"]){e["s-ol"].remove()}else{G(e,true)}}e.remove()}}}};var Z=(e,t,l,r,s=false)=>{let n=0;let i=0;let a=0;let o=0;let f=t.length-1;let u=t[0];let c=t[f];let v=r.length-1;let d=r[0];let p=r[v];let h;let m;while(n<=f&&i<=v){if(u==null){u=t[++n]}else if(c==null){c=t[--f]}else if(d==null){d=r[++i]}else if(p==null){p=r[--v]}else if(ee(u,d,s)){re(u,d,s);u=t[++n];d=r[++i]}else if(ee(c,p,s)){re(c,p,s);c=t[--f];p=r[--v]}else if(ee(u,p,s)){if(u.h==="slot"||p.h==="slot"){G(u.m.parentNode,false)}re(u,p,s);e.insertBefore(u.m,c.m.nextSibling);u=t[++n];p=r[--v]}else if(ee(c,d,s)){if(u.h==="slot"||p.h==="slot"){G(c.m.parentNode,false)}re(c,d,s);e.insertBefore(c.m,u.m);c=t[--f];d=r[++i]}else{a=-1;{for(o=n;o<=f;++o){if(t[o]&&t[o].u!==null&&t[o].u===d.u){a=o;break}}}if(a>=0){m=t[a];if(m.h!==d.h){h=_(t&&t[i],l,a,e)}else{re(m,d,s);t[a]=void 0;h=m.m}d=r[++i]}else{h=_(t&&t[i],l,i,e);d=r[++i]}if(h){{le(u.m).insertBefore(h,te(u.m))}}}}if(n>f){J(e,r[v+1]==null?null:r[v+1].m,l,r,i,v)}else if(i>v){Y(t,n,f)}};var ee=(e,t,l=false)=>{if(e.h===t.h){if(e.h==="slot"){return e.v===t.v}if(!l){return e.u===t.u}return true}return false};var te=e=>e&&e["s-ol"]||e;var le=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;var re=(e,t,l=false)=>{const r=t.m=e.m;const s=e.o;const n=t.o;const i=t.h;const a=t.l;let o;if(a===null){{X=i==="svg"?true:i==="foreignObject"?false:X}{if(i==="slot"&&!I);else{z(e,t,X)}}if(s!==null&&n!==null){Z(r,s,t,n,l)}else if(n!==null){if(e.l!==null){r.textContent=""}J(r,null,t,n,0,n.length-1)}else if(s!==null){Y(s,0,s.length-1)}if(X&&i==="svg"){X=false}}else if(o=r["s-cr"]){o.parentNode.textContent=a}else if(e.l!==a){r.data=a}};var se=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const l=e["s-sn"];e.hidden=false;for(const r of t){if(r!==e){if(r["s-hn"]!==e["s-hn"]||l!==""){if(r.nodeType===1&&(l===r.getAttribute("slot")||l===r["s-sn"])||r.nodeType===3&&l===r["s-sn"]){e.hidden=true;break}}else{if(r.nodeType===1||r.nodeType===3&&r.textContent.trim()!==""){e.hidden=true;break}}}}}se(e)}}};var ne=[];var ie=e=>{let l;let r;let s;for(const n of e.childNodes){if(n["s-sr"]&&(l=n["s-cr"])&&l.parentNode){r=l.parentNode.childNodes;const e=n["s-sn"];for(s=r.length-1;s>=0;s--){l=r[s];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==n["s-hn"]&&!t.experimentalSlotFixes){if(ae(l,e)){let t=ne.find((e=>e.O===l));K=true;l["s-sn"]=l["s-sn"]||e;if(t){t.O["s-sh"]=n["s-hn"];t.C=n}else{l["s-sh"]=n["s-hn"];ne.push({C:n,O:l})}if(l["s-sr"]){ne.map((e=>{if(ae(e.O,l["s-sn"])){t=ne.find((e=>e.O===l));if(t&&!e.C){e.C=t.C}}}))}}else if(!ne.some((e=>e.O===l))){ne.push({O:l})}}}}if(n.nodeType===1){ie(n)}}};var ae=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var oe=e=>{{e.i&&e.i.ref&&e.i.ref(null);e.o&&e.o.map(oe)}};var fe=(e,t,l=false)=>{var r,s,n,i;const a=e.$hostElement$;const o=e.S;const f=e.j||k(null,null);const u=C(t)?t:S(null,null,t);q=a.tagName;if(o.L){u.i=u.i||{};o.L.map((([e,t])=>u.i[t]=a[e]))}if(l&&u.i){for(const e of Object.keys(u.i)){if(a.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){u.i[e]=a[e]}}}u.h=null;u.p|=4;e.j=u;u.m=f.m=a.shadowRoot||a;{H=a["s-sc"]}I=(o.p&1)!==0;{Q=a["s-cr"];K=false}re(f,u,l);{Ve.p|=1;if(V){ie(u.m);for(const e of ne){const t=e.O;if(!t["s-ol"]){const e=Ke.createTextNode("");e["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of ne){const t=e.O;const a=e.C;if(a){const e=a.parentNode;let l=a.nextSibling;{let n=(r=t["s-ol"])==null?void 0:r.previousSibling;while(n){let r=(s=n["s-nr"])!=null?s:null;if(r&&r["s-sn"]===t["s-sn"]&&e===r.parentNode){r=r.nextSibling;while(r===t||(r==null?void 0:r["s-sr"])){r=r==null?void 0:r.nextSibling}if(!r||!r["s-nr"]){l=r;break}}n=n.previousSibling}}if(!l&&e!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}e.insertBefore(t,l);if(t.nodeType===1){t.hidden=(n=t["s-ih"])!=null?n:false}}}t&&typeof a["s-rf"]==="function"&&a["s-rf"](t)}else{if(t.nodeType===1){if(l){t["s-ih"]=(i=t.hidden)!=null?i:false}t.hidden=true}}}}if(K){se(u.m)}Ve.p&=~1;ne.length=0}Q=void 0};var ue=(e,t)=>{if(t&&!e.T&&t["s-p"]){t["s-p"].push(new Promise((t=>e.T=t)))}};var ce=(e,t)=>{{e.p|=16}if(e.p&4){e.p|=512;return}ue(e,e.R);const l=()=>ve(e,t);return st(l)};var ve=(e,t)=>{const l=y("scheduleUpdate",e.S.k);const r=e.D;let s;if(t){{e.p|=256;if(e.F){e.F.map((([e,t])=>we(r,e,t)));e.F=void 0}}{s=we(r,"componentWillLoad")}}l();return de(s,(()=>he(e,r,t)))};var de=(e,t)=>pe(e)?e.then(t):t();var pe=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var he=async(e,t,l)=>{var r;const s=e.$hostElement$;const n=y("update",e.S.k);const i=s["s-rc"];if(l){M(e)}const a=y("render",e.S.k);{me(e,t,s,l)}if(i){i.map((e=>e()));s["s-rc"]=void 0}a();n();{const t=(r=s["s-p"])!=null?r:[];const l=()=>ye(e);if(t.length===0){l()}else{Promise.all(t).then(l);e.p|=4;t.length=0}}};var me=(e,t,l,r)=>{try{t=t.render();{e.p&=~16}{e.p|=2}{{{fe(e,t,r)}}}}catch(t){Be(t,e.$hostElement$)}return null};var ye=e=>{const t=e.S.k;const l=e.$hostElement$;const r=y("postUpdate",t);const s=e.D;const n=e.R;if(!(e.p&64)){e.p|=64;{ge(l)}{we(s,"componentDidLoad")}r();{e.M(l);if(!n){be()}}}else{r()}{e.A(l)}{if(e.T){e.T();e.T=void 0}if(e.p&512){rt((()=>ce(e,false)))}e.p&=~(4|512)}};var be=t=>{{ge(Ke.documentElement)}rt((()=>T(Ie,"appload",{detail:{namespace:e}})))};var we=(e,t,l)=>{if(e&&e[t]){try{return e[t](l)}catch(e){Be(e)}}return void 0};var ge=e=>e.classList.add("hydrated");var $e=(e,t)=>Ne(e).P.get(t);var Se=(e,t,l,r)=>{const s=Ne(e);const n=s.$hostElement$;const i=s.P.get(t);const a=s.p;const o=s.D;l=j(l,r.N[t][0]);const f=Number.isNaN(i)&&Number.isNaN(l);const u=l!==i&&!f;if((!(a&8)||i===void 0)&&u){s.P.set(t,l);if(o){if(r.U&&a&128){const e=r.U[t];if(e){e.map((e=>{try{o[e](l,i,t)}catch(e){Be(e,n)}}))}}if((a&(2|16))===2){ce(s,false)}}}};var ke=(e,t,l)=>{var r;const s=e.prototype;if(t.N){if(e.watchers){t.U=e.watchers}const n=Object.entries(t.N);n.map((([e,[r]])=>{if(r&31||l&2&&r&32){Object.defineProperty(s,e,{get(){return $e(this,e)},set(l){Se(this,e,l,t)},configurable:true,enumerable:true})}else if(l&1&&r&64){Object.defineProperty(s,e,{value(...t){var l;const r=Ne(this);return(l=r==null?void 0:r.W)==null?void 0:l.then((()=>{var l;return(l=r.D)==null?void 0:l[e](...t)}))}})}}));if(l&1){const l=new Map;s.attributeChangedCallback=function(e,r,n){Ve.jmp((()=>{var i;const a=l.get(e);if(this.hasOwnProperty(a)){n=this[a];delete this[a]}else if(s.hasOwnProperty(a)&&typeof this[a]==="number"&&this[a]==n){return}else if(a==null){const l=Ne(this);const s=l==null?void 0:l.p;if(s&&!(s&8)&&s&128&&n!==r){const s=l.D;const a=(i=t.U)==null?void 0:i[e];a==null?void 0:a.forEach((t=>{if(s[t]!=null){s[t].call(s,n,r,e)}}))}return}this[a]=n===null&&typeof this[a]==="boolean"?false:n}))};e.observedAttributes=Array.from(new Set([...Object.keys((r=t.U)!=null?r:{}),...n.filter((([e,t])=>t[0]&15)).map((([e,r])=>{var s;const n=r[1]||e;l.set(n,e);if(r[0]&512){(s=t.L)==null?void 0:s.push([e,n])}return n}))]))}}return e};var Oe=async(e,t,l,r)=>{let s;if((t.p&32)===0){t.p|=32;const r=l.B;if(r){s=Qe(l);if(s.then){const e=b();s=await s;e()}if(!s.isProxied){{l.U=s.watchers}ke(s,l,2);s.isProxied=true}const e=y("createInstance",l.k);{t.p|=8}try{new s(t)}catch(e){Be(e)}{t.p&=~8}{t.p|=128}e()}else{s=e.constructor;customElements.whenDefined(l.k).then((()=>t.p|=128))}if(s.style){let e=s.style;const t=A(l);if(!qe.has(t)){const r=y("registerStyles",l.k);D(t,e,!!(l.p&1));r()}}}const n=t.R;const i=()=>ce(t,true);if(n&&n["s-rc"]){n["s-rc"].push(i)}else{i()}};var Ce=e=>{};var je=e=>{if((Ve.p&1)===0){const t=Ne(e);const l=t.S;const r=y("connectedCallback",l.k);if(!(t.p&1)){t.p|=1;{if(l.p&(4|8)){xe(e)}}{let l=e;while(l=l.parentNode||l.host){if(l["s-p"]){ue(t,t.R=l);break}}}if(l.N){Object.entries(l.N).map((([t,[l]])=>{if(l&31&&e.hasOwnProperty(t)){const l=e[t];delete e[t];e[t]=l}}))}{Oe(e,t,l)}}else{De(e,t,l.H);if(t==null?void 0:t.D);else if(t==null?void 0:t.q){t.q.then((()=>Ce()))}}r()}};var xe=e=>{const t=e["s-cr"]=Ke.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Le=e=>{{we(e,"disconnectedCallback")}};var Te=async e=>{if((Ve.p&1)===0){const t=Ne(e);{if(t.I){t.I.map((e=>e()));t.I=void 0}}if(t==null?void 0:t.D){Le(t.D)}else if(t==null?void 0:t.q){t.q.then((()=>Le(t.D)))}}};var Re=(e,t={})=>{var l;const r=y();const s=[];const n=t.exclude||[];const i=Ie.customElements;const a=Ke.head;const o=a.querySelector("meta[charset]");const f=Ke.createElement("style");const c=[];let v;let d=true;Object.assign(Ve,t);Ve.t=new URL(t.resourcesUrl||"./",Ke.baseURI).href;let p=false;e.map((e=>{e[1].map((t=>{var l;const r={p:t[0],k:t[1],N:t[2],H:t[3]};if(r.p&4){p=true}{r.N=t[2]}{r.H=t[3]}{r.L=[]}{r.U=(l=t[4])!=null?l:{}}const a=r.k;const o=class extends HTMLElement{constructor(e){super(e);e=this;We(e,r);if(r.p&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(v){clearTimeout(v);v=null}if(d){c.push(this)}else{Ve.jmp((()=>je(this)))}}disconnectedCallback(){Ve.jmp((()=>Te(this)))}componentOnReady(){return Ne(this).q}};r.B=e[0];if(!n.includes(a)&&!i.get(a)){s.push(a);i.define(a,ke(o,r,1))}}))}));if(s.length>0){if(p){f.textContent+=g}{f.textContent+=s+w}if(f.innerHTML.length){f.setAttribute("data-styles","");const e=(l=Ve.$)!=null?l:u(Ke);if(e!=null){f.setAttribute("nonce",e)}a.insertBefore(f,o?o.nextSibling:a.firstChild)}}d=false;if(c.length){c.map((e=>e.connectedCallback()))}else{{Ve.jmp((()=>v=setTimeout(be,30)))}}r()};var De=(e,t,l,r)=>{if(l){l.map((([l,r,s])=>{const n=Me(e,l);const i=Fe(t,s);const a=Ae(l);Ve.ael(n,r,i,a);(t.I=t.I||[]).push((()=>Ve.rel(n,r,i,a)))}))}};var Fe=(e,t)=>l=>{try{{if(e.p&256){e.D[t](l)}else{(e.F=e.F||[]).push([t,l])}}}catch(e){Be(e)}};var Me=(e,t)=>{if(t&8)return Ie;if(t&16)return Ke.body;return e};var Ae=e=>Xe?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;var Pe=e=>Ve.$=e;var Ee=new WeakMap;var Ne=e=>Ee.get(e);var Ue=(e,t)=>Ee.set(t.D=e,t);var We=(e,t)=>{const l={p:0,$hostElement$:e,S:t,P:new Map};{l.W=new Promise((e=>l.A=e))}{l.q=new Promise((e=>l.M=e));e["s-p"]=[];e["s-rc"]=[]}De(e,l,t.H);return Ee.set(e,l)};var ze=(e,t)=>t in e;var Be=(e,t)=>(0,console.error)(e,t);var He=new Map;var Qe=(e,t,l)=>{const r=e.k.replace(/-/g,"_");const s=e.B;const n=He.get(s);if(n){return n[r]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${s}.entry.js${""}`).then((e=>{{He.set(s,e)}return e[r]}),Be)};var qe=new Map;var Ie=typeof window!=="undefined"?window:{};var Ke=Ie.document||{head:{}};var Ve={p:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,r)=>e.addEventListener(t,l,r),rel:(e,t,l,r)=>e.removeEventListener(t,l,r),ce:(e,t)=>new CustomEvent(e,t)};var Xe=(()=>{let e=false;try{Ke.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=true}}))}catch(e){}return e})();var _e=e=>Promise.resolve(e);var Ge=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var Je=false;var Ye=[];var Ze=[];var et=(e,t)=>l=>{e.push(l);if(!Je){Je=true;if(t&&Ve.p&4){rt(lt)}else{Ve.raf(lt)}}};var tt=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Be(e)}}e.length=0};var lt=()=>{tt(Ye);{tt(Ze);if(Je=Ye.length>0){Ve.raf(lt)}}};var rt=e=>_e().then(e);var st=et(Ze,true);export{O as H,x as a,Re as b,L as c,s as g,S as h,_e as p,Ue as r,Pe as s};
//# sourceMappingURL=p-5c36ed66.js.map