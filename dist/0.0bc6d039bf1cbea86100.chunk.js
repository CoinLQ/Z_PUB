webpackJsonp([0],{15:function(e,t,n){n(773);var r=n(21)(n(775),n(781),"data-v-4a8821fd",null);r.options.__file="/home/xian/projects/Z/src/views/collate/bridge_page.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] bridge_page.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},773:function(e,t,n){var r=n(774);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},774:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\niframe[data-v-4a8821fd] {\n  width: 100%;\n  border-style: none;\n}\n",""])},775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(n(35),n(776)),o=n.n(r);t.default={name:"correct",components:{IframeTask:o.a},computed:{getHeight:function(){return window.innerHeight-100+"px"},getPageUrl:function(){return this.$route.name}},mounted:function(){}}},776:function(e,t,n){n(777);var r=n(21)(n(779),n(780),"data-v-b34f0d90",null);r.options.__file="/home/xian/projects/Z/src/views/collate/iframe_task.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] iframe_task.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},777:function(e,t,n){var r=n(778);"string"==typeof r&&(r=[[e.i,r,""]]);n(48)(r,{});r.locals&&(e.exports=r.locals)},778:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\niframe[data-v-b34f0d90] {\n  width: 100%;\n  border-style: none;\n}\n",""])},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),o=n(190);t.default={name:"IframeTask",props:["taskPath"],computed:{getPageUrl:function(){return r.a.ajax.defaults.baseURL+"/"+this.taskPath+"/"+this.$route.params.id},getHeight:function(){return this.inner_height}},methods:{handleResize:function(){this.inner_height=window.innerHeight-100},updateBannerHeader:function(){var e=r.a.ajax.defaults.baseURL+"/api/v1/tasks/"+this.taskPath+"/"+this.$route.params.id+"/detail";r.a.ajax.put(e,{}).then(function(e){this.$store.commit("updateBannerHeader",e.data.title)}.bind(this)).catch(function(e){console.log(e)})}},data:function(){return{inner_height:window.innerHeight-100}},mounted:function(){this.handleResize(),this.updateBannerHeader(),Object(o.b)(window,"resize",this.handleResize)},beforeDestroy:function(){Object(o.a)(window,"resize",this.handleResize)}}},780:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticClass:"iframe",attrs:{height:e.getHeight,src:e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0},781:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("IframeTask",{attrs:{"task-path":e.getPageUrl}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});