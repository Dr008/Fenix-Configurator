import{j as s}from"./QBtn.f7b98ab3.js";import{Q as l}from"./QPage.6ebd6de0.js";import{a1 as f,r as i,c as d,G as m,H as p,I as _,J as o,L as a,a2 as C,O as c,d as u}from"./index.e05a452a.js";const x=f("counter",()=>{const e=i(0),t=d(()=>e.value*2);function n(){e.value++}return{count:e,doubleCount:t,increment:n}}),k=m({name:"IndexPage"}),I=Object.assign(k,{setup(e){const t=x();return(n,r)=>(p(),_(l,{class:"flex flex-center"},{default:o(()=>[a(" Counter: "+C(c(t).count)+" ",1),u(s,{onClick:c(t).increment},{default:o(()=>[a("Increment")]),_:1},8,["onClick"]),u(s,{onClick:r[0]||(r[0]=g=>n.$ble.connect())},{default:o(()=>[a("Connect BLE")]),_:1})]),_:1}))}});export{I as default};