webpackJsonp([9],{724:function(n,r,t){t(861),t(863);var e=t(24)(t(865),t(866),null,null);e.options.__file="E:\\projects\\Z\\src\\views\\auth\\signup.vue",e.esModule&&Object.keys(e.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] signup.vue: functional components are not supported with templates, they should use render functions."),n.exports=e.exports},793:function(n,r,t){r=n.exports=t(59)(),r.push([n.i,"body {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: Microsoft YaHei,SimSun, sans-serif,Helvetica Neue, Helvetica;\r\n    font-size: 14px;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\nhtml, body, div, span, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\nabbr, address, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, samp,\r\nsmall, strong, sub, sup, var,\r\nb, i,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section, summary,\r\ntime, mark, audio, video {\r\n    margin:0;\r\n    padding:0;\r\n    border:0;\r\n    outline:0;\r\n    font-size:100%;\r\n    background:transparent;\r\n}\r\n\r\nbody,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{\r\n    margin:0;\r\n    padding:0;\r\n}\r\nbody,html{\r\n    height:100%;\r\n}\r\nbody{\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\nimg {vertical-align: top;}\r\ninput,textarea{outline:none}\r\n/*清除浮动*/\r\n.clearfix:after{content:'.';display:block;width:0;visibility:hidden;height:0;clear:both;}\r\n.clearfix{*zoom:1;}\r\n/*清除浮动*/\r\nul,ol {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\nem{\r\n    font-style:normal;\r\n}\r\ninput::-ms-clear{display:none;}\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\ninput[type=\"number\"]{\r\n    -moz-appearance: textfield;\r\n}\r\n.tl{\r\n    text-align: left;\r\n}\r\n.tr{\r\n    text-align: right;\r\n}\r\n.fl{\r\n    float: left;\r\n}\r\n.fr{\r\n    float: right;\r\n}\r\n.fb{\r\n    font-weight:600;\r\n}\r\n.w{\r\n    width:1000px;\r\n    margin:0 auto;\r\n    position: relative;\r\n}\r\n\r\n.show-passwd {\r\n    opacity: 0.5;\r\n}\r\n\r\n.show-repasswd {\r\n    opacity: 0.5;\r\n}",""])},794:function(n,r,t){n.exports=t.p+"ee9f1ae1194071595921b6b869aaea37.png"},795:function(n,r,t){n.exports=t.p+"e8aa344bb73757e1899959810997a482.png"},796:function(n,r,t){n.exports=t.p+"248ef83c96e3c9f05b058108440f1315.png"},797:function(n,r,t){n.exports=t.p+"d00548a476f2b89a9c9dfa0310287177.png"},798:function(n,r,t){n.exports=t.p+"df38766dbf2c6b03317cde8baf656d0e.png"},799:function(n,r,t){r=n.exports=t(59)(),r.push([n.i,'body{\r\n\tbackground:#eee;\r\n}\r\n.username:before{\r\n\tcontent:"";\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:27px;\r\n\twidth: 28px;\r\n\theight:28px;\r\n\tbackground:url('+t(794)+') no-repeat;\r\n}\r\n.email:before{\r\n\tcontent:"";\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:27px;\r\n\twidth: 28px;\r\n\theight:28px;\r\n\tbackground:url('+t(795)+') no-repeat;\r\n}\r\n.password:before{\r\n\tcontent:"";\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:26px;\r\n\twidth: 21px;\r\n\theight:26px;\r\n\tbackground:url('+t(796)+') no-repeat;\r\n}\r\n.vericode:before{\r\n\tcontent:"";\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:21px;\r\n\twidth: 30px;\r\n\theight:28px;\r\n\tbackground:url('+t(797)+') no-repeat;\r\n}\r\n.checkmark:before{\r\n\tcontent:"";\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:27px;\r\n\twidth: 25px;\r\n\theight:19px;\r\n\tbackground:url('+t(798)+') no-repeat;\r\n}\r\n.header{\r\n\twidth: 100%;\r\n\theight:80px;\r\n\tbackground-color:#ce0d1f;\r\n\tline-height: 80px;\r\n\ttext-align: center;\r\n}\r\n.main{\r\n\tpadding: 100px 0;\r\n}\r\n.form{\r\n\t#width: 780px;\r\n\tbackground-color: #fff;\r\n\tpadding:74px 110px 0 110px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 0 20px rgba(0,0,0,0.07);\r\n\tborder-radius:10px;\r\n}\r\n.form .hd{\r\n\tposition: relative;\r\n\theight: 33px;\r\n\tpadding-bottom: 40px;\r\n}\r\n.form h3{\r\n\ttext-align: center;\r\n}\r\n.form .l{\r\n\tposition: absolute;\r\n\tleft:50px;\r\n\ttop:16px;\r\n}\r\n.form .r{\r\n\tposition: absolute;\r\n\tright:50px;\r\n\ttop:16px;\r\n}\r\n.form .bd{\r\n\tmargin-top: 40px;\r\n}\r\n.form .item{\r\n\theight: 120px;\r\n\tpadding-top: 20px;\r\n\tpadding-left: 73px;\r\n\tposition: relative;\r\n\tpadding-bottom: 40px;\r\n\tposition: relative;\r\n}\r\n.form .item input[type="text"],input[type="password"]{\r\n\twidth: 100%;\r\n\tbox-sizing:border-box;\r\n\tborder:0;\r\n\tborder-bottom: 2px solid #27a9e3;\r\n\t/*line-height: 50px;*/\r\n\tfont-size:18px;\r\n\tfont-family:Microsoft YaHei;\r\n\tfont-weight:400;\r\n}\r\n.item p{\r\n\tline-height: 50px;\r\n}\r\n.item span{\r\n\tdisplay:inline-block;\r\n\tcolor:#ccc;\r\n\tfont-size:18px;\r\n\tfont-weight:400;\r\n}\r\n.item span em{\r\n\tcolor:#27a9e3;\r\n\tcursor: pointer;\r\n}\r\n.form .btn{\r\n\tposition: absolute;\r\n\twidth: 134px;\r\n\theight: 134px;\r\n\ttop:50%;\r\n\tright:-67px;\r\n\tmargin-top: -67px;\r\n\tcursor: pointer;\r\n}\r\n.item .rember{\r\n\tcursor: pointer;\r\n}\r\n.item .forget,.item .send,.item .hidden{\r\n\tposition: absolute;\r\n\tright:0;\r\n\ttop:0px;\r\n\tcolor: #ccc;\r\n\tcursor: pointer;\r\n}\r\n.item .hidden{\r\n\ttop:10px;\r\n}\r\n\r\n.header h1 {\r\n\tcolor: white;\r\n    font-size: 30px;\r\n}\r\n.form h3 {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    font-weight: 400;\r\n    color: darkgray;\r\n}\r\n.banner-logo{\r\n    padding: 0px 4px;\r\n    margin: 0px 6px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    background-color: #ce0d1f;\r\n}\r\n.banner-logo > img{\r\n\t\r\n    height: 70px;\r\n    width: auto;\r\n}\r\n\r\n.header h1 img {\r\n\tmargin-top: 5px;\r\n}',""])},831:function(n,r,t){n.exports=t.p+"e1c825c965e69a56201347891ece049d.png"},832:function(n,r,t){n.exports=t.p+"d543c9ba8d176514f3de2bfb1eb21eff.png"},833:function(n,r,t){n.exports=t.p+"a40e1fae5001d5ab63d1abd40907ebe9.png"},834:function(n,r,t){n.exports=t.p+"f944b01c5f50b1952aff90192f87e2a6.png"},861:function(n,r,t){var e=t(862);"string"==typeof e&&(e=[[n.i,e,""]]);t(60)(e,{});e.locals&&(n.exports=e.locals)},862:function(n,r,t){r=n.exports=t(59)(),r.i(t(793),""),r.i(t(799),""),r.push([n.i,"\n.popContainer{  \n  position: fixed;  \n  top: 0;  \n  left: 0;  \n  right: 0;  \n  bottom: 0;  \n  background: rgba(e,e,e,0.3);  \n  /* 垂直水平居中 */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.loading{\n      /*固定loading*/\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      /*垂直水平居中*/\n      margin: -20px 0 0 -20px;\n      width: 40px;\n      height: 40px;\n      border: 4px solid;\n      border-color: red red transparent;\n      border-radius: 50%;\n      box-sizing: border-box;\n      /*动画时间1s，线性变化，无限循环*/\n      animation: loading 1s linear infinite;\n}\n@keyframes loading{\n0%{\n          transform: rotate(0deg);\n}\n100%{\n          transform: rotate(360deg);\n}\n}\n",""])},863:function(n,r,t){var e=t(864);"string"==typeof e&&(e=[[n.i,e,""]]);t(60)(e,{});e.locals&&(n.exports=e.locals)},864:function(n,r,t){r=n.exports=t(59)(),r.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},865:function(n,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=t(32),o=t.n(e),i=t(39),a=(t(254),t(148)),s=t.n(a),p=o.a.get("user");r.default={data:function(){var n=this,r=function(n,r,t){new RegExp("(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}").test(r)||t(new Error("密码长度为8-30，必须包含数字、字母、特殊符号")),t()},t=function(r,t,e){t!==n.form.password?e(new Error("两次密码输入的不同。")):e()},e=function(n,r,t){i.a.ajax.get("/auth/staff/exist_email/?email="+r).then(function(n){-1==n.data.status?t(new Error("此邮箱已被注册.")):t()}).catch(function(n){t()})},o=function(n,r,t){var e=["admin"];s.a.find(e,function(n){return n==r})&&t(new Error("不可使用该用户名。")),new RegExp("^(?=.*[-_a-zA-Z0-9]).{5,10}$").test(r)||t(new Error("用户名必须只包括数字、字母、连字号或下划线，长度在5-10之间")),i.a.ajax.get("/auth/staff/exist_username/?username="+r).then(function(n){-1==n.data.status?t(new Error("此用户名已被注册.")):t()}).catch(function(n){t(new Error("无法连接服务器。"))})};return{showLoading:!1,form:{username:"",email:p,password:"",repassword:""},rules:{username:[{type:"string",required:!0,message:this.$t("username required")},{validator:o,trigger:"blur"}],email:[{type:"email",required:!0,message:this.$t("email required")},{validator:e,trigger:"blur"}],password:[{type:"string",min:0,required:!0,message:this.$t("password required")},{validator:r,trigger:"blur"}],repassword:[{type:"string",required:!0,message:this.$t("password must be same")},{validator:t,trigger:"blur"}]}}},methods:{handleSubmit:function(n){this.registerSubmit(n)},registerSubmit:function(n){var r=this;this.$refs.regForm.validate(function(t){t&&(r.showLoading=!0,i.a.ajax.post("/auth/api-register/",{username:r.form.username,email:r.form.email,password:r.form.password}).then(function(t){r.handleSendVericode(n)}).catch(function(n){r.showLoading=!1,n.response.data.msg?r.$Notice.error({title:r.$t("Failed"),desc:n.response.data.msg}):r.$Notice.error({title:r.$t("Failed"),desc:n.message})}))})},handleSendVericode:function(n){var r=this;(new Date).getTime();i.a.ajax.get("/auth/staff/exist_email/?email="+this.form.email).then(function(n){-1==n.data.status?i.a.ajax.post("/auth/api-vericode/",{code:200,email:r.form.email,username:r.form.username,send_type:"register",send_time:r.get_format_time()}).then(function(n){r.$Notice.success({title:"激活链接已发送至邮箱，请查收。",desc:""}),r.gotoLogin(),r.showLoading=!1}).catch(function(n){r.$Notice.error({title:"激活链接发送失败了，请重试。",desc:n.message}),r.showLoading=!1}):r.$Notice.error({title:r.$t("邮箱不合法。"),desc:""})}).catch(function(n){callback(),r.$Notice.error({title:r.$t("请求参数不合法。"),desc:""}),r.showLoading=!1})},get_format_time:function(){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,e=n.getDate()+1,o=n.getHours(),i=n.getMinutes(),a=n.getSeconds();return t<10&&(t="0"+t),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),a<10&&(a="0"+a),r+"-"+t+"-"+e+" "+o+":"+i+":"+a},gotoLogin:function(){this.$router.push({name:"login"})}}}},866:function(n,r,t){n.exports={render:function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("div",{staticClass:"wrapper",on:{keydown:function(r){if(!("button"in r)&&n._k(r.keyCode,"enter",13,r.key))return null;n.handleSubmit(r)}}},[e("div",{staticClass:"header"},[e("h1",[e("span",{staticClass:"banner-logo"},[e("img",{key:"max-logo",attrs:{src:t(831)}})])])]),n._v(" "),e("div",{staticClass:"main w"},[e("div",{staticClass:"form"},[n._m(0,!1,!1),n._v(" "),e("div",{staticClass:"bd"},[e("Form",{ref:"regForm",attrs:{model:n.form,rules:n.rules}},[e("div",{staticClass:"item username"},[e("FormItem",{attrs:{prop:"username"}},[e("Input",{attrs:{placeholder:"请输入用户名"},model:{value:n.form.username,callback:function(r){n.$set(n.form,"username","string"==typeof r?r.trim():r)},expression:"form.username"}})],1)],1),n._v(" "),e("div",{staticClass:"item email"},[e("FormItem",{attrs:{prop:"email"}},[e("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:n.form.email,callback:function(r){n.$set(n.form,"email","string"==typeof r?r.trim():r)},expression:"form.email"}})],1)],1),n._v(" "),e("div",{staticClass:"item password"},[e("FormItem",{attrs:{prop:"password"}},[e("Input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:n.form.password,callback:function(r){n.$set(n.form,"password","string"==typeof r?r.trim():r)},expression:"form.password"}})],1)],1),n._v(" "),e("div",{staticClass:"item checkmark"},[e("FormItem",{attrs:{prop:"repassword"}},[e("Input",{attrs:{placeholder:"再输入密码",type:"password"},model:{value:n.form.repassword,callback:function(r){n.$set(n.form,"repassword","string"==typeof r?r.trim():r)},expression:"form.repassword"}})],1)],1)]),n._v(" "),e("div",{staticClass:"item clearfix"},[e("p",[e("span",{staticClass:"fr"},[n._v("已有账号? 点我"),e("em",{on:{click:n.gotoLogin}},[n._v("登录")])])])])],1),n._v(" "),e("div",{staticClass:"btn",on:{click:n.handleSubmit}},[e("img",{attrs:{src:t(832),alt:""}})])])]),n._v(" "),e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:n.showLoading,expression:"showLoading"}],staticClass:"popContainer"},[e("div",{staticClass:"loading"})])])])},staticRenderFns:[function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("div",{staticClass:"hd"},[e("img",{staticClass:"l",attrs:{src:t(833),alt:""}}),n._v(" "),e("h3",[n._v("校勘平台 - 注册")]),n._v(" "),e("img",{staticClass:"r",attrs:{src:t(834),alt:""}})])}]},n.exports.render._withStripped=!0}});