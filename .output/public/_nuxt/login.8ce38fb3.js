import{_ as S}from"./nuxt-layout.af3002a6.js";import{l as g,m as y,r as p,n as f,f as T,q as b,s as U,o as m,c as d,d as V,t as k,j as o,b as L,w as N,F as q,a as s,v as A,x as v,y as h}from"./entry.f74d848f.js";import{u as B}from"./fetch.cbf917e9.js";import"./index.c9d4dc9e.js";import"./asyncData.f5cdfe0a.js";const C=g("localuser",{state:()=>({username:"PraZ"}),persist:!0}),D=g("cookiesuser",{state:()=>({username:"PraZ"}),persist:{storage:y.cookies}}),F=g("user",()=>{const t=p(null);p(null);const i=f(()=>t.valu),l=f(()=>t.value!==null);return{token:t,getToken:i,getIsAuth:l,setToken:u=>{t.value=u},removeToken:()=>{t.value=null}}},{persist:{storage:y.sessionStorage,key:"token",reducer:t=>({token:t.token})}}),M={class:"main-page"},E=s("h2",null," Login",-1),P=["onSubmit"],Q=s("button",{type:"submit",class:"p-2 rounded-md"},"login",-1),Z={key:0},j={key:1},G="default",H=T({__name:"login",setup(t){const i=b(),l=F(),a=p(!1),n=U({email:"eve.holt@reqres.in",password:"ciryslicka"});async function u(){if(a.value)return;a.value=!0;const _="https://reqres.in/api/login",{data:e,error:r}=await B(_,{method:"post",body:n},"$4Q7McJQDXG");return r&&console.error("Error fetching data:",r),e!=null&&e.value.token&&(l.setToken(e.value.token),alert("login")),a.value=!1,i.value.isAuthenticated=!0,{data:e}}const w=C(),x=D();return(_,e)=>{const r=S;return m(),d(q,null,[V(k(o(w).username)+" "+k(o(x).username)+" ",1),L(r,{name:G},{default:N(()=>[s("main",M,[E,s("form",{onSubmit:A(u,["prevent"])},[s("ul",null,[s("li",null,[v(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>o(n).email=c),class:"text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"},null,512),[[h,o(n).email]]),v(s("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=c=>o(n).password=c),class:"text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"},null,512),[[h,o(n).password]])])]),Q],40,P),o(a)?(m(),d("div",Z,"...loading...")):(m(),d("div",j,"in~!"))])]),_:1})],64)}}});export{H as default};