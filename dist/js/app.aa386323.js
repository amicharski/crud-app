(function(e){function r(r){for(var n,s,l=r[0],u=r[1],c=r[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(r);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(n=!1)}n&&(a.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},o={app:0},a=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var i=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),o=t("cf05"),a=t.n(o),s={id:"app"},l=Object(n["e"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1),u=Object(n["f"])("Home"),c=Object(n["f"])(" | "),i=Object(n["f"])("Login");function d(e,r,t,o,a,d){var p=Object(n["t"])("router-link"),b=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])("div",s,[Object(n["e"])("nav",null,[l,Object(n["g"])(p,{to:{name:"Home"}},{default:Object(n["A"])((function(){return[u]})),_:1}),c,e.loggedIn?(Object(n["p"])(),Object(n["d"])("button",{key:1,onClick:r[0]||(r[0]=function(){return d.logout&&d.logout.apply(d,arguments)})},"Logout")):(Object(n["p"])(),Object(n["c"])(p,{key:0,to:{name:"Login"}},{default:Object(n["A"])((function(){return[i]})),_:1})),Object(n["g"])(b)])])}var p=t("5530"),b=t("5502"),m=Object(p["a"])({},Object(b["b"])(["loggedIn"])),O={name:"App",computed:Object(p["a"])({},m),methods:{logout:function(){this.$store.dispatch("logout")}}},g=t("6b0d"),f=t.n(g);const j=f()(O,[["render",d]]);var h=j,v=t("6c02"),w={id:"home"},y=Object(n["e"])("h1",null,"Profrec",-1),E=Object(n["e"])("p",null,"A platform for recreational sports like no other",-1),M=[y,E];function x(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",w,M)}var A={name:"Home",computed:Object(p["a"])({},m)};const U=f()(A,[["render",x]]);var P=U,k={id:"home"},S=Object(n["e"])("h1",null,"Profrec: Login",-1),_=Object(n["e"])("br",null,null,-1),R=Object(n["e"])("label",{for:"username"},"Username: ",-1),B=Object(n["e"])("br",null,null,-1),C=Object(n["e"])("label",{for:"password"},"Password: ",-1),L=Object(n["e"])("br",null,null,-1),T=Object(n["e"])("button",{type:"submit"},"Login",-1),I=Object(n["e"])("p",null,"New to this site?",-1),D=Object(n["e"])("br",null,null,-1),$=Object(n["f"])("Register");function z(e,r,t,o,a,s){var l=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("div",k,[S,Object(n["e"])("form",{onSubmit:r[2]||(r[2]=Object(n["C"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.loginErrorMessage),513),[[n["y"],null!=a.loginErrorMessage]]),_,R,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),B,C,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),L,T],32),I,D,Object(n["g"])(l,{to:{name:"Register"}},{default:Object(n["A"])((function(){return[$]})),_:1})])}var V=t("1da1"),H=(t("96cf"),t("bc3a")),Z=t.n(H),J=Z.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),N={name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,J.post("login",{username:e.username,password:e.password});case 2:if(t=r.sent,console.log(t),t.data.successful){r.next=8;break}e.loginErrorMessage=t.data.message,r.next=13;break;case 8:return e.loginErrorMessage=null,e.$store.dispatch("login",{username:e.username,account_type:t.data.account_type}),localStorage.setItem("token",t.data.token),r.next=13,e.$router.push("/user/dashboard");case 13:case"end":return r.stop()}}),r)})))()}}};const G=f()(N,[["render",z]]);var W=G,q={id:"home"},Y=Object(n["e"])("h1",null,"Profrec: Create an Account",-1),F=Object(n["e"])("label",{for:"username"},"Username: ",-1),K=Object(n["e"])("br",null,null,-1),Q=Object(n["e"])("br",null,null,-1),X=Object(n["e"])("label",{for:"email"},"Email Address: ",-1),ee=Object(n["e"])("br",null,null,-1),re=Object(n["e"])("br",null,null,-1),te=Object(n["e"])("label",{for:"password"},"Password: ",-1),ne=Object(n["e"])("br",null,null,-1),oe={style:{color:"red"}},ae=Object(n["e"])("br",null,null,-1),se=Object(n["e"])("label",{for:"passwordconf"},"Confirm Password: ",-1),le=Object(n["e"])("br",null,null,-1),ue={style:{color:"red"}},ce=Object(n["e"])("br",null,null,-1),ie=Object(n["e"])("button",{type:"submit"},"Register",-1);function de(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",q,[Y,Object(n["e"])("form",{onSubmit:r[4]||(r[4]=Object(n["C"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[F,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),K,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.usernameErrorMessage),513),[[n["y"],null!=a.usernameErrorMessage]]),Q,X,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.email=e})},null,512),[[n["x"],a.email]]),ee,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.emailErrorMessage),513),[[n["y"],null!=a.emailErrorMessage]]),re,te,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),ne,Object(n["B"])(Object(n["e"])("p",oe,"Invalid Password",512),[[n["y"],null!=a.passwordErrorMessage]]),ae,se,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":r[3]||(r[3]=function(e){return a.passwordConf=e})},null,512),[[n["x"],a.passwordConf]]),le,Object(n["B"])(Object(n["e"])("p",ue,"Passwords Do Not Match",512),[[n["y"],null!=a.passwordConfErrorMessage]]),ce,ie],32)])}t("ac1f"),t("466d");var pe={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){r.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),r.next=8,e.$router.push("/login");case 8:case"end":return r.stop()}}),r)})))()}}};const be=f()(pe,[["render",de]]);var me=be;function Oe(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null," Welcome "+Object(n["v"])(e.getUsername),1)}var ge={name:"UserDashboard",computed:Object(p["a"])(Object(p["a"])({},m),Object(b["b"])(["getUsername"]))};const fe=f()(ge,[["render",Oe]]);var je=fe,he=Object(n["e"])("h1",null,"Admin Panel",-1),ve=Object(n["e"])("p",null,"You have made it to the admin panel. With great power comes great responsibility.",-1),we=[he,ve];function ye(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["B"])(Object(n["e"])("div",null," Only site admins are allowed to have access to this page ",512),[[n["y"],5!==s.userdata.accountType]]),Object(n["B"])(Object(n["e"])("div",null,we,512),[[n["y"],5===s.userdata.accountType]])])}var Ee={name:"AdminPanel",props:{user:{type:Object,required:!0}},computed:{userdata:{get:function(){return this.$store.state.userdata}}}};const Me=f()(Ee,[["render",ye]]);var xe=Me,Ae=[{path:"/",name:"Home",component:P},{path:"/login",name:"Login",component:W},{path:"/register",name:"Register",component:me},{path:"/user/dashboard",name:"User Dashboard",component:je},{path:"/admin/panel",name:"Admin Panel",component:xe}],Ue=Object(v["a"])({history:Object(v["b"])("/"),routes:Ae}),Pe=Ue,ke=(t("e9c4"),new b["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,r){e.user=r,localStorage.setItem("user",JSON.stringify(r)),Z.a.defaults.headers.common["Authorization"]="Bearer ".concat(r.token)},LOGOUT:function(){localStorage.removeItem("user"),location.reload()}},actions:{register:function(e,r){var t=e.commit;return J.post("users",r).then((function(e){var r=e.data;console.log("User Data: ",r),t("SET_USER_DATA",r)}))},login:function(e,r){var t=e.commit;return J.post("login",r).then((function(e){var r=e.data;console.log("Data: "+r),t("SET_USER_DATA",r)}))},logout:function(e){var r=e.commit;r("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username}}}));Object(n["b"])(h).use(ke).use(Pe).mount("#app")},cf05:function(e,r,t){e.exports=t.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.aa386323.js.map