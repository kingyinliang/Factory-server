webpackJsonp([21,32],{"5TTk":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("P9l9"),l={name:"LocationAdd",data:function(){return{visible:!1,sapList:[],factory:[],workshop:[],formatDate:{factory:"",deptId:"",storageLocation:"",materialType:"",materialCode:"",isSample:"0",materialOperation:""},submitType:!0,dataRule:{deptId:[{required:!0,message:"车间不能为空",trigger:"blur"}],materialType:[{required:!0,message:"物料类型不能为空",trigger:"blur"}],storageLocation:[{required:!0,message:"库位不能为空",trigger:"blur"}],materialOperation:[{required:!0,message:"发料/入库不能为空",trigger:"blur"}]}}},watch:{"formatDate.factory":function(e,t){this.Getdeptbyid(e)}},props:{},mounted:function(){this.Getdeptcode()},methods:{Getdeptcode:function(){var e=this;this.$http(o.c.FINDORG_API+"?code=factory","POST").then(function(t){var a=t.data;0===a.code?e.factory=a.typeList:e.$message.error(a.msg)})},Getdeptbyid:function(e){var t=this;this.formatDate.deptId="",e&&this.$http(""+o.c.FINDORGBYID_API,"POST",{deptId:e}).then(function(e){var a=e.data;0===a.code?t.workshop=a.typeList:t.$message.error(a.msg)})},init:function(){var e=this;this.Getdeptbyid(),this.$http(o.k.PARAMETERLIST_API+"?type=material_type","POST").then(function(t){var a=t.data;0===a.code?e.sapList=a.dicList:e.$message.error(a.msg)}),this.visible=!0},dataFormSubmit:function(){var e=this;if(this.formatDate.materialCode&&10!==this.formatDate.materialCode.length)return this.$message.error("物料编码为10位非必填"),!1;this.submitType&&(this.submitType=!1,this.$refs.addLo.validate(function(t){if(!t)return e.submitType=!0,console.log("error submit!!"),!1;e.formatDate.materialTypeCode=e.formatDate.materialType.substring(0,e.formatDate.materialType.indexOf(" ")),e.formatDate.materialTypeName=e.formatDate.materialType.substring(e.formatDate.materialType.indexOf(" ")+1),e.$http(""+o.c.LOCATIONADD_API,"POST",e.formatDate).then(function(t){var a=t.data;0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.submitType=!0,e.visible=!1,e.$emit("refreshDataList")}}):(e.submitType=!0,e.$message.error(a.msg))})}))}},computed:{},components:{}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"locationdialog1",attrs:{title:"新增库位","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("div",{staticStyle:{width:"400px",margin:"auto"}},[a("el-form",{ref:"addLo",attrs:{model:e.formatDate,rules:e.dataRule,size:"small","label-width":"110px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()},submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"工厂：",prop:"deptId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formatDate.factory,callback:function(t){e.$set(e.formatDate,"factory",t)},expression:"formatDate.factory"}},[a("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.factory,function(e,t){return a("el-option",{key:t,attrs:{label:e.deptName,value:e.deptId}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"车间：",prop:"deptId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formatDate.deptId,callback:function(t){e.$set(e.formatDate,"deptId",t)},expression:"formatDate.deptId"}},[a("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.workshop,function(e,t){return a("el-option",{key:t,attrs:{label:e.deptName,value:e.deptId}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"物料类型：",prop:"materialType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formatDate.materialType,callback:function(t){e.$set(e.formatDate,"materialType",t)},expression:"formatDate.materialType"}},[a("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.sapList,function(e,t){return a("el-option",{key:t,attrs:{label:e.code+" "+e.value,value:e.code+" "+e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"物料编码："}},[a("el-input",{attrs:{placeholder:"手工录入"},model:{value:e.formatDate.materialCode,callback:function(t){e.$set(e.formatDate,"materialCode",t)},expression:"formatDate.materialCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"库位：",prop:"storageLocation"}},[a("el-input",{attrs:{placeholder:"手工录入"},model:{value:e.formatDate.storageLocation,callback:function(t){e.$set(e.formatDate,"storageLocation",t)},expression:"formatDate.storageLocation"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否样品库："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formatDate.isSample,callback:function(t){e.$set(e.formatDate,"isSample",t)},expression:"formatDate.isSample"}},[a("el-option",{attrs:{label:"是",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"0"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"发料/入库：",prop:"materialOperation"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formatDate.materialOperation,callback:function(t){e.$set(e.formatDate,"materialOperation",t)},expression:"formatDate.materialOperation"}},[a("el-option",{attrs:{label:"发料",value:"发料"}}),e._v(" "),a("el-option",{attrs:{label:"入库",value:"入库"}})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)])},staticRenderFns:[]};var i=a("C7Lr")(l,r,!1,function(e){a("O7Bp"),a("XUra")},"data-v-fdec79f4",null);t.default=i.exports},O7Bp:function(e,t){},XUra:function(e,t){},hBmb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("P9l9"),l={name:"LocationManage",data:function(){return{visible1:!1,visible:!1,form:{deptName:"",deptId:"",materialTypeCode:"",storageLocation:""},serch:{},list:[],multipleSelection:[],sapList:[],workshop:[],SerchSapList:[],currPage:1,pageSize:10,totalCount:0}},mounted:function(){var e=this;this.GetLocationList(),this.$http(o.c.FINDORG_API+"?code=workshop","POST").then(function(t){var a=t.data;0===a.code?e.workshop=a.typeList:e.$message.error(a.msg)}),this.$http(o.k.PARAMETERLIST_API+"?type=material_type","POST").then(function(t){var a=t.data;0===a.code?e.sapList=a.dicList:e.$message.error(a.msg)})},methods:{indexMethod:function(e){return e+1+(1*this.currPage-1)*(1*this.pageSize)},GetLocationList:function(e){var t=this;e&&(this.currPage=1),this.$http(""+o.c.LOCATIONLIST_API,"POST",{deptId:this.form.deptId,deptName:this.form.deptName,materialTypeCode:this.form.materialTypeCode,storageLocation:this.form.storageLocation,currPage:this.currPage,pageSize:this.pageSize}).then(function(e){var a=e.data;console.log(a),t.visible=!1,t.visible1=!1,0===a.code?(t.multipleSelection=[],t.list=a.page.list,t.currPage=a.page.currPage,t.pageSize=a.page.pageSize,t.totalCount=a.page.totalCount):t.$message.error(a.msg),t.visible=!1})},remove:function(){var e=this;this.$confirm("确认删除库位, 是否继续?","删除库位",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http(""+o.c.LOCATIONDEL_API,"POST",e.multipleSelection).then(function(t){var a=t.data;0===a.code?(e.$message({type:"success",message:"删除成功!"}),e.multipleSelection=[],e.GetLocationList()):e.$message.error(a.msg)})})},addLocation:function(){var e=this;this.visible=!0,this.$nextTick(function(){e.$refs.locationAdd.init()})},handleSelectionChange:function(e){var t=this;this.multipleSelection=[],e.forEach(function(e,a){t.multipleSelection.push(e.id)})},handleSizeChange:function(e){this.pageSize=e,this.GetLocationList()},handleCurrentChange:function(e){this.currPage=e,this.GetLocationList()}},computed:{},components:{LocationAdd:a("5TTk").default}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-col",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.lodingStatus,expression:"lodingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"main"},[a("el-card",[a("div",{staticClass:"clearfix"},[a("el-row",{staticStyle:{float:"right"}},[a("el-form",{staticClass:"topforms2",attrs:{inline:!0,model:e.form,size:"small","label-width":"68px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.GetLocationList(!0)},submit:function(e){e.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"车间","suffix-icon":"el-icon-search"},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}})],1),e._v(" "),a("el-form-item",[e.isAuth("sys:sto:list")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.GetLocationList(!0)}}},[e._v("查询")]):e._e(),e._v(" "),e.isAuth("sys:sto:list")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.visible1=!0}}},[e._v("高级查询")]):e._e(),e._v(" "),e.isAuth("sys:sto:save")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.addLocation()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("sys:sto:delete")?a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.remove()}}},[e._v("批量删除")]):e._e()],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-table",{ref:"table1",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{"header-row-class-name":"tableHead",data:e.list,border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"34"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",index:e.indexMethod,width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"factoryName",width:"120","show-overflow-tooltip":!0,label:"工厂"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deptName",width:"120","show-overflow-tooltip":!0,label:"车间"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"物料类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.materialTypeCode+" "+t.row.materialTypeName)+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"物料编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.materialCode+" "+t.row.materialName)+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"80",prop:"storageLocation",label:"库位"}}),e._v(" "),a("el-table-column",{attrs:{width:"91",label:"是否样品库"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s("0"===t.row.isSample?"否":"是")+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"materialOperation",width:"84",label:"发料/入库"}})],1)],1),e._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":e.currPage,"page-sizes":[10,15,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"高级查询","close-on-click-modal":!1,visible:e.visible1},on:{"update:visible":function(t){e.visible1=t}}},[a("el-form",{staticClass:"locationdialog",attrs:{model:e.form,size:"small","label-width":"110px"}},[a("el-form-item",{attrs:{label:"车间：",prop:"orderNo1"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.deptId,callback:function(t){e.$set(e.form,"deptId",t)},expression:"form.deptId"}},[a("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.workshop,function(e,t){return a("el-option",{key:t,attrs:{label:e.deptName,value:e.deptId}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"物料类型：",prop:"orderNo2"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.materialTypeCode,callback:function(t){e.$set(e.form,"materialTypeCode",t)},expression:"form.materialTypeCode"}},[a("el-option",{attrs:{label:"",value:""}}),e._v(" "),e._l(e.sapList,function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.code}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"库位："}},[a("el-input",{attrs:{placeholder:"手工录入"},model:{value:e.form.storageLocation,callback:function(t){e.$set(e.form,"storageLocation",t)},expression:"form.storageLocation"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible1=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.GetLocationList(!0)}}},[e._v("确定")])],1)],1),e._v(" "),e.visible?a("location-add",{ref:"locationAdd",on:{refreshDataList:function(t){return e.GetLocationList()}}}):e._e()],1)},staticRenderFns:[]};var i=a("C7Lr")(l,r,!1,function(e){a("uQqM")},"data-v-40ac040d",null);t.default=i.exports},uQqM:function(e,t){}});
//# sourceMappingURL=21.188f48c317ab472c9c31.js.map