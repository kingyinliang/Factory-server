webpackJsonp([58],{"+rkg":function(t,e){},"4R5l":function(t,e,r){t.exports=r.p+"static/media/video.c773cf7.mp4"},wQTO:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("P9l9"),s={name:"login",data:function(){var t=this;return{dataRule:{password:[{required:!0,message:"原密码必填",trigger:"blur"},{min:8,max:12,message:"长度在 8 到 12 个字符",trigger:"blur"}],newPassword:[{required:!0,message:"请填写密码",trigger:"blur"},{min:8,max:12,message:"长度在 8 到 12 个字符",trigger:"blur"}],conPassword:[{validator:function(e,r,o){""===r?o(new Error("请再次输入密码")):r!==t.dataForm.newPassword?o(new Error("两次输入密码不一致!")):o()},trigger:"blur",min:8,max:12}]},visible:!1,dataForm:{password:"",newPassword:"",conPassword:""},ruleForm2:{user:"",pass:""},curr:0,videoList:["http://10.8.4.153:50080/profile/video.mp4"],rules2:{user:[{validator:function(t,e,r){""===e?r(new Error("请输入账号")):8!==e.length?r(new Error("长度为 8 个字符工号")):r()},trigger:"blur"}],pass:[{min:8,max:12,message:"长度在 8 到 12 个字符",trigger:"blur"},{validator:function(t,e,r){""===e?r(new Error("请输入密码")):r()},trigger:"blur"}]}}},mounted:function(){var t=this;this.$refs.videos.addEventListener("ended",function(){t.play()})},methods:{play:function(t){this.curr++,this.curr>=this.videoList.length&&(this.curr=0),this.$refs.videos.load(),this.$refs.videos.play()},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http(""+o.g.UPPASS_API,"POST",t.dataForm).then(function(e){var r=e.data;0===r.code?t.$message({message:"修改成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$router.push({path:"/home"})}}):t.$message.error(r.msg)})})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$http(""+o.g.LOGIN_API,"POST",{username:e.ruleForm2.user,password:e.ruleForm2.pass}).then(function(t){console.log(t),0===t.data.code?(e.$cookie.set("token",t.data.Authorization),e.mainTabs=[],e.Pkgfactoryid="",e.PkgworkShop="",e.PkgproductDate="",e.PkgorderNo="","1"===t.data.list[0].isFirst?e.visible=!0:e.$router.push({path:"/home"})):e.$message.error(t.data.msg)})})},resetForm:function(t){this.$refs[t].resetFields()}},computed:{mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},Pkgfactoryid:{get:function(){return this.$store.state.common.Pkgfactoryid},set:function(t){this.$store.commit("common/updateFactoryid",t)}},PkgworkShop:{get:function(){return this.$store.state.common.PkgworkShop},set:function(t){this.$store.commit("common/updateWorkShop",t)}},PkgproductDate:{get:function(){return this.$store.state.common.PkgproductDate},set:function(t){this.$store.commit("common/updateProductDate",t)}},PkgorderNo:{get:function(){return this.$store.state.common.PkgorderNo},set:function(t){this.$store.commit("common/updateOrderNo",t)}}},components:{}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("video",{ref:"videos",attrs:{width:"100%",height:"100%",autoplay:"",id:"videos",muted:"",src:r("4R5l")},domProps:{muted:!0}},[t._v("\n    您的浏览器不支持 video 标签。\n  ")]),t._v(" "),o("el-form",{ref:"ruleForm2",staticClass:"loginForm",attrs:{model:t.ruleForm2,"status-icon":"",rules:t.rules2,"label-width":"100px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("ruleForm2")}}},[o("el-form-item",{attrs:{label:"账号：",prop:"user"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.ruleForm2.user,callback:function(e){t.$set(t.ruleForm2,"user",e)},expression:"ruleForm2.user"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"密码：",prop:"pass"}},[o("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.ruleForm2.pass,callback:function(e){t.$set(t.ruleForm2,"pass",e)},expression:"ruleForm2.pass"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm2")}}},[t._v("登录")]),t._v(" "),o("el-button",{on:{click:function(e){return t.resetForm("ruleForm2")}}},[t._v("重置")])],1)],1),t._v(" "),o("div",{staticClass:"loginFormBg"}),t._v(" "),o("el-dialog",{attrs:{width:"500px",title:"修改密码",visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[o("div",[o("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"100px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmit()}}},[o("el-form-item",{attrs:{label:"原密码：",prop:"password"}},[o("el-input",{attrs:{placeholder:"请输入原始密码",minlength:"8",maxlength:"12",type:"password"},model:{value:t.dataForm.password,callback:function(e){t.$set(t.dataForm,"password",e)},expression:"dataForm.password"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"新密码：",prop:"newPassword"}},[o("el-input",{attrs:{placeholder:"请输入新密码（8~12位数字大小写字母组合）",minlength:"8",maxlength:"12",type:"password"},model:{value:t.dataForm.newPassword,callback:function(e){t.$set(t.dataForm,"newPassword",e)},expression:"dataForm.newPassword"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"确认新密码：",prop:"conPassword"}},[o("el-input",{attrs:{placeholder:"请再次输入新密码（8~12位数字大小写字母组合）",minlength:"8",maxlength:"12",type:"password"},model:{value:t.dataForm.conPassword,callback:function(e){t.$set(t.dataForm,"conPassword",e)},expression:"dataForm.conPassword"}})],1)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit-outline"},on:{click:t.dataFormSubmit}},[t._v("修改密码")])],1)])],1)},staticRenderFns:[]};var n=r("C7Lr")(s,a,!1,function(t){r("+rkg")},null,null);e.default=n.exports}});
//# sourceMappingURL=58.9f4993710c6447a9bdea.js.map