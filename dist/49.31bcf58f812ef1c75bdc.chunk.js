webpackJsonp([49],{585:function(t,n,e){e(749);var o=e(21)(e(752),e(753),null,null);o.options.__file="/home/qgc/projects/Z/src/views/auth/personalcenter.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] personalcenter.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},648:function(t,n,e){n=t.exports=e(47)(),n.push([t.i,"body {\n    margin: 0px;\n    padding: 0px;\n    font-family: Microsoft YaHei,SimSun, sans-serif,Helvetica Neue, Helvetica;\n    font-size: 14px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline:0;\n    font-size:100%;\n    background:transparent;\n}\n\nbody,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{\n    margin:0;\n    padding:0;\n}\nbody,html{\n    height:100%;\n}\nbody{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\na {\n    text-decoration: none;\n}\nimg {vertical-align: top;}\ninput,textarea{outline:none}\n/*清除浮动*/\n.clearfix:after{content:'.';display:block;width:0;visibility:hidden;height:0;clear:both;}\n.clearfix{*zoom:1;}\n/*清除浮动*/\nul,ol {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\nem{\n    font-style:normal;\n}\ninput::-ms-clear{display:none;}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\ninput[type=\"number\"]{\n    -moz-appearance: textfield;\n}\n.tl{\n    text-align: left;\n}\n.tr{\n    text-align: right;\n}\n.fl{\n    float: left;\n}\n.fr{\n    float: right;\n}\n.fb{\n    font-weight:600;\n}\n.w{\n    width:1000px;\n    margin:0 auto;\n    position: relative;\n}\n\n.show-passwd {\n    opacity: 0.5;\n}\n\n.show-repasswd {\n    opacity: 0.5;\n}",""])},649:function(t,n,e){t.exports=e.p+"ee9f1ae1194071595921b6b869aaea37.png"},650:function(t,n,e){t.exports=e.p+"e8aa344bb73757e1899959810997a482.png"},651:function(t,n,e){t.exports=e.p+"248ef83c96e3c9f05b058108440f1315.png"},652:function(t,n,e){t.exports=e.p+"d00548a476f2b89a9c9dfa0310287177.png"},653:function(t,n,e){t.exports=e.p+"df38766dbf2c6b03317cde8baf656d0e.png"},655:function(t,n,e){t.exports=e.p+"8cb1b9110f114e97236163db25ee4868.png"},749:function(t,n,e){var o=e(750);"string"==typeof o&&(o=[[t.i,o,""]]);e(48)(o,{});o.locals&&(t.exports=o.locals)},750:function(t,n,e){n=t.exports=e(47)(),n.i(e(648),""),n.i(e(751),""),n.push([t.i,"\nnav {\n\tdisplay: inline-block;\n\tmargin: 60px auto 45px;\n\tbackground-color: #5597b4;\n\tbox-shadow: 0 1px 1px #ccc;\n\tborder-radius: 2px;\n}\n",""])},751:function(t,n,e){n=t.exports=e(47)(),n.push([t.i,'body{\n\tbackground:#eee;\n}\n.username:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:27px;\n\twidth: 28px;\n\theight:28px;\n\tbackground:url('+e(649)+') no-repeat;\n}\n.email:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:27px;\n\twidth: 28px;\n\theight:28px;\n\tbackground:url('+e(650)+') no-repeat;\n}\n.password:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:26px;\n\twidth: 21px;\n\theight:26px;\n\tbackground:url('+e(651)+') no-repeat;\n}\n.vericode:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:21px;\n\twidth: 30px;\n\theight:28px;\n\tbackground:url('+e(652)+') no-repeat;\n}\n.checkmark:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:27px;\n\twidth: 25px;\n\theight:19px;\n\tbackground:url('+e(653)+') no-repeat;\n}\n.header{\n\twidth: 100%;\n\theight:80px;\n\tbackground-color:#1f262d;\n\tline-height: 80px;\n\ttext-align: center;\n}\n.header h1 img{\n\tmargin-top: 20px;\n}\n.person-main{\n\tpadding: 0px 0;\n}\n.form{\n\t#width: 780px;\n\tbackground-color: #fff;\n\tpadding:74px 110px 0 110px;\n\tposition: relative;\n\tbox-shadow: 0 0 20px rgba(0,0,0,0.07);\n\tborder-radius:10px;\n}\n.form .hd{\n\tposition: relative;\n\theight: 33px;\n\tpadding-bottom: 40px;\n}\n.form h3{\n\ttext-align: center;\n}\n.form .l{\n\tposition: absolute;\n\tleft:50px;\n\ttop:16px;\n}\n.form .r{\n\tposition: absolute;\n\tright:50px;\n\ttop:16px;\n}\n.form .bd{\n\tmargin-top: 40px;\n}\n.form .item{\n\theight: 120px;\n\tpadding-top: 20px;\n\tpadding-left: 73px;\n\tposition: relative;\n\tpadding-bottom: 40px;\n\tposition: relative;\n}\n.form .item input[type="text"],input[type="password"]{\n\twidth: 100%;\n\tbox-sizing:border-box;\n\tborder:0;\n\tborder-bottom: 4px solid #27a9e3;\n\t/*line-height: 50px;*/\n\tfont-size:18px;\n\tfont-family:Microsoft YaHei;\n\tfont-weight:400;\n}\n.item p{\n\tline-height: 50px;\n}\n.item span{\n\tdisplay:inline-block;\n\tcolor:#ccc;\n\tfont-size:18px;\n\tfont-weight:400;\n}\n.item span em{\n\tcolor:#27a9e3;\n\tcursor: pointer;\n}\n.form .btn{\n\tposition: absolute;\n\twidth: 134px;\n\theight: 134px;\n\ttop:50%;\n\tright:-67px;\n\tmargin-top: -67px;\n\tcursor: pointer;\n}\n.item .rember{\n\tcursor: pointer;\n}\n.item .forget,.item .send,.item .hidden{\n\tposition: absolute;\n\tright:0;\n\ttop:0px;\n\tcolor: #ccc;\n\tcursor: pointer;\n}\n.item .hidden{\n\ttop:10px;\n}\n\n.header h1 {\n\tcolor: white;\n    font-size: 30px;\n}\n.form h3 {\n    text-align: center;\n    font-size: 25px;\n    font-weight: 400;\n    color: darkgray;\n}\n.banner-logo{\n    padding: 0px 4px;\n    margin: 0px 6px;\n    display: inline-block;\n    text-align: center;\n    background-color: #ce0d1f;\n}\n.banner-logo > img{\n\t\n    height: 50px;\n    width: auto;\n}\n\n.header h1 img {\n\tmargin-top: 15px;\n}\n/* nav css */\n/* * {\n\tmargin: 0;\n\tpadding: 0;\n  } */\n  \n  body {\n\tfont: 15px/1.3 "Open Sans", sans-serif;\n\tcolor: #5e5b64;\n  }\n  a,\n  a:visited {\n\toutline: none;\n\tcolor: #389dc1;\n  }\n  \n  a:hover {\n\ttext-decoration: none;\n  }\n  \n  section,\n  footer,\n  header,\n  aside,\n  nav {\n\tdisplay: block;\n  }\n  \n  /* The menu */\n  nav {\n\tdisplay: inline-block;\n\tmargin: 60px auto 45px;\n\tbackground-color: #5597b4;\n\tbox-shadow: 0 1px 1px #ccc;\n\tborder-radius: 2px;\n  }\n  \n  nav a {\n\tdisplay: inline-block;\n\tpadding: 18px 30px;\n\tcolor: #fff !important;\n\tfont-weight: bold;\n\tfont-size: 16px;\n\ttext-decoration: none !important;\n\tline-height: 1;\n\ttext-transform: uppercase;\n\tbackground-color: transparent;\n  \n\t-webkit-transition: background-color 0.25s;\n\t-moz-transition: background-color 0.25s;\n\ttransition: background-color 0.25s;\n  }\n  \n  nav a:first-child {\n\tborder-radius: 2px 0 0 2px;\n  }\n  \n  nav a:last-child {\n\tborder-radius: 0px 2px 2px 0px;\n  }\n  \n  nav.base_info .base_info,\n  nav.reset_pwd .reset_pwd {\n\tbackground-color: #e35885;\n  }\n  \n  p {\n\tfont-size: 22px;\n\tfont-weight: bold;\n\tcolor: #7d9098;\n  }\n  \n  p b {\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tpadding: 5px 10px;\n\tbackground-color: #c4d7e0;\n\tborder-radius: 2px;\n\ttext-decoration: uppercase;\n\tfont-size: 18px;\n  }\n  button {\n\t  background-color: #4CAF50; /* Green */\n\t  border: none;\n\t  color: white;\n\t  padding: 5px 20px;\n\t  text-align: center;\n\t  text-decoration: none;\n\t  display: inline-block;\n\t  font-size: 16px;\n\t  border-radius: 4px;\n  }',""])},752:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(29),r=e.n(o),s=e(35),a=e(106),i=e.n(a);n.default={data:function(){var t=this,n=function(t,n,e){new RegExp("(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}").test(n)||e(new Error("密码长度为8-30，必须包含数字、字母、特殊符号")),e()},e=function(n,e,o){e!==t.form.newpassword?o(new Error("两次密码输入的不同。")):o()},o=function(t,n,e){s.a.ajax.get("/auth/staff/exist_email/?email="+n).then(function(t){-1==t.data.status?e():e(new Error("此邮箱还未注册."))}).catch(function(t){e()})},r=function(t,n,e){var o=["admin"];i.a.find(o,function(t){return t==n})&&e(new Error("不可使用该用户名。")),new RegExp("^(?=.*[-_a-zA-Z0-9]).{5,10}$").test(n)||e(new Error("用户名必须只包括数字、字母、连字号或下划线，长度在5-10之间"));var r="/auth/staff/exist_username/?username="+n;s.a.ajax.get(r).then(function(t){-1==t.data.status?e(new Error("此用户名已被使用。")):e()}).catch(function(t){e(new Error("无法连接服务器。"))})};return{activeName:"base_info",form:{vericode:"",email:"",username:"",password:"",oldpassword:"",newpassword:"",repassword:"",show_oldpasswd:!1,show_newpasswd:!1,show_repasswd:!1,send_type:"base_info"},rules:{username:[{type:"string",required:!0,message:this.$t("username required")},{validator:r,trigger:"blur"}],email:[{type:"email",required:!0,message:this.$t("需要有效email地址")},{validator:o,trigger:"blur"}],newpassword:[{type:"string",min:6,required:!0,message:this.$t("密码长度为8-30，必须包含数字、字母、特殊符号")},{validator:n,trigger:"blur"}],repassword:[{type:"string",required:!0,message:this.$t("两次输入的密码必须一致")},{validator:e,trigger:"blur"}]}}},created:function(){this.form.email=r.a.get("user"),this.form.username=r.a.get("username")},methods:{makeActive:function(t){this.activeName=t,this.form.send_type=t,this.$nextTick(function(){"base_info"==t?this.$refs.baseForm.resetFields():"reset_pwd"==t&&(this.$refs.pwdForm.resetFields(),this.form.oldpassword="",this.form.newpassword="",this.form.repassword="")})},resetusernameSubmit:function(t){var n=this;this.$refs.baseForm.validate(function(t){t?s.a.ajax.put("/auth/home-resetpw/",{username:n.form.username,email:r.a.get("user"),send_type:n.form.send_type,password:n.form.password}).then(function(t){n.$Notice.success({title:"用户名修改成功",desc:""}),n.storeCommit(n.form.username,r.a.get("user")),n.goHome()}).catch(function(t){t.response.data.msg?n.$Notice.error({title:n.$t("Failed"),desc:t.response.data.msg}):n.$Notice.error({title:n.$t("Failed"),desc:t.message})}):n.$Notice.error({title:n.$t("Failed"),desc:"密码错误。"})})},resetpasswordSubmit:function(t){var n=this;this.$refs.pwdForm.validate(function(t){t?s.a.ajax.put("/auth/home-resetpw/",{email:r.a.get("user"),send_type:n.form.send_type,oldpassword:n.form.oldpassword,newpassword:n.form.newpassword}).then(function(t){n.$Notice.success({title:"密码修改成功",desc:""}),n.goHome()}).catch(function(t){t.response.data.msg?n.$Notice.error({title:n.$t("Failed"),desc:t.response.data.msg}):n.$Notice.error({title:n.$t("Failed"),desc:t.message})}):n.$Notice.error({title:n.$t("Failed"),desc:"新密码不一致。"})})},storeCommit:function(t,n){this.$store.commit("setUserName",t),r.a.set("user",n),r.a.set("username",t)},goHome:function(){this.$router.push({name:"home_index"})}}}},753:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"person-main",align:"center"}},[o("nav",{class:t.activeName,staticStyle:{margin:"60px auto 45px","background-color":"#5597b4"}},[o("a",{staticClass:"base_info",attrs:{href:"#"},on:{click:function(n){t.makeActive("base_info")}}},[t._v("修改用户名")]),t._v(" "),o("a",{staticClass:"reset_pwd",attrs:{href:"#"},on:{click:function(n){t.makeActive("reset_pwd")}}},[t._v(" 修改密码  ")])]),t._v(" "),o("div",{staticClass:"person-main w"},[o("div",{staticClass:"form"},["base_info"==this.activeName?o("div",[o("div",{staticClass:"bd"},[o("Form",{ref:"baseForm",attrs:{model:t.form,rules:t.rules}},[o("div",{staticClass:"item username"},[o("FormItem",{attrs:{prop:"username"}},[o("Input",{attrs:{placeholder:"请输入新用户名"},model:{value:t.form.username,callback:function(n){t.$set(t.form,"username","string"==typeof n?n.trim():n)},expression:"form.username"}})],1)],1),t._v(" "),o("div",{staticClass:"item password"},[o("FormItem",{attrs:{prop:"password"}},[t.form.show_passwd?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.password,expression:"form.password",modifiers:{trim:!0}}],attrs:{placeholder:"请输入您的密码",type:"text"},domProps:{value:t.form.password},on:{input:function(n){n.target.composing||t.$set(t.form,"password",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}):o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.password,expression:"form.password",modifiers:{trim:!0}}],attrs:{placeholder:"请输入您的密码",type:"password"},domProps:{value:t.form.password},on:{input:function(n){n.target.composing||t.$set(t.form,"password",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}),t._v(" "),o("span",{class:{hidden:!0,"show-passwd":t.form.show_passwd},on:{click:function(n){t.form.show_passwd=!t.form.show_passwd}}},[o("img",{attrs:{src:e(655),alt:""}})])])],1),t._v(" "),o("div",[o("FormItem",{attrs:{prop:"submit"}},[o("button",{attrs:{type:"button"},on:{click:t.resetusernameSubmit}},[t._v("提交")])])],1),t._v(" "),o("br")])],1)]):"reset_pwd"==this.activeName?o("div",[o("div",{staticClass:"bd"},[o("Form",{ref:"pwdForm",attrs:{model:t.form,rules:t.rules}},[o("div",{staticClass:"item password"},[o("FormItem",{attrs:{prop:"oldpassword"}},[t.form.show_oldpasswd?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.oldpassword,expression:"form.oldpassword",modifiers:{trim:!0}}],attrs:{placeholder:"请输入您的原密码",type:"text"},domProps:{value:t.form.oldpassword},on:{input:function(n){n.target.composing||t.$set(t.form,"oldpassword",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}):o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.oldpassword,expression:"form.oldpassword",modifiers:{trim:!0}}],attrs:{placeholder:"请输入您的原密码",type:"password"},domProps:{value:t.form.oldpassword},on:{input:function(n){n.target.composing||t.$set(t.form,"oldpassword",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}),t._v(" "),o("span",{class:{hidden:!0,"show-passwd":t.form.show_oldpasswd},on:{click:function(n){t.form.show_oldpasswd=!t.form.show_oldpasswd}}},[o("img",{attrs:{src:e(655),alt:""}})])])],1),t._v(" "),o("div",{staticClass:"item password"},[o("FormItem",{attrs:{prop:"newpassword"}},[t.form.show_newpasswd?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.newpassword,expression:"form.newpassword",modifiers:{trim:!0}}],attrs:{placeholder:"请输入您的新密码",type:"text"},domProps:{value:t.form.newpassword},on:{input:function(n){n.target.composing||t.$set(t.form,"newpassword",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}):o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.newpassword,expression:"form.newpassword",modifiers:{trim:!0}}],attrs:{placeholder:"请输入您的新密码",type:"password"},domProps:{value:t.form.newpassword},on:{input:function(n){n.target.composing||t.$set(t.form,"newpassword",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}),t._v(" "),o("span",{class:{hidden:!0,"show-passwd":t.form.show_newpasswd},on:{click:function(n){t.form.show_newpasswd=!t.form.show_newpasswd}}},[o("img",{attrs:{src:e(655),alt:""}})])])],1),t._v(" "),o("div",{staticClass:"item checkmark"},[o("FormItem",{attrs:{prop:"repassword"}},[t.form.show_repasswd?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.repassword,expression:"form.repassword",modifiers:{trim:!0}}],attrs:{placeholder:"再次输入您的新密码",type:"text"},domProps:{value:t.form.repassword},on:{input:function(n){n.target.composing||t.$set(t.form,"repassword",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}):o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.repassword,expression:"form.repassword",modifiers:{trim:!0}}],attrs:{placeholder:"再次输入您的新密码",type:"password"},domProps:{value:t.form.repassword},on:{input:function(n){n.target.composing||t.$set(t.form,"repassword",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}}),t._v(" "),o("span",{class:{hidden:!0,"show-passwd":t.form.show_repasswd},on:{click:function(n){t.form.show_repasswd=!t.form.show_repasswd}}},[o("img",{attrs:{src:e(655),alt:""}})])])],1),t._v(" "),o("div",[o("FormItem",{attrs:{prop:"submit"}},[o("button",{attrs:{type:"button"},on:{click:t.resetpasswordSubmit}},[t._v("提交")])])],1),t._v(" "),o("br")])],1)]):t._e()])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});