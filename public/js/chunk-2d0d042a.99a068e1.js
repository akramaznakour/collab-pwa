(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d042a"],{"66e9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"300px",width:"100%"}},[a("h1",{staticClass:"text-center"},[e._v("Forgot password")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.sent,expression:"sent"}],staticClass:"alert alert-primary mx-auto",attrs:{role:"alert"}},[e._v("\n    This page is no longer needed, please follow the link in the e-mail message.\n  ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.sent,expression:"!sent"}]},[a("router-link",{staticClass:"float-left",attrs:{to:{name:"signin"}}},[e._v("\n      🡄  Go back\n    ")]),a("br"),a("form",{staticClass:"mt-4 w-100",attrs:{autocomplete:"on"},on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"signinInputEmail"}},[e._v("\n          Email:\n        ")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|"+e.$formValidator.rules.email,expression:"'required|' + $formValidator.rules.email"},{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"form-control":!0,"is-invalid":e.errors.has("email")},attrs:{id:"signinInputEmail","error-messages":e.errors.collect("email"),"data-vv-name":"email",type:"email",placeholder:"Enter email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),a("div",{class:{"validation-feedback":!0,"invalid-feedback":e.errors.has("email")}},[e._v("\n          "+e._s(e.errors.first("email"))+"\n        ")])]),a("button",{staticClass:"btn btn-primary float-right",attrs:{disabled:e.btnDisabled,type:"submit"}},[e.btnLoading?a("span",[e._v("\n          Loading...\n        ")]):a("span",[e._v("\n          Continue\n        ")])])])],1)])},r=[],i=(a("96cf"),a("3b8d")),s=a("cebc"),o=a("2f62"),l={data:function(){return{form:{email:null},btnLoading:!1,sent:!1}},computed:{btnDisabled:function(){return!!this.errors.items.length}},methods:Object(s["a"])({submit:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$formValidator.validate(this.form);case 2:if(!e.sent){e.next=6;break}return e.next=5,this.$actionWithLoading(this.sendEmail,"btnLoading",this.form.email);case 5:this.sent=!0;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},Object(o["b"])("auth/forgotPassword",["sendEmail"]))},m=l,u=a("2877"),d=Object(u["a"])(m,n,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d042a.99a068e1.js.map