(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contacts:"ContactList_contacts__XF5Y1",item:"ContactList_item__3Ra5l",btn:"ContactList_btn__YiM6x",notification:"ContactList_notification__2XW10"}},,,,,,function(t,e,n){t.exports={form:"ContactForm_form__1UdpW",btn:"ContactForm_btn__27-3Q"}},,,function(t,e,n){t.exports={container:"Section_container__2NXhU",title:"Section_title__14ePD"}},function(t,e,n){t.exports={title:"PageTitle_title__3rP7L"}},function(t,e,n){t.exports={title:"Title_title__1pBcd"}},,function(t,e,n){t.exports={filter:"Filter_filter__1giyT"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(10),r=n.n(i),s=n(9),o=n(3),l=n(4),u=n(6),b=n(5),d=n(11),f=n.n(d),j=n(0),m=function(t){var e=t.children;return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:f.a.container,children:e})})},h=n(12),p=n.n(h),O=function(t){var e=t.title;return Object(j.jsx)("h1",{className:p.a.title,children:e})};O.defaultProps={title:""};var x=O,v=n(13),_=n.n(v),C=function(t){var e=t.title;return e&&Object(j.jsx)("h2",{className:_.a.title,children:e})};C.defaultProps={title:""};var g=C,y=n(14),N=n(25),S=n(8),k=n.n(S),w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(y.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=Object(N.a)(),a=t.state,c=a.name,i=a.number;if(c){var r={id:n,name:c,number:i};t.props.submitHandler(r),t.reset()}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:k.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(j.jsx)("button",{type:"submit",className:k.a.btn,children:"Add"})]})}}]),n}(a.Component),L=n(15),D=n.n(L),P=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(j.jsx)("div",{className:D.a.filter,children:Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,autoComplete:"off",required:!0})]})})};P.defaultProps={filterValue:""};var U=P,F=n(2),I=n.n(F),T=function(t){var e=t.filtered,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:I.a.contacts,children:e.length?e.map((function(t){return Object(j.jsxs)("li",{className:I.a.item,children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[t.name,":"]}),Object(j.jsx)("p",{children:t.number})]}),Object(j.jsx)("button",{className:I.a.btn,onClick:function(){n(t.id)},children:"Delete"})]},t.id)})):Object(j.jsx)("li",{className:I.a.notification,children:"No contact found"})})},A=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.submitHandler=function(e){var n=t.state.contacts,a=n.find((function(t){return t.name===e.name}));a?alert("".concat(a.name," is already in contacts.")):t.setState({contacts:[e].concat(Object(s.a)(n))})},t.filterUpdate=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:Object(s.a)(e)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){var n=e.name,a=e.number;return n.toLowerCase().includes(t.state.filter.toLocaleLowerCase())||a.includes(t.state.filter)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{title:"Phone Book"}),Object(j.jsxs)(m,{children:[Object(j.jsx)(g,{title:"Add contacts"}),Object(j.jsx)(w,{submitHandler:this.submitHandler}),Object(j.jsx)(g,{title:"\u0421ontacts"}),Object(j.jsx)(U,{filterValue:this.state.filter,filterUpdate:this.filterUpdate}),Object(j.jsx)(T,{filtered:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(21),n(22);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.10bd3fda.chunk.js.map