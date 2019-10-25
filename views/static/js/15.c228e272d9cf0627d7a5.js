webpackJsonp([15,79,98],{"9pu7":function(e,t){},Tjni:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("P9l9"),o={name:"schedule-log",data:function(){return{visible:!1,dataForm:{id:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1}},mounted:function(){},methods:{init:function(){this.visible=!0,this.getDataList()},getDataList:function(){var e=this;this.dataListLoading=!0,this.$http(""+n.k.LOGLIST_API,"GET",{page:this.pageIndex,limit:this.pageSize,jobId:this.dataForm.id}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},showErrorInfo:function(e){var t=this;this.$http(n.k.LOGINFO_API+"/"+e,"GET").then(function(e){var a=e.data;a&&0===a.code?t.$alert(a.log.error):t.$message.error(a.msg)})}},computed:{},components:{}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"日志列表","close-on-click-modal":!1,visible:e.visible,width:"75%"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"任务ID",clearable:""},model:{value:e.dataForm.id,callback:function(t){e.$set(e.dataForm,"id",t)},expression:"dataForm.id"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"460"}},[a("el-table-column",{attrs:{prop:"logId","header-align":"left",align:"left",width:"80",label:"日志ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jobId","header-align":"left",align:"left",width:"80","show-overflow-tooltip":!0,label:"任务ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"beanName","show-overflow-tooltip":!0,"header-align":"left",align:"left",label:"bean名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"methodName","show-overflow-tooltip":!0,"header-align":"left",align:"left",label:"方法名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"params","show-overflow-tooltip":!0,"header-align":"left",align:"left",label:"参数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status","show-overflow-tooltip":!0,"header-align":"left",align:"left",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?a("el-tag",{attrs:{size:"small"}},[e._v("成功")]):a("el-tag",{staticStyle:{cursor:"pointer"},attrs:{size:"small",type:"danger"},nativeOn:{click:function(a){return e.showErrorInfo(t.row.logId)}}},[e._v("失败")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"times",width:"150","show-overflow-tooltip":!0,"header-align":"left",align:"left",label:"耗时(单位: 毫秒)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",width:"180","show-overflow-tooltip":!0,"header-align":"left",align:"left",label:"执行时间"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]};var s=a("C7Lr")(o,i,!1,function(e){a("UvTl")},"data-v-5d640318",null);t.default=s.exports},UvTl:function(e,t){},svvF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("P9l9"),o=a("xDTk"),i=a("Tjni"),s={name:"schedule",data:function(){return{dataForm:{beanName:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,logVisible:!1}},mounted:function(){this.getDataList()},methods:{getDataList:function(e){var t=this;e&&(this.pageIndex=1),this.dataListLoading=!0,this.$http(""+n.k.SCHEDULELIST_API,"GET",{page:this.pageIndex,limit:this.pageSize,beanName:this.dataForm.beanName}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.jobId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http(""+n.k.SCHEDULEDEL_API,"POST",a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})}).catch(function(){})},pauseHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.jobId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"暂停":"批量暂停")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http(""+n.k.SCHEDULEPAUSE_API,"POST",a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})}).catch(function(){})},resumeHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.jobId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"恢复":"批量恢复")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http(""+n.k.SCHEDULERESUME_API,"POST",a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})}).catch(function(){})},runHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.jobId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"立即执行":"批量立即执行")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http(""+n.k.SCHEDULERUN_API,"POST",a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})}).catch(function(){})},logHandle:function(){var e=this;this.logVisible=!0,this.$nextTick(function(){e.$refs.log.init()})}},computed:{},components:{AddOrUpdate:o.default,Log:i.default}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-col",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.lodingStatus,expression:"lodingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"main"},[a("el-card",[a("div",{staticClass:"mod-schedule"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList(!0)}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"bean名称",clearable:""},model:{value:e.dataForm.beanName,callback:function(t){e.$set(e.dataForm,"beanName",t)},expression:"dataForm.beanName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getDataList(!0)}}},[e._v("查询")]),e._v(" "),e.isAuth("sys:schedule:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("sys:schedule:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.deleteHandle()}}},[e._v("批量删除")]):e._e(),e._v(" "),e.isAuth("sys:schedule:pause")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.pauseHandle()}}},[e._v("批量暂停")]):e._e(),e._v(" "),e.isAuth("sys:schedule:resume")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.resumeHandle()}}},[e._v("批量恢复")]):e._e(),e._v(" "),e.isAuth("sys:schedule:run")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.runHandle()}}},[e._v("批量立即执行")]):e._e(),e._v(" "),e.isAuth("sys:schedule:log")?a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.logHandle()}}},[e._v("日志列表")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{"header-row-class-name":"tableHead",data:e.dataList,"tooltip-effect":"dark",border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection",width:"34"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jobId",width:"55",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"beanName","show-overflow-tooltip":!0,label:"bean名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"methodName","show-overflow-tooltip":!0,label:"方法名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"params",width:"80","show-overflow-tooltip":!0,label:"参数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cronExpression",width:"100","show-overflow-tooltip":!0,label:"cron表达式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",width:"100","show-overflow-tooltip":!0,label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",width:"63","header-align":"left",align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?a("el-tag",{attrs:{size:"small"}},[e._v("正常")]):a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("暂停")])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","show-overflow-tooltip":!0,width:"232",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("sys:schedule:update")?a("el-button",{staticStyle:{padding:"1px 0"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.addOrUpdateHandle(t.row.jobId)}}},[e._v("修改")]):e._e(),e._v(" "),e.isAuth("sys:schedule:delete")?a("el-button",{staticStyle:{padding:"1px 0"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteHandle(t.row.jobId)}}},[e._v("删除")]):e._e(),e._v(" "),e.isAuth("sys:schedule:pause")?a("el-button",{staticStyle:{padding:"1px 0"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.pauseHandle(t.row.jobId)}}},[e._v("暂停")]):e._e(),e._v(" "),e.isAuth("sys:schedule:resume")?a("el-button",{staticStyle:{padding:"1px 0"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.resumeHandle(t.row.jobId)}}},[e._v("恢复")]):e._e(),e._v(" "),e.isAuth("sys:schedule:run")?a("el-button",{staticStyle:{padding:"1px 0"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.runHandle(t.row.jobId)}}},[e._v("立即执行")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.logVisible?a("log",{ref:"log"}):e._e()],1)])],1)])},staticRenderFns:[]};var l=a("C7Lr")(s,r,!1,function(e){a("9pu7")},"data-v-7d759570",null);t.default=l.exports},tsr0:function(e,t){},xDTk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("P9l9"),o={name:"schedule-add-or-update",data:function(){return{visible:!1,dataForm:{id:0,beanName:"",methodName:"",params:"",cronExpression:"",remark:"",status:0},dataRule:{beanName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],methodName:[{required:!0,message:"方法名称不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"cron表达式不能为空",trigger:"blur"}]}}},mounted:function(){},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http(n.k.SCHEDULEINFO_API+"/"+t.dataForm.id,"GET").then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.beanName=a.schedule.beanName,t.dataForm.methodName=a.schedule.methodName,t.dataForm.params=a.schedule.params,t.dataForm.cronExpression=a.schedule.cronExpression,t.dataForm.remark=a.schedule.remark,t.dataForm.status=a.schedule.status)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http(n.k.SCHEDULE_API+"/"+(e.dataForm.id?"update":"save"),"POST",{jobId:e.dataForm.id||void 0,beanName:e.dataForm.beanName,methodName:e.dataForm.methodName,params:e.dataForm.params,cronExpression:e.dataForm.cronExpression,remark:e.dataForm.remark,status:e.dataForm.id?e.dataForm.status:void 0}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}},computed:{},components:{}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"bean名称",prop:"beanName"}},[a("el-input",{attrs:{placeholder:"spring bean名称, 如: testTask"},model:{value:e.dataForm.beanName,callback:function(t){e.$set(e.dataForm,"beanName",t)},expression:"dataForm.beanName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"方法名称",prop:"methodName"}},[a("el-input",{attrs:{placeholder:"方法名称"},model:{value:e.dataForm.methodName,callback:function(t){e.$set(e.dataForm,"methodName",t)},expression:"dataForm.methodName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"参数",prop:"params"}},[a("el-input",{attrs:{placeholder:"参数"},model:{value:e.dataForm.params,callback:function(t){e.$set(e.dataForm,"params",t)},expression:"dataForm.params"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"cron表达式",prop:"cronExpression"}},[a("el-input",{attrs:{placeholder:"如: 0 0 12 * * ?"},model:{value:e.dataForm.cronExpression,callback:function(t){e.$set(e.dataForm,"cronExpression",t)},expression:"dataForm.cronExpression"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remark,callback:function(t){e.$set(e.dataForm,"remark",t)},expression:"dataForm.remark"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var s=a("C7Lr")(o,i,!1,function(e){a("tsr0")},"data-v-aa1e4fa0",null);t.default=s.exports}});
//# sourceMappingURL=15.c228e272d9cf0627d7a5.js.map