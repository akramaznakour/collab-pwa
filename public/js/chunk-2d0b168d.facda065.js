(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b168d"],{2070:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-12"},[o("div",[t._m(0),o("form",{staticClass:"mt-4 w-100 clearfix"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Title :")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{id:"title",required:"",type:"text",placeholder:"Enter title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"content"}},[t._v("Image :")]),o("div",{staticClass:"custom-file"},[o("input",{ref:"file",staticClass:"custom-file-input",attrs:{type:"file"},on:{change:function(e){return t.handleFileUpload()}}}),o("label",{staticClass:"custom-file-label",attrs:{for:"validatedCustomFile"}},[t._v("Choose Image...")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"topic"}},[t._v("Tpoc :")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.topic,expression:"form.topic"}],staticClass:"form-control",attrs:{id:"topic",required:"",type:"text",placeholder:"Enter title"},domProps:{value:t.form.topic},on:{input:function(e){e.target.composing||t.$set(t.form,"topic",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"content"}},[t._v("Content :")]),o("mavon-editor",{ref:"md",attrs:{ishljs:!0,language:"en"},on:{save:t.save},model:{value:t.form.contentPreRender,callback:function(e){t.$set(t.form,"contentPreRender",e)},expression:"form.contentPreRender"}})],1),o("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t.loading?o("span",[t._v("Loading...")]):o("span",[t._v("Submit your post")])])])])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h4",{staticClass:"font-weight-bold spanborder"},[o("span",[t._v("Write a new post")])])}],i=(o("96cf"),o("3b8d")),a=o("cebc"),s=o("2f62"),l=o("ef8b"),c={name:"CreatePost",data:function(){return{form:{title:"",contentPreRender:"",content:"",image:null,topic:"my topic"},loading:!1}},methods:Object(a["a"])({save:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,o){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.form.content=o;case 1:case"end":return t.stop()}},t,this)}));function e(e,o){return t.apply(this,arguments)}return e}(),handleFileUpload:function(){this.form.image=this.$refs.file.files[0]},submit:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,o,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(o in this.loading=!0,e=new FormData,this.form)"image"!=o&&e.append(o,this.form[o]);this.form.image&&e.append("image",this.form.image,this.form.image.fileName),this.$post("posts",e).then(function(t){console.log(t),l["a"].$notify.success(t.message),n.$router.push({name:"show-post",params:{id:t.post_id}}),n.loading=!1}).catch(function(t){return console.log(t)});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},Object(s["b"])("posts",["addPost"])),mounted:function(){l["a"].$notify.info("make sur you save your article on the editor before submiting")}},u=c,m=o("2877"),f=Object(m["a"])(u,n,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b168d.facda065.js.map