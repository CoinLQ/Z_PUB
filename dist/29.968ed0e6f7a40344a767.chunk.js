webpackJsonp([29],{604:function(t,e,n){n(820);var o=n(20)(n(822),n(828),"data-v-1dc263d3",null);o.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\b_CheckDel.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] b_CheckDel.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},820:function(t,e,n){var o=n(821);"string"==typeof o&&(o=[[t.i,o,""]]);n(48)(o,{});o.locals&&(t.exports=o.locals)},821:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n.button[data-v-1dc263d3] {\r\n    margin-top: 15px;\r\n    background-color: #cccccc29;\r\n    border-color: #cccccc;\n}\n.button[data-v-1dc263d3]:hover {\r\n    color: #fff;\r\n    background-color: #2db7f5; /*#19be6b; /*#28a9e4*/\r\n    border-color: #2db7f5; /*#47cb89; /*#4782cb*/\n}\n.table[data-v-1dc263d3] {\r\n    box-shadow: 0px 0px 3px 3px #363E4E;\r\n    border-radius: 2px;\n}\n.wrapper[data-v-1dc263d3] {\r\n    margin: 10px;\n}\r\n",""])},822:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),a=n(106),r=(n.n(a),n(823)),i=n.n(r);n(24);e.default={name:"CheckDeletedRect",components:{RectBlock:i.a},data:function(){var t=this;return{isBtnLoading:!1,loading:!1,columns:[{title:"经字号",key:"cid"},{title:"提交人",key:"modifier"},{title:"提交时间",key:"created_at"},{title:"提交删框",key:"rect",width:160,render:function(t,e){return t(i.a,{props:{rectData:e.row}})}},{title:"操作",key:"op",fixed:"right",align:"center",width:180,render:function(e,n){return e("RadioGroup",{props:{type:"button",value:n.row.result},on:{input:function(e){n.row.result=e,t.rows[n.index].result=e}}},[e("Radio",{attrs:{name:"bg"+n.index,label:1}},"同意"),e("Radio",{attrs:{name:"bg"+n.index,label:0}},"不同意")])}}],rows:[],task_id:""}},computed:{getHeight:function(){return window.innerHeight}},methods:{submit:function(){var t=this,e="/api/deltask/"+this.task_id+"/done/";this.isBtnLoading=!0,o.a.ajax.post(e,{rects:this.rows}).then(function(e){if(0!=e.data.status)throw{message:e.data.msg};t.isBtnLoading=!1,t.$Notice.success({title:"٩(˘◡˘ )",desc:""}),t.getWorkingData()}).catch(function(e){t.isBtnLoading=!1,t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)})})},getWorkingData:function(){var t=this,e="/api/deltask/obtain/";this.$route.params.tid&&(e="/api/deltask/"+this.$route.params.tid+"/"),t.loading=!0,o.a.ajax.get(e).then(function(e){if(0!=e.data.status)throw{message:e.data.msg};t.rows=e.data.rects,t.task_id=e.data.task_id,t.loading=!1}).catch(function(e){t.$Notice.error({title:t.$t("Failed"),desc:t.$t(e.message)}),t.loading=!1})}},mounted:function(){this.getWorkingData(),this.$Notice.config({top:50,duration:3})}}},823:function(t,e,n){n(824);var o=n(20)(n(826),n(827),"data-v-932e3d70",null);o.options.__file="d:\\codebase\\Z\\src\\views\\jiaodui\\components\\rect_block.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] rect_block.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},824:function(t,e,n){var o=n(825);"string"==typeof o&&(o=[[t.i,o,""]]);n(48)(o,{});o.locals&&(t.exports=o.locals)},825:function(t,e,n){e=t.exports=n(47)(),e.push([t.i,"\n",""])},826:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),a=n(106);n.n(a);e.default={name:"RectBlock",props:["rectData"],mounted:function(){this.initd()},methods:{initd:function(){var t=this.$refs.canvas,e=t.getContext("2d"),n=this.rectData.x-this.rectData.ocolumn_x,a={x:0,y:this.rectData.y-n,w:this.rectData.w+2*n,h:this.rectData.h+2*n},r={x:n,y:n,w:this.rectData.w,h:this.rectData.h};o.a.createImgObjWithUrl(this.rectData.ocolumn_uri).then(function(n){var i=Math.min(a.w,n.target.width),s=Math.min(a.h,n.target.height),c=120/i,d=120/s;t.width=120,t.height=120,e.drawImage(n.target,a.x,a.y,i,s,0,0,120,120),e.strokeStyle=o.a.getRed(),e.lineWidth=2,e.strokeRect(r.x*c,r.y*d,r.w*c,r.h*d)}.bind(this)).catch(function(t){console.log(t)})}}}},827:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"}},[n("canvas",{ref:"canvas"})])},staticRenderFns:[]},t.exports.render._withStripped=!0},828:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Table",{staticClass:"table",attrs:{stripe:"",border:"",size:"large",height:t.getHeight,loading:t.loading,columns:t.columns,data:t.rows}}),t._v(" "),n("Button",{staticClass:"button-submit button",attrs:{type:"success",size:"large",loading:t.isBtnLoading,icon:"checkmark-round",long:""},on:{click:t.submit}},[t.isBtnLoading?n("span",[t._v("进行中")]):n("span",[t._v("提交")])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});