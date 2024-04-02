"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[3173],{58374:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(74165),a=n(15861),c=n(43144),s=n(15671),i=n(96675),u=n(74776),o=n.n(u),l=(0,c.Z)((function e(t){var n=this;(0,s.Z)(this,e),this.group="",this.getById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/".concat(n.group,"/").concat(t));case 2:if(1===(a=e.sent).code){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPaging=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o().stringify(t),e.next=3,i.Z.get("/".concat(n.group,"/paging?").concat(a));case 3:if(1===(c=e.sent).code){e.next=6;break}return e.abrupt("return",{});case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAll=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/".concat(n.group));case 2:if(1===(t=e.sent).code){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)}))),this.create=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("/".concat(n.group),t);case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,a){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("/".concat(n.group,"/").concat(t),a);case 2:return c=e.sent,e.abrupt("return",1===c.code);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.deleteById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("/".concat(n.group,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.group=t}))},73173:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(74165),a=n(15861),c=n(29439),s=n(47313),i=n(15508),u=n(66204),o=n(5900),l=n(59491),d=n(53469),f=n(1413),p=n(12008),h=n(96296),Z=n(66672),x=n(39180),v=n(77272),g=n(43144),m=n(15671),y=n(60136),S=n(27277),I=new(function(e){(0,y.Z)(n,e);var t=(0,S.Z)(n);function n(){return(0,m.Z)(this,n),t.call(this,"securities")}return(0,g.Z)(n)}(n(58374).Z)),w=n(46417),k={labelCol:{span:6},wrapperCol:{span:14}},C=function(e){var t=e.visible,n=e.handleOk,i=e.handleCancel,u=e.confirmLoading,o=e.id,l=p.Z.useForm(),d=(0,c.Z)(l,1)[0];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getById(o);case 2:(t=e.sent)&&d.setFieldsValue(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t&&o?e():d.setFieldsValue({priority:50})}),[t]),(0,w.jsx)(h.Z,{title:o?"\u66f4\u65b0\u8bbf\u95ee\u89c4\u5219":"\u65b0\u5efa\u8bbf\u95ee\u89c4\u5219",visible:t,maskClosable:!1,destroyOnClose:!0,onOk:function(){d.validateFields().then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:e.sent&&d.resetFields();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onCancel:function(){d.resetFields(),i()},confirmLoading:u,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,w.jsxs)(p.Z,(0,f.Z)((0,f.Z)({form:d},k),{},{children:[(0,w.jsx)(p.Z.Item,{name:"id",noStyle:!0,children:(0,w.jsx)(Z.Z,{hidden:!0})}),(0,w.jsx)(p.Z.Item,{label:"IP\u5730\u5740",name:"ip",rules:[{required:!0,message:"\u8bf7\u8f93\u5165IP\u5730\u5740"}],extra:"\u683c\u5f0f\u4e3a\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32, 0.0.0.0/0 \u5339\u914d\u6240\u6709\u3002\u4f8b\u5982: 192.168.0.1, 192.168.1.0/24, 192.168.2.0-192.168.2.20",children:(0,w.jsx)(Z.Z,{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165"})}),(0,w.jsx)(p.Z.Item,{label:"\u89c4\u5219",name:"rule",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u89c4\u5219"}],children:(0,w.jsxs)(x.ZP.Group,{onChange:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[(0,w.jsx)(x.ZP,{value:"allow",children:"\u5141\u8bb8"}),(0,w.jsx)(x.ZP,{value:"reject",children:"\u62d2\u7edd"})]})}),(0,w.jsx)(p.Z.Item,{label:"\u4f18\u5148\u7ea7",name:"priority",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f18\u5148\u7ea7"}],extra:"\u4f18\u5148\u7ea7\u53ef\u9009\u8303\u56f4\u4e3a 1-100 (\u6570\u503c\u8d8a\u5c0f\u8d8a\u4f18\u5148)",children:(0,w.jsx)(v.Z,{min:1,max:100})})]}))})},b=n(88928),j=n(87591),E=I,O=i.Z.Content,T=s.createRef(),A=function(){var e=(0,s.useState)(!1),t=(0,c.Z)(e,2),n=t[0],i=t[1],f=(0,s.useState)(!1),p=(0,c.Z)(f,2),h=p[0],Z=p[1],x=(0,s.useState)(void 0),v=(0,c.Z)(x,2),g=v[0],m=v[1],y=(0,b.T)(b.Z.ACCESS_SECURITY),S=(0,c.Z)(y,2),I=S[0],k=S[1],A=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"IP",dataIndex:"ip",key:"ip",sorter:!0},{title:"\u89c4\u5219",dataIndex:"rule",key:"rule",hideInSearch:!0,render:function(e){return"allow"===e?(0,w.jsx)(u.Z,{color:"green",children:"\u5141\u8bb8"}):(0,w.jsx)(u.Z,{color:"red",children:"\u7981\u6b62"})}},{title:"\u4f18\u5148\u7ea7",dataIndex:"priority",key:"priority",sorter:!0,hideInSearch:!0},{title:"\u6765\u6e90",dataIndex:"source",key:"source",hideInSearch:!0},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:function(e,t,n,c){return[(0,w.jsx)(j.Z,{menu:"access-security-edit",children:(0,w.jsx)("a",{onClick:function(){i(!0),m(t.id)},children:"\u7f16\u8f91"},"edit")},"access-security-edit"),(0,w.jsx)(j.Z,{menu:"access-security-del",children:(0,w.jsx)(o.Z,{title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664\u6b64\u884c\u5417?",onConfirm:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteById(t.id);case 2:T.current.reload();case 3:case"end":return e.stop()}}),e)}))),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:(0,w.jsx)("a",{className:"danger",children:"\u5220\u9664"},"delete")},"confirm-delete")},"access-security-del")]}}];return(0,w.jsx)("div",{children:(0,w.jsxs)(O,{className:"page-container",children:[(0,w.jsx)(d.Z,{columns:A,actionRef:T,columnsState:{value:I,onChange:k},request:(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,c,s,i,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1?u[1]:void 0,u.length>2?u[2]:void 0,a="",c="",Object.keys(n).length>0&&(a=Object.keys(n)[0],c=Object.values(n)[0]),s={pageIndex:t.current,pageSize:t.pageSize,name:t.name,field:a,order:c},e.next=9,E.getPaging(s);case 9:return i=e.sent,e.abrupt("return",{data:i.items,success:!0,total:i.total});case 11:case"end":return e.stop()}}),e)}))),rowKey:"id",search:{labelWidth:"auto"},pagination:{pageSize:10},dateFormatter:"string",headerTitle:"\u8bbf\u95ee\u89c4\u5219\u5217\u8868",toolBarRender:function(){return[(0,w.jsx)(j.Z,{menu:"access-security-add",children:(0,w.jsx)(l.Z,{type:"primary",onClick:function(){i(!0)},children:"\u65b0\u5efa"},"button")})]}}),(0,w.jsx)(C,{id:g,visible:n,confirmLoading:h,handleCancel:function(){i(!1),m(void 0)},handleOk:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(!0),e.prev=1,!t.id){e.next=8;break}return e.next=5,E.updateById(t.id,t);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,E.create(t);case 10:n=e.sent;case 11:n&&i(!1),T.current.reload();case 13:return e.prev=13,Z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,,13,16]])})));return function(t){return e.apply(this,arguments)}}()})]})})}},87591:function(e,t,n){var r=n(93433),a=n(15253);t.Z=function(e){var t=e.menu,n=e.children;if(Array.isArray(t)){if(a.c1.apply(void 0,(0,r.Z)(t)))return n}else if((0,a.c1)(t))return n}},88928:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(29439),a=n(43144),c=n(15671),s=n(99925),i=n(47313),u=new((0,a.Z)((function e(){(0,c.Z)(this,e),this.ASSET="cs-asset",this.CREDENTIAL="cs-credential",this.COMMAND="cs-command",this.ACCESS_GATEWAY="cs-access-gateway",this.ONLINE_SESSION="cs-online-session",this.OFFLINE_SESSION="cs-offline-session",this.LOGIN_LOG="cs-login-log",this.STORAGE_LOG="cs-storage-log",this.JOB="cs-job",this.STORAGE="cs-storage",this.LOGIN_POLICY="cs-login-policy",this.ACCESS_SECURITY="cs-access-security",this.USER="cs-user",this.ROLE="cs-role",this.USER_GROUP="cs-user-group",this.COMMAND_FILTER="cs-command-filter",this.STRATEGY="cs-strategy"})));t.Z=u;var o=function(e){var t=(0,i.useState)(l(e)),n=(0,r.Z)(t,2),a=n[0],c=n[1];return[a,function(t){new Promise((function(e){c(t),e(t)})).then((function(t){d(e,t)}))}]},l=function(e){switch(e){case u.ASSET:case u.CREDENTIAL:case u.COMMAND:case u.ACCESS_GATEWAY:case u.ONLINE_SESSION:case u.OFFLINE_SESSION:}return f(e,{})},d=function(e,t){localStorage.setItem(e,JSON.stringify(t))},f=function(e,t){var n=localStorage.getItem(e);if(!s.Z.hasText(n))return t;try{return JSON.parse(n)}catch(r){return t}}},99925:function(e,t,n){var r=n(43144),a=n(15671),c=new((0,r.Z)((function e(){(0,a.Z)(this,e),this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}})));t.Z=c}}]);