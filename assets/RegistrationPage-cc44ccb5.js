import{i as p,u as h,j as s,L as g}from"./index-19e9215d.js";import{c as N,a as r,u,o as k}from"./index.esm-d669ea4e.js";import{g as w}from"./google-1b098947.js";import{B as f}from"./ButtonMain-f4b433ed.js";const b="_container_11k8p_1",v="_form_11k8p_20",T="_googleBtn_11k8p_32",y="_googleTitle_11k8p_45",I="_label_11k8p_52",M="_field_11k8p_67",S="_input_11k8p_71",B="_errorMessage_11k8p_81",L="_btnSubmit_11k8p_87",P="_loginLink_11k8p_109",i={container:b,form:v,googleBtn:T,googleTitle:y,label:I,field:M,input:S,errorMessage:B,btnSubmit:L,loginLink:P},C=N({name:r().required(),email:r().email().required(p.t("loginPage.validation.emailRequired")),password:r().min(7,p.t("loginPage.validation.passwordLength")).required()}).required(),R=()=>{var c,m,d,x;const{register:t,handleSubmit:a,formState:{errors:o}}=u({resolver:k(C)}),{t:l}=h("translation",{keyPrefix:"registrationPage.form"}),j=_=>console.log(_);return s.jsx("div",{className:i.container,children:s.jsxs("form",{className:i.form,onSubmit:a(j),children:[s.jsxs("button",{className:i.googleBtn,children:[s.jsx("img",{className:i.googleIcon,src:w,alt:"Google icon",width:"18",height:"18"}),s.jsx("p",{className:i.googleTitle,children:"Google"})]}),s.jsxs("div",{className:i.field,children:[s.jsxs("label",{className:i.label,children:[l("name")," ",s.jsx("span",{children:"*"})]}),s.jsx("input",{className:i.input,type:"text",...t("name"),placeholder:"..."}),s.jsx("p",{className:i.errorMessage,children:(c=o.name)==null?void 0:c.message})]}),s.jsxs("div",{className:i.field,children:[s.jsxs("label",{className:i.label,children:[l("email")," ",s.jsx("span",{children:"*"})]}),s.jsx("input",{className:i.input,type:"email",...t("email"),placeholder:"your@email.com"}),s.jsx("p",{className:i.errorMessage,children:(m=o.email)==null?void 0:m.message})]}),s.jsxs("div",{className:i.field,children:[s.jsxs("label",{className:i.label,children:[l("password")," ",s.jsx("span",{children:"*"})]}),s.jsx("input",{className:i.input,type:"password",...t("password"),placeholder:"..."}),s.jsx("p",{className:i.errorMessage,children:(d=o.password)==null?void 0:d.message})]}),s.jsxs("div",{className:i.field,children:[s.jsxs("label",{className:i.label,children:[l("confirm password")," ",s.jsx("span",{children:"*"})]}),s.jsx("input",{className:i.input,type:"password",...t("password"),placeholder:"..."}),s.jsx("p",{className:i.errorMessage,children:(x=o.password)==null?void 0:x.message})]}),s.jsx("button",{className:i.btnSubmit,type:"submit",children:l("register")}),s.jsxs(g,{to:"/login",className:i.loginLink,children:[l("have account"),s.jsx("span",{children:l("login")})]})]})})},n="/books-reading/assets/arrow-right-acf6aa5a.svg",q="_section_1okc5_1",W="_mainTitle_1okc5_20",$="_infoWrapper_1okc5_33",F="_listTitle_1okc5_48",G="_list_1okc5_48",E="_item_1okc5_68",z="_text_1okc5_77",A="_links_1okc5_82",D="_link_1okc5_82",e={section:q,mainTitle:W,infoWrapper:$,listTitle:F,list:G,item:E,text:z,links:A,link:D},H=()=>{const t=()=>{window.scroll({top:0,behavior:"smooth"})},{t:a}=h("translation",{keyPrefix:"registrationPage.info"});return s.jsxs("section",{className:e.section,children:[s.jsx("h1",{className:e.mainTitle,children:"Books Reading"}),s.jsxs("div",{className:e.infoWrapper,children:[s.jsx("h2",{className:e.listTitle,children:a("title1")}),s.jsxs("ul",{className:e.list,children:[s.jsxs("li",{className:e.item,children:[s.jsx("img",{className:e.arrowIcon,src:n,alt:"arrow icon",width:"4px",height:"8px"}),s.jsx("p",{className:e.text,children:a("item1")})]}),s.jsxs("li",{className:e.item,children:[s.jsx("img",{className:e.arrowIcon,src:n,alt:"arrow icon",width:"4px",height:"8px"}),s.jsx("p",{className:e.text,children:a("item2")})]}),s.jsxs("li",{className:e.item,children:[s.jsx("img",{className:e.arrowIcon,src:n,alt:"arrow icon",width:"4px",height:"8px"}),s.jsx("p",{className:e.text,children:a("item3")})]})]}),s.jsx("h2",{className:e.listTitle,children:a("title2")}),s.jsxs("ul",{className:e.list,children:[s.jsxs("li",{className:e.item,children:[s.jsx("img",{className:e.arrowIcon,src:n,alt:"arrow icon",width:"4px",height:"8px"}),s.jsx("p",{className:e.text,children:a("item4")})]}),s.jsxs("li",{className:e.item,children:[s.jsx("img",{className:e.arrowIcon,src:n,alt:"arrow icon",width:"4px",height:"8px"}),s.jsx("p",{className:e.text,children:a("item5")})]}),s.jsxs("li",{className:e.item,children:[s.jsx("img",{className:e.arrowIcon,src:n,alt:"arrow icon",width:"4px",height:"8px"}),s.jsx("p",{className:e.text,children:a("item6")})]})]})]}),s.jsxs("div",{className:e.links,children:[s.jsx(g,{className:e.link,to:"/login",children:a("login")}),s.jsx(f,{onClick:t,children:a("register")})]})]})},J="_flexContainer_16lwc_2",K={flexContainer:J},X=()=>s.jsxs("div",{className:K.flexContainer,children:[s.jsx(R,{}),s.jsx(H,{})]});export{X as default};