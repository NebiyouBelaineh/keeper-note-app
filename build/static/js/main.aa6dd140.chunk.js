(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{68:function(e,t,n){e.exports=n(83)},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(21),c=n.n(r),o=n(57),u=n.n(o);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null),"Keeper"))};var m=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},s=n(59),E=n.n(s);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(E.a,null)))},f=n(60),d=n.n(f),v=n(117),h=n(118);var k=function(e){const[t,n]=Object(a.useState)({title:"",content:""}),[r,c]=Object(a.useState)(!1),o=Object(a.useRef)(null);function u(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))}return l.a.createElement("div",null,l.a.createElement("form",{onClick:()=>c(!0),className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:u,value:t.title,placeholder:"Title",ref:o}),l.a.createElement("textarea",{name:"content",onChange:u,value:t.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(h.a,{in:r},l.a.createElement(v.a,{type:"submit",onClick:function(a){e.onAdd(t),n({title:"",content:""}),a.preventDefault()}},l.a.createElement(d.a,null)))))};var b=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(k,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),l.a.createElement(m,null))};n(81);c.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.aa6dd140.chunk.js.map