webpackJsonp([10,78,89,95,103],{"5yZh":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("P9l9"),a={name:"addRole",data:function(){return{roleId:"",visible:!1,dataForm:{roleId:"",roleName:"",roleCode:""},type:!0}},mounted:function(){},methods:{init:function(e){e?(this.roleId=e.roleId,this.dataForm.roleId=e.roleId,this.dataForm.roleName=e.roleName,this.dataForm.roleCode=e.roleCode):(this.roleId="",this.dataForm={}),this.visible=!0},dataFormSubmit:function(){var e=this;this.type&&(this.type=!1,this.$http(""+(this.roleId?r.k.ROLEUPDATE_API:r.k.ROLEADD_API),"POST",this.dataForm).then(function(t){var o=t.data;console.log(o),0===o.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.type=!0,e.visible=!1,e.$emit("refreshDataList")}}):(e.type=!0,e.$message.error(o.msg))}))}},computed:{},components:{}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.roleId?"修改角色信息":"新增角色","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[o("div",[o("el-form",{ref:"dataForm",attrs:{model:e.dataForm,"label-width":"85px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[o("el-form-item",{attrs:{label:"角色名称："}},[o("el-input",{attrs:{placeholder:"手动输入"},model:{value:e.dataForm.roleName,callback:function(t){e.$set(e.dataForm,"roleName",t)},expression:"dataForm.roleName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"描述："}},[o("el-input",{attrs:{placeholder:"手动输入"},model:{value:e.dataForm.roleCode,callback:function(t){e.$set(e.dataForm,"roleCode",t)},expression:"dataForm.roleCode"}})],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.dataFormSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var s=o("C7Lr")(a,i,!1,function(e){o("uzdC")},"data-v-46ddbbbe",null);t.default=s.exports},"7ULb":function(e,t){},"8BUE":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("P9l9"),a=o("Lna1"),i={name:"UserManage",data:function(){return{filterMethod:function(e,t){return t.screncon.indexOf(e)>-1},roleId:"",userlist:[],selctId:[],type:!0,visible:!1}},mounted:function(){},methods:{init:function(e){var t=this;this.roleId=e,this.$http(""+r.k.ROLEUSER_API,"POST",{roleId:e}).then(function(e){var o=e.data;0===o.code?(t.userlist=Object(a.l)(o.list).res,t.selctId=Object(a.l)(o.list).selcedid):t.$message.error(o.msg),t.visible=!0})},updatauser:function(){var e=this;this.type?(this.type=!1,this.$http(""+r.k.ROLEUSERUPDATE_API,"POST",{roleId:this.roleId,userId:this.selctId}).then(function(t){var o=t.data;console.log(o),0===o.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.type=!0,e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(o.msg)})):this.$message.error("请分配人员")}},computed:{},components:{}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"人员管理","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[o("div",[o("el-row",[o("el-transfer",{attrs:{filterable:"",titles:["未分配人员","已分配人员"],"filter-method":e.filterMethod,"filter-placeholder":"请输入用户名称",data:e.userlist},model:{value:e.selctId,callback:function(t){e.selctId=t},expression:"selctId"}})],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.updatauser}},[e._v("确定")])],1)])},staticRenderFns:[]};var n=o("C7Lr")(i,s,!1,function(e){o("xkuj")},"data-v-ac642f3c",null);t.default=n.exports},"9Boy":function(e,t){},"JsJ/":function(e,t){},Msdj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Lna1"),a=o("P9l9"),i={name:"RoleAdd",data:function(){return{visible:!1,menuList:[],menuListTreeProps:{label:"name",children:"children"},type:!0}},mounted:function(){},methods:{init:function(e){var t=this;this.roleId=e,this.$http(""+a.g.MENULIST_API,"GET",{}).then(function(e){var o=e.data;console.log(o),t.menuList=Object(r.m)(o,"menuId")}).then(function(){t.visible=!0}).then(function(){t.$http(""+a.k.LISTMENU_API,"POST",{roleId:e}).then(function(e){var o=e.data;0===o.code?t.$refs.menuListTree.setCheckedKeys(o.list):t.$message.error(o.msg)})})},dataFormSubmit:function(){var e=this;this.type&&(this.type=!1,this.$http(""+a.k.ROLEMENUUPDATE_API,"POST",{roleId:this.roleId,menuId:[[].concat(this.$refs.menuListTree.getCheckedKeys()),[].concat(this.$refs.menuListTree.getHalfCheckedKeys())]}).then(function(t){var o=t.data;console.log(o),0===o.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.type=!0,e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(o.msg)}))}},computed:{},components:{}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"功能分配","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[o("div",{staticStyle:{height:"300px",overflow:"auto"}},[o("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"expand-on-click-node":!1,"show-checkbox":""}})],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.dataFormSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var n=o("C7Lr")(i,s,!1,function(e){o("JsJ/")},"data-v-7672e0e3",null);t.default=n.exports},Wp7b:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("P9l9"),a={name:"RoleDept",data:function(){return{roleId:"",visible:!1,type:!0,OrgTree:[]}},mounted:function(){},methods:{init:function(e){var t=this;this.roleId=e,this.$http(""+r.c.ORGSTRUCTURE_API,"GET",{flag:"1"}).then(function(e){var o=e.data;console.log(o),0===o.code?t.OrgTree=o.deptList:t.$message.error(o.msg),t.visible=!0}).then(function(){t.$http(""+r.k.LISTDEPT_API,"POST",{roleId:e}).then(function(e){var o=e.data;console.log(o),0===o.code?t.$refs.deptListTree.setCheckedKeys(o.list):t.$message.error(o.msg)})})},dataFormSubmit:function(){var e=this;this.type&&(this.type=!1,this.$http(""+r.k.ROLEDEPTUPDATE_API,"POST",{roleId:this.roleId,deptId:[[].concat(this.$refs.deptListTree.getCheckedKeys()),[].concat(this.$refs.deptListTree.getHalfCheckedKeys())]}).then(function(t){var o=t.data;console.log(o),0===o.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.type=!0,e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(o.msg),e.visible=!0}))}},computed:{},components:{}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"部门分配","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[o("div",{staticStyle:{height:"300px",overflow:"auto"}},[o("el-tree",{ref:"deptListTree",attrs:{data:e.OrgTree,"node-key":"deptId","default-expand-all":!0,"show-checkbox":""}})],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.dataFormSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var s=o("C7Lr")(a,i,!1,function(e){o("7ULb")},"data-v-652bd0d8",null);t.default=s.exports},mC0T:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("mvHQ"),a=o.n(r),i=o("Msdj"),s=o("8BUE"),n=o("Wp7b"),l=o("5yZh"),d=o("P9l9"),c={name:"RoleManages",data:function(){return{addOrUpdateVisible1:!1,addOrUpdateVisible2:!1,addOrUpdateVisible3:!1,addOrUpdateVisible4:!1,form:{username:""},menuList:[],currPage:1,pageSize:10,totalCount:1,role:[]}},mounted:function(){this.GetRoleList()},methods:{indexMethod:function(e){return e+1+(1*this.currPage-1)*(1*this.pageSize)},GetRoleList:function(e){var t=this;e&&(this.currPage=1),this.$http(""+d.k.ROLELIST_API,"POST",{roleName:this.form.username,currPage:a()(this.currPage),pageSize:a()(this.pageSize)}).then(function(e){var o=e.data;console.log(o),0===o.code?(t.role=o.page.list,t.currPage=o.page.currPage,t.pageSize=o.page.pageSize,t.totalCount=o.page.totalCount):t.$message.error(o.msg),t.addOrUpdateVisible1=!1,t.addOrUpdateVisible2=!1,t.addOrUpdateVisible3=!1,t.addOrUpdateVisible4=!1})},userManage:function(e){var t=this;this.addOrUpdateVisible2=!0,this.$nextTick(function(){t.$refs.usermanage.init(e)})},fnManage:function(e){var t=this;this.addOrUpdateVisible1=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},roleDept:function(e){var t=this;this.addOrUpdateVisible3=!0,this.$nextTick(function(){t.$refs.roleDept.init(e)})},roleAddOrUpdate:function(e){var t=this;this.addOrUpdateVisible4=!0,this.$nextTick(function(){t.$refs.roleaddorupdate.init(e)})},removes:function(e){var t=this;this.$confirm("确认删除该角色, 是否继续?","删除角色",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http(""+d.k.ROLEDEL_API,"POST",{roleId:e}).then(function(e){var o=e.data;console.log(o),0===o.code?(t.$message({type:"success",message:"删除成功!"}),t.GetRoleList()):t.$message.error(o.msg)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.pageSize=e,this.GetRoleList()},handleCurrentChange:function(e){this.currPage=e,this.GetRoleList()}},computed:{},components:{RoleAdd:i.default,UserManage:s.default,RoleDept:n.default,RoleAddOrUpdate:l.default}},u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-col",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.lodingStatus,expression:"lodingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"加载中"}},[o("div",{staticClass:"main"},[o("el-card",[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-form",{staticClass:"topforms",attrs:{inline:!0,model:e.form,size:"small","label-width":"85px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.GetRoleList(!0)}}},[o("el-form-item",{attrs:{label:"角色名称："}},[o("el-input",{attrs:{placeholder:"角色名称"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1)],1)],1),e._v(" "),o("el-col",{staticStyle:{width:"200px"}},[e.isAuth("sys:role:list")?o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.GetRoleList(!0)}}},[e._v("查询")]):e._e(),e._v(" "),e.isAuth("sys:role:save")?o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.roleAddOrUpdate()}}},[e._v("新增")]):e._e()],1)],1),e._v(" "),o("el-row",[o("el-table",{ref:"userlist",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{"header-row-class-name":"tableHead",data:e.role,border:"","tooltip-effect":"dark"}},[o("el-table-column",{attrs:{type:"selection",width:"34"}}),e._v(" "),o("el-table-column",{attrs:{type:"index",index:e.indexMethod,width:"55"}}),e._v(" "),o("el-table-column",{attrs:{prop:"roleName",label:"角色名称","show-overflow-tooltip":!0,width:""}}),e._v(" "),o("el-table-column",{attrs:{label:"操作",width:"320"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("sys:role:updateuser")?o("a",{on:{click:function(o){return e.userManage(t.row.roleId)}}},[e._v("人员管理")]):e._e(),e._v(" "),e.isAuth("sys:role:updatemenu")?o("a",{on:{click:function(o){return e.fnManage(t.row.roleId)}}},[e._v("功能分配")]):e._e(),e._v(" "),e.isAuth("sys:role:updatedept")?o("a",{on:{click:function(o){return e.roleDept(t.row.roleId)}}},[e._v("部门分配")]):e._e(),e._v(" "),e.isAuth("sys:role:update")?o("a",{on:{click:function(o){return e.roleAddOrUpdate(t.row)}}},[e._v("修改角色")]):e._e(),e._v(" "),e.isAuth("sys:role:delete")?o("a",{on:{click:function(o){return e.removes(t.row.roleId)}}},[e._v("删除角色")]):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"creator",label:"创建人","show-overflow-tooltip":!0,width:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"created",label:"创建时间",width:"160"}}),e._v(" "),o("el-table-column",{attrs:{prop:"changer",label:"修改人","show-overflow-tooltip":!0,width:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"changed",label:"修改时间",width:"160"}})],1)],1),e._v(" "),o("el-row",[o("el-pagination",{attrs:{"current-page":e.currPage,"page-sizes":[10,15,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1),e._v(" "),e.addOrUpdateVisible1?o("role-add",{ref:"addOrUpdate",on:{refreshDataList:function(t){return e.GetRoleList()}}}):e._e(),e._v(" "),e.addOrUpdateVisible2?o("user-manage",{ref:"usermanage",on:{refreshDataList:function(t){return e.GetRoleList()}}}):e._e(),e._v(" "),e.addOrUpdateVisible3?o("role-dept",{ref:"roleDept",on:{refreshDataList:function(t){return e.GetRoleList()}}}):e._e(),e._v(" "),e.addOrUpdateVisible4?o("role-add-or-update",{ref:"roleaddorupdate",on:{refreshDataList:function(t){return e.GetRoleList()}}}):e._e()],1)},staticRenderFns:[]};var f=o("C7Lr")(c,u,!1,function(e){o("9Boy")},"data-v-421f6181",null);t.default=f.exports},uzdC:function(e,t){},xkuj:function(e,t){}});
//# sourceMappingURL=10.cbc254babe7206438003.js.map