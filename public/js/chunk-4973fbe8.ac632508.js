(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4973fbe8"],{7771:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("h1",{staticClass:"font-weight-bold title h2 text-uppercase mb-4"},[t._v("Topics")]),t._l(t.topics,function(e,n){return t.topics.length>0?r("div",{key:n},[r("h4",{staticClass:"font-weight-bold h3 spanborder text-capitalize"},[r("a",{attrs:{href:""},on:{click:function(r){return r.preventDefault(),t.$router.push({name:"show-topic",params:{id:e.id}})}}},[r("span",[t._v(t._s(e.name))])])]),null!=e.post?r("MainLoopCard",{attrs:{post:e.post}}):t._e()],1):t._e()})],2),r("div",{staticClass:"col-md-4"},[t.featureds?r("SidebarFeatured",{attrs:{posts:t.featureds}}):t._e()],1)])])},i=[],s=(r("96cf"),r("3b8d")),a=r("9820"),o=r("b243"),u={name:"Topic",components:{MainLoopCard:a["a"],SidebarFeatured:o["a"]},data:function(){return{featureds:[],topics:[]}},methods:{fetchTpoicsData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$get("topics/").then(function(t){console.log(t),e.topics=t.topics,e.featureds=t.featureds}).catch(function(t){console.log(t)});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.fetchTpoicsData()},filters:{avatarWatch:function(t){return"http://collaborative-blogging-pwa.herokuapp.com/img/"+t}},watch:{$route:function(t,e){this.fetchTpoicsData()}}},l=u,c=r("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},9820:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mb-5 d-flex justify-content-between main-loop-card"},[r("div",{staticClass:"pr-3"},[r("h2",{staticClass:"mb-1 h4 font-weight-bold"},[r("a",{staticClass:"text-dark",attrs:{href:"",post:""},on:{click:function(e){return e.preventDefault(),t.$router.push({name:"show-post",params:{id:t.post.id}})}}},[t._v(t._s(t.post.title))]),r("star-rating",{attrs:{"star-size":20,glow:10,rating:t.post.rating,"show-rating":!1,"border-width":0,"read-only":!0,"rounded-corners":!0}})],1),r("p",{staticClass:"excerpt",domProps:{innerHTML:t._s(t.post.excerpt)}}),r("small",{staticClass:"d-block text-muted"},[t._v("\n        In\n        "),r("span",{staticClass:"catlist"},[r("a",{staticClass:"text-capitalize text-muted smoothscroll p-1",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.push({name:"show-topic",params:{id:t.post.topic_id}})}}},[t._v(t._s(t.post.topic))])])]),r("small",{staticClass:"text-muted"},[t._v(t._s(t.post.date))])]),t.post.image?r("div",{staticClass:"col-md-3 pr-0 text-right"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.push({name:"show-post",params:{id:t.post.id}})}}},[r("img",{staticClass:"w-100",attrs:{src:t._f("imageWatcher")(t.post.image),alt:t.post.title}})])]):t._e()])])},i=[],s=r("c1da"),a=r.n(s),o={components:{StarRating:a.a},props:{post:{type:Object}},filters:{imageWatcher:function(t){return"http://collaborative-blogging-pwa.herokuapp.com/img/"+t}}},u=o,l=r("2877"),c=Object(l["a"])(u,n,i,!1,null,null,null);e["a"]=c.exports},b243:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky-top sticky-top-offset"},[t._m(0),r("ol",{staticClass:"list-featured"},t._l(t.posts,function(e,n){return r("div",{key:n},[r("li",{staticClass:"mb-4"},[r("span",[r("h6",{staticClass:"font-weight-bold"},[r("a",{staticClass:"text-dark",attrs:{href:""},on:{click:function(r){return r.preventDefault(),t.$router.push({name:"show-post",params:{id:e.id}})}}},[t._v(t._s(e.title))])]),r("span",{staticClass:"d-block text-muted"},[t._v("\n            In\n            "),r("span",{staticClass:"catlist"},[r("a",{staticClass:"text-capitalize text-muted smoothscroll p-1",attrs:{href:""},on:{click:function(r){return r.preventDefault(),t.$router.push({name:"show-topic",params:{id:e.topic_id}})}}},[t._v(t._s(e.topic))]),r("span",{staticClass:"sep"},[t._v(",")])])])])])])}),0)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"font-weight-bold spanborder"},[r("span",[t._v("Featured")])])}],s={props:{posts:{}}},a=s,o=r("2877"),u=Object(o["a"])(a,n,i,!1,null,null,null);e["a"]=u.exports},c1da:function(t,e,r){!function(e,r){t.exports=r()}(0,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var s=n(i);return[r].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([s]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(n[s]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e){t.exports=function(t,e,r,n,i){var s,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,a=t.default);var u,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n),i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(t,e){return u.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:a,options:l}}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=c[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(s(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(s(r.parts[i]));c[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(v){var s=p++;n=f||(f=i()),e=a.bind(null,n,s,!1),r=a.bind(null,n,s,!0)}else n=i(),e=o.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var s=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function o(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(14),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){h=r;var i=l(t,e);return n(i),function(e){for(var r=[],s=0;s<i.length;s++){var a=i[s],o=c[a.id];o.refs--,r.push(o)}e?(i=l(t,e),n(i)):i=[];for(s=0;s<r.length;s++){o=r[s];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete c[o.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){function n(t){r(13)}var i=r(1)(r(5),r(11),n,"data-v-34cbeed1",null);t.exports=i.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{star:i.default},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating:function(t,e){if(!this.readOnly){var r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):this.$emit("current-rating",this.currentRating)}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e))}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars(this.shouldRound)}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,required:!1}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},computed:{starPointsToString:function(){return this.starPoints.join(",")},getGradId:function(){return"url(#"+this.grad+")"},getSize:function(){var t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},getFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.borderColor},maxSize:function(){return this.starPoints.reduce(function(t,e){return Math.max(t,e)})},viewBox:function(){return"0 0 "+this.maxSize+" "+this.maxSize}},methods:{mouseMoving:function(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},getPosition:function(t){var e=.92*this.size,r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*r);return Math.min(n,100)},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map(function(e){return t.size/t.maxSize*e+1.5*t.border})}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:""}}}},function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".vue-star-rating-star[data-v-21f5376e]{overflow:visible!important}",""])},function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",""])},function(t,e,r){function n(t){r(12)}var i=r(1)(r(6),r(10),n,"data-v-21f5376e",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"vue-star-rating-star",attrs:{height:t.getSize,width:t.getSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected}},[r("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),r("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[r("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),r("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.glowColor,filter:"url(#"+this.glowId+")"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.roundedCorners?"round":"miter"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[r("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,function(e){return r("span",{key:e,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[r("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor},on:{"star-selected":function(e){t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)}),t._v(" "),t.showRating?r("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]}},function(t,e,r){var n=r(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),r(2)("0ab8a16d",n,!0)},function(t,e,r){var n=r(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),r(2)("2e648ff1",n,!0)},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var s=e[i],a=s[0],o=s[1],u=s[2],l=s[3],c={id:t+":"+i,css:o,media:u,sourceMap:l};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}}])})}}]);
//# sourceMappingURL=chunk-4973fbe8.ac632508.js.map