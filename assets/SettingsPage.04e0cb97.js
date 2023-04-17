import{Q as H}from"./QBtn.3898c0b1.js";import{Q as ne,a as ue}from"./QToolbar.f2bb947c.js";import{c as A,u as ie,b as re,Q as Z,h as se,j as ee}from"./use-router-link.7063a062.js";import{u as ce,a as me,i as de,b as ve}from"./use-dark.59f5d832.js";import{d as fe,o as be,e as xe,f as he,g as ye,h as ge,i as ke,k as Me,u as Ve,a as Re,b as _e,c as Ce,Q as W}from"./QSlider.67bb8961.js";import{h,r as O,c as n,g as U,a8 as Y,B as z,w as N,i as pe,K as E,L as Se,m as qe,A as Te,_ as $e,Q as Oe,p as C,v as S,d as p,s as L,F as j,u as Qe,x as J,y as we,z as Be,q as Pe,ag as w}from"./index.2a648a84.js";import{b as B}from"./format.16a51d90.js";import{Q as Fe}from"./QPage.c1bc5beb.js";import"./rtl.bfefc57d.js";import"./QItem.297481cc.js";import"./use-tick.9431959d.js";const Ie=h("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[h("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),h("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Le=A({name:"QRadio",props:{...ce,...ie,...fe,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:y,emit:d}){const{proxy:a}=U(),o=me(e,a.$q),g=re(e,be),l=O(null),{refocusTargetEl:c,refocusTarget:t}=xe(e,l),f=n(()=>Y(e.modelValue)===Y(e.val)),M=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(o.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),r=n(()=>{const i=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${i}`}),b=n(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),k=n(()=>e.disable===!0?-1:e.tabindex||0),q=n(()=>{const i={type:"radio"};return e.name!==void 0&&Object.assign(i,{".checked":f.value===!0,"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),i}),V=he(q);function R(i){i!==void 0&&(z(i),t(i)),e.disable!==!0&&f.value!==!0&&d("update:modelValue",e.val,i)}function Q(i){(i.keyCode===13||i.keyCode===32)&&z(i)}function D(i){(i.keyCode===13||i.keyCode===32)&&R(i)}return Object.assign(a,{set:R}),()=>{const i=b.value!==null?[h("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[h(Z,{class:"q-radio__icon",name:b.value})])]:[Ie];e.disable!==!0&&V(i,"unshift"," q-radio__native q-ma-none q-pa-none");const P=[h("div",{class:r.value,style:g.value,"aria-hidden":"true"},i)];c.value!==null&&P.push(c.value);const F=e.label!==void 0?se(y.default,[e.label]):ee(y.default);return F!==void 0&&P.push(h("div",{class:"q-radio__label q-anchor--skip"},F)),h("div",{ref:l,class:M.value,tabindex:k.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:R,onKeydown:Q,onKeyup:D},P)}}});const $={MIN:0,RANGE:1,MAX:2};var Ne=A({name:"QRange",props:{...ye,modelValue:{type:Object,default:()=>({min:null,max:null}),validator:e=>"min"in e&&"max"in e},dragRange:Boolean,dragOnlyRange:Boolean,leftLabelColor:String,leftLabelTextColor:String,rightLabelColor:String,rightLabelTextColor:String,leftLabelValue:[String,Number],rightLabelValue:[String,Number],leftThumbColor:String,rightThumbColor:String},emits:ge,setup(e,{emit:y}){const{proxy:{$q:d}}=U(),{state:a,methods:o}=ke({updateValue:K,updatePosition:oe,getDragging:te,formAttrs:n(()=>({type:"hidden",name:e.name,value:`${e.modelValue.min}|${e.modelValue.max}`}))}),g=O(null),l=O(0),c=O(0),t=O({min:0,max:0});function f(){t.value.min=e.modelValue.min===null?a.innerMin.value:B(e.modelValue.min,a.innerMin.value,a.innerMax.value),t.value.max=e.modelValue.max===null?a.innerMax.value:B(e.modelValue.max,a.innerMin.value,a.innerMax.value)}N(()=>`${e.modelValue.min}|${e.modelValue.max}|${a.innerMin.value}|${a.innerMax.value}`,f),f();const M=n(()=>o.convertModelToRatio(t.value.min)),r=n(()=>o.convertModelToRatio(t.value.max)),b=n(()=>a.active.value===!0?l.value:M.value),k=n(()=>a.active.value===!0?c.value:r.value),q=n(()=>{const s={[a.positionProp.value]:`${100*b.value}%`,[a.sizeProp.value]:`${100*(k.value-b.value)}%`};return e.selectionImg!==void 0&&(s.backgroundImage=`url(${e.selectionImg}) !important`),s}),V=n(()=>{if(a.editable.value!==!0)return{};if(d.platform.is.mobile===!0)return{onClick:o.onMobileClick};const s={onMousedown:o.onActivate};return(e.dragRange===!0||e.dragOnlyRange===!0)&&Object.assign(s,{onFocus:()=>{a.focus.value="both"},onBlur:o.onBlur,onKeydown:X,onKeyup:o.onKeyup}),s});function R(s){return d.platform.is.mobile!==!0&&a.editable.value===!0&&e.dragOnlyRange!==!0?{onFocus:()=>{a.focus.value=s},onBlur:o.onBlur,onKeydown:X,onKeyup:o.onKeyup}:{}}const Q=n(()=>e.dragOnlyRange!==!0?a.tabindex.value:null),D=n(()=>d.platform.is.mobile!==!0&&(e.dragRange||e.dragOnlyRange===!0)?a.tabindex.value:null),i=O(null),P=n(()=>R("min")),F=o.getThumbRenderFn({focusValue:"min",getNodeData:()=>({ref:i,key:"tmin",...P.value,tabindex:Q.value}),ratio:b,label:n(()=>e.leftLabelValue!==void 0?e.leftLabelValue:t.value.min),thumbColor:n(()=>e.leftThumbColor||e.thumbColor||e.color),labelColor:n(()=>e.leftLabelColor||e.labelColor),labelTextColor:n(()=>e.leftLabelTextColor||e.labelTextColor)}),ae=n(()=>R("max")),le=o.getThumbRenderFn({focusValue:"max",getNodeData:()=>({...ae.value,key:"tmax",tabindex:Q.value}),ratio:k,label:n(()=>e.rightLabelValue!==void 0?e.rightLabelValue:t.value.max),thumbColor:n(()=>e.rightThumbColor||e.thumbColor||e.color),labelColor:n(()=>e.rightLabelColor||e.labelColor),labelTextColor:n(()=>e.rightLabelTextColor||e.labelTextColor)});function K(s){(t.value.min!==e.modelValue.min||t.value.max!==e.modelValue.max)&&y("update:modelValue",{...t.value}),s===!0&&y("change",{...t.value})}function te(s){const{left:u,top:x,width:m,height:_}=g.value.getBoundingClientRect(),I=e.dragOnlyRange===!0?0:e.vertical===!0?i.value.offsetHeight/(2*_):i.value.offsetWidth/(2*m),v={left:u,top:x,width:m,height:_,valueMin:t.value.min,valueMax:t.value.max,ratioMin:M.value,ratioMax:r.value},T=o.getDraggingRatio(s,v);return e.dragOnlyRange!==!0&&T<v.ratioMin+I?v.type=$.MIN:e.dragOnlyRange===!0||T<v.ratioMax-I?e.dragRange===!0||e.dragOnlyRange===!0?(v.type=$.RANGE,Object.assign(v,{offsetRatio:T,offsetModel:o.convertRatioToModel(T),rangeValue:v.valueMax-v.valueMin,rangeRatio:v.ratioMax-v.ratioMin})):v.type=v.ratioMax-T<T-v.ratioMin?$.MAX:$.MIN:v.type=$.MAX,v}function oe(s,u=a.dragging.value){let x;const m=o.getDraggingRatio(s,u),_=o.convertRatioToModel(m);switch(u.type){case $.MIN:m<=u.ratioMax?(x={minR:m,maxR:u.ratioMax,min:_,max:u.valueMax},a.focus.value="min"):(x={minR:u.ratioMax,maxR:m,min:u.valueMax,max:_},a.focus.value="max");break;case $.MAX:m>=u.ratioMin?(x={minR:u.ratioMin,maxR:m,min:u.valueMin,max:_},a.focus.value="max"):(x={minR:m,maxR:u.ratioMin,min:_,max:u.valueMin},a.focus.value="min");break;case $.RANGE:const I=m-u.offsetRatio,v=B(u.ratioMin+I,0,1-u.rangeRatio),T=_-u.offsetModel,G=B(u.valueMin+T,e.min,e.max-u.rangeValue);x={minR:v,maxR:v+u.rangeRatio,min:parseFloat(G.toFixed(a.decimals.value)),max:parseFloat((G+u.rangeValue).toFixed(a.decimals.value))},a.focus.value="both";break}t.value=t.value.min===null||t.value.max===null?{min:x.min||e.min,max:x.max||e.max}:{min:x.min,max:x.max},e.snap!==!0||e.step===0?(l.value=x.minR,c.value=x.maxR):(l.value=o.convertModelToRatio(t.value.min),c.value=o.convertModelToRatio(t.value.max))}function X(s){if(!Me.includes(s.keyCode))return;z(s);const u=([34,33].includes(s.keyCode)?10:1)*a.step.value,x=([34,37,40].includes(s.keyCode)?-1:1)*(a.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*u;if(a.focus.value==="both"){const m=t.value.max-t.value.min,_=B(parseFloat((t.value.min+x).toFixed(a.decimals.value)),a.innerMin.value,a.innerMax.value-m);t.value={min:_,max:parseFloat((_+m).toFixed(a.decimals.value))}}else{if(a.focus.value===!1)return;{const m=a.focus.value;t.value={...t.value,[m]:B(parseFloat((t.value[m]+x).toFixed(a.decimals.value)),m==="min"?a.innerMin.value:t.value.min,m==="max"?a.innerMax.value:t.value.max)}}}K()}return()=>{const s=o.getContent(q,D,V,u=>{u.push(F(),le())});return h("div",{ref:g,class:"q-range "+a.classes.value+(e.modelValue.min===null||e.modelValue.max===null?" q-slider--no-value":""),...a.attributes.value,"aria-valuenow":e.modelValue.min+"|"+e.modelValue.max},s)}}}),Ae=A({name:"QToggle",props:{...Ve,icon:String,iconColor:String},emits:Re,setup(e){function y(d,a){const o=n(()=>(d.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),g=n(()=>d.value===!0?e.iconColor:null);return()=>[h("div",{class:"q-toggle__track"}),h("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[h(Z,{name:o.value,color:g.value})]:void 0)]}return _e("toggle",y)}});const Ue={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function De(){const{props:e,proxy:{$q:y}}=U(),d=pe(Se,E);if(d===E)return console.error("QPageSticky needs to be child of QLayout"),E;const a=n(()=>{const r=e.position;return{top:r.indexOf("top")>-1,right:r.indexOf("right")>-1,bottom:r.indexOf("bottom")>-1,left:r.indexOf("left")>-1,vertical:r==="top"||r==="bottom",horizontal:r==="left"||r==="right"}}),o=n(()=>d.header.offset),g=n(()=>d.right.offset),l=n(()=>d.footer.offset),c=n(()=>d.left.offset),t=n(()=>{let r=0,b=0;const k=a.value,q=y.lang.rtl===!0?-1:1;k.top===!0&&o.value!==0?b=`${o.value}px`:k.bottom===!0&&l.value!==0&&(b=`${-l.value}px`),k.left===!0&&c.value!==0?r=`${q*c.value}px`:k.right===!0&&g.value!==0&&(r=`${-q*g.value}px`);const V={transform:`translate(${r}, ${b})`};return e.offset&&(V.margin=`${e.offset[1]}px ${e.offset[0]}px`),k.vertical===!0?(c.value!==0&&(V[y.lang.rtl===!0?"right":"left"]=`${c.value}px`),g.value!==0&&(V[y.lang.rtl===!0?"left":"right"]=`${g.value}px`)):k.horizontal===!0&&(o.value!==0&&(V.top=`${o.value}px`),l.value!==0&&(V.bottom=`${l.value}px`)),V}),f=n(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function M(r){const b=ee(r.default);return h("div",{class:f.value,style:t.value},e.expand===!0?b:[h("div",b)])}return{$layout:d,getStickyContent:M}}var Ee=A({name:"QPageScroller",props:{...Ue,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(e,{slots:y,emit:d}){const{proxy:{$q:a}}=U(),{$layout:o,getStickyContent:g}=De(),l=O(null);let c;const t=n(()=>o.height.value-(o.isContainer.value===!0?o.containerHeight.value:a.screen.height));function f(){return e.reverse===!0?t.value-o.scroll.value.position>e.scrollOffset:o.scroll.value.position>e.scrollOffset}const M=O(f());function r(){const R=f();M.value!==R&&(M.value=R)}function b(){e.reverse===!0?c===void 0&&(c=N(t,r)):k()}N(o.scroll,r),N(()=>e.reverse,b);function k(){c!==void 0&&(c(),c=void 0)}function q(R){const Q=de(o.isContainer.value===!0?l.value:o.rootRef.value);ve(Q,e.reverse===!0?o.height.value:0,e.duration),d("click",R)}function V(){return M.value===!0?h("div",{ref:l,class:"q-page-scroller",onClick:q},g(y)):null}return b(),qe(k),()=>h(Te,{name:"q-transition--fade"},V)}});const je=Oe({name:"SettingsPage",components:{},data(){return{selectedOption:"Option A",set:[{name:"\u0414\u0432\u0438\u0433\u0443\u043D",type:"radio",value:"\u0442\u0438\u043F 1",options:[{label:"\u0442\u0438\u043F 1",value:1},{label:"\u0442\u0438\u043F 2",value:2},{label:"\u0442\u0438\u043F 3",value:3}]},{name:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u043E\u0434\u0456\u0457\u0432",type:"range",value:2,options:{min:1,max:8,step:1}},{name:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0446\u0438\u043B\u0456\u043D\u0434\u0440\u0456\u0432",type:"mrange",value:{min:2,max:4},options:{min:1,max:8}},{name:"\u041E\u043F\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438",type:"mselect",label:"\u041E\u043F\u0446\u0456\u0457",value:[],options:[{label:"\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u043E\u043D\u0435\u0440",value:1},{label:"\u0410\u041A\u041F",value:2},{label:"\u0442\u0432\u0435\u0440\u0435\u0437\u0438\u0439 \u0432\u043E\u0434\u0456\u0439",value:3}]},{name:"\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0443\u043D\u0430",type:"range",value:80,options:{min:60,max:300,step:40}},{name:"\u0410\u041A\u041F",type:"toggler",label:["\u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0456","\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0454"],value:!0},{name:"GPS \u043C\u043E\u0434\u0443\u043B\u044C",type:"toggler",label:["\u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0456","\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439"],value:!1},{name:"\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430",type:"radio",value:"\u0421\u0435\u0434\u0430\u043D",options:[{label:"\u0421\u0435\u0434\u0430\u043D",value:"\u0421\u0435\u0434\u0430\u043D"},{label:"\u0425\u0435\u0442\u0447\u0431\u0435\u043A",value:"\u0425\u0435\u0442\u0447\u0431\u0435\u043A"},{label:"\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",value:"\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440"}]},{name:"\u0422\u0438\u043F \u043F\u0430\u043B\u0438\u0432\u0430",type:"select",value:"\u0411\u0435\u043D\u0437\u0438\u043D",options:[{label:"\u0411\u0435\u043D\u0437\u0438\u043D",value:"\u0411\u0435\u043D\u0437\u0438\u043D"},{label:"\u0414\u0438\u0437\u0435\u043B\u044C",value:"\u0414\u0438\u0437\u0435\u043B\u044C"},{label:"\u0413\u0456\u0431\u0440\u0438\u0434",value:"\u0413\u0456\u0431\u0440\u0438\u0434"},{label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E",value:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E"}]}]}}}),ze={class:"col-3 flex items-center q-pa-md text-h6"},Ke={key:0,class:"col-9 q-pa-md"},Xe={key:1,class:"col-9 q-pa-md"},Ge={key:2,class:"col-9 q-pa-md"},He={key:3,class:"col-9 q-pa-md"},We={key:4,class:"col-9 q-pa-md"},Ye={key:5,class:"col-9 q-pa-md"};function Je(e,y,d,a,o,g){return C(),S(j,null,[p(Fe,{style:{"padding-top":"20px"},class:"q-pa-md"},{default:L(()=>[p(ne,null,{default:L(()=>[p(H,{flat:"",round:"",dense:"",icon:"map"}),p(ue,null,{default:L(()=>[Qe("\u041E\u0441\u043D\u043E\u0432\u043D\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F")]),_:1})]),_:1}),(C(!0),S(j,null,J(e.set,(l,c)=>(C(),S("div",{class:"row settings_item",key:c},[we("div",ze,Be(l.name),1),l.type==="radio"?(C(),S("div",Ke,[(C(!0),S(j,null,J(l.options,(t,f)=>(C(),Pe(Le,{key:f,modelValue:l.value,"onUpdate:modelValue":M=>l.value=M,val:t.value,label:t.label,"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye"},null,8,["modelValue","onUpdate:modelValue","val","label"]))),128))])):w("",!0),l.type==="range"?(C(),S("div",Xe,[p(Ce,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,"marker-labels":"",min:l.options.min,max:l.options.max,step:l.options.step},null,8,["modelValue","onUpdate:modelValue","min","max","step"])])):w("",!0),l.type==="mrange"?(C(),S("div",Ge,[p(Ne,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,"marker-labels":"",min:l.options.min,max:l.options.max,step:l.options.step},null,8,["modelValue","onUpdate:modelValue","min","max","step"])])):w("",!0),l.type==="select"?(C(),S("div",He,[p(W,{filled:"",modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,options:l.options,label:l.label},null,8,["modelValue","onUpdate:modelValue","options","label"])])):w("",!0),l.type==="mselect"?(C(),S("div",We,[p(W,{filled:"",modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,options:l.options,label:l.label,multiple:"","emit-value":"","map-options":""},null,8,["modelValue","onUpdate:modelValue","options","label"])])):w("",!0),l.type==="toggler"?(C(),S("div",Ye,[p(Ae,{label:l.value===!0?l.label[0]:l.label[1],modelValue:l.value,"onUpdate:modelValue":t=>l.value=t},null,8,["label","modelValue","onUpdate:modelValue"])])):w("",!0)]))),128))]),_:1}),p(Ee,{position:"bottom"},{default:L(()=>[p(H,{fab:"",icon:"keyboard_arrow_up",color:"red"})]),_:1})],64)}var ca=$e(je,[["render",Je]]);export{ca as default};
