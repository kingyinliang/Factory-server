webpackJsonp([82],{bt4L:function(e,t){},nZq4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("P9l9"),o={name:"Germs",data:function(){return{GermsDate:[]}},props:{isRedact:{}},mounted:function(){this.GetProductShift()},methods:{UpdateGerms:function(e,t,a){var o=this;this.GermsDate.length>0?(this.GermsDate.forEach(function(t){t.orderId=e}),this.$http(""+l.h.PKGGERMSUPDATE_API,"POST",this.GermsDate).then(function(e){var t=e.data;0===t.code||o.$message.error("修改待杀菌数量"+t.msg),a&&a("resolve")})):a&&a("resolve")},GetpkgGerms:function(e){var t=this;this.$http(""+l.h.PKGGERMSLIST_API,"POST",{order_id:e}).then(function(e){var a=e.data;0===a.code?t.GermsDate=a.listForm:t.$message.error(a.msg)})},GetProductShift:function(){var e=this;this.$http(l.k.PARAMETERLIST_API+"?type=product_shift","POST").then(function(t){var a=t.data;0===a.code?e.productShift=a.dicList:e.$message.error(a.msg)})},dellistbomS:function(e){e.delFlag="1"},AddGermsDate:function(e){e.push({id:"",washing:0,changeProduct:0,bootHeader:0,badMaterial:0,badProduct:0,badSemi:0,deviceLoss:0,delFlag:"0"})},RowDelFlag:function(e){var t=e.row;e.rowIndex;return"1"===t.delFlag?"rowDel":""}},computed:{GermsNum:function(){var e=0;return this.GermsDate.forEach(function(t){e+="0"===t.delFlag?1e3*t.washing+1e3*t.changeProduct+1e3*t.bootHeader+1e3*t.badMaterial+1e3*t.badProduct+1e3*t.badSemi+1e3*t.deviceLoss:0}),e/1e3}},components:{}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"clearfix topBox"},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small",disabled:!e.isRedact},on:{click:function(t){return e.AddGermsDate(e.GermsDate)}}},[e._v("新增")])],1),e._v(" "),a("el-table",{ref:"table1",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{"header-row-class-name":"tableHead",data:e.GermsDate,"row-class-name":e.RowDelFlag,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",width:"55",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{label:"白/中/夜班"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择",disabled:!e.isRedact,size:"small"},model:{value:t.row.classType,callback:function(a){e.$set(t.row,"classType",a)},expression:"scope.row.classType"}},e._l(e.productShift,function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.code}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"清洗冲顶"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number",min:"0"},model:{value:t.row.washing,callback:function(a){e.$set(t.row,"washing",a)},expression:"scope.row.washing"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"换产冲顶"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number",min:"0"},model:{value:t.row.changeProduct,callback:function(a){e.$set(t.row,"changeProduct",a)},expression:"scope.row.changeProduct"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"开机冲顶"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number",min:"0"},model:{value:t.row.bootHeader,callback:function(a){e.$set(t.row,"bootHeader",a)},expression:"scope.row.bootHeader"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"包材不良"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number"},model:{value:t.row.badMaterial,callback:function(a){e.$set(t.row,"badMaterial",a)},expression:"scope.row.badMaterial"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"制程不良",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number",min:"0"},model:{value:t.row.badProduct,callback:function(a){e.$set(t.row,"badProduct",a)},expression:"scope.row.badProduct"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"半成品物料不合格",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number",min:"0"},model:{value:t.row.badSemi,callback:function(a){e.$set(t.row,"badSemi",a)},expression:"scope.row.badSemi"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备残留",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small",type:"number",min:"0"},model:{value:t.row.deviceLoss,callback:function(a){e.$set(t.row,"deviceLoss",a)},expression:"scope.row.deviceLoss"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!e.isRedact,placeholder:"手工录入",size:"small"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small",disabled:!e.isRedact},on:{click:function(a){return e.dellistbomS(t.row)}}})]}}])})],1),e._v(" "),a("div",[a("p",{staticStyle:{"line-height":"52px","font-size":"14px"}},[e._v("待杀菌数量（L）："+e._s(e.GermsNum))])])],1)},staticRenderFns:[]};var s=a("C7Lr")(o,r,!1,function(e){a("bt4L")},"data-v-97e2f85a",null);t.default=s.exports}});
//# sourceMappingURL=82.2fac52efd27dba225360.js.map