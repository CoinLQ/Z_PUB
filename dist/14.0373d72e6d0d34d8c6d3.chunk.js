webpackJsonp([14],{628:function(e,t,n){var i=n(21)(n(870),n(871),null,null);i.options.__file="/home/xian/projects/Z/src/views/myfeedback/correct.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] correct.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},632:function(e,t,n){n(633);var i=n(21)(n(635),n(636),null,null);i.options.__file="/home/xian/projects/Z/src/views/mytask/ButtonWrapper.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ButtonWrapper.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},633:function(e,t,n){var i=n(634);"string"==typeof i&&(i=[[e.i,i,""]]);n(48)(i,{});i.locals&&(e.exports=i.locals)},634:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"",""])},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ButtonWrapper",props:["text","size"],computed:{name:function(){return this.text},sz:function(){return this.size}},methods:{click:function(e){var t=Object.create(e,{vm:{value:this,writable:!1}});this.$emit("click",t)}}}},636:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("Button",{attrs:{size:e.sz},on:{click:e.click}},[e._v(e._s(e.name))])},staticRenderFns:[]},e.exports.render._withStripped=!0},690:function(e,t,n){n(691);var i=n(21)(n(693),n(694),"data-v-5c082944",null);i.options.__file="/home/xian/projects/Z/src/views/myfeedback/my_feedback_list.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] my_feedback_list.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},691:function(e,t,n){var i=n(692);"string"==typeof i&&(i=[[e.i,i,""]]);n(48)(i,{});i.locals&&(e.exports=i.locals)},692:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.table[data-v-5c082944] {\n  box-shadow: 0px 0px 1px 1px rgb(188, 191, 197);\n  border-radius: 1px;\n}\n#search[data-v-5c082944] {\n  padding: 0px 0px 10px 5px;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.wrapper[data-v-5c082944] {\n  margin: 10px;\n}\n#header[data-v-5c082944] {\n  padding: 0px 0px 10px 5px;\n  position: relative;\n  width: 100%;\n  height: 48px;\n}\n.l-actions[data-v-5c082944] {\n  padding: 0px 0px 10px 5px;\n  position: relative;\n  width: 100%;\n  height: 48px;\n}\n.l-actions > .ivu-btn[data-v-5c082944] {\n  line-height: 2;\n  color: black;\n}\n",""])},693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(35),o=n(632),a=n.n(o),s=n(190);t.default={name:"MyFeedbackList",componenets:[a.a],props:["columns","viewRouteName"],data:function(){var e=this;return{loading:!1,inner_height:100,keyword:"",action:{title:"操作",key:"op",fixed:"right",align:"center",width:100,render:function(t,n){return t(a.a,{props:{size:"large",text:"查看"},on:{click:function(t){e.view(n.index)}}})}},rows:[],pagination:{}}},computed:{dataUrl:function(){return"/api/"+this.viewRouteName+"/mine/"},total_column:function(){return this.columns.concat(this.action)}},methods:{startTask:function(){var e=_.find(this.rows,function(e){return"进行中"==e.status});e?this.$router.push({name:this.viewRouteName,params:{id:e.id}}):this.gotoPickTask()},gotoPage:function(e,t){this.loadData({page:e,page_size:t})},changePage:function(e){this.gotoPage(e,this.pagination.page_size)},changePageSize:function(e){this.pagination.page_size=e,this.gotoPage(this.pagination.page,e)},clear:function(){this.keyword="",this.search(event)},search:function(e){this.loadData({search:this.keyword})},loadData:function(e){var t=this;!e.search&&this.keyword&&(e.search=this.keyword),this.pagination.page_size&&(e.page_size=this.pagination.page_size);var n={params:e};t.loading=!0,i.a.ajax.get(this.dataUrl,n).then(function(e){t.rows=e.data.models,t.loading=!1,t.pagination=e.data.pagination}).catch(function(e){t.$Notice.error({title:t.$t("Failed"),desc:e.message}),t.loading=!1})},view:function(e){var t=this.rows[e].id;this.$router.push({name:"my_"+this.viewRouteName,params:{id:t}})},handleResize:function(){this.inner_height=window.innerHeight-192},gotoPickTask:function(){return this.$router.push({name:"picktask_index",params:{task:this.viewRouteName}})}},mounted:function(){this.gotoPage(1,10),this.handleResize(),Object(s.b)(window,"resize",this.handleResize)},beforeDestroy:function(){Object(s.a)(window,"resize",this.handleResize)}}},694:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"wrapper"},[n("Row",[n("Col",{attrs:{span:"6",offset:"12"}},[n("div",{attrs:{id:"search"}},[n("Input",{attrs:{type:"text",placeholder:"关键字...",size:"default",autocomplete:"off",icon:"close-circled",autofocus:""},on:{"on-click":e.clear},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(e.keyword)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)])],1),e._v(" "),n("Table",{staticClass:"table",attrs:{stripe:"",border:"",size:"large",height:e.inner_height,loading:e.loading,columns:e.total_column,data:e.rows}})],1),e._v(" "),n("Page",{attrs:{total:e.pagination.total_entries,current:e.pagination.page,pageSize:e.pagination.page_size,size:"small","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(690),o=n.n(i),a=n(632);n.n(a);t.default={components:{MyFeedbackList:o.a},data:function(){return{pathname:"correctfeedback",columns:[{title:"实体经名",key:"sutra_name"},{title:"第几卷",key:"reel_no"},{title:"原始文本",key:"original_text"},{title:"反馈文本",key:"fb_text"},{title:"反馈说明",key:"fb_comment"},{title:"反馈用户",key:"fb_user_display"},{title:"反馈时间",key:"created_at"}]}}}},871:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("MyFeedbackList",{attrs:{viewRouteName:e.pathname,columns:e.columns}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});