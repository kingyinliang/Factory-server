webpackJsonp([23,128],{"16IE":function(t,e){},IbNQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("P9l9"),r={name:"ParameterAddorUpdate",props:{factoryList:Array},data:function(){return{id:!1,dataForm:{factory:"",deptName:"",type:"",name:"",code:"",value:""},visible:!1,type:!0,submitType:!0}},mounted:function(){},methods:{init:function(t,e,a){this.type="type"===t,e?(this.id=e,this.dataForm=e):(this.id=!1,this.dataForm={}),a&&(this.dataForm=a),this.visible=!0},dataFormSubmit:function(){var t=this;this.submitType&&(this.submitType=!1,this.$http(""+(this.id?o.k.PARAMETERUPDATE_API:o.k.PARAMETERADD_API),"POST",this.dataForm).then(function(e){var a=e.data;0===a.code?(t.dataForm={},t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.submitType=!0,t.visible=!1,t.$emit("refreshDataList")}})):(t.submitType=!0,t.$message.error(a.msg))}))},getFactoryList:function(){var t=this;this.$http(o.c.FINDORG_API+"?code=factory","POST",{},!1,!1,!1).then(function(e){0===e.data.code?t.factoryList=e.data.typeList:t.$message.error(e.data.msg)})},changeFactory:function(t){var e=this.factoryList.find(function(e){return e.deptId===t});e&&(this.dataForm.deptName=e.deptName)}},computed:{},components:{}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.type?t.id?"修改类型":"新增类型":t.id?"修改参数":"新增参数","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticStyle:{height:"330px",overflow:"auto"}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataForm,"label-width":"125px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"工厂："}},[t.type?t._e():a("span",[t._v(t._s(t.dataForm.deptName))]),t._v(" "),t.type?a("el-select",{on:{change:t.changeFactory},model:{value:t.dataForm.factory,callback:function(e){t.$set(t.dataForm,"factory",e)},expression:"dataForm.factory"}},t._l(t.factoryList,function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})}),1):t._e()],1),t._v(" "),a("el-form-item",{attrs:{label:"参数类型编码："}},[t.type?t._e():a("span",[t._v(t._s(t.dataForm.type))]),t._v(" "),t.type?a("el-input",{attrs:{placeholder:"手动输入"},model:{value:t.dataForm.type,callback:function(e){t.$set(t.dataForm,"type",e)},expression:"dataForm.type"}}):t._e()],1),t._v(" "),a("el-form-item",{attrs:{label:"参数类型名称："}},[t.type?t._e():a("span",[t._v(t._s(t.dataForm.name))]),t._v(" "),t.type?a("el-input",{attrs:{placeholder:"手动输入"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}}):t._e()],1),t._v(" "),a("el-form-item",{attrs:{label:"参数编码："}},[a("el-input",{attrs:{placeholder:"手动输入"},model:{value:t.dataForm.code,callback:function(e){t.$set(t.dataForm,"code",e)},expression:"dataForm.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参数名称："}},[a("el-input",{attrs:{placeholder:"手动输入"},model:{value:t.dataForm.value,callback:function(e){t.$set(t.dataForm,"value",e)},expression:"dataForm.value"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)])},staticRenderFns:[]};var s=a("C7Lr")(r,i,!1,function(t){a("d7L1")},"data-v-02d62ddc",null);e.default=s.exports},MJM2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("IbNQ"),r=a("P9l9"),i={name:"ParameterManage",data:function(){return{visible:!1,activeItem:{},parameterType:[],parameter:[],adds:{},factoryList:[],factory:""}},mounted:function(){this.getdictList(),this.getFactoryList()},methods:{getdictList:function(){var t=this;this.$http(""+r.k.PARAMETERTYPE_API,"POST",{factory:this.factory}).then(function(e){var a=e.data;0===a.code?t.parameterType=a.list:t.$message.error(a.msg)})},remove:function(t){var e=this;this.$confirm("确认删除参数, 是否继续?","删除参数",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http(""+r.k.PARAMETERDEL_API,"POST",[t.id]).then(function(t){var a=t.data;0===a.code?(e.$message({type:"success",message:"删除成功!"}),e.getList()):e.$message.error(a.msg)})})},setTypeDetail:function(t,e,a){var o=this;this.activeItem=t,this.adds={},this.adds.name=t.name,this.adds.type=t.type,this.adds.factory=t.factory,this.adds.deptName=t.deptName,this.$http(r.k.PARAMETERLIST_API+"?type="+t.type,"POST").then(function(t){var e=t.data;0===e.code?o.parameter=e.dicList:o.$message.error(e.msg)})},getList:function(){this.getdictList(),this.setTypeDetail(this.activeItem)},addorupdate:function(t,e,a){var o=this;this.visible=!0,this.$nextTick(function(){a?o.$refs.addOrupdate.init(t,e,o.adds):o.$refs.addOrupdate.init(t,e)})},getFactoryList:function(){var t=this;this.$http(r.c.FINDORG_API+"?code=factory","POST",{},!1,!1,!1).then(function(e){0===e.data.code?t.factoryList=e.data.typeList:t.$message.error(e.data.msg)})}},computed:{},components:{addOrUpdate:o.default}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.lodingStatus,expression:"lodingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"main mainHeader"},[a("el-card",[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-select",{model:{value:t.factory,callback:function(e){t.factory=e},expression:"factory"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.factoryList,function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.getdictList}},[t._v("查询")])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{float:"left","line-height":"40px"}},[t._v("参数类型")]),t._v(" "),t.isAuth("sys:dict:save")?a("el-button",{staticStyle:{display:"inline-block",float:"right",padding:"12px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){return t.addorupdate("type")}}}):t._e()],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{"header-row-class-name":"tableHead",data:t.parameterType,border:"","tooltip-effect":"dark"},on:{"row-click":t.setTypeDetail}},[a("el-table-column",{attrs:{type:"index",width:"55",label:"序号"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"参数类型编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.type))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":!0,label:"参数类型名称"}})],1)],1)])],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{float:"left","line-height":"40px"}},[t._v("参数")]),t._v(" "),t.isAuth("sys:dict:save")?a("el-button",{staticStyle:{display:"inline-block",float:"right",padding:"12px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){return t.addorupdate("param",!1,!0)}}}):t._e()],1),t._v(" "),a("div",[a("el-table",{ref:"table1",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{"header-row-class-name":"tableHead",data:t.parameter,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",width:"55",label:"序号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type","show-overflow-tooltip":!0,label:"参数类型编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":!0,label:"参数类型名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code","show-overflow-tooltip":!0,label:"参数编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value","show-overflow-tooltip":!0,label:"参数名称"}}),t._v(" "),a("el-table-column",{attrs:{width:"96",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.isAuth("sys:dict:delete")?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]):t._e(),t._v(" "),t.isAuth("sys:dict:update")?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.addorupdate("param",e.row)}}},[t._v("编辑")]):t._e()]}}])})],1)],1)])],1)],1)],1)],1),t._v(" "),t.visible?a("add-or-update",{ref:"addOrupdate",attrs:{factoryList:t.factoryList},on:{refreshDataList:function(e){return t.getList()}}}):t._e()],1)},staticRenderFns:[]};var l=a("C7Lr")(i,s,!1,function(t){a("16IE"),a("MtHk")},"data-v-2f40a05c",null);e.default=l.exports},MtHk:function(t,e){},d7L1:function(t,e){}});
//# sourceMappingURL=23.72b4134bf712b65848d7.js.map