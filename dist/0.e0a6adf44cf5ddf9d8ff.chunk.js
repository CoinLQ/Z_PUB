webpackJsonp([0],{17:function(e,t,n){n(916);var r=n(24)(n(918),n(924),"data-v-4a8821fd",null);r.options.__file="/home/qgc/projects/Z/src/views/collate/bridge_page.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] bridge_page.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},916:function(e,t,n){var r=n(917);"string"==typeof r&&(r=[[e.i,r,""]]);n(60)(r,{});r.locals&&(e.exports=r.locals)},917:function(e,t,n){t=e.exports=n(59)(),t.push([e.i,"\niframe[data-v-4a8821fd] {\n  width: 100%;\n  border-style: none;\n}\n",""])},918:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(n(39),n(919)),o=n.n(r);t.default={name:"correct",components:{IframeTask:o.a},computed:{getHeight:function(){return window.innerHeight-100+"px"},getPageUrl:function(){return this.$route.name}},mounted:function(){}}},919:function(e,t,n){n(920);var r=n(24)(n(922),n(923),"data-v-b34f0d90",null);r.options.__file="/home/qgc/projects/Z/src/views/collate/iframe_task.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] iframe_task.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},920:function(e,t,n){var r=n(921);"string"==typeof r&&(r=[[e.i,r,""]]);n(60)(r,{});r.locals&&(e.exports=r.locals)},921:function(e,t,n){t=e.exports=n(59)(),t.push([e.i,"\niframe[data-v-b34f0d90] {\n  width: 100%;\n  border-style: none;\n}\n",""])},922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(39),o=n(253);t.default={name:"IframeTask",props:["taskPath"],computed:{getPageUrl:function(){return r.a.ajax.defaults.baseURL+"/"+this.taskPath+"/"+this.$route.params.id},getHeight:function(){return this.inner_height}},methods:{handleResize:function(){this.inner_height=window.innerHeight-100},updateBannerHeader:function(){var e=r.a.ajax.defaults.baseURL+"/api/v1/tasks/"+this.taskPath+"/"+this.$route.params.id+"/detail";r.a.ajax.put(e,{}).then(function(e){this.$store.commit("updateBannerHeader",e.data.title)}.bind(this)).catch(function(e){console.log(e)})}},data:function(){return{inner_height:window.innerHeight-100}},mounted:function(){this.handleResize(),this.updateBannerHeader(),Object(o.b)(window,"resize",this.handleResize)},beforeDestroy:function(){Object(o.a)(window,"resize",this.handleResize)}}},923:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticClass:"iframe",attrs:{height:e.getHeight,src:e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0},924:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("IframeTask",{attrs:{"task-path":e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});