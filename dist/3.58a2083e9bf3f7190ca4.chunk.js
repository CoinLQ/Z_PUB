webpackJsonp([3],{737:function(t,e,n){n(933);var r=n(24)(n(935),n(936),"data-v-22441c36",null);r.options.__file="E:\\projects\\Z\\src\\views\\jiaodui\\prepage_view.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] prepage_view.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},792:function(t,e,n){"use strict";var r=n(11);e.a=new r.default({data:function(){return{}},computed:{},methods:{}})},801:function(t,e,n){var r=n(24)(n(802),n(813),null,null);r.options.__file="E:\\projects\\Z\\src\\views\\jiaodui\\components\\canvas_op3.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] canvas_op3.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},802:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(148),s=n.n(r),i=n(32),o=(n.n(i),n(39)),a=n(803),c=n.n(a),d=n(808),l=n.n(d),u=n(792);e.default={name:"canvasOp",components:{KeyEventOpt:c.a,MouseEventOpt:l.a},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},methods:{strokeColorA:function(){return"#c32221"},setInitCanvasImage:function(){var t=document.getElementById("canvas-scope");t.width=300,t.height=window.innerHeight;var e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#606E9A"),n.addColorStop(1,"#386093"),e.fillStyle=n,e.fillRect(0,0,300,window.innerHeight),e.strokeStyle="white",e.font="30px Arial",e.textAlign="center",e.textBaseline="middle",e.translate(t.width/2,t.height/2),e.strokeText("Operate Area",0,0),e.save()},redraw_canvas:function(){var t=document.getElementById("canvas-scope"),e=t.getContext("2d"),n=this.$store.getters.image,r=this.$store.getters.scale;if(n.empty)return e.restore();this.updateCanvas(n,t,e,r)},updateCanvas:function(t,e,n,r){e.width=t.width*r,e.height=t.height*r,n.drawImage(t,0,0,t.naturalWidth||t.width,t.naturalHeight||t.height,0,0,t.width*r,t.height*r),this.drawAllRect(n,r)},drawAllRect:function(t,e){var n=this.$store.getters.curRect,r=this.$store.getters.rects;this.$store.getters.cover;window.rects=r,s()(r).forEach(function(r,s){t.lineWidth=1*e,t.globalAlpha=.8,r.deleted||3==r.op||(r.changed||2==r.op?(t.strokeStyle="#88c177",t.fillStyle="#0000",t.lineWidth=1*e):(r.red=r.red||o.a.getRed(),t.strokeStyle=this.strokeColorA(),t.fillStyle="#0000",t.lineWidth=1*e),t.strokeRect(r.x*e,r.y*e,r.w*e,r.h*e),this.draw_corner(t,r,e),r==n&&(t.fillStyle="#c32221",t.globalAlpha=.2,t.fillRect(r.x*e,r.y*e,r.w*e,r.h*e)))}.bind(this));var i=this.$store.getters.refRects;s()(i).forEach(function(n,r){n.red=n.red||o.a.getRed(),t.lineWidth=2*e,t.strokeStyle=this.strokeColorA(),t.strokeRect(n.x*e,n.y*e,n.w*e,n.h*e)}.bind(this))},draw_corner:function(t,e,n){if(e.corner){var r=Math.min(2.5*n,5);t.fillStyle="#408fef";var s={x:0,y:0};switch(e.corner){case"topleft":s.x=e.x,s.y=e.y;break;case"topright":s.x=e.x+e.w,s.y=e.y;break;case"top":s.x=e.x+e.w/2,s.y=e.y;break;case"left":s.x=e.x,s.y=e.y+e.h/2;break;case"right":s.x=e.x+e.w,s.y=e.y+e.h/2;break;case"bottomleft":s.x=e.x,s.y=e.y+e.h,t.fillStyle="#c32221";break;case"bottomright":s.x=e.x+e.w,s.y=e.y+e.h,t.fillStyle="#c32221";break;case"bottom":s.x=e.x+e.w/2,s.y=e.y+e.h,t.fillStyle="#c32221"}t.beginPath(),t.arc(s.x*n,s.y*n,r,0,2*Math.PI),t.fill()}},update_canvas:function(t){this.redraw_canvas()},handleKeyEvent:function(t){"keydown"==t.type?this.$store.dispatch("handleKeyDownEvent",t):"keyup"==t.type&&this.$store.dispatch("handleKeyUpEvent",t),this.redraw_canvas(),this.$emit("scrollToRect")}},mounted:function(){this.setInitCanvasImage(),u.a.$on("keyEvent",this.handleKeyEvent)}}},803:function(t,e,n){n(804);var r=n(24)(n(806),n(807),"data-v-605cf65e",null);r.options.__file="E:\\projects\\Z\\src\\views\\jiaodui\\components\\keyEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] keyEventOpt3.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},804:function(t,e,n){var r=n(805);"string"==typeof r&&(r=[[t.i,r,""]]);n(60)(r,{});r.locals&&(t.exports=r.locals)},805:function(t,e,n){e=t.exports=n(59)(),e.push([t.i,"\n",""])},806:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(792);e.default={methods:{handler:function(t){var e={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",8:"delete",46:"delete",27:"help",17:"ctrl"},n=e[t.keyCode],s=t.type,i=t.shiftKey,o=t.altKey,a=t.ctrlKey;n&&("ctrl"==n&&(n="noop",a=!0),r.a.$emit("keyEvent",{type:s,action:n,modify:{enlarge:i,shrink:o,step:a,ctrlKey:a}}),t.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),r.a.$off("keyEvent")}}},807:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]},t.exports.render._withStripped=!0},808:function(t,e,n){n(809);var r=n(24)(n(811),n(812),"data-v-156550cb",null);r.options.__file="E:\\projects\\Z\\src\\views\\jiaodui\\components\\mouseEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] mouseEventOpt3.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},809:function(t,e,n){var r=n(810);"string"==typeof r&&(r=[[t.i,r,""]]);n(60)(r,{});r.locals&&(t.exports=r.locals)},810:function(t,e,n){e=t.exports=n(59)(),e.push([t.i,"",""])},811:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(148),s=n.n(r);e.default={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(t,e){return{x:t,y:e}},dist:function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},getHandle:function(t,e){return this.dist(t,this.point(e.x,e.y))<=this.handle_size?"topleft":this.dist(t,this.point(e.x+e.w,e.y))<=this.handle_size?"topright":this.dist(t,this.point(e.x,e.y+e.h))<=this.handle_size?"bottomleft":this.dist(t,this.point(e.x+e.w,e.y+e.h))<=this.handle_size?"bottomright":this.dist(t,this.point(e.x+e.w/2,e.y))<=this.handle_size?"top":this.dist(t,this.point(e.x,e.y+e.h/2))<=this.handle_size?"left":this.dist(t,this.point(e.x+e.w/2,e.y+e.h))<=this.handle_size?"bottom":this.dist(t,this.point(e.x+e.w,e.y+e.h/2))<=this.handle_size&&"right"},getNearestCorner:function(t,e){var n=this.dist(t,this.point(e.x,e.y));return n<=this.handle_size?{type:"topleft",dist:n}:(n=this.dist(t,this.point(e.x+e.w,e.y)))<=this.handle_size?{type:"topright",dist:n}:(n=this.dist(t,this.point(e.x,e.y+e.h)))<=this.handle_size?{type:"bottomleft",dist:n}:(n=this.dist(t,this.point(e.x+e.w,e.y+e.h)))<=this.handle_size?{type:"bottomright",dist:n}:(n=this.dist(t,this.point(e.x+e.w/2,e.y)))<=this.handle_size?{type:"top",dist:n}:(n=this.dist(t,this.point(e.x,e.y+e.h/2)))<=this.handle_size?{type:"left",dist:n}:(n=this.dist(t,this.point(e.x+e.w/2,e.y+e.h)))<=this.handle_size?{type:"bottom",dist:n}:(n=this.dist(t,this.point(e.x+e.w,e.y+e.h/2)))<=this.handle_size&&{type:"right",dist:n}},mark_corner:function(t,e){this.current&&(this.current.corner=!1);for(var n=null,r=0;r<e.length;r++){var s=e[r];if(!s.deleted){var i=this.getNearestCorner(t,s);0==r?(n=e[0],n.cornerInfo=i):i&&(!n.cornerInfo||i.dist<n.cornerInfo.dist)&&(n=s,n.cornerInfo=i)}}n.corner=n.cornerInfo.type,this.current=n},clear_corner:function(t){t.forEach(function(t,e){t.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(t){var e=t||window.event,n={x:0,y:0};e.pageX?(n.x=e.pageX,n.y=e.pageY):e.clientX&&(n.x=e.clientX,n.y=e.clientY);var r=this.$store.getters.scale,s=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,o=this.canvas.getBoundingClientRect().top+s,a=this.canvas.getBoundingClientRect().left+i,c=(n.y-o)/r;return{x:~~((n.x-a)/r),y:~~c}},getRectOverByPoint:function(t,e){return s.a.find(e,function(e){if(e.deleted)return!1;var n=t.x-e.x,r=t.y-e.y;return 0<=n&&n<=e.w&&0<=r&&r<=e.h})},markRectSelected:function(t,e){t&&(window.nn=this,this.current=t,this.current&&this.current.id?this.current.mselected=!1:this.current.kselmarked=!0,this.current.$=e,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var t=this;t.canvas.onselectstart=function(t){return t.preventDefault(),!1},t.canvas.onmousedown=function(e){var n=t.$store.getters.rects;if(t.drag.current&&t.drag.current.corner)t.drag.draggable=!0;else{var r=t.translat_point(e),s=t.getRectOverByPoint(r,n);if(t.markRectSelected(s,r),window.dd=t,!s&&t.draw.enable){t.draw.drawing=!0;var i=Object.assign({},n[0]);i.id="",i.x=r.x,i.y=r.y,t.draw.additions=i,t.$store.commit("startNewRect",{rect:i})}}t.redraw_canvas()},t.canvas.onmousemove=s.a.throttle(function(e){t.current=t.$store.getters.curRect;var n=t.translat_point(e);if(t.draw.drawing){var r=t.draw.additions;r.w=n.x-r.x,r.h=n.y-r.y,t.redraw_canvas()}else if(t.drag.draggable){var s=t.drag.current;switch(t.drag.current.corner){case"topleft":s.w+=s.x-n.x,s.h+=s.y-n.y,s.x=n.x,s.y=n.y;break;case"topright":s.w=n.x-s.x,s.h+=s.y-n.y,s.y=n.y;break;case"bottomleft":s.w+=s.x-n.x,s.x=n.x,s.h=n.y-s.y;break;case"bottomright":s.w=n.x-s.x,s.h=n.y-s.y;break;case"top":s.h+=s.y-n.y,s.y=n.y;break;case"left":s.w+=s.x-n.x,s.x=n.x;break;case"bottom":s.h=n.y-s.y;break;case"right":s.w=n.x-s.x}s.kselmarked=!0,s.changed=!0,t.$store.commit("setCurRect",{rect:s}),t.redraw_canvas()}else t.current&&t.current.mselected?(t.current.x+=n.x-t.current.$.x,t.current.y+=n.y-t.current.$.y,t.current.$.x=n.x,t.current.$.y=n.y,t.redraw_canvas()):(t.drag.mark_corner(n,t.$store.getters.rects),t.redraw_canvas());return e.preventDefault&&e.preventDefault(),!1},100),t.canvas.onmouseup=function(e){if(t.drag.draggable?t.drag.draggable=!1:t.current&&t.current.mselected&&(t.current.mselected=!1),t.draw.drawing){var n=t.draw.additions;t.$store.dispatch("closeNewRect",{rect:n,canvas:t}),t.$nextTick(function(){var t=this.translat_point(e),n=this.getRectOverByPoint(t,rects);this.markRectSelected(n,t),this.current.mselected=!1}.bind(t))}t.draw.drawing=!1,t.redraw_canvas()}}}},812:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]},t.exports.render._withStripped=!0},813:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:t.canvasId}},[n("KeyEventOpt"),t._v(" "),n("MouseEventOpt",{attrs:{canvasId:t.canvasId},on:{drawnow:t.update_canvas}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},814:function(t,e,n){n(815);var r=n(24)(n(817),n(818),"data-v-523f1dd2",null);r.options.__file="E:\\projects\\Z\\src\\views\\jiaodui\\components\\help.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] help.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},815:function(t,e,n){var r=n(816);"string"==typeof r&&(r=[[t.i,r,""]]);n(60)(r,{});r.locals&&(t.exports=r.locals)},816:function(t,e,n){e=t.exports=n(59)(),e.push([t.i,"\n.cover[data-v-523f1dd2] {\r\n  width:100%;\r\n  height:100%;\r\n  background-color: currentColor; /*steelblue;*/\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  z-index:2;\r\n  opacity:0.95;\r\n  /*兼容IE8及以下版本浏览器*/\r\n  filter: alpha(opacity=90);\r\n  overflow: scroll;\n}\n.hide[data-v-523f1dd2] {\r\n\tdisplay: none;\n}\n.content-wrapper[data-v-523f1dd2] {\r\n\ttext-align: center;\r\n\tmargin: 10px;\r\n  border: 2px grey dashed;\r\n\tcolor: white;\r\n\tfont-size: 2em;\r\n  width: 100%;\r\n  height: 100%;\n}\n.img-wrapper[data-v-523f1dd2] {\r\n  margin: 70px 0 30px;\n}\n.text-wrapper[data-v-523f1dd2] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    text-align: left;\n}\n.help-guide[data-v-523f1dd2] {\r\n  position: fixed;\r\n  top: 120px;\r\n  font-size: 32px;\r\n  margin-left: 40px;\n}\r\n",""])},817:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(792);e.default={name:"HelpPage",data:function(){return{toHide:!0,withGlyph:!0}},methods:{openHelp:function(){this.toHide=!1}},mounted:function(){var t=this;r.a.$on("keyEvent",function(e){"help"==e.action&&"keydown"==e.type&&(t.toHide=!t.toHide)}),(this.$route.path.includes("confidence")||this.$route.path.includes("classify"))&&(this.withGlyph=!0),this.$route.path.includes("page_rects")&&(this.withGlyph=!1)}}},818:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"help-guide",on:{click:t.openHelp}},[n("Icon",{attrs:{type:"ios-help"}},[t._v("F1 帮助")])],1),t._v(" "),n("div",{staticClass:"cover",class:{hide:t.toHide}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[t.withGlyph?n("div",[t._m(2,!1,!1)]):n("div",{staticClass:"v1"},[t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(819)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-wrapper"},[n("ul",[n("li",[t._v("[F1] 本帮助页面/切换")]),t._v(" "),n("li",[t._v("[1-5] 【显示功能】控制切分图片的放大倍率")]),t._v(" "),n("li",[t._v("[AWSD] 控制字块的选择")]),t._v(" "),n("li",[t._v("[space] 切分框操作模式/切换")]),t._v(" "),n("li",[t._v("小技巧：单边调整键自动进入操作模式")])]),t._v(" "),n("ul",[n("li",[t._v("[ shift + [←↑↓→] ] 【操作模式】单边调整膨胀")]),t._v(" "),n("li",[t._v("[ alt+ [←↑↓→] ] 【操作模式】单边调整缩小")]),t._v(" "),n("li",[t._v("[ ←↑↓→ ]【操作模式】单方向移动切分框")]),t._v(" "),n("li",[t._v("[ ctrl + [←↑↓→] ]【操作模式】加速单方向移动切分框")]),t._v(" "),n("li",[t._v("[k] 【操作模式】删除当前切分框/切换")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(820)}})])}]},t.exports.render._withStripped=!0},819:function(t,e,n){t.exports=n.p+"7abbde8a433c04bd1e44523d2544a41a.png"},820:function(t,e,n){t.exports=n.p+"3e5940a1c7e4a71ea6ea49c1a2801864.png"},933:function(t,e,n){var r=n(934);"string"==typeof r&&(r=[[t.i,r,""]]);n(60)(r,{});r.locals&&(t.exports=r.locals)},934:function(t,e,n){e=t.exports=n(59)(),e.push([t.i,"\n.layout-content-main[data-v-22441c36] {\n  padding: 10px;\n  border: 1px;\n  text-align: center;\n  color: #9ea7b4;\n}\n.canvas-layout[data-v-22441c36] {\n    overflow: scroll;\n    text-align: center;\n    padding: 4px;\n    margin: 10px;\n    background-color: #cccccc;\n    box-shadow: 0px 0px 3px 3px #363E4E;\n    border-radius: 2px;\n}\n.button[data-v-22441c36] {\n    background-color: #cccccc29;\n    border-color: #cccccc;\n    margin-top: 5px auto;\n    width: 99%;\n}\n.button[data-v-22441c36]:hover {\n    color: #fff;\n    background-color: #2db7f5; /*#19be6b; /*#28a9e4*/\n    border-color: #2db7f5; /*#47cb89; /*#4782cb*/\n}\n.switch[data-v-22441c36] {\n    font-size: 1rem;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    width: 99%;\n    margin: 5px;\n    display: none;\n}\n.outter-wrapper[data-v-22441c36] {\n  text-align: center;\n}\n.ivu-btn.ivu-btn-text.ivu-btn-large[data-v-22441c36] {\n    color: grey;\n}\n",""])},935:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(801),s=n.n(r),i=n(39),o=n(814),a=n.n(o),c=n(149),d=n(253),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default={name:"bCheckLeak",components:{canvasOp:s.a,help:a.a},data:function(){return{confirm_modal:!1,inner_height:100,status:0,switch1:!0,rects:[],current:{},task_id:"",updateCanvas:1,submitType:"error",isBtnLoading:!1}},computed:l({getHeight:function(){return window.innerHeight-160+"px"}},Object(c.b)({solidRects:function(t){return t.canvas.rects},curRect:function(t){return t.canvas.curRect}})),watch:{curRect:function(t,e){0!=_.filter(this.solidRects,function(t){return!t.kselmarked}).length?this.submitType="error":this.submitType="success"}},mounted:function(){this.getWorkingData(),this.$store.commit("setScale",{scale:1}),this.$Notice.config({top:50,duration:3}),this.handleResize(),Object(d.b)(window,"resize",this.handleResize)},beforeDestroy:function(){this.$store.commit("resetAll"),Object(d.a)(window,"resize",this.handleResize)},methods:{handleResize:function(){this.inner_height=window.innerHeight-150+"px"},getWorkingData:function(){var t=this,e="/api/prepagecoltask/obtain/";this.$route.params.id&&(e="/api/prepagecoltask/"+this.$route.params.id+"/"),t.$Loading.start(),i.a.ajax(e).then(function(e){return t.$Loading.finish(),t.status=e.data.status,t.task_id=e.data.task_id,t.image_url=e.data.image_url,t.rects=e.data.rects,t.$store.commit("updateBannerHeader",e.data.page_info),t.current=_.find(t.rects,function(t){return t.x==e.data.current_x&&t.y==e.data.current_y})||t.current,i.a.createImgObjWithUrl(t.image_url)}).then(function(e){t.$store.commit("setImageAndRects",{image:e.target,rects:t.rects}),t.$store.commit("setCurRect",{rect:t.current}),t.updateCanvas+=1}).catch(function(e){t.$Loading.finish(),t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message||"")})})},submit:function(){var t="/api/prepagecoltask/"+this.task_id+"/save/",e=this;this.isBtnLoading=!0,document.getElementsByClassName("canvas-layout")[0].focus();var n=_.forEach(_.cloneDeep(this.solidRects),function(t){t.deleted?t.op=3:t.changed&&(t.op=2)});i.a.ajax.post(t,{rects:n,current_x:this.curRect.x,current_y:this.curRect.y}).then(function(t){if(0!=t.data.status)throw{message:t.data.msg};e.isBtnLoading=!1,e.$Notice.success({title:"随喜",desc:"切分校对保存成功"}),e.getWorkingData()}).catch(function(t){e.isBtnLoading=!1,e.$Notice.error({title:e.$t("Failed"),desc:e.$t(t.message)})})},done_submit:function(){var t="/api/prepagecoltask/"+this.task_id+"/done/",e=this;this.isBtnLoading=!0,document.getElementsByClassName("canvas-layout")[0].focus();var n=_.forEach(_.cloneDeep(this.solidRects),function(t){t.deleted&&(t.op=3)});i.a.ajax.post(t,{rects:n,current_x:this.curRect.x,current_y:this.curRect.y}).then(function(t){if(0!=t.data.status)throw{message:t.data.msg};e.isBtnLoading=!1,e.$Notice.success({title:"随喜",desc:"任务提交成功，自动领取下一任务"}),e.$router.push({path:"/collate_tasks/prepagetask"})}).catch(function(t){e.isBtnLoading=!1,e.$Notice.error({title:e.$t("Failed"),desc:e.$t(t.message)})})},scrollToRect:function(){var t=this.$store.getters.scale,e=document.getElementsByClassName("canvas-layout")[0],n=e.clientWidth,r=e.clientHeight-20,s=e.scrollTop,i=e.scrollLeft,o=this.$store.getters.curRect;if(o.y*t>s&&o.y*t+o.h<s+r&&o.x*t>i&&o.x*t+o.w<i+n)return!0;var a=Math.max(o.x*t-window.innerWidth/3,o.x),c=Math.max(o.y*t-window.innerHeight/3,o.y);this.$nextTick(function(){this.$refs.wrapper.scrollTo(a,c)}),window.wrapper=this.$refs.wrapper},changeSwitch:function(){this.$store.commit("setCover",{cover:this.switch1}),this.updateCanvas+=1}}}},936:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outter-wrapper"},[n("div",{ref:"wrapper",staticClass:"canvas-layout",style:{height:t.inner_height}},[n("div",[n("canvas-op",{attrs:{redraw:t.updateCanvas},on:{scrollToRect:t.scrollToRect}})],1)]),t._v(" "),n("div",{staticClass:"switch"},[n("i-switch",{staticStyle:{margin:"auto 5px"},on:{"on-change":t.changeSwitch},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),t._v("打开覆盖\r\n  ")],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"error",icon:"checkmark-round",long:"",loading:t.isBtnLoading},on:{click:t.submit}},[t.isBtnLoading?n("span",[t._v("进行中")]):n("span",[t._v("保存结果")])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"success",disabled:7==t.status,icon:"checkmark-round",long:"",loading:t.isBtnLoading},on:{click:function(e){t.confirm_modal=!0}}},[t.isBtnLoading?n("span",[t._v("进行中")]):n("span",[t._v("完成任务")])])],1),t._v(" "),n("Modal",{attrs:{title:"任务提交确认"},on:{"on-ok":t.done_submit,"on-cancel":function(t){}},model:{value:t.confirm_modal,callback:function(e){t.confirm_modal=e},expression:"confirm_modal"}},[n("p",[t._v("此任务提交后，将无法再次提交")]),t._v(" "),n("p",[t._v("是否确认提交？")])])],1),t._v(" "),n("help")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});