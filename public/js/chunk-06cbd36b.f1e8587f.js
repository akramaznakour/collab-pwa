(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06cbd36b"],{7853:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.profile.id?e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"row align-items-center mb-5"},[e("div",{staticClass:"col-md-9"},[e("h2",{staticClass:"font-weight-bold"},[t._v("\n            "+t._s(t.profile.name)+"\n            "),e("span",{staticClass:"small btn btn-outline-success btn-sm btn-round"},[t.$route.params.id!=t.$auth.user.id?e("a",{attrs:{href:"profile.twitter"}},[t._v("Follow")]):e("a",{attrs:{href:"profile.twitter"},on:{click:function(s){return s.preventDefault(),t.$router.push({name:"account-settings"})}}},[t._v("Edit Account")])])]),e("p",[e("a",{attrs:{href:"profile.site"}},[t._v(t._s(t.profile.site))])]),e("p",{staticClass:"excerpt"},[t._v(t._s(t.profile.bio))])]),e("div",{staticClass:"col-md-3 text-right"},[e("img",{staticClass:"rounded-circle",attrs:{alt:t.profile.name,src:t._f("avatarWatch")(t.profile.avatar),height:"100",width:"100"}})])]),e("h4",{staticClass:"font-weight-bold spanborder"},[e("span",[t._v("Posts by "+t._s(t.profile.name))])]),t._l(t.profile.posts,function(t,s){return e("MainLoopCard",{key:s})})],2)])]):t._e()},i=[],r=(e("96cf"),e("3b8d")),n=e("9820"),o={name:"Profile",components:{MainLoopCard:n["a"]},data:function(){return{users:null,profile:{name:"",site:"",avatar:"",bio:"",posts:[]}}},methods:{fetchUserData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("users/"+this.$route.params.id);case 2:return s=t.sent,t.next=5,this.$get("user-posts");case 5:e=t.sent,console.log(e),this.profile=s,this.profile.posts=e;case 9:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()},mounted:function(){this.fetchUserData()},filters:{avatarWatch:function(t){return"http://collaborative-blogging-pwa.herokuapp.com/img/"+t}}},l=o,c=e("2877"),u=Object(c["a"])(l,a,i,!1,null,null,null);s["default"]=u.exports},9820:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"mb-5 d-flex justify-content-between main-loop-card"},[e("div",{staticClass:"pr-3"},[e("h2",{staticClass:"mb-1 h4 font-weight-bold"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(t.post.title))])]),e("small",{staticClass:"d-block text-muted"},[t._v("\n        In\n        "),t._l(t.post.categories,function(s){return e("span",{key:s,staticClass:"catlist"},[e("a",{staticClass:"text-capitalize text-muted smoothscroll p-1",attrs:{href:"#"}},[t._v(t._s(s))]),e("span",{staticClass:"sep"},[t._v(",")])])})],2),e("small",{staticClass:"text-muted"},[t._v(t._s(t.post.date))])]),t.post.image?e("div",{staticClass:"col-md-3 pr-0 text-right"},[e("a",{attrs:{href:t.post.url}},[e("img",{staticClass:"w-100",attrs:{src:t.post.image,alt:t.post.title}})])]):t._e()])])},i=[],r={data:function(){return{post:{title:"There are lots of powerful things you can do with the Markdown editor",image:"http://localhost:8000/img/1.jpg",date:"Feb 04, 2019",categories:["categories1"],tags:["tag1","tag2","tag3","tag4"]}}}},n=r,o=e("2877"),l=Object(o["a"])(n,a,i,!1,null,null,null);s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-06cbd36b.f1e8587f.js.map