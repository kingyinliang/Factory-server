webpackJsonp([6],{MepE:function(e,t){},bb7G:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Lna1"),i={data:function(){return{}},computed:{documentClientHeight:{get:function(){return this.$store.state.common.documentClientHeight}},menuActiveName:{get:function(){return this.$store.state.common.menuActiveName},set:function(e){this.$store.commit("common/updateMenuActiveName",e)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(e){this.$store.commit("common/updateMainTabs",e)}},mainTabsActiveName:{get:function(){return this.$store.state.common.mainTabsActiveName},set:function(e){this.$store.commit("common/updateMainTabsActiveName",e)}},siteContentViewHeight:function(){var e=this.documentClientHeight-50-30-2;return this.$route.meta.isTab?(e-=40,Object(a.h)(this.$route.meta.iframeUrl)?{height:e+"px"}:{minHeight:e+"px"}):{minHeight:e+"px"}}},methods:{selectedTabHandle:function(e){(e=this.mainTabs.filter(function(t){return t.name===e.name})).length>=1&&this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this;"DataEntry-Packaging-ProDataIn"===e?this.$confirm("为防止数据丢失请保存后关闭, 是否继续?","关闭",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.mainTabs=t.mainTabs.filter(function(t){return t.name!==e}),t.mainTabs.length>=1?e===t.mainTabsActiveName&&t.$router.push({name:t.mainTabs[t.mainTabs.length-1].name},function(){t.mainTabsActiveName=t.$route.name}):(t.menuActiveName="",t.$router.push({name:"home"}))}):(this.mainTabs=this.mainTabs.filter(function(t){return t.name!==e}),this.mainTabs.length>=1?e===this.mainTabsActiveName&&this.$router.push({name:this.mainTabs[this.mainTabs.length-1].name},function(){t.mainTabsActiveName=t.$route.name}):(this.menuActiveName="",this.$router.push({name:"home"})))},tabsCloseCurrentHandle:function(){this.removeTabHandle(this.mainTabsActiveName)},tabsCloseOtherHandle:function(){var e=this;this.mainTabs=this.mainTabs.filter(function(t){return t.name===e.mainTabsActiveName})},tabsCloseAllHandle:function(){this.mainTabs=[],this.menuActiveName="",this.$router.push({name:"home"})},tabsRefreshCurrentHandle:function(){var e=this,t=this.mainTabsActiveName;this.removeTabHandle(t),this.$nextTick(function(){e.$router.push({name:t})})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"site-content",class:{"site-content--tabs":e.$route.meta.isTab}},[e.$route.meta.isTab?n("el-tabs",{attrs:{closable:!0},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.mainTabsActiveName,callback:function(t){e.mainTabsActiveName=t},expression:"mainTabsActiveName"}},[n("el-dropdown",{staticClass:"site-tabs__tools",attrs:{"show-timeout":0}},[n("i",{staticClass:"el-icon-arrow-down el-icon--right"}),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(t){return e.tabsCloseCurrentHandle(t)}}},[e._v("关闭当前标签页")]),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){return e.tabsCloseOtherHandle(t)}}},[e._v("关闭其它标签页")]),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){return e.tabsCloseAllHandle(t)}}},[e._v("关闭全部标签页")]),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){return e.tabsRefreshCurrentHandle(t)}}},[e._v("刷新当前标签页")])],1)],1),e._v(" "),e._l(e.mainTabs,function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},["iframe"===t.type?n("iframe",{attrs:{src:t.iframeUrl,width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[t.name===e.mainTabsActiveName?n("router-view"):e._e()],1)],1)})],2):n("keep-alive",[n("div",{attrs:{"body-style":e.siteContentViewHeight}},[n("router-view")],1)]),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("p",[this._v("Copyright @ 2018 烟台欣和企业食品有限公司版权所有")])])}]};var o=n("C7Lr")(i,s,!1,function(e){n("MepE")},"data-v-692eb14f",null);t.default=o.exports}});
//# sourceMappingURL=6.b3b885bad28c3727c0d2.js.map