import{L as c,a as d,o as t,c as o,d as a,b as n,w as r,g as l,k as i,F as _,i as m}from"./app.1c0ba5f5.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";const b={components:{Link:c}},h={class:"navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4 shadow"},u={class:"container position-relative"},v=a("img",{class:"navbar-brand-dark",src:"/assets/images/logo.png",style:{height:"70px"}},null,-1),f={class:"collapse navbar-collapse",id:"navbarCollapse"},g=a("ul",{class:"navbar-nav me-auto mb-2 mb-md-0"},null,-1),k={key:0,class:"d-flex"},L=m("LOGOUT"),x={class:"container"};function $(s,y,w,C,N,V){const e=d("Link");return t(),o(_,null,[a("nav",h,[a("div",u,[n(e,{class:"navbar-brand me-lg-3",href:"/student/dashboard"},{default:r(()=>[v]),_:1}),a("div",f,[g,s.$page.props.auth.student?(t(),o("form",k,[n(e,{href:"/logout",method:"POST",class:"btn btn-secondary shadow",as:"button"},{default:r(()=>[L]),_:1})])):l("",!0)])])]),a("div",x,[i(s.$slots,"default")])],64)}const S=p(b,[["render",$]]);export{S as L};
