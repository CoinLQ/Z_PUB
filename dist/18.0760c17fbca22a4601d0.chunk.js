webpackJsonp([18],{587:function(e,t,n){var o=n(20)(n(743),n(744),null,null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/collatetask/task_correct.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] task_correct.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},603:function(e,t,n){n(604);var o=n(20)(n(606),n(607),null,null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/mytask/ButtonWrapper.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] ButtonWrapper.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},604:function(e,t,n){var o=n(605);"string"==typeof o&&(o=[[e.i,o,""]]);n(48)(o,{});o.locals&&(e.exports=o.locals)},605:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"",""])},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ButtonWrapper",props:["text","size"],computed:{name:function(){return this.text},sz:function(){return this.size}},methods:{click:function(e){var t=Object.create(e,{vm:{value:this,writable:!1}});this.$emit("click",t)}}}},607:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("Button",{attrs:{size:e.sz},on:{click:e.click}},[e._v(e._s(e.name))])},staticRenderFns:[]},e.exports.render._withStripped=!0},613:function(e,t,n){n(614);var o=n(20)(n(616),n(617),"data-v-6f071d2a",null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/collatetask/obtain_task_list.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] obtain_task_list.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},614:function(e,t,n){var o=n(615);"string"==typeof o&&(o=[[e.i,o,""]]);n(48)(o,{});o.locals&&(e.exports=o.locals)},615:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.table[data-v-6f071d2a] {\n    box-shadow: 0px 0px 1px 1px rgb(188, 191, 197);\n    border-radius: 1px;\n}\n#search[data-v-6f071d2a] {\n    padding: 0px 0px 10px 5px;\n    position: relative;\n    left: 70%;\n    width: 30%;\n}\n.wrapper[data-v-6f071d2a] {\n    margin: 10px;\n}\n",""])},616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),a=n(187),i=n(603),s=n.n(i);t.default={name:"ObtianTaskList",componenets:[s.a],props:["columns","viewRouteName"],data:function(){var e=this;return{loading:!1,inner_height:100,keyword:"",action:{title:"操作",key:"op",fixed:"right",align:"center",width:100,render:function(t,n){return t(s.a,{props:{size:"large",text:"领取"},on:{click:function(t){e.obtain(n.index)}}})}},rows:[],pagination:{}}},computed:{dataUrl:function(){return"/api/v1/tasks/"+this.viewRouteName},total_column:function(){return this.columns.concat(this.action)}},methods:{gotoPage:function(e,t){this.loadData({page:e,page_size:t})},changePage:function(e){this.gotoPage(e,this.pagination.page_size)},changePageSize:function(e){this.pagination.page_size=e,this.gotoPage(this.pagination.page,e)},clear:function(){this.keyword="",this.search(event)},search:function(e){this.loadData({search:this.keyword})},loadData:function(e){var t=this;!e.search&&this.keyword&&(e.search=this.keyword),this.pagination.page_size&&(e.page_size=this.pagination.page_size);var n={params:e};t.loading=!0,o.a.ajax.get(this.dataUrl,n).then(function(e){t.rows=e.data.models,t.loading=!1,t.pagination=e.data.pagination}).catch(function(e){t.$Notice.error({title:t.$t("Failed"),desc:e.message}),t.loading=!1})},obtain:function(e){var t=this,n=this.rows[e].id,a=this.dataUrl+"/"+n+"/obtain";t.loading=!0,o.a.ajax.put(a).then(function(n){if(t.loading=!1,0==n.data.status)return t.$router.push({name:t.viewRouteName,params:{id:n.data.task_id}});t.$Notice.error({title:t.$t("Failed"),desc:n.data.msg}),t.rows.splice(e,1)}).catch(function(e){t.$Notice.error({title:t.$t("Failed"),desc:e.message}),t.loading=!1})},handleResize:function(){this.inner_height=window.innerHeight-192}},mounted:function(){this.gotoPage(1,10),this.handleResize(),Object(a.b)(window,"resize",this.handleResize);var e=o.a.setCurrentPath(this,this.$route.name);this.$store.commit("updateMenulist"),e.length>=2&&this.$store.commit("addOpenSubmenu",e[1].name)},beforeDestroy:function(){Object(a.a)(window,"resize",this.handleResize)}}},617:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"wrapper"},[n("div",{attrs:{id:"search"}},[n("Input",{attrs:{type:"text",placeholder:"关键字...",size:"default",autocomplete:"off",icon:"close-circled",autofocus:""},on:{"on-click":e.clear},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(e.keyword)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),n("Table",{staticClass:"table",attrs:{stripe:"",border:"",size:"large",height:e.inner_height,loading:e.loading,columns:e.total_column,data:e.rows}})],1),e._v(" "),n("Page",{attrs:{total:e.pagination.total_entries,current:e.pagination.page,pageSize:e.pagination.page_size,size:"small","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(613),a=n.n(o),i=n(603);n.n(i);t.default={components:{ObtianTaskList:a.a},data:function(){return{pathname:"correct",columns:[{title:"批次号",key:"batch_task"},{title:"藏",key:"tripitaka_name"},{title:"经",key:"sutra"},{title:"第几卷",key:"reel_no"},{title:"阶段",key:"task_no"},{title:"优先级",key:"priority"}]}}}},744:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("ObtianTaskList",{attrs:{viewRouteName:e.pathname,columns:e.columns}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});