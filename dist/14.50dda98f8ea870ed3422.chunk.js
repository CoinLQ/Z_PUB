webpackJsonp([14],{586:function(e,t,n){var o=n(20)(n(755),n(756),null,null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/collatetask/task_verify_correct.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] task_verify_correct.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},601:function(e,t,n){n(602);var o=n(20)(n(604),n(605),null,null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/mytask/ButtonWrapper.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] ButtonWrapper.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},602:function(e,t,n){var o=n(603);"string"==typeof o&&(o=[[e.i,o,""]]);n(48)(o,{});o.locals&&(e.exports=o.locals)},603:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"",""])},604:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ButtonWrapper",props:["text","size"],computed:{name:function(){return this.text},sz:function(){return this.size}},methods:{click:function(e){var t=Object.create(e,{vm:{value:this,writable:!1}});this.$emit("click",t)}}}},605:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("Button",{attrs:{size:e.sz},on:{click:e.click}},[e._v(e._s(e.name))])},staticRenderFns:[]},e.exports.render._withStripped=!0},606:function(e,t,n){n(607);var o=n(20)(n(609),n(610),"data-v-6f071d2a",null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/collatetask/obtain_task_list.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] obtain_task_list.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},607:function(e,t,n){var o=n(608);"string"==typeof o&&(o=[[e.i,o,""]]);n(48)(o,{});o.locals&&(e.exports=o.locals)},608:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.table[data-v-6f071d2a] {\n    box-shadow: 0px 0px 1px 1px rgb(188, 191, 197);\n    border-radius: 1px;\n}\n#search[data-v-6f071d2a] {\n    padding: 0px 0px 10px 5px;\n    position: relative;\n    left: 70%;\n    width: 30%;\n}\n.wrapper[data-v-6f071d2a] {\n    margin: 10px;\n}\n",""])},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),a=n(601),i=n.n(a);t.default={name:"ObtianTaskList",componenets:[i.a],props:["columns","viewRouteName"],data:function(){var e=this;return{loading:!1,inner_height:100,keyword:"",action:{title:"操作",key:"op",fixed:"right",align:"center",width:100,render:function(t,n){return t(i.a,{props:{size:"large",text:"领取"},on:{click:function(t){e.obtain(n.index)}}})}},rows:[],pagination:{}}},computed:{dataUrl:function(){return"/api/v1/tasks/"+this.viewRouteName},total_column:function(){return this.columns.concat(this.action)}},methods:{gotoPage:function(e,t){this.loadData({params:{page:e,page_size:t}})},changePage:function(e){this.gotoPage(e,this.pagination.page_size)},changePageSize:function(e){this.gotoPage(this.pagination.page,e)},clear:function(){this.keyword="",this.search(event)},search:function(e){this.loadData({search:this.keyword})},loadData:function(e){var t=this,n={params:e};t.loading=!0,o.a.ajax.get(this.dataUrl,n).then(function(e){t.rows=e.data.models,t.loading=!1,t.pagination=e.data.pagination}).catch(function(e){t.$Notice.error({title:t.$t("Failed"),desc:e.message}),t.loading=!1})},obtain:function(e){var t=this,n=this.rows[e].id,a=this.dataUrl+"/"+n+"/obtain";t.loading=!0,o.a.ajax.put(a).then(function(n){if(t.loading=!1,0==n.data.status)return t.$router.push({name:t.viewRouteName,params:{id:n.data.task_id}});t.$Notice.error({title:t.$t("Failed"),desc:n.data.msg}),t.rows.splice(e,1)}).catch(function(e){t.$Notice.error({title:t.$t("Failed"),desc:e.message}),t.loading=!1})}},mounted:function(){this.gotoPage(1,10),this.inner_height=window.innerHeight-180}}},610:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"wrapper"},[n("div",{attrs:{id:"search"}},[n("Input",{attrs:{type:"text",placeholder:"关键字...",size:"default",autocomplete:"off",icon:"close-circled",autofocus:""},on:{"on-click":e.clear},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(e.keyword)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),n("Table",{staticClass:"table",attrs:{stripe:"",border:"",size:"large",height:e.inner_height,loading:e.loading,columns:e.total_column,data:e.rows}})],1),e._v(" "),n("Page",{attrs:{total:e.pagination.total_pages,current:e.pagination.page,pageSize:e.pagination.page_size,size:"small","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},755:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(606),a=n.n(o),i=n(601);n.n(i);t.default={components:{ObtianTaskList:a.a},data:function(){return{pathname:"verify_correct",columns:[{title:"批次号",key:"batch_task"},{title:"龙泉经名",key:"lqsutra_name"},{title:"藏",key:"tripitaka_name"},{title:"经",key:"sutra"},{title:"第几卷",key:"reel_no"},{title:"优先级",key:"priority"}]}}}},756:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("ObtianTaskList",{attrs:{viewRouteName:e.pathname,columns:e.columns}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});