webpackJsonp([53],{589:function(e,t,n){n(767);var s=n(21)(n(769),n(770),null,null);s.options.__file="/home/xian/projects/Z/src/views/message/message.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},767:function(e,t,n){var s=n(768);"string"==typeof s&&(s=[[e.i,s,""]]);n(48)(s,{});s.locals&&(e.exports=s.locals)},768:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,"\n.message-main-con {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.message-mainlist-con {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 300px;\n  bottom: 0;\n  padding: 10px 0;\n}\n.message-mainlist-con div {\n  padding: 10px;\n  margin: 0 20px;\n  border-bottom: 1px dashed #d2d3d2;\n}\n.message-mainlist-con div:last-child {\n  border: none;\n}\n.message-mainlist-con div .message-count-badge-outer {\n  float: right;\n}\n.message-mainlist-con div .message-count-badge {\n  background: #d2d3d2;\n}\n.message-mainlist-con div:first-child .message-count-badge {\n  background: #ed3f14;\n}\n.message-mainlist-con div .mes-type-btn-text {\n  margin-left: 10px;\n}\n.message-content-con {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  left: 300px;\n  background: white;\n  border-radius: 3px;\n  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);\n  overflow: auto;\n}\n.message-content-con .message-title-list-con {\n  width: 100%;\n  height: 100%;\n}\n.message-content-con .message-content-top-bar {\n  height: 40px;\n  width: 100%;\n  background: white;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-bottom: 1px solid #dededb;\n}\n.message-content-con .message-content-top-bar .mes-back-btn-con {\n  position: absolute;\n  width: 70px;\n  height: 30px;\n  left: 0;\n  top: 5px;\n}\n.message-content-con .message-content-top-bar .mes-title {\n  position: absolute;\n  top: 0;\n  right: 70px;\n  bottom: 0;\n  left: 70px;\n  line-height: 40px;\n  padding: 0 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n.message-content-con .mes-time-con {\n  position: absolute;\n  width: 100%;\n  top: 40px;\n  left: 0;\n  padding: 20px 0;\n  text-align: center;\n  font-size: 14px;\n  color: #b7b7b5;\n}\n.message-content-con .message-content-body {\n  position: absolute;\n  top: 90px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n.message-content-con .message-content-body .message-content {\n  padding: 10px 20px;\n}\n.back-message-list-enter,\n.back-message-list-leave-to {\n  opacity: 0;\n}\n.back-message-list-enter-active,\n.back-message-list-leave-active {\n  transition: all .5s;\n}\n.back-message-list-enter-to,\n.back-message-list-leave {\n  opacity: 1;\n}\n.view-message-enter,\n.view-message-leave-to {\n  opacity: 0;\n}\n.view-message-enter-active,\n.view-message-leave-active {\n  transition: all .5s;\n}\n.view-message-enter-to,\n.view-message-leave {\n  opacity: 1;\n}\n.mes-current-type-btn-enter,\n.mes-current-type-btn-leave-to {\n  opacity: 0;\n  width: 0;\n}\n.mes-current-type-btn-enter-active,\n.mes-current-type-btn-leave-active {\n  transition: all .3s;\n}\n.mes-current-type-btn-enter-to,\n.mes-current-type-btn-leave {\n  opacity: 1;\n  width: 12px;\n}\n",""])},769:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"message_index",data:function(){var e=this,t=function(t,n){return t("Button",{props:{size:"small"},on:{click:function(){e.hasreadMesList.unshift(e.currentMesList.splice(n.index,1)[0]),e.$store.commit("setMessageCount",e.unreadMesList.length)}}},"标为已读")},n=function(t,n){return t("Button",{props:{size:"small",type:"error"},on:{click:function(){e.recyclebinList.unshift(e.hasreadMesList.splice(n.index,1)[0])}}},"删除")},s=function(t,n){return t("Button",{props:{size:"small"},on:{click:function(){e.hasreadMesList.unshift(e.recyclebinList.splice(n.index,1)[0])}}},"还原")};return{currentMesList:[],unreadMesList:[],hasreadMesList:[],recyclebinList:[],currentMessageType:"unread",showMesTitleList:!0,unreadCount:0,hasreadCount:0,recyclebinCount:0,noDataText:"暂无未读消息",mes:{title:"",time:"",content:""},mesTitleColumns:[{title:" ",key:"title",align:"left",ellipsis:!0,render:function(t,n){return t("a",{on:{click:function(){e.showMesTitleList=!1,e.mes.title=n.row.title,e.mes.time=e.formatDate(n.row.time),e.getContent(n.index)}}},n.row.title)}},{title:" ",key:"time",align:"center",width:180,render:function(t,n){return t("span",[t("Icon",{props:{type:"android-time",size:12},style:{margin:"0 5px"}}),t("span",{props:{type:"android-time",size:12}},e.formatDate(n.row.time))])}},{title:" ",key:"asread",align:"center",width:100,render:function(a,i){return"unread"===e.currentMessageType?a("div",[t(a,i)]):"hasread"===e.currentMessageType?a("div",[n(a,i)]):a("div",[s(a,i)])}}]}},methods:{formatDate:function(e){var t=new Date(e);return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+"  "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},backMesTitleList:function(){this.showMesTitleList=!0},setCurrentMesType:function(e){this.currentMessageType!==e&&(this.showMesTitleList=!0),this.currentMessageType=e,"unread"===e?(this.noDataText="暂无未读消息",this.currentMesList=this.unreadMesList):"hasread"===e?(this.noDataText="暂无已读消息",this.currentMesList=this.hasreadMesList):(this.noDataText="回收站无消息",this.currentMesList=this.recyclebinList)},getContent:function(e){var t="";switch(this.currentMessageType+e){case"unread0":t="欢迎登录后台管理系统，来了解他的用途吧。";break;case"hasread0":t="这是您点击的《这是一条您已经读过的消息》的相关内容。";break;default:t="这是您点击的《这是一条被删除的消息》的相关内容。"}this.mes.content=t}},mounted:function(){this.currentMesList=this.unreadMesList=[{title:"欢迎登录后台管理系统，来了解他的用途吧",time:1507390106e3}],this.hasreadMesList=[{title:"这是一条您已经读过的消息",time:1507330106e3}],this.recyclebinList=[{title:"这是一条被删除的消息",time:1506390106e3}],this.unreadCount=this.unreadMesList.length,this.hasreadCount=this.hasreadMesList.length,this.recyclebinCount=this.recyclebinList.length},watch:{unreadMesList:function(e){this.unreadCount=e.length},hasreadMesList:function(e){this.hasreadCount=e.length},recyclebinList:function(e){this.recyclebinCount=e.length}}}},770:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-main-con"},[n("div",{staticClass:"message-mainlist-con"},[n("div",[n("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("unread")}}},[n("transition",{attrs:{name:"mes-current-type-btn"}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"unread"===e.currentMessageType,expression:"currentMessageType === 'unread'"}],attrs:{type:"checkmark"}})],1),n("span",{staticClass:"mes-type-btn-text"},[e._v("未读消息")]),n("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.unreadCount}})],1)],1),e._v(" "),n("div",[n("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("hasread")}}},[n("transition",{attrs:{name:"mes-current-type-btn"}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"hasread"===e.currentMessageType,expression:"currentMessageType === 'hasread'"}],attrs:{type:"checkmark"}})],1),n("span",{staticClass:"mes-type-btn-text"},[e._v("已读消息")]),n("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.hasreadCount}})],1)],1),e._v(" "),n("div",[n("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("recyclebin")}}},[n("transition",{attrs:{name:"mes-current-type-btn"}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"recyclebin"===e.currentMessageType,expression:"currentMessageType === 'recyclebin'"}],attrs:{type:"checkmark"}})],1),n("span",{staticClass:"mes-type-btn-text"},[e._v("回收站")]),n("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.recyclebinCount}})],1)],1)]),e._v(" "),n("div",{staticClass:"message-content-con"},[n("transition",{attrs:{name:"view-message"}},[e.showMesTitleList?n("div",{staticClass:"message-title-list-con"},[n("Table",{ref:"messageList",attrs:{columns:e.mesTitleColumns,data:e.currentMesList,"no-data-text":e.noDataText}})],1):e._e()]),e._v(" "),n("transition",{attrs:{name:"back-message-list"}},[e.showMesTitleList?e._e():n("div",{staticClass:"message-view-content-con"},[n("div",{staticClass:"message-content-top-bar"},[n("span",{staticClass:"mes-back-btn-con"},[n("Button",{attrs:{type:"text"},on:{click:e.backMesTitleList}},[n("Icon",{attrs:{type:"chevron-left"}}),e._v("  返回")],1)],1),e._v(" "),n("h3",{staticClass:"mes-title"},[e._v(e._s(e.mes.title))])]),e._v(" "),n("p",{staticClass:"mes-time-con"},[n("Icon",{attrs:{type:"android-time"}}),e._v("  "+e._s(e.mes.time))],1),e._v(" "),n("div",{staticClass:"message-content-body"},[n("p",{staticClass:"message-content"},[e._v(e._s(e.mes.content))])])])])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});