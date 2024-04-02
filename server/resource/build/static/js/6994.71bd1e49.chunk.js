"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[6994],{76994:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(71002),a=n(4942),u=n(87462),o=n(29439),c=n(46123),i=n.n(c),l=n(93433),s=n(47313),f=n(59767),v=n.n(f);function d(e){var t=s.useRef();t.current=e;var n=s.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return n}var m="undefined"!==typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect,E=function(e,t){var n=s.useRef(!0);m((function(){return e(n.current)}),t),m((function(){return n.current=!1,function(){n.current=!0}}),[])},p=function(e,t){E((function(t){if(!t)return e()}),t)};function h(e){var t=s.useRef(!1),n=s.useState(e),r=(0,o.Z)(n,2),a=r[0],u=r[1];return s.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[a,function(e,n){n&&t.current||u(e)}]}function g(e){return void 0!==e}var C=n(44925),M=n(1413),b={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=b.F1&&t<=b.F12)return!1;switch(t){case b.ALT:case b.CAPS_LOCK:case b.CONTEXT_MENU:case b.CTRL:case b.DOWN:case b.END:case b.ESC:case b.HOME:case b.INSERT:case b.LEFT:case b.MAC_FF_META:case b.META:case b.NUMLOCK:case b.NUM_CENTER:case b.PAGE_DOWN:case b.PAGE_UP:case b.PAUSE:case b.PRINT_SCREEN:case b.RIGHT:case b.SHIFT:case b.UP:case b.WIN_KEY:case b.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=b.ZERO&&e<=b.NINE)return!0;if(e>=b.NUM_ZERO&&e<=b.NUM_MULTIPLY)return!0;if(e>=b.A&&e<=b.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case b.SPACE:case b.QUESTION_MARK:case b.NUM_PLUS:case b.NUM_MINUS:case b.NUM_PERIOD:case b.NUM_DIVISION:case b.SEMICOLON:case b.DASH:case b.EQUALS:case b.COMMA:case b.PERIOD:case b.SLASH:case b.APOSTROPHE:case b.SINGLE_QUOTE:case b.OPEN_SQUARE_BRACKET:case b.BACKSLASH:case b.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},N=b,S=s.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});function y(e,t,n){return(e-t)/(n-t)}function x(e,t,n,r){var a=y(t,n,r),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function O(e,t){return Array.isArray(e)?e[t]:e}var R=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"];var Z=s.forwardRef((function(e,t){var n,r,o=e.prefixCls,c=e.value,l=e.valueIndex,f=e.onStartMove,v=e.style,d=e.render,m=e.dragging,E=e.onOffsetChange,p=(0,C.Z)(e,R),h=s.useContext(S),g=h.min,b=h.max,y=h.direction,Z=h.disabled,I=h.range,_=h.tabIndex,T=h.ariaLabelForHandle,A=h.ariaLabelledByForHandle,U=h.ariaValueTextFormatterForHandle,P="".concat(o,"-handle"),k=function(e){Z||f(e,l)},L=x(y,c,g,b),F=s.createElement("div",(0,u.Z)({ref:t,className:i()(P,(n={},(0,a.Z)(n,"".concat(P,"-").concat(l+1),I),(0,a.Z)(n,"".concat(P,"-dragging"),m),n)),style:(0,M.Z)((0,M.Z)({},L),v),onMouseDown:k,onTouchStart:k,onKeyDown:function(e){if(!Z){var t=null;switch(e.which||e.keyCode){case N.LEFT:t="ltr"===y||"btt"===y?-1:1;break;case N.RIGHT:t="ltr"===y||"btt"===y?1:-1;break;case N.UP:t="ttb"!==y?1:-1;break;case N.DOWN:t="ttb"!==y?-1:1;break;case N.HOME:t="min";break;case N.END:t="max";break;case N.PAGE_UP:t=2;break;case N.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),E(t,l))}},tabIndex:Z?null:O(_,l),role:"slider","aria-valuemin":g,"aria-valuemax":b,"aria-valuenow":c,"aria-disabled":Z,"aria-label":O(T,l),"aria-labelledby":O(A,l),"aria-valuetext":null===(r=O(U,l))||void 0===r?void 0:r(c)},p));return d&&(F=d(F,{index:l,prefixCls:o,value:c,dragging:m})),F})),I=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"];var _=s.forwardRef((function(e,t){var n=e.prefixCls,r=e.style,a=e.onStartMove,o=e.onOffsetChange,c=e.values,i=e.handleRender,l=e.draggingIndex,f=(0,C.Z)(e,I),v=s.useRef({});return s.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=v.current[e])||void 0===t||t.focus()}}})),s.createElement(s.Fragment,null,c.map((function(e,t){return s.createElement(Z,(0,u.Z)({ref:function(e){e?v.current[t]=e:delete v.current[t]},dragging:l===t,prefixCls:n,style:O(r,t),key:t,value:e,valueIndex:t,onStartMove:a,onOffsetChange:o,render:i},f))})))}));function T(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function A(e){var t=e.prefixCls,n=e.style,r=e.start,a=e.end,u=e.index,o=e.onStartMove,c=s.useContext(S),l=c.direction,f=c.min,v=c.max,d=c.disabled,m=c.range,E="".concat(t,"-track"),p=y(r,f,v),h=y(a,f,v),g=function(e){!d&&o&&o(e,-1)},C={};switch(l){case"rtl":C.right="".concat(100*p,"%"),C.width="".concat(100*h-100*p,"%");break;case"btt":C.bottom="".concat(100*p,"%"),C.height="".concat(100*h-100*p,"%");break;case"ttb":C.top="".concat(100*p,"%"),C.height="".concat(100*h-100*p,"%");break;default:C.left="".concat(100*p,"%"),C.width="".concat(100*h-100*p,"%")}return s.createElement("div",{className:i()(E,m&&"".concat(E,"-").concat(u+1)),style:(0,M.Z)((0,M.Z)({},C),n),onMouseDown:g,onTouchStart:g})}function U(e){var t=e.prefixCls,n=e.style,r=e.values,a=e.startPoint,u=e.onStartMove,o=s.useContext(S),c=o.included,i=o.range,l=o.min,f=s.useMemo((function(){if(!i){if(0===r.length)return[];var e=null!==a&&void 0!==a?a:l,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],u=0;u<r.length-1;u+=1)n.push({start:r[u],end:r[u+1]});return n}),[r,i,a,l]);return c?f.map((function(e,r){var a=e.start,o=e.end;return s.createElement(A,{index:r,prefixCls:t,style:O(n,r),start:a,end:o,key:r,onStartMove:u})})):null}function P(e){var t=e.prefixCls,n=e.style,r=e.children,u=e.value,o=e.onClick,c=s.useContext(S),l=c.min,f=c.max,v=c.direction,d=c.includedStart,m=c.includedEnd,E=c.included,p="".concat(t,"-text"),h=x(v,u,l,f);return s.createElement("span",{className:i()(p,(0,a.Z)({},"".concat(p,"-active"),E&&d<=u&&u<=m)),style:(0,M.Z)((0,M.Z)({},h),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){o(u)}},r)}function k(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?s.createElement("div",{className:a},n.map((function(e){var t=e.value,n=e.style,u=e.label;return s.createElement(P,{key:t,prefixCls:a,style:n,value:t,onClick:r},u)}))):null}function L(e){var t=e.prefixCls,n=e.value,r=e.style,u=e.activeStyle,o=s.useContext(S),c=o.min,l=o.max,f=o.direction,v=o.included,d=o.includedStart,m=o.includedEnd,E="".concat(t,"-dot"),p=v&&d<=n&&n<=m,h=(0,M.Z)((0,M.Z)({},x(f,n,c,l)),"function"===typeof r?r(n):r);return p&&(h=(0,M.Z)((0,M.Z)({},h),"function"===typeof u?u(n):u)),s.createElement("span",{className:i()(E,(0,a.Z)({},"".concat(E,"-active"),p)),style:h})}function F(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=s.useContext(S),c=o.min,i=o.max,l=o.step,f=s.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==l)for(var t=c;t<=i;)e.add(t),t+=l;return Array.from(e)}),[c,i,l,r,n]);return s.createElement("div",{className:"".concat(t,"-step")},f.map((function(e){return s.createElement(L,{prefixCls:t,key:e,value:e,style:a,activeStyle:u})})))}var w={},H=[];function D(e,t){}function K(e,t){}function B(e,t,n){t||w[n]||(e(!1,n),w[n]=!0)}function G(e,t){B(D,e,t)}G.preMessage=function(e){H.push(e)},G.resetWarned=function(){w={}},G.noteOnce=function(e,t){B(K,e,t)};var W=s.forwardRef((function(e,t){var n,u=e.prefixCls,c=void 0===u?"rc-slider":u,f=e.className,m=e.style,E=e.disabled,C=void 0!==E&&E,M=e.autoFocus,b=e.onFocus,N=e.onBlur,y=e.min,x=void 0===y?0:y,O=e.max,R=void 0===O?100:O,Z=e.step,I=void 0===Z?1:Z,A=e.value,P=e.defaultValue,L=e.range,w=e.count,H=e.onChange,D=e.onBeforeChange,K=e.onAfterChange,B=e.allowCross,G=void 0===B||B,W=e.pushable,V=void 0!==W&&W,Y=e.draggableTrack,Q=e.reverse,X=e.vertical,j=e.included,z=void 0===j||j,J=e.startPoint,q=e.trackStyle,$=e.handleStyle,ee=e.railStyle,te=e.dotStyle,ne=e.activeDotStyle,re=e.marks,ae=e.dots,ue=e.handleRender,oe=e.tabIndex,ce=void 0===oe?0:oe,ie=e.ariaLabelForHandle,le=e.ariaLabelledByForHandle,se=e.ariaValueTextFormatterForHandle,fe=s.useRef(),ve=s.useRef(),de=s.useMemo((function(){return X?Q?"ttb":"btt":Q?"rtl":"ltr"}),[Q,X]),me=s.useMemo((function(){return isFinite(x)?x:0}),[x]),Ee=s.useMemo((function(){return isFinite(R)?R:100}),[R]),pe=s.useMemo((function(){return null!==I&&I<=0?1:I}),[I]),he=s.useMemo((function(){return!0===V?pe:V>=0&&V}),[V,pe]),ge=s.useMemo((function(){return Object.keys(re||{}).map((function(e){var t=re[e],n={value:Number(e)};return t&&"object"===(0,r.Z)(t)&&!s.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"===typeof t})).sort((function(e,t){return e.value-t.value}))}),[re]),Ce=function(e,t,n,r,a,u){var o=s.useCallback((function(n){var r=isFinite(n)?n:e;return r=Math.min(t,n),Math.max(e,r)}),[e,t]),c=s.useCallback((function(r){if(null!==n){var a=e+Math.round((o(r)-e)/n)*n,u=function(e){return(String(e).split(".")[1]||"").length},c=Math.max(u(n),u(t),u(e)),i=Number(a.toFixed(c));return e<=i&&i<=t?i:null}return null}),[n,e,t,o]),i=s.useCallback((function(a){var u=o(a),i=r.map((function(e){return e.value}));null!==n&&i.push(c(a)),i.push(e,t);var l=i[0],s=t-e;return i.forEach((function(e){var t=Math.abs(u-e);t<=s&&(l=e,s=t)})),l}),[e,t,r,n,o,c]),f=function a(u,o,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"===typeof o){var f,v=u[i],d=v+o,m=[];r.forEach((function(e){m.push(e.value)})),m.push(e,t),m.push(c(v));var E=o>0?1:-1;"unit"===s?m.push(c(v+E*n)):m.push(c(d)),m=m.filter((function(e){return null!==e})).filter((function(e){return o<0?e<=v:e>=v})),"unit"===s&&(m=m.filter((function(e){return e!==v})));var p="unit"===s?v:d;f=m[0];var h=Math.abs(f-p);if(m.forEach((function(e){var t=Math.abs(e-p);t<h&&(f=e,h=t)})),void 0===f)return o<0?e:t;if("dist"===s)return f;if(Math.abs(o)>1){var g=(0,l.Z)(u);return g[i]=f,a(g,o-E,i,s)}return f}return"min"===o?e:"max"===o?t:void 0},v=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],u=f(e,t,n,r);return{value:u,changed:u!==a}},d=function(e){return null===u&&0===e||"number"===typeof u&&e<u};return[i,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=e.map(i),c=o[n],l=f(o,t,n,r);if(o[n]=l,!1===a){var s=u||0;n>0&&o[n-1]!==c&&(o[n]=Math.max(o[n],o[n-1]+s)),n<o.length-1&&o[n+1]!==c&&(o[n]=Math.min(o[n],o[n+1]-s))}else if("number"===typeof u||null===u){for(var m=n+1;m<o.length;m+=1)for(var E=!0;d(o[m]-o[m-1])&&E;){var p=v(o,1,m);o[m]=p.value,E=p.changed}for(var h=n;h>0;h-=1)for(var g=!0;d(o[h]-o[h-1])&&g;){var C=v(o,-1,h-1);o[h-1]=C.value,g=C.changed}for(var M=o.length-1;M>0;M-=1)for(var b=!0;d(o[M]-o[M-1])&&b;){var N=v(o,-1,M-1);o[M-1]=N.value,b=N.changed}for(var S=0;S<o.length-1;S+=1)for(var y=!0;d(o[S+1]-o[S])&&y;){var x=v(o,1,S+1);o[S+1]=x.value,y=x.changed}}return{value:o[n],values:o}}]}(me,Ee,pe,ge,G,he),Me=(0,o.Z)(Ce,2),be=Me[0],Ne=Me[1],Se=function(e,t){var n=t||{},r=n.defaultValue,a=n.value,u=n.onChange,c=n.postState,i=h((function(){return g(a)?a:g(r)?"function"===typeof r?r():r:"function"===typeof e?e():e})),l=(0,o.Z)(i,2),s=l[0],f=l[1],v=void 0!==a?a:s,m=c?c(v):v,E=d(u),C=h([v]),M=(0,o.Z)(C,2),b=M[0],N=M[1];return p((function(){var e=b[0];s!==e&&E(s,e)}),[b]),p((function(){g(a)||f(a)}),[a]),[m,d((function(e,t){f(e,t),N([v],t)}))]}(P,{value:A}),ye=(0,o.Z)(Se,2),xe=ye[0],Oe=ye[1],Re=s.useMemo((function(){var e=null===xe||void 0===xe?[]:Array.isArray(xe)?xe:[xe],t=(0,o.Z)(e,1)[0],n=null===xe?[]:[void 0===t?me:t];if(L){if(n=(0,l.Z)(e),w||void 0===xe){var r=w>=0?w+1:2;for(n=n.slice(0,r);n.length<r;){var a;n.push(null!==(a=n[n.length-1])&&void 0!==a?a:me)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=be(e)})),n}),[xe,L,me,w,be]),Ze=s.useRef(Re);Ze.current=Re;var Ie=function(e){return L?e:e[0]},_e=function(e){var t=(0,l.Z)(e).sort((function(e,t){return e-t}));H&&!v()(t,Ze.current)&&H(Ie(t)),Oe(t)},Te=function(e){if(!C){var t=0,n=Ee-me;Re.forEach((function(r,a){var u=Math.abs(e-r);u<=n&&(n=u,t=a)}));var r=(0,l.Z)(Re);r[t]=e,L&&!Re.length&&void 0===w&&r.push(e),null===D||void 0===D||D(Ie(r)),_e(r),null===K||void 0===K||K(Ie(r))}},Ae=s.useState(null),Ue=(0,o.Z)(Ae,2),Pe=Ue[0],ke=Ue[1];s.useEffect((function(){if(null!==Pe){var e=Re.indexOf(Pe);e>=0&&fe.current.focus(e)}ke(null)}),[Pe]);var Le=s.useMemo((function(){return(!Y||null!==pe)&&Y}),[Y,pe]),Fe=function(e,t,n,r,a,u,c,i,f){var v=s.useState(null),d=(0,o.Z)(v,2),m=d[0],E=d[1],p=s.useState(-1),h=(0,o.Z)(p,2),g=h[0],C=h[1],M=s.useState(n),b=(0,o.Z)(M,2),N=b[0],S=b[1],y=s.useState(n),x=(0,o.Z)(y,2),O=x[0],R=x[1],Z=s.useRef(null),I=s.useRef(null);s.useEffect((function(){-1===g&&S(n)}),[n,g]),s.useEffect((function(){return function(){document.removeEventListener("mousemove",Z.current),document.removeEventListener("mouseup",I.current),document.removeEventListener("touchmove",Z.current),document.removeEventListener("touchend",I.current)}}),[]);var _=function(e,t){N.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&E(t),S(e),c(e))},A=function(e,t){if(-1===e){var n=O[0],o=O[O.length-1],c=r-n,i=a-o,s=t*(a-r);s=Math.max(s,c),s=Math.min(s,i);var v=u(n+s);s=v-n;var d=O.map((function(e){return e+s}));_(d)}else{var m=(a-r)*t,E=(0,l.Z)(N);E[e]=O[e];var p=f(E,m,e,"dist");_(p.values,p.value)}},U=s.useRef(A);U.current=A;var P=s.useMemo((function(){var e=(0,l.Z)(n).sort((function(e,t){return e-t})),t=(0,l.Z)(N).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?N:n}),[n,N]);return[g,m,P,function(r,a){r.stopPropagation();var u=n[a];C(a),E(u),R(n);var o=T(r),c=o.pageX,l=o.pageY,s=function(n){n.preventDefault();var r,u=T(n),o=u.pageX,i=u.pageY,s=o-c,f=i-l,v=e.current.getBoundingClientRect(),d=v.width,m=v.height;switch(t){case"btt":r=-f/m;break;case"ttb":r=f/m;break;case"rtl":r=-s/d;break;default:r=s/d}U.current(a,r)},f=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",s),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",s),Z.current=null,I.current=null,C(-1),i()};document.addEventListener("mouseup",f),document.addEventListener("mousemove",s),document.addEventListener("touchend",f),document.addEventListener("touchmove",s),Z.current=s,I.current=f}]}(ve,de,Re,me,Ee,be,_e,(function(){null===K||void 0===K||K(Ie(Ze.current))}),Ne),we=(0,o.Z)(Fe,4),He=we[0],De=we[1],Ke=we[2],Be=we[3],Ge=function(e,t){Be(e,t),null===D||void 0===D||D(Ie(Ze.current))},We=-1!==He;s.useEffect((function(){if(!We){var e=Re.lastIndexOf(De);fe.current.focus(e)}}),[We]);var Ve=s.useMemo((function(){return(0,l.Z)(Ke).sort((function(e,t){return e-t}))}),[Ke]),Ye=s.useMemo((function(){return L?[Ve[0],Ve[Ve.length-1]]:[me,Ve[0]]}),[Ve,L,me]),Qe=(0,o.Z)(Ye,2),Xe=Qe[0],je=Qe[1];s.useImperativeHandle(t,(function(){return{focus:function(){fe.current.focus(0)},blur:function(){var e=document.activeElement;ve.current.contains(e)&&(null===e||void 0===e||e.blur())}}})),s.useEffect((function(){M&&fe.current.focus(0)}),[]);var ze=s.useMemo((function(){return{min:me,max:Ee,direction:de,disabled:C,step:pe,included:z,includedStart:Xe,includedEnd:je,range:L,tabIndex:ce,ariaLabelForHandle:ie,ariaLabelledByForHandle:le,ariaValueTextFormatterForHandle:se}}),[me,Ee,de,C,pe,z,Xe,je,L,ce,ie,le,se]);return s.createElement(S.Provider,{value:ze},s.createElement("div",{ref:ve,className:i()(c,f,(n={},(0,a.Z)(n,"".concat(c,"-disabled"),C),(0,a.Z)(n,"".concat(c,"-vertical"),X),(0,a.Z)(n,"".concat(c,"-horizontal"),!X),(0,a.Z)(n,"".concat(c,"-with-marks"),ge.length),n)),style:m,onMouseDown:function(e){e.preventDefault();var t,n=ve.current.getBoundingClientRect(),r=n.width,a=n.height,u=n.left,o=n.top,c=n.bottom,i=n.right,l=e.clientX,s=e.clientY;switch(de){case"btt":t=(c-s)/a;break;case"ttb":t=(s-o)/a;break;case"rtl":t=(i-l)/r;break;default:t=(l-u)/r}Te(be(me+t*(Ee-me)))}},s.createElement("div",{className:"".concat(c,"-rail"),style:ee}),s.createElement(U,{prefixCls:c,style:q,values:Ve,startPoint:J,onStartMove:Le?Ge:null}),s.createElement(F,{prefixCls:c,marks:ge,dots:ae,style:te,activeStyle:ne}),s.createElement(_,{ref:fe,prefixCls:c,style:$,values:Ke,draggingIndex:He,onStartMove:Ge,onOffsetChange:function(e,t){if(!C){var n=Ne(Re,e,t);null===D||void 0===D||D(Ie(Re)),_e(n.values),null===K||void 0===K||K(Ie(n.values)),ke(n.value)}},onFocus:b,onBlur:N,handleRender:ue}),s.createElement(k,{prefixCls:c,marks:ge,onClick:Te})))}));var V=W,Y=n(74714),Q=n(52312),X=n(64510),j=n(57325),z=s.forwardRef((function(e,t){var n=e.open,r=(0,s.useRef)(null),a=(0,s.useRef)(null);function o(){Q.Z.cancel(a.current),a.current=null}return s.useEffect((function(){return n?a.current=(0,Q.Z)((function(){var e;null===(e=r.current)||void 0===e||e.forcePopupAlign(),a.current=null})):o(),o}),[n,e.title]),s.createElement(j.Z,(0,u.Z)({ref:(0,X.sQ)(r,t)},e))})),J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},q=s.forwardRef((function(e,t){var n=s.useContext(Y.E_),c=n.getPrefixCls,l=n.direction,f=n.getPopupContainer,v=s.useState({}),d=(0,o.Z)(v,2),m=d[0],E=d[1],p=function(e,t){E((function(n){return(0,u.Z)((0,u.Z)({},n),(0,a.Z)({},e,t))}))},h=function(e,t){return e||(t?"rtl"===l?"left":"right":"top")},g=e.prefixCls,C=e.range,M=e.className,b=J(e,["prefixCls","range","className"]),N=c("slider",g),S=i()(M,(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===l));"rtl"!==l||b.vertical||(b.reverse=!b.reverse);var y=s.useMemo((function(){return C?"object"===(0,r.Z)(C)?[!0,C.draggableTrack]:[!0,!1]:[!1]}),[C]),x=(0,o.Z)(y,2),O=x[0],R=x[1];return s.createElement(V,(0,u.Z)({},b,{step:b.step,range:O,draggableTrack:R,className:S,ref:t,prefixCls:N,handleRender:function(t,n){var r,a=n.index,o=n.dragging,i=c(),l=e.tooltip,v=void 0===l?{}:l,d=e.vertical,E=(0,u.Z)({formatter:null!==(r=e.tipFormatter)&&void 0!==r?r:function(e){return"number"===typeof e?e.toString():""},open:e.tooltipVisible,placement:e.tooltipPlacement,getPopupContainer:e.getTooltipPopupContainer},v),g=E.open,C=E.placement,M=E.getPopupContainer,b=E.prefixCls,S=E.formatter,y=!!S&&(m[a]||o),x=g||void 0===g&&y,O=(0,u.Z)((0,u.Z)({},t.props),{onMouseEnter:function(){return p(a,!0)},onMouseLeave:function(){return p(a,!1)}}),R=c("tooltip",b);return s.createElement(z,{prefixCls:R,title:S?S(n.value):"",open:x,placement:h(C,d),transitionName:"".concat(i,"-zoom-down"),key:a,overlayClassName:"".concat(N,"-tooltip"),getPopupContainer:M||f},s.cloneElement(t,O))}}))}));var $=q}}]);