"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[1475],{83371:function(e,t,n){n.d(t,{K:function(){return h},Z:function(){return N}});var a=n(4942),c=n(29439),l=n(71002),r=n(46123),o=n.n(r),s=n(98138),i=n(47313),m=n(74714),u=n(48138),v=n(82324),d=function(e){return e.children},f=n(87462);function p(e){return void 0!==e&&null!==e}var Z=function(e){var t,n=e.itemPrefixCls,c=e.component,l=e.span,r=e.className,s=e.style,m=e.labelStyle,u=e.contentStyle,v=e.bordered,d=e.label,f=e.content,Z=e.colon,y=c;return v?i.createElement(y,{className:o()((t={},(0,a.Z)(t,"".concat(n,"-item-label"),p(d)),(0,a.Z)(t,"".concat(n,"-item-content"),p(f)),t),r),style:s,colSpan:l},p(d)&&i.createElement("span",{style:m},d),p(f)&&i.createElement("span",{style:u},f)):i.createElement(y,{className:o()("".concat(n,"-item"),r),style:s,colSpan:l},i.createElement("div",{className:"".concat(n,"-item-container")},(d||0===d)&&i.createElement("span",{className:o()("".concat(n,"-item-label"),(0,a.Z)({},"".concat(n,"-item-no-colon"),!Z)),style:m},d),(f||0===f)&&i.createElement("span",{className:o()("".concat(n,"-item-content")),style:u},f)))};function y(e,t,n){var a=t.colon,c=t.prefixCls,l=t.bordered,r=n.component,o=n.type,s=n.showLabel,m=n.showContent,u=n.labelStyle,v=n.contentStyle;return e.map((function(e,t){var n=e.props,d=n.label,p=n.children,y=n.prefixCls,x=void 0===y?c:y,h=n.className,E=n.style,C=n.labelStyle,b=n.contentStyle,N=n.span,g=void 0===N?1:N,w=e.key;return"string"===typeof r?i.createElement(Z,{key:"".concat(o,"-").concat(w||t),className:h,style:E,labelStyle:(0,f.Z)((0,f.Z)({},u),C),contentStyle:(0,f.Z)((0,f.Z)({},v),b),span:g,colon:a,component:r,itemPrefixCls:x,bordered:l,label:s?d:null,content:m?p:null}):[i.createElement(Z,{key:"label-".concat(w||t),className:h,style:(0,f.Z)((0,f.Z)((0,f.Z)({},u),E),C),span:1,colon:a,component:r[0],itemPrefixCls:x,bordered:l,label:d}),i.createElement(Z,{key:"content-".concat(w||t),className:h,style:(0,f.Z)((0,f.Z)((0,f.Z)({},v),E),b),span:2*g-1,component:r[1],itemPrefixCls:x,bordered:l,content:p})]}))}var x=function(e){var t=i.useContext(h),n=e.prefixCls,a=e.vertical,c=e.row,l=e.index,r=e.bordered;return a?i.createElement(i.Fragment,null,i.createElement("tr",{key:"label-".concat(l),className:"".concat(n,"-row")},y(c,e,(0,f.Z)({component:"th",type:"label",showLabel:!0},t))),i.createElement("tr",{key:"content-".concat(l),className:"".concat(n,"-row")},y(c,e,(0,f.Z)({component:"td",type:"content",showContent:!0},t)))):i.createElement("tr",{key:l,className:"".concat(n,"-row")},y(c,e,(0,f.Z)({component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},h=i.createContext({}),E={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function C(e,t,n){var a=e;return(void 0===t||t>n)&&(a=(0,u.Tm)(e,{span:n})),a}function b(e){var t,n=e.prefixCls,r=e.title,u=e.extra,d=e.column,f=void 0===d?E:d,p=e.colon,Z=void 0===p||p,y=e.bordered,b=e.layout,N=e.children,g=e.className,w=e.style,k=e.size,z=e.labelStyle,S=e.contentStyle,P=i.useContext(m.E_),q=P.getPrefixCls,_=P.direction,M=q("descriptions",n),A=i.useState({}),j=(0,c.Z)(A,2),B=j[0],I=j[1],L=function(e,t){if("number"===typeof e)return e;if("object"===(0,l.Z)(e))for(var n=0;n<v.c4.length;n++){var a=v.c4[n];if(t[a]&&void 0!==e[a])return e[a]||E[a]}return 3}(f,B);i.useEffect((function(){var e=v.ZP.subscribe((function(e){"object"===(0,l.Z)(f)&&I(e)}));return function(){v.ZP.unsubscribe(e)}}),[]);var H=function(e,t){var n=(0,s.Z)(e).filter((function(e){return e})),a=[],c=[],l=t;return n.forEach((function(e,r){var o,s=null===(o=e.props)||void 0===o?void 0:o.span,i=s||1;if(r===n.length-1)return c.push(C(e,s,l)),void a.push(c);i<l?(l-=i,c.push(e)):(c.push(C(e,i,l)),a.push(c),l=t,c=[])})),a}(N,L),D=i.useMemo((function(){return{labelStyle:z,contentStyle:S}}),[z,S]);return i.createElement(h.Provider,{value:D},i.createElement("div",{className:o()(M,(t={},(0,a.Z)(t,"".concat(M,"-").concat(k),k&&"default"!==k),(0,a.Z)(t,"".concat(M,"-bordered"),!!y),(0,a.Z)(t,"".concat(M,"-rtl"),"rtl"===_),t),g),style:w},(r||u)&&i.createElement("div",{className:"".concat(M,"-header")},r&&i.createElement("div",{className:"".concat(M,"-title")},r),u&&i.createElement("div",{className:"".concat(M,"-extra")},u)),i.createElement("div",{className:"".concat(M,"-view")},i.createElement("table",null,i.createElement("tbody",null,H.map((function(e,t){return i.createElement(x,{key:t,index:t,colon:Z,prefixCls:M,vertical:"vertical"===b,bordered:y,row:e})})))))))}b.Item=d;var N=b},80627:function(e,t,n){n.d(t,{Z:function(){return z}});var a=n(4942),c=n(87462),l=n(71002),r=n(46123),o=n.n(r),s=n(47313),i=n(74714),m=n(30832),u=function(e){var t,n,l=e.prefixCls,r=e.className,i=e.style,m=e.size,u=e.shape,v=o()((t={},(0,a.Z)(t,"".concat(l,"-lg"),"large"===m),(0,a.Z)(t,"".concat(l,"-sm"),"small"===m),t)),d=o()((n={},(0,a.Z)(n,"".concat(l,"-circle"),"circle"===u),(0,a.Z)(n,"".concat(l,"-square"),"square"===u),(0,a.Z)(n,"".concat(l,"-round"),"round"===u),n)),f=s.useMemo((function(){return"number"===typeof m?{width:m,height:m,lineHeight:"".concat(m,"px")}:{}}),[m]);return s.createElement("span",{className:o()(l,v,d,r),style:(0,c.Z)((0,c.Z)({},f),i)})},v=function(e){var t=e.prefixCls,n=e.className,l=e.active,r=e.shape,v=void 0===r?"circle":r,d=e.size,f=void 0===d?"default":d,p=(0,s.useContext(i.E_).getPrefixCls)("skeleton",t),Z=(0,m.Z)(e,["prefixCls","className"]),y=o()(p,"".concat(p,"-element"),(0,a.Z)({},"".concat(p,"-active"),l),n);return s.createElement("div",{className:y},s.createElement(u,(0,c.Z)({prefixCls:"".concat(p,"-avatar"),shape:v,size:f},Z)))},d=function(e){var t,n=e.prefixCls,l=e.className,r=e.active,v=e.block,d=void 0!==v&&v,f=e.size,p=void 0===f?"default":f,Z=(0,s.useContext(i.E_).getPrefixCls)("skeleton",n),y=(0,m.Z)(e,["prefixCls"]),x=o()(Z,"".concat(Z,"-element"),(t={},(0,a.Z)(t,"".concat(Z,"-active"),r),(0,a.Z)(t,"".concat(Z,"-block"),d),t),l);return s.createElement("div",{className:x},s.createElement(u,(0,c.Z)({prefixCls:"".concat(Z,"-button"),size:p},y)))},f=n(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},Z=n(95734),y=function(e,t){return s.createElement(Z.Z,(0,f.Z)((0,f.Z)({},e),{},{ref:t,icon:p}))};y.displayName="DotChartOutlined";var x=s.forwardRef(y),h=function(e){var t=e.prefixCls,n=e.className,c=e.style,l=e.active,r=e.children,m=(0,s.useContext(i.E_).getPrefixCls)("skeleton",t),u=o()(m,"".concat(m,"-element"),(0,a.Z)({},"".concat(m,"-active"),l),n),v=null!==r&&void 0!==r?r:s.createElement(x,null);return s.createElement("div",{className:u},s.createElement("div",{className:o()("".concat(m,"-image"),n),style:c},v))},E=function(e){var t=e.prefixCls,n=e.className,c=e.style,l=e.active,r=(0,s.useContext(i.E_).getPrefixCls)("skeleton",t),m=o()(r,"".concat(r,"-element"),(0,a.Z)({},"".concat(r,"-active"),l),n);return s.createElement("div",{className:m},s.createElement("div",{className:o()("".concat(r,"-image"),n),style:c},s.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(r,"-image-svg")},s.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(r,"-image-path")}))))},C=function(e){var t,n=e.prefixCls,l=e.className,r=e.active,v=e.block,d=e.size,f=void 0===d?"default":d,p=(0,s.useContext(i.E_).getPrefixCls)("skeleton",n),Z=(0,m.Z)(e,["prefixCls"]),y=o()(p,"".concat(p,"-element"),(t={},(0,a.Z)(t,"".concat(p,"-active"),r),(0,a.Z)(t,"".concat(p,"-block"),v),t),l);return s.createElement("div",{className:y},s.createElement(u,(0,c.Z)({prefixCls:"".concat(p,"-input"),size:f},Z)))},b=n(93433),N=function(e){var t=function(t){var n=e.width,a=e.rows,c=void 0===a?2:a;return Array.isArray(n)?n[t]:c-1===t?n:void 0},n=e.prefixCls,a=e.className,c=e.style,l=e.rows,r=(0,b.Z)(Array(l)).map((function(e,n){return s.createElement("li",{key:n,style:{width:t(n)}})}));return s.createElement("ul",{className:o()(n,a),style:c},r)},g=function(e){var t=e.prefixCls,n=e.className,a=e.width,l=e.style;return s.createElement("h3",{className:o()(t,n),style:(0,c.Z)({width:a},l)})};function w(e){return e&&"object"===(0,l.Z)(e)?e:{}}var k=function(e){var t=e.prefixCls,n=e.loading,l=e.className,r=e.style,m=e.children,v=e.avatar,d=void 0!==v&&v,f=e.title,p=void 0===f||f,Z=e.paragraph,y=void 0===Z||Z,x=e.active,h=e.round,E=s.useContext(i.E_),C=E.getPrefixCls,b=E.direction,k=C("skeleton",t);if(n||!("loading"in e)){var z,S,P,q=!!d,_=!!p,M=!!y;if(q){var A=(0,c.Z)((0,c.Z)({prefixCls:"".concat(k,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(_,M)),w(d));S=s.createElement("div",{className:"".concat(k,"-header")},s.createElement(u,(0,c.Z)({},A)))}if(_||M){var j,B;if(_){var I=(0,c.Z)((0,c.Z)({prefixCls:"".concat(k,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(q,M)),w(p));j=s.createElement(g,(0,c.Z)({},I))}if(M){var L=(0,c.Z)((0,c.Z)({prefixCls:"".concat(k,"-paragraph")},function(e,t){var n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}(q,_)),w(y));B=s.createElement(N,(0,c.Z)({},L))}P=s.createElement("div",{className:"".concat(k,"-content")},j,B)}var H=o()(k,(z={},(0,a.Z)(z,"".concat(k,"-with-avatar"),q),(0,a.Z)(z,"".concat(k,"-active"),x),(0,a.Z)(z,"".concat(k,"-rtl"),"rtl"===b),(0,a.Z)(z,"".concat(k,"-round"),h),z),l);return s.createElement("div",{className:H,style:r},S,P)}return"undefined"!==typeof m?m:null};k.Button=d,k.Avatar=v,k.Input=C,k.Image=E,k.Node=h;var z=k}}]);