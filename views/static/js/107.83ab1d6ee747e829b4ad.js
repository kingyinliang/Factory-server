webpackJsonp([107],{"/P8M":function(e,t){},"9M57":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("woOf"),r=o.n(a),l=o("P9l9"),d={name:"ContaninerAddorUpdate",data:function(){return{conid:"",visible:!1,dictList:[],dataForm:{holderType:"",holderNo:"",holderName:"",holderHold:0,holderPatch:"",holderArea:"",factory:"",deptId:""},dataForm1:{holderType:"",holderNo:"",holderName:"",holderHold:0,holderPatch:"",holderArea:"",factory:"",deptId:""},factoryId:"",factoryList:[],workshop:[],submitType:!0,dataRule:{holderType:[{required:!0,message:"容器类型不能为空",trigger:"blur"}],holderNo:[{required:!0,message:"容器号不能为空",trigger:"blur"}],factory:[{required:!0,message:"归属工厂不能为空",trigger:"blur"}],deptId:[{required:!0,message:"归属车间不能为空",trigger:"blur"}]}}},mounted:function(){this.getDictList(),this.getFactoryList()},methods:{closeDialog:function(){this.visible=!1,this.$refs.dataForm.resetFields()},init:function(e){var t=this;e?(this.conid=e,this.$http(l.c.CONTAINERDETAIL_API+"/"+e,"POST").then(function(e){var o=e.data;0===o.code?(t.dataForm.holderId=o.sysHolder.holderId,t.dataForm.holderType=o.sysHolder.holderType,t.dataForm.holderNo=o.sysHolder.holderNo,t.dataForm.holderName=o.sysHolder.holderName,t.dataForm.holderHold=o.sysHolder.holderHold,t.dataForm.holderPatch=o.sysHolder.holderPatch,t.dataForm.holderArea=o.sysHolder.holderArea,t.dataForm.factory=o.sysHolder.factory,t.dataForm.deptId=o.sysHolder.deptId,t.Getdeptcode(o.sysHolder.factory,o.sysHolder.deptId)):t.$message.error(o.msg),t.visible=!0})):(this.dataForm=r()({},this.dataForm1),this.factoryId="",this.conid=0,this.visible=!0)},getFactoryList:function(){var e=this;this.$http(l.c.FINDORG_API+"?code=factory","POST",{},!1,!1,!1).then(function(t){0===t.data.code?e.factoryList=t.data.typeList:e.$message.error(t.data.msg)})},Getdeptcode:function(e,t){var o=this;if(e){if(t){var a=this;setTimeout(function(){a.dataForm.deptId=t},500)}else this.dataForm.deptId="";this.$http(""+l.c.FINDORGBYID_API,"POST",{deptId:e}).then(function(e){var t=e.data;0===t.code?(console.log("------------------------------------------------------",t.typeList.length),o.workshop=t.typeList):o.$message.error(t.msg)})}},getDictList:function(){var e=this;this.$http(l.k.PARAMETERLIST_API+"?type=holder_type","POST").then(function(t){var o=t.data;0===o.code?e.dictList=o.dicList:e.$message.error(o.msg)})},dataFormSubmit:function(){var e=this;this.submitType&&(this.submitType=!1,this.$refs.dataForm.validate(function(t){if(!t)return e.submitType=!0,console.log("error submit!!"),!1;e.conid?e.$http(""+l.c.CONTAINERUPDATE_API,"POST",e.dataForm).then(function(t){var o=t.data;0===o.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.submitType=!0,e.visible=!1,e.$emit("refreshDataList")}}):(e.submitType=!0,e.$message.error(o.msg))}):e.$http(""+l.c.CONTAINERADD_API,"POST",e.dataForm).then(function(t){var o=t.data;0===o.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.submitType=!0,e.visible=!1,e.$emit("refreshDataList")}}):(e.submitType=!0,e.$message.error(o.msg))})}))}},watch:{"dataForm.factory":function(e){console.log("****************1*********************"),this.Getdeptcode(e,!1)},workshop:function(e){console.log("****************2*********************")}},computed:{},components:{}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.conid?"修改容器":"新增容器","close-on-click-modal":!1,visible:e.visible},on:{close:e.closeDialog,"update:visible":function(t){e.visible=t}}},[o("div",[o("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()},submit:function(e){e.preventDefault()}}},[o("el-form-item",{attrs:{label:"容器类型：",prop:"holderType"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.dataForm.holderType,callback:function(t){e.$set(e.dataForm,"holderType",t)},expression:"dataForm.holderType"}},[o("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.dictList,function(e,t){return o("el-option",{key:t,attrs:{label:e.value,value:e.code}})})],2)],1),e._v(" "),o("el-form-item",{attrs:{label:"容器号：",prop:"holderNo"}},[o("el-input",{attrs:{placeholder:"手动输入"},model:{value:e.dataForm.holderNo,callback:function(t){e.$set(e.dataForm,"holderNo",t)},expression:"dataForm.holderNo"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"容器描述："}},[o("el-input",{attrs:{placeholder:"手动输入"},model:{value:e.dataForm.holderName,callback:function(t){e.$set(e.dataForm,"holderName",t)},expression:"dataForm.holderName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"容器量："}},[o("el-input",{attrs:{type:"number",placeholder:"手动输入",min:"0"},model:{value:e.dataForm.holderHold,callback:function(t){e.$set(e.dataForm,"holderHold",t)},expression:"dataForm.holderHold"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"批数："}},[o("el-input",{attrs:{type:"number",placeholder:"手动输入",min:"0"},model:{value:e.dataForm.holderPatch,callback:function(t){e.$set(e.dataForm,"holderPatch",t)},expression:"dataForm.holderPatch"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"物理区域："}},[o("el-input",{attrs:{placeholder:"手动输入"},model:{value:e.dataForm.holderArea,callback:function(t){e.$set(e.dataForm,"holderArea",t)},expression:"dataForm.holderArea"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"归属工厂：",prop:"factory"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.dataForm.factory,callback:function(t){e.$set(e.dataForm,"factory",t)},expression:"dataForm.factory"}},[o("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.factoryList,function(e,t){return o("el-option",{key:t,attrs:{label:e.deptName,value:e.deptId}})})],2)],1),e._v(" "),o("el-form-item",{attrs:{label:"归属车间：",prop:"deptId"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.dataForm.deptId,callback:function(t){e.$set(e.dataForm,"deptId",t)},expression:"dataForm.deptId"}},[o("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.workshop,function(e,t){return o("el-option",{key:t,attrs:{label:e.deptName,value:e.deptId}})})],2)],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.closeDialog}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.dataFormSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var i=o("C7Lr")(d,s,!1,function(e){o("/P8M")},"data-v-3cd75173",null);t.default=i.exports}});
//# sourceMappingURL=107.83ab1d6ee747e829b4ad.js.map