webpackJsonp([6],{572:function(n,t,e){e(686),e(688);var o=e(20)(e(690),e(691),null,null);o.options.__file="/Users/zhanghuiyong/Documents/CentralPortal/src/views/auth/signup.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] signup.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports},618:function(n,t,e){t=n.exports=e(47)(),t.push([n.i,"body {\n    margin: 0px;\n    padding: 0px;\n    font-family: Microsoft YaHei,SimSun, sans-serif,Helvetica Neue, Helvetica;\n    font-size: 14px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline:0;\n    font-size:100%;\n    background:transparent;\n}\n\nbody,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{\n    margin:0;\n    padding:0;\n}\nbody,html{\n    height:100%;\n}\nbody{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\na {\n    text-decoration: none;\n}\nimg {vertical-align: top;}\ninput,textarea{outline:none}\n/*清除浮动*/\n.clearfix:after{content:'.';display:block;width:0;visibility:hidden;height:0;clear:both;}\n.clearfix{*zoom:1;}\n/*清除浮动*/\nul,ol {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\nem{\n    font-style:normal;\n}\ninput::-ms-clear{display:none;}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\ninput[type=\"number\"]{\n    -moz-appearance: textfield;\n}\n.tl{\n    text-align: left;\n}\n.tr{\n    text-align: right;\n}\n.fl{\n    float: left;\n}\n.fr{\n    float: right;\n}\n.fb{\n    font-weight:600;\n}\n.w{\n    width:1000px;\n    margin:0 auto;\n    position: relative;\n}",""])},619:function(n,t,e){t=n.exports=e(47)(),t.push([n.i,'body{\n\tbackground:#eee;\n}\n.email:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:27px;\n\twidth: 28px;\n\theight:28px;\n\tbackground:url('+e(620)+') no-repeat;\n}\n.password:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:26px;\n\twidth: 21px;\n\theight:26px;\n\tbackground:url('+e(621)+') no-repeat;\n}\n.vericode:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:21px;\n\twidth: 30px;\n\theight:28px;\n\tbackground:url('+e(622)+') no-repeat;\n}\n.checkmark:before{\n\tcontent:"";\n\tposition: absolute;\n\tleft:0;\n\ttop:27px;\n\twidth: 25px;\n\theight:19px;\n\tbackground:url('+e(623)+') no-repeat;\n}\n.header{\n\twidth: 100%;\n\theight:80px;\n\tbackground-color:#1f262d;\n\tline-height: 80px;\n\ttext-align: center;\n}\n.header h1 img{\n\tmargin-top: 20px;\n}\n.main{\n\tpadding: 100px 0;\n}\n.form{\n\t#width: 780px;\n\tbackground-color: #fff;\n\tpadding:74px 110px 0 110px;\n\tposition: relative;\n\tbox-shadow: 0 0 20px rgba(0,0,0,0.07);\n\tborder-radius:10px;\n}\n.form .hd{\n\tposition: relative;\n\theight: 33px;\n\tpadding-bottom: 40px;\n}\n.form h3{\n\ttext-align: center;\n}\n.form .l{\n\tposition: absolute;\n\tleft:0;\n\ttop:16px;\n}\n.form .r{\n\tposition: absolute;\n\tright:0;\n\ttop:16px;\n}\n.form .bd{\n\tmargin-top: 40px;\n}\n.form .item{\n\theight: 120px;\n\tpadding-top: 20px;\n\tpadding-left: 73px;\n\tposition: relative;\n\tpadding-bottom: 40px;\n\tposition: relative;\n}\n.form .item input[type="text"],input[type="password"]{\n\twidth: 100%;\n\tbox-sizing:border-box;\n\tborder:0;\n\tborder-bottom: 4px solid #27a9e3;\n\t/*line-height: 50px;*/\n\tfont-size:18px;\n\tfont-family:Microsoft YaHei;\n\tfont-weight:400;\n}\n.item p{\n\tline-height: 50px;\n}\n.item span{\n\tdisplay:inline-block;\n\tcolor:#ccc;\n\tfont-size:18px;\n\tfont-weight:400;\n}\n.item span em{\n\tcolor:#27a9e3;\n\tcursor: pointer;\n}\n.form .btn{\n\tposition: absolute;\n\twidth: 134px;\n\theight: 134px;\n\ttop:50%;\n\tright:-67px;\n\tmargin-top: -67px;\n\tcursor: pointer;\n}\n.item .rember{\n\tcursor: pointer;\n}\n.item .forget,.item .send,.item .hidden{\n\tposition: absolute;\n\tright:0;\n\ttop:0px;\n\tcolor: #ccc;\n\tcursor: pointer;\n}\n.item .hidden{\n\ttop:10px;\n}\n.header h1 img {\n    margin-top:15px;\n    width: 198px;\n}\n.form h3 {\n    text-align: center;\n    font-size: 25px;\n    font-weight: 400;\n    color: darkgrey;\n}',""])},620:function(n,t,e){n.exports=e.p+"e8aa344bb73757e1899959810997a482.png"},621:function(n,t,e){n.exports=e.p+"248ef83c96e3c9f05b058108440f1315.png"},622:function(n,t,e){n.exports=e.p+"d00548a476f2b89a9c9dfa0310287177.png"},623:function(n,t,e){n.exports=e.p+"df38766dbf2c6b03317cde8baf656d0e.png"},624:function(n,t,e){n.exports=e.p+"d543c9ba8d176514f3de2bfb1eb21eff.png"},625:function(n,t,e){n.exports=e.p+"4f09b7078e0faab08e4a38cd4eeaa6b2.png"},626:function(n,t,e){n.exports=e.p+"a40e1fae5001d5ab63d1abd40907ebe9.png"},627:function(n,t,e){n.exports=e.p+"f944b01c5f50b1952aff90192f87e2a6.png"},686:function(n,t,e){var o=e(687);"string"==typeof o&&(o=[[n.i,o,""]]);e(48)(o,{});o.locals&&(n.exports=o.locals)},687:function(n,t,e){t=n.exports=e(47)(),t.i(e(618),""),t.i(e(619),""),t.push([n.i,"\n",""])},688:function(n,t,e){var o=e(689);"string"==typeof o&&(o=[[n.i,o,""]]);e(48)(o,{});o.locals&&(n.exports=o.locals)},689:function(n,t,e){t=n.exports=e(47)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},690:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(28),i=e.n(o),r=e(34),a=i.a.get("user");t.default={data:function(){var n=this,t=function(n,t,e){new RegExp("(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,30}").test(t)||e(new Error("密码长度为6-30，必须包含数字、大小写字母、特殊符号")),e()},e=function(t,e,o){e!==n.form.password?o(new Error("两次密码输入的不同。")):o()},o=function(n,t,e){r.a.ajax.get("/auth/staff/exist_email?email="+t).then(function(n){-1==n.data.status?e(new Error("此邮箱已被注册.")):e()}).catch(function(n){e()})};return{form:{email:a,password:"",repassword:""},rules:{email:[{type:"email",required:!0,message:this.$t("email required")},{validator:o,trigger:"blur"}],password:[{type:"string",min:6,required:!0,message:this.$t("password required")},{validator:t,trigger:"blur"}],repassword:[{type:"string",required:!0,message:this.$t("password must be same")},{validator:e,trigger:"blur"}]}}},methods:{handleSubmit:function(n){var t=this;this.$refs.regForm.validate(function(n){n&&r.a.ajax.post("/auth/api-register/",{email:t.form.email,password:t.form.password}).then(function(n){t.$Notice.success({title:"注册完成，请重新登录。",desc:""}),t.gotoLogin()}).catch(function(n){t.$Notice.error({title:t.$t("Failed"),desc:n.message})})})},gotoLogin:function(){this.$router.push({name:"login"})}}}},691:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"wrapper",on:{keydown:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key))return null;n.handleSubmit(t)}}},[n._m(0,!1,!1),n._v(" "),o("div",{staticClass:"main w"},[o("div",{staticClass:"form"},[n._m(1,!1,!1),n._v(" "),o("div",{staticClass:"bd"},[o("Form",{ref:"regForm",attrs:{model:n.form,rules:n.rules}},[o("div",{staticClass:"item email"},[o("FormItem",{attrs:{prop:"email"}},[o("Input",{attrs:{placeholder:"请输入用户名"},model:{value:n.form.email,callback:function(t){n.$set(n.form,"email","string"==typeof t?t.trim():t)},expression:"form.email"}})],1)],1),n._v(" "),o("div",{staticClass:"item password"},[o("FormItem",{attrs:{prop:"password"}},[o("Input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:n.form.password,callback:function(t){n.$set(n.form,"password","string"==typeof t?t.trim():t)},expression:"form.password"}})],1)],1),n._v(" "),o("div",{staticClass:"item checkmark"},[o("FormItem",{attrs:{prop:"repassword"}},[o("Input",{attrs:{placeholder:"再输入密码",type:"password"},model:{value:n.form.repassword,callback:function(t){n.$set(n.form,"repassword","string"==typeof t?t.trim():t)},expression:"form.repassword"}})],1)],1)]),n._v(" "),o("div",{staticClass:"item clearfix"},[o("p",[o("span",{staticClass:"fr"},[n._v("已有账号? 点我"),o("em",{on:{click:n.gotoLogin}},[n._v("登录")])])])])],1),n._v(" "),o("div",{staticClass:"btn",on:{click:n.handleSubmit}},[o("img",{attrs:{src:e(624),alt:""}})])])])])},staticRenderFns:[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"header"},[o("h1",[o("img",{attrs:{src:e(625),alt:""}})])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"hd"},[o("img",{staticClass:"l",attrs:{src:e(626),alt:""}}),n._v(" "),o("h3",[n._v("用户注册")]),n._v(" "),o("img",{staticClass:"r",attrs:{src:e(627),alt:""}})])}]},n.exports.render._withStripped=!0}});