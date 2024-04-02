"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[1997],{16747:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(29439),c=n(47313),i=n(2135),a=n(34868),o=n(96216),s=n(69567),l=n.n(s),u=n(1413),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"},d=n(95734),h=function(e,t){return c.createElement(d.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:f}))};h.displayName="PlayCircleOutlined";var p=c.forwardRef(h),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"}}]},name:"pause-circle",theme:"outlined"},m=function(e,t){return c.createElement(d.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:v}))};m.displayName="PauseCircleOutlined";var Z,g=c.forwardRef(m),x=n(55291),y=n(68197),w=n(59624),b=n(59491),j=n(76994),C=n(74294),O=n(43144),E=n(15671),P=n(99925),k=new((0,O.Z)((function e(){(0,E.Z)(this,e),this.formatTime=function(e){var t=Math.floor(e/1e3),n=t%60,r=Math.floor(t/60);return P.Z.zeroPad(r,2)+":"+P.Z.zeroPad(n,2)}}))),z=n(68086),S=n(46417),T=function(){var e=(0,i.lr)(),t=(0,r.Z)(e,1)[0].get("sessionId"),n=(0,c.useState)((0,S.jsx)(p,{})),s=(0,r.Z)(n,2),u=s[0],f=s[1],d=(0,c.useState)("00:00"),h=(0,r.Z)(d,2),v=h[0],m=h[1],O=(0,c.useState)("00:00"),E=(0,r.Z)(O,2),P=E[0],T=E[1],M=(0,c.useState)(0),R=(0,r.Z)(M,2),N=R[0],L=R[1],D=(0,c.useState)(0),A=(0,r.Z)(D,2),I=A[0],H=A[1],B=(0,c.useState)(1),V=(0,r.Z)(B,2),W=V[0],F=V[1],q=(0,c.useState)(!0),_=(0,r.Z)(q,2),G=_[0],U=_[1];(0,c.useEffect)((function(){Z=J(t);var e=function(){K(Z)},n=(0,z.D)(e);return Z.getDisplay().onresize=e,window.addEventListener("resize",n),function(){Z&&(Z.disconnect(),Z.getDisplay().getElement().innerHTML=""),window.removeEventListener("resize",n)}}),[t]);var X,$=function(e){switch(console.log("onTunnelStateChange",e),e){case l().Tunnel.State.OPEN:ee();case l().Tunnel.State.CLOSED:}},J=function(e){var t="".concat(a.fw,"/sessions/").concat(e,"/recording?X-Auth-Token=").concat((0,o.LP)()),n=new(l().StaticHTTPTunnel)(t);n.onstatechange=$;var r=new(l().SessionRecording)(n),c=r.getDisplay(),i=document.getElementById("display");return i.appendChild(c.getElement()),r.connect(),r.onplay=function(){f((0,S.jsx)(g,{}))},r.onpause=function(){f((0,S.jsx)(p,{}))},i.onclick=function(){ee()},c.onresize=function(e,t){e&&c.scale(i.offsetWidth/e)},r.onseek=function(e){L(e),m(k.formatTime(e))},r.onprogress=function(e){H(e),T(k.formatTime(e))},r},K=function(e){var t=e.getDisplay().getWidth(),n=e.getDisplay().getHeight(),r=window.innerWidth/t,c=(window.innerHeight-40)/n,i=Math.min(r,c);i&&e.getDisplay().scale(i)},Q=function e(){if(Y(),1!==W&&Z.isPlaying()){var t=100/(W-1),n=Z.getDuration(),r=Z.getPosition();r>=n||Z.seek(r+100,(function(){X=setTimeout(e,t)}))}},Y=function(){X&&clearTimeout(X)},ee=function(){N===I&&(L(0),Z.seek(0,(function(){Z.play(),Q()}))),Z.isPlaying()?(Z.pause(),Y(),x.ZP.info("\u6682\u505c")):(Z.play(),Q())};return(0,S.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1b1b1b"},children:(0,S.jsxs)("div",{id:"player",children:[(0,S.jsx)("div",{id:"display",children:(0,S.jsx)("div",{className:"notification-container",children:(0,S.jsx)("div",{className:"seek-notification"})})}),G?(0,S.jsx)("div",{style:{color:"white",fontWeight:"bold",cursor:"pointer"},onClick:function(){U(!1),ee()},children:"\u70b9\u51fb\u64ad\u653e"}):(0,S.jsxs)(y.Z,{justify:"space-around",align:"middle",style:{margin:4},gutter:[5,5],children:[(0,S.jsx)(w.Z,{flex:"none",children:(0,S.jsx)(b.Z,{size:"small",onClick:ee,icon:u})}),(0,S.jsx)(w.Z,{flex:"auto",children:(0,S.jsx)(j.Z,{value:N,max:I,tooltipVisible:!1,onChange:function(e){Z.seek(e,(function(){console.log("complete")}))}})}),(0,S.jsx)(w.Z,{flex:"none",children:(0,S.jsxs)(C.Z,{size:"small",defaultValue:"1",value:W,onChange:function(e){F(e),1===e?Y():Q()},children:[(0,S.jsx)(C.Z.Option,{value:1,children:"1.0\u500d\u901f"},"1"),(0,S.jsx)(C.Z.Option,{value:1.25,children:"1.25\u500d\u901f"},"1.25"),(0,S.jsx)(C.Z.Option,{value:1.5,children:"1.5\u500d\u901f"},"1.5"),(0,S.jsx)(C.Z.Option,{value:1.75,children:"1.75\u500d\u901f"},"1.75"),(0,S.jsx)(C.Z.Option,{value:2,children:"2.0\u500d\u901f"},"2.0")]})}),(0,S.jsx)(w.Z,{flex:"none",children:(0,S.jsxs)("div",{style:{color:"white"},children:[(0,S.jsx)("b",{children:v}),"/ ",(0,S.jsx)("b",{children:P})]})})]})]})})}},68086:function(e,t,n){n.d(t,{D:function(){return r}});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=null;return function(){var r=arguments,c=this;n&&clearTimeout(n),n=setTimeout((function(){e.apply(c,r),n=null}),t)}}},99925:function(e,t,n){var r=n(43144),c=n(15671),i=new((0,r.Z)((function e(){(0,c.Z)(this,e),this.hasText=function(e){return!(void 0===e||null===e||0===e.length)},this.zeroPad=function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}})));t.Z=i},43681:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),c=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},a=n(95734),o=function(e,t){return c.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="CheckOutlined";var s=c.forwardRef(o)},40765:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),c=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},a=n(95734),o=function(e,t){return c.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="SearchOutlined";var s=c.forwardRef(o)},82324:function(e,t,n){n.d(t,{c4:function(){return i}});var r=n(4942),c=n(87462),i=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,s=-1,l={},u={matchHandlers:{},dispatch:function(e){return l=e,o.forEach((function(e){return e(l)})),o.size>=1},subscribe:function(e){return o.size||this.register(),s+=1,o.set(s,e),e(l),s},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),o.clear()},register:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],i=function(n){var i=n.matches;e.dispatch((0,c.Z)((0,c.Z)({},l),(0,r.Z)({},t,i)))},o=window.matchMedia(n);o.addListener(i),e.matchHandlers[n]={mql:o,listener:i},i(o)}))}};t.ZP=u},55681:function(e,t,n){n.d(t,{F:function(){return o},Z:function(){return a}});var r=n(4942),c=n(46123),i=n.n(c);(0,n(56927).b)("warning","error","");function a(e,t,n){var c;return i()((c={},(0,r.Z)(c,"".concat(e,"-status-success"),"success"===t),(0,r.Z)(c,"".concat(e,"-status-warning"),"warning"===t),(0,r.Z)(c,"".concat(e,"-status-error"),"error"===t),(0,r.Z)(c,"".concat(e,"-status-validating"),"validating"===t),(0,r.Z)(c,"".concat(e,"-has-feedback"),n),c))}var o=function(e,t){return t||e}},59624:function(e,t,n){var r=n(26297);t.Z=r.Z},4431:function(e,t,n){n.d(t,{RV:function(){return l},Rk:function(){return u},Ux:function(){return d},aM:function(){return f},q3:function(){return o},qI:function(){return s}});var r=n(87462),c=n(21085),i=n(30832),a=n(47313),o=a.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),s=a.createContext(null),l=function(e){var t=(0,i.Z)(e,["prefixCls"]);return a.createElement(c.RV,(0,r.Z)({},t))},u=a.createContext({prefixCls:""}),f=a.createContext({}),d=function(e){var t=e.children,n=e.status,c=e.override,i=(0,a.useContext)(f),o=(0,a.useMemo)((function(){var e=(0,r.Z)({},i);return c&&delete e.isFormItemInput,n&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e}),[n,c,i]);return a.createElement(f.Provider,{value:o},t)}},96223:function(e,t,n){var r=(0,n(47313).createContext)({});t.Z=r},26297:function(e,t,n){var r=n(4942),c=n(87462),i=n(71002),a=n(46123),o=n.n(a),s=n(47313),l=n(74714),u=n(96223),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var d=["xs","sm","md","lg","xl","xxl"],h=s.forwardRef((function(e,t){var n,a=s.useContext(l.E_),h=a.getPrefixCls,p=a.direction,v=s.useContext(u.Z),m=v.gutter,Z=v.wrap,g=v.supportFlexGap,x=e.prefixCls,y=e.span,w=e.order,b=e.offset,j=e.push,C=e.pull,O=e.className,E=e.children,P=e.flex,k=e.style,z=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=h("col",x),T={};d.forEach((function(t){var n,a={},o=e[t];"number"===typeof o?a.span=o:"object"===(0,i.Z)(o)&&(a=o||{}),delete z[t],T=(0,c.Z)((0,c.Z)({},T),(n={},(0,r.Z)(n,"".concat(S,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(S,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(S,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(S,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(S,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(S,"-rtl"),"rtl"===p),n))}));var M=o()(S,(n={},(0,r.Z)(n,"".concat(S,"-").concat(y),void 0!==y),(0,r.Z)(n,"".concat(S,"-order-").concat(w),w),(0,r.Z)(n,"".concat(S,"-offset-").concat(b),b),(0,r.Z)(n,"".concat(S,"-push-").concat(j),j),(0,r.Z)(n,"".concat(S,"-pull-").concat(C),C),n),O,T),R={};if(m&&m[0]>0){var N=m[0]/2;R.paddingLeft=N,R.paddingRight=N}if(m&&m[1]>0&&!g){var L=m[1]/2;R.paddingTop=L,R.paddingBottom=L}return P&&(R.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==Z||R.minWidth||(R.minWidth=0)),s.createElement("div",(0,c.Z)({},z,{style:(0,c.Z)((0,c.Z)({},R),k),className:M,ref:t}),E)}));t.Z=h},84268:function(e,t,n){var r=n(87462),c=n(4942),i=n(71002),a=n(29439),o=n(46123),s=n.n(o),l=n(47313),u=n(74714),f=n(90640),d=n(82324),h=n(56927),p=n(96223),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},m=((0,h.b)("top","middle","bottom","stretch"),(0,h.b)("start","end","center","space-around","space-between","space-evenly"),l.forwardRef((function(e,t){var n,o=e.prefixCls,h=e.justify,m=e.align,Z=e.className,g=e.style,x=e.children,y=e.gutter,w=void 0===y?0:y,b=e.wrap,j=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=l.useContext(u.E_),O=C.getPrefixCls,E=C.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=(0,a.Z)(P,2),z=k[0],S=k[1],T=(0,f.Z)(),M=l.useRef(w);l.useEffect((function(){var e=d.ZP.subscribe((function(e){var t=M.current||0;(!Array.isArray(t)&&"object"===(0,i.Z)(t)||Array.isArray(t)&&("object"===(0,i.Z)(t[0])||"object"===(0,i.Z)(t[1])))&&S(e)}));return function(){return d.ZP.unsubscribe(e)}}),[]);var R=O("row",o),N=function(){var e=[void 0,void 0];return(Array.isArray(w)?w:[w,void 0]).forEach((function(t,n){if("object"===(0,i.Z)(t))for(var r=0;r<d.c4.length;r++){var c=d.c4[r];if(z[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t})),e}(),L=s()(R,(n={},(0,c.Z)(n,"".concat(R,"-no-wrap"),!1===b),(0,c.Z)(n,"".concat(R,"-").concat(h),h),(0,c.Z)(n,"".concat(R,"-").concat(m),m),(0,c.Z)(n,"".concat(R,"-rtl"),"rtl"===E),n),Z),D={},A=null!=N[0]&&N[0]>0?N[0]/-2:void 0,I=null!=N[1]&&N[1]>0?N[1]/-2:void 0;if(A&&(D.marginLeft=A,D.marginRight=A),T){var H=(0,a.Z)(N,2);D.rowGap=H[1]}else I&&(D.marginTop=I,D.marginBottom=I);var B=(0,a.Z)(N,2),V=B[0],W=B[1],F=l.useMemo((function(){return{gutter:[V,W],wrap:b,supportFlexGap:T}}),[V,W,b,T]);return l.createElement(p.Z.Provider,{value:F},l.createElement("div",(0,r.Z)({},j,{className:L,style:(0,r.Z)((0,r.Z)({},D),g),ref:t}),x))})));t.Z=m},68197:function(e,t,n){var r=n(84268);t.Z=r.Z}}]);