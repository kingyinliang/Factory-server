webpackJsonp([87],{ngju:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("BO1k"),r=a.n(s),i=a("Lna1"),o=a("P9l9"),c={name:"caraft",data:function(){return{ids:"",craftfrom:{id:this.uuid(32,62),orderHouseId:"",preheatDate:"",unloadingStartDate:"",unloadingEndDate:"",preheatTime:"",rateRunWater:"",tempRunWater:"",frequenceRunWater:"",realRate:"",weightRunWater:"",speedRunWater:"",oncePreheatFrequency:"",secondPreheatFrequency:"",secondPreheatTemp:"",unloadingSpeed:"",cookingException:"",cookingFrequency:"",upFrequency:"",downFrequency:"",continuousCookingException:"",blendException:"",addOrupdate:"0"},lishuiList:[],zhengzhuList:[],hunheList:[]}},props:["isRedact","formHeader"],mounted:function(){},methods:{craftrules:function(){var t=!0;if(""===this.craftfrom.preheatDate||!this.craftfrom.preheatDate)return t=!1,this.$message.error("预热开始时间不能为空"),!1;if(""===this.craftfrom.unloadingStartDate||!this.craftfrom.unloadingStartDate)return t=!1,this.$message.error("下料开始时间不能为空"),!1;if(!this.craftfrom.unloadingEndDate||""===this.craftfrom.unloadingEndDate)return t=!1,this.$message.error("下料结束时间不能为空"),!1;if(!(this.craftfrom.frequenceRunWater&&this.craftfrom.realRate&&this.craftfrom.weightRunWater&&this.craftfrom.speedRunWater&&this.craftfrom.oncePreheatFrequency&&this.craftfrom.secondPreheatFrequency&&this.craftfrom.secondPreheatTemp&&this.craftfrom.unloadingSpeed&&""!==this.craftfrom.frequenceRunWater&&""!==this.craftfrom.realRate&&""!==this.craftfrom.weightRunWater&&""!==this.craftfrom.speedRunWater&&""!==this.craftfrom.oncePreheatFrequency&&""!==this.craftfrom.secondPreheatFrequency&&""!==this.craftfrom.secondPreheatTemp&&""!==this.craftfrom.unloadingSpeed))return t=!1,this.$message.error("煮豆润水参数不能为空"),!1;if(0===this.lishuiList.length)return t=!1,this.$message.error("煮豆润水过程监控数据记录未填"),!1;var e=!0,a=!1,s=void 0;try{for(var i,o=r()(this.lishuiList);!(e=(i=o.next()).done);e=!0){var c=i.value;if("0"===c.delFlag&&!(c.guardDate&&""!==c.guardDate&&c.runWaterTemp&&""!==c.runWaterTemp&&c.preheatTemp&&""!==c.preheatTemp&&c.unloadingWeight&&""!==c.unloadingWeight&&c.runWaterSpeed&&""!==c.runWaterSpeed))return t=!1,this.$message.error("煮豆润水过程监控数据必填项不能为空"),!1}}catch(t){a=!0,s=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw s}}if(""===this.craftfrom.cookingFrequency||""===this.craftfrom.upFrequency||""===this.craftfrom.downFrequency||!this.craftfrom.cookingFrequency||!this.craftfrom.upFrequency||!this.craftfrom.downFrequency)return t=!1,this.$message.error("连续蒸煮参数不能为空"),!1;var l=!0,n=!1,u=void 0;try{for(var d,f=r()(this.zhengzhuList);!(l=(d=f.next()).done);l=!0){var m=d.value;if("0"===m.delFlag&&!(m.guardTime&&""!==m.guardTime&&m.cookingMachinePress&&""!==m.cookingMachinePress&&m.separateDrum&&""!==m.separateDrum&&m.cookingMachineTemp&&""!==m.cookingMachineTemp&&m.downCooling&&""!==m.downCooling))return t=!1,this.$message.error("连续蒸煮监控数据必填项不能为空"),!1}}catch(t){n=!0,u=t}finally{try{!l&&f.return&&f.return()}finally{if(n)throw u}}return 0===this.zhengzhuList.length?(t=!1,this.$message.error("过程监控数据记录未填"),!1):0===this.hunheList.length?(t=!1,this.$message.error("混合入曲控制未填"),!1):(this.hunheList.forEach(function(e){if("0"===e.delFlag&&!(e.guardDate&&e.mixtureTemp&&e.inoculationTemp&&e.cookingFeel&&""!==e.guardDate&&""!==e.mixtureTemp&&""!==e.inoculationTemp&&""!==e.cookingFeel))return t=!1,!1}),t||(this.$message.error("混合入曲控制必填项未填"),!1))},updatezhu:function(t,e){var a=this;this.$set(this.craftfrom,"orderHouseId",this.formHeader.orderHouseId),this.$set(this.craftfrom,"status",this.formHeader.submitStatus),this.$set(this.craftfrom,"preheatTime",this.timecha),this.$http(""+o.d.DOUGONGYIZHUSAVE_API,"POST",this.craftfrom).then(function(e){var s=e.data;0===s.code||a.$message.error(s.msg),t&&t("resolve")}).catch(function(){t&&e("reject")})},updatelishui:function(t,e){var a=this;this.$http(""+o.d.DOUGONGYIRUISAVE_API,"POST",this.lishuiList).then(function(e){var s=e.data;0===s.code||a.$message.error(s.msg),t&&t("resolve")}).catch(function(){t&&e("reject")})},updatezhengzhu:function(t,e){var a=this;this.zhengzhuList.beanTechId=this.craftfrom.id,this.$http(""+o.d.DOUGONGYIZHENGSAVE_API,"POST",this.zhengzhuList).then(function(e){var s=e.data;0===s.code||a.$message.error(s.msg),t&&t("resolve")}).catch(function(){t&&e("reject")})},updatehunhe:function(t,e){var a=this;this.hunheList.beanTechId=this.craftfrom.id,this.$http(""+o.d.DOUGONGYIHUNSAVE_API,"POST",this.hunheList).then(function(e){var s=e.data;0===s.code||a.$message.error(s.msg),t&&t("resolve")}).catch(function(){t&&e("reject")})},addlishui:function(){this.lishuiList.push({id:"",beanTechId:this.craftfrom.id,guardDate:"",runWaterTemp:"",preheatTemp:"",unloadingWeight:"",runWaterSpeed:"",delFlag:"0",remark:"",changer:this.$store.state.user.realName+"("+this.$store.state.user.name+")",changed:Object(i.c)(new Date,"yyyy-MM-dd hh:mm:ss")}),this.$nextTick(function(){this.$refs.runshuiTable.bodyWrapper.scrollTop=this.$refs.runshuiTable.bodyWrapper.scrollHeight})},addzhengzhu:function(){this.zhengzhuList.push({id:"",beanTechId:this.craftfrom.id,guardTime:"",cookingPress:"",cookingMachinePress:"",separateDrum:"",cookingTemp:"",cookingMachineTemp:"",upCooling:"",downCooling:"",remark:"",delFlag:"0",changer:this.$store.state.user.realName+"("+this.$store.state.user.name+")",changed:Object(i.c)(new Date,"yyyy-MM-dd hh:mm:ss")}),this.$nextTick(function(){this.$refs.zhengzhuTable.bodyWrapper.scrollTop=this.$refs.zhengzhuTable.bodyWrapper.scrollHeight})},addhunhe:function(){this.hunheList.push({id:"",beanTechId:this.craftfrom.id,guardDate:"",mixtureTemp:"",inoculationTemp:"",cookingFeel:"",remark:"",delFlag:"0",changer:this.$store.state.user.realName+"("+this.$store.state.user.name+")",changed:Object(i.c)(new Date,"yyyy-MM-dd hh:mm:ss")}),this.$nextTick(function(){this.$refs.hunheTable.bodyWrapper.scrollTop=this.$refs.hunheTable.bodyWrapper.scrollHeight})},getList:function(t){var e=this;this.$http(""+o.d.DOUGONGYILISTSAVE_API,"POST",{orderHouseId:t.orderHouseId}).then(function(t){var a=t.data;0===a.code?(e.craftfrom=a.technologyList[0],e.lishuiList=a.boiledList,e.zhengzhuList=a.cookingList,e.hunheList=a.blendList):e.$message.error(a.msg)}).catch(function(t){e.$message.error(t)}).finally(function(){e.$emit("setApplyCraftState",e.craftfrom.status)})},delrow:function(t){t.delFlag="1"},rowDelFlag:function(t){var e=t.row;t.rowIndex;return"1"===e.delFlag?"rowDel":""}},computed:{timecha:function(){return this.craftfrom.unloadingStartDate&&this.craftfrom.preheatDate?(new Date(this.craftfrom.unloadingStartDate)-new Date(this.craftfrom.preheatDate))/6e4:0}},components:{AbnRecord:function(t){a.e(3).then(function(){var e=[a("t3oV")];t.apply(null,e)}.bind(this)).catch(a.oe)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("el-form",{attrs:{inline:!0,model:t.craftfrom,size:"small","label-width":"130px"}},[a("el-form-item",{attrs:{label:"预热开始时间：",required:!0}},[a("el-date-picker",{staticStyle:{width:"171px"},attrs:{type:"datetime",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status),placeholder:"选择日期",size:"small",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.craftfrom.preheatDate,callback:function(e){t.$set(t.craftfrom,"preheatDate",e)},expression:"craftfrom.preheatDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"下料开始时间：",required:!0}},[a("el-date-picker",{staticStyle:{width:"171px"},attrs:{type:"datetime",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status),placeholder:"选择日期",size:"small",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.craftfrom.unloadingStartDate,callback:function(e){t.$set(t.craftfrom,"unloadingStartDate",e)},expression:"craftfrom.unloadingStartDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"下料结束时间：",required:!0}},[a("el-date-picker",{staticStyle:{width:"171px"},attrs:{type:"datetime",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status),placeholder:"选择日期",size:"small",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.craftfrom.unloadingEndDate,callback:function(e){t.$set(t.craftfrom,"unloadingEndDate",e)},expression:"craftfrom.unloadingEndDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"预热时间(min)：",required:!0}},[a("el-input",{staticStyle:{width:"100px"},attrs:{disabled:""},model:{value:t.timecha,callback:function(e){t.timecha=e},expression:"timecha"}})],1)],1)],1),t._v(" "),a("el-card",[a("div",{staticClass:"htitle"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 煮豆润水参数设置\n      "),a("el-button",{staticClass:"readyshiftBtn",staticStyle:{"margin-left":"30px"},attrs:{type:"text",name:"runar"}},[t._v("收起"),a("i",{staticClass:"el-icon-caret-top"})])],1),t._v(" "),a("div",{staticClass:"runarBox"},[a("el-form",{attrs:{inline:!0,size:"small","label-width":"130px",model:t.craftfrom}},[a("el-form-item",{attrs:{label:"润水比例:"}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.rateRunWater,callback:function(e){t.$set(t.craftfrom,"rateRunWater",e)},expression:"craftfrom.rateRunWater"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"润水变频(HZ):",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.frequenceRunWater,callback:function(e){t.$set(t.craftfrom,"frequenceRunWater",e)},expression:"craftfrom.frequenceRunWater"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"实际比例:",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.realRate,callback:function(e){t.$set(t.craftfrom,"realRate",e)},expression:"craftfrom.realRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"润水总量(L):",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.weightRunWater,callback:function(e){t.$set(t.craftfrom,"weightRunWater",e)},expression:"craftfrom.weightRunWater"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"润水流速(L/h):",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.speedRunWater,callback:function(e){t.$set(t.craftfrom,"speedRunWater",e)},expression:"craftfrom.speedRunWater"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"一次预热变频:",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.oncePreheatFrequency,callback:function(e){t.$set(t.craftfrom,"oncePreheatFrequency",e)},expression:"craftfrom.oncePreheatFrequency"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二次预热变频:",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.secondPreheatFrequency,callback:function(e){t.$set(t.craftfrom,"secondPreheatFrequency",e)},expression:"craftfrom.secondPreheatFrequency"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二次预热温度:",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.secondPreheatTemp,callback:function(e){t.$set(t.craftfrom,"secondPreheatTemp",e)},expression:"craftfrom.secondPreheatTemp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"下料速度(KG/H):",required:!0}},[a("el-input",{staticClass:"liInputWidth",attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.unloadingSpeed,callback:function(e){t.$set(t.craftfrom,"unloadingSpeed",e)},expression:"craftfrom.unloadingSpeed"}})],1)],1),t._v(" "),a("div",{staticClass:"htitle"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),a("span",{staticClass:"lh32px"},[t._v("过程监控数据记录")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},on:{click:t.addlishui}},[t._v(" + 新增")])],1),t._v(" "),a("el-table",{ref:"runshuiTable",attrs:{"max-height":"267",border:"","header-row-class-name":"tableHead",data:t.lishuiList,"row-class-name":t.rowDelFlag}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{width:"205"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-date-picker",{staticStyle:{width:"171px"},attrs:{type:"datetime",disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),placeholder:"选择时间",size:"small",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:e.row.guardDate,callback:function(a){t.$set(e.row,"guardDate",a)},expression:"scope.row.guardDate"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("观察时间")])])],2),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.runWaterTemp,callback:function(a){t.$set(e.row,"runWaterTemp",a)},expression:"scope.row.runWaterTemp"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("润水/°C")])])],2),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.preheatTemp,callback:function(a){t.$set(e.row,"preheatTemp",a)},expression:"scope.row.preheatTemp"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("预热/°C")])])],2),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.unloadingWeight,callback:function(a){t.$set(e.row,"unloadingWeight",a)},expression:"scope.row.unloadingWeight"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("下料量")])])],2),t._v(" "),a("el-table-column",{attrs:{width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.runWaterSpeed,callback:function(a){t.$set(e.row,"runWaterSpeed",a)},expression:"scope.row.runWaterSpeed"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("润水速度L/h")])])],2),t._v(" "),a("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.remark,callback:function(a){t.$set(e.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作人",prop:"changer",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作时间",prop:"changed",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{width:"50",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),circle:"",size:"small"},on:{click:function(a){return t.delrow(e.row)}}})]}}])})],1),t._v(" "),a("div",[a("div",{staticClass:"audit"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("异常情况记录")])]),t._v(" "),a("div",[a("el-input",{staticClass:"textarea",staticStyle:{width:"100%",height:"40px"},attrs:{type:"textarea",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.cookingException,callback:function(e){t.$set(t.craftfrom,"cookingException",e)},expression:"craftfrom.cookingException"}})],1)])],1)]),t._v(" "),a("el-card",[a("div",{staticClass:"htitle"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 连续蒸煮记录\n      "),a("el-button",{staticClass:"readyshiftBtn",staticStyle:{"margin-left":"30px"},attrs:{type:"text",name:"zhengzhuar"}},[t._v("收起"),a("i",{staticClass:"el-icon-caret-top"})])],1),t._v(" "),a("div",{staticClass:"zhengzhuarBox"},[a("el-form",{attrs:{inline:!0,size:"small",model:t.craftfrom}},[a("el-form-item",{attrs:{label:"蒸煮变频(HZ):",required:!0}},[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.cookingFrequency,callback:function(e){t.$set(t.craftfrom,"cookingFrequency",e)},expression:"craftfrom.cookingFrequency"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上转阀变频(HZ):",required:!0}},[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.upFrequency,callback:function(e){t.$set(t.craftfrom,"upFrequency",e)},expression:"craftfrom.upFrequency"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"下转阀变频(HZ):",required:!0}},[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.downFrequency,callback:function(e){t.$set(t.craftfrom,"downFrequency",e)},expression:"craftfrom.downFrequency"}})],1)],1),t._v(" "),a("div",{staticClass:"htitle"},[a("span",{staticClass:"lh32px"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 过程监控数据记录")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status),size:"small"},on:{click:t.addzhengzhu}},[t._v(" + 新增")])],1),t._v(" "),a("el-table",{ref:"zhengzhuTable",attrs:{"max-height":"267",border:"","header-row-class-name":"tableHead",data:t.zhengzhuList,"row-class-name":t.rowDelFlag}},[a("el-table-column",{attrs:{width:"195"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-date-picker",{staticStyle:{width:"171px"},attrs:{type:"datetime",disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),placeholder:"选择时间",size:"small",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:e.row.guardTime,callback:function(a){t.$set(e.row,"guardTime",a)},expression:"scope.row.guardTime"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("观察时间")])])],2),t._v(" "),a("el-table-column",{attrs:{label:"压力/Mpa"}},[a("el-table-column",{attrs:{width:"110",label:"蒸煮数显"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.cookingPress,callback:function(a){t.$set(e.row,"cookingPress",a)},expression:"scope.row.cookingPress"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.cookingMachinePress,callback:function(a){t.$set(e.row,"cookingMachinePress",a)},expression:"scope.row.cookingMachinePress"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("蒸煮机械")])])],2),t._v(" "),a("el-table-column",{attrs:{width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.separateDrum,callback:function(a){t.$set(e.row,"separateDrum",a)},expression:"scope.row.separateDrum"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("分汽包")])])],2)],1),t._v(" "),a("el-table-column",{attrs:{label:"温度/°C"}},[a("el-table-column",{attrs:{width:"110",label:"蒸煮数显"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.cookingTemp,callback:function(a){t.$set(e.row,"cookingTemp",a)},expression:"scope.row.cookingTemp"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.cookingMachineTemp,callback:function(a){t.$set(e.row,"cookingMachineTemp",a)},expression:"scope.row.cookingMachineTemp"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("蒸煮机械")])])],2),t._v(" "),a("el-table-column",{attrs:{width:"110",label:"上转阀冷却"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.upCooling,callback:function(a){t.$set(e.row,"upCooling",a)},expression:"scope.row.upCooling"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.downCooling,callback:function(a){t.$set(e.row,"downCooling",a)},expression:"scope.row.downCooling"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("下转阀冷却")])])],2)],1),t._v(" "),a("el-table-column",{attrs:{label:"操作人",prop:"changer",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作时间",prop:"changed",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{width:"50",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(a){return t.delrow(e.row)}}})]}}])})],1),t._v(" "),a("div",[a("div",{staticClass:"audit"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("异常情况记录")])]),t._v(" "),a("div",[a("el-input",{staticClass:"textarea",staticStyle:{width:"100%",height:"40px"},attrs:{type:"textarea",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.continuousCookingException,callback:function(e){t.$set(t.craftfrom,"continuousCookingException",e)},expression:"craftfrom.continuousCookingException"}})],1)])],1)]),t._v(" "),a("el-card",[a("div",{staticClass:"htitle"},[a("span",{staticClass:"lh32px"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 混合入曲控制")]),t._v(" "),a("el-button",{staticClass:"readyshiftBtn",staticStyle:{"margin-left":"30px"},attrs:{type:"text",name:"hunhear"}},[t._v("收起"),a("i",{staticClass:"el-icon-caret-top"})]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},on:{click:t.addhunhe}},[t._v(" + 新增")])],1),t._v(" "),a("div",{staticClass:"hunhearBox"},[a("el-table",{ref:"hunheTable",attrs:{"max-height":"267",border:"","header-row-class-name":"tableHead",data:t.hunheList,"row-class-name":t.rowDelFlag}},[a("el-table-column",{attrs:{width:"205"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-date-picker",{staticStyle:{width:"171px"},attrs:{type:"datetime",disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),placeholder:"选择时间",size:"small",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:e.row.guardDate,callback:function(a){t.$set(e.row,"guardDate",a)},expression:"scope.row.guardDate"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("观察时间")])])],2),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.mixtureTemp,callback:function(a){t.$set(e.row,"mixtureTemp",a)},expression:"scope.row.mixtureTemp"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("混合料/°C")])])],2),t._v(" "),a("el-table-column",{attrs:{label:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.inoculationTemp,callback:function(a){t.$set(e.row,"inoculationTemp",a)},expression:"scope.row.inoculationTemp"}})]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("接种/°C")])])],2),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.cookingFeel,callback:function(a){t.$set(e.row,"cookingFeel",a)},expression:"scope.row.cookingFeel"}},[a("el-option",{attrs:{value:"良好",label:"良好"}}),t._v(" "),a("el-option",{attrs:{value:"异常",label:"异常"}})],1)]}}])},[a("template",{slot:"header"},[a("i",{staticClass:"reqI"},[t._v("*")]),t._v(" "),a("span",[t._v("煮豆感官")])])],2),t._v(" "),a("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),size:"small"},model:{value:e.row.remark,callback:function(a){t.$set(e.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",disabled:!(t.isRedact&&"submit"!==t.craftfrom.status&&"checked"!==t.craftfrom.status),icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(a){return t.delrow(e.row)}}})]}}])})],1),t._v(" "),a("div",[a("div",{staticClass:"audit"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("异常情况记录")])]),t._v(" "),a("div",[a("el-input",{staticClass:"textarea",staticStyle:{width:"100%",height:"40px"},attrs:{type:"textarea",disabled:!(t.isRedact&&"submit"!==this.craftfrom.status&&"checked"!==this.craftfrom.status)},model:{value:t.craftfrom.blendException,callback:function(e){t.$set(t.craftfrom,"blendException",e)},expression:"craftfrom.blendException"}})],1)])],1)])],1)},staticRenderFns:[]};var n=a("C7Lr")(c,l,!1,function(t){a("rYiy")},"data-v-7a160fed",null);e.default=n.exports},rYiy:function(t,e){}});
//# sourceMappingURL=87.249d2781424131bb2d24.js.map