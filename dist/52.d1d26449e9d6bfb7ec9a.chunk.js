webpackJsonp([52],{733:function(e,t,n){n(908);var r=n(24)(n(910),n(911),"data-v-d8a71e04",null);r.options.__file="E:\\projects\\Z\\src\\views\\tripitaka\\bridge_page.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] bridge_page.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},908:function(e,t,n){var r=n(909);"string"==typeof r&&(r=[[e.i,r,""]]);n(60)(r,{});r.locals&&(e.exports=r.locals)},909:function(e,t,n){t=e.exports=n(59)(),t.push([e.i,"\niframe[data-v-d8a71e04] {\r\n  width: 100%;\r\n  border-style: none;\n}\r\n",""])},910:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(39),i=n(253);t.default={name:"tripitaka",computed:{getPageUrl:function(){return console.log(this.$route.params.id),r.a.ajax.defaults.baseURL+"/tripitaka/"+this.$route.params.id}},methods:{handleResize:function(){this.inner_height=window.innerHeight-100},updateBannerHeader:function(){var e=r.a.ajax.defaults.baseURL+"/api/tripitaka/?code="+this.$route.params.id;r.a.ajax.get(e,{}).then(function(e){this.$store.commit("updateBannerHeader",e.data.results[0].name)}.bind(this)).catch(function(e){console.log(e)})}},data:function(){return{inner_height:window.innerHeight-100}},mounted:function(){this.handleResize(),this.updateBannerHeader(),Object(i.b)(window,"resize",this.handleResize)},beforeDestroy:function(){Object(i.a)(window,"resize",this.handleResize)}}},911:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticClass:"iframe",attrs:{height:e.inner_height,src:e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});