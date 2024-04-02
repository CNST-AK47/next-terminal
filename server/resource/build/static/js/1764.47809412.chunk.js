"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[1764],{37216:function(e,t,n){var r=n(74165),a=n(15861),i=n(43144),c=n(15671),s=n(60136),u=n(27277),o=n(96675),d=n(74776),l=n.n(d),f=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this,"login-policies")).Bind=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.post("/".concat(e.group,"/").concat(n,"/bind"),a);case 2:return i=t.sent,t.abrupt("return",1===i.code);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.Unbind=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.post("/".concat(e.group,"/").concat(n,"/unbind"),a);case 2:return i=t.sent,t.abrupt("return",1===i.code);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.GetUserPagingByForbiddenCommandId=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){var i,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=l().stringify(a),t.next=3,o.Z.get("/".concat(e.group,"/").concat(n,"/users/paging?").concat(i));case 3:if(1===(c=t.sent).code){t.next=6;break}return t.abrupt("return",{});case 6:return t.abrupt("return",c.data);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.GetUserIdByLoginPolicyId=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/".concat(e.group,"/").concat(n,"/users/id"));case 2:if(1===(a=t.sent).code){t.next=5;break}return t.abrupt("return",[]);case 5:return t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return(0,i.Z)(n)}(n(58374).Z),p=new f;t.Z=p},20955:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(74165),a=n(15861),i=n(29439),c=n(47313),s=n(2135),u=n(29261),o=n(53469),d=n(59491),l=n(1413),f=n(12008),p=n(96296),h=n(74294),Z=n(53485),v=n(27777),x=n(46417),g={labelCol:{span:6},wrapperCol:{span:14}},y=function(e){var t=e.id,n=e.visible,s=e.handleOk,o=e.handleCancel,d=e.confirmLoading,y=f.Z.useForm(),b=(0,i.Z)(y,1)[0],m=(0,c.useState)([]),w=(0,i.Z)(m,2),k=w[0],I=w[1],j=(0,c.useState)([]),C=(0,i.Z)(j,2),S=C[0],O=C[1],T=(0,c.useState)([]),U=(0,i.Z)(T,2),P=U[0],B=U[1];(0,c.useEffect)((function(){function e(){return e=(0,a.Z)((0,r.Z)().mark((function e(){var n,a,i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={key:"userId",assetId:t},e.next=3,u.Z.GetSelected(n);case 3:return a=e.sent,I(a),e.next=7,v.Z.getAll();case 7:return i=e.sent,O(i),e.next=11,Z.Z.getAll();case 11:c=e.sent,B(c);case 13:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}n?function(){e.apply(this,arguments)}():b.resetFields()}),[n]);var F=P.map((function(e){return{value:e.id,label:e.name}})),L=S.map((function(e){return{value:e.id,label:e.nickname,disabled:k.includes(e.id)}}));return(0,x.jsx)(p.Z,{title:"\u7528\u6237\u6388\u6743",visible:n,maskClosable:!1,destroyOnClose:!0,onOk:function(){b.validateFields().then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:e.sent&&b.resetFields();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onCancel:function(){b.resetFields(),o()},confirmLoading:d,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,x.jsxs)(f.Z,(0,l.Z)((0,l.Z)({form:b},g),{},{children:[(0,x.jsx)(f.Z.Item,{label:"\u7528\u6237",name:"userIds",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7528\u6237"}],children:(0,x.jsx)(h.Z,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u7528\u6237",showSearch:!0,filterOption:function(e,t){var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},options:L})}),(0,x.jsx)(f.Z.Item,{label:"\u6388\u6743\u7b56\u7565",name:"strategyId",extra:"\u53ef\u63a7\u5236\u6388\u6743\u7528\u6237\u4e0a\u4f20\u4e0b\u8f7d\u6587\u4ef6\u7b49\u529f\u80fd",children:(0,x.jsx)(h.Z,{allowClear:!0,style:{width:"100%"},placeholder:"\u6b64\u5b57\u6bb5\u4e0d\u662f\u5fc5\u586b\u7684",showSearch:!0,filterOption:function(e,t){var n;return(null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())},options:F})})]}))})},b=n(87591),m=c.createRef(),w=function(e){var t=e.active,n=e.id,l=(0,c.useState)(!1),f=(0,i.Z)(l,2),p=f[0],h=f[1],Z=(0,c.useState)(!1),v=(0,i.Z)(Z,2),g=v[0],w=v[1];(0,c.useEffect)((function(){t&&m.current.reload()}),[t]);var k=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u7528\u6237\u540d\u79f0",dataIndex:"userName",render:function(e,t){return(0,x.jsx)(s.rU,{to:"/user/".concat(t.userId),children:e})}},{title:"\u6388\u6743\u7b56\u7565\u540d\u79f0",dataIndex:"strategyName",hideInSearch:!0,render:function(e,t){return(0,x.jsx)(s.rU,{to:"/strategy/".concat(t.strategyId),children:e})}},{title:"\u6388\u6743\u65e5\u671f",key:"created",dataIndex:"created",hideInSearch:!0},{title:"\u64cd\u4f5c",valueType:"option",key:"option",width:50,render:function(e,t,n,i){return[(0,x.jsx)(b.Z,{menu:"asset-authorised-user-del",children:(0,x.jsx)("a",{onClick:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.DeleteById(t.id);case 2:m.current.reload();case 3:case"end":return e.stop()}}),e)}))),children:"\u79fb\u9664"},"unbind")},"unbind-acc")]}}];return(0,x.jsxs)("div",{children:[(0,x.jsx)(o.Z,{columns:k,actionRef:m,request:(0,a.Z)((0,r.Z)().mark((function e(){var t,a,i,c,s,o,d=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:{},a=d.length>1?d[1]:void 0,d.length>2?d[2]:void 0,i="",c="",Object.keys(a).length>0&&(i=Object.keys(a)[0],c=Object.values(a)[0]),s={pageIndex:t.current,pageSize:t.pageSize,name:t.name,assetId:n,field:i,order:c},e.next=9,u.Z.GetUserPaging(s);case 9:return o=e.sent,e.abrupt("return",{data:o.items,success:!0,total:o.total});case 11:case"end":return e.stop()}}),e)}))),rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:10},dateFormatter:"string",headerTitle:"\u6388\u6743\u7684\u7528\u6237\u5217\u8868",toolBarRender:function(){return[(0,x.jsx)(b.Z,{menu:"asset-authorised-user-add",children:(0,x.jsx)(d.Z,{type:"primary",onClick:function(){h(!0)},children:"\u6388\u6743"},"button")},"bind-acc")]}}),(0,x.jsx)(y,{id:n,visible:p,confirmLoading:g,handleCancel:function(){h(!1)},handleOk:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!0),t.assetId=n;try{u.Z.AuthorisedUsers(t)&&h(!1),m.current.reload()}finally{w(!1)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]})}},61764:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(29439),a=n(47313),i=n(94098),c=n(60215),s=n(74165),u=n(15861),o=n(53469),d=n(2135),l=n(37216),f=n(46417),p=a.createRef(),h=function(e){var t=e.active,n=e.userId;(0,a.useEffect)((function(){t&&p.current.reload()}),[t]);var r=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.Unbind(t,[{userId:n}]);case 2:p.current.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u540d\u79f0",dataIndex:"name",render:function(e,t){return(0,f.jsx)(d.rU,{to:"/login-policy/".concat(t.id),children:e})}},{title:"\u4f18\u5148\u7ea7",key:"priority",dataIndex:"priority",sorter:!0,hideInSearch:!0},{title:"\u52a8\u4f5c",key:"rule",dataIndex:"rule",hideInSearch:!0,render:function(e){return"allow"===e?"\u5141\u8bb8":"\u62d2\u7edd"}},{title:"\u64cd\u4f5c",valueType:"option",key:"option",render:function(e,t,n,a){return[(0,f.jsx)("a",{onClick:function(){r(t.id)},children:"\u89e3\u7ed1"},"edit")]}}];return(0,f.jsx)("div",{children:(0,f.jsx)(o.Z,{columns:i,actionRef:p,request:(0,u.Z)((0,s.Z)().mark((function e(){var t,r,a,i,c,u,o=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:{},r=o.length>1?o[1]:void 0,o.length>2?o[2]:void 0,a="",i="",Object.keys(r).length>0&&(a=Object.keys(r)[0],i=Object.values(r)[0]),n){e.next=8;break}return e.abrupt("return",{data:[],success:!0,total:0});case 8:return c={pageIndex:t.current,pageSize:t.pageSize,name:t.name,userId:n,field:a,order:i},e.next=11,l.Z.getPaging(c);case 11:return u=e.sent,e.abrupt("return",{data:u.items,success:!0,total:u.total});case 13:case"end":return e.stop()}}),e)}))),rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:10},dateFormatter:"string",headerTitle:"\u7528\u6237\u767b\u5f55\u7b56\u7565",toolBarRender:function(){return[]}})})},Z=n(21419),v=n(58467),x=n(15253),g=(n(20955),function(){var e=(0,v.UO)().userId,t=(0,d.lr)(),n=(0,r.Z)(t,2),s=n[0],u=n[1],o=s.get("activeKey");o=o||"info";var l=(0,a.useState)(o),p=(0,r.Z)(l,2),g=p[0],y=p[1];return(0,f.jsx)("div",{className:"page-detail-warp",children:(0,f.jsxs)(i.Z,{activeKey:g,onChange:function(e){y(e),u({activeKey:e})},children:[(0,x.c1)("user-detail")&&(0,f.jsx)(i.Z.TabPane,{tab:"\u57fa\u672c\u4fe1\u606f",children:(0,f.jsx)(c.Z,{active:"info"===g,userId:e})},"info"),(0,x.c1)("user-authorised-asset")&&(0,f.jsx)(i.Z.TabPane,{tab:"\u6388\u6743\u7684\u8d44\u4ea7",children:(0,f.jsx)(Z.Z,{active:"asset"===g,id:e,type:"userId"})},"asset"),(0,x.c1)("user-login-policy")&&(0,f.jsx)(i.Z.TabPane,{tab:"\u767b\u5f55\u7b56\u7565",children:(0,f.jsx)(h,{active:"login-policy"===g,userId:e})},"login-policy")]})})})}}]);