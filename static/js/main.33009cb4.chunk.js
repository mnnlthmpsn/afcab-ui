(this.webpackJsonpsfp=this.webpackJsonpsfp||[]).push([[0],{96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(28),a=c.n(n),o=c(26),l=c(11),i=c(8),d=c(4),j=c.n(d),u=c(7),b=c(10),h=c(100),x=c(20),O=c.n(x),p="http://localhost:1337",m=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(p,"/auth/local"),{identifier:t.email,password:t.password});case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(p,"/users/me"),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),v=c.p+"static/media/edu.7bf55f5f.jpg",g=c(1),w=function(){var e=Object(l.g)(),t=Object(s.useState)(!1),c=Object(b.a)(t,2),r=c[0],n=c[1],a=Object(s.useState)({email:"",password:""}),o=Object(b.a)(a,2),d=o[0],x=o[1],O=function(){var t=Object(u.a)(j.a.mark((function t(c){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.prev=1,c.preventDefault(),t.next=5,m(d);case 5:s=t.sent,sessionStorage.setItem("auth",!0),sessionStorage.setItem("uri",s.data.jwt),e.replace("/dashboard"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),h.b.error(t.t0.message),n(!1);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{class:"container vh-100",children:Object(g.jsx)("div",{class:"row align-items-center justify-content-center vh-100",children:Object(g.jsx)("div",{class:"col-md-9 col-lg-12 col-xl-10",children:Object(g.jsx)("div",{class:"card shadow-lg o-hidden border-0 my-5",children:Object(g.jsx)("div",{class:"card-body p-0",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-lg-6 d-none d-lg-flex",children:Object(g.jsx)("div",{class:"flex-grow-1 bg-login-image",style:{backgroundImage:"url(".concat(v,")"),backgroundSize:"cover"}})}),Object(g.jsx)("div",{class:"col-lg-6",children:Object(g.jsxs)("div",{class:"p-5",children:[Object(g.jsx)("div",{class:"text-center",children:Object(g.jsx)("h4",{class:"text-dark mb-4",children:"Welcome Back!"})}),Object(g.jsxs)("form",{class:"user",onSubmit:O,children:[Object(g.jsx)("div",{class:"form-group",children:Object(g.jsx)("input",{type:"email",onChange:function(e){return x(Object(i.a)(Object(i.a)({},d),{},{email:e.target.value}))},class:"form-control form-control-user",placeholder:"Enter Email Address...",required:!0})}),Object(g.jsx)("div",{class:"form-group",children:Object(g.jsx)("input",{type:"password",onChange:function(e){return x(Object(i.a)(Object(i.a)({},d),{},{password:e.target.value}))},class:"form-control form-control-user",placeholder:"Password",required:!0})}),Object(g.jsx)("button",{class:"btn btn-primary w-100",type:"submit",disabled:r,children:r?Object(g.jsx)("span",{class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}):"Login"}),Object(g.jsx)("hr",{})]}),Object(g.jsx)("div",{class:"text-center",children:Object(g.jsx)("a",{class:"small",href:"forgot-password.html",children:"Forgot Password?"})}),Object(g.jsx)("div",{class:"text-center",children:Object(g.jsx)("a",{class:"small",href:"register.html",children:"Create an Account!"})})]})})]})})})})})})},y=Object(s.createContext)(),C=function(e){var t=Object(s.useState)(!1),c=Object(b.a)(t,2),r=c[0],n=c[1];return Object(g.jsx)(y.Provider,{value:{refreshData:r,set_refreshData:function(e){n(e)}},children:e.children})},S="http://localhost:1337",k=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(S,"/courses"),t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(S,"/courses"),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.put("".concat(S,"/courses/").concat(c),t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,c){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(S,"/course-selections?student=").concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,c),e.prev=1,e.next=4,O.a.post("".concat(S,"/course-selections"),{student:c,course:t},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),e.t0;case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,c){return e.apply(this,arguments)}}(),I=function(e){window.$("#".concat(e)).modal("hide")},M=new Intl.NumberFormat("en-US",{style:"currency",currency:"GHC"}),B=function(){var e=Object(s.useContext)(y),t=e.refreshData,c=e.set_refreshData,r=Object(s.useState)({title:"",description:"",fee:0}),n=Object(b.a)(r,2),a=n[0],o=n[1],l=function(){var e=Object(u.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,I("courseModal"),e.next=5,k(a);case 5:c(!t),h.b.success("".concat(a.title," added successfully")),o({title:"",description:"",fee:0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h.b.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{class:"modal fade",role:"dialog",tabIndex:"-1",id:"courseModal",children:Object(g.jsx)("div",{class:"modal-dialog",role:"document",children:Object(g.jsxs)("div",{class:"modal-content",children:[Object(g.jsxs)("div",{class:"modal-header",children:[Object(g.jsx)("h4",{class:"modal-title",children:"Add Course"}),Object(g.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(g.jsx)("div",{class:"modal-body",children:Object(g.jsxs)("form",{onSubmit:l,children:[Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Course Title"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"text",value:a.title,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{title:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Fee (GHc)"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"number",value:a.fee,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{fee:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{class:"form-control",value:a.description,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{description:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"modal-footer",children:[Object(g.jsx)("button",{class:"btn btn-sm btn-light",type:"button","data-dismiss":"modal",children:"Close"}),Object(g.jsx)("button",{class:"btn btn-sm btn-primary",type:"submit",children:"Add Course"})]})]})})]})})})},z=c.p+"static/media/profile.5faf09a7.png",F=function(){var e=Object(l.g)(),t=Object(s.useContext)(y).refreshData,c=Object(s.useState)(""),r=Object(b.a)(c,2),n=r[0],a=r[1],o=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Cannot get User");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[t]),Object(g.jsx)("nav",{class:"navbar navbar-light navbar-expand bg-white shadow-sm mb-4 topbar static-top",children:Object(g.jsxs)("div",{class:"container-fluid",children:[Object(g.jsx)("button",{class:"btn btn-link d-md-none rounded-circle mr-3",id:"sidebarToggleTop",type:"button",children:Object(g.jsx)("i",{class:"fas fa-bars"})}),Object(g.jsx)("form",{class:"form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(g.jsxs)("div",{class:"input-group",children:[Object(g.jsx)("input",{class:"bg-light form-control border-0 small",type:"text",placeholder:"Search for ..."}),Object(g.jsx)("div",{class:"input-group-append",children:Object(g.jsx)("button",{class:"btn btn-primary py-0",type:"button",children:Object(g.jsx)("i",{class:"fas fa-search"})})})]})}),Object(g.jsx)("ul",{class:"navbar-nav flex-nowrap ml-auto",children:Object(g.jsx)("li",{class:"nav-item dropdown no-arrow",children:Object(g.jsxs)("div",{class:"nav-item dropdown no-arrow",children:[Object(g.jsxs)("a",{class:"dropdown-toggle nav-link","aria-expanded":"false","data-toggle":"dropdown",href:"#",children:[Object(g.jsx)("span",{class:"d-none d-lg-inline mr-2 text-gray-600 small",children:n.email}),Object(g.jsx)("img",{class:"border rounded-circle img-profile",width:"30",src:z})]}),Object(g.jsxs)("div",{class:"dropdown-menu shadow dropdown-menu-right animated--grow-in",children:[Object(g.jsxs)("a",{class:"dropdown-item",href:"#",children:[Object(g.jsx)("i",{class:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Profile"]}),Object(g.jsxs)("a",{class:"dropdown-item",href:"#",children:[Object(g.jsx)("i",{class:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Settings"]}),Object(g.jsxs)("a",{class:"dropdown-item",href:"#",children:[Object(g.jsx)("i",{class:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Activity log"]}),Object(g.jsx)("div",{class:"dropdown-divider"}),Object(g.jsxs)("p",{class:"dropdown-item",role:"button",onClick:function(t){return sessionStorage.clear(),void e.replace("/")},children:[Object(g.jsx)("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Logout"]})]})]})})})]})})},G=function(){var e=Object(l.h)();return Object(g.jsx)("div",{class:"container",children:Object(g.jsx)("div",{class:"row mb-3",children:Object(g.jsx)("div",{class:"col d-flex justify-content-end",children:Object(g.jsxs)("div",{role:"group",children:["/dashboard"!==e.pathname&&Object(g.jsx)(o.b,{to:"/dashboard",children:Object(g.jsxs)("button",{class:"btn btn-outline-primary btn-sm mr-1",type:"button",children:["Home",Object(g.jsx)("i",{class:"fas fa-home pl-2"})]})}),"/courses"!==e.pathname&&Object(g.jsx)(o.b,{to:"/courses",children:Object(g.jsxs)("button",{class:"btn btn-outline-primary btn-sm mr-1",type:"button",children:["View All Courses",Object(g.jsx)("i",{class:"fas fa-eye pl-2"})]})})]})})})})},P="http://localhost:1337",T=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(P,"/students"),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(P,"/students"),t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.useContext)(y),t=e.refreshData,c=e.set_refreshData,r=Object(s.useState)({firstname:"",lastname:"",other_names:"",phone:"",gender:""}),n=Object(b.a)(r,2),a=n[0],o=n[1],l=function(){var e=Object(u.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,I("studentModal"),e.next=5,N(a);case 5:c(!t),h.b.success("".concat(a.firstname," ").concat(a.other_names," ").concat(a.lastname," added successfully")),o({firstname:"",lastname:"",other_names:"",phone:"",gender:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h.b.error(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{class:"modal fade",role:"dialog",tabindex:"-1",id:"studentModal",children:Object(g.jsx)("div",{class:"modal-dialog",role:"document",children:Object(g.jsxs)("div",{class:"modal-content",children:[Object(g.jsxs)("div",{class:"modal-header",children:[Object(g.jsx)("h4",{class:"modal-title",children:"Enroll Student"}),Object(g.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(g.jsx)("div",{class:"modal-body",children:Object(g.jsxs)("form",{onSubmit:l,children:[Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Firstname"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"text",value:a.firstname,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{firstname:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Lastname"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"text",value:a.lastname,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{lastname:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Other Names"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"text",value:a.other_names,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{other_names:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Gender"}),Object(g.jsxs)("select",{class:"form-control",required:!0,value:a.gender,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{gender:e.target.value}))},children:[Object(g.jsx)("option",{children:"Gender"}),Object(g.jsx)("option",{value:"male",children:"Male"}),Object(g.jsx)("option",{value:"female",children:"Female"})]})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Phone"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"tel",value:a.phone,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{phone:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"modal-footer",children:[Object(g.jsx)("button",{class:"btn btn-sm btn-light",type:"button","data-dismiss":"modal",children:"Close"}),Object(g.jsx)("button",{class:"btn btn-sm btn-primary",type:"submit",children:"Enroll Student"})]})]})})]})})})},L=Object(s.createContext)(),U=function(e){var t=Object(s.useState)({}),c=Object(b.a)(t,2),r=c[0],n=c[1];return Object(g.jsx)(L.Provider,{value:{currentCourse:r,set_currentCourse:function(e){n(e)}},children:e.children})},V=function(){var e=Object(s.useContext)(y),t=e.refreshData,c=e.set_refreshData,r=Object(s.useContext)(L).currentCourse,n=Object(s.useState)({course_id:"",title:"",description:"",fee:0}),a=Object(b.a)(n,2),o=a[0],l=a[1],d=function(){var e=Object(u.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,I("editCourseModal"),e.next=5,A(o,r.id);case 5:c(!t),h.b.success("Update successful"),l({title:"",description:"",fee:0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h.b.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{class:"modal fade",role:"dialog",tabIndex:"-1",id:"editCourseModal",children:Object(g.jsx)("div",{class:"modal-dialog",role:"document",children:Object(g.jsxs)("div",{class:"modal-content",children:[Object(g.jsxs)("div",{class:"modal-header",children:[Object(g.jsx)("h4",{class:"modal-title",children:"Edit Course"}),Object(g.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(g.jsx)("div",{class:"modal-body",children:Object(g.jsxs)("form",{onSubmit:d,children:[Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Course Title"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"text",defaultValue:r.title,onChange:function(e){return l(Object(i.a)(Object(i.a)({},o),{},{title:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Fee (GHc)"}),Object(g.jsx)("input",{class:"form-control form-control-sm",type:"number",defaultValue:r.fee,onChange:function(e){return l(Object(i.a)(Object(i.a)({},o),{},{fee:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"form-group",children:[Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{class:"form-control",defaultValue:r.description,onChange:function(e){return l(Object(i.a)(Object(i.a)({},o),{},{description:e.target.value}))}})]}),Object(g.jsxs)("div",{class:"modal-footer",children:[Object(g.jsx)("button",{class:"btn btn-sm btn-light",type:"button","data-dismiss":"modal",children:"Close"}),Object(g.jsx)("button",{class:"btn btn-sm btn-primary",type:"submit",children:"Update Course"})]})]})})]})})})},q=function(){var e=Object(s.useContext)(y),t=e.refreshData,c=e.set_refreshData,r=Object(s.useContext)(L).currentCourse,n=Object(s.useState)(!1),a=Object(b.a)(n,2),o=a[0],l=a[1],i=Object(s.useState)([]),d=Object(b.a)(i,2),x=d[0],O=d[1],p=Object(s.useState)(""),m=Object(b.a)(p,2),f=m[0],v=m[1],w=function(){var e=Object(u.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,I("studentCourseModal"),e.next=5,_(r.id,f);case 5:c(!t),h.b.success("Student Enrolled successfully"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),h.b.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,T();case 4:t=e.sent,O(t.data),l(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){C()}),[t]),Object(g.jsx)("div",{class:"modal fade",role:"dialog",tabIndex:"-1",id:"studentCourseModal",children:Object(g.jsx)("div",{class:"modal-dialog",role:"document",children:Object(g.jsxs)("div",{class:"modal-content",children:[Object(g.jsxs)("div",{class:"modal-header",children:[Object(g.jsxs)("h4",{class:"modal-title",children:["Enroll Student to ",r.title," "]}),Object(g.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(g.jsxs)("div",{class:"modal-body",children:[o&&Object(g.jsx)("p",{children:"...loading"}),Object(g.jsxs)("form",{onSubmit:w,children:[Object(g.jsx)("div",{class:"form-group",children:Object(g.jsxs)("select",{onChange:function(e){return v(e.target.value)},class:"form-control",children:[Object(g.jsx)("option",{children:"Select Student to Enroll"}),x&&x.map((function(e){return Object(g.jsx)("option",{value:e.id,children:"".concat(e.firstname," ").concat(e.other_names," ").concat(e.lastname)},e.id)}))]})}),Object(g.jsxs)("div",{class:"modal-footer",children:[Object(g.jsx)("button",{class:"btn btn-sm btn-light",type:"button","data-dismiss":"modal",children:"Close"}),Object(g.jsx)("button",{class:"btn btn-sm btn-primary",type:"submit",children:"Enroll Student"})]})]})]})]})})})},J=function(e){return Object(g.jsxs)("div",{id:"wrapper",children:[Object(g.jsx)("div",{class:"d-flex flex-column",id:"content-wrapper",children:Object(g.jsxs)("div",{id:"content",style:{background:"white"},children:[Object(g.jsx)(F,{}),Object(g.jsx)(G,{}),Object(g.jsx)("div",{class:"container",children:Object(g.jsx)("div",{class:"row",children:Object(g.jsx)("div",{class:"col",children:Object(g.jsxs)("div",{class:"card shadow mb-5",children:[Object(g.jsx)("div",{class:"card-header py-3",children:Object(g.jsxs)("div",{class:"row justify-content-between mx-5",children:[Object(g.jsx)("p",{class:"text-primary m-0 font-weight-bold",children:e.title}),e.button]})}),Object(g.jsx)("div",{class:"card-body",children:e.children})]})})})})]})}),Object(g.jsx)(B,{}),Object(g.jsx)(H,{}),Object(g.jsx)(V,{}),Object(g.jsx)(q,{})]})},R=function(){var e=Object(s.useContext)(y).refreshData,t=Object(s.useState)([]),c=Object(b.a)(t,2),r=c[0],n=c[1],a=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h.b.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[e]),Object(g.jsx)(J,{title:"Students",button:Object(g.jsxs)("button",{class:"btn btn-outline-primary btn-sm mr-1",type:"button","data-toggle":"modal","data-target":"#studentModal",children:["Enroll Student",Object(g.jsx)("i",{class:"fas fa-user-plus pl-2"})]}),children:Object(g.jsx)("div",{class:"table-responsive table mt-2",id:"dataTable",role:"grid","aria-describedby":"dataTable_info",children:Object(g.jsxs)("table",{class:"table my-0",id:"dataTable",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Firstname"}),Object(g.jsx)("th",{children:"Other Names"}),Object(g.jsx)("th",{children:"Lastname"}),Object(g.jsx)("th",{children:"Gender"}),Object(g.jsx)("th",{children:"Phone"}),Object(g.jsx)("th",{children:"Account"})]})}),Object(g.jsx)("tbody",{children:r.length?r.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)("img",{class:"rounded-circle mr-2",width:"30",height:"30",src:z}),e.firstname]}),Object(g.jsx)("td",{children:e.other_names}),Object(g.jsx)("td",{children:e.lastname}),Object(g.jsx)("td",{children:e.gender}),Object(g.jsx)("td",{children:e.phone}),Object(g.jsx)("td",{children:Object(g.jsx)(o.b,{to:"/account/".concat(e.account.id),children:Object(g.jsx)("button",{class:"btn btn-outline-primary btn-sm",type:"button",children:"Account Details"})})})]},e.id)})):Object(g.jsx)("tr",{children:Object(g.jsx)("td",{colSpan:"6",children:Object(g.jsx)("p",{class:"lead text-center mt-5",children:"Enroll a Student to view their details"})})})}),Object(g.jsx)("tfoot",{children:Object(g.jsx)("tr",{})})]})})})},W=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://localhost:1337","/accounts/").concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("uri"))}});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e,t,c,r=Object(l.i)().id,n=Object(s.useContext)(y).refreshData,a=Object(s.useState)({}),o=Object(b.a)(a,2),i=o[0],d=o[1],x=Object(s.useState)([]),O=Object(b.a)(x,2),p=O[0],m=O[1],f=Object(s.useState)(!1),v=Object(b.a)(f,2),w=v[0],C=v[1],S=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,W(r);case 4:t=e.sent,d(t.data),k(t.data.student.id),C(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),C(!1),h.b.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(t);case 3:c=e.sent,console.log(c.data),m(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){S(),k()}),[n]),Object(g.jsxs)(J,{title:"Account Details",children:[Object(g.jsxs)("div",{class:"container",children:[Object(g.jsx)("div",{class:"row justify-content-between mx-5",children:w?Object(g.jsx)("p",{class:"text-center",children:"...Loading"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{class:"text-uppercase text-secondary",children:["Account Name:",Object(g.jsx)("span",{class:"text-dark",children:"".concat(null===(e=i.student)||void 0===e?void 0:e.firstname," ").concat(null===(t=i.student)||void 0===t?void 0:t.other_names," ").concat(null===(c=i.student)||void 0===c?void 0:c.lastname)})]}),Object(g.jsxs)("p",{class:"text-uppercase text-secondary",children:["Amount Due: ",Object(g.jsx)("span",{class:"text-dark",children:M.format(i.amt_due)})]})]})}),Object(g.jsx)("hr",{class:"w-100"})]}),Object(g.jsx)("div",{class:"mx-5",children:Object(g.jsx)("p",{class:"lead",children:"Enrolled Courses"})}),Object(g.jsxs)("table",{class:"table mb-5",children:[Object(g.jsx)("thead",{class:"thead-light",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{style:{width:"5%"},children:"#"}),Object(g.jsx)("th",{scope:"col-3",children:"Date Enrolled"}),Object(g.jsx)("th",{style:{width:"25%"},children:"Course"}),Object(g.jsx)("th",{style:{width:"25%"},children:"Fee"}),Object(g.jsx)("th",{children:"Action"})]})}),Object(g.jsx)("tbody",{children:p.length?p.map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"row",children:t+1}),Object(g.jsx)("td",{children:e.created_at}),Object(g.jsx)("td",{children:e.course.title}),Object(g.jsx)("td",{children:M.format(e.course.fee)}),Object(g.jsx)("td",{children:Object(g.jsxs)("button",{class:"btn btn-primary btn-sm mr-1",type:"button","data-toggle":"modal","data-target":"#",children:["Make Payment",Object(g.jsx)("i",{class:"fas fa-money-bill-wave-alt pl-2"})]})})]},e.id)})):Object(g.jsx)("td",{colSpan:4,children:Object(g.jsx)("p",{class:"text-center lead",children:"Student Not enrolled in any course"})})})]}),Object(g.jsx)("hr",{class:"w-100 mb-5"}),Object(g.jsx)("div",{class:"mx-5",children:Object(g.jsx)("p",{class:"lead",children:"Transactions"})}),Object(g.jsxs)("table",{class:"table",children:[Object(g.jsx)("thead",{class:"thead-dark",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{style:{width:"5%"},children:"#"}),Object(g.jsx)("th",{scope:"col-3",children:"Date"}),Object(g.jsx)("th",{style:{width:"25%"},children:"Amount Paid"}),Object(g.jsx)("th",{style:{width:"25%"},children:"Amount Left"}),Object(g.jsx)("th",{class:"text-center",children:"Action"})]})}),Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"row",children:"1"}),Object(g.jsx)("td",{children:"Date here"}),Object(g.jsx)("td",{children:"GHc 1,000"}),Object(g.jsx)("td",{children:"GHc 1,000"}),Object(g.jsx)("td",{class:"row justify-content-center",children:Object(g.jsxs)("button",{class:"btn btn-sm btn-success",children:[Object(g.jsx)("i",{class:"fas fa-download"})," Generate Receipt"]})})]})})]}),Object(g.jsx)("div",{class:"card-footer",children:Object(g.jsxs)("div",{class:"row justify-content-end",children:[Object(g.jsxs)("button",{class:"btn btn-outline-primary btn-sm mr-1",type:"button","data-toggle":"modal","data-target":"#",children:["Edit Student",Object(g.jsx)("i",{class:"fas fa-edit pl-2"})]}),Object(g.jsxs)("button",{class:"btn btn-danger btn-sm mr-1",type:"button","data-toggle":"modal","data-target":"#",children:["Delete Student",Object(g.jsx)("i",{class:"fas fa-trash pl-2"})]})]})})]})},K=c(67),Q=function(e){var t=e.component,c=Object(K.a)(e,["component"]);return Object(g.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){return!0===JSON.parse(sessionStorage.getItem("auth"))?Object(g.jsx)(t,Object(i.a)({},e)):Object(g.jsx)(l.a,{to:"/"})}}))},X=c(27),Y=c.p+"static/media/course.75e731a6.jpg",Z=function(){var e=Object(s.useContext)(y).refreshData,t=Object(s.useState)([]),c=Object(b.a)(t,2),r=c[0],n=c[1],a=Object(s.useContext)(L).set_currentCourse,o=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h.b.error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(e){a(e)};return Object(s.useEffect)((function(){o()}),[e]),Object(g.jsx)(J,{title:"Courses",button:Object(g.jsxs)("button",{class:"btn btn-outline-primary btn-sm mr-1",type:"button","data-toggle":"modal","data-target":"#courseModal",children:["Add Course",Object(g.jsx)("i",{class:"fas fa-book-medical pl-2"})]}),children:Object(g.jsx)("div",{class:"container",children:Object(g.jsx)("div",{class:"row",children:r.length?r.map((function(e){var t,c;return Object(g.jsx)("div",{class:"col col-12 col-md-6 col-lg-3 mb-2",children:Object(g.jsxs)("div",{class:"card h-100",children:[Object(g.jsx)("img",{src:Y,class:"card-img-top",alt:"..."}),Object(g.jsxs)("div",{class:"card-body",children:[Object(g.jsx)("h5",{class:"card-title text-uppercase h6",children:e.title}),Object(g.jsx)("p",{class:"card-text text-secondary",children:e.description}),Object(g.jsxs)("p",{children:["Fee: ",Object(g.jsx)("span",{class:"lead text-secondary",children:M.format(e.fee)})]})]}),Object(g.jsx)("div",{class:"card-footer",children:Object(g.jsxs)("div",{class:"row justify-content-center",children:[Object(g.jsx)("button",(t={role:"button",class:"btn btn-sm btn-primary","data-toggle":"tooltip","data-placement":"bottom",title:"Edit Course",onClick:function(){return l(e)}},Object(X.a)(t,"data-toggle","modal"),Object(X.a)(t,"data-target","#editCourseModal"),Object(X.a)(t,"children",Object(g.jsx)("i",{role:"button",class:"fas fa-edit"})),t)),Object(g.jsx)("button",{role:"button",class:"btn btn-sm btn-info ml-1","data-toggle":"tooltip","data-placement":"bottom",title:"Course details",children:Object(g.jsx)("i",{role:"button",class:"fas fa-eye"})}),Object(g.jsx)("button",(c={role:"button",class:"btn btn-sm btn-warning ml-1","data-toggle":"tooltip","data-placement":"bottom",title:"Add Student to Course"},Object(X.a)(c,"data-toggle","modal"),Object(X.a)(c,"data-target","#studentCourseModal"),Object(X.a)(c,"onClick",(function(){return l(e)})),Object(X.a)(c,"children",Object(g.jsx)("i",{role:"button",class:"fas fa-plus"})),c)),Object(g.jsx)("button",{role:"button",class:"btn btn-sm btn-danger ml-1","data-toggle":"tooltip","data-placement":"bottom",title:"Delete Course",children:Object(g.jsx)("i",{role:"button",class:"fas fa-trash"})})]})})]})},e.id)})):Object(g.jsx)("p",{class:"lead text-center",children:"No Courses"})})})})},ee=function(){return Object(g.jsx)(o.a,{basename:"/afcab-ui",children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/",component:w,exact:!0}),Object(g.jsx)(Q,{path:"/account/:id",component:$}),Object(g.jsx)(Q,{path:"/courses",component:Z}),Object(g.jsx)(Q,{path:"/dashboard",component:R})]})})};c(95),c(96),c(97);a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(C,{children:Object(g.jsx)(U,{children:Object(g.jsx)(ee,{})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.33009cb4.chunk.js.map