webpackJsonp([51],{733:function(e,t,o){o(904);var n=o(24)(o(906),o(907),null,null);n.options.__file="/home/xian/project/Z/src/views/collatetask/welcome.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] welcome.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},904:function(e,t,o){var n=o(905);"string"==typeof n&&(n=[[e.i,n,""]]);o(61)(n,{});n.locals&&(e.exports=n.locals)},905:function(e,t,o){t=e.exports=o(60)(),t.push([e.i,"",""])},906:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{pickTask:function(){return this.$router.push({name:this.$route.params.task+"-task"})}}}},907:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{staticStyle:{width:"90%",height:"90%",margin:"auto","margin-top":"50px"}},[n("div",{staticStyle:{"text-align":"center","margin-top":"10%"}},[n("div",{attrs:{slot:"top"},slot:"top"},[n("img",{attrs:{src:o(908)}})]),e._v(" "),n("h2",[e._v("您还没有任务"),n("br"),e._v("请前往"),n("a",{on:{click:e.pickTask}},[e._v("任务大厅")]),e._v("领取任务")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},908:function(e,t,o){e.exports=o.p+"7249710738f9eef93470651b89ce0d67.png"}});