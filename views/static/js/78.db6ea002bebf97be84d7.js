webpackJsonp([78],{"8BUE":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("P9l9"),l=s("Lna1"),r={name:"UserManage",data:function(){return{filterMethod:function(e,t){return t.screncon.indexOf(e)>-1},roleId:"",userlist:[],selctId:[],type:!0,visible:!1}},mounted:function(){},methods:{init:function(e){var t=this;this.roleId=e,this.$http(""+i.k.ROLEUSER_API,"POST",{roleId:e}).then(function(e){var s=e.data;0===s.code?(t.userlist=Object(l.l)(s.list).res,t.selctId=Object(l.l)(s.list).selcedid):t.$message.error(s.msg),t.visible=!0})},updatauser:function(){var e=this;this.type?(this.type=!1,this.$http(""+i.k.ROLEUSERUPDATE_API,"POST",{roleId:this.roleId,userId:this.selctId}).then(function(t){var s=t.data;console.log(s),0===s.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.type=!0,e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(s.msg)})):this.$message.error("请分配人员")}},computed:{},components:{}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:"人员管理","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[s("div",[s("el-row",[s("el-transfer",{attrs:{filterable:"",titles:["未分配人员","已分配人员"],"filter-method":e.filterMethod,"filter-placeholder":"请输入用户名称",data:e.userlist},model:{value:e.selctId,callback:function(t){e.selctId=t},expression:"selctId"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.updatauser}},[e._v("确定")])],1)])},staticRenderFns:[]};var n=s("C7Lr")(r,o,!1,function(e){s("xkuj")},"data-v-ac642f3c",null);t.default=n.exports},xkuj:function(e,t){}});
//# sourceMappingURL=78.db6ea002bebf97be84d7.js.map