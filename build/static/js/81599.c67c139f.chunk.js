"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[81599],{26803:(_,n,e)=>{e.r(n),e.d(n,{Component:()=>x,Fragment:()=>H,cloneElement:()=>z,createContext:()=>G,createElement:()=>b,createRef:()=>w,h:()=>b,hydrate:()=>j,isValidElement:()=>u,options:()=>o,render:()=>O,toChildArray:()=>F});var t,o,r,u,l,i,c,f,s,a,p,h,d={},v=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function g(_,n){for(var e in n)_[e]=n[e];return _}function k(_){var n=_.parentNode;n&&n.removeChild(_)}function b(_,n,e){var o,r,u,l={};for(u in n)"key"==u?o=n[u]:"ref"==u?r=n[u]:l[u]=n[u];if(arguments.length>2&&(l.children=arguments.length>3?t.call(arguments,2):e),"function"==typeof _&&null!=_.defaultProps)for(u in _.defaultProps)void 0===l[u]&&(l[u]=_.defaultProps[u]);return C(_,l,o,r,null)}function C(_,n,e,t,u){var l={type:_,props:n,key:e,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++r:u,__i:-1,__u:0};return null==u&&null!=o.vnode&&o.vnode(l),l}function w(){return{current:null}}function H(_){return _.children}function x(_,n){this.props=_,this.context=n}function P(_,n){if(null==n)return _.__?P(_.__,_.__i+1):null;for(var e;n<_.__k.length;n++)if(null!=(e=_.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof _.type?P(_):null}function E(_){var n,e;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,n=0;n<_.__k.length;n++)if(null!=(e=_.__k[n])&&null!=e.__e){_.__e=_.__c.base=e.__e;break}return E(_)}}function S(_){(!_.__d&&(_.__d=!0)&&l.push(_)&&!U.__r++||i!==o.debounceRendering)&&((i=o.debounceRendering)||c)(U)}function U(){var _,n,e,t,r,u,i,c;for(l.sort(f);_=l.shift();)_.__d&&(n=l.length,t=void 0,u=(r=(e=_).__v).__e,i=[],c=[],e.__P&&((t=g({},r)).__v=r.__v+1,o.vnode&&o.vnode(t),L(e.__P,t,r,e.__n,e.__P.namespaceURI,32&r.__u?[u]:null,i,null==u?P(r):u,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,R(i,t,c),t.__e!=u&&E(t)),l.length>n&&l.sort(f));U.__r=0}function N(_,n,e,t,o,r,u,l,i,c,f){var s,a,p,h,m,y=t&&t.__k||v,g=n.length;for(e.__d=i,D(e,n,y),i=e.__d,s=0;s<g;s++)null!=(p=e.__k[s])&&"boolean"!=typeof p&&"function"!=typeof p&&(a=-1===p.__i?d:y[p.__i]||d,p.__i=s,L(_,p,a,o,r,u,l,i,c,f),h=p.__e,p.ref&&a.ref!=p.ref&&(a.ref&&$(a.ref,null,p),f.push(p.ref,p.__c||h,p)),null==m&&null!=h&&(m=h),65536&p.__u||a.__k===p.__k?(i&&!i.isConnected&&(i=P(a)),i=T(p,i,_)):"function"==typeof p.type&&void 0!==p.__d?i=p.__d:h&&(i=h.nextSibling),p.__d=void 0,p.__u&=-196609);e.__d=i,e.__e=m}function D(_,n,e){var t,o,r,u,l,i=n.length,c=e.length,f=c,s=0;for(_.__k=[],t=0;t<i;t++)u=t+s,null!=(o=_.__k[t]=null==(o=n[t])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?C(null,o,null,null,null):y(o)?C(H,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?C(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=_,o.__b=_.__b+1,l=M(o,e,u,f),o.__i=l,r=null,-1!==l&&(f--,(r=e[l])&&(r.__u|=131072)),null==r||null===r.__v?(-1==l&&s--,"function"!=typeof o.type&&(o.__u|=65536)):l!==u&&(l===u+1?s++:l>u?f>i-u?s+=l-u:s--:l<u?l==u-1&&(s=l-u):s=0,l!==t+s&&(o.__u|=65536))):(r=e[u])&&null==r.key&&r.__e&&0==(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),q(r,r,!1),e[u]=null,f--);if(f)for(t=0;t<c;t++)null!=(r=e[t])&&0==(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),q(r,r))}function T(_,n,e){var t,o;if("function"==typeof _.type){for(t=_.__k,o=0;t&&o<t.length;o++)t[o]&&(t[o].__=_,n=T(t[o],n,e));return n}_.__e!=n&&(e.insertBefore(_.__e,n||null),n=_.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function F(_,n){return n=n||[],null==_||"boolean"==typeof _||(y(_)?_.some((function(_){F(_,n)})):n.push(_)),n}function M(_,n,e,t){var o=_.key,r=_.type,u=e-1,l=e+1,i=n[e];if(null===i||i&&o==i.key&&r===i.type&&0==(131072&i.__u))return e;if(t>(null!=i&&0==(131072&i.__u)?1:0))for(;u>=0||l<n.length;){if(u>=0){if((i=n[u])&&0==(131072&i.__u)&&o==i.key&&r===i.type)return u;u--}if(l<n.length){if((i=n[l])&&0==(131072&i.__u)&&o==i.key&&r===i.type)return l;l++}}return-1}function V(_,n,e){"-"===n[0]?_.setProperty(n,null==e?"":e):_[n]=null==e?"":"number"!=typeof e||m.test(n)?e:e+"px"}function W(_,n,e,t,o){var r;_:if("style"===n)if("string"==typeof e)_.style.cssText=e;else{if("string"==typeof t&&(_.style.cssText=t=""),t)for(n in t)e&&n in e||V(_.style,n,"");if(e)for(n in e)t&&e[n]===t[n]||V(_.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in _||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),_.l||(_.l={}),_.l[n+r]=e,e?t?e.u=t.u:(e.u=s,_.addEventListener(n,r?p:a,r)):_.removeEventListener(n,r?p:a,r);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in _)try{_[n]=null==e?"":e;break _}catch(_){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?_.removeAttribute(n):_.setAttribute(n,e))}}function A(_){return function(n){if(this.l){var e=this.l[n.type+_];if(null==n.t)n.t=s++;else if(n.t<e.u)return;return e(o.event?o.event(n):n)}}}function L(_,n,e,t,r,u,l,i,c,f){var s,a,p,h,d,v,m,k,b,C,w,P,E,S,U,D=n.type;if(void 0!==n.constructor)return null;128&e.__u&&(c=!!(32&e.__u),u=[i=n.__e=e.__e]),(s=o.__b)&&s(n);_:if("function"==typeof D)try{if(k=n.props,b=(s=D.contextType)&&t[s.__c],C=s?b?b.props.value:s.__:t,e.__c?m=(a=n.__c=e.__c).__=a.__E:("prototype"in D&&D.prototype.render?n.__c=a=new D(k,C):(n.__c=a=new x(k,C),a.constructor=D,a.render=B),b&&b.sub(a),a.props=k,a.state||(a.state={}),a.context=C,a.__n=t,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=D.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=g({},a.__s)),g(a.__s,D.getDerivedStateFromProps(k,a.__s))),h=a.props,d=a.state,a.__v=n,p)null==D.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==D.getDerivedStateFromProps&&k!==h&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(k,C),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(k,a.__s,C)||n.__v===e.__v)){for(n.__v!==e.__v&&(a.props=k,a.state=a.__s,a.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach((function(_){_&&(_.__=n)})),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[],a.__h.length&&l.push(a);break _}null!=a.componentWillUpdate&&a.componentWillUpdate(k,a.__s,C),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(h,d,v)}))}if(a.context=C,a.props=k,a.__P=_,a.__e=!1,P=o.__r,E=0,"prototype"in D&&D.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(n),s=a.render(a.props,a.state,a.context),S=0;S<a._sb.length;S++)a.__h.push(a._sb[S]);a._sb=[]}else do{a.__d=!1,P&&P(n),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++E<25);a.state=a.__s,null!=a.getChildContext&&(t=g(g({},t),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(h,d)),N(_,y(U=null!=s&&s.type===H&&null==s.key?s.props.children:s)?U:[U],n,e,t,r,u,l,i,c,f),a.base=n.__e,n.__u&=-161,a.__h.length&&l.push(a),m&&(a.__E=a.__=null)}catch(_){n.__v=null,c||null!=u?(n.__e=i,n.__u|=c?160:32,u[u.indexOf(i)]=null):(n.__e=e.__e,n.__k=e.__k),o.__e(_,n,e)}else null==u&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=I(e.__e,n,e,t,r,u,l,c,f);(s=o.diffed)&&s(n)}function R(_,n,e){n.__d=void 0;for(var t=0;t<e.length;t++)$(e[t],e[++t],e[++t]);o.__c&&o.__c(n,_),_.some((function(n){try{_=n.__h,n.__h=[],_.some((function(_){_.call(n)}))}catch(_){o.__e(_,n.__v)}}))}function I(_,n,e,o,r,u,l,i,c){var f,s,a,p,h,v,m,g=e.props,b=n.props,C=n.type;if("svg"===C?r="http://www.w3.org/2000/svg":"math"===C?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=u)for(f=0;f<u.length;f++)if((h=u[f])&&"setAttribute"in h==!!C&&(C?h.localName===C:3===h.nodeType)){_=h,u[f]=null;break}if(null==_){if(null===C)return document.createTextNode(b);_=document.createElementNS(r,C,b.is&&b),u=null,i=!1}if(null===C)g===b||i&&_.data===b||(_.data=b);else{if(u=u&&t.call(_.childNodes),g=e.props||d,!i&&null!=u)for(g={},f=0;f<_.attributes.length;f++)g[(h=_.attributes[f]).name]=h.value;for(f in g)if(h=g[f],"children"==f);else if("dangerouslySetInnerHTML"==f)a=h;else if("key"!==f&&!(f in b)){if("value"==f&&"defaultValue"in b||"checked"==f&&"defaultChecked"in b)continue;W(_,f,null,h,r)}for(f in b)h=b[f],"children"==f?p=h:"dangerouslySetInnerHTML"==f?s=h:"value"==f?v=h:"checked"==f?m=h:"key"===f||i&&"function"!=typeof h||g[f]===h||W(_,f,h,g[f],r);if(s)i||a&&(s.__html===a.__html||s.__html===_.innerHTML)||(_.innerHTML=s.__html),n.__k=[];else if(a&&(_.innerHTML=""),N(_,y(p)?p:[p],n,e,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":r,u,l,u?u[0]:e.__k&&P(e,0),i,c),null!=u)for(f=u.length;f--;)null!=u[f]&&k(u[f]);i||(f="value",void 0!==v&&(v!==_[f]||"progress"===C&&!v||"option"===C&&v!==g[f])&&W(_,f,v,g[f],r),f="checked",void 0!==m&&m!==_[f]&&W(_,f,m,g[f],r))}return _}function $(_,n,e){try{"function"==typeof _?_(n):_.current=n}catch(_){o.__e(_,e)}}function q(_,n,e){var t,r;if(o.unmount&&o.unmount(_),(t=_.ref)&&(t.current&&t.current!==_.__e||$(t,null,n)),null!=(t=_.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(_){o.__e(_,n)}t.base=t.__P=null}if(t=_.__k)for(r=0;r<t.length;r++)t[r]&&q(t[r],n,e||"function"!=typeof _.type);e||null==_.__e||k(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function B(_,n,e){return this.constructor(_,e)}function O(_,n,e){var r,u,l,i;o.__&&o.__(_,n),u=(r="function"==typeof e)?null:e&&e.__k||n.__k,l=[],i=[],L(n,_=(!r&&e||n).__k=b(H,null,[_]),u||d,d,n.namespaceURI,!r&&e?[e]:u?null:n.firstChild?t.call(n.childNodes):null,l,!r&&e?e:u?u.__e:n.firstChild,r,i),R(l,_,i)}function j(_,n){O(_,n,j)}function z(_,n,e){var o,r,u,l,i=g({},_.props);for(u in _.type&&_.type.defaultProps&&(l=_.type.defaultProps),n)"key"==u?o=n[u]:"ref"==u?r=n[u]:i[u]=void 0===n[u]&&void 0!==l?l[u]:n[u];return arguments.length>2&&(i.children=arguments.length>3?t.call(arguments,2):e),C(_.type,i,o||_.key,r||_.ref,null)}function G(_,n){var e={__c:n="__cC"+h++,__:_,Consumer:function(_,n){return _.children(n)},Provider:function(_){var e,t;return this.getChildContext||(e=[],(t={})[n]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(_){this.props.value!==_.value&&e.some((function(_){_.__e=!0,S(_)}))},this.sub=function(_){e.push(_);var n=_.componentWillUnmount;_.componentWillUnmount=function(){e.splice(e.indexOf(_),1),n&&n.call(_)}}),_.children}};return e.Provider.__=e.Consumer.contextType=e}t=v.slice,o={__e:function(_,n,e,t){for(var o,r,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(_)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(_,t||{}),u=o.__d),u)return o.__E=o}catch(n){_=n}throw _}},r=0,u=function(_){return null!=_&&null==_.constructor},x.prototype.setState=function(_,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof _&&(_=_(g({},e),this.props)),_&&g(e,_),null!=_&&this.__v&&(n&&this._sb.push(n),S(this))},x.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),S(this))},x.prototype.render=H,l=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(_,n){return _.__v.__b-n.__v.__b},U.__r=0,s=0,a=A(!1),p=A(!0),h=0},81599:(_,n,e)=>{e.r(n),e.d(n,{useCallback:()=>P,useContext:()=>E,useDebugValue:()=>S,useEffect:()=>b,useErrorBoundary:()=>U,useId:()=>N,useImperativeHandle:()=>H,useLayoutEffect:()=>C,useMemo:()=>x,useReducer:()=>k,useRef:()=>w,useState:()=>g});var t,o,r,u,l=e(26803),i=0,c=[],f=[],s=l.options,a=s.__b,p=s.__r,h=s.diffed,d=s.__c,v=s.unmount,m=s.__;function y(_,n){s.__h&&s.__h(o,_,i||n),i=0;var e=o.__H||(o.__H={__:[],__h:[]});return _>=e.__.length&&e.__.push({__V:f}),e.__[_]}function g(_){return i=1,k(A,_)}function k(_,n,e){var r=y(t++,2);if(r.t=_,!r.__c&&(r.__=[e?e(n):A(void 0,n),function(_){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,_);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=o,!o.u)){var u=function(_,n,e){if(!r.__c.__H)return!0;var t=r.__c.__H.__.filter((function(_){return!!_.__c}));if(t.every((function(_){return!_.__N})))return!l||l.call(this,_,n,e);var o=!1;return t.forEach((function(_){if(_.__N){var n=_.__[0];_.__=_.__N,_.__N=void 0,n!==_.__[0]&&(o=!0)}})),!(!o&&r.__c.props===_)&&(!l||l.call(this,_,n,e))};o.u=!0;var l=o.shouldComponentUpdate,i=o.componentWillUpdate;o.componentWillUpdate=function(_,n,e){if(this.__e){var t=l;l=void 0,u(_,n,e),l=t}i&&i.call(this,_,n,e)},o.shouldComponentUpdate=u}return r.__N||r.__}function b(_,n){var e=y(t++,3);!s.__s&&W(e.__H,n)&&(e.__=_,e.i=n,o.__H.__h.push(e))}function C(_,n){var e=y(t++,4);!s.__s&&W(e.__H,n)&&(e.__=_,e.i=n,o.__h.push(e))}function w(_){return i=5,x((function(){return{current:_}}),[])}function H(_,n,e){i=6,C((function(){return"function"==typeof _?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0}),null==e?e:e.concat(_))}function x(_,n){var e=y(t++,7);return W(e.__H,n)?(e.__V=_(),e.i=n,e.__h=_,e.__V):e.__}function P(_,n){return i=8,x((function(){return _}),n)}function E(_){var n=o.context[_.__c],e=y(t++,9);return e.c=_,n?(null==e.__&&(e.__=!0,n.sub(o)),n.props.value):_.__}function S(_,n){s.useDebugValue&&s.useDebugValue(n?n(_):_)}function U(_){var n=y(t++,10),e=g();return n.__=_,o.componentDidCatch||(o.componentDidCatch=function(_,t){n.__&&n.__(_,t),e[1](_)}),[e[0],function(){e[1](void 0)}]}function N(){var _=y(t++,11);if(!_.__){for(var n=o.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);_.__="P"+e[0]+"-"+e[1]++}return _.__}function D(){for(var _;_=c.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(M),_.__H.__h.forEach(V),_.__H.__h=[]}catch(t){_.__H.__h=[],s.__e(t,_.__v)}}s.__b=function(_){o=null,a&&a(_)},s.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),m&&m(_,n)},s.__r=function(_){p&&p(_),t=0;var n=(o=_.__c).__H;n&&(r===o?(n.__h=[],o.__h=[],n.__.forEach((function(_){_.__N&&(_.__=_.__N),_.__V=f,_.__N=_.i=void 0}))):(n.__h.forEach(M),n.__h.forEach(V),n.__h=[],t=0)),r=o},s.diffed=function(_){h&&h(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(1!==c.push(n)&&u===s.requestAnimationFrame||((u=s.requestAnimationFrame)||F)(D)),n.__H.__.forEach((function(_){_.i&&(_.__H=_.i),_.__V!==f&&(_.__=_.__V),_.i=void 0,_.__V=f}))),r=o=null},s.__c=function(_,n){n.some((function(_){try{_.__h.forEach(M),_.__h=_.__h.filter((function(_){return!_.__||V(_)}))}catch(o){n.some((function(_){_.__h&&(_.__h=[])})),n=[],s.__e(o,_.__v)}})),d&&d(_,n)},s.unmount=function(_){v&&v(_);var n,e=_.__c;e&&e.__H&&(e.__H.__.forEach((function(_){try{M(_)}catch(_){n=_}})),e.__H=void 0,n&&s.__e(n,e.__v))};var T="function"==typeof requestAnimationFrame;function F(_){var n,e=function(){clearTimeout(t),T&&cancelAnimationFrame(n),setTimeout(_)},t=setTimeout(e,100);T&&(n=requestAnimationFrame(e))}function M(_){var n=o,e=_.__c;"function"==typeof e&&(_.__c=void 0,e()),o=n}function V(_){var n=o;_.__c=_.__(),o=n}function W(_,n){return!_||_.length!==n.length||n.some((function(n,e){return n!==_[e]}))}function A(_,n){return"function"==typeof n?n(_):n}}}]);
//# sourceMappingURL=81599.c67c139f.chunk.js.map