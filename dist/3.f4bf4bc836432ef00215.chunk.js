webpackJsonp([3],{595:function(e,t,n){n(762);var r=n(20)(n(764),n(768),"data-v-062464f4",null);r.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/b_OneByOneCheck.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] b_OneByOneCheck.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},617:function(e,t,n){"use strict";var r=n(27);t.a=new r.default({data:function(){return{}},computed:{},methods:{}})},628:function(e,t,n){n(629);var r=n(20)(n(631),n(632),"data-v-3aa1c758",null);r.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/keyEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] keyEventOpt3.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},629:function(e,t,n){var r=n(630);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},630:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n",""])},631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(617);t.default={methods:{handler:function(e){var t={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",17:"ctrl"},n=t[e.keyCode],a=e.type,o=e.shiftKey,s=e.altKey,i=e.ctrlKey;n&&("ctrl"==n&&(n="noop",i=!0),r.a.$emit("keyEvent",{type:a,action:n,modify:{enlarge:o,shrink:s,step:i}}),e.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc),document.body.addEventListener("keyup",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),document.body.removeEventListener("keyup",window.staticfunc),r.a.$off("keyEvent")}}},632:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},633:function(e,t,n){n(634);var r=n(20)(n(636),n(637),"data-v-0d2f0d92",null);r.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/mouseEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] mouseEventOpt3.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},634:function(e,t,n){var r=n(635);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},635:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"",""])},636:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(187),a=n.n(r);t.default={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(e,t){return{x:e,y:t}},dist:function(e,t){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},getHandle:function(e,t){return this.dist(e,this.point(t.x,t.y))<=this.handle_size?"topleft":this.dist(e,this.point(t.x+t.w,t.y))<=this.handle_size?"topright":this.dist(e,this.point(t.x,t.y+t.h))<=this.handle_size?"bottomleft":this.dist(e,this.point(t.x+t.w,t.y+t.h))<=this.handle_size?"bottomright":this.dist(e,this.point(t.x+t.w/2,t.y))<=this.handle_size?"top":this.dist(e,this.point(t.x,t.y+t.h/2))<=this.handle_size?"left":this.dist(e,this.point(t.x+t.w/2,t.y+t.h))<=this.handle_size?"bottom":this.dist(e,this.point(t.x+t.w,t.y+t.h/2))<=this.handle_size&&"right"},mark_corner:function(e,t){this.current&&(this.current.corner=!1);var n=a.a.find(t,function(t){if(t.deleted)return!1;var n=this.getHandle(e,t);return n&&(t.corner=n),n}.bind(this));this.current=n},clear_corner:function(e){e.forEach(function(e,t){e.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(e){var t=e||window.event,n={x:0,y:0};t.pageX?(n.x=t.pageX,n.y=t.pageY):t.clientX&&(n.x=t.clientX,n.y=t.clientY);var r=this.$store.getters.scale,a=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,o=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,s=this.canvas.getBoundingClientRect().top+a,i=this.canvas.getBoundingClientRect().left+o,c=(n.y-s)/r;return{x:~~((n.x-i)/r),y:~~c}},getRectOverByPoint:function(e,t){return a.a.find(t,function(t){if(t.deleted)return!1;var n=e.x-t.x,r=e.y-t.y;return 0<=n&&n<=t.w&&0<=r&&r<=t.h})},markRectSelected:function(e,t){e&&(window.nn=this,this.current=e,this.current&&this.current.id?this.current.mselected=!1:this.current.mselected=!0,this.current.$=t,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var e=this;e.canvas.onselectstart=function(e){return e.preventDefault(),!1},e.canvas.onmousedown=function(t){var n=e.$store.getters.rects;if(e.drag.current&&e.drag.current.corner)e.drag.draggable=!0;else{var r=e.translat_point(t),a=e.getRectOverByPoint(r,n);if(e.markRectSelected(a,r),window.dd=e,!a&&e.draw.enable){e.draw.drawing=!0;var o=Object.assign({},n[0]);o.id="",o.x=r.x,o.y=r.y,e.draw.additions=o,e.$store.commit("startNewRect",{rect:o})}}e.redraw_canvas()},e.canvas.onmousemove=a.a.throttle(function(t){e.current=e.$store.getters.curRect;var n=e.translat_point(t);if(e.draw.drawing){var r=e.draw.additions;r.w=n.x-r.x,r.h=n.y-r.y,e.redraw_canvas()}else if(e.drag.draggable){var a=e.drag.current;switch(e.drag.current.corner){case"topleft":a.w+=a.x-n.x,a.h+=a.y-n.y,a.x=n.x,a.y=n.y;break;case"topright":a.w=n.x-a.x,a.h+=a.y-n.y,a.y=n.y;break;case"bottomleft":a.w+=a.x-n.x,a.x=n.x,a.h=n.y-a.y;break;case"bottomright":a.w=n.x-a.x,a.h=n.y-a.y;break;case"top":a.h+=a.y-n.y,a.y=n.y;break;case"left":a.w+=a.x-n.x,a.x=n.x;break;case"bottom":a.h=n.y-a.y;break;case"right":a.w=n.x-a.x}e.redraw_canvas()}else e.current&&e.current.mselected?(e.current.x+=n.x-e.current.$.x,e.current.y+=n.y-e.current.$.y,e.current.$.x=n.x,e.current.$.y=n.y,e.redraw_canvas()):(e.drag.mark_corner(n,e.$store.getters.rects),e.redraw_canvas());return t.preventDefault&&t.preventDefault(),!1},100),e.canvas.onmouseup=function(t){if(e.drag.draggable?e.drag.draggable=!1:e.current.mselected&&(e.current.mselected=!1),e.draw.drawing){var n=e.draw.additions;e.$store.dispatch("closeNewRect",{rect:n,canvas:e}),e.$nextTick(function(){var e=this.translat_point(t),n=this.getRectOverByPoint(e,rects);this.markRectSelected(n,e),this.current.mselected=!1}.bind(e))}e.draw.drawing=!1,e.redraw_canvas()}}}},637:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},638:function(e,t,n){n(639);var r=n(20)(n(641),n(642),"data-v-3f632a9e",null);r.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/help.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] help.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},639:function(e,t,n){var r=n(640);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},640:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.cover[data-v-3f632a9e] {\n  width:100%;\n  height:100%;\n  background-color: currentColor; /*steelblue;*/\n  position:absolute;\n  top:0;\n  left:0;\n  z-index:2;\n  opacity:0.95;\n  /*兼容IE8及以下版本浏览器*/\n  filter: alpha(opacity=90);\n  overflow: scroll;\n}\n.hide[data-v-3f632a9e] {\n\tdisplay: none;\n}\n.content-wrapper[data-v-3f632a9e] {\n\ttext-align: center;\n\tmargin: 10px;\n  border: 2px grey dashed;\n\tcolor: white;\n\tfont-size: 2em;\n  width: 100%;\n  height: 100%;\n}\n.img-wrapper[data-v-3f632a9e] {\n  margin: 70px 0 30px;\n}\n.text-wrapper[data-v-3f632a9e] {\n    display: flex;\n    justify-content: space-evenly;\n    text-align: left;\n}\n",""])},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(617);t.default={name:"HelpPage",data:function(){return{toHide:!0,withGlyph:!0}},mounted:function(){var e=this;r.a.$on("keyEvent",function(t){"help"==t.action&&"keydown"==t.type&&(e.toHide=!e.toHide)}),(this.$route.path.includes("confidence")||this.$route.path.includes("classify"))&&(this.withGlyph=!0),this.$route.path.includes("onebyone")&&(this.withGlyph=!1)}}},642:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cover",class:{hide:e.toHide}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[e.withGlyph?n("div",[e._m(2,!1,!1)]):n("div",{staticClass:"v1"},[e._m(0,!1,!1),e._v(" "),e._m(1,!1,!1)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(643)}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-wrapper"},[n("ul",[n("li",[e._v("[F1] 本帮助页面")]),e._v(" "),n("li",[e._v("[AWSD] 控制字块的选择")]),e._v(" "),n("li",[e._v("[←↑↓→] 控制切分框的移动、变形等操作")]),e._v(" "),n("li",[e._v("[1-9] 控制切分图片的放大倍率")]),e._v(" "),n("li",[e._v("[x] 移动切分框的四边")])]),e._v(" "),n("ul",[n("li",[e._v("[space] 选中切分框，作为操作对象")]),e._v(" "),n("li",[e._v("[shift] 放大状态")]),e._v(" "),n("li",[e._v("[alt] 缩小状态")]),e._v(" "),n("li",[e._v("[ctrl] 移动步长")]),e._v(" "),n("li",[e._v("[k] 标记切分框为删除状态/恢复状态")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(644)}})])}]},e.exports.render._withStripped=!0},643:function(e,t,n){e.exports=n.p+"7abbde8a433c04bd1e44523d2544a41a.png"},644:function(e,t,n){e.exports=n.p+"3e5940a1c7e4a71ea6ea49c1a2801864.png"},762:function(e,t,n){var r=n(763);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},763:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.layout-content-main[data-v-062464f4] {\n  padding: 10px;\n  border: 1px;\n  text-align: center;\n  color: #9ea7b4;\n}\n.canvas-layout[data-v-062464f4] {\n    overflow: scroll;\n    text-align: center;\n    padding: 4px;\n    margin: 10px;\n    background-color: #cccccc;\n    box-shadow: 0px 0px 3px 3px #363E4E;\n    border-radius: 2px;\n}\n.button[data-v-062464f4] {\n    background-color: #cccccc29;\n    border-color: #cccccc;\n    margin-top: 5px auto;\n    width: 99%;\n}\n.button[data-v-062464f4]:hover {\n    color: #fff;\n    background-color: #2db7f5; /*#19be6b; /*#28a9e4*/\n    border-color: #2db7f5; /*#47cb89; /*#4782cb*/\n}\n.switch[data-v-062464f4] {\n    font-size: 1rem;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    width: 99%;\n    margin: 5px;\n    display: none;\n}\n.outter-wrapper[data-v-062464f4] {\n  text-align: center;\n}\n",""])},764:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(765),a=n.n(r),o=n(34),s=n(638),i=n.n(s);t.default={name:"bCheckLeak",components:{canvasOp:a.a,help:i.a},data:function(){return{switch1:!1,rects:[],page_code:"",task_id:"",updateCanvas:1,isBtnLoading:!1}},computed:{getHeight:function(){return window.innerHeight-160+"px"}},mounted:function(){this.getWorkingData(),this.$store.commit("setScale",{scale:1}),this.$Notice.config({top:50,duration:3})},beforeDestroy:function(){this.$store.commit("resetAll")},methods:{getWorkingData:function(){var e=this,t="/api/pagetask/obtain/";this.$route.params.tid&&(t="/api/pagetask/"+this.$route.params.tid+"/"),e.$Loading.start(),o.a.ajax(t).then(function(t){if(e.$Loading.finish(),0!=t.data.status)throw{message:t.data.msg};return e.task_id=t.data.task_id,e.page_code=t.data.page_code,e.rects=t.data.rects,o.a.createImgObjWithUrl(o.a.getPageImageUrlFromCode(e.page_code))}).then(function(t){e.$store.commit("setImageAndRects",{image:t.target,rects:e.rects}),e.updateCanvas+=1}).catch(function(t){e.$Loading.finish(),e.$Notice.error({title:e.$t("Failed"),desc:e.$t(t.message||"")})})},submit:function(){var e="/api/pagetask/"+this.task_id+"/done/",t=this,n=this.$store.getters.solidRects;this.isBtnLoading=!0,o.a.ajax.post(e,{rects:n}).then(function(e){if(0!=e.data.status)throw{message:e.data.msg};t.isBtnLoading=!1,t.$Notice.success({title:"٩(˘◡˘ )",desc:""}),t.$route.params.tid?t.$router.push({path:"/mytask/onebyone"}):t.getWorkingData()}).catch(function(e){t.isBtnLoading=!1,t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)})})},scrollToRect:function(){var e=this.$store.getters.scale;if(1!=e){var t=this.$store.getters.curRect,n=Math.max(t.x*e-window.innerWidth/3,t.x),r=Math.max(t.y*e-window.innerHeight/3,t.y);this.$nextTick(function(){this.$refs.wrapper.scrollTo(n,r)}),window.wrapper=this.$refs.wrapper}},changeSwitch:function(){this.$store.commit("setCover",{cover:this.switch1}),this.updateCanvas+=1}}}},765:function(e,t,n){var r=n(20)(n(766),n(767),null,null);r.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/canvas_op3.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] canvas_op3.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},766:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(187),a=n.n(r),o=n(28),s=(n.n(o),n(34)),i=n(628),c=n.n(i),d=n(633),l=n.n(d),u=n(617);t.default={name:"canvasOp",components:{KeyEventOpt:c.a,MouseEventOpt:l.a},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},methods:{setInitCanvasImage:function(){var e=document.getElementById("canvas-scope");e.width=300,e.height=window.innerHeight;var t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#606E9A"),n.addColorStop(1,"#386093"),t.fillStyle=n,t.fillRect(0,0,300,window.innerHeight),t.strokeStyle="white",t.font="30px Arial",t.textAlign="center",t.textBaseline="middle",t.translate(e.width/2,e.height/2),t.strokeText("Operate Area",0,0),t.save()},redraw_canvas:function(){var e=document.getElementById("canvas-scope"),t=e.getContext("2d"),n=this.$store.getters.image,r=this.$store.getters.scale;if(n.empty)return t.restore();this.updateCanvas(n,e,t,r)},updateCanvas:function(e,t,n,r){t.width=e.width*r,t.height=e.height*r,n.drawImage(e,0,0,e.naturalWidth||e.width,e.naturalHeight||e.height,0,0,e.width*r,e.height*r),this.drawAllRect(n,r)},drawAllRect:function(e,t){var n=this.$store.getters.curRect,r=this.$store.getters.rects,o=this.$store.getters.cover;window.rects=r,a()(r).forEach(function(r,a){e.lineWidth=1.5*t,e.globalAlpha=.5,r.mselected?(e.strokeStyle="#1892e8bf",e.fillStyle="#1892e8a0"):r.kselected?(e.strokeStyle="#e8e818bf",e.fillStyle="#e8e818a0"):r==n?(e.strokeStyle="#2aa766",e.fillStyle="#2aa766a0"):(r.red=r.red||s.a.getRed(),e.strokeStyle=r.red,e.fillStyle="#0000"),o&&(e.fillStyle="#BEB7ADE0"),(r.deleted||3==r.op)&&(e.fillStyle="#000000a0",e.lineWidth=4*t),e.strokeRect(r.x*t,r.y*t,r.w*t,r.h*t),e.fillRect(r.x*t,r.y*t,r.w*t,r.h*t),this.draw_corner(e,r,t)}.bind(this));var i=this.$store.getters.refRects;a()(i).forEach(function(n,r){n.red=n.red||s.a.getRed(),e.lineWidth=1.5*t,e.strokeStyle=n.red,e.strokeRect(n.x*t,n.y*t,n.w*t,n.h*t)}.bind(this))},draw_corner:function(e,t,n){if(t.corner){var r={x:0,y:0};switch(t.corner){case"topleft":r.x=t.x,r.y=t.y;break;case"topright":r.x=t.x+t.w,r.y=t.y;break;case"bottomleft":r.x=t.x,r.y=t.y+t.h;break;case"bottomright":r.x=t.x+t.w,r.y=t.y+t.h;break;case"top":r.x=t.x+t.w/2,r.y=t.y;break;case"left":r.x=t.x,r.y=t.y+t.h/2;break;case"bottom":r.x=t.x+t.w/2,r.y=t.y+t.h;break;case"right":r.x=t.x+t.w,r.y=t.y+t.h/2}e.fillStyle="#FF0000",e.beginPath(),e.arc(r.x*n,r.y*n,3,0,2*Math.PI),e.fill()}},update_canvas:function(e){this.redraw_canvas()},handleKeyEvent:function(e){"keydown"==e.type?this.$store.dispatch("handleKeyDownEvent",e):"keyup"==e.type&&this.$store.dispatch("handleKeyUpEvent",e),this.redraw_canvas(),this.$emit("scrollToRect")}},mounted:function(){this.setInitCanvasImage(),u.a.$on("keyEvent",this.handleKeyEvent)}}},767:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{attrs:{id:e.canvasId}},[n("KeyEventOpt"),e._v(" "),n("MouseEventOpt",{attrs:{canvasId:e.canvasId},on:{drawnow:e.update_canvas}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},768:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outter-wrapper"},[n("div",{ref:"wrapper",staticClass:"canvas-layout",style:{height:e.getHeight}},[n("div",[n("canvas-op",{attrs:{redraw:e.updateCanvas},on:{scrollToRect:e.scrollToRect}})],1)]),e._v(" "),n("div",{staticClass:"switch"},[n("i-switch",{staticStyle:{margin:"auto 5px"},on:{"on-change":e.changeSwitch},model:{value:e.switch1,callback:function(t){e.switch1=t},expression:"switch1"}}),e._v("打开覆盖\n  ")],1),e._v(" "),n("Button",{staticClass:"button",attrs:{type:"info",size:"large",icon:"checkmark-round",long:"",loading:e.isBtnLoading},on:{click:e.submit}},[e.isBtnLoading?n("span",[e._v("进行中")]):n("span",[e._v("提交")])]),e._v(" "),n("help")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});