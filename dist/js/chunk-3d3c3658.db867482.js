(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d3c3658"],{1071:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-wrapper"},[n("div",{staticClass:"top-row"},[n("div",{staticClass:"btn-wrap back-btn",on:{click:function(e){return t.back()}}},[n("span",{staticClass:"icon-cheveron-left"}),t._v("\n      Back\n    ")]),n("div",{staticClass:"btn-wrap logout-box",on:{click:function(e){return t.logout()}}},[t._v("\n      Logout\n    ")])]),n("div",{staticClass:"container"},[n("div",{staticClass:"form-edit-block"},[t._m(0),n("div",{staticClass:"form-row-edit"},[n("h3",{staticClass:"form-row-edit-heading"},[t._v("\n          Logo Hochladen\n        ")]),n("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.uploadFile(e)}}}),t.imagePreview?n("img",{attrs:{src:t.imagePreview,alt:"logo"}}):t._e()]),t._m(1),t._m(2)]),n("div",{staticClass:"save-btn"},[t._v("\n      Save\n    ")])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-row-edit"},[n("h3",{staticClass:"form-row-edit-heading"},[t._v("\n          Adresse Header\n        ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-row-edit"},[n("h3",{staticClass:"form-row-edit-heading"},[t._v("\n          IHR ( Restaurant / Geschäft name)\n        ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-row-edit"},[n("h3",{staticClass:"form-row-edit-heading"},[t._v("\n          Datenschutz text:\n        ")]),n("div",{staticClass:"form-row-edit"},[n("p",[t._v("\n            - Restaurant name\n          ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})]),n("div",{staticClass:"form-row-edit"},[n("p",[t._v("\n            - Zusatz\n          ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})]),n("div",{staticClass:"form-row-edit"},[n("p",[t._v("\n            - Adresse\n          ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})]),n("div",{staticClass:"form-row-edit"},[n("p",[t._v("\n            - Telefonnummer\n          ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})]),n("div",{staticClass:"form-row-edit"},[n("p",[t._v("\n            - Geschäftsführer\n          ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})]),n("div",{staticClass:"form-row-edit"},[n("p",[t._v("\n            - Steuer Nr.\n          ")]),n("input",{staticClass:"edit-input",attrs:{type:"text"}})])])}],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=(n("82c0"),n("2f62"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={components:{},computed:o({},Object(s["b"])({})),data:function(){return{imagePreview:""}},methods:{logout:function(){this.$router.push({path:"/login"})},back:function(){this.$router.push({path:"/customer"})},uploadFile:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.createImage(e[0]),console.log(e))},createImage:function(t){new Image;var e=new FileReader,n=this;e.onload=function(t){n.imagePreview=t.target.result},e.readAsDataURL(t)}},created:function(){}},f=u,l=n("2877"),p=Object(l["a"])(f,r,i,!1,null,null,null);e["default"]=p.exports},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),s=n("6a99"),c=n("69a8"),o=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=s(e,!0),o)try{return u(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(r(t))}}))},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"5eda":function(t,e,n){var r=n("5ca1"),i=n("8378"),a=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*a((function(){n(1)})),"Object",s)}},"85f2":function(t,e,n){t.exports=n("454f")},"8e6e":function(t,e,n){var r=n("5ca1"),i=n("990b"),a=n("6821"),s=n("11e9"),c=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=s.f,u=i(r),f={},l=0;while(u.length>l)n=o(r,e=u[l++]),void 0!==n&&c(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"990b":function(t,e,n){var r=n("9093"),i=n("2621"),a=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=r.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("85f2"),i=n.n(r);function a(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},f1ae:function(t,e,n){"use strict";var r=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}}}]);
//# sourceMappingURL=chunk-3d3c3658.db867482.js.map