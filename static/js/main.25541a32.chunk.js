(this.webpackJsonpmylist=this.webpackJsonpmylist||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),s=n.n(i),r=(n(6),n(8)),a=n(5),o=n(0),j=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo_style",children:[Object(o.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(o.jsx)("li",{children:e.text})]})})},l=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),l=Object(a.a)(s,2),u=l[0],d=l[1],b=function(e){console.log("deleted"),d((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main_div",children:Object(o.jsxs)("div",{className:"center_div",children:[Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsx)("input",{type:"text",value:n,placeholder:"Add an item",onChange:function(e){i(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){d((function(e){return[].concat(Object(r.a)(e),[n])})),i("")},children:"+"}),Object(o.jsx)("ol",{children:u.map((function(e,t){return Object(o.jsx)(j,{id:t,text:e,onSelect:b},t)}))})]})})})};s.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))},6:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.25541a32.chunk.js.map