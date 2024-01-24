(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{928:function(e,t,n){Promise.resolve().then(n.t.bind(n,5964,23)),Promise.resolve().then(n.bind(n,4689)),Promise.resolve().then(n.t.bind(n,1524,23))},4689:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Header}});var s=n(7437),l=n(2265),i=n(1396),a=n.n(i),o=n(6765),u=n(7856);function MobileMenu(){let[e,t]=(0,l.useState)(!1),n=(0,l.useRef)(null),i=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let clickHandler=s=>{let{target:l}=s;i.current&&n.current&&(!e||i.current.contains(l)||n.current.contains(l)||t(!1))};return document.addEventListener("click",clickHandler),()=>document.removeEventListener("click",clickHandler)}),(0,l.useEffect)(()=>{let keyHandler=n=>{let{keyCode:s}=n;e&&27===s&&t(!1)};return document.addEventListener("keydown",keyHandler),()=>document.removeEventListener("keydown",keyHandler)}),(0,s.jsxs)("div",{className:"flex md:hidden",children:[(0,s.jsxs)("button",{ref:n,className:"hamburger ".concat(e&&"active"),"aria-controls":"mobile-nav","aria-expanded":e,onClick:()=>t(!e),children:[(0,s.jsx)("span",{className:"sr-only",children:"Menu"}),(0,s.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-900",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{y:"4",width:"24",height:"2"}),(0,s.jsx)("rect",{y:"11",width:"24",height:"2"}),(0,s.jsx)("rect",{y:"18",width:"24",height:"2"})]})]}),(0,s.jsx)("div",{ref:i,children:(0,s.jsx)(u.u,{show:e,as:"nav",id:"mobile-nav",className:"absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsxs)("ul",{className:"px-5 py-2",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/projects",className:"flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",onClick:()=>t(!1),children:"Projects"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/blog",className:"flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",onClick:()=>t(!1),children:"Blog"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/contact",className:"flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",onClick:()=>t(!1),children:"Contact"})})]})})})]})}function Header(){let[e,t]=(0,l.useState)(!0),scrollHandler=()=>{window.pageYOffset>10?t(!1):t(!0)};return(0,l.useEffect)(()=>(scrollHandler(),window.addEventListener("scroll",scrollHandler),()=>window.removeEventListener("scroll",scrollHandler)),[e]),(0,s.jsx)("header",{className:"fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ".concat(e?"":"bg-white backdrop-blur-sm shadow-lg"),children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:(0,s.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[(0,s.jsx)("div",{className:"shrink-0 mr-4",children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("nav",{className:"hidden md:flex md:grow",children:(0,s.jsxs)("ul",{className:"flex grow justify-end flex-wrap items-center",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/projects",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"Projects"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/blog",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"Blog"})}),(0,s.jsx)("li",{children:(0,s.jsxs)(a(),{href:"/contact",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:[(0,s.jsx)("span",{children:"Contact"}),(0,s.jsx)("svg",{className:"w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"})]})})]})}),(0,s.jsx)(MobileMenu,{})]})})})}},6765:function(e,t,n){"use strict";n.d(t,{Z:function(){return Logo}});var s=n(7437),l=n(1396),i=n.n(l);function Logo(){return(0,s.jsx)(i(),{href:"/",className:"block","aria-label":"Cruip",children:(0,s.jsxs)("svg",{className:"w-8 h-8",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"footer-logo",children:[(0,s.jsx)("stop",{stopColor:"#4FD1C5",offset:"0%"}),(0,s.jsx)("stop",{stopColor:"#81E6D9",offset:"25.871%"}),(0,s.jsx)("stop",{stopColor:"#338CF5",offset:"100%"})]})}),(0,s.jsx)("rect",{width:"32",height:"32",rx:"16",fill:"url(#footer-logo)",fillRule:"nonzero"})]})})}},5964:function(){},1524:function(e){e.exports={style:{fontFamily:"'__Inter_aa4d39', '__Inter_Fallback_aa4d39'",fontStyle:"normal"},className:"__className_aa4d39",variable:"__variable_aa4d39"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(2265),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var s,i={},c=null,h=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,s)&&!u.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:l,type:e,key:c,ref:h,props:i,_owner:o.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(8326)},7856:function(e,t,n){"use strict";n.d(t,{u:function(){return A}});var s,l,i,a,o=n(2265),u=n.t(o,2);function disposables_o(){let e=[],t={addEventListener:(e,n,s,l)=>(e.addEventListener(n,s,l),t.add(()=>e.removeEventListener(n,s,l))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let s={current:!0};return n=()=>{s.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{s.current=!1})},style(e,t,n){let s=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:s})})},group(e){let t=disposables_o();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function use_disposables_p(){let[e]=(0,o.useState)(disposables_o);return(0,o.useEffect)(()=>()=>e.dispose(),[e]),e}var c=Object.defineProperty,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,r=(e,t,n)=>(d(e,"symbol"!=typeof t?t+"":t,n),n);let h=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},use_iso_morphic_effect_l=(e,t)=>{h.isServer?(0,o.useEffect)(e,t):(0,o.useLayoutEffect)(e,t)};function use_latest_value_s(e){let t=(0,o.useRef)(e);return use_iso_morphic_effect_l(()=>{t.current=e},[e]),t}let use_event_o=function(e){let t=use_latest_value_s(e);return o.useCallback((...e)=>t.current(...e),[t])};function f(){let e=(0,o.useRef)(!1);return use_iso_morphic_effect_l(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function use_server_handoff_complete_l(){let e;let t=(e="undefined"==typeof document,(0,u.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,s]=o.useState(h.isHandoffComplete);return n&&!1===h.isHandoffComplete&&s(!1),o.useEffect(()=>{!0!==n&&s(!0)},[n]),o.useEffect(()=>h.handoff(),[]),!t&&n}let p=Symbol();function y(...e){let t=(0,o.useRef)(e);(0,o.useEffect)(()=>{t.current=e},[e]);let n=use_event_o(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[p]))?void 0:n}function match_u(e,t,...n){if(e in t){let s=t[e];return"function"==typeof s?s(...n):s}let s=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,match_u),s}function g(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}let _=(0,o.createContext)(null);_.displayName="OpenClosedContext";var b=((s=b||{})[s.Open=1]="Open",s[s.Closed=2]="Closed",s[s.Closing=4]="Closing",s[s.Opening=8]="Opening",s);function open_closed_u(){return(0,o.useContext)(_)}function open_closed_s({value:e,children:t}){return o.createElement(_.Provider,{value:e},t)}function class_names_t(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var w=((l=w||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),j=((i=j||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function C({ourProps:e,theirProps:t,slot:n,defaultTag:s,features:l,visible:i=!0,name:a,mergeRefs:o}){o=null!=o?o:k;let u=R(t,e);if(i)return m(u,n,s,a,o);let c=null!=l?l:0;if(2&c){let{static:e=!1,...t}=u;if(e)return m(t,n,s,a,o)}if(1&c){let{unmount:e=!0,...t}=u;return match_u(e?0:1,{0:()=>null,1:()=>m({...t,hidden:!0,style:{display:"none"}},n,s,a,o)})}return m(u,n,s,a,o)}function m(e,t={},n,s,l){let{as:i=n,children:a,refName:u="ref",...c}=F(e,["unmount","static"]),h=void 0!==e.ref?{[u]:e.ref}:{},p="function"==typeof a?a(t):a;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let _={};if(t){let e=!1,n=[];for(let[s,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(s);e&&(_["data-headlessui-state"]=n.join(" "))}if(i===o.Fragment&&Object.keys(x(c)).length>0){if(!(0,o.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${s} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=p.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>class_names_t(null==e?void 0:e.className(...t),c.className):class_names_t(null==e?void 0:e.className,c.className),n=t?{className:t}:{};return(0,o.cloneElement)(p,Object.assign({},R(p.props,x(F(c,["ref"]))),_,h,{ref:l(p.ref,h.ref)},n))}return(0,o.createElement)(i,Object.assign({},F(c,["ref"]),i!==o.Fragment&&h,i!==o.Fragment&&_),p)}function k(...e){return e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function R(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let s of e)for(let e in s)e.startsWith("on")&&"function"==typeof s[e]?(null!=n[e]||(n[e]=[]),n[e].push(s[e])):t[e]=s[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...s){for(let l of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;l(t,...s)}}});return t}function U(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function x(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function F(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}function transition_S(e=""){return e.split(/\s+/).filter(e=>e.length>1)}let E=(0,o.createContext)(null);E.displayName="TransitionContext";var N=((a=N||{}).Visible="visible",a.Hidden="hidden",a);let S=(0,o.createContext)(null);function transition_U(e){return"children"in e?transition_U(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function se(e,t){let n=use_latest_value_s(e),s=(0,o.useRef)([]),l=f(),i=use_disposables_p(),a=use_event_o((e,t=j.Hidden)=>{let a=s.current.findIndex(({el:t})=>t===e);-1!==a&&(match_u(t,{[j.Unmount](){s.current.splice(a,1)},[j.Hidden](){s.current[a].state="hidden"}}),i.microTask(()=>{var e;!transition_U(s)&&l.current&&(null==(e=n.current)||e.call(n))}))}),u=use_event_o(e=>{let t=s.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):s.current.push({el:e,state:"visible"}),()=>a(e,j.Unmount)}),c=(0,o.useRef)([]),h=(0,o.useRef)(Promise.resolve()),p=(0,o.useRef)({enter:[],leave:[],idle:[]}),_=use_event_o((e,n,s)=>{c.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{c.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(p.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?h.current=h.current.then(()=>null==t?void 0:t.wait.current).then(()=>s(n)):s(n)}),b=use_event_o((e,t,n)=>{Promise.all(p.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=c.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:s,register:u,unregister:a,onStart:_,onStop:b,wait:h,chains:p}),[u,a,s,_,b,p,h])}function Ne(){}S.displayName="NestingContext";let O=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(e){var t;let n={};for(let s of O)n[s]=null!=(t=e[s])?t:Ne;return n}let T=w.RenderStrategy,L=U(function(e,t){let{show:n,appear:s=!1,unmount:l=!0,...i}=e,a=(0,o.useRef)(null),u=y(a,t);use_server_handoff_complete_l();let c=open_closed_u();if(void 0===n&&null!==c&&(n=(c&b.Open)===b.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,p]=(0,o.useState)(n?"visible":"hidden"),_=se(()=>{p("hidden")}),[w,j]=(0,o.useState)(!0),N=(0,o.useRef)([n]);use_iso_morphic_effect_l(()=>{!1!==w&&N.current[N.current.length-1]!==n&&(N.current.push(n),j(!1))},[N,n]);let O=(0,o.useMemo)(()=>({show:n,appear:s,initial:w}),[n,s,w]);(0,o.useEffect)(()=>{if(n)p("visible");else if(transition_U(_)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&p("hidden")}else p("hidden")},[n,_]);let L={unmount:l},H=use_event_o(()=>{var t;w&&j(!1),null==(t=e.beforeEnter)||t.call(e)}),A=use_event_o(()=>{var t;w&&j(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(S.Provider,{value:_},o.createElement(E.Provider,{value:O},C({ourProps:{...L,as:o.Fragment,children:o.createElement(P,{ref:u,...L,...i,beforeEnter:H,beforeLeave:A})},theirProps:{},defaultTag:o.Fragment,features:T,visible:"visible"===h,name:"Transition"})))}),P=U(function(e,t){var n,s,l;let i;let{beforeEnter:a,afterEnter:u,beforeLeave:c,afterLeave:h,enter:p,enterFrom:_,enterTo:w,entered:N,leave:O,leaveFrom:L,leaveTo:P,...H}=e,A=(0,o.useRef)(null),M=y(A,t),I=null==(n=H.unmount)||n?j.Unmount:j.Hidden,{show:B,appear:D,initial:$}=function(){let e=(0,o.useContext)(E);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[z,V]=(0,o.useState)(B?"visible":"hidden"),Y=function(){let e=(0,o.useContext)(S);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:W,unregister:Z}=Y;(0,o.useEffect)(()=>W(A),[W,A]),(0,o.useEffect)(()=>{if(I===j.Hidden&&A.current){if(B&&"visible"!==z){V("visible");return}return match_u(z,{hidden:()=>Z(A),visible:()=>W(A)})}},[z,A,W,Z,B,I]);let G=use_latest_value_s({base:transition_S(H.className),enter:transition_S(p),enterFrom:transition_S(_),enterTo:transition_S(w),entered:transition_S(N),leave:transition_S(O),leaveFrom:transition_S(L),leaveTo:transition_S(P)}),J=(l={beforeEnter:a,afterEnter:u,beforeLeave:c,afterLeave:h},i=(0,o.useRef)(ae(l)),(0,o.useEffect)(()=>{i.current=ae(l)},[l]),i),K=use_server_handoff_complete_l();(0,o.useEffect)(()=>{if(K&&"visible"===z&&null===A.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[A,z,K]);let Q=D&&B&&$,X=K&&(!$||D)?B?"enter":"leave":"idle",ee=function(e=0){let[t,n]=(0,o.useState)(e),s=f(),l=(0,o.useCallback)(e=>{s.current&&n(t=>t|e)},[t,s]),i=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:l,hasFlag:i,removeFlag:(0,o.useCallback)(e=>{s.current&&n(t=>t&~e)},[n,s]),toggleFlag:(0,o.useCallback)(e=>{s.current&&n(t=>t^e)},[n])}}(0),et=use_event_o(e=>match_u(e,{enter:()=>{ee.addFlag(b.Opening),J.current.beforeEnter()},leave:()=>{ee.addFlag(b.Closing),J.current.beforeLeave()},idle:()=>{}})),en=use_event_o(e=>match_u(e,{enter:()=>{ee.removeFlag(b.Opening),J.current.afterEnter()},leave:()=>{ee.removeFlag(b.Closing),J.current.afterLeave()},idle:()=>{}})),er=se(()=>{V("hidden"),Z(A)},Y),es=(0,o.useRef)(!1);!function({immediate:e,container:t,direction:n,classes:s,onStart:l,onStop:i}){let a=f(),o=use_disposables_p(),u=use_latest_value_s(n);use_iso_morphic_effect_l(()=>{e&&(u.current="enter")},[e]),use_iso_morphic_effect_l(()=>{let e=disposables_o();o.add(e.dispose);let n=t.current;if(n&&"idle"!==u.current&&a.current){var c,h,p;let t,a,o,_,b,w,j;return e.dispose(),l.current(u.current),e.add((c=s.current,h="enter"===u.current,p=()=>{e.dispose(),i.current(u.current)},a=h?"enter":"leave",o=disposables_o(),_=void 0!==p?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,p(...e)}):()=>{},"enter"===a&&(n.removeAttribute("hidden"),n.style.display=""),b=match_u(a,{enter:()=>c.enter,leave:()=>c.leave}),w=match_u(a,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),j=match_u(a,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),v(n,...c.base,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),g(n,...c.base,...b,...j),o.nextFrame(()=>{v(n,...c.base,...b,...j),g(n,...c.base,...b,...w),function(e,t){let n=disposables_o();if(!e)return n.dispose;let{transitionDuration:s,transitionDelay:l}=getComputedStyle(e),[i,a]=[s,l].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),o=i+a;if(0!==o){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},o),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let s=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),s())})}else t();n.add(()=>t()),n.dispose}(n,()=>(v(n,...c.base,...b),g(n,...c.base,...c.entered),_()))}),o.dispose)),e.dispose}},[n])}({immediate:Q,container:A,classes:G,direction:X,onStart:use_latest_value_s(e=>{es.current=!0,er.onStart(A,e,et)}),onStop:use_latest_value_s(e=>{es.current=!1,er.onStop(A,e,en),"leave"!==e||transition_U(er)||(V("hidden"),Z(A))})});let el=H;return Q?el={...el,className:class_names_t(H.className,...G.current.enter,...G.current.enterFrom)}:es.current&&(el.className=class_names_t(H.className,null==(s=A.current)?void 0:s.className),""===el.className&&delete el.className),o.createElement(S.Provider,{value:er},o.createElement(open_closed_s,{value:match_u(z,{visible:b.Open,hidden:b.Closed})|ee.flags},C({ourProps:{ref:M},theirProps:el,defaultTag:"div",features:T,visible:"visible"===z,name:"Transition.Child"})))}),H=U(function(e,t){let n=null!==(0,o.useContext)(E),s=null!==open_closed_u();return o.createElement(o.Fragment,null,!n&&s?o.createElement(L,{ref:t,...e}):o.createElement(P,{ref:t,...e}))}),A=Object.assign(L,{Child:H,Root:L})}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=928)}),_N_E=e.O()}]);