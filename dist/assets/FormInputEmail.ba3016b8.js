import{e as p,C as i,D as m,f as _,k as c,E as f,G as v,u as e,l as r,H as g,I as y,t as E,_ as V}from"./index.741dba9b.js";import{r as s,e as I}from"./vee-validate-rules.esm.ecbc3ab4.js";const q={class:"login__field"},x=["required"],F={class:"login__error__text"},b=p({__name:"FormInputEmail",props:{label:{type:String,default:"Email"},modelValue:{type:String}},emits:["update:modelValue"],setup(n){const u=n;i("required",s),i("email",I);const{value:t,errorMessage:l}=m(u.label,{required:s,email:!0});return(d,a)=>(_(),c("div",q,[f(r("input",{type:"email",class:g(["login__input",e(l)?"space-bottom-style":""]),"onUpdate:modelValue":a[0]||(a[0]=o=>y(t)?t.value=o:null),onInput:a[1]||(a[1]=o=>d.$emit("update:modelValue",e(t))),placeholder:"Email",required:e(s),autocomplete:"off"},null,42,x),[[v,e(t)]]),r("span",F,E(e(l)),1)]))}});const C=V(b,[["__scopeId","data-v-c0f4d852"]]);export{C as F};