"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[3709],{58374:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(74165),a=n(15861),c=n(43144),i=n(15671),s=n(96675),u=n(74776),o=n.n(u),d=(0,c.Z)((function e(t){var n=this;(0,i.Z)(this,e),this.group="",this.getById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(n.group,"/").concat(t));case 2:if(1===(a=e.sent).code){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPaging=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o().stringify(t),e.next=3,s.Z.get("/".concat(n.group,"/paging?").concat(a));case 3:if(1===(c=e.sent).code){e.next=6;break}return e.abrupt("return",{});case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAll=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(n.group));case 2:if(1===(t=e.sent).code){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)}))),this.create=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/".concat(n.group),t);case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,a){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/".concat(n.group,"/").concat(t),a);case 2:return c=e.sent,e.abrupt("return",1===c.code);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.deleteById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/".concat(n.group,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.group=t}))},53485:function(e,t,n){var r=n(74165),a=n(15861),c=n(43144),i=n(15671),s=n(60136),u=n(27277),o=n(58374),d=n(96675),l=new(function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this,"strategies")).GetAll=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.Z.get("/".concat(e.group));case 2:if(1===(n=t.sent).code){t.next=5;break}return t.abrupt("return",[]);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)}))),e}return(0,c.Z)(n)}(o.Z));t.Z=l},73709:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(74165),a=n(15861),c=n(29439),i=n(47313),s=n(15508),u=n(66204),o=n(5900),d=n(59491),l=n(1413),h=n(12008),f=n(96296),p=n(66672),Z=n(50682),x=n(53485),m=n(46417),v=x.Z,g={labelCol:{span:6},wrapperCol:{span:14}},k=function(e){var t=e.visible,n=e.handleOk,s=e.handleCancel,u=e.confirmLoading,o=e.id,d=h.Z.useForm(),x=(0,c.Z)(d,1)[0];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getById(o);case 2:(t=e.sent)&&x.setFieldsValue(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t&&o?e():x.setFieldsValue({upload:!1,download:!1,edit:!1,delete:!1,rename:!1,copy:!1,paste:!1})}),[t]),(0,m.jsx)(f.Z,{title:o?"\u66f4\u65b0\u6388\u6743\u7b56\u7565":"\u65b0\u5efa\u6388\u6743\u7b56\u7565",visible:t,maskClosable:!1,destroyOnClose:!0,onOk:function(){x.validateFields().then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:e.sent&&x.resetFields();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onCancel:function(){x.resetFields(),s()},confirmLoading:u,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,m.jsxs)(h.Z,(0,l.Z)((0,l.Z)({form:x},g),{},{children:[(0,m.jsx)(h.Z.Item,{name:"id",noStyle:!0,children:(0,m.jsx)(p.Z,{hidden:!0})}),(0,m.jsx)(h.Z.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}],children:(0,m.jsx)(p.Z,{autoComplete:"off",placeholder:"\u6388\u6743\u7b56\u7565\u540d\u79f0"})}),(0,m.jsx)(h.Z.Item,{label:"\u4e0a\u4f20",name:"upload",rules:[{required:!0}],valuePropName:"checked",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,m.jsx)(h.Z.Item,{label:"\u4e0b\u8f7d",name:"download",rules:[{required:!0}],valuePropName:"checked",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,m.jsx)(h.Z.Item,{label:"\u7f16\u8f91",name:"edit",rules:[{required:!0}],valuePropName:"checked",tooltip:"\u7f16\u8f91\u9700\u8981\u5148\u5f00\u542f\u4e0b\u8f7d",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,m.jsx)(h.Z.Item,{label:"\u5220\u9664",name:"delete",rules:[{required:!0}],valuePropName:"checked",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,m.jsx)(h.Z.Item,{label:"\u91cd\u547d\u540d",name:"rename",rules:[{required:!0}],valuePropName:"checked",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,m.jsx)(h.Z.Item,{label:"\u590d\u5236",name:"copy",rules:[{required:!0}],valuePropName:"checked",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})}),(0,m.jsx)(h.Z.Item,{label:"\u7c98\u8d34",name:"paste",rules:[{required:!0}],valuePropName:"checked",children:(0,m.jsx)(Z.Z,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})})]}))})},y=n(53469),I=n(2135),S=n(88928),C=n(15253),j=n(87591),b=x.Z,w=s.Z.Content,O=i.createRef(),E=function(e){return!0===e?(0,m.jsx)(u.Z,{color:"green",children:"\u5f00\u542f"}):(0,m.jsx)(u.Z,{color:"red",children:"\u5173\u95ed"})},N=function(){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),n=t[0],s=t[1],u=(0,i.useState)(!1),l=(0,c.Z)(u,2),h=l[0],f=l[1],p=(0,i.useState)(void 0),Z=(0,c.Z)(p,2),x=Z[0],v=Z[1],g=(0,S.T)(S.Z.STRATEGY),N=(0,c.Z)(g,2),T=N[0],A=N[1],L=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u540d\u79f0",dataIndex:"name",key:"name",sorter:!0,render:function(e,t){var n=(0,m.jsx)("div",{children:e});return(0,C.c1)("strategy-detail")&&(n=(0,m.jsx)(I.rU,{to:"/strategy/".concat(t.id),children:e})),n}},{title:"\u4e0a\u4f20",dataIndex:"upload",key:"upload",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u4e0b\u8f7d",dataIndex:"download",key:"download",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u7f16\u8f91",dataIndex:"edit",key:"edit",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u5220\u9664",dataIndex:"delete",key:"delete",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u91cd\u547d\u540d",dataIndex:"rename",key:"rename",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u590d\u5236",dataIndex:"copy",key:"copy",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u7c98\u8d34",dataIndex:"paste",key:"paste",hideInSearch:!0,render:function(e){return E(e)}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created",key:"created",hideInSearch:!0},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:function(e,t,n,c){return[(0,m.jsx)(j.Z,{menu:"strategy-detail",children:(0,m.jsx)(I.rU,{to:"/strategy/".concat(t.id),children:"\u8be6\u60c5"},"get")},"strategy-get"),(0,m.jsx)(j.Z,{menu:"strategy-edit",children:(0,m.jsx)("a",{onClick:function(){s(!0),v(t.id)},children:"\u7f16\u8f91"},"edit")},"strategy-edit"),(0,m.jsx)(j.Z,{menu:"strategy-del",children:(0,m.jsx)(o.Z,{title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664\u6b64\u884c\u5417?",onConfirm:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.deleteById(t.id);case 2:O.current.reload();case 3:case"end":return e.stop()}}),e)}))),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:(0,m.jsx)("a",{className:"danger",children:"\u5220\u9664"},"delete")},"confirm-delete")},"strategy-del")]}}];return(0,m.jsx)("div",{children:(0,m.jsxs)(w,{className:"page-container",children:[(0,m.jsx)(y.Z,{columns:L,actionRef:O,columnsState:{value:T,onChange:A},request:(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,c,i,s,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1?u[1]:void 0,u.length>2?u[2]:void 0,a="",c="",Object.keys(n).length>0&&(a=Object.keys(n)[0],c=Object.values(n)[0]),i={pageIndex:t.current,pageSize:t.pageSize,name:t.name,field:a,order:c},e.next=9,b.getPaging(i);case 9:return s=e.sent,e.abrupt("return",{data:s.items,success:!0,total:s.total});case 11:case"end":return e.stop()}}),e)}))),rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:10},dateFormatter:"string",headerTitle:"\u6388\u6743\u7b56\u7565",toolBarRender:function(){return[(0,m.jsx)(j.Z,{menu:"strategy-add",children:(0,m.jsx)(d.Z,{type:"primary",onClick:function(){s(!0)},children:"\u65b0\u5efa"},"button")})]}}),(0,m.jsx)(k,{id:x,visible:n,confirmLoading:h,handleCancel:function(){s(!1),v(void 0)},handleOk:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),e.prev=1,!t.id){e.next=8;break}return e.next=5,b.updateById(t.id,t);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,b.create(t);case 10:n=e.sent;case 11:n&&s(!1),O.current.reload();case 13:return e.prev=13,f(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,,13,16]])})));return function(t){return e.apply(this,arguments)}}()})]})})}},87591:function(e,t,n){var r=n(93433),a=n(15253);t.Z=function(e){var t=e.menu,n=e.children;if(Array.isArray(t)){if(a.c1.apply(void 0,(0,r.Z)(t)))return n}else if((0,a.c1)(t))return n}},88928:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(29439),a=n(43144),c=n(15671),i=n(99925),s=n(47313),u=new((0,a.Z)((function e(){(0,c.Z)(this,e),this.ASSET="cs-asset",this.CREDENTIAL="cs-credential",this.COMMAND="cs-command",this.ACCESS_GATEWAY="cs-access-gateway",this.ONLINE_SESSION="cs-online-session",this.OFFLINE_SESSION="cs-offline-session",this.LOGIN_LOG="cs-login-log",this.STORAGE_LOG="cs-storage-log",this.JOB="cs-job",this.STORAGE="cs-storage",this.LOGIN_POLICY="cs-login-policy",this.ACCESS_SECURITY="cs-access-security",this.USER="cs-user",this.ROLE="cs-role",this.USER_GROUP="cs-user-group",this.COMMAND_FILTER="cs-command-filter",this.STRATEGY="cs-strategy"})));t.Z=u;var o=function(e){var t=(0,s.useState)(d(e)),n=(0,r.Z)(t,2),a=n[0],c=n[1];return[a,function(t){new Promise((function(e){c(t),e(t)})).then((function(t){l(e,t)}))}]},d=function(e){switch(e){case u.ASSET:case u.CREDENTIAL:case u.COMMAND:case u.ACCESS_GATEWAY:case u.ONLINE_SESSION:case u.OFFLINE_SESSION:}return h(e,{})},l=function(e,t){localStorage.setItem(e,JSON.stringify(t))},h=function(e,t){var n=localStorage.getItem(e);if(!i.Z.hasText(n))return t;try{return JSON.parse(n)}catch(r){return t}}},99925:function(e,t,n){var r=n(43144),a=n(15671),c=new((0,r.Z)((function e(){(0,a.Z)(this,e),this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}})));t.Z=c}}]);