(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"login-form-wrap"},[n("form",{staticClass:"login-form validate-form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("span",{staticClass:"login-form-title"},[t._v("\n        Admin Login\n      ")]),n("div",{staticClass:"wrap-input-login validate-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-login",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("span",{staticClass:"focus-input-login"})]),n("div",{staticClass:"wrap-input-login validate-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-login",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"focus-input-login"})]),t._m(0)]),t.isLoginFalse?n("div",{staticClass:"login-error"},[t._v("\n      Login failed!\n    ")]):t._e()])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-btn-wrap"},[n("button",{staticClass:"login-btn",attrs:{type:"submit"}},[t._v("\n          Login\n        ")])])}],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("2f62"),i=(n("96cf"),n("3b8d")),c=n("3f4a"),l={login:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="".concat(global_api,"/login?username=").concat(e,"&password=").concat(n),sessionStorage.setItem("tokenCovidTracking",null),t.prev=2,t.next=5,Object(c["a"])().get("".concat(r));case 5:s=t.sent,sessionStorage.setItem("tokenCovidTracking",s.data.token),t.next=13;break;case 9:return t.prev=9,t.t0=t["catch"](2),console.log("error:",t.t0.response),t.abrupt("return",t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));function e(e,n){return t.apply(this,arguments)}return e}()};function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={components:{},computed:p({},Object(a["b"])({})),data:function(){return{username:"",password:"",isLoginFalse:!1}},methods:{login:function(){var t=this;this.$store.commit("form/showLoading",!0),l.login(this.username,this.password).then((function(){t.$store.commit("form/showLoading",!1),"null"==sessionStorage.getItem("tokenCovidTracking")?t.isLoginFalse=!0:t.$router.push({path:"/customer"})}))}},created:function(){sessionStorage.setItem("tokenCovidTracking",null)}},d=g,m=n("2877"),f=Object(m["a"])(d,r,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.89a98561.js.map