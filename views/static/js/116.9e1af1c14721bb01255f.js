webpackJsonp([116],{"8opx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("P9l9"),o=a("Lna1"),i={name:"index",data:function(){return{ExportTime:{},month:"",lodingS:!1,Team:[],dataList:[],plantList:{deptId:"",productDate:"",factory:"",workshop:"",productline:"",currPage:1,pageSize:10,totalCount:0}}},mounted:function(){Object(o.f)(this.$)},methods:{GetList:function(t){var e=this;if(!this.plantList.productDate)return this.$message.error("请选择月份"),!1;this.lodingS=!0,t&&(this.plantList.currPage=1),this.$http(""+l.i.REPATTM_API,"POST",this.plantList).then(function(t){var a=t.data;0===a.code?(e.dataList=a.page.list,e.plantList.currPage=a.page.currPage,e.plantList.pageSize=a.page.pageSize,e.plantList.totalCount=a.page.totalCount,e.month="0"===e.plantList.productDate.substring(e.plantList.productDate.indexOf("-")+1).split("")[0]?e.plantList.productDate.substring(e.plantList.productDate.indexOf("-")+1).slice(1):e.plantList.productDate.substring(e.plantList.productDate.indexOf("-")+1)):e.$message.error(a.msg),e.lodingS=!1})},ExportExcel:function(){var t=this;if(!this.plantList.productDate)return this.$message.error("请选择月份"),!1;this.lodingS=!0,this.$http(""+l.i.REPOUTFORWORKOUTPUT_API,"POST",this.plantList).then(function(e){var a=e.data;0===a.code?t.ExportTime=setInterval(function(){t.GetExportExcel()},4e3):(t.lodingS=!1,t.$message.error(a.msg))})},GetExportExcel:function(){var t=this;this.$http(""+l.i.GETREPOUTFORWORKOUTPUT_API,"GET").then(function(e){var a=e.data;if(0===a.code){if(a.asyncRecord)if("0"===a.asyncRecord.asyncStatus)t.lodingS=!1,clearInterval(t.ExportTime),t.$message.error("导出失败");else if("1"===a.asyncRecord.asyncStatus){t.lodingS=!1,clearInterval(t.ExportTime),t.$message.success("导出成功");var l=document.createElement("a");l.download="车间出勤汇总报表"+Object(o.e)()+".xlsx",l.style.display="none",l.href=a.asyncRecord.fileUrl,document.body.appendChild(l),l.click(),document.body.removeChild(l)}}else t.lodingS=!1,clearInterval(t.ExportTime),t.$message.error(a.msg)}).catch(function(){t.lodingS=!1,clearInterval(t.ExportTime)})},handleSizeChange:function(t){this.plantList.pageSize=t,this.GetList()},handleCurrentChange:function(t){this.plantList.currPage=t,this.GetList()}},computed:{},components:{Linkage:function(t){a.e(2).then(function(){var e=[a("1wgo")];t.apply(null,e)}.bind(this)).catch(a.oe)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.lodingS,expression:"lodingS",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"main"},[a("el-card",{staticClass:"searchCard"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",[a("linkage",{attrs:{plantList:t.plantList}})],1),t._v(" "),a("el-col",{staticStyle:{width:"200px"}},[t.isAuth("report:form:listShopAttM")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.GetList(!0)}}},[t._v("查询")]):t._e(),t._v(" "),t.isAuth("report:form:exportShopAttM")?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.ExportExcel(!0)}}},[t._v("导出")]):t._e()],1)],1),t._v(" "),a("div",{staticClass:"toggleSearchBottom"},[a("i",{staticClass:"el-icon-caret-top"})])],1)],1),t._v(" "),a("div",{staticClass:"main",staticStyle:{"padding-top":"0"}},[a("el-card",{staticClass:"tableCard"},[a("div",{staticClass:"toggleSearchTop"},[a("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.dataList,border:"","tooltip-effect":"dark","header-row-class-name":"tableHead"}},[a("el-table-column",{attrs:{prop:"factoryName",label:"工厂","show-overflow-tooltip":!0,width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"workShopName",label:"车间","show-overflow-tooltip":!0,width:"95"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productLineName",label:"产线","show-overflow-tooltip":!0,width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"teamName",label:"班组","show-overflow-tooltip":!0,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userId",label:"人员","show-overflow-tooltip":!0,width:"80"}}),t._v(" "),t.dataList.length>0?t._l(t.dataList[0].listMonth.length,function(e,l){return a("el-table-column",{key:e,attrs:{label:t.month+"月"+(l+1).toString()+"日"}},[a("el-table-column",{attrs:{label:"白班时数","show-overflow-tooltip":!0,width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.listMonth[l].dayTime)+"\n              ")]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:"夜班时数","show-overflow-tooltip":!0,width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.listMonth[l].nightTime)+"\n              ")]}}],null,!0)})],1)}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:"统计"}},[a("el-table-column",{attrs:{prop:"dayAllDay",label:"白班天数","show-overflow-tooltip":!0,width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nightAllDay",label:"夜班天数","show-overflow-tooltip":!0,width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"allTime",label:"总计出勤数（H）","show-overflow-tooltip":!0,width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"workAllDay",label:"上班天数","show-overflow-tooltip":!0,width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"offDutyAllDay",label:"休班天数","show-overflow-tooltip":!0,width:"80"}})],1)],2),t._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":t.plantList.currPage,"page-sizes":[10,15,20],"page-size":t.plantList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.plantList.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)])},staticRenderFns:[]};var r=a("C7Lr")(i,n,!1,function(t){a("pndy")},"data-v-2948730a",null);e.default=r.exports},pndy:function(t,e){}});
//# sourceMappingURL=116.9e1af1c14721bb01255f.js.map