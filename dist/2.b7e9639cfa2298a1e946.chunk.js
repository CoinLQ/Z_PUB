webpackJsonp([2],{594:function(t,e,n){n(758);var a=n(20)(n(760),n(761),null,null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/b_classify.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] b_classify.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},617:function(t,e,n){"use strict";var a=n(27);e.a=new a.default({data:function(){return{}},computed:{},methods:{}})},628:function(t,e,n){n(629);var a=n(20)(n(631),n(632),"data-v-3aa1c758",null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/keyEventOpt3.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] keyEventOpt3.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},629:function(t,e,n){var a=n(630);"string"==typeof a&&(a=[[t.i,a,""]]);n(48)(a,{});a.locals&&(t.exports=a.locals)},630:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n",""])},631:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(617);e.default={methods:{handler:function(t){var e={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",17:"ctrl"},n=e[t.keyCode],r=t.type,s=t.shiftKey,i=t.altKey,o=t.ctrlKey;n&&("ctrl"==n&&(n="noop",o=!0),a.a.$emit("keyEvent",{type:r,action:n,modify:{enlarge:s,shrink:i,step:o}}),t.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc),document.body.addEventListener("keyup",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),document.body.removeEventListener("keyup",window.staticfunc),a.a.$off("keyEvent")}}},632:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]},t.exports.render._withStripped=!0},633:function(t,e,n){n(634);var a=n(20)(n(636),n(637),"data-v-0d2f0d92",null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/mouseEventOpt3.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] mouseEventOpt3.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},634:function(t,e,n){var a=n(635);"string"==typeof a&&(a=[[t.i,a,""]]);n(48)(a,{});a.locals&&(t.exports=a.locals)},635:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"",""])},636:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(187),r=n.n(a);e.default={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(t,e){return{x:t,y:e}},dist:function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},getHandle:function(t,e){return this.dist(t,this.point(e.x,e.y))<=this.handle_size?"topleft":this.dist(t,this.point(e.x+e.w,e.y))<=this.handle_size?"topright":this.dist(t,this.point(e.x,e.y+e.h))<=this.handle_size?"bottomleft":this.dist(t,this.point(e.x+e.w,e.y+e.h))<=this.handle_size?"bottomright":this.dist(t,this.point(e.x+e.w/2,e.y))<=this.handle_size?"top":this.dist(t,this.point(e.x,e.y+e.h/2))<=this.handle_size?"left":this.dist(t,this.point(e.x+e.w/2,e.y+e.h))<=this.handle_size?"bottom":this.dist(t,this.point(e.x+e.w,e.y+e.h/2))<=this.handle_size&&"right"},mark_corner:function(t,e){this.current&&(this.current.corner=!1);var n=r.a.find(e,function(e){if(e.deleted)return!1;var n=this.getHandle(t,e);return n&&(e.corner=n),n}.bind(this));this.current=n},clear_corner:function(t){t.forEach(function(t,e){t.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(t){var e=t||window.event,n={x:0,y:0};e.pageX?(n.x=e.pageX,n.y=e.pageY):e.clientX&&(n.x=e.clientX,n.y=e.clientY);var a=this.$store.getters.scale,r=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,s=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,i=this.canvas.getBoundingClientRect().top+r,o=this.canvas.getBoundingClientRect().left+s,c=(n.y-i)/a;return{x:~~((n.x-o)/a),y:~~c}},getRectOverByPoint:function(t,e){return r.a.find(e,function(e){if(e.deleted)return!1;var n=t.x-e.x,a=t.y-e.y;return 0<=n&&n<=e.w&&0<=a&&a<=e.h})},markRectSelected:function(t,e){t&&(window.nn=this,this.current.mselected=!1,this.current=t,this.current.mselected=!0,this.current.$=e,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var t=this;t.canvas.onselectstart=function(t){return t.preventDefault(),!1},t.canvas.onmousedown=function(e){var n=t.$store.getters.rects;if(t.drag.current&&t.drag.current.corner)t.drag.draggable=!0;else{var a=t.translat_point(e),r=t.getRectOverByPoint(a,n);if(t.markRectSelected(r,a),window.dd=t,!r&&t.draw.enable){t.draw.drawing=!0;var s=Object.assign({},n[0]);s.id="",s.x=a.x,s.y=a.y,t.draw.additions=s,t.$store.commit("startNewRect",{rect:s})}}t.redraw_canvas()},t.canvas.onmousemove=r.a.throttle(function(e){t.current=t.$store.getters.curRect;var n=t.translat_point(e);if(t.draw.drawing){var a=t.draw.additions;a.w=n.x-a.x,a.h=n.y-a.y,t.redraw_canvas()}else if(t.drag.draggable){var r=t.drag.current;switch(t.drag.current.corner){case"topleft":r.w+=r.x-n.x,r.h+=r.y-n.y,r.x=n.x,r.y=n.y;break;case"topright":r.w=n.x-r.x,r.h+=r.y-n.y,r.y=n.y;break;case"bottomleft":r.w+=r.x-n.x,r.x=n.x,r.h=n.y-r.y;break;case"bottomright":r.w=n.x-r.x,r.h=n.y-r.y;break;case"top":r.h+=r.y-n.y,r.y=n.y;break;case"left":r.w+=r.x-n.x,r.x=n.x;break;case"bottom":r.h=n.y-r.y;break;case"right":r.w=n.x-r.x}t.redraw_canvas()}else t.current&&t.current.mselected?(t.current.x+=n.x-t.current.$.x,t.current.y+=n.y-t.current.$.y,t.current.$.x=n.x,t.current.$.y=n.y,t.redraw_canvas()):(t.drag.mark_corner(n,t.$store.getters.rects),t.redraw_canvas());return e.preventDefault&&e.preventDefault(),!1},100),t.canvas.onmouseup=function(e){if(t.drag.draggable?t.drag.draggable=!1:t.current.mselected&&(t.current.mselected=!1),t.draw.drawing){var n=t.draw.additions;t.$store.dispatch("closeNewRect",{rect:n,canvas:t})}t.draw.drawing=!1,t.redraw_canvas()}}}},637:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]},t.exports.render._withStripped=!0},638:function(t,e,n){n(639);var a=n(20)(n(641),n(642),"data-v-3f632a9e",null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/help.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] help.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},639:function(t,e,n){var a=n(640);"string"==typeof a&&(a=[[t.i,a,""]]);n(48)(a,{});a.locals&&(t.exports=a.locals)},640:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n.cover[data-v-3f632a9e] {\n  width:100%;\n  height:100%;\n  background-color: currentColor; /*steelblue;*/\n  position:absolute;\n  top:0;\n  left:0;\n  z-index:2;\n  opacity:0.95;\n  /*兼容IE8及以下版本浏览器*/\n  filter: alpha(opacity=90);\n  overflow: scroll;\n}\n.hide[data-v-3f632a9e] {\n\tdisplay: none;\n}\n.content-wrapper[data-v-3f632a9e] {\n\ttext-align: center;\n\tmargin: 10px;\n  border: 2px grey dashed;\n\tcolor: white;\n\tfont-size: 2em;\n  width: 100%;\n  height: 100%;\n}\n.img-wrapper[data-v-3f632a9e] {\n  margin: 70px 0 30px;\n}\n.text-wrapper[data-v-3f632a9e] {\n    display: flex;\n    justify-content: space-evenly;\n    text-align: left;\n}\n",""])},641:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(617);e.default={name:"HelpPage",data:function(){return{toHide:!0,withGlyph:!0}},mounted:function(){var t=this;a.a.$on("keyEvent",function(e){"help"==e.action&&"keydown"==e.type&&(t.toHide=!t.toHide)}),(this.$route.path.includes("confidence")||this.$route.path.includes("classify"))&&(this.withGlyph=!0),this.$route.path.includes("onebyone")&&(this.withGlyph=!1)}}},642:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cover",class:{hide:t.toHide}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[t.withGlyph?n("div",[t._m(2,!1,!1)]):n("div",{staticClass:"v1"},[t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:n(643)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-wrapper"},[n("ul",[n("li",[t._v("[F1] 本帮助页面")]),t._v(" "),n("li",[t._v("[AWSD] 控制字块的选择")]),t._v(" "),n("li",[t._v("[←↑↓→] 控制切分框的移动、变形等操作")]),t._v(" "),n("li",[t._v("[1-9] 控制切分图片的放大倍率")]),t._v(" "),n("li",[t._v("[x] 移动切分框的四边")])]),t._v(" "),n("ul",[n("li",[t._v("[space] 选中切分框，作为操作对象")]),t._v(" "),n("li",[t._v("[shift] 放大状态")]),t._v(" "),n("li",[t._v("[alt] 缩小状态")]),t._v(" "),n("li",[t._v("[ctrl] 移动步长")]),t._v(" "),n("li",[t._v("[k] 标记切分框为删除状态/恢复状态")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:n(644)}})])}]},t.exports.render._withStripped=!0},643:function(t,e,n){t.exports=n.p+"7abbde8a433c04bd1e44523d2544a41a.png"},644:function(t,e,n){t.exports=n.p+"3e5940a1c7e4a71ea6ea49c1a2801864.png"},662:function(t,e,n){n(663);var a=n(20)(n(665),n(675),"data-v-67ea25a7",null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/confidence.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] confidence.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},663:function(t,e,n){var a=n(664);"string"==typeof a&&(a=[[t.i,a,""]]);n(48)(a,{});a.locals&&(t.exports=a.locals)},664:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n.layout-content-main[data-v-67ea25a7]{\n     padding: 10px;\n     border: 1px;\n     text-align: center;\n     color: #9ea7b4;\n     /*display: flex;*/\n     display: none;\n}\n.header[data-v-67ea25a7] {\n     width: 50%;\n     height: 26px;\n     text-align: center;\n     background-color: #2E363F;\n     /*color: #8B8B8C;*/\n     padding-top: 4px;\n     overflow: hidden;\n     box-shadow: 2px 2px 1px 0px #363E4E;\n}\n.canvas-layout[data-v-67ea25a7] {\n     overflow: scroll;\n     text-align: center;\n     padding: 4px;\n     margin: 10px;\n     background-color: #cccccc;\n     box-shadow: 0px 0px 3px 3px #363E4E;\n}\n.glyph-list[data-v-67ea25a7] {\n     display: flex;\n     flex-flow: column wrap;\n     align-items: flex-start;\n     justify-content: flex-start;\n     align-content: flex-start;\n     overflow: scroll;\n}\n.button-submit[data-v-67ea25a7] {\n     background-color: #cccccc29;\n     border-color: #cccccc;\n     flex-grow: 5;\n}\n.button-abandon[data-v-67ea25a7] {\n     background-color: #cccccc29;\n     border-color: #cccccc;\n}\n.button-submit[data-v-67ea25a7]:hover {\n     color: #fff;\n     background-color: #2db7f5; /*#19be6b; /*#28a9e4*/\n     border-color: #2db7f5; /*#47cb89; /*#4782cb*/\n}\n.button-abandon[data-v-67ea25a7]:hover {\n     color: #fff;\n     background-color: #f90; /*#19be6b; /*#28a9e4*/\n     border-color: #f90; /*#47cb89; /*#4782cb*/\n}\n",""])},665:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(666),r=n.n(a),s=n(669),i=n.n(s),o=n(34),c=n(187),l=n.n(c),d=n(638),u=n.n(d),h=n(617);e.default={name:"confidence",props:["rectData"],components:{canvasOp:r.a,glyphBlock:i.a,help:u.a},computed:{getHeightCanvas:function(){return window.innerHeight-130+"px"},getHeight:function(){return window.innerHeight-145+"px"},getDirection:function(){return this.rectData.length>20?"column":"row"}},data:function(){return{isBtnLoading:!1,preCheckTotal:100,postCheckTotal:200,updateCanvas:1}},watch:{rectData:function(){this.init()}},mounted:function(){this.init(),h.a.$on("keyEvent",function(t){"keydown"==t.type&&this.handleKeyEvent(t)}.bind(this))},beforeDestroy:function(){this.$store.commit("resetAll")},methods:{init:function(){this.$store.commit("resetAll"),this.$store.commit("setScale",{scale:6})},onHighlight:function(t){this.updateCanvas+=1,this.scrollToRect(t.rect)},scrollToRect:function(){var t=this.$store.getters.scale,e=this.$store.getters.curRect;this.$nextTick(function(){this.$refs.wrapper.scrollTo(e.x*t,Math.max(e.y*t-window.innerHeight/3,e.y))}),window.wrapper=this.$refs.wrapper},getImageData:function(t){var e=t.column_set;return e.url=o.a.getColumnImageUrlFromCode(e.col_id),e},submit:function(){var t=[],e=this.$refs.glyphs.$children;l()(e).forEach(function(e){t.push(e.getRectData())}),this.$emit("submit",{rects:t,_this:this})},handleKeyEvent:function(t){var e=t.action,n=t.modify.enlarge||t.modify.step?5:1,a=1;if("mov-up-w"==e||"mov-left-a"==e)a=-1;else{if("mov-down-s"!=e&&"mov-right-d"!=e)return;a=1}var r=this.$store.getters.curGlyph,s=this.$refs.glyphs.$children,i=l()(s).indexOf(r)+a*n,o=s.length;i=i<0?o+i:i>=o?i-o:i,s[i].onClick(),this.$nextTick(function(){var t=document.getElementsByClassName("glyph-list")[0],e=t.clientHeight,n=t.clientWidth,a=~~(e/302),r=~~(i/a),s=140*r-n/3,o=302*(~~((i/a-~~(i/a))*a)-1)-e/3;t.scrollTo(s,o)})}}}},666:function(t,e,n){var a=n(20)(n(667),n(668),null,null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/canvas_op_disable_draw.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] canvas_op_disable_draw.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},667:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(187),r=n.n(a),s=n(28),i=(n.n(s),n(34)),o=n(628),c=n.n(o),l=n(633),d=n.n(l),u=n(617);e.default={name:"canvasOp",components:{KeyEventOpt:c.a,MouseEventOpt:d.a},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},methods:{setInitCanvasImage:function(){var t=document.getElementById("canvas-scope");t.width=300,t.height=window.innerHeight;var e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#606E9A"),n.addColorStop(1,"#386093"),e.fillStyle=n,e.fillRect(0,0,300,window.innerHeight),e.strokeStyle="white",e.font="30px Arial",e.textAlign="center",e.textBaseline="middle",e.translate(t.width/2,t.height/2),e.strokeText("Operate Area",0,0),e.save()},redraw_canvas:function(){var t=document.getElementById("canvas-scope"),e=t.getContext("2d"),n=this.$store.getters.image,a=this.$store.getters.scale;if(n.empty)return e.restore();this.updateCanvas(n,t,e,a)},updateCanvas:function(t,e,n,a){e.width=t.width*a,e.height=t.height*a,n.drawImage(t,0,0,t.naturalWidth||t.width,t.naturalHeight||t.height,0,0,t.width*a,t.height*a),this.drawAllRect(n,a)},drawAllRect:function(t,e){var n=this.$store.getters.curRect,a=this.$store.getters.rects,s=this.$store.getters.cover;window.rects=a,r()(a).forEach(function(a,r){t.lineWidth=1.5*e,t.globalAlpha=.5,a.mselected?(t.strokeStyle="#1892e8bf",t.fillStyle="#1892e8a0"):a.kselected?(t.strokeStyle="#e8e818bf",t.fillStyle="#e8e818a0"):a==n?(t.strokeStyle="#2aa766",t.fillStyle="#2aa766a0"):(a.red=a.red||i.a.getRed(),t.strokeStyle=a.red,t.fillStyle="#0000"),s&&(t.fillStyle="#BEB7ADE0"),a.deleted&&(t.fillStyle="#000000a0",t.lineWidth=4*e),t.strokeRect(a.x*e,a.y*e,a.w*e,a.h*e),t.fillRect(a.x*e,a.y*e,a.w*e,a.h*e),this.draw_corner(t,a,e)}.bind(this));var o=this.$store.getters.refRects;r()(o).forEach(function(n,a){n.red=n.red||i.a.getRed(),t.lineWidth=1.5*e,t.strokeStyle=n.red,t.strokeRect(n.x*e,n.y*e,n.w*e,n.h*e)}.bind(this))},draw_corner:function(t,e,n){if(e.corner){var a={x:0,y:0};switch(e.corner){case"topleft":a.x=e.x,a.y=e.y;break;case"topright":a.x=e.x+e.w,a.y=e.y;break;case"bottomleft":a.x=e.x,a.y=e.y+e.h;break;case"bottomright":a.x=e.x+e.w,a.y=e.y+e.h;break;case"top":a.x=e.x+e.w/2,a.y=e.y;break;case"left":a.x=e.x,a.y=e.y+e.h/2;break;case"bottom":a.x=e.x+e.w/2,a.y=e.y+e.h;break;case"right":a.x=e.x+e.w,a.y=e.y+e.h/2}t.fillStyle="#FF0000",t.beginPath(),t.arc(a.x*n,a.y*n,3,0,2*Math.PI),t.fill()}},update_canvas:function(t){this.redraw_canvas()},handleKeyEvent:function(t){"keydown"==t.type?this.$store.dispatch("handleKeyDownEvent",t):"keyup"==t.type&&this.$store.dispatch("handleKeyUpEvent",t),this.redraw_canvas(),this.$emit("scrollToRect")}},mounted:function(){this.setInitCanvasImage(),u.a.$on("keyEvent",this.handleKeyEvent)}}},668:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:t.canvasId}},[n("KeyEventOpt"),t._v(" "),n("MouseEventOpt",{attrs:{drawEnable:"false",canvasId:t.canvasId},on:{drawnow:t.update_canvas}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},669:function(t,e,n){n(670);var a=n(20)(n(672),n(674),"data-v-7779046d",null);a.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/jiaodui/components/glyph_block.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] glyph_block.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},670:function(t,e,n){var a=n(671);"string"==typeof a&&(a=[[t.i,a,""]]);n(48)(a,{});a.locals&&(t.exports=a.locals)},671:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\nimg[data-v-7779046d] {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 3px 3px 0 0;\n}\n.outer-wrapper[data-v-7779046d] {\n\tmargin: 20px 10px;\n}\n.inner-wrapper[data-v-7779046d] {\n\tbox-shadow: 2px 2px 1px 0px #363E4E;\n\tborder-radius: 3px;\n\t/*width: 240px;*/\n}\n.inner-wrapper[data-v-7779046d]:hover {\n\tbox-shadow: 0px 0px 3px 3px #363E4E;\n}\n.glyph[data-v-7779046d] {\n\twidth: 140px;\n\theight: 140px;\n\tborder-radius: 3px 3px 0 0;\n}\n.char[data-v-7779046d] {\n\tdisplay: none;\n    text-align: center;\n    background-color: #2E363F;\n    color: #fffdddee;\n    font-size: 80px;\n}\n.char-wrapper[data-v-7779046d] {\n    margin-top: -5px;\n}\n.confidence[data-v-7779046d] {\n\t/*height: 26px;*/\n\tbackground-color: #404040;\n\topacity: 1;\n\tcolor: #eee;\n\tpadding-top: 3px;\n\ttext-align: center;\n\tborder-radius: 0 0 3px 3px;\n\tfont-family: monospace;\n\tfont-size: large;\n}\n.active[data-v-7779046d] {\n\tbackground-color: #27A9E3;\n}\n.bottom_lb[data-v-7779046d] {\n\twidth: 50%;\n}\n.glyph-wrapper[data-v-7779046d] {\n\t/*display: flex;*/\n}\n",""])},672:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(34),r=n(673),s=n.n(r);e.default={name:"glyphBlock",data:function(){return{clip:"",isActive:this.active,image:{},rect:{},refRects:{},op:1}},props:["active","rectData","imgData"],mounted:function(){this.init()},watch:{imgData:function(){this.init()}},methods:{init:function(){this.rect=_.cloneDeep(this.rectData);var t=this.correct({x:this.rectData.x-this.imgData.x,y:this.rectData.y-this.imgData.y,w:this.rectData.w,h:this.rectData.h});this.rect=_.assign(this.rect,t),setTimeout(this.getRefRects(this.rectData.cid),3e3*Math.random()),a.a.createImgObjWithUrl(this.imgData.url).then(function(t){this.image=t.target,this.clip=a.a.getImageClip(t.target,this.rect.w,this.rect.h,this.rect.x,this.rect.y,1)}.bind(this)).catch(function(t){console.log("图片载入失败 "+t)})},getRefRects:function(t){a.a.ajax.get("/api/rect/"+t+"/col_rects/").then(function(t){if(0!=t.data.status)throw{message:t.data.msg};this.refRects=_(t.data.rects).forEach(function(t){t.x=t.x-t.column_set.x,t.y=t.y-t.column_set.y,t.refonly=!0}),this.isActive&&this.onClick()}.bind(this)).catch(function(t){console.log(t),this.$Notice.error({title:this.$t("Failed"),desc:t.message})}.bind(this))},onClick:function(){this.isActive=!0,this.$store.commit("setCurGlyph",{glyph:this,curRect:this.rect,image:this.image,refRects:this.refRects}),this.$emit("highlight",this)},resetFocus:function(){this.isActive=!1},updateClip:function(t){t.deleted?(this.clip=s.a,this.op=3):(this.op=2,t.created&&(this.rect={},this.op=4),this.rect.x=t.x,this.rect.y=t.y,this.rect.w=t.w,this.rect.h=t.h,this.clip=a.a.getImageClip(this.image,this.rect.w,this.rect.h,this.rect.x,this.rect.y,1))},getImage:function(){return this.image},getImageCoordOrigin:function(){return{x:this.imgData.x,y:this.imgData.y}},getRectData:function(){var t=this.rectData,e={x:_.round(this.rect.x+this.imgData.x),y:_.round(this.rect.y+this.imgData.y),w:_.round(this.rect.w),h:_.round(this.rect.h)};return this.rect.op=t.x==e.x&&t.y==e.y&&t.w==e.w&&t.h==e.h?1:this.op,_.assign(this.rect,e)},correct:function(t){return t.w<0&&(t.x=t.x+t.w,t.w=Math.abs(t.w)),t.h<0&&(t.y=t.y+t.h,t.h=Math.abs(t.h)),t.w<5&&(t.w=5),t.h<5&&(t.h=5),t}}}},673:function(t,e,n){t.exports=n.p+"b0b778e24b959e709f42e69e4462d52a.png"},674:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outer-wrapper"},[n("div",{staticClass:"inner-wrapper",on:{click:t.onClick}},[n("div",{staticClass:"glyph-wrapper"},[n("div",{staticClass:"glyph"},[n("img",{attrs:{src:t.clip}})]),t._v(" "),n("div",{staticClass:"glyph char"},[n("div",{staticClass:"char-wrapper"},[t._v(t._s(t.rectData.ch))])])]),t._v(" "),n("div",{staticClass:"confidence",class:{active:t.isActive}},[n("label",{staticClass:"bottom_lb"},[t._v(t._s(t.rectData.cc))]),t._v("|"),n("label",{staticClass:"bottom_lb"},[t._v(t._s(t.rectData.ch))])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},675:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Row",{ref:"mainrow"},[n("Col",{attrs:{span:"17",xs:10,sm:13,md:15,lg:18}},[n("Row",[n("div",{staticClass:"layout-content-main"},[n("div",{staticClass:"header",staticStyle:{"border-right":"2px dotted #909090"}},[t._v("待校对区域总数："+t._s(t.preCheckTotal))]),t._v(" "),n("div",{staticClass:"header"},[t._v("已完成区域总数："+t._s(t.postCheckTotal))])])]),t._v(" "),n("Row",{ref:"glyphs"},[n("div",{staticClass:"glyph-list",style:{height:t.getHeight,flexDirection:t.getDirection}},t._l(t.rectData,function(e){return n("div",[n("glyph-block",{attrs:{imgData:t.getImageData(e),rectData:e,active:!1},on:{highlight:t.onHighlight}})],1)}))]),t._v(" "),n("Row",{attrs:{type:"flex",align:"bottom",justify:"center"}},[n("Button",{staticClass:"button-submit",attrs:{type:"success",size:"large",shape:"circle",loading:t.isBtnLoading,icon:"checkmark-round"},on:{click:t.submit}},[t.isBtnLoading?n("span",[t._v("进行中")]):n("span",[t._v("提交")])])],1)],1),t._v(" "),n("Col",{attrs:{span:"7",xs:14,sm:11,md:9,lg:6}},[n("Row",[n("div",{ref:"wrapper",staticClass:"canvas-layout",style:{height:t.getHeightCanvas}},[n("div",[n("canvas-op",{attrs:{redraw:t.updateCanvas},on:{scrollToRect:t.scrollToRect}})],1)])])],1)],1),t._v(" "),n("help")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},758:function(t,e,n){var a=n(759);"string"==typeof a&&(a=[[t.i,a,""]]);n(48)(a,{});a.locals&&(t.exports=a.locals)},759:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"",""])},760:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(34),r=n(662),s=n.n(r);e.default={name:"bClassify",components:{confidence:s.a},data:function(){return{rects:[],task_id:"",char_set:[]}},mounted:function(){this.getWorkingData(),this.$Notice.config({top:50,duration:3})},methods:{getWorkingData:function(){var t=this,e="/api/classifytask/obtain/";this.$route.params.tid&&(e="/api/classifytask/"+this.$route.params.tid+"/"),console.log(e),a.a.ajax.get(e).then(function(e){if(e.data.status)throw{message:e.data.msg};t.rects=e.data.rects,t.task_id=e.data.task_id,t.char_set=e.data.char_set}).catch(function(e){console.log(e),t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)})})},onSubmit:function(t){var e=this,n="/api/classifytask/"+this.task_id+"/done/",r=t._this;r.$data.isBtnLoading=!0,e.$Loading.start(),a.a.ajax.post(n,{rects:t.rects}).then(function(t){var n=0==t.data.status;if(e.$Loading.finish(),!n)throw{message:t.data.msg};r.$data.isBtnLoading=!1,e.$Notice.success({title:"٩(˘◡˘ )",desc:""}),e.$route.params.tid?e.$router.push({path:"/mytask/classify"}):e.getWorkingData()}).catch(function(t){e.$Loading.error(),r.$data.isBtnLoading=!1,e.$Notice.error({title:this.$t("Failed"),desc:t.message})})}}}},761:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("confidence",{attrs:{rectData:t.rects},on:{submit:t.onSubmit}})},staticRenderFns:[]},t.exports.render._withStripped=!0}});