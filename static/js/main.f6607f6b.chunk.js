(this.webpackJsonptp2_dl=this.webpackJsonptp2_dl||[]).push([[0],{37:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(10),i=n.n(s),o=n(16),l=(n(37),n(5)),j=n(15),b=(n(38),n(11)),d=n(12),u=n(14),h=n(13),p=n(28),m=n(30),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={events:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new Request("https://node-event-service-dylanl.nn.r.appspot.com/events");fetch(t,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){var n=t;e.setState({events:n}),console.log(t)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(a.jsx)(p.a,{plugins:[m.a],initialView:"dayGridMonth",events:this.state.events})}}]),n}(r.Component),v=n(19),x=n(20),f=n(31),g=function(e){var t=e.name,n=e.label,r=e.error,c=Object(f.a)(e,["name","label","error"]);return Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:t,children:n}),Object(a.jsx)("input",Object(v.a)(Object(v.a)({},c),{},{name:t,id:t,type:"text",className:"form-control"})),r&&Object(a.jsx)("div",{className:"alert alert-danger",children:r})]})},N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){},e.validateProperty=function(t){var n=t.name,a=t.value;Object(x.a)({},n,a),Object(x.a)({},n,e.schema[n]);return""},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,a=Object(v.a)({},e.state.errors),r=e.validateProperty(n);r?a[n.name]=r:delete a[n.name];var c=Object(v.a)({},e.state.data);c[n.name]=n.value,e.setState({data:c,errors:a})},e}return Object(d.a)(n,[{key:"renderButton",value:function(e){return Object(a.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,c=r.data,s=r.errors;return Object(a.jsx)(g,{type:n,name:e,value:c[e],label:t,onChange:this.handleChange,error:s[e]})}}]),n}(r.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={},e.username=c.a.createRef(),e.doSubmit=function(){Object(j.b)("Inscription r\xe9ussie")},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Inscription"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Nom d'utilisateur"),this.renderInput("password","Mot de passe"),this.renderInput("name","Nom"),this.renderButton("Inscription")]})]})}}]),n}(N),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={},e.username=c.a.createRef(),e.doSubmit=function(){Object(j.b)("Connexion lanc\xe9e")},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Connexion"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Nom d'utilisateur"),this.renderInput("password","Mot de passe"),this.renderButton("Connexion")]})]})}}]),n}(N),w=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"f2 lh-copy lower-decoration",children:"\xc0 propos"}),Object(a.jsx)("p",{className:"bg-info",children:"Je suis un jeune \xe9tudiant fringant et souvent en retard. D\xe9sol\xe9! :)"}),Object(a.jsxs)("p",{className:"invisible",children:[Object(j.b)("Wow! Qui l'e\xfbt cr\xfb!"),Object(j.b)("En retard? Toi? Pas vrai!"),Object(j.b)("Niaises-moi pas!")]})]})},C=n(18),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(C.a,{children:[Object(a.jsxs)(C.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100",src:"https://picsum.photos/1080",alt:"Premi\xe8re diapositive"}),Object(a.jsxs)(C.a.Caption,{children:[Object(a.jsx)("h3",{children:"Premi\xe8re diapositive"}),Object(a.jsx)("p",{children:"Une belle image al\xe9atoire provenant de picsum.photos"})]})]}),Object(a.jsxs)(C.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100",src:"https://i.picsum.photos/id/693/1080/1080.jpg?hmac=G9mgjEXFTw3kpbgysKbi30yPCiGiXQtebQrW-27u9Uc",alt:"Seconde diapositive"}),Object(a.jsxs)(C.a.Caption,{children:[Object(a.jsx)("h3",{children:"Seconde diapositive"}),Object(a.jsx)("p",{children:"Quel magnifique pont!"})]})]}),Object(a.jsxs)(C.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100",src:"https://i.picsum.photos/id/804/1080/1080.jpg?hmac=QRMvcwAJSQ9vLf-cq7bm_x2J0jB5Asgc6U0h5eMUWkw",alt:"Troisi\xe8me diapositive"}),Object(a.jsxs)(C.a.Caption,{children:[Object(a.jsx)("h3",{children:"Troisi\xe8me diapositive"}),Object(a.jsx)("p",{children:"Grosse journ\xe9e..!"})]})]})]})}}]),n}(r.Component),S=function(){return Object(a.jsx)("h1",{children:"Page Introuvable"})},A=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/",children:"TP2"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Basculer la navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(a.jsxs)("div",{className:"navbar-nav",children:[Object(a.jsxs)(o.c,{className:"nav-link",to:"/home",children:["Accueil ",Object(a.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(a.jsx)(o.c,{className:"nav-link",to:"/calendar",children:"Calendrier"}),Object(a.jsx)(o.c,{className:"nav-link",to:"/login",children:"Connexion"}),Object(a.jsx)(o.c,{className:"nav-link",to:"/subscribe",children:"Inscription"}),Object(a.jsx)(o.c,{className:"nav-link",to:"/about",children:"\xc0 propos"})]})})]})};n(46);var P=function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(A,{}),Object(a.jsx)(j.a,{}),Object(a.jsx)("main",{className:"container",children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/home",component:I}),Object(a.jsx)(l.b,{path:"/calendar",component:O}),Object(a.jsx)(l.b,{path:"/subscribe",component:y}),Object(a.jsx)(l.b,{path:"/login",component:k}),Object(a.jsx)(l.b,{path:"/about",component:w}),Object(a.jsx)(l.b,{path:"/not-found",component:S}),Object(a.jsx)(l.a,{from:"/",exact:!0,to:"/home"}),Object(a.jsx)(l.a,{to:"/not-found"})]})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(47),n(48);i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),M()}},[[49,1,2]]]);
//# sourceMappingURL=main.f6607f6b.chunk.js.map