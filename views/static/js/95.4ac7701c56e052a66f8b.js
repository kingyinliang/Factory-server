webpackJsonp([95],{"7ULb":function(e,t){},Wp7b:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("P9l9"),i={name:"RoleDept",data:function(){return{roleId:"",visible:!1,type:!0,OrgTree:[]}},mounted:function(){},methods:{init:function(e){var t=this;this.roleId=e,this.$http(""+o.c.ORGSTRUCTURE_API,"GET",{flag:"1"}).then(function(e){var s=e.data;console.log(s),0===s.code?t.OrgTree=s.deptList:t.$message.error(s.msg),t.visible=!0}).then(function(){t.$http(""+o.k.LISTDEPT_API,"POST",{roleId:e}).then(function(e){var s=e.data;console.log(s),0===s.code?t.$refs.deptListTree.setCheckedKeys(s.list):t.$message.error(s.msg)})})},dataFormSubmit:function(){var e=this;this.type&&(this.type=!1,this.$http(""+o.k.ROLEDEPTUPDATE_API,"POST",{roleId:this.roleId,deptId:[[].concat(this.$refs.deptListTree.getCheckedKeys()),[].concat(this.$refs.deptListTree.getHalfCheckedKeys())]}).then(function(t){var s=t.data;console.log(s),0===s.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.type=!0,e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(s.msg),e.visible=!0}))}},computed:{},components:{}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:"部门分配","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[s("div",{staticStyle:{height:"300px",overflow:"auto"}},[s("el-tree",{ref:"deptListTree",attrs:{data:e.OrgTree,"node-key":"deptId","default-expand-all":!0,"show-checkbox":""}})],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.dataFormSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var n=s("C7Lr")(i,r,!1,function(e){s("7ULb")},"data-v-652bd0d8",null);t.default=n.exports}});
//# sourceMappingURL=95.4ac7701c56e052a66f8b.js.map