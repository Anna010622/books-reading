import{i as l,u as g,j as e,L as u}from"./index-19e9215d.js";import{c as p,a as c,u as h,o as x}from"./index.esm-d669ea4e.js";import{g as f}from"./google-1b098947.js";const j="_container_l4inr_1",b="_form_l4inr_20",N="_googleBtn_l4inr_32",q="_googleTitle_l4inr_45",L="_label_l4inr_52",y="_field_l4inr_67",v="_input_l4inr_71",w="_errorMessage_l4inr_81",S="_btnSubmit_l4inr_87",k="_registrationLink_l4inr_109",s={container:j,form:b,googleBtn:N,googleTitle:q,label:L,field:y,input:v,errorMessage:w,btnSubmit:S,registrationLink:k},I=p({email:c().email().required(l.t("loginPage.validation.emailRequired")),password:c().min(7,l.t("loginPage.validation.passwordLength")).required()}).required(),P=()=>{var t,r;const{register:n,handleSubmit:m,formState:{errors:a}}=h({resolver:x(I)}),{t:o}=g("translation",{keyPrefix:"loginPage.form"}),d=_=>console.log(_);return e.jsx("div",{className:s.container,children:e.jsxs("form",{className:s.form,onSubmit:m(d),children:[e.jsxs("button",{className:s.googleBtn,children:[e.jsx("img",{className:s.googleIcon,src:f,alt:"Google icon",width:"18",height:"18"}),e.jsx("p",{className:s.googleTitle,children:"Google"})]}),e.jsxs("div",{className:s.field,children:[e.jsxs("label",{className:s.label,children:[o("email")," ",e.jsx("span",{children:"*"})]}),e.jsx("input",{className:s.input,type:"email",...n("email"),placeholder:"your@email.com"}),e.jsx("p",{className:s.errorMessage,children:(t=a.email)==null?void 0:t.message})]}),e.jsxs("div",{className:s.field,children:[e.jsxs("label",{className:s.label,children:[o("password")," ",e.jsx("span",{children:"*"})]}),e.jsx("input",{className:s.input,type:"password",...n("password"),placeholder:o("password")}),e.jsx("p",{className:s.errorMessage,children:(r=a.password)==null?void 0:r.message})]}),e.jsx("button",{className:s.btnSubmit,type:"submit",children:o("login")}),e.jsx(u,{to:"/registration",className:s.registrationLink,children:o("register")})]})})},M="_loginInfo_1nfp1_2",T="_quote_1nfp1_39",B="_author_1nfp1_61",i={loginInfo:M,quote:T,author:B},C=()=>{const{t:n}=g("translation",{keyPrefix:"loginPage.info"});return e.jsxs("div",{className:i.loginInfo,children:[e.jsx("p",{className:i.quote,children:n("quote")}),e.jsx("p",{className:i.author,children:n("author")})]})},$="_pageContainer_g49qt_1",F={pageContainer:$},z=()=>e.jsxs("div",{className:F.pageContainer,children:[e.jsx(P,{}),e.jsx(C,{})]});export{z as default};
