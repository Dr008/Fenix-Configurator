import{ab as I,r as P,a as pe,a2 as we,h,ac as qe,c as f,X as Y,C as Ce,w as N,m as Pe,A as G,g as Z,i as W,K as p,L as xe,N as ke}from"./index.2a648a84.js";import{c as Ee,d as $e,e as Fe,f as Se,g as _e,h as Be}from"./use-dark.59f5d832.js";import{u as Te}from"./use-tick.9431959d.js";import{p as F,c as ee,j as te,o as De}from"./use-router-link.7063a062.js";let v=[],x=[];function ne(e){x=x.filter(n=>n!==e)}function He(e){ne(e),x.push(e)}function V(e){ne(e),x.length===0&&v.length>0&&(v[v.length-1](),v=[])}function Qe(e){x.length===0?e():v.push(e)}function tt(e){v=v.filter(n=>n!==e)}let Me=1,ze=document.body;function Le(e,n){const o=document.createElement("div");if(o.id=n!==void 0?`q-portal--${n}--${Me++}`:e,I.globalNodes!==void 0){const i=I.globalNodes.class;i!==void 0&&(o.className=i)}return ze.appendChild(o),o}function Ke(e){e.remove()}const S=[];function nt(e){return S.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function Oe(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return F(e)}else if(e.__qPortal===!0){const o=F(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(n),o):e}e=F(e)}while(e!=null)}function ot(e,n,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Oe(e,n);continue}e.hide(n)}e=F(e)}}function Ae(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Re(e,n,o,i){const u=P(!1),r=P(!1);let l=null;const s={},c=i==="dialog"&&Ae(e);function d(g){if(g===!0){V(s),r.value=!0;return}r.value=!1,u.value===!1&&(c===!1&&l===null&&(l=Le(!1,i)),u.value=!0,S.push(e.proxy),He(s))}function m(g){if(r.value=!1,g!==!0)return;V(s),u.value=!1;const q=S.indexOf(e.proxy);q!==-1&&S.splice(q,1),l!==null&&(Ke(l),l=null)}return pe(()=>{m(!0)}),e.proxy.__qPortal=!0,we(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:m,portalIsActive:u,portalIsAccessible:r,renderPortal:()=>c===!0?o():u.value===!0?[h(qe,{to:l},o())]:void 0}}const je={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ie(e,n=()=>{},o=()=>{}){return{transitionProps:f(()=>{const i=`q-transition--${e.transitionShow||n()}`,u=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${u}-leave-from`,leaveActiveClass:`${u}-leave-active`,leaveToClass:`${u}-leave-to`}}),transitionStyle:f(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const y=[];let w;function Ne(e){w=e.keyCode===27}function Ge(){w===!0&&(w=!1)}function We(e){w===!0&&(w=!1,Ce(e,27)===!0&&y[y.length-1](e))}function oe(e){window[e]("keydown",Ne),window[e]("blur",Ge),window[e]("keyup",We),w=!1}function Ve(e){Y.is.desktop===!0&&(y.push(e),y.length===1&&oe("addEventListener"))}function U(e){const n=y.indexOf(e);n>-1&&(y.splice(n,1),y.length===0&&oe("removeEventListener"))}const b=[];function ie(e){b[b.length-1](e)}function Ue(e){Y.is.desktop===!0&&(b.push(e),b.length===1&&document.body.addEventListener("focusin",ie))}function X(e){const n=b.indexOf(e);n>-1&&(b.splice(n,1),b.length===0&&document.body.removeEventListener("focusin",ie))}let $=0;const Xe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},J={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var it=ee({name:"QDialog",inheritAttrs:!1,props:{...Ee,...je,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...$e,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:i}){const u=Z(),r=P(null),l=P(!1),s=P(!1);let c=null,d=null,m,g;const q=f(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:M}=Be(),{registerTimeout:z}=Fe(),{registerTick:ae,removeTick:L}=Te(),{transitionProps:le,transitionStyle:K}=Ie(e,()=>J[e.position][0],()=>J[e.position][1]),{showPortal:O,hidePortal:A,portalIsAccessible:se,renderPortal:ue}=Re(u,r,be,"dialog"),{hide:k}=Se({showing:l,hideOnRouteChange:q,handleShow:ge,handleHide:he,processOnMount:!0}),{addToHistory:re,removeFromHistory:ce}=_e(l,k,q),de=f(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Xe[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),E=f(()=>l.value===!0&&e.seamless!==!0),fe=f(()=>e.autoClose===!0?{onClick:ve}:{}),me=f(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,i.class]);N(()=>e.maximized,t=>{l.value===!0&&T(t)}),N(E,t=>{M(t),t===!0?(Ue(D),Ve(B)):(X(D),U(B))});function ge(t){re(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,T(e.maximized),O(),s.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),ae(C)):L(),z(()=>{if(u.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:a,bottom:H}=document.activeElement.getBoundingClientRect(),{innerHeight:j}=window,Q=window.visualViewport!==void 0?window.visualViewport.height:j;a>0&&H>Q/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Q,H>=j?1/0:Math.ceil(document.scrollingElement.scrollTop+H-Q/2))),document.activeElement.scrollIntoView()}g=!0,r.value.click(),g=!1}O(!0),s.value=!1,o("show",t)},e.transitionDuration)}function he(t){L(),ce(),R(!0),s.value=!0,A(),d!==null&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),z(()=>{A(!0),s.value=!1,o("hide",t)},e.transitionDuration)}function C(t){Qe(()=>{let a=r.value;a===null||a.contains(document.activeElement)===!0||(a=(t!==""?a.querySelector(t):null)||a.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.querySelector("[autofocus], [data-autofocus]")||a,a.focus({preventScroll:!0}))})}function _(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):C(),o("shake");const a=r.value;a!==null&&(a.classList.remove("q-animate--scale"),a.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,r.value!==null&&(a.classList.remove("q-animate--scale"),C())},170))}function B(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&_():(o("escapeKey"),k()))}function R(t){c!==null&&(clearTimeout(c),c=null),(t===!0||l.value===!0)&&(T(!1),e.seamless!==!0&&(M(!1),X(D),U(B))),t!==!0&&(d=null)}function T(t){t===!0?m!==!0&&($<1&&document.body.classList.add("q-body--dialog"),$++,m=!0):m===!0&&($<2&&document.body.classList.remove("q-body--dialog"),$--,m=!1)}function ve(t){g!==!0&&(k(t),o("click",t))}function ye(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?k(t):e.noShake!==!0&&_()}function D(t){e.allowFocusOutside!==!0&&se.value===!0&&De(r.value,t.target)!==!0&&C('[tabindex]:not([tabindex="-1"])')}Object.assign(u.proxy,{focus:C,shake:_,__updateRefocusTarget(t){d=t||null}}),Pe(R);function be(){return h("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...i,class:me.value},[h(G,{name:"q-transition--fade",appear:!0},()=>E.value===!0?h("div",{class:"q-dialog__backdrop fixed-full",style:K.value,"aria-hidden":"true",tabindex:-1,onClick:ye}):null),h(G,le.value,()=>l.value===!0?h("div",{ref:r,class:de.value,style:K.value,tabindex:-1,...fe.value},te(n.default)):null)])}return ue}}),at=ee({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:o}}=Z(),i=W(xe,p);if(i===p)return console.error("QPage needs to be a deep child of QLayout"),p;if(W(ke,p)===p)return console.error("QPage needs to be child of QPageContainer"),p;const r=f(()=>{const s=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const c=i.isContainer.value===!0?i.containerHeight.value:o.screen.height;return e.styleFn(s,c)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-s+"px":o.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":o.screen.height-s+"px"}}),l=f(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:l.value,style:r.value},te(n.default))}});export{at as Q,Qe as a,Ie as b,Re as c,Ue as d,X as e,U as f,Ve as g,Oe as h,it as i,nt as j,ot as k,S as p,tt as r,je as u};
