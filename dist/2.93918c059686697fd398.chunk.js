webpackJsonp([2],{599:function(e,t,n){n(760);var r=n(21)(n(762),n(783),"data-v-d729d802",null);r.options.__file="/home/xian/projects/Z/src/views/jiaodui/b_OneByOneCheck.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] b_OneByOneCheck.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},658:function(e,t,n){"use strict";var r=n(25);t.a=new r.default({data:function(){return{}},computed:{},methods:{}})},760:function(e,t,n){var r=n(761);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},761:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.layout-content-main[data-v-d729d802] {\n  padding: 10px;\n  border: 1px;\n  text-align: center;\n  color: #9ea7b4;\n}\n.canvas-layout[data-v-d729d802] {\n    overflow: scroll;\n    text-align: center;\n    padding: 4px;\n    margin: 10px;\n    background-color: #cccccc;\n    box-shadow: 0px 0px 3px 3px #363E4E;\n    border-radius: 2px;\n}\n.button[data-v-d729d802] {\n    background-color: #cccccc29;\n    border-color: #cccccc;\n    margin-top: 5px auto;\n    width: 99%;\n}\n.button[data-v-d729d802]:hover {\n    color: #fff;\n    background-color: #2db7f5; /*#19be6b; /*#28a9e4*/\n    border-color: #2db7f5; /*#47cb89; /*#4782cb*/\n}\n.switch[data-v-d729d802] {\n    font-size: 1rem;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    width: 99%;\n    margin: 5px;\n    display: none;\n}\n.outter-wrapper[data-v-d729d802] {\n  text-align: center;\n}\n",""])},762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(763),a=n.n(r),s=n(35),o=n(776),i=n.n(o),c=n(192),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default={name:"bCheckLeak",components:{canvasOp:a.a,help:i.a},data:function(){return{status:0,switch1:!0,rects:[],task_id:"",updateCanvas:1,submitType:"error",isBtnLoading:!1}},computed:d({getHeight:function(){return window.innerHeight-160+"px"}},Object(c.b)({solidRects:function(e){return e.canvas.rects},curRect:function(e){return e.canvas.curRect}})),watch:{curRect:function(e,t){0!=_.filter(this.solidRects,function(e){return!e.kselmarked}).length?this.submitType="error":this.submitType="success"}},mounted:function(){this.getWorkingData(),this.$store.commit("setScale",{scale:1}),this.$Notice.config({top:50,duration:3})},beforeDestroy:function(){this.$store.commit("resetAll")},methods:{getWorkingData:function(){var e=this,t="/api/pagetask/obtain/";this.$route.params.tid&&(t="/api/pagetask/"+this.$route.params.tid+"/"),e.$Loading.start(),s.a.ajax(t).then(function(t){return e.$Loading.finish(),e.status=t.data.status,e.task_id=t.data.task_id,e.image_url=t.data.image_url,e.rects=t.data.rects,e.$store.commit("updateBannerHeader",t.data.page_info),s.a.createImgObjWithUrl(e.image_url)}).then(function(t){e.$store.commit("setImageAndRects",{image:t.target,rects:e.rects}),e.updateCanvas+=1}).catch(function(t){e.$Loading.finish(),e.$Notice.error({title:e.$t("Failed"),desc:e.$t(t.message||"")})})},submit:function(){var e="/api/pagetask/"+this.task_id+"/save/",t=this;this.isBtnLoading=!0,document.getElementsByClassName("canvas-layout")[0].focus();var n=_.forEach(_.cloneDeep(_.filter(this.solidRects,function(e){return e.kselmarked})),function(e){e.deleted&&(e.op=3)});s.a.ajax.post(e,{rects:n}).then(function(e){if(0!=e.data.status)throw{message:e.data.msg};t.isBtnLoading=!1,t.$Notice.success({title:"٩(˘◡˘ )",desc:"调整结果暂存成功"}),t.getWorkingData()}).catch(function(e){t.isBtnLoading=!1,t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)})})},done_submit:function(){var e="/api/pagetask/"+this.task_id+"/done/",t=this;this.isBtnLoading=!0,document.getElementsByClassName("canvas-layout")[0].focus();var n=_.forEach(_.cloneDeep(this.solidRects),function(e){e.deleted&&(e.op=3)});s.a.ajax.post(e,{rects:n}).then(function(e){if(0!=e.data.status)throw{message:e.data.msg};t.isBtnLoading=!1,t.$Notice.success({title:"٩(˘◡˘ )",desc:"任务提交成功，自动领取下一任务"}),t.$route.params.tid?t.$router.push({path:"/collate_tasks/page_rects"}):t.getWorkingData()}).catch(function(e){t.isBtnLoading=!1,t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)})})},scrollToRect:function(){var e=this.$store.getters.scale,t=document.getElementsByClassName("canvas-layout")[0],n=t.clientWidth,r=t.clientHeight-20,a=t.scrollTop,s=t.scrollLeft,o=this.$store.getters.curRect;if(o.y*e>a&&o.y*e+o.h<a+r&&o.x*e>s&&o.x*e+o.w<s+n)return!0;var i=Math.max(o.x*e-window.innerWidth/3,o.x),c=Math.max(o.y*e-window.innerHeight/3,o.y);this.$nextTick(function(){this.$refs.wrapper.scrollTo(i,c)}),window.wrapper=this.$refs.wrapper},changeSwitch:function(){this.$store.commit("setCover",{cover:this.switch1}),this.updateCanvas+=1}}}},763:function(e,t,n){var r=n(21)(n(764),n(775),null,null);r.options.__file="/home/xian/projects/Z/src/views/jiaodui/components/canvas_op3.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] canvas_op3.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},764:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(106),a=n.n(r),s=n(29),o=(n.n(s),n(35)),i=n(765),c=n.n(i),d=n(770),l=n.n(d),u=n(658);t.default={name:"canvasOp",components:{KeyEventOpt:c.a,MouseEventOpt:l.a},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},methods:{setInitCanvasImage:function(){var e=document.getElementById("canvas-scope");e.width=300,e.height=window.innerHeight;var t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#606E9A"),n.addColorStop(1,"#386093"),t.fillStyle=n,t.fillRect(0,0,300,window.innerHeight),t.strokeStyle="white",t.font="30px Arial",t.textAlign="center",t.textBaseline="middle",t.translate(e.width/2,e.height/2),t.strokeText("Operate Area",0,0),t.save()},redraw_canvas:function(){var e=document.getElementById("canvas-scope"),t=e.getContext("2d"),n=this.$store.getters.image,r=this.$store.getters.scale;if(n.empty)return t.restore();this.updateCanvas(n,e,t,r)},updateCanvas:function(e,t,n,r){t.width=e.width*r,t.height=e.height*r,n.drawImage(e,0,0,e.naturalWidth||e.width,e.naturalHeight||e.height,0,0,e.width*r,e.height*r),this.drawAllRect(n,r)},drawAllRect:function(e,t){var n=this.$store.getters.curRect,r=this.$store.getters.rects,s=this.$store.getters.cover;window.rects=r,a()(r).forEach(function(r,a){e.lineWidth=1.5*t,e.globalAlpha=.5,r.mselected?(e.strokeStyle="#203462bf",e.fillStyle="#203462a0"):r.kselected?(e.strokeStyle="#db6161bf",e.fillStyle="#db6161a0"):r==n?(e.strokeStyle="#2aa766",e.fillStyle="#2aa766a0"):r.kselmarked?(e.strokeStyle="#1892e8bf",e.fillStyle="#1892e8a0"):(r.red=r.red||o.a.getRed(),e.strokeStyle=r.red,e.fillStyle="#0000"),s&&(e.fillStyle="#BEB7ADE0"),(r.deleted||3==r.op)&&(e.fillStyle="#000000a0",e.lineWidth=4*t),e.strokeRect(r.x*t,r.y*t,r.w*t,r.h*t),e.fillRect(r.x*t,r.y*t,r.w*t,r.h*t),this.draw_corner(e,r,t)}.bind(this));var i=this.$store.getters.refRects;a()(i).forEach(function(n,r){n.red=n.red||o.a.getRed(),e.lineWidth=1.5*t,e.strokeStyle=n.red,e.strokeRect(n.x*t,n.y*t,n.w*t,n.h*t)}.bind(this))},draw_corner:function(e,t,n){if(t.corner){var r={x:0,y:0};switch(t.corner){case"topleft":r.x=t.x,r.y=t.y;break;case"topright":r.x=t.x+t.w,r.y=t.y;break;case"bottomleft":r.x=t.x,r.y=t.y+t.h;break;case"bottomright":r.x=t.x+t.w,r.y=t.y+t.h;break;case"top":r.x=t.x+t.w/2,r.y=t.y;break;case"left":r.x=t.x,r.y=t.y+t.h/2;break;case"bottom":r.x=t.x+t.w/2,r.y=t.y+t.h;break;case"right":r.x=t.x+t.w,r.y=t.y+t.h/2}e.fillStyle="#FF0000",e.beginPath(),e.arc(r.x*n,r.y*n,3,0,2*Math.PI),e.fill()}},update_canvas:function(e){this.redraw_canvas()},handleKeyEvent:function(e){"keydown"==e.type?this.$store.dispatch("handleKeyDownEvent",e):"keyup"==e.type&&this.$store.dispatch("handleKeyUpEvent",e),this.redraw_canvas(),this.$emit("scrollToRect")}},mounted:function(){this.setInitCanvasImage(),u.a.$on("keyEvent",this.handleKeyEvent)}}},765:function(e,t,n){n(766);var r=n(21)(n(768),n(769),"data-v-605cf65e",null);r.options.__file="/home/xian/projects/Z/src/views/jiaodui/components/keyEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] keyEventOpt3.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},766:function(e,t,n){var r=n(767);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},767:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n",""])},768:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(658);t.default={methods:{handler:function(e){var t={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",8:"delete",27:"help",17:"ctrl"},n=t[e.keyCode],a=e.type,s=e.shiftKey,o=e.altKey,i=e.ctrlKey;n&&("ctrl"==n&&(n="noop",i=!0),r.a.$emit("keyEvent",{type:a,action:n,modify:{enlarge:s,shrink:o,step:i}}),e.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),r.a.$off("keyEvent")}}},769:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},770:function(e,t,n){n(771);var r=n(21)(n(773),n(774),"data-v-156550cb",null);r.options.__file="/home/xian/projects/Z/src/views/jiaodui/components/mouseEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] mouseEventOpt3.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},771:function(e,t,n){var r=n(772);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},772:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"",""])},773:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(106),a=n.n(r);t.default={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(e,t){return{x:e,y:t}},dist:function(e,t){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},getHandle:function(e,t){return this.dist(e,this.point(t.x,t.y))<=this.handle_size?"topleft":this.dist(e,this.point(t.x+t.w,t.y))<=this.handle_size?"topright":this.dist(e,this.point(t.x,t.y+t.h))<=this.handle_size?"bottomleft":this.dist(e,this.point(t.x+t.w,t.y+t.h))<=this.handle_size?"bottomright":this.dist(e,this.point(t.x+t.w/2,t.y))<=this.handle_size?"top":this.dist(e,this.point(t.x,t.y+t.h/2))<=this.handle_size?"left":this.dist(e,this.point(t.x+t.w/2,t.y+t.h))<=this.handle_size?"bottom":this.dist(e,this.point(t.x+t.w,t.y+t.h/2))<=this.handle_size&&"right"},mark_corner:function(e,t){this.current&&(this.current.corner=!1);var n=a.a.find(t,function(t){if(t.deleted)return!1;var n=this.getHandle(e,t);return n&&(t.corner=n),n}.bind(this));this.current=n},clear_corner:function(e){e.forEach(function(e,t){e.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(e){var t=e||window.event,n={x:0,y:0};t.pageX?(n.x=t.pageX,n.y=t.pageY):t.clientX&&(n.x=t.clientX,n.y=t.clientY);var r=this.$store.getters.scale,a=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,s=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,o=this.canvas.getBoundingClientRect().top+a,i=this.canvas.getBoundingClientRect().left+s,c=(n.y-o)/r;return{x:~~((n.x-i)/r),y:~~c}},getRectOverByPoint:function(e,t){return a.a.find(t,function(t){if(t.deleted)return!1;var n=e.x-t.x,r=e.y-t.y;return 0<=n&&n<=t.w&&0<=r&&r<=t.h})},markRectSelected:function(e,t){e&&(window.nn=this,this.current=e,this.current&&this.current.id?this.current.mselected=!1:(this.current.mselected=!0,this.current.kselmarked=!0),this.current.$=t,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var e=this;e.canvas.onselectstart=function(e){return e.preventDefault(),!1},e.canvas.onmousedown=function(t){var n=e.$store.getters.rects;if(e.drag.current&&e.drag.current.corner)e.drag.draggable=!0;else{var r=e.translat_point(t),a=e.getRectOverByPoint(r,n);if(e.markRectSelected(a,r),window.dd=e,!a&&e.draw.enable){e.draw.drawing=!0;var s=Object.assign({},n[0]);s.id="",s.x=r.x,s.y=r.y,e.draw.additions=s,e.$store.commit("startNewRect",{rect:s})}}e.redraw_canvas()},e.canvas.onmousemove=a.a.throttle(function(t){e.current=e.$store.getters.curRect;var n=e.translat_point(t);if(e.draw.drawing){var r=e.draw.additions;r.w=n.x-r.x,r.h=n.y-r.y,e.redraw_canvas()}else if(e.drag.draggable){var a=e.drag.current;switch(e.drag.current.corner){case"topleft":a.w+=a.x-n.x,a.h+=a.y-n.y,a.x=n.x,a.y=n.y;break;case"topright":a.w=n.x-a.x,a.h+=a.y-n.y,a.y=n.y;break;case"bottomleft":a.w+=a.x-n.x,a.x=n.x,a.h=n.y-a.y;break;case"bottomright":a.w=n.x-a.x,a.h=n.y-a.y;break;case"top":a.h+=a.y-n.y,a.y=n.y;break;case"left":a.w+=a.x-n.x,a.x=n.x;break;case"bottom":a.h=n.y-a.y;break;case"right":a.w=n.x-a.x}e.redraw_canvas()}else e.current&&e.current.mselected?(e.current.x+=n.x-e.current.$.x,e.current.y+=n.y-e.current.$.y,e.current.$.x=n.x,e.current.$.y=n.y,e.redraw_canvas()):(e.drag.mark_corner(n,e.$store.getters.rects),e.redraw_canvas());return t.preventDefault&&t.preventDefault(),!1},100),e.canvas.onmouseup=function(t){if(e.drag.draggable?e.drag.draggable=!1:e.current&&e.current.mselected&&(e.current.mselected=!1),e.draw.drawing){var n=e.draw.additions;e.$store.dispatch("closeNewRect",{rect:n,canvas:e}),e.$nextTick(function(){var e=this.translat_point(t),n=this.getRectOverByPoint(e,rects);this.markRectSelected(n,e),this.current.mselected=!1}.bind(e))}e.draw.drawing=!1,e.redraw_canvas()}}}},774:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},775:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{attrs:{id:e.canvasId}},[n("KeyEventOpt"),e._v(" "),n("MouseEventOpt",{attrs:{canvasId:e.canvasId},on:{drawnow:e.update_canvas}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},776:function(e,t,n){n(777);var r=n(21)(n(779),n(780),"data-v-523f1dd2",null);r.options.__file="/home/xian/projects/Z/src/views/jiaodui/components/help.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] help.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},777:function(e,t,n){var r=n(778);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},778:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.cover[data-v-523f1dd2] {\n  width:100%;\n  height:100%;\n  background-color: currentColor; /*steelblue;*/\n  position:absolute;\n  top:0;\n  left:0;\n  z-index:2;\n  opacity:0.95;\n  /*兼容IE8及以下版本浏览器*/\n  filter: alpha(opacity=90);\n  overflow: scroll;\n}\n.hide[data-v-523f1dd2] {\n\tdisplay: none;\n}\n.content-wrapper[data-v-523f1dd2] {\n\ttext-align: center;\n\tmargin: 10px;\n  border: 2px grey dashed;\n\tcolor: white;\n\tfont-size: 2em;\n  width: 100%;\n  height: 100%;\n}\n.img-wrapper[data-v-523f1dd2] {\n  margin: 70px 0 30px;\n}\n.text-wrapper[data-v-523f1dd2] {\n    display: flex;\n    justify-content: space-evenly;\n    text-align: left;\n}\n.help-guide[data-v-523f1dd2] {\n  position: fixed;\n  top: 120px;\n  font-size: 32px;\n  margin-left: 40px;\n}\n",""])},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(658);t.default={name:"HelpPage",data:function(){return{toHide:!0,withGlyph:!0}},methods:{openHelp:function(){this.toHide=!1}},mounted:function(){var e=this;r.a.$on("keyEvent",function(t){"help"==t.action&&"keydown"==t.type&&(e.toHide=!e.toHide)}),(this.$route.path.includes("confidence")||this.$route.path.includes("classify"))&&(this.withGlyph=!0),this.$route.path.includes("page_rects")&&(this.withGlyph=!1)}}},780:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"help-guide",on:{click:e.openHelp}},[n("Icon",{attrs:{type:"ios-help"}},[e._v("F1 帮助")])],1),e._v(" "),n("div",{staticClass:"cover",class:{hide:e.toHide}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[e.withGlyph?n("div",[e._m(2,!1,!1)]):n("div",{staticClass:"v1"},[e._m(0,!1,!1),e._v(" "),e._m(1,!1,!1)])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(781)}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-wrapper"},[n("ul",[n("li",[e._v("[F1] 本帮助页面/切换")]),e._v(" "),n("li",[e._v("[1-5] 【显示功能】控制切分图片的放大倍率")]),e._v(" "),n("li",[e._v("[AWSD] 控制字块的选择")]),e._v(" "),n("li",[e._v("[space] 切分框操作模式/切换")]),e._v(" "),n("li",[e._v("小技巧：单边调整键自动进入操作模式")])]),e._v(" "),n("ul",[n("li",[e._v("[ shift + [←↑↓→] ] 【操作模式】单边调整膨胀")]),e._v(" "),n("li",[e._v("[ alt+ [←↑↓→] ] 【操作模式】单边调整缩小")]),e._v(" "),n("li",[e._v("[ ←↑↓→ ]【操作模式】单方向移动切分框")]),e._v(" "),n("li",[e._v("[ ctrl + [←↑↓→] ]【操作模式】加速单方向移动切分框")]),e._v(" "),n("li",[e._v("[k] 【操作模式】删除当前切分框/切换")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(782)}})])}]},e.exports.render._withStripped=!0},781:function(e,t,n){e.exports=n.p+"7abbde8a433c04bd1e44523d2544a41a.png"},782:function(e,t,n){e.exports=n.p+"3e5940a1c7e4a71ea6ea49c1a2801864.png"},783:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outter-wrapper"},[n("div",{ref:"wrapper",staticClass:"canvas-layout",style:{height:e.getHeight}},[n("div",[n("canvas-op",{attrs:{redraw:e.updateCanvas},on:{scrollToRect:e.scrollToRect}})],1)]),e._v(" "),n("div",{staticClass:"switch"},[n("i-switch",{staticStyle:{margin:"auto 5px"},on:{"on-change":e.changeSwitch},model:{value:e.switch1,callback:function(t){e.switch1=t},expression:"switch1"}}),e._v("打开覆盖\n  ")],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"error",icon:"checkmark-round",long:"",loading:e.isBtnLoading},on:{click:e.submit}},[e.isBtnLoading?n("span",[e._v("进行中")]):n("span",[e._v("暂存结果")])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"success",disabled:"error"!=e.submitType||5!=e.status,icon:"checkmark-round",long:"",loading:e.isBtnLoading},on:{click:e.done_submit}},[e.isBtnLoading?n("span",[e._v("进行中")]):n("span",[e._v("完成任务")])])],1)],1),e._v(" "),n("help")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});