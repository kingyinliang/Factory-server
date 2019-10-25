webpackJsonp([112],{OW7A:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("P9l9"),i={name:"Out",data:function(){return{params:{factoryId:"",workShop:""},factoryList:[],workshopList:[],orderList:[]}},watch:{"params.factoryId":function(t){this.getWorkshop(t)}},mounted:function(){this.getFactory()},methods:{getOrderList:function(){var t=this;""!==this.params.factoryId?""!==this.params.workShop?this.$http(""+s.d.KJMAKINGORDERLIST_API,"POST",this.params).then(function(a){var e=a.data;0===e.code?t.orderList=t.ProcessingData(e.list):t.$message.error(e.msg)}):this.$message.error("请选择车间"):this.$message.error("请选择工厂")},ProcessingData:function(t){var a=[];return t.forEach(function(t,e){"saved"!==t.beanStatus&&"已同步"!==t.beanStatus&&"noPass"!==t.beanStatus||a.push(t)}),a.sort(function(t,a){var e=["noPass","已同步","saved"];return e.indexOf(t.beanStatus)-e.indexOf(a.beanStatus)}),a},goPage:function(t,a){var e=!1;if("煮豆"===t?e=this.isAuth("kjm:bean:material:list"):"看曲"===t?e=this.isAuth("kjm:guard:list"):"出曲"===t&&(e=this.isAuth("sys:kjmOutMaterial:list")),e){this.$store.commit("common/updateZQParamsOrderNo",a.orderNo),this.$store.commit("common/updateZQParamsOrderId",a.orderId);var s="";"煮豆"===t?(this.$store.commit("common/updateZQParamsBeanHouseId",a.orderHouseId),s="DataEntry-KojiMaking-BoiledBeans-index"):"看曲"===t?(this.$store.commit("common/updateZQParamsLookHouseId",a.orderHouseId),s="DataEntry-KojiMaking-Look-index"):"出曲"===t&&(this.$store.commit("common/updateZQParamsOutHouseId",a.orderHouseId),s="DataEntry-KojiMaking-Out-index"),this.pushPage(s)}else this.$message.error("无权限查看"+t)},pushPage:function(t){this.mainTabs=this.mainTabs.filter(function(a){return a.name!==t});var a=this;setTimeout(function(){a.$router.push({name:t})},100)},getFactory:function(){var t=this;this.factoryList=[],this.$http(s.c.FINDORG_API+"?code=factory","POST",{},!1,!1,!1).then(function(a){0===a.data.code?(t.factoryList=a.data.typeList,t.params.factoryId||(t.params.factoryId=a.data.typeList[0].deptId)):t.$message.error(a.data.msg)})},getWorkshop:function(t){var a=this;this.workshopList=[],this.params.workShop="",t&&this.$http(""+s.c.FINDORGBYID_API,"POST",{deptId:t,deptName:"制曲"},!1,!1,!1).then(function(t){0===t.data.code?(a.workshopList=t.data.typeList,a.params.workShop||(a.params.workShop=t.data.typeList[0].deptId)):a.$message.error(t.data.msg)})}},computed:{mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}}},components:{}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",[e("el-col",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.lodingStatus,expression:"lodingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[e("div",{staticClass:"main"},[e("el-card",{staticClass:"newCard"},[e("el-row",{staticStyle:{"border-bottom":"1px solid #E9E9E9","margin-bottom":"12px"},attrs:{type:"flex"}},[e("el-col",[e("el-form",{attrs:{model:t.params,size:"small",inline:!0,"label-position":"right","label-width":"42px"}},[e("el-form-item",{attrs:{label:"工厂："}},[e("el-select",{staticClass:"selectwpx",staticStyle:{width:"140px"},model:{value:t.params.factoryId,callback:function(a){t.$set(t.params,"factoryId",a)},expression:"params.factoryId"}},[e("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.factoryList,function(t){return e("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),e("el-form-item",{attrs:{label:"车间："}},[e("el-select",{staticClass:"selectwpx",staticStyle:{width:"140px"},model:{value:t.params.workShop,callback:function(a){t.$set(t.params,"workShop",a)},expression:"params.workShop"}},[e("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.workshopList,function(t){return e("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2)],1)],1)],1),t._v(" "),e("el-col",{staticStyle:{width:"340px"}},[e("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(a){return t.getOrderList()}}},[t._v("查询")])],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:32}},t._l(t.orderList,function(a,s){return e("el-col",{key:s,staticStyle:{"margin-top":"20px"},attrs:{span:8}},[e("div",{staticClass:"box-item"},[e("div",{staticClass:"box-item-top"},[e("div",{staticClass:"box-item-title"},[e("div",{staticClass:"box-item-title-name"},[e("div",{style:{background:s%3==0?"#FFBF00":s%3==1?"#5BD171":"#2C92F6"}},[t._v(t._s(a.houseNo))]),e("div",[t._v(t._s(a.inPotNoName))])]),t._v(" "),e("div",{staticClass:"box-item-title-state"},[t._v("状态："+t._s("noPass"===a.beanStatus?"审核不通过":"saved"===a.beanStatus?"已保存":"submit"===a.beanStatus?"已提交":"checked"===a.beanStatus?"通过":"已同步"===a.beanStatus?"未录入":a.beanStatus))])]),t._v(" "),e("div",{staticClass:"box-item-container"},[e("div",{staticClass:"box-item-container-left"},[e("div",{staticClass:"box-item-container-img"})]),t._v(" "),e("div",{staticClass:"box-item-container-right"},[e("div",{staticClass:"box-item-container-item"},[e("div",{staticClass:"name"},[t._v("生产订单")]),e("div",{staticClass:"detail"},[t._v(t._s(a.orderNo))])]),t._v(" "),e("div",{staticClass:"box-item-container-item"},[e("div",{staticClass:"name"},[t._v("生产品项")]),e("div",{staticClass:"detail"},[t._v(t._s(a.materialCode+" "+a.materialName))])]),t._v(" "),e("div",{staticClass:"box-item-container-item"},[e("div",{staticClass:"name"},[t._v("入曲时长")]),e("div",{staticClass:"detail"},[t._v(t._s(a.inEndTimeLength)+" 小时")])]),t._v(" "),e("div",{staticClass:"box-item-container-item"},[e("div",{staticClass:"name"},[t._v("入曲时间")]),e("div",{staticClass:"detail"},[t._v(t._s(a.inEndTime?a.inEndTime:""))])])])])]),t._v(" "),e("div",{staticClass:"box-item-bottom"},[e("div",{staticClass:"box-item-bottom-item",style:{color:"不通过"===a.beanStatus?"red":""},on:{click:function(e){return t.goPage("煮豆",a)}}},[t._v("数据录入")])])])])}),1)],1)])],1)},staticRenderFns:[]};var r=e("C7Lr")(i,o,!1,function(t){e("RUXI")},"data-v-305b6a81",null);a.default=r.exports},RUXI:function(t,a){}});
//# sourceMappingURL=112.11b582fe0957d65bba98.js.map