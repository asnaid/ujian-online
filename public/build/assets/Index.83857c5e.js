import{L as y}from"./Admin.8eecc60a.js";import{P as g}from"./Pagination.9dfb3d99.js";import{H as x,L as B,m as C,a as i,o as l,c as r,b as n,w as c,d as t,e as u,f as S,v as L,F as b,p as P,h as f,t as p,i as A}from"./app.1c0ba5f5.js";import{S as k}from"./sweetalert2.all.84b9a166.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const j={layout:y,components:{Head:x,Link:B,Pagination:g},props:{lessons:Object},setup(){const d=C(new URL(document.location).searchParams.get("q"));return{search:d,handleSearch:()=>{f.Inertia.get("/admin/lessons",{q:d.value})},destroy:s=>{k.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(_=>{_.isConfirmed&&(f.Inertia.delete(`/admin/lessons/${s}`),k.fire({title:"Deleted!",text:"Pelajaran Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},M=t("title",null,"Mata Pelajaran - Ujian Online SMANRA",-1),D={class:"container-fluid mb-5 mt-5"},H={class:"row"},T={class:"col-md-8"},V={class:"row"},I={class:"col-md-3 col-12 mb-2"},U=t("i",{class:"fa fa-plus-circle"},null,-1),q=A(" Tambah"),F={class:"col-md-9 col-12 mb-2"},O={class:"input-group"},R=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),E={class:"row mt-1"},Y={class:"col-md-12"},z={class:"card border-0 shadow"},G={class:"card-body"},J={class:"table-responsive"},K={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Q=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Nama Mata Pelajaran"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),W=t("div",{class:"mt-2"},null,-1),X={class:"fw-bold text-center"},Z={class:"text-center"},$=t("i",{class:"fa fa-pencil-alt"},null,-1),tt=["onClick"],st=t("i",{class:"fa fa-trash"},null,-1),et=[st];function at(d,a,o,s,_,ot){const v=i("Head"),h=i("Link"),w=i("Pagination");return l(),r(b,null,[n(v,null,{default:c(()=>[M]),_:1}),t("div",D,[t("div",H,[t("div",T,[t("div",V,[t("div",I,[n(h,{href:"/admin/lessons/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:c(()=>[U,q]),_:1})]),t("div",F,[t("form",{onSubmit:a[1]||(a[1]=u((...e)=>s.handleSearch&&s.handleSearch(...e),["prevent"]))},[t("div",O,[S(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":a[0]||(a[0]=e=>s.search=e),placeholder:"masukkan kata kunci dan enter..."},null,512),[[L,s.search]]),R])],32)])])])]),t("div",E,[t("div",Y,[t("div",z,[t("div",G,[t("div",J,[t("table",K,[Q,W,t("tbody",null,[(l(!0),r(b,null,P(o.lessons.data,(e,m)=>(l(),r("tr",{key:m},[t("td",X,p(++m+(o.lessons.current_page-1)*o.lessons.per_page),1),t("td",null,p(e.title),1),t("td",Z,[n(h,{href:`/admin/lessons/${e.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:c(()=>[$]),_:2},1032,["href"]),t("button",{onClick:u(nt=>s.destroy(e.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},et,8,tt)])]))),128))])])]),n(w,{links:o.lessons.links,align:"end"},null,8,["links"])])])])])])],64)}const _t=N(j,[["render",at]]);export{_t as default};
