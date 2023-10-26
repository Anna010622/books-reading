import{j as e,u as _,r as g,a as y,b as N,L as k}from"./index-d009bcc9.js";import{c as f,a as u,b as x,u as v,o as w}from"./index.esm-f44de880.js";import{B as L}from"./ButtonMain-10deffa3.js";const M="/books-reading/assets/arrow-back-8821ac10.svg",E="_btn_1if7t_1",T={btn:E},q=({title:r,onClick:t,type:l="button"})=>e.jsx("button",{className:T.btn,type:l,onClick:t,children:r}),C="_form_1xna6_1",$="_field_1xna6_36",B="_label_1xna6_41",S="_input_1xna6_48",F="_errorMessage_1xna6_64",a={form:C,field:$,label:B,input:S,errorMessage:F},P=f({bookTitle:u().required(),author:u().required(),year:x().typeError("Введіть рік видання").required().min(new Date("1917").getFullYear()).max(new Date().getFullYear()),pages:x().typeError("Введіть кількість сторінок").required()}).required(),O=()=>{var n,i,d,m;const{register:r,handleSubmit:t,formState:{errors:l}}=v({resolver:w(P)}),{t:o}=_("translation",{keyPrefix:"libraryPage.form"}),c=j=>console.log(j);return e.jsxs("form",{className:a.form,onSubmit:t(c),children:[e.jsxs("div",{className:a.field,children:[e.jsx("label",{className:a.label,children:o("book title")}),e.jsx("input",{className:a.input,type:"text",...r("bookTitle"),placeholder:"...",required:!0}),e.jsx("p",{className:a.errorMessage,children:(n=l.bookTitle)==null?void 0:n.message})]}),e.jsxs("div",{className:a.field,children:[e.jsx("label",{className:a.label,children:o("author")}),e.jsx("input",{className:a.input,type:"text",...r("author"),placeholder:"...",required:!0}),e.jsx("p",{className:a.errorMessage,children:(i=l.author)==null?void 0:i.message})]}),e.jsxs("div",{className:a.field,children:[e.jsx("label",{className:a.label,children:o("publication date")}),e.jsx("input",{className:a.input,type:"number",...r("year"),placeholder:"...",required:!0}),e.jsx("p",{className:a.errorMessage,children:(d=l.year)==null?void 0:d.message})]}),e.jsxs("div",{className:a.field,children:[e.jsx("label",{className:a.label,children:o("amount of pages")}),e.jsx("input",{className:a.input,type:"number",...r("pages"),placeholder:"...",required:!0}),e.jsx("p",{className:a.errorMessage,children:(m=l.pages)==null?void 0:m.message})]}),e.jsx(q,{title:o("add")})]})},I="_pageContainer_earl2_1",D="_backLink_earl2_6",h={pageContainer:I,backLink:D},R="_overlay_1lmlf_1",p={overlay:R},Y=document.getElementById("modal-root"),A=({children:r,close:t,className:l})=>{const o=n=>{n.code==="Escape"&&t()},c=n=>{n.target===n.currentTarget&&t()};return g.useEffect(()=>(document.body.addEventListener("keydown",o),document.body.classList.add("noScroll"),()=>{document.body.removeEventListener("keydown",o),document.body.classList.remove("noScroll")})),y.createPortal(e.jsx("div",{className:l?`${p.overlay} withoutBg`:p.overlay,onClick:c,children:r}),Y)},z="/books-reading/assets/flag-b474c0f2.svg",b="/books-reading/assets/arrow-down-ac91687a.svg",G="_modal_okyc4_1",H="_list_okyc4_21",J="_item_okyc4_26",K="_title_okyc4_35",Q="_wrapper_okyc4_47",U="_subTitle_okyc4_52",V="_inner_okyc4_67",W="_text_okyc4_73",s={modal:G,list:H,item:J,title:K,wrapper:Q,subTitle:U,inner:V,text:W},X=({close:r})=>{const{t}=_("translation",{keyPrefix:"libraryPage.infoModal"});return e.jsxs("div",{className:s.modal,children:[e.jsxs("ul",{className:s.list,children:[e.jsxs("li",{className:s.item,children:[e.jsx("h2",{className:s.title,children:t("step1")}),e.jsxs("div",{className:s.wrapper,children:[e.jsx("img",{className:s.icon,src:N,alt:"Library icon",width:"22",height:"17"}),e.jsxs("div",{className:s.content,children:[e.jsx("h3",{className:s.subTitle,children:t("title1")}),e.jsxs("div",{className:s.inner,children:[e.jsx("img",{className:s.arrow,src:b,alt:"down arrow",width:"10",height:"12"}),e.jsx("p",{className:s.text,children:t("description1")})]})]})]})]}),e.jsxs("li",{className:s.item,children:[e.jsx("h2",{className:s.title,children:t("step1")}),e.jsxs("div",{className:s.wrapper,children:[e.jsx("img",{className:s.icon,src:z,alt:"Flag icon",width:"15",height:"17"}),e.jsxs("div",{className:s.content,children:[e.jsx("h3",{className:s.subTitle,children:t("title2")}),e.jsxs("div",{className:s.inner,children:[e.jsx("img",{className:s.arrow,src:b,alt:"down arrow",width:"10",height:"12"}),e.jsx("p",{className:s.text,children:t("description2")})]})]})]})]})]}),e.jsx(L,{title:"Ok",onClick:()=>r()})]})},ae=()=>{const[r,t]=g.useState(!0),l=()=>{t(!1)};return e.jsxs("div",{className:`container ${h.pageContainer}`,children:[e.jsx(k,{to:"/home",className:h.backLink,children:e.jsx("img",{src:M,alt:"icon arrow back",width:"24",height:"12"})}),e.jsx(O,{}),r&&e.jsx(A,{close:l,className:"withoutBg",children:e.jsx(X,{close:l})})]})};export{ae as default};
