"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[5514],{58374:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(74165),c=n(15861),a=n(43144),i=n(15671),s=n(96675),o=n(74776),u=n.n(o),l=(0,a.Z)((function e(t){var n=this;(0,i.Z)(this,e),this.group="",this.getById=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(n.group,"/").concat(t));case 2:if(1===(c=e.sent).code){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPaging=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u().stringify(t),e.next=3,s.Z.get("/".concat(n.group,"/paging?").concat(c));case 3:if(1===(a=e.sent).code){e.next=6;break}return e.abrupt("return",{});case 6:return e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAll=(0,c.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(n.group));case 2:if(1===(t=e.sent).code){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)}))),this.create=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/".concat(n.group),t);case 2:return c=e.sent,e.abrupt("return",1===c.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateById=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t,c){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/".concat(n.group,"/").concat(t),c);case 2:return a=e.sent,e.abrupt("return",1===a.code);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.deleteById=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/".concat(n.group,"/").concat(t));case 2:return c=e.sent,e.abrupt("return",1===c.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.group=t}))},5514:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(74165),c=n(15861),a=n(29439),i=n(47313),s=n(15508),o=n(66204),u=n(57325),l=n(5900),d=n(23813),f=n(59491),p=n(96296),h=n(96216),Z=n(53469),g=n(43144),x=n(15671),v=n(60136),m=n(27277),S=n(58374),I=n(96675),y=new(function(e){(0,v.Z)(n,e);var t=(0,m.Z)(n);function n(){var e;return(0,x.Z)(this,n),(e=t.call(this,"login-logs")).Clear=(0,c.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.Z.post("/".concat(e.group,"/clear"));case 2:return n=t.sent,t.abrupt("return",1===n.code);case 4:case"end":return t.stop()}}),t)}))),e}return(0,g.Z)(n)}(S.Z)),k=n(88928),w=n(87591),T=n(46417),E=y,O=s.Z.Content,b=i.createRef(),C=function(){var e=(0,i.useState)(0),t=(0,a.Z)(e,2),n=t[0],s=t[1],g=(0,i.useState)([]),x=(0,a.Z)(g,2),v=x[0],m=x[1],S=(0,k.T)(k.Z.LOGIN_LOG),I=(0,a.Z)(S,2),y=I[0],C=I[1],N=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u767b\u5f55\u8d26\u53f7",dataIndex:"username",key:"username"},{title:"\u767b\u5f55IP",dataIndex:"clientIp",key:"clientIp"},{title:"\u767b\u5f55\u72b6\u6001",dataIndex:"state",key:"state",hideInSearch:!0,render:function(e){return"0"===e?(0,T.jsx)(o.Z,{color:"error",children:"\u5931\u8d25"}):(0,T.jsx)(o.Z,{color:"success",children:"\u6210\u529f"})}},{title:"\u5931\u8d25\u539f\u56e0",dataIndex:"reason",key:"reason",hideInSearch:!0},{title:"\u6d4f\u89c8\u5668",dataIndex:"clientUserAgent",key:"clientUserAgent",hideInSearch:!0,render:function(e,t){return(0,h.xb)(e)?"\u672a\u77e5":(0,T.jsx)(u.Z,{placement:"topLeft",title:e,children:e.split(" ")[0]})}},{title:"\u767b\u5f55\u65f6\u95f4",dataIndex:"loginTime",key:"loginTime",hideInSearch:!0,render:function(e,t){return(0,h.p6)(e,"yyyy-MM-dd hh:mm:ss")}},{title:"\u6ce8\u9500\u65f6\u95f4",dataIndex:"logoutTime",key:"logoutTime",hideInSearch:!0,render:function(e,t){return(0,h.xb)(e)||"0001-01-01 00:00:00"===e?"":e}},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:function(e,t,n,a){return[(0,T.jsx)(w.Z,{menu:"login-log-del",children:(0,T.jsx)(l.Z,{title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664\u6b64\u884c\u5417?",onConfirm:(0,c.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteById(t.id);case 2:b.current.reload();case 3:case"end":return e.stop()}}),e)}))),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:(0,T.jsx)("a",{className:"danger",children:"\u5220\u9664"},"delete")},"confirm-delete")},"login-log-del")]}}];return(0,T.jsx)("div",{children:(0,T.jsx)(O,{className:"page-container",children:(0,T.jsx)(Z.Z,{columns:N,actionRef:b,columnsState:{value:y,onChange:C},rowSelection:{selections:[d.Z.SELECTION_ALL,d.Z.SELECTION_INVERT],selectedRowKeys:v,onChange:function(e){m(e)}},request:(0,c.Z)((0,r.Z)().mark((function e(){var t,n,c,a,i,o,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1?u[1]:void 0,u.length>2?u[2]:void 0,c="",a="",Object.keys(n).length>0&&(c=Object.keys(n)[0],a=Object.values(n)[0]),i={pageIndex:t.current,pageSize:t.pageSize,username:t.username,clientIp:t.clientIp,field:c,order:a},e.next=9,E.getPaging(i);case 9:return o=e.sent,s(o.total),e.abrupt("return",{data:o.items,success:!0,total:o.total});case 12:case"end":return e.stop()}}),e)}))),rowKey:"id",search:{labelWidth:"auto"},pagination:{pageSize:10},dateFormatter:"string",headerTitle:"\u767b\u5f55\u65e5\u5fd7\u5217\u8868",toolBarRender:function(){return[(0,T.jsx)(w.Z,{menu:"login-log-del",children:(0,T.jsx)(f.Z,{danger:!0,disabled:0===v.length,onClick:(0,c.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.Z.confirm({title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9009\u4e2d\u7684\u767b\u5f55\u65e5\u5fd7\u5417?",content:"\u5220\u9664\u4e4b\u540e\u65e0\u6cd5\u8fdb\u884c\u6062\u590d\uff0c\u8bf7\u614e\u91cd\u8003\u8651\u3002",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteById(v.join(","));case 2:b.current.reload(),m([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});case 1:case"end":return e.stop()}}),e)}))),children:"\u5220\u9664"},"delete")}),(0,T.jsx)(w.Z,{menu:"login-log-clear",children:(0,T.jsx)(f.Z,{type:"primary",danger:!0,disabled:0===n,onClick:(0,c.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.Z.confirm({title:"\u60a8\u786e\u5b9a\u8981\u6e05\u7a7a\u5168\u90e8\u7684\u6587\u4ef6\u767b\u5f55\u65e5\u5fd7\u5417?",content:"\u6e05\u7a7a\u4e4b\u540e\u65e0\u6cd5\u8fdb\u884c\u6062\u590d\uff0c\u8bf7\u614e\u91cd\u8003\u8651\u3002",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.Clear();case 2:b.current.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});case 1:case"end":return e.stop()}}),e)}))),children:"\u6e05\u7a7a"},"clear")})]}})})})}},87591:function(e,t,n){var r=n(93433),c=n(15253);t.Z=function(e){var t=e.menu,n=e.children;if(Array.isArray(t)){if(c.c1.apply(void 0,(0,r.Z)(t)))return n}else if((0,c.c1)(t))return n}},88928:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(29439),c=n(43144),a=n(15671),i=n(99925),s=n(47313),o=new((0,c.Z)((function e(){(0,a.Z)(this,e),this.ASSET="cs-asset",this.CREDENTIAL="cs-credential",this.COMMAND="cs-command",this.ACCESS_GATEWAY="cs-access-gateway",this.ONLINE_SESSION="cs-online-session",this.OFFLINE_SESSION="cs-offline-session",this.LOGIN_LOG="cs-login-log",this.STORAGE_LOG="cs-storage-log",this.JOB="cs-job",this.STORAGE="cs-storage",this.LOGIN_POLICY="cs-login-policy",this.ACCESS_SECURITY="cs-access-security",this.USER="cs-user",this.ROLE="cs-role",this.USER_GROUP="cs-user-group",this.COMMAND_FILTER="cs-command-filter",this.STRATEGY="cs-strategy"})));t.Z=o;var u=function(e){var t=(0,s.useState)(l(e)),n=(0,r.Z)(t,2),c=n[0],a=n[1];return[c,function(t){new Promise((function(e){a(t),e(t)})).then((function(t){d(e,t)}))}]},l=function(e){switch(e){case o.ASSET:case o.CREDENTIAL:case o.COMMAND:case o.ACCESS_GATEWAY:case o.ONLINE_SESSION:case o.OFFLINE_SESSION:}return f(e,{})},d=function(e,t){localStorage.setItem(e,JSON.stringify(t))},f=function(e,t){var n=localStorage.getItem(e);if(!i.Z.hasText(n))return t;try{return JSON.parse(n)}catch(r){return t}}},99925:function(e,t,n){var r=n(43144),c=n(15671),a=new((0,r.Z)((function e(){(0,c.Z)(this,e),this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}})));t.Z=a}}]);