webpackJsonp([52],{588:function(e,t,n){n(763);var i=n(21)(n(765),n(766),"data-v-d8a71e04",null);i.options.__file="/home/xian/projects/Z/src/views/tripitaka/bridge_page.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] bridge_page.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},763:function(e,t,n){var i=n(764);"string"==typeof i&&(i=[[e.i,i,""]]);n(48)(i,{});i.locals&&(e.exports=i.locals)},764:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\niframe[data-v-d8a71e04] {\r\n  width: 100%;\r\n  border-style: none;\n}\r\n",""])},765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(35),r=n(190);t.default={name:"tripitaka",computed:{getPageUrl:function(){return console.log(this.$route.params.id),i.a.ajax.defaults.baseURL+"/tripitaka/"+this.$route.params.id}},methods:{handleResize:function(){this.inner_height=window.innerHeight-100},updateBannerHeader:function(){var e=i.a.ajax.defaults.baseURL+"/api/tripitaka/?code="+this.$route.params.id;i.a.ajax.get(e,{}).then(function(e){this.$store.commit("updateBannerHeader",e.data.results[0].name)}.bind(this)).catch(function(e){console.log(e)})}},data:function(){return{inner_height:window.innerHeight-100}},mounted:function(){this.handleResize(),this.updateBannerHeader(),Object(r.b)(window,"resize",this.handleResize)},beforeDestroy:function(){Object(r.a)(window,"resize",this.handleResize)}}},766:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticClass:"iframe",attrs:{height:e.inner_height,src:e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});