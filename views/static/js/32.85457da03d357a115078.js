webpackJsonp([32],{"5TTk":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("P9l9"),o={name:"LocationAdd",data:function(){return{visible:!1,sapList:[],factory:[],workshop:[],formatDate:{factory:"",deptId:"",storageLocation:"",materialType:"",materialCode:"",isSample:"0",materialOperation:""},submitType:!0,dataRule:{deptId:[{required:!0,message:"车间不能为空",trigger:"blur"}],materialType:[{required:!0,message:"物料类型不能为空",trigger:"blur"}],storageLocation:[{required:!0,message:"库位不能为空",trigger:"blur"}],materialOperation:[{required:!0,message:"发料/入库不能为空",trigger:"blur"}]}}},watch:{"formatDate.factory":function(t,e){this.Getdeptbyid(t)}},props:{},mounted:function(){this.Getdeptcode()},methods:{Getdeptcode:function(){var t=this;this.$http(r.c.FINDORG_API+"?code=factory","POST").then(function(e){var a=e.data;0===a.code?t.factory=a.typeList:t.$message.error(a.msg)})},Getdeptbyid:function(t){var e=this;this.formatDate.deptId="",t&&this.$http(""+r.c.FINDORGBYID_API,"POST",{deptId:t}).then(function(t){var a=t.data;0===a.code?e.workshop=a.typeList:e.$message.error(a.msg)})},init:function(){var t=this;this.Getdeptbyid(),this.$http(r.k.PARAMETERLIST_API+"?type=material_type","POST").then(function(e){var a=e.data;0===a.code?t.sapList=a.dicList:t.$message.error(a.msg)}),this.visible=!0},dataFormSubmit:function(){var t=this;if(this.formatDate.materialCode&&10!==this.formatDate.materialCode.length)return this.$message.error("物料编码为10位非必填"),!1;this.submitType&&(this.submitType=!1,this.$refs.addLo.validate(function(e){if(!e)return t.submitType=!0,console.log("error submit!!"),!1;t.formatDate.materialTypeCode=t.formatDate.materialType.substring(0,t.formatDate.materialType.indexOf(" ")),t.formatDate.materialTypeName=t.formatDate.materialType.substring(t.formatDate.materialType.indexOf(" ")+1),t.$http(""+r.c.LOCATIONADD_API,"POST",t.formatDate).then(function(e){var a=e.data;0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.submitType=!0,t.visible=!1,t.$emit("refreshDataList")}}):(t.submitType=!0,t.$message.error(a.msg))})}))}},computed:{},components:{}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"locationdialog1",attrs:{title:"新增库位","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticStyle:{width:"400px",margin:"auto"}},[a("el-form",{ref:"addLo",attrs:{model:t.formatDate,rules:t.dataRule,size:"small","label-width":"110px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmit()},submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"工厂：",prop:"deptId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formatDate.factory,callback:function(e){t.$set(t.formatDate,"factory",e)},expression:"formatDate.factory"}},[a("el-option",{attrs:{label:"",value:""}}),t._v(" "),t._l(t.factory,function(t,e){return a("el-option",{key:e,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"车间：",prop:"deptId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formatDate.deptId,callback:function(e){t.$set(t.formatDate,"deptId",e)},expression:"formatDate.deptId"}},[a("el-option",{attrs:{label:"",value:""}}),t._v(" "),t._l(t.workshop,function(t,e){return a("el-option",{key:e,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"物料类型：",prop:"materialType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formatDate.materialType,callback:function(e){t.$set(t.formatDate,"materialType",e)},expression:"formatDate.materialType"}},[a("el-option",{attrs:{label:"",value:""}}),t._v(" "),t._l(t.sapList,function(t,e){return a("el-option",{key:e,attrs:{label:t.code+" "+t.value,value:t.code+" "+t.value}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"物料编码："}},[a("el-input",{attrs:{placeholder:"手工录入"},model:{value:t.formatDate.materialCode,callback:function(e){t.$set(t.formatDate,"materialCode",e)},expression:"formatDate.materialCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"库位：",prop:"storageLocation"}},[a("el-input",{attrs:{placeholder:"手工录入"},model:{value:t.formatDate.storageLocation,callback:function(e){t.$set(t.formatDate,"storageLocation",e)},expression:"formatDate.storageLocation"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否样品库："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formatDate.isSample,callback:function(e){t.$set(t.formatDate,"isSample",e)},expression:"formatDate.isSample"}},[a("el-option",{attrs:{label:"是",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"0"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"发料/入库：",prop:"materialOperation"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formatDate.materialOperation,callback:function(e){t.$set(t.formatDate,"materialOperation",e)},expression:"formatDate.materialOperation"}},[a("el-option",{attrs:{label:"发料",value:"发料"}}),t._v(" "),a("el-option",{attrs:{label:"入库",value:"入库"}})],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)])},staticRenderFns:[]};var i=a("C7Lr")(o,l,!1,function(t){a("O7Bp"),a("XUra")},"data-v-fdec79f4",null);e.default=i.exports},O7Bp:function(t,e){},XUra:function(t,e){}});
//# sourceMappingURL=32.85457da03d357a115078.js.map