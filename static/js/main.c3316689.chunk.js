(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},13:function(t,e,n){t.exports={container:"Container_container__3RIox"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},23:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),o=n(12),i=n.n(o),s=(n(22),n(23),n(16)),l=n(5),u=n(6),b=n(8),m=n(7),h=n(3),d=n.n(h),j=n(13),f=n.n(j);var p=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:f.a.container,children:[e&&Object(a.jsx)("h2",{children:e}),n]})},C=n(11),O=n.n(C);var v=function(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("label",{className:O.a.label,children:["Find contact by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name for search",className:O.a.input})]})},x=n(14),g=n(15),_=n.n(g),y=n(2),F=n.n(y),S={name:"",number:""},N=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=S,t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(x.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){return t.setState(S)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:F.a.form,children:[Object(a.jsxs)("label",{className:F.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange,className:F.a.input})]}),Object(a.jsxs)("label",{className:F.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChange,className:F.a.input})]}),Object(a.jsx)("button",{type:"submit",className:F.a.button,children:"Add contact"})]})}}]),n}(r.Component);N.propTyper={onSubmit:_.a.func.isRequired};var w=N,L=n(9),D=n.n(L);var k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:D.a.list,children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsxs)("li",{className:D.a.item,children:[Object(a.jsxs)("p",{children:[r,": ",c]}),Object(a.jsx)("button",{type:"button",className:D.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},T=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:d.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:d.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:d.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:d.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,r={id:d.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("Contact is already exist"):n&&a?t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}})):alert("Some field is empty")},t.handleDeleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(p,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(w,{onSubmit:this.handleAddContact})]}),Object(a.jsxs)(p,{title:"Contacts",children:[Object(a.jsx)(v,{filter:e,onChange:this.handleChangeFilter}),Object(a.jsx)(k,{contacts:t,onDeleteContact:this.handleDeleteContact})]})]})}}]),n}(r.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),A()},9:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}}},[[34,1,2]]]);
//# sourceMappingURL=main.c3316689.chunk.js.map