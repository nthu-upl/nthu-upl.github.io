import{_ as b,M as x,p as g,r as t,o as n,c as a,w as s,a as o,b as i,d as m,t as _,F as u,e as c}from"./index-af11ab2f.js";const y={components:{Member:x},data(){return{professor:g,links:[{title:"Current Members",route:"/team/current-members"},{title:"Visiting Scholars",route:"/team/visiting-scholars"},{title:"Alumni",route:"/team/alumni"}]}}},h={class:"buttonGroup d-flex d-sm-none"},w={class:"buttonGroup d-none d-sm-flex justify-center"};function M(V,k,B,D,r,j){const l=t("v-btn"),p=t("Member"),d=t("v-container"),f=t("router-view"),v=t("v-main");return n(),a(v,{class:"main d-flex flex-column justify-center align-center"},{default:s(()=>[o("div",h,[(n(!0),i(u,null,m(r.links,e=>(n(),a(l,{variant:"text",size:"x-small",class:"ma-1 py-3 bg-grey d-flex",key:e.title,router:"",to:e.route},{default:s(()=>[o("span",null,_(e.title),1)]),_:2},1032,["to"]))),128))]),o("div",w,[(n(!0),i(u,null,m(r.links,e=>(n(),a(l,{variant:"text",size:"normal",class:"ma-1 ma-md-2 pa-1 bg-grey",key:e.title,router:"",to:e.route},{default:s(()=>[o("span",null,_(e.title),1)]),_:2},1032,["to"]))),128))]),c(d,{class:"d-flex justify-center align-center ma-0 pa-0"},{default:s(()=>[c(p,{memberData:r.professor[0]},null,8,["memberData"])]),_:1}),c(f)]),_:1})}const z=b(y,[["render",M],["__scopeId","data-v-901b619c"]]);export{z as default};
