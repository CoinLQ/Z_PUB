webpackJsonp([36],{579:function(e,t,o){o(721);var s=o(20)(o(723),o(724),null,null);s.options.__file="/home/xian/projects/Z/src/views/collatetask/welcome.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] welcome.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},721:function(e,t,o){var s=o(722);"string"==typeof s&&(s=[[e.i,s,""]]);o(48)(s,{});s.locals&&(e.exports=s.locals)},722:function(e,t,o){t=e.exports=o(47)(),t.push([e.i,"",""])},723:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{pickTask:function(){return this.$router.push({name:this.$route.params.task+"-task"})}}}},724:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{staticStyle:{width:"320px",margin:"auto","margin-top":"50px"}},[s("div",{staticStyle:{"text-align":"center"}},[s("div",{staticClass:"logo-con",attrs:{slot:"top"},slot:"top"},[s("img",{attrs:{src:o(190)}})]),e._v(" "),s("h3",[e._v("您还没有任务，请前往"),s("a",{on:{click:e.pickTask}},[e._v("任务大厅")]),e._v("领取任务")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});