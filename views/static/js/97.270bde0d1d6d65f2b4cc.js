webpackJsonp([97],{EZXL:function(t,a){},mVYZ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("P9l9"),i={name:"Out",data:function(){return{params:{factoryId:"",workShop:"",type:"投料"},factoryList:[],workshopList:[],orderList:[]}},watch:{"params.factoryId":function(t){this.getWorkshop(t)}},mounted:function(){this.getFactory()},methods:{getOrderList:function(){var t=this;""!==this.params.factoryId?""!==this.params.workShop?""!==this.params.type?this.$http(""+e.d.KJMAKINGORDERLIST_API,"POST",this.params).then(function(a){var s=a.data;0===s.code?t.orderList=t.ProcessingData(s.list):t.$message.error(s.msg)}):this.$message.error("请选择类型"):this.$message.error("请选择车间"):this.$message.error("请选择工厂")},ProcessingData:function(t){var a=this,s=[];return t.forEach(function(t,e){"投料"===a.params.type?"noPass"!==t.outStatus&&"saved"!==t.outStatus&&"已同步"!==t.outStatus||s.push(t):"入罐"===a.params.type&&("submit"!==t.kgtStatus&&"saved"!==t.kgtStatus&&"已同步"!==t.kgtStatus||s.push(t))}),"入罐"===this.params.type?s.sort(function(t,a){var s=["saved","已同步","submit"];return a.inEndTimeLength-t.inEndTimeLength==0?s.indexOf(t.kgtStatus)-s.indexOf(a.kgtStatus):a.inEndTimeLength-t.inEndTimeLength}):"投料"===this.params.type&&s.sort(function(t,a){var s=["noPass","已同步","saved"];return s.indexOf(t.outStatus)-s.indexOf(a.outStatus)}),s},goPage:function(t,a){var s=!1;if("煮豆"===t?s=this.isAuth("kjm:bean:material:list"):"看曲"===t?s=this.isAuth("kjm:guard:list"):"出曲"===t&&(s=this.isAuth("sys:kjmOutMaterial:list")),s){this.$store.commit("common/updateZQParamsOrderNo",a.orderNo),this.$store.commit("common/updateZQParamsOrderId",a.orderId);var e="";"煮豆"===t?(this.$store.commit("common/updateZQParamsBeanHouseId",a.orderHouseId),e="DataEntry-KojiMaking-BoiledBeans-index"):"看曲"===t?(this.$store.commit("common/updateZQParamsLookHouseId",a.orderHouseId),e="DataEntry-KojiMaking-Look-index"):"出曲"===t&&(this.$store.commit("common/updateZQParamsOutHouseId",a.orderHouseId),e="DataEntry-KojiMaking-Out-index"),this.pushPage(e)}else this.$message.error("无权限查看"+t)},pushPage:function(t){this.mainTabs=this.mainTabs.filter(function(a){return a.name!==t});var a=this;setTimeout(function(){a.$router.push({name:t})},100)},getFactory:function(){var t=this;this.factoryList=[],this.$http(e.c.FINDORG_API+"?code=factory","POST",{},!1,!1,!1).then(function(a){0===a.data.code?(t.factoryList=a.data.typeList,t.params.factoryId||(t.params.factoryId=a.data.typeList[0].deptId)):t.$message.error(a.data.msg)})},getWorkshop:function(t){var a=this;this.workshopList=[],this.params.workShop="",t&&this.$http(""+e.c.FINDORGBYID_API,"POST",{deptId:t,deptName:"制曲"},!1,!1,!1).then(function(t){0===t.data.code?(a.workshopList=t.data.typeList,a.params.workShop||(a.params.workShop=t.data.typeList[0].deptId)):a.$message.error(t.data.msg)})}},computed:{mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}}},components:{}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-row",[s("el-col",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.lodingStatus,expression:"lodingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[s("div",{staticClass:"main"},[s("el-card",{staticClass:"newCard"},[s("el-row",{staticStyle:{"border-bottom":"1px solid #E9E9E9","margin-bottom":"12px"},attrs:{type:"flex"}},[s("el-col",[s("el-form",{attrs:{model:t.params,size:"small",inline:!0,"label-position":"right","label-width":"42px"}},[s("el-form-item",{attrs:{label:"工厂："}},[s("el-select",{staticClass:"selectwpx",staticStyle:{width:"140px"},model:{value:t.params.factoryId,callback:function(a){t.$set(t.params,"factoryId",a)},expression:"params.factoryId"}},[s("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.factoryList,function(t){return s("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),s("el-form-item",{attrs:{label:"车间："}},[s("el-select",{staticClass:"selectwpx",staticStyle:{width:"140px"},model:{value:t.params.workShop,callback:function(a){t.$set(t.params,"workShop",a)},expression:"params.workShop"}},[s("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.workshopList,function(t){return s("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),s("el-form-item",{attrs:{label:"类型："}},[s("el-select",{staticClass:"selectwpx",staticStyle:{width:"140px"},model:{value:t.params.type,callback:function(a){t.$set(t.params,"type",a)},expression:"params.type"}},[s("el-option",{attrs:{label:"投料",value:"投料"}}),t._v(" "),s("el-option",{attrs:{label:"入罐",value:"入罐"}})],1)],1)],1)],1),t._v(" "),s("el-col",{staticStyle:{width:"340px"}},[s("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(a){return t.getOrderList()}}},[t._v("查询")])],1)],1)],1),t._v(" "),s("el-row",{attrs:{gutter:32}},t._l(t.orderList,function(a,e){return s("el-col",{key:e,staticStyle:{"margin-top":"20px"},attrs:{span:8}},[s("div",{staticClass:"box-item"},[s("div",{staticClass:"box-item-top"},[s("div",{staticClass:"box-item-title"},[s("div",{staticClass:"box-item-title-name"},[s("div",{style:{background:e%3==0?"#FFBF00":e%3==1?"#5BD171":"#2C92F6"}},[t._v(t._s(a.houseNo))]),s("div",[t._v(t._s(a.inPotNoName))])]),t._v(" "),s("div",{staticClass:"box-item-title-state"},[t._v("状态："+t._s("noPass"===a.outStatus?"审核不通过":"saved"===a.outStatus?"已保存":"submit"===a.outStatus?"已提交":"checked"===a.outStatus?"通过":"已同步"===a.outStatus?"未录入":a.outStatus))])]),t._v(" "),s("div",{staticClass:"box-item-container"},[s("div",{staticClass:"box-item-container-left"},[s("div",{staticClass:"box-item-container-img"})]),t._v(" "),s("div",{staticClass:"box-item-container-right"},[s("div",{staticClass:"box-item-container-item"},[s("div",{staticClass:"name"},[t._v("生产订单")]),s("div",{staticClass:"detail"},[t._v(t._s(a.orderNo))])]),t._v(" "),s("div",{staticClass:"box-item-container-item"},[s("div",{staticClass:"name"},[t._v("生产品项")]),s("div",{staticClass:"detail"},[t._v(t._s(a.materialCode+" "+a.materialName))])]),t._v(" "),s("div",{staticClass:"box-item-container-item"},[s("div",{staticClass:"name"},[t._v("入曲时长")]),s("div",{staticClass:"detail"},[t._v(t._s(a.inEndTimeLength)+" 小时")])]),t._v(" "),s("div",{staticClass:"box-item-container-item"},[s("div",{staticClass:"name"},[t._v("入曲时间")]),s("div",{staticClass:"detail"},[t._v(t._s(a.inEndTime?a.inEndTime:""))])])])])]),t._v(" "),s("div",{staticClass:"box-item-bottom"},[s("div",{staticClass:"box-item-bottom-item",style:{color:"不通过"===a.outStatus?"red":""},on:{click:function(s){return t.goPage("出曲",a)}}},[t._v("数据录入")])])])])}),1)],1)])],1)},staticRenderFns:[]};var r=s("C7Lr")(i,o,!1,function(t){s("EZXL")},"data-v-61e69d86",null);a.default=r.exports}});
//# sourceMappingURL=97.270bde0d1d6d65f2b4cc.js.map