webpackJsonp([1],{255:function(e,t,n){n(941);var r=n(24)(n(943),n(944),"data-v-3c242f55",null);r.options.__file="/home/xian/project/Z/src/views/common/iframe_page.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] iframe_page.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},941:function(e,t,n){var r=n(942);"string"==typeof r&&(r=[[e.i,r,""]]);n(60)(r,{});r.locals&&(e.exports=r.locals)},942:function(e,t,n){t=e.exports=n(59)(),t.push([e.i,"\niframe[data-v-3c242f55] {\n  width: 100%;\n  border-style: none;\n}\n",""])},943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(39),i=n(253);t.default={name:"IframePage",computed:{getPageUrl:function(){return r.a.ajax.defaults.baseURL+"/"+this.$route.name},getHeight:function(){return this.inner_height}},methods:{handleResize:function(){this.inner_height=window.innerHeight-100},updateBannerHeader:function(){}},data:function(){return{inner_height:window.innerHeight-100}},mounted:function(){this.handleResize(),this.updateBannerHeader(),Object(i.b)(window,"resize",this.handleResize)},beforeDestroy:function(){Object(i.a)(window,"resize",this.handleResize)}}},944:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticClass:"iframe",attrs:{height:e.getHeight,src:e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});