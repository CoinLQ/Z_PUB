webpackJsonp([1],{601:function(t,e,n){n(805);var r=n(20)(n(807),n(808),null,null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\b_confidence.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] b_confidence.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},620:function(t,e,n){"use strict";var r=n(24);e.a=new r.default({data:function(){return{}},computed:{},methods:{}})},637:function(t,e,n){n(638);var r=n(20)(n(640),n(641),"data-v-605cf65e",null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\keyEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] keyEventOpt3.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},638:function(t,e,n){var r=n(639);"string"==typeof r&&(r=[[t.i,r,""]]);n(48)(r,{});r.locals&&(t.exports=r.locals)},639:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n",""])},640:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(620);e.default={methods:{handler:function(t){var e={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",17:"ctrl"},n=e[t.keyCode],a=t.type,i=t.shiftKey,o=t.altKey,s=t.ctrlKey;n&&("ctrl"==n&&(n="noop",s=!0),r.a.$emit("keyEvent",{type:a,action:n,modify:{enlarge:i,shrink:o,step:s}}),t.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc),document.body.addEventListener("keyup",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),document.body.removeEventListener("keyup",window.staticfunc),r.a.$off("keyEvent")}}},641:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]},t.exports.render._withStripped=!0},642:function(t,e,n){n(643);var r=n(20)(n(645),n(646),"data-v-156550cb",null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\mouseEventOpt3.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] mouseEventOpt3.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},643:function(t,e,n){var r=n(644);"string"==typeof r&&(r=[[t.i,r,""]]);n(48)(r,{});r.locals&&(t.exports=r.locals)},644:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"",""])},645:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(106),a=n.n(r);e.default={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(t,e){return{x:t,y:e}},dist:function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},getHandle:function(t,e){return this.dist(t,this.point(e.x,e.y))<=this.handle_size?"topleft":this.dist(t,this.point(e.x+e.w,e.y))<=this.handle_size?"topright":this.dist(t,this.point(e.x,e.y+e.h))<=this.handle_size?"bottomleft":this.dist(t,this.point(e.x+e.w,e.y+e.h))<=this.handle_size?"bottomright":this.dist(t,this.point(e.x+e.w/2,e.y))<=this.handle_size?"top":this.dist(t,this.point(e.x,e.y+e.h/2))<=this.handle_size?"left":this.dist(t,this.point(e.x+e.w/2,e.y+e.h))<=this.handle_size?"bottom":this.dist(t,this.point(e.x+e.w,e.y+e.h/2))<=this.handle_size&&"right"},mark_corner:function(t,e){this.current&&(this.current.corner=!1);var n=a.a.find(e,function(e){if(e.deleted)return!1;var n=this.getHandle(t,e);return n&&(e.corner=n),n}.bind(this));this.current=n},clear_corner:function(t){t.forEach(function(t,e){t.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(t){var e=t||window.event,n={x:0,y:0};e.pageX?(n.x=e.pageX,n.y=e.pageY):e.clientX&&(n.x=e.clientX,n.y=e.clientY);var r=this.$store.getters.scale,a=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,o=this.canvas.getBoundingClientRect().top+a,s=this.canvas.getBoundingClientRect().left+i,c=(n.y-o)/r;return{x:~~((n.x-s)/r),y:~~c}},getRectOverByPoint:function(t,e){return a.a.find(e,function(e){if(e.deleted)return!1;var n=t.x-e.x,r=t.y-e.y;return 0<=n&&n<=e.w&&0<=r&&r<=e.h})},markRectSelected:function(t,e){t&&(window.nn=this,this.current=t,this.current&&this.current.id?this.current.mselected=!1:this.current.mselected=!0,this.current.$=e,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var t=this;t.canvas.onselectstart=function(t){return t.preventDefault(),!1},t.canvas.onmousedown=function(e){var n=t.$store.getters.rects;if(t.drag.current&&t.drag.current.corner)t.drag.draggable=!0;else{var r=t.translat_point(e),a=t.getRectOverByPoint(r,n);if(t.markRectSelected(a,r),window.dd=t,!a&&t.draw.enable){t.draw.drawing=!0;var i=Object.assign({},n[0]);i.id="",i.x=r.x,i.y=r.y,t.draw.additions=i,t.$store.commit("startNewRect",{rect:i})}}t.redraw_canvas()},t.canvas.onmousemove=a.a.throttle(function(e){t.current=t.$store.getters.curRect;var n=t.translat_point(e);if(t.draw.drawing){var r=t.draw.additions;r.w=n.x-r.x,r.h=n.y-r.y,t.redraw_canvas()}else if(t.drag.draggable){var a=t.drag.current;switch(t.drag.current.corner){case"topleft":a.w+=a.x-n.x,a.h+=a.y-n.y,a.x=n.x,a.y=n.y;break;case"topright":a.w=n.x-a.x,a.h+=a.y-n.y,a.y=n.y;break;case"bottomleft":a.w+=a.x-n.x,a.x=n.x,a.h=n.y-a.y;break;case"bottomright":a.w=n.x-a.x,a.h=n.y-a.y;break;case"top":a.h+=a.y-n.y,a.y=n.y;break;case"left":a.w+=a.x-n.x,a.x=n.x;break;case"bottom":a.h=n.y-a.y;break;case"right":a.w=n.x-a.x}t.redraw_canvas()}else t.current&&t.current.mselected?(t.current.x+=n.x-t.current.$.x,t.current.y+=n.y-t.current.$.y,t.current.$.x=n.x,t.current.$.y=n.y,t.redraw_canvas()):(t.drag.mark_corner(n,t.$store.getters.rects),t.redraw_canvas());return e.preventDefault&&e.preventDefault(),!1},100),t.canvas.onmouseup=function(e){if(t.drag.draggable?t.drag.draggable=!1:t.current.mselected&&(t.current.mselected=!1),t.draw.drawing){var n=t.draw.additions;t.$store.dispatch("closeNewRect",{rect:n,canvas:t}),t.$nextTick(function(){var t=this.translat_point(e),n=this.getRectOverByPoint(t,rects);this.markRectSelected(n,t),this.current.mselected=!1}.bind(t))}t.draw.drawing=!1,t.redraw_canvas()}}}},646:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]},t.exports.render._withStripped=!0},647:function(t,e,n){n(648);var r=n(20)(n(650),n(651),"data-v-523f1dd2",null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\help.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] help.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},648:function(t,e,n){var r=n(649);"string"==typeof r&&(r=[[t.i,r,""]]);n(48)(r,{});r.locals&&(t.exports=r.locals)},649:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n.cover[data-v-523f1dd2] {\r\n  width:100%;\r\n  height:100%;\r\n  background-color: currentColor; /*steelblue;*/\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  z-index:2;\r\n  opacity:0.95;\r\n  /*兼容IE8及以下版本浏览器*/\r\n  filter: alpha(opacity=90);\r\n  overflow: scroll;\n}\n.hide[data-v-523f1dd2] {\r\n\tdisplay: none;\n}\n.content-wrapper[data-v-523f1dd2] {\r\n\ttext-align: center;\r\n\tmargin: 10px;\r\n  border: 2px grey dashed;\r\n\tcolor: white;\r\n\tfont-size: 2em;\r\n  width: 100%;\r\n  height: 100%;\n}\n.img-wrapper[data-v-523f1dd2] {\r\n  margin: 70px 0 30px;\n}\n.text-wrapper[data-v-523f1dd2] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    text-align: left;\n}\r\n",""])},650:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(620);e.default={name:"HelpPage",data:function(){return{toHide:!0,withGlyph:!0}},mounted:function(){var t=this;r.a.$on("keyEvent",function(e){"help"==e.action&&"keydown"==e.type&&(t.toHide=!t.toHide)}),(this.$route.path.includes("confidence")||this.$route.path.includes("classify"))&&(this.withGlyph=!0),this.$route.path.includes("onebyone")&&(this.withGlyph=!1)}}},651:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cover",class:{hide:t.toHide}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[t.withGlyph?n("div",[t._m(2,!1,!1)]):n("div",{staticClass:"v1"},[t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(652)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-wrapper"},[n("ul",[n("li",[t._v("[F1] 本帮助页面")]),t._v(" "),n("li",[t._v("[AWSD] 控制字块的选择")]),t._v(" "),n("li",[t._v("[←↑↓→] 控制切分框的移动、变形等操作")]),t._v(" "),n("li",[t._v("[1-9] 控制切分图片的放大倍率")]),t._v(" "),n("li",[t._v("[x] 移动切分框的四边")])]),t._v(" "),n("ul",[n("li",[t._v("[space] 选中切分框，作为操作对象")]),t._v(" "),n("li",[t._v("[shift] 放大状态")]),t._v(" "),n("li",[t._v("[alt] 缩小状态")]),t._v(" "),n("li",[t._v("[ctrl] 移动步长")]),t._v(" "),n("li",[t._v("[k] 标记切分框为删除状态/恢复状态")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-wrapper"},[r("img",{attrs:{src:n(653)}})])}]},t.exports.render._withStripped=!0},652:function(t,e,n){t.exports=n.p+"7abbde8a433c04bd1e44523d2544a41a.png"},653:function(t,e,n){t.exports=n.p+"3e5940a1c7e4a71ea6ea49c1a2801864.png"},666:function(t,e,n){n(667);var r=n(20)(n(669),n(679),"data-v-baa62540",null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\confidence.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] confidence.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},667:function(t,e,n){var r=n(668);"string"==typeof r&&(r=[[t.i,r,""]]);n(48)(r,{});r.locals&&(t.exports=r.locals)},668:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n.layout-content-main[data-v-baa62540]{\n     padding: 10px;\n     border: 1px;\n     text-align: center;\n     color: #9ea7b4;\n     /*display: flex;*/\n     display: none;\n}\n.header[data-v-baa62540] {\n     width: 50%;\n     height: 26px;\n     text-align: center;\n     background-color: #2E363F;\n     /*color: #8B8B8C;*/\n     padding-top: 4px;\n     overflow: hidden;\n     box-shadow: 2px 2px 1px 0px #363E4E;\n}\n.canvas-layout[data-v-baa62540] {\n     overflow: scroll;\n     text-align: center;\n     padding: 4px;\n     margin: 10px;\n     background-color: #cccccc;\n     box-shadow: 0px 0px 3px 3px #363E4E;\n}\n.glyph-list[data-v-baa62540] {\n     display: flex;\n     flex-flow: column wrap;\n     align-items: flex-start;\n     justify-content: flex-start;\n     align-content: flex-start;\n     overflow: scroll;\n}\n.button-submit[data-v-baa62540] {\n     background-color: #cccccc29;\n     border-color: #cccccc;\n     flex-grow: 5;\n}\n.button-abandon[data-v-baa62540] {\n     background-color: #cccccc29;\n     border-color: #cccccc;\n}\n.button-submit[data-v-baa62540]:hover {\n     color: #fff;\n     background-color: #2db7f5; /*#19be6b; /*#28a9e4*/\n     border-color: #2db7f5; /*#47cb89; /*#4782cb*/\n}\n.button-abandon[data-v-baa62540]:hover {\n     color: #fff;\n     background-color: #f90; /*#19be6b; /*#28a9e4*/\n     border-color: #f90; /*#47cb89; /*#4782cb*/\n}\n",""])},669:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(670),a=n.n(r),i=n(673),o=n.n(i),s=n(34),c=n(106),d=n.n(c),l=n(647),u=n.n(l),h=n(620);e.default={name:"confidence",props:["rectData"],components:{canvasOp:a.a,glyphBlock:o.a,help:u.a},computed:{getHeightCanvas:function(){return window.innerHeight-130+"px"},getHeight:function(){return window.innerHeight-145+"px"},getDirection:function(){return this.rectData.length>20?"column":"row"}},data:function(){return{isBtnLoading:!1,preCheckTotal:100,postCheckTotal:200,updateCanvas:1}},watch:{rectData:function(){this.init()}},mounted:function(){this.init(),h.a.$on("keyEvent",function(t){"keydown"==t.type&&this.handleKeyEvent(t)}.bind(this))},beforeDestroy:function(){this.$store.commit("resetAll")},methods:{init:function(){this.$store.commit("resetAll"),this.$store.commit("setScale",{scale:6})},onHighlight:function(t){this.updateCanvas+=1,this.scrollToRect(t.rect)},scrollToRect:function(){var t=this.$store.getters.scale,e=this.$store.getters.curRect;this.$nextTick(function(){this.$refs.wrapper.scrollTo(e.x*t,Math.max(e.y*t-window.innerHeight/3,e.y))}),window.wrapper=this.$refs.wrapper},getImageData:function(t){var e=t.column_set;return e.url=s.a.getColumnImageUrlFromCode(e.col_id),e},submit:function(){var t=[],e=this.$refs.glyphs.$children;d()(e).forEach(function(e){t.push(e.getRectData())}),this.$emit("submit",{rects:t,_this:this})},handleKeyEvent:function(t){var e=t.action,n=t.modify.enlarge||t.modify.step?5:1,r=1;if("mov-up-w"==e||"mov-left-a"==e)r=-1;else{if("mov-down-s"!=e&&"mov-right-d"!=e)return;r=1}var a=this.$store.getters.curGlyph,i=this.$refs.glyphs.$children,o=d()(i).indexOf(a)+r*n,s=i.length;o=o<0?s+o:o>=s?o-s:o,i[o].onClick(),this.$nextTick(function(){var t=document.getElementsByClassName("glyph-list")[0],e=t.clientHeight,n=t.clientWidth,r=~~(e/302),a=~~(o/r),i=140*a-n/3,s=302*(~~((o/r-~~(o/r))*r)-1)-e/3;t.scrollTo(i,s)})}}}},670:function(t,e,n){var r=n(20)(n(671),n(672),null,null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\canvas_op_disable_draw.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] canvas_op_disable_draw.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},671:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(106),a=n.n(r),i=n(28),o=(n.n(i),n(34)),s=n(637),c=n.n(s),d=n(642),l=n.n(d),u=n(620);e.default={name:"canvasOp",components:{KeyEventOpt:c.a,MouseEventOpt:l.a},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},methods:{setInitCanvasImage:function(){var t=document.getElementById("canvas-scope");t.width=300,t.height=window.innerHeight;var e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#606E9A"),n.addColorStop(1,"#386093"),e.fillStyle=n,e.fillRect(0,0,300,window.innerHeight),e.strokeStyle="white",e.font="30px Arial",e.textAlign="center",e.textBaseline="middle",e.translate(t.width/2,t.height/2),e.strokeText("Operate Area",0,0),e.save()},redraw_canvas:function(){var t=document.getElementById("canvas-scope"),e=t.getContext("2d"),n=this.$store.getters.image,r=this.$store.getters.scale;if(n.empty)return e.restore();this.updateCanvas(n,t,e,r)},updateCanvas:function(t,e,n,r){e.width=t.width*r,e.height=t.height*r,n.drawImage(t,0,0,t.naturalWidth||t.width,t.naturalHeight||t.height,0,0,t.width*r,t.height*r),this.drawAllRect(n,r)},drawAllRect:function(t,e){var n=this.$store.getters.curRect,r=this.$store.getters.rects,i=this.$store.getters.cover;window.rects=r,a()(r).forEach(function(r,a){t.lineWidth=1.5*e,t.globalAlpha=.5,r.mselected?(t.strokeStyle="#1892e8bf",t.fillStyle="#1892e8a0"):r.kselected?(t.strokeStyle="#e8e818bf",t.fillStyle="#e8e818a0"):r==n?(t.strokeStyle="#2aa766",t.fillStyle="#2aa766a0"):(r.red=r.red||o.a.getRed(),t.strokeStyle=r.red,t.fillStyle="#0000"),i&&(t.fillStyle="#BEB7ADE0"),r.deleted&&(t.fillStyle="#000000a0",t.lineWidth=4*e),t.strokeRect(r.x*e,r.y*e,r.w*e,r.h*e),t.fillRect(r.x*e,r.y*e,r.w*e,r.h*e),this.draw_corner(t,r,e)}.bind(this));var s=this.$store.getters.refRects;a()(s).forEach(function(n,r){n.red=n.red||o.a.getRed(),t.lineWidth=1.5*e,t.strokeStyle=n.red,t.strokeRect(n.x*e,n.y*e,n.w*e,n.h*e)}.bind(this))},draw_corner:function(t,e,n){if(e.corner){var r={x:0,y:0};switch(e.corner){case"topleft":r.x=e.x,r.y=e.y;break;case"topright":r.x=e.x+e.w,r.y=e.y;break;case"bottomleft":r.x=e.x,r.y=e.y+e.h;break;case"bottomright":r.x=e.x+e.w,r.y=e.y+e.h;break;case"top":r.x=e.x+e.w/2,r.y=e.y;break;case"left":r.x=e.x,r.y=e.y+e.h/2;break;case"bottom":r.x=e.x+e.w/2,r.y=e.y+e.h;break;case"right":r.x=e.x+e.w,r.y=e.y+e.h/2}t.fillStyle="#FF0000",t.beginPath(),t.arc(r.x*n,r.y*n,3,0,2*Math.PI),t.fill()}},update_canvas:function(t){this.redraw_canvas()},handleKeyEvent:function(t){"keydown"==t.type?this.$store.dispatch("handleKeyDownEvent",t):"keyup"==t.type&&this.$store.dispatch("handleKeyUpEvent",t),this.redraw_canvas(),this.$emit("scrollToRect")}},mounted:function(){this.setInitCanvasImage(),u.a.$on("keyEvent",this.handleKeyEvent)}}},672:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:t.canvasId}},[n("KeyEventOpt"),t._v(" "),n("MouseEventOpt",{attrs:{drawEnable:"false",canvasId:t.canvasId},on:{drawnow:t.update_canvas}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},673:function(t,e,n){n(674);var r=n(20)(n(676),n(678),"data-v-d5e19858",null);r.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\glyph_block.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] glyph_block.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},674:function(t,e,n){var r=n(675);"string"==typeof r&&(r=[[t.i,r,""]]);n(48)(r,{});r.locals&&(t.exports=r.locals)},675:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\nimg[data-v-d5e19858] {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 3px 3px 0 0;\n}\n.outer-wrapper[data-v-d5e19858] {\n\tmargin: 20px 10px;\n}\n.inner-wrapper[data-v-d5e19858] {\n\tbox-shadow: 2px 2px 1px 0px #363E4E;\n\tborder-radius: 3px;\n\t/*width: 240px;*/\n}\n.inner-wrapper[data-v-d5e19858]:hover {\n\tbox-shadow: 0px 0px 3px 3px #363E4E;\n}\n.glyph[data-v-d5e19858] {\n\twidth: 140px;\n\theight: 140px;\n\tborder-radius: 3px 3px 0 0;\n}\n.char[data-v-d5e19858] {\n\tdisplay: none;\n    text-align: center;\n    background-color: #2E363F;\n    color: #fffdddee;\n    font-size: 80px;\n}\n.char-wrapper[data-v-d5e19858] {\n    margin-top: -5px;\n}\n.confidence[data-v-d5e19858] {\n\t/*height: 26px;*/\n\tbackground-color: #404040;\n\topacity: 1;\n\tcolor: #eee;\n\tpadding-top: 3px;\n\ttext-align: center;\n\tborder-radius: 0 0 3px 3px;\n\tfont-family: monospace;\n\tfont-size: large;\n}\n.active[data-v-d5e19858] {\n\tbackground-color: #27A9E3;\n}\n.bottom_lb[data-v-d5e19858] {\n\twidth: 50%;\n}\n.glyph-wrapper[data-v-d5e19858] {\n\t/*display: flex;*/\n}\n",""])},676:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(34),a=n(677),i=n.n(a);e.default={name:"glyphBlock",data:function(){return{clip:"",isActive:this.active,image:{},rect:{},refRects:{},op:1}},props:["active","rectData","imgData"],mounted:function(){this.init()},watch:{imgData:function(){this.init()}},methods:{init:function(){this.rect=_.cloneDeep(this.rectData);var t=this.correct({x:this.rectData.x-this.imgData.x,y:this.rectData.y-this.imgData.y,w:this.rectData.w,h:this.rectData.h});this.rect=_.assign(this.rect,t),setTimeout(this.getRefRects(this.rectData.cid),3e3*Math.random()),r.a.createImgObjWithUrl(this.imgData.url).then(function(t){this.image=t.target,this.clip=r.a.getImageClip(t.target,this.rect.w,this.rect.h,this.rect.x,this.rect.y,1)}.bind(this)).catch(function(t){console.log("图片载入失败 "+t)})},getRefRects:function(t){r.a.ajax.get("/api/rect/"+t+"/col_rects/").then(function(t){if(0!=t.data.status)throw{message:t.data.msg};this.refRects=_(t.data.rects).forEach(function(t){t.x=t.x-t.column_set.x,t.y=t.y-t.column_set.y,t.refonly=!0}),this.isActive&&this.onClick()}.bind(this)).catch(function(t){console.log(t),this.$Notice.error({title:this.$t("Failed"),desc:t.message})}.bind(this))},onClick:function(){this.isActive=!0,this.$store.commit("setCurGlyph",{glyph:this,curRect:this.rect,image:this.image,refRects:this.refRects}),this.$emit("highlight",this)},resetFocus:function(){this.isActive=!1},updateClip:function(t){t.deleted?(this.clip=i.a,this.op=3):(this.op=2,t.created&&(this.rect={},this.op=4),this.rect.x=t.x,this.rect.y=t.y,this.rect.w=t.w,this.rect.h=t.h,this.clip=r.a.getImageClip(this.image,this.rect.w,this.rect.h,this.rect.x,this.rect.y,1))},getImage:function(){return this.image},getImageCoordOrigin:function(){return{x:this.imgData.x,y:this.imgData.y}},getRectData:function(){var t=this.rectData,e={x:_.round(this.rect.x+this.imgData.x),y:_.round(this.rect.y+this.imgData.y),w:_.round(this.rect.w),h:_.round(this.rect.h)};return this.rect.op=t.x==e.x&&t.y==e.y&&t.w==e.w&&t.h==e.h?1:this.op,_.assign(this.rect,e)},correct:function(t){return t.w<0&&(t.x=t.x+t.w,t.w=Math.abs(t.w)),t.h<0&&(t.y=t.y+t.h,t.h=Math.abs(t.h)),t.w<5&&(t.w=5),t.h<5&&(t.h=5),t}}}},677:function(t,e,n){t.exports=n.p+"b0b778e24b959e709f42e69e4462d52a.png"},678:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outer-wrapper"},[n("div",{staticClass:"inner-wrapper",on:{click:t.onClick}},[n("div",{staticClass:"glyph-wrapper"},[n("div",{staticClass:"glyph"},[n("img",{attrs:{src:t.clip}})]),t._v(" "),n("div",{staticClass:"glyph char"},[n("div",{staticClass:"char-wrapper"},[t._v(t._s(t.rectData.ch))])])]),t._v(" "),n("div",{staticClass:"confidence",class:{active:t.isActive}},[n("label",{staticClass:"bottom_lb"},[t._v(t._s(t.rectData.cc))]),t._v("|"),n("label",{staticClass:"bottom_lb"},[t._v(t._s(t.rectData.ch))])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},679:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Row",{ref:"mainrow"},[n("Col",{attrs:{span:"17",xs:10,sm:13,md:15,lg:18}},[n("Row",[n("div",{staticClass:"layout-content-main"},[n("div",{staticClass:"header",staticStyle:{"border-right":"2px dotted #909090"}},[t._v("待校对区域总数："+t._s(t.preCheckTotal))]),t._v(" "),n("div",{staticClass:"header"},[t._v("已完成区域总数："+t._s(t.postCheckTotal))])])]),t._v(" "),n("Row",{ref:"glyphs"},[n("div",{staticClass:"glyph-list",style:{height:t.getHeight,flexDirection:t.getDirection}},t._l(t.rectData,function(e){return n("div",[n("glyph-block",{attrs:{imgData:t.getImageData(e),rectData:e,active:!1},on:{highlight:t.onHighlight}})],1)}))]),t._v(" "),n("Row",{attrs:{type:"flex",align:"bottom",justify:"center"}},[n("Button",{staticClass:"button-submit",attrs:{type:"success",size:"large",shape:"circle",loading:t.isBtnLoading,icon:"checkmark-round"},on:{click:t.submit}},[t.isBtnLoading?n("span",[t._v("进行中")]):n("span",[t._v("提交")])])],1)],1),t._v(" "),n("Col",{attrs:{span:"7",xs:14,sm:11,md:9,lg:6}},[n("Row",[n("div",{ref:"wrapper",staticClass:"canvas-layout",style:{height:t.getHeightCanvas}},[n("div",[n("canvas-op",{attrs:{redraw:t.updateCanvas},on:{scrollToRect:t.scrollToRect}})],1)])])],1)],1),t._v(" "),n("help")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},805:function(t,e,n){var r=n(806);"string"==typeof r&&(r=[[t.i,r,""]]);n(48)(r,{});r.locals&&(t.exports=r.locals)},806:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"",""])},807:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(34),a=n(666),i=n.n(a);e.default={name:"bConfidence",components:{confidence:i.a},data:function(){return{rects:[],task_id:""}},mounted:function(){this.getWorkingData(),this.$Notice.config({top:50,duration:3})},methods:{getWorkingData:function(){var t=this,e="/api/cctask/obtain/";this.$route.params.tid&&(e="/api/cctask/"+this.$route.params.tid+"/"),t.$Loading.start(),r.a.ajax.get(e).then(function(e){var n=0==e.data.status;if(t.$Loading.finish(),!n)throw{message:e.data.msg};t.rects=e.data.rects,t.task_id=e.data.task_id}).catch(function(e){t.$Loading.error(),t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)})})},onSubmit:function(t){var e=this,n="/api/cctask/"+this.task_id+"/done/",a=t._this;a.$data.isBtnLoading=!0,r.a.ajax.post(n,{rects:t.rects}).then(function(t){if(0!=t.data.status)throw{message:t.data.msg};a.$data.isBtnLoading=!1,e.$Notice.success({title:"٩(˘◡˘ )",desc:""}),e.$route.params.tid?e.$router.push({path:"/mytask/confidence"}):e.getWorkingData()}).catch(function(t){a.$data.isBtnLoading=!1,e.$Notice.error({title:e.$t("Failed"),desc:e.$t(t.message)})})}}}},808:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("confidence",{attrs:{rectData:t.rects},on:{submit:t.onSubmit}})},staticRenderFns:[]},t.exports.render._withStripped=!0}});