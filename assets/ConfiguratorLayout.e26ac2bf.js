import{Q as A}from"./QBtn.3898c0b1.js";import{Q as V,a as de,b as he,c as fe,d as me,e as R,f as be}from"./QLayout.da2e3e42.js";import{Q as ze,a as ge}from"./QToolbar.f2bb947c.js";import{c as Y,h as Se,Q as ye,R as _e}from"./use-router-link.7063a062.js";import{Q as pe,a as j,b as we}from"./QItem.297481cc.js";import{u as G,a as J,s as Q,b as L}from"./use-dark.59f5d832.js";import{c as i,h,g as K,r as s,j as qe,w as Qe,k as Ce,l as De,m as Te,n as M,_ as Me,p as C,q as F,s as c,t as Oe,d as n,u as I,v as Pe,x as ke,F as xe,y as $e,z as Be}from"./index.2a648a84.js";import{Q as He}from"./QList.08c380e0.js";import{b as w,T as N}from"./format.16a51d90.js";const Ae={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},D={xs:2,sm:4,md:8,lg:16,xl:24};var Ve=Y({name:"QSeparator",props:{...G,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(l){const v=K(),S=J(l,v.proxy.$q),u=i(()=>l.vertical===!0?"vertical":"horizontal"),f=i(()=>` q-separator--${u.value}`),m=i(()=>l.inset!==!1?`${f.value}-${Ae[l.inset]}`:""),r=i(()=>`q-separator${f.value}${m.value}`+(l.color!==void 0?` bg-${l.color}`:"")+(S.value===!0?" q-separator--dark":"")),e=i(()=>{const d={};if(l.size!==void 0&&(d[l.vertical===!0?"width":"height"]=l.size),l.spaced!==!1){const q=l.spaced===!0?`${D.md}px`:l.spaced in D?`${D[l.spaced]}px`:l.spaced,b=l.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${b[0]}`]=d[`margin${b[1]}`]=q}return d});return()=>h("hr",{class:r.value,style:e.value,"aria-orientation":u.value})}});const E=["vertical","horizontal"],T={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},U={prevent:!0,mouse:!0,mouseAllDir:!0},X=l=>l>=250?50:Math.ceil(l/5);var Re=Y({name:"QScrollArea",props:{...G,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:v,emit:S}){const u=s(!1),f=s(!1),m=s(!1),r={vertical:s(0),horizontal:s(0)},e={vertical:{ref:s(null),position:s(0),size:s(0)},horizontal:{ref:s(null),position:s(0),size:s(0)}},{proxy:d}=K(),q=J(l,d.$q);let b=null,O;const z=s(null),W=i(()=>"q-scrollarea"+(q.value===!0?" q-scrollarea--dark":""));e.vertical.percentage=i(()=>{const t=e.vertical.size.value-r.vertical.value;if(t<=0)return 0;const a=w(e.vertical.position.value/t,0,1);return Math.round(a*1e4)/1e4}),e.vertical.thumbHidden=i(()=>(l.visible===null?m.value:l.visible)!==!0&&u.value===!1&&f.value===!1||e.vertical.size.value<=r.vertical.value+1),e.vertical.thumbStart=i(()=>e.vertical.percentage.value*(r.vertical.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=i(()=>Math.round(w(r.vertical.value*r.vertical.value/e.vertical.size.value,X(r.vertical.value),r.vertical.value))),e.vertical.style=i(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`})),e.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=i(()=>{const t=e.horizontal.size.value-r.horizontal.value;if(t<=0)return 0;const a=w(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(a*1e4)/1e4}),e.horizontal.thumbHidden=i(()=>(l.visible===null?m.value:l.visible)!==!0&&u.value===!1&&f.value===!1||e.horizontal.size.value<=r.horizontal.value+1),e.horizontal.thumbStart=i(()=>e.horizontal.percentage.value*(r.horizontal.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=i(()=>Math.round(w(r.horizontal.value*r.horizontal.value/e.horizontal.size.value,X(r.horizontal.value),r.horizontal.value))),e.horizontal.style=i(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`})),e.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const Z=i(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),ee=[[N,t=>{$(t,"vertical")},void 0,{vertical:!0,...U}]],te=[[N,t=>{$(t,"horizontal")},void 0,{horizontal:!0,...U}]];function P(){const t={};return E.forEach(a=>{const o=e[a];t[a+"Position"]=o.position.value,t[a+"Percentage"]=o.percentage.value,t[a+"Size"]=o.size.value,t[a+"ContainerSize"]=r[a].value}),t}const k=qe(()=>{const t=P();t.ref=d,S("scroll",t)},0);function x(t,a,o){if(E.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?L:Q)(z.value,a,o)}function le({height:t,width:a}){let o=!1;r.vertical.value!==t&&(r.vertical.value=t,o=!0),r.horizontal.value!==a&&(r.horizontal.value=a,o=!0),o===!0&&y()}function ae({position:t}){let a=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,a=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,a=!0),a===!0&&y()}function re({height:t,width:a}){e.horizontal.size.value!==a&&(e.horizontal.size.value=a,y()),e.vertical.size.value!==t&&(e.vertical.size.value=t,y())}function $(t,a){const o=e[a];if(t.isFirst===!0){if(o.thumbHidden.value===!0)return;O=o.position.value,f.value=!0}else if(f.value!==!0)return;t.isFinal===!0&&(f.value=!1);const g=T[a],p=r[a].value,se=(o.size.value-p)/(p-o.thumbSize.value),ce=t.distance[g.dist],ve=O+(t.direction===g.dir?1:-1)*ce*se;H(ve,a)}function B(t,a){const o=e[a];if(o.thumbHidden.value!==!0){const g=t[T[a].offset];if(g<o.thumbStart.value||g>o.thumbStart.value+o.thumbSize.value){const p=g-o.thumbSize.value/2;H(p/r[a].value*o.size.value,a)}o.ref.value!==null&&o.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function oe(t){B(t,"vertical")}function ie(t){B(t,"horizontal")}function y(){u.value=!0,b!==null&&clearTimeout(b),b=setTimeout(()=>{b=null,u.value=!1},l.delay),l.onScroll!==void 0&&k()}function H(t,a){z.value[T[a].scroll]=t}function ne(){m.value=!0}function ue(){m.value=!1}let _=null;return Qe(()=>d.$q.lang.rtl,t=>{z.value!==null&&Q(z.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),Ce(()=>{_={top:e.vertical.position.value,left:e.horizontal.position.value}}),De(()=>{if(_===null)return;const t=z.value;t!==null&&(Q(t,_.left),L(t,_.top))}),Te(k.cancel),Object.assign(d,{getScrollTarget:()=>z.value,getScroll:P,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:x,setScrollPercentage(t,a,o){x(t,a*(e[t].size.value-r[t].value)*(t==="horizontal"&&d.$q.lang.rtl===!0?-1:1),o)}}),()=>h("div",{class:W.value,onMouseenter:ne,onMouseleave:ue},[h("div",{ref:z,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[h("div",{class:"q-scrollarea__content absolute",style:Z.value},Se(v.default,[h(V,{debounce:0,onResize:re})])),h(de,{axis:"both",onScroll:ae})]),h(V,{debounce:0,onResize:le}),h("div",{class:e.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:oe}),h("div",{class:e.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:ie}),M(h("div",{ref:e.vertical.ref,class:e.vertical.thumbClass.value,style:e.vertical.style.value,"aria-hidden":"true"}),ee),M(h("div",{ref:e.horizontal.ref,class:e.horizontal.thumbClass.value,style:e.horizontal.style.value,"aria-hidden":"true"}),te)])}});const je={setup(){const l=s(!1),v=s(!1);return{leftDrawerOpen:l,toggleLeftDrawer(){l.value=!l.value},rightDrawerOpen:v,toggleRightDrawer(){v.value=!v.value},links1:[{icon:"mail",text:"\u041C\u043E\u0457 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438"},{icon:"hardware",text:"\u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457"},{icon:"person",text:"\u0424\u0443\u043D\u043A\u0446\u0456\u0457 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"},{icon:"link",text:"\u0412\u0445\u043E\u0434\u0438 \u0442\u0430 \u0432\u0438\u0445\u043E\u0434\u0438"},{icon:"settings",text:"\u0414\u0430\u0442\u0447\u0438\u043A\u0438"},{icon:"settings",text:"\u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0442\u043E\u043D\u043E\u043C\u043D\u0438\u043C \u043E\u043F\u0430\u043B\u044E\u0432\u0430\u0447\u0435\u043C"}]}}},Le=$e("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1);function Fe(l,v,S,u,f,m){const r=Oe("router-view");return C(),F(he,{view:"hHh lpR fFf"},{default:c(()=>[n(me,{elevated:"",class:"bg-primary text-white"},{default:c(()=>[n(ze,null,{default:c(()=>[n(A,{dense:"",flat:"",round:"",icon:"menu",onClick:u.toggleLeftDrawer},null,8,["onClick"]),n(ge,null,{default:c(()=>[n(fe,null,{default:c(()=>[Le]),_:1}),I(" Title ")]),_:1}),n(A,{dense:"",flat:"",round:"",icon:"menu",onClick:u.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),n(R,{"show-if-above":"",modelValue:u.leftDrawerOpen,"onUpdate:modelValue":v[0]||(v[0]=e=>u.leftDrawerOpen=e),side:"left",bordered:""},null,8,["modelValue"]),n(R,{"show-if-above":"",modelValue:u.rightDrawerOpen,"onUpdate:modelValue":v[1]||(v[1]=e=>u.rightDrawerOpen=e),side:"right",bordered:""},{default:c(()=>[n(Re,{class:"fit"},{default:c(()=>[n(He,{padding:""},{default:c(()=>[(C(!0),Pe(xe,null,ke(u.links1,e=>M((C(),F(pe,{key:e.text,clickable:""},{default:c(()=>[n(j,{avatar:""},{default:c(()=>[n(ye,{color:"grey",name:e.icon},null,8,["name"])]),_:2},1024),n(j,null,{default:c(()=>[n(we,null,{default:c(()=>[I(Be(e.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[_e]])),128)),n(Ve,{class:"q-my-md"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(be,null,{default:c(()=>[n(r)]),_:1})]),_:1})}var We=Me(je,[["render",Fe]]);export{We as default};