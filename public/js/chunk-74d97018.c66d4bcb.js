(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d97018"],{3022:function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},o=/%[sdj%]/g;t.format=function(e){if(!j(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(s(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,i=n.length,a=String(e).replace(o,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return e}}),u=n[r];r<i;u=n[++r])h(u)||!P(u)?a+=" "+u:a+=" "+s(u);return a},t.deprecate=function(r,n){if("undefined"!==typeof e&&!0===e.noDeprecation)return r;if("undefined"===typeof e)return function(){return t.deprecate(r,n).apply(this,arguments)};var o=!1;function i(){if(!o){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}return i};var i,a={};function s(e,r){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&t._extend(n,r),x(n.showHidden)&&(n.showHidden=!1),x(n.depth)&&(n.depth=2),x(n.colors)&&(n.colors=!1),x(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),p(n,e,n.depth)}function u(e,t){var r=s.styles[t];return r?"["+s.colors[r][0]+"m"+e+"["+s.colors[r][1]+"m":e}function l(e,t){return e}function c(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function p(e,r,n){if(e.customInspect&&r&&N(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return j(o)||(o=p(e,o,n)),o}var i=f(e,r);if(i)return i;var a=Object.keys(r),s=c(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(r)),k(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return m(r);if(0===a.length){if(N(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(_(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(S(r))return e.stylize(Date.prototype.toString.call(r),"date");if(k(r))return m(r)}var l,b="",h=!1,w=["{","}"];if(v(r)&&(h=!0,w=["[","]"]),N(r)){var O=r.name?": "+r.name:"";b=" [Function"+O+"]"}return _(r)&&(b=" "+RegExp.prototype.toString.call(r)),S(r)&&(b=" "+Date.prototype.toUTCString.call(r)),k(r)&&(b=" "+m(r)),0!==a.length||h&&0!=r.length?n<0?_(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),l=h?d(e,r,n,s,a):a.map(function(t){return g(e,r,n,s,t,h)}),e.seen.pop(),y(l,b,w)):w[0]+b+w[1]}function f(e,t){if(x(t))return e.stylize("undefined","undefined");if(j(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return O(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function m(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,r,n,o){for(var i=[],a=0,s=t.length;a<s;++a)T(t,String(a))?i.push(g(e,t,r,n,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(e,t,r,n,o,!0))}),i}function g(e,t,r,n,o,i){var a,s,u;if(u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},u.get?s=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(s=e.stylize("[Setter]","special")),T(n,o)||(a="["+o+"]"),s||(e.seen.indexOf(u.value)<0?(s=h(r)?p(e,u.value,null):p(e,u.value,r-1),s.indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),x(a)){if(i&&o.match(/^\d+$/))return s;a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function y(e,t,r){var n=e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return n>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function v(e){return Array.isArray(e)}function b(e){return"boolean"===typeof e}function h(e){return null===e}function w(e){return null==e}function O(e){return"number"===typeof e}function j(e){return"string"===typeof e}function E(e){return"symbol"===typeof e}function x(e){return void 0===e}function _(e){return P(e)&&"[object RegExp]"===C(e)}function P(e){return"object"===typeof e&&null!==e}function S(e){return P(e)&&"[object Date]"===C(e)}function k(e){return P(e)&&("[object Error]"===C(e)||e instanceof Error)}function N(e){return"function"===typeof e}function z(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e}function C(e){return Object.prototype.toString.call(e)}function D(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(x(i)&&(i=Object({NODE_ENV:"production",VUE_APP_BACKEND:"http://collaborative-blogging-pwa.herokuapp.com/",VUE_APP_BACKEND_IMG_PATH:"http://collaborative-blogging-pwa.herokuapp.com/img/",VUE_APP_TITLE:"Collabblog",BASE_URL:"/"}).NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(i)){var n=e.pid;a[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e)}}else a[r]=function(){};return a[r]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=v,t.isBoolean=b,t.isNull=h,t.isNullOrUndefined=w,t.isNumber=O,t.isString=j,t.isSymbol=E,t.isUndefined=x,t.isRegExp=_,t.isObject=P,t.isDate=S,t.isError=k,t.isFunction=N,t.isPrimitive=z,t.isBuffer=r("d60a");var $=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var e=new Date,t=[D(e.getHours()),D(e.getMinutes()),D(e.getSeconds())].join(":");return[e.getDate(),$[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",A(),t.format.apply(t,arguments))},t.inherits=r("3fb5"),t._extend=function(e,t){if(!t||!P(t))return e;var r=Object.keys(t),n=r.length;while(n--)e[r[n]]=t[r[n]];return e};var I="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function U(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}function V(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var o=r.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};t.apply(this,r).then(function(t){e.nextTick(a,null,t)},function(t){e.nextTick(U,t,a)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(I&&e[I]){var t=e[I];if("function"!==typeof t)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,I,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(a){r(a)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),I&&Object.defineProperty(t,I,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=I,t.callbackify=V}).call(this,r("4362"))},"3fb5":function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},5794:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[e._m(0),r("form",{staticClass:"mt-4 w-100 clearfix"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"signupInputEmail"}},[e._v("Email:")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|"+e.$formValidator.rules.email,expression:"'required|' + $formValidator.rules.email"},{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"form-control":!0,"is-invalid":e.errors.has("email")},attrs:{id:"signupInputEmail","error-messages":e.errors.collect("email"),"data-vv-name":"email",type:"email",placeholder:"Enter email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),r("div",{class:{"validation-feedback":!0,"invalid-feedback":e.errors.has("email")}},[e._v(e._s(e.errors.first("email")))])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"signupInputName"}},[e._v("Name:")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:e.$formValidator.rules.name,expression:"$formValidator.rules.name"},{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"form-control":!0,"is-invalid":e.errors.has("name")},attrs:{id:"signupInputName","error-messages":e.errors.collect("name"),"data-vv-name":"name",type:"text",placeholder:"Enter name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),r("div",{class:{"validation-feedback":!0,"invalid-feedback":e.errors.has("name")}},[e._v(e._s(e.errors.first("name")))])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"signupInputPassword"}},[e._v("Password:")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:e.$formValidator.rules.password,expression:"$formValidator.rules.password"},{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"signupInputPassword","data-vv-name":"password",type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),r("div",{class:{"validation-feedback":!0,"invalid-feedback":e.errors.has("password")}},[e._v(e._s(e.errors.first("password")))])]),r("button",{staticClass:"btn btn-primary float-right",attrs:{disabled:!!e.errors.items.length,type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e.loading?r("span",[e._v("Loading...")]):r("span",[e._v("Sign up")])]),r("router-link",{staticClass:"pt-2 d-block small",attrs:{to:{name:"signin"}}},[e._v("Already have an account?")])],1)])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"font-weight-bold spanborder"},[r("span",[e._v("Signup")])])}],i=(r("96cf"),r("3b8d")),a=r("cebc"),s=r("2f62"),u=(r("3022"),{name:"Signup",data:function(){return{form:{name:"",email:"",password:""},loading:!1}},methods:Object(a["a"])({submit:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$formValidator.validate(this.form);case 2:if(!e.sent){e.next=16;break}return this.loading=!0,e.prev=4,e.next=7,this.signup(this.form);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](4),console.log("err : ",e.t0);case 12:return e.prev=12,this.loading=!1,this.$router.push({name:"signin"}),e.finish(12);case 16:case"end":return e.stop()}},e,this,[[4,9,12,16]])}));function t(){return e.apply(this,arguments)}return t}()},Object(s["b"])("auth",["signup"])),head:function(){return{title:"Sign Up Page",meta:[{content:"Sign Up Page Description",name:"description",hid:"description"}]}}}),l=u,c=r("2877"),p=Object(c["a"])(l,n,o,!1,null,null,null);t["default"]=p.exports},d60a:function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}}}]);
//# sourceMappingURL=chunk-74d97018.c66d4bcb.js.map