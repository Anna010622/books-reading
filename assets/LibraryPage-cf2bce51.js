import{j as e,L as p}from"./index-63d848f1.js";import{c as x,a as c,b as m,u as h,o as g}from"./index.esm-1c9ba6d6.js";const j="/books-reading/assets/arrow-back-8821ac10.svg",_="_pageContainer_earl2_1",N="_backLink_earl2_6",d={pageContainer:_,backLink:N},f="_btn_1if7t_1",k={btn:f},y=({title:r,onClick:t,type:a="button"})=>e.jsx("button",{className:k.btn,type:a,onClick:t,children:r}),q="_form_1xna6_1",L="_field_1xna6_36",v="_label_1xna6_41",M="_input_1xna6_48",$="_errorMessage_1xna6_64",s={form:q,field:L,label:v,input:M,errorMessage:$},w=x({bookTitle:c().required(),author:c().required(),year:m().typeError("Введіть рік видання").required().min(new Date("1917").getFullYear()).max(new Date().getFullYear()),pages:m().typeError("Введіть кількість сторінок").required()}).required(),C=()=>{var l,n,o,i;const{register:r,handleSubmit:t,formState:{errors:a}}=h({resolver:g(w)}),u=b=>console.log(b);return e.jsxs("form",{className:s.form,onSubmit:t(u),children:[e.jsxs("div",{className:s.field,children:[e.jsx("label",{className:s.label,children:"Назва книги"}),e.jsx("input",{className:s.input,type:"text",...r("bookTitle"),placeholder:"...",required:!0}),e.jsx("p",{className:s.errorMessage,children:(l=a.bookTitle)==null?void 0:l.message})]}),e.jsxs("div",{className:s.field,children:[e.jsx("label",{className:s.label,children:"Автор книги"}),e.jsx("input",{className:s.input,type:"text",...r("author"),placeholder:"...",required:!0}),e.jsx("p",{className:s.errorMessage,children:(n=a.author)==null?void 0:n.message})]}),e.jsxs("div",{className:s.field,children:[e.jsx("label",{className:s.label,children:"Рік видання"}),e.jsx("input",{className:s.input,type:"number",...r("year"),placeholder:"...",required:!0}),e.jsx("p",{className:s.errorMessage,children:(o=a.year)==null?void 0:o.message})]}),e.jsxs("div",{className:s.field,children:[e.jsx("label",{className:s.label,children:"Кількість сторінок"}),e.jsx("input",{className:s.input,type:"number",...r("pages"),placeholder:"...",required:!0}),e.jsx("p",{className:s.errorMessage,children:(i=a.pages)==null?void 0:i.message})]}),e.jsx(y,{title:"Додати"})]})},E=()=>e.jsxs("div",{className:`container ${d.pageContainer}`,children:[e.jsx(p,{to:"/home",className:d.backLink,children:e.jsx("img",{src:j,alt:"icon arrow back",width:"24",height:"12"})}),e.jsx(C,{})]});export{E as default};
