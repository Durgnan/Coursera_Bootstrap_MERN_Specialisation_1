(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{147:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(99),t(20)),c=t(21),m=t(23),i=t(22),u=t(152),d=t(153),E=t(154),h=t(155),f=t(156),p=t(157),g=t(10),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},N="http://localhost:3001/";function v(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,a.name))))}var y=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(v,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},O=t(19),w=t(158),M=t(179),L=t(159),k=t(160),j=t(161),S=t(162),C=t(163),D=t(164),F=t(165),x=t(9),A=t(28),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},R=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}," Submit Comment")),r.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(L.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(k.a,null,r.a.createElement(x.LocalForm,{onSubmit:this.handleSubmit},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"rating",md:12},"Rating"),r.a.createElement(C.a,{md:{size:12}},r.a.createElement(x.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"author",md:12},"Your Name"),r.a.createElement(C.a,{md:12},r.a.createElement(x.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:I,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:T(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"comment",md:12},"Comment"),r.a.createElement(C.a,{md:12},r.a.createElement(x.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:5,className:"form-control"}))),r.a.createElement(w.a,{type:"submit",value:"submit",color:"primary"},"Submit")))));var e}}]),t}(n.Component);function _(e){var a=e.dish,t=e.comments,n=e.postComment;return null!=a?r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(D.a,null,r.a.createElement(h.a,null,a.name),r.a.createElement(F.a,null,a.description))))),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement(P,{comments:t}),r.a.createElement(R,{dishId:a.id,postComment:n})))):r.a.createElement("div",null)}function P(e){var a=e.comments;if(null!=a){var t=a.map((function(e){return r.a.createElement(A.Fade,{in:!0},r.a.createElement("div",{key:e.id},r.a.createElement(F.a,null,r.a.createElement("li",{className:"mt-3"},e.comment),r.a.createElement("li",{className:"mt-3"},"-- ",e.author," ,"," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))}));return r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(A.Stagger,{in:!0},t))}return r.a.createElement("div",null)}var q=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(_,{dish:e.dish,comments:e.comments,postComment:e.postComment}))):void 0},H=t(166),Y=t(167),G=t(168),W=t(169),B=t(170),U=t(171),K=t(172),z=t(173),J=t(174),Z=t(175),$=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleLogin=n.handleLogin.bind(Object(O.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(Y.a,{onClick:this.toggleNav}),r.a.createElement(G.a,{className:"mr-auto ",href:"/"},r.a.createElement("img",{src:"./assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(W.a,{navbar:!0,isOpen:this.state.isNavOpen},r.a.createElement(B.a,{navbar:!0},r.a.createElement(U.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}," Home"))),r.a.createElement(U.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}," About Us"))),r.a.createElement(U.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}," Menu"))),r.a.createElement(U.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"}," ","Contact Us")))),r.a.createElement(B.a,{className:"ml-auto",navbar:!0},r.a.createElement(U.a,null,r.a.createElement(w.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}," Login"))))))),r.a.createElement(K.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(L.a,{toggle:this.toggleModal},"Login"),r.a.createElement(k.a,null,r.a.createElement(z.a,{onSubmit:this.handleLogin},r.a.createElement(J.a,null,r.a.createElement(S.a,{htmlFor:"username"},"Username"),r.a.createElement(Z.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(J.a,null,r.a.createElement(S.a,{htmlFor:"password"},"Password"),r.a.createElement(Z.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(J.a,{check:!0},r.a.createElement(S.a,{check:!0},r.a.createElement(Z.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(w.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var Q=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},V=function(e){return e&&e.length},X=function(e){return function(a){return!a||a.length<=e}},ee=function(e){return function(a){return a&&a.length>=e}},ae=function(e){return!isNaN(Number(e))},te=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ne=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(x.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{md:2,htmlFor:"firstname"},"First Name"),r.a.createElement(C.a,{md:10},r.a.createElement(x.Control.text,{className:"form-control",model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",validators:{required:V,minLength:ee(3),maxLength:X(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{md:2,htmlFor:"lastname"},"Last Name"),r.a.createElement(C.a,{md:10},r.a.createElement(x.Control.text,{className:"form-control",model:".lastname",id:"lastname",name:"lastname",validators:{required:V,minLength:ee(3),maxLength:X(15)},placeholder:"Last Name"}),r.a.createElement(x.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{md:2,htmlFor:"telnum"},"Contact Tel."),r.a.createElement(C.a,{md:10},r.a.createElement(x.Control.text,{className:"form-control",model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",validators:{required:V,minLength:ee(3),maxLength:X(15),isNumber:ae}}),r.a.createElement(x.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{md:2,htmlFor:"email"},"Email"),r.a.createElement(C.a,{md:10},r.a.createElement(x.Control.text,{className:"form-control",model:".email",id:"email",name:"email",placeholder:"Email",validators:{required:V,validEmail:te}}),r.a.createElement(x.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(S.a,{check:!0},r.a.createElement(x.Control.checkbox,{className:"form-check-input",model:".agree",name:"agree"})," ",r.a.createElement("strong",null,"May we contact you ?")))),r.a.createElement(C.a,{md:{size:3,offset:1}},r.a.createElement(x.Control.select,{model:".contactType",className:"form-control",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{md:2,htmlFor:"feedback"},"Your Feedback"),r.a.createElement(C.a,{md:10},r.a.createElement(x.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{md:{size:10,offset:2}},r.a.createElement(w.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),re=t(176);function le(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:N+a.image,alt:a.name}),r.a.createElement(D.a,null,r.a.createElement(h.a,null,a.name),a.designation?r.a.createElement(re.a,null,a.designation):null,r.a.createElement(F.a,null,a.description))))}var se=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:" col-12 col-md m-1"},r.a.createElement(le,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:" col-12 col-md m-1"},r.a.createElement(le,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:" col-12 col-md m-1"},r.a.createElement(le,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},oe=t(177),ce=t(178);function me(e){var a=e.leader;return r.a.createElement(A.Fade,{in:!0,key:a.id},r.a.createElement("div",{className:"col-12 mt-5",key:a.id},r.a.createElement(oe.a,{tag:"li"},r.a.createElement(oe.a,{left:!0,middle:!0},r.a.createElement(oe.a,{object:!0,src:N+a.image,alt:a.name})),r.a.createElement(oe.a,{body:!0,className:"ml-5"},r.a.createElement(oe.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description)))))}var ie=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement(me,{leader:e})}));return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.leaders.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(ce.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(D.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(D.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(oe.a,{list:!0},r.a.createElement(A.Stagger,{in:!0},a)))))},ue=t(11),de=t(26),Ee=function(){return{type:"DISHES_LOADING"}},he=function(e){return{type:"DISHES_FAILED",payload:e}},fe=function(e){return{type:"ADD_DISHES",payload:e}},pe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ge=function(e){return{type:"ADD_COMMENTS",payload:e}},be=function(){return{type:"PROMOS_LOADING"}},Ne=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOS",payload:e}},ye=function(){return{type:"LEADERS_LOADING"}},Oe=function(e){return{type:"LEADERS_FAILED",payload:e}},we=function(e){return{type:"ADD_LEADERS",payload:e}},Me=t(56),Le=t(88),ke=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(Me.a,null,r.a.createElement(Le.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ue.d,{location:this.props.location},r.a.createElement(ue.b,{path:"/home",component:function(){return r.a.createElement(se,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(ue.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(ie,{leaders:e.props.leaders})}}),r.a.createElement(ue.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(ue.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(q,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ue.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(ne,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ue.a,{to:"/home"})))),r.a.createElement(Q,null))}}]),t}(n.Component),je=Object(ue.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},postFeedback:function(a,t,n,r,l,s,o){return e(function(e,a,t,n,r,l,s){return function(o){var c={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(N+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your feedback!"+JSON.stringify(e))})).catch((function(e){console.log("Post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,s,o))},fetchDishes:function(){e((function(e){return e(Ee(!0)),fetch(N+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(fe(a))})).catch((function(a){return e(he(a.message))}))}))},fetchComments:function(){e((function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchPromos:function(){e((function(e){return e(be(!0)),fetch(N+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchLeaders:function(){e((function(e){return e(ye(!0)),fetch(N+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(Oe(a.message))}))}))},resetFeedbackForm:function(){e(x.actions.reset("feedback"))}}}))(ke)),Se=(t(147),t(7)),Ce=t(27),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Se.a)(Object(Se.a)({},e),{},{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(Se.a)(Object(Se.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload,leaders:[]});default:return e}},Ie=t(91),Te=t(92),Re=t.n(Te),_e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Pe=Object(Ce.createStore)(Object(Ce.combineReducers)(Object(Se.a)({dishes:De,comments:Fe,promotions:xe,leaders:Ae},Object(x.createForms)({feedback:_e}))),Object(Ce.applyMiddleware)(Ie.a,Re.a)),qe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:Pe},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(je,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(148),t(149),t(150);s.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,t){e.exports=t(151)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.a88b11e0.chunk.js.map