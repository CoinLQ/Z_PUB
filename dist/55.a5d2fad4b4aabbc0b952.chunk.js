webpackJsonp([55],{728:function(n,e,t){t(880);var o=t(24)(t(882),t(883),null,null);o.options.__file="/home/xian/project/Z/src/views/error-page/forbidden_ie.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] forbidden_ie.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports},880:function(n,e,t){var o=t(881);"string"==typeof o&&(o=[[n.i,o,""]]);t(61)(o,{});o.locals&&(n.exports=o.locals)},881:function(n,e,t){e=n.exports=t(60)(),e.push([n.i,"\n@keyframes error404animation {\n0% {\n    transform: rotateZ(0deg);\n}\n20% {\n    transform: rotateZ(-60deg);\n}\n40% {\n    transform: rotateZ(-10deg);\n}\n60% {\n    transform: rotateZ(50deg);\n}\n80% {\n    transform: rotateZ(-20deg);\n}\n100% {\n    transform: rotateZ(0deg);\n}\n}\n.error404-body-con {\n  width: 700px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.error404-body-con-title {\n  text-align: center;\n  font-size: 240px;\n  font-weight: 700;\n  color: #2d8cf0;\n  height: 260px;\n  line-height: 260px;\n  margin-top: 40px;\n}\n.error404-body-con-title span {\n  display: inline-block;\n  color: #19be6b;\n  font-size: 230px;\n  animation: error404animation 3s ease 0s infinite alternate;\n}\n.error404-body-con-message {\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: 12px;\n  color: #dddde2;\n}\n.error404-btn-con {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 40px;\n}\n",""])},882:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Ie404",methods:{backPage:function(){this.$router.go(-1)},goHome:function(){this.$router.push({name:"home_index"})}}}},883:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"error404"},[t("div",{staticClass:"error404-body-con"},[t("Card",[t("div",{staticClass:"error404-body-con-title"},[n._v("4"),t("span",[t("Icon",{attrs:{type:"ios-navigate-outline"}})],1),n._v("3")]),n._v(" "),t("p",{staticClass:"error404-body-con-message"},[n._v("不支持IE")]),n._v(" "),t("div",{staticClass:"error404-btn-con"})])],1)])},staticRenderFns:[]},n.exports.render._withStripped=!0}});