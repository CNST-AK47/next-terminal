"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[9426],{58374:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(74165),a=n(15861),s=n(43144),c=n(15671),i=n(96675),u=n(74776),o=n.n(u),l=(0,s.Z)((function e(t){var n=this;(0,c.Z)(this,e),this.group="",this.getById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/".concat(n.group,"/").concat(t));case 2:if(1===(a=e.sent).code){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPaging=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o().stringify(t),e.next=3,i.Z.get("/".concat(n.group,"/paging?").concat(a));case 3:if(1===(s=e.sent).code){e.next=6;break}return e.abrupt("return",{});case 6:return e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAll=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/".concat(n.group));case 2:if(1===(t=e.sent).code){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)}))),this.create=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("/".concat(n.group),t);case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,a){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("/".concat(n.group,"/").concat(t),a);case 2:return s=e.sent,e.abrupt("return",1===s.code);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.deleteById=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("/".concat(n.group,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.group=t}))},827:function(e,t,n){var r=n(74165),a=n(15861),s=n(43144),c=n(15671),i=n(60136),u=n(27277),o=n(58374),l=n(96675),d=new(function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this,"credentials")).getAll=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.get("/".concat(e.group));case 2:if(1===(n=t.sent).code){t.next=5;break}return t.abrupt("return",[]);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)}))),e}return(0,s.Z)(n)}(o.Z));t.Z=d},99426:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(74165),a=n(15861),s=n(29439),c=n(47313),i=n(15508),u=n(66204),o=n(5900),l=n(59491),d=n(53469),p=n(827),f=n(1413),h=n(66672),Z=n(12008),x=n(96296),m=n(74294),v=n(46417),g=h.Z.TextArea,y=p.Z,S=[{text:"\u5bc6\u7801",value:"custom"},{text:"\u5bc6\u94a5",value:"private-key"}],w=function(e){var t=e.visible,n=e.handleOk,i=e.handleCancel,u=e.confirmLoading,o=e.id,l=Z.Z.useForm(),d=(0,s.Z)(l,1)[0],p=(0,c.useState)(""),w=(0,s.Z)(p,2),I=w[0],k=w[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getById(o);case 2:(t=e.sent)&&(d.setFieldsValue(t),k(t.type));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t?o?e():d.setFieldsValue({type:"custom"}):d.resetFields()}),[t]),(0,v.jsx)(x.Z,{title:o?"\u66f4\u65b0\u6388\u6743\u51ed\u8bc1":"\u65b0\u5efa\u6388\u6743\u51ed\u8bc1",visible:t,maskClosable:!1,destroyOnClose:!0,onOk:function(){d.validateFields().then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:e.sent&&d.resetFields();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onCancel:function(){d.resetFields(),i()},confirmLoading:u,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,v.jsxs)(Z.Z,(0,f.Z)((0,f.Z)({form:d},{labelCol:{span:6},wrapperCol:{span:14}}),{},{children:[(0,v.jsx)(Z.Z.Item,{name:"id",noStyle:!0,children:(0,v.jsx)(h.Z,{hidden:!0})}),(0,v.jsx)(Z.Z.Item,{label:"\u51ed\u8bc1\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u51ed\u8bc1\u540d\u79f0"}],children:(0,v.jsx)(h.Z,{placeholder:"\u8bf7\u8f93\u5165\u51ed\u8bc1\u540d\u79f0"})}),(0,v.jsx)(Z.Z.Item,{label:"\u8d26\u6237\u7c7b\u578b",name:"type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u63a5\u8d26\u6237\u7c7b\u578b"}],children:(0,v.jsx)(m.Z,{onChange:function(e){k(e)},children:S.map((function(e){return(0,v.jsx)(m.Z.Option,{value:e.value,children:e.text},e.value)}))})}),"private-key"===I?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z.Z.Item,{label:"\u6388\u6743\u8d26\u6237",name:"username",children:(0,v.jsx)(h.Z,{placeholder:"\u8f93\u5165\u6388\u6743\u8d26\u6237"})}),(0,v.jsx)(Z.Z.Item,{label:"\u79c1\u94a5",name:"privateKey",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u79c1\u94a5"}],children:(0,v.jsx)(g,{rows:4})}),(0,v.jsx)(Z.Z.Item,{label:"\u79c1\u94a5\u5bc6\u7801",name:"passphrase",children:(0,v.jsx)(g,{rows:1})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("input",{type:"password",hidden:!0,autoComplete:"new-password"}),(0,v.jsx)(Z.Z.Item,{label:"\u6388\u6743\u8d26\u6237",name:"username",children:(0,v.jsx)(h.Z,{placeholder:"\u8f93\u5165\u6388\u6743\u8d26\u6237"})}),(0,v.jsx)(Z.Z.Item,{label:"\u6388\u6743\u5bc6\u7801",name:"password",children:(0,v.jsx)(h.Z.Password,{placeholder:"\u8f93\u5165\u6388\u6743\u5bc6\u7801"})})]})]}))})},I=n(88928),k=n(87591),b=i.Z.Content,j=c.createRef(),O=p.Z,C=function(){var e=(0,c.useState)(!1),t=(0,s.Z)(e,2),n=t[0],i=t[1],p=(0,c.useState)(!1),f=(0,s.Z)(p,2),h=f[0],Z=f[1],x=(0,c.useState)(void 0),m=(0,s.Z)(x,2),g=m[0],y=m[1],S=(0,I.T)(I.Z.CREDENTIAL),C=(0,s.Z)(S,2),E=C[0],T=C[1],N=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u51ed\u8bc1\u7c7b\u578b",dataIndex:"type",key:"type",hideInSearch:!0,render:function(e,t){return"private-key"===e?(0,v.jsx)(u.Z,{color:"green",children:"\u5bc6\u94a5"}):(0,v.jsx)(u.Z,{color:"red",children:"\u5bc6\u7801"})}},{title:"\u6388\u6743\u8d26\u6237",dataIndex:"username",key:"username",hideInSearch:!0},{title:"\u6240\u6709\u8005",dataIndex:"ownerName",key:"ownerName",hideInSearch:!0},{title:"\u521b\u5efa\u65f6\u95f4",key:"created",dataIndex:"created",hideInSearch:!0},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:function(e,t,n,s){return[(0,v.jsx)(k.Z,{menu:"credential-edit",children:(0,v.jsx)("a",{onClick:function(){i(!0),y(t.id)},children:"\u7f16\u8f91"},"edit")},"credential-edit"),(0,v.jsx)(k.Z,{menu:"credential-del",children:(0,v.jsx)(o.Z,{title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664\u6b64\u884c\u5417?",onConfirm:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.deleteById(t.id);case 2:j.current.reload();case 3:case"end":return e.stop()}}),e)}))),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:(0,v.jsx)("a",{className:"danger",children:"\u5220\u9664"},"delete")},"confirm-delete")},"credential-del")]}}];return(0,v.jsxs)(b,{className:"page-container",children:[(0,v.jsx)(d.Z,{columns:N,actionRef:j,columnsState:{value:E,onChange:T},request:(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,s,c,i,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1?u[1]:void 0,u.length>2?u[2]:void 0,a="",s="",Object.keys(n).length>0&&(a=Object.keys(n)[0],s=Object.values(n)[0]),c={pageIndex:t.current,pageSize:t.pageSize,name:t.name,field:a,order:s},e.next=9,O.getPaging(c);case 9:return i=e.sent,e.abrupt("return",{data:i.items,success:!0,total:i.total});case 11:case"end":return e.stop()}}),e)}))),rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:10},dateFormatter:"string",headerTitle:"\u6388\u6743\u51ed\u8bc1\u5217\u8868",toolBarRender:function(){return[(0,v.jsx)(k.Z,{menu:"credential-add",children:(0,v.jsx)(l.Z,{type:"primary",onClick:function(){i(!0)},children:"\u65b0\u5efa"},"button")})]}}),(0,v.jsx)(w,{id:g,visible:n,confirmLoading:h,handleCancel:function(){i(!1),y(void 0)},handleOk:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(!0),e.prev=1,!t.id){e.next=8;break}return e.next=5,O.updateById(t.id,t);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,O.create(t);case 10:n=e.sent;case 11:n&&i(!1),j.current.reload();case 13:return e.prev=13,Z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,,13,16]])})));return function(t){return e.apply(this,arguments)}}()})]})}},87591:function(e,t,n){var r=n(93433),a=n(15253);t.Z=function(e){var t=e.menu,n=e.children;if(Array.isArray(t)){if(a.c1.apply(void 0,(0,r.Z)(t)))return n}else if((0,a.c1)(t))return n}},88928:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(29439),a=n(43144),s=n(15671),c=n(99925),i=n(47313),u=new((0,a.Z)((function e(){(0,s.Z)(this,e),this.ASSET="cs-asset",this.CREDENTIAL="cs-credential",this.COMMAND="cs-command",this.ACCESS_GATEWAY="cs-access-gateway",this.ONLINE_SESSION="cs-online-session",this.OFFLINE_SESSION="cs-offline-session",this.LOGIN_LOG="cs-login-log",this.STORAGE_LOG="cs-storage-log",this.JOB="cs-job",this.STORAGE="cs-storage",this.LOGIN_POLICY="cs-login-policy",this.ACCESS_SECURITY="cs-access-security",this.USER="cs-user",this.ROLE="cs-role",this.USER_GROUP="cs-user-group",this.COMMAND_FILTER="cs-command-filter",this.STRATEGY="cs-strategy"})));t.Z=u;var o=function(e){var t=(0,i.useState)(l(e)),n=(0,r.Z)(t,2),a=n[0],s=n[1];return[a,function(t){new Promise((function(e){s(t),e(t)})).then((function(t){d(e,t)}))}]},l=function(e){switch(e){case u.ASSET:case u.CREDENTIAL:case u.COMMAND:case u.ACCESS_GATEWAY:case u.ONLINE_SESSION:case u.OFFLINE_SESSION:}return p(e,{})},d=function(e,t){localStorage.setItem(e,JSON.stringify(t))},p=function(e,t){var n=localStorage.getItem(e);if(!c.Z.hasText(n))return t;try{return JSON.parse(n)}catch(r){return t}}},99925:function(e,t,n){var r=n(43144),a=n(15671),s=new((0,r.Z)((function e(){(0,a.Z)(this,e),this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}})));t.Z=s}}]);