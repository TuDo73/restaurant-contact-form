(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2c411020":"d9638367","chunk-2caa7249":"c1a2ab77","chunk-2d2086b7":"c0799406","chunk-39cab302":"476e6721","chunk-3d3c3658":"db867482","chunk-402d50b3":"3217b826"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e3a":function(e){e.exports=JSON.parse('{"login":"Đăng nhập","Verify reCAPTCHA!":"Xác minh CAPTCHA!","Please enter a valid name":"Vui lòng nhập tên hợp lệ.","Please enter your contact data":"Vui lòng nhập dữ liệu liên hệ","First and last name":"Họ và tên","Contact data":"Dữ liệu liên hệ","E.g. 0170123456789":"Ví dụ: 0170123456789","Please enter a valid phone number.":"Vui lòng nhập số điện thoại hợp lệ.","District or place of permanent residence":"Quận hoặc nơi thường trú","This field is required":"Trường dữ liệu này là bắt buộc.","Other possibility for contacting":"Cách liên hệ khác","Full address":"Địa chỉ đầy đủ","Please enter a valid email.":"Vui lòng nhập email hợp lệ","Information about your visit":"Thông tin lưu trú","Stay duration in minutes":"Thời gian lưu trú (phút)","Please enter a valid number.":"Vui lòng nhập số hợp lệ","Number must be less than":"Số phải nhỏ hơn","Tisch-Number":"Số của bàn đang sử dụng","Record other persons":"Nhập dữ liệu người đi cùng (nếu có)","Other persons first and last name":"Họ và tên người đi cùng","Enter contact data":"Nhập dữ liệu liên hệ","Data protection":"Bảo vệ dữ liệu","Data protection notice":"Thông báo bảo vệ dữ liệu","Please enter only numbers":"Vui lòng chỉ nhập số.","Name cannot contain any special characters":"Tên không được chứa kí tự đặc biệt","Name cannot contain numbers":"Tên không được chứa số.","Must not be empty":"Không được để trống.","Telephone number must start with a 0":"Số điện thoại hợp lệ bắt đầu bằng số 0.","Cannot contain numbers":"Không được chứa số.","Cannot contain any special characters":"Không được chứa kí tự đặc biệt.","Email is not in the correct format for an email address":"E-Mail có định dạng không đúng.","Recording of contact data based on current regulations in connection with the corona pandemic":"Ghi dữ liệu liên lạc theo các quy định hiện hành liên quan đến đại dịch Corona","If you enter the restaurant as a group, please use the Possibility of adding additional first and last names for To register members of the same household":"Nếu bạn vào nhà hàng với một nhóm, vui lòng sử dụng thêm chức năng Nhập dữ liệu người đi cùng để nhập thêm họ và tên cho các người trong nhóm."}')},2508:function(e){e.exports=JSON.parse('{"login":"Anmelden","Verify reCAPTCHA!":"Überprüfen Sie CAPTCHA!","Please enter a valid name":"Bitte geben Sie einen gültigen Namen ein.","Please enter your contact data":"Bitte tragen Sie Ihre Kontaktdaten ein","First and last name":"Vor- und Nachname","Contact data":"Kontaktdaten","E.g. 0170123456789":"Z. B. 0170123456789","Please enter a valid phone number.":"Bitte geben Sie eine gültige Telefonnummer ein.","District or place of permanent residence":"Bezirk o. Gemeinde d. Wohnortes oder d. Ortes d. ständigen Aufenthaltes","This field is required":"Dieses Feld ist ein Pflichtfeld.","Other possibility for contacting":"Weitere Kontaktmöglichkeiten","Full address":"Vollständige Anschrift","Please enter a valid email.":"Bitte geben Sie eine gültige Email Adresse ein","Information about your visit":"Angaben zum Aufenthalt","Stay duration in minutes":"Aufenthaltsdauer in Minuten","Please enter a valid number.":"Bitte eine gültige Nummer eingeben","Number must be less than":"Eingegebene Zahl muss kleiner sein als","Tisch-Number":"Tisch-Nummer","Record other persons":"Weitere Person erfassen","Other persons first and last name":"Weitere Person Vor- und Nachname","Enter contact data":"Kontaktdaten Erfassen","Data protection":"Datenschutz","Data protection notice":"Datenschutzhinweis","Please enter only numbers":"Bitte nur Zahlen eingeben.","Name cannot contain any special characters":"Name darf keine Sonderzeichen enthalten.","Name cannot contain numbers":"Name darf keine Zahlen enthalten.","Must not be empty":"Darf nicht leer sein.","Telephone number must start with a 0":"Telefonnummer muss mit einer 0 beginnen.","Cannot contain numbers":"Darf keine Zahlen enthalten.","Cannot contain any special characters":"Darf keine Sonderzeichen enthalten.","Email is not in the correct format for an email address":"E-Mail hat nicht das richtige Format für eine E-Mail-Adresse.","Recording of contact data based on current regulations in connection with the corona pandemic":"Kontaktdatenerfassung aufgrund aktueller Bestimmungen im Zusammenhang mit der Corona-Pandemie","If you enter the restaurant as a group, please use the Possibility of adding additional first and last names for To register members of the same household":"Falls Sie das Restaurant als Gruppe betreten, nutzen Sie bitte die Möglichkeit, weiter unten zusätzliche Vor- und Nachnamen für  Mitglieder desselben Hausstandes einzutragen."}')},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),i=(n("82c0"),{lang:"de"}),o={},s={},c={setLang:function(e,t){e.lang=t}},l={namespaced:!0,state:i,getters:o,actions:s,mutations:c},u={isActiveDatenschutzPopup:!1,isShowLoading:!1,formData:{}},h={},d={updatePopupDatenschutz:function(e,t){var n=e.state;n.isActiveDatenschutzPopup=t}},m={showLoading:function(e,t){e.isShowLoading=t},setFormData:function(e,t){e.formData=t}},f={namespaced:!0,state:u,getters:h,actions:d,mutations:m};a["a"].use(r["a"]);t["a"]=new r["a"].Store({modules:{i18n:l,form:f}})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("LoadingState")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.$store.state.form.isShowLoading?n("div",{staticClass:"loading-box"},[n("div",{staticClass:"loading-box-wrap"},[n("div",{staticClass:"rect1"}),n("div",{staticClass:"rect2"}),n("div",{staticClass:"rect3"}),n("div",{staticClass:"rect4"}),n("div",{staticClass:"rect5"})])]):e._e()])},s=[],c=(n("82c0"),{data:function(){return{}},components:{},methods:{}}),l=c,u=n("2877"),h=Object(u["a"])(l,o,s,!1,null,null,null),d=h.exports,m={name:"App",components:{LoadingState:d}},f=m,p=(n("5c0b"),Object(u["a"])(f,r,i,!1,null,null,null)),g=p.exports,b=n("a18c"),v=n("4360"),y=n("a925");a["a"].use(y["a"]);var w=new y["a"]({locale:v["a"].state.i18n.lang,messages:{de:n("2508"),vi:n("0e3a")}});var k=w,S=n("7707"),C=n.n(S);C.a.polyfill(),a["a"].config.productionTip=!1,a["a"].use(n("2ead")),new a["a"]({router:b["a"],store:v["a"],i18n:k,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("e332")},"82c0":function(e,t,n){"use strict";n("ac6a"),n("ffc1"),n("a481"),n("7f7f"),n("6762"),n("2fdb");var a=n("7618"),r=(n("6b54"),n("96cf"),n("3b8d")),i=n("2b0e"),o=n("4360"),s=n("a18c");new i["a"]({store:o["a"],router:s["a"],data:{},methods:{request:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},a=r.length>2&&void 0!==r[2]?r[2]:"post",e.abrupt("return",axios[a.toLowerCase()](t,n).then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),storeToLocalStorage:function(e,t){localStorage.removeItem(e),localStorage.setItem(e,JSON.stringify(t))},removeLocalStorageItem:function(e){localStorage.removeItem(e)},checkLocalStorageItemExisted:function(e){var t=localStorage.getItem(e);return t=JSON.parse(t),t||!1},checkValid:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("undefined"!==typeof e&&null!==e){var n=e.toString();if("function"===typeof e||"object"===Object(a["a"])(e))return!t||!("undefined"!==typeof e.length&&e.length<=0);if("boolean"===typeof e)return e;if(/\S/.test(n)&&!isNaN(n))return!0;if(/\S/.test(n))return!0}return!1},isInString:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e||(e=""),n?e.includes(t):e.toLowerCase().includes(t.toLowerCase())},deepCloneObj:function(e){return this.checkValid(e)?JSON.parse(JSON.stringify(e)):e},removeObj:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?e.filter((function(e){return e.active!=t})):e.filter((function(e){return e.areaCode!=t}))},handleAlternateColorButton:function(e,t,n){for(var a=[],r=[],i=0;i<t.length;i++)Math.floor(i/n)%2===0?a.push(t[i]):r.push(t[i]);for(var o=0;o<a.length;o++)o%2===0?a[o].classList.add("item-type-1"):a[o].classList.add("item-type-2");for(var s=0;s<r.length;s++)s%2===0?r[s].classList.add("item-type-2"):r[s].classList.add("item-type-1")},scrollToElement:function(e,t,n){document.getElementsByClassName(e)[0].scrollTop=document.getElementsByClassName(t)[n].offsetTop-document.getElementsByClassName(e)[0].offsetTop},stringForSearch:function(e){for(var t=0;t<e.length;t++){var n=e[t].name;n=n.toString().toLowerCase(),n=n.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä/g,"a"),n=n.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),n=n.replace(/ì|í|ị|ỉ|ĩ/g,"i"),n=n.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö/g,"o"),n=n.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü/g,"u"),n=n.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),n=n.replace(/đ/g,"d"),n=n.replace(/ + /g," "),n=n.trim(),e[t].nameForSearch=n}return e},isInViewport:function(e,t){var n=window.scrollY||window.pageYOffset,a=e.getBoundingClientRect().top+n,r={top:n,bottom:n+window.innerHeight-t},i={top:a,bottom:a+e.clientHeight};return i.bottom>=r.top&&i.bottom<=r.bottom||i.top<=r.bottom&&i.top>=r.top},checkIsObjEmpty:function(e){return 0===Object.entries(e).length&&e.constructor===Object},timeCounter:function(e){var t=Math.floor(e%864e5/36e5);t<10&&(t="0".concat(t));var n=Math.floor(e%36e5/6e4);n<10&&(n="0".concat(n));var a="".concat(t,":").concat(n);return a},handleHeightListBox:function(e,t,n,a,r,i){var o=this,s=e;if(a>-1){var c=t,l=n,u=c.getBoundingClientRect().top,h=window.innerHeight;if("large"===i){var d=h-u-r-1;c.style.height="".concat(d,"px")}if("medium"===i){var m=h-u-r-0;c.style.height="".concat(m,"px")}if("small"===i){var f=h-u-r-11;c.style.height="".concat(f,"px")}setTimeout((function(){"large"===i&&(0==o.isInViewport(l[a],100)?s.classList.add("is-visible-scrollbar"):s.classList.remove("is-visible-scrollbar")),"medium"===i&&(0==o.isInViewport(l[a],200)?s.classList.add("is-visible-scrollbar"):s.classList.remove("is-visible-scrollbar")),"small"===i&&(0==o.isInViewport(l[a],190)?s.classList.add("is-visible-scrollbar"):s.classList.remove("is-visible-scrollbar"))}),50)}else setTimeout((function(){s.classList.remove("is-visible-scrollbar")}),50)}}})},a18c:function(e,t,n){"use strict";var a=n("2b0e"),r=n("8c4f"),i=(n("4360"),function(){return Promise.all([n.e("chunk-2c411020"),n.e("chunk-39cab302")]).then(n.bind(null,"bb51"))}),o=function(){return n.e("chunk-402d50b3").then(n.bind(null,"e116"))},s=function(){return Promise.all([n.e("chunk-2c411020"),n.e("chunk-2d2086b7")]).then(n.bind(null,"a55b"))},c=function(){return Promise.all([n.e("chunk-2c411020"),n.e("chunk-2caa7249")]).then(n.bind(null,"4848"))},l=function(){return n.e("chunk-3d3c3658").then(n.bind(null,"1071"))};a["a"].use(r["a"]);var u=new r["a"]({mode:"history",routes:[{path:"/",name:"Home",component:i},{path:"/confirm",name:"Confirm",component:o},{path:"/login",name:"Login",component:s},{path:"/customer",name:"Customer",component:c,meta:{requiresAuth:!0}},{path:"/edit",name:"Edit",component:l,meta:{requiresAuth:!0}}]});u.beforeEach((function(e,t,n){var a=sessionStorage.getItem("tokenCovidTracking");e.matched.some((function(e){return e.meta.requiresAuth}))?"null"!=a&&a?n():n({path:"/login"}):e.meta.redirectIfAuth&&a?n({name:e.meta.redirectIfAuth}):n()})),t["a"]=u},e332:function(e,t,n){}});
//# sourceMappingURL=app.9409a87a.js.map