webpackJsonp([113],{"2GoO":function(t,e){},gjgr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("P9l9"),o=a("Lna1"),r={data:function(){return{plantList:{factory:"",workShop:"",houseNoID:"",inPotNoID:"",inKjmDate:"",currPage:1,pageSize:10,totalCount:0},factory:"",workShop:"",houseList:"",inPotList:"",dataList:[]}},watch:{"plantList.factory":function(t,e){this.plantList.workShop="",this.plantList.houseNoID="",this.plantList.inPotNoID="",this.Getdeptbyid(t)},"plantList.workShop":function(t,e){this.plantList.houseNoID="",this.plantList.inPotNoID="",this.GetinPotList(t),this.GethouseList(t)}},mounted:function(){this.Getdeptcode()},methods:{Getdeptcode:function(){var t=this;this.$http(l.c.FINDORG_API+"?code=factory","POST",{},!1,!1,!1).then(function(e){var a=e.data;0===a.code?t.factory=a.typeList:t.$message.error(a.msg)})},Getdeptbyid:function(t){var e=this;this.plantList.workshop="",t&&this.$http(""+l.c.FINDORGBYID_API,"POST",{deptId:t},!1,!1,!1).then(function(t){var a=t.data;0===a.code?e.workShop=a.typeList:e.$message.error(a.msg)})},GetinPotList:function(t){var e=this;if(t){var a=this.workShop.find(function(e){return e.deptId===t}).deptName;this.$http(""+l.c.CONTAINERLIST_API,"POST",{currPage:1,dept_id:t,holder_type:"001",pageSize:9999,type:"holder_type",workShopName:a},!1,!1,!1).then(function(t){var a=t.data;0===a.code?e.inPotList=a.page.list:e.$message.error(a.msg)})}},GethouseList:function(t){var e=this;if(t){var a=this.workShop.find(function(e){return e.deptId===t}).deptName;this.$http(""+l.c.CONTAINERLIST_API,"POST",{currPage:1,dept_id:t,holder_type:"005",pageSize:9999,type:"holder_type",workShopName:a},!1,!1,!1).then(function(t){var a=t.data;0===a.code?e.houseList=a.page.list:e.$message.error(a.msg)})}},GetList:function(t){var e=this;t&&(this.plantList.currPage=1),this.$http(""+l.i.REPOUTBEANCRAFT_API,"POST",this.plantList).then(function(t){var a=t.data;0===a.code?(e.dataList=a.page.list,e.plantList.currPage=a.page.currPage,e.plantList.pageSize=a.page.pageSize,e.plantList.totalCount=a.page.totalCount):e.$message.error(a.msg),e.lodingS=!1})},handleSizeChange:function(t){this.plantList.pageSize=t,this.GetList()},handleCurrentChange:function(t){this.plantList.currPage=t,this.GetList()},ExportExcel:function(){Object(o.d)(""+l.i.REPOUTBEANCRAFTEXPORT_API,"煮豆工艺报表",this)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-card",[a("el-row",{staticClass:"searchCard"},[a("el-col",{attrs:{span:20}},[a("el-form",{attrs:{model:t.plantList,inline:!0,"label-width":"85px",size:"small"}},[a("el-form-item",{attrs:{label:"生产工厂："}},[a("el-select",{model:{value:t.plantList.factory,callback:function(e){t.$set(t.plantList,"factory",e)},expression:"plantList.factory"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.factory,function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"生产车间："}},[a("el-select",{model:{value:t.plantList.workShop,callback:function(e){t.$set(t.plantList,"workShop",e)},expression:"plantList.workShop"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.workShop,function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"曲房："}},[a("el-select",{attrs:{filterable:""},model:{value:t.plantList.houseNoID,callback:function(e){t.$set(t.plantList,"houseNoID",e)},expression:"plantList.houseNoID"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.houseList,function(t){return a("el-option",{key:t.holderId,attrs:{label:t.holderName,value:t.holderId}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"制曲日期："}},[a("el-date-picker",{staticStyle:{width:"199px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.plantList.inKjmDate,callback:function(e){t.$set(t.plantList,"inKjmDate",e)},expression:"plantList.inKjmDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发酵罐："}},[a("el-select",{attrs:{filterable:""},model:{value:t.plantList.inPotNoID,callback:function(e){t.$set(t.plantList,"inPotNoID",e)},expression:"plantList.inPotNoID"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),t._l(t.inPotList,function(t){return a("el-option",{key:t.holderId,attrs:{label:t.holderName,value:t.holderId}})})],2)],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{float:"right",width:"128px"},attrs:{span:4}},[t.isAuth("report:kjmORwht:beanTechList")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.GetList}},[t._v("查询")]):t._e(),t._v(" "),t.isAuth("report:kjmORwht:expectBeanTech")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.ExportExcel(!0)}}},[t._v("导出")]):t._e()],1)],1)],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"10px"}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.dataList,border:"","tooltip-effect":"dark","header-row-class-name":"tableHead"}},[a("el-table-column",{attrs:{label:"工厂",width:"120",prop:"factoryName","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"车间",prop:"workShopName",width:"100","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"曲房",prop:"houseNoName",width:"100","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"发酵罐",prop:"inPotNoName",width:"100","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"连续蒸煮号",prop:"cookingNoName",width:"100","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"制曲日期",prop:"inKjmDate",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"预热时间",prop:"preheatTime",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{label:"下料开始时间",prop:"unloadingStartDate",width:"165"}}),t._v(" "),a("el-table-column",{attrs:{label:"下料结束时间",prop:"unloadingEndDate",width:"165"}}),t._v(" "),a("el-table-column",{attrs:{label:"润水比例",prop:"rateRunWater"}}),t._v(" "),a("el-table-column",{attrs:{label:"实际比例",prop:"realRate"}}),t._v(" "),a("el-table-column",{attrs:{label:"润水温度",prop:"tempRunWater"}}),t._v(" "),a("el-table-column",{attrs:{label:"润水变频",prop:"frequenceRunWater"}}),t._v(" "),a("el-table-column",{attrs:{label:"一次预热变频",prop:"oncePreheatFrequency"}}),t._v(" "),a("el-table-column",{attrs:{label:"二次预热变频",prop:"secondPreheatFrequency"}}),t._v(" "),a("el-table-column",{attrs:{label:"二次预热温度",prop:"secondPreheatTemp"}}),t._v(" "),a("el-table-column",{attrs:{label:"下料速度",prop:"unloadingSpeed",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"蒸煮变频",prop:"cookingFrequency",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"上转阀变频",prop:"upFrequency",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"下转阀变频",prop:"downFrequency",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"蒸煮数显压力",prop:"cookingPress"}}),t._v(" "),a("el-table-column",{attrs:{label:"蒸煮机械压力",prop:"cookingMachinePress"}}),t._v(" "),a("el-table-column",{attrs:{label:"分气包压力",prop:"separateDrum",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"蒸煮数显温度",prop:"cookingTemp"}}),t._v(" "),a("el-table-column",{attrs:{label:"蒸煮机械温度",prop:"cookingMachineTemp"}}),t._v(" "),a("el-table-column",{attrs:{label:"上转阀冷却",prop:"upCooling",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"下转阀冷却",prop:"downCooling",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"混合料温度",prop:"mixtureTemp",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"接种温度",prop:"inoculationTemp"}})],1),t._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":t.plantList.currPage,"page-sizes":[10,15,20],"page-size":t.plantList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.plantList.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var i=a("C7Lr")(r,n,!1,function(t){a("2GoO")},null,null);e.default=i.exports}});
//# sourceMappingURL=113.5ff6a2e335b97958e7db.js.map