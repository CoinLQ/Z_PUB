webpackJsonp([51],{732:function(e,t,o){o(903);var s=o(24)(o(905),o(906),null,null);s.options.__file="E:\\projects\\Z\\src\\views\\collatetask\\welcome.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] welcome.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},903:function(e,t,o){var s=o(904);"string"==typeof s&&(s=[[e.i,s,""]]);o(60)(s,{});s.locals&&(e.exports=s.locals)},904:function(e,t,o){t=e.exports=o(59)(),t.push([e.i,"",""])},905:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{pickTask:function(){return this.$router.push({name:this.$route.params.task+"-task"})}}}},906:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{staticStyle:{width:"90%",height:"90%",margin:"auto","margin-top":"50px"}},[s("div",{staticStyle:{"text-align":"center","margin-top":"10%"}},[s("div",{attrs:{slot:"top"},slot:"top"},[s("img",{attrs:{src:o(907)}})]),e._v(" "),s("h2",[e._v("您还没有任务"),s("br"),e._v("请前往"),s("a",{on:{click:e.pickTask}},[e._v("任务大厅")]),e._v("领取任务")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},907:function(e,t,o){e.exports=o.p+"7249710738f9eef93470651b89ce0d67.png"}});