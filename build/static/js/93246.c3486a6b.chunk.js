"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[93246],{93246:(t,e,n)=>{n.r(e),n.d(e,{default:()=>S});var r=n(70579),o=n(65043),s=(t=>(t[t.Border=-1]="Border",t[t.Data=0]="Data",t[t.Function=1]="Function",t[t.Position=2]="Position",t[t.Timing=3]="Timing",t[t.Alignment=4]="Alignment",t))(s||{}),i=Object.defineProperty,a=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!==typeof e?e+"":e,n),n);const h=[1,0],l=[2,3],c=[3,2],u={L:[0,1],M:h,Q:l,H:c},f=/^[0-9]*$/,d=/^[A-Z0-9 $%*+.\/:-]*$/,g="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",m=1,w=40,y=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],p=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]];class M{constructor(t,e,n,r){if(this.version=t,this.ecc=e,a(this,"size"),a(this,"mask"),a(this,"modules",[]),a(this,"types",[]),t<m||t>w)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=4*t+17;const o=Array.from({length:this.size},(()=>!1));for(let i=0;i<this.size;i++)this.modules.push(o.slice()),this.types.push(o.map((()=>0)));this.drawFunctionPatterns();const s=this.addEccAndInterleave(n);if(this.drawCodewords(s),-1===r){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const n=this.getPenaltyScore();n<t&&(r=e,t=n),this.applyMask(e)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}getModule(t,e){return t>=0&&t<this.size&&e>=0&&e<this.size&&this.modules[e][t]}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2===0,s.Timing),this.setFunctionModule(n,6,n%2===0,s.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let r=0;r<e;r++)0===n&&0===r||0===n&&r===e-1||n===e-1&&0===r||this.drawAlignmentPattern(t[n],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.ecc[1]<<3|t;let n=e;for(let o=0;o<10;o++)n=n<<1^1335*(n>>>9);const r=21522^(e<<10|n);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,b(r,o));this.setFunctionModule(8,7,b(r,6)),this.setFunctionModule(8,8,b(r,7)),this.setFunctionModule(7,8,b(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,b(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,b(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,b(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;for(let n=0;n<18;n++){const t=b(e,n),r=this.size-11+n%3,o=Math.floor(n/3);this.setFunctionModule(r,o,t),this.setFunctionModule(o,r,t)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),i=t+r,a=e+n;i>=0&&i<this.size&&a>=0&&a<this.size&&this.setFunctionModule(i,a,2!==o&&4!==o,s.Position)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(t+r,e+n,1!==Math.max(Math.abs(r),Math.abs(n)),s.Alignment)}setFunctionModule(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.Function;this.modules[e][t]=n,this.types[e][t]=r}addEccAndInterleave(t){const e=this.version,n=this.ecc;if(t.length!==T(e,n))throw new RangeError("Invalid argument");const r=p[n[0]][e],o=y[n[0]][e],s=Math.floor(j(e)/8),i=r-s%r,a=Math.floor(s/r),h=[],l=function(t){if(t<1||t>255)throw new RangeError("Degree out of range");const e=[];for(let r=0;r<t-1;r++)e.push(0);e.push(1);let n=1;for(let r=0;r<t;r++){for(let t=0;t<e.length;t++)e[t]=H(e[t],n),t+1<e.length&&(e[t]^=e[t+1]);n=H(n,2)}return e}(o);for(let u=0,f=0;u<r;u++){const e=t.slice(f,f+a-o+(u<i?0:1));f+=e.length;const n=V(e,l);u<i&&e.push(0),h.push(e.concat(n))}const c=[];for(let u=0;u<h[0].length;u++)h.forEach(((t,e)=>{(u!==a-o||e>=i)&&c.push(t[u])}));return c}drawCodewords(t){if(t.length!==Math.floor(j(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let n=this.size-1;n>=1;n-=2){6===n&&(n=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const s=n-o,i=0===(n+1&2)?this.size-1-r:r;!this.types[i][s]&&e<8*t.length&&(this.modules[i][s]=b(t[e>>>3],7-(7&e)),e++)}}}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let r;switch(t){case 0:r=(n+e)%2===0;break;case 1:r=e%2===0;break;case 2:r=n%3===0;break;case 3:r=(n+e)%3===0;break;case 4:r=(Math.floor(n/3)+Math.floor(e/2))%2===0;break;case 5:r=n*e%2+n*e%3===0;break;case 6:r=(n*e%2+n*e%3)%2===0;break;case 7:r=((n+e)%2+n*e%3)%2===0;break;default:throw new Error("Unreachable")}!this.types[e][n]&&r&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let r=0;r<this.size;r++){let e=!1,n=0;const o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[r][s]===e?(n++,5===n?t+=3:n>5&&t++):(this.finderPenaltyAddHistory(n,o),e||(t+=40*this.finderPenaltyCountPatterns(o)),e=this.modules[r][s],n=1);t+=40*this.finderPenaltyTerminateAndCount(e,n,o)}for(let r=0;r<this.size;r++){let e=!1,n=0;const o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][r]===e?(n++,5===n?t+=3:n>5&&t++):(this.finderPenaltyAddHistory(n,o),e||(t+=40*this.finderPenaltyCountPatterns(o)),e=this.modules[s][r],n=1);t+=40*this.finderPenaltyTerminateAndCount(e,n,o)}for(let r=0;r<this.size-1;r++)for(let e=0;e<this.size-1;e++){const n=this.modules[r][e];n===this.modules[r][e+1]&&n===this.modules[r+1][e]&&n===this.modules[r+1][e+1]&&(t+=3)}let e=0;for(const r of this.modules)e=r.reduce(((t,e)=>t+(e?1:0)),e);const n=this.size*this.size;return t+=10*(Math.ceil(Math.abs(20*e-10*n)/n)-1),t}getAlignmentPatternPositions(){if(1===this.version)return[];{const t=Math.floor(this.version/7)+2,e=32===this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2)),n=[6];for(let r=this.size-7;n.length<t;r-=e)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(t){const e=t[1],n=e>0&&t[2]===e&&t[3]===3*e&&t[4]===e&&t[5]===e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){0===e[0]&&(t+=this.size),e.pop(),e.unshift(t)}}function v(t,e,n){if(e<0||e>31||t>>>e!==0)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)n.push(t>>>r&1)}function b(t,e){return 0!==(t>>>e&1)}class P{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}getData(){return this.bitData.slice()}}const z=[1,10,12,14],A=[2,9,11,13],k=[4,8,16,16];function F(t,e){return t[Math.floor((e+7)/17)+1]}function E(t){const e=[];for(const n of t)v(n,8,e);return new P(k,t.length,e)}function x(t){if(!C(t))throw new RangeError("String contains non-numeric characters");const e=[];for(let n=0;n<t.length;){const r=Math.min(t.length-n,3);v(Number.parseInt(t.substring(n,n+r),10),3*r+1,e),n+=r}return new P(z,t.length,e)}function R(t){if(!I(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");const e=[];let n;for(n=0;n+2<=t.length;n+=2){let r=45*g.indexOf(t.charAt(n));r+=g.indexOf(t.charAt(n+1)),v(r,11,e)}return n<t.length&&v(g.indexOf(t.charAt(n)),6,e),new P(A,t.length,e)}function C(t){return f.test(t)}function I(t){return d.test(t)}function B(t,e){let n=0;for(const r of t){const t=F(r.mode,e);if(r.numChars>=1<<t)return Number.POSITIVE_INFINITY;n+=4+t+r.bitData.length}return n}function D(t){t=encodeURI(t);const e=[];for(let n=0;n<t.length;n++)"%"!==t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(Number.parseInt(t.substring(n+1,n+3),16)),n+=2);return e}function j(t){if(t<m||t>w)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const n=Math.floor(t/7)+2;e-=(25*n-10)*n-55,t>=7&&(e-=36)}return e}function T(t,e){return Math.floor(j(t)/8)-y[e[0]][t]*p[e[0]][t]}function V(t,e){const n=e.map((t=>0));for(const r of t){const t=r^n.shift();n.push(0),e.forEach(((e,r)=>n[r]^=H(e,t)))}return n}function H(t,e){if(t>>>8!==0||e>>>8!==0)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(e>>>r&1)*t;return n}function O(t,e){var n;const{ecc:r="L",boostEcc:o=!1,minVersion:i=1,maxVersion:a=40,maskPattern:f=-1,border:d=1}=e||{},g="string"===typeof t?""===(y=t)?[]:C(y)?[x(y)]:I(y)?[R(y)]:[E(D(y))]:Array.isArray(t)?[E(t)]:void 0;var y;if(!g)throw new Error("uqr only supports encoding string and binary data, but got: ".concat(typeof t));const p=function(t,e){let n,r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(m<=o&&o<=s&&s<=w)||i<-1||i>7)throw new RangeError("Invalid value");for(n=o;;n++){const o=8*T(n,e),i=B(t,n);if(i<=o){r=i;break}if(n>=s)throw new RangeError("Data too long")}for(const g of[h,l,c])a&&r<=8*T(n,g)&&(e=g);const u=[];for(const h of t){v(h.mode[0],4,u),v(h.numChars,F(h.mode,n),u);for(const t of h.getData())u.push(t)}const f=8*T(n,e);v(0,Math.min(4,f-u.length),u),v(0,(8-u.length%8)%8,u);for(let h=236;u.length<f;h^=253)v(h,8,u);const d=Array.from({length:Math.ceil(u.length/8)},(()=>0));return u.forEach(((t,e)=>d[e>>>3]|=t<<7-(7&e))),new M(n,e,d,i)}(g,u[r],i,a,f,o),b=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e)return t;const{size:n}=t,r=n+2*e;t.size=r,t.data.forEach((t=>{for(let n=0;n<e;n++)t.unshift(!1),t.push(!1)}));for(let s=0;s<e;s++)t.data.unshift(Array.from({length:r},(t=>!1))),t.data.push(Array.from({length:r},(t=>!1)));const o=s.Border;t.types.forEach((t=>{for(let n=0;n<e;n++)t.unshift(o),t.push(o)}));for(let s=0;s<e;s++)t.types.unshift(Array.from({length:r},(t=>o))),t.types.push(Array.from({length:r},(t=>o)));return t}({version:p.version,maskPattern:p.mask,size:p.size,data:p.modules,types:p.types},d);return null!==e&&void 0!==e&&e.invert&&(b.data=b.data.map((t=>t.map((t=>!t))))),null===e||void 0===e||null===(n=e.onEncoded)||void 0===n||n.call(e,b),b}const S=function(t){let{ecl:e="M",size:n=200,uri:s,clearSize:i=0,image:a,imageBackground:h="transparent"}=t;const l=i,c=n-20,u=(0,o.useMemo)((()=>{const t=[],n=O(s,{ecc:e,border:0}).data,o=c/n.length,i=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];for(const{x:e,y:s}of i){const i=(n.length-7)*o*e,a=(n.length-7)*o*s;for(let n=0;n<3;n++)t.push((0,r.jsx)("rect",{fill:n%2!==0?"var(--ck-qr-background, var(--ck-body-background))":"var(--ck-qr-dot-color)",rx:-5*(n-2)+(0===n?2:3),ry:-5*(n-2)+(0===n?2:3),width:o*(7-2*n),height:o*(7-2*n),x:i+o*n,y:a+o*n},"".concat(n,"-").concat(e,"-").concat(s)))}if(a){const e=(n.length-7)*o*1,s=(n.length-7)*o*1;t.push((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("rect",{fill:h,rx:12,ry:12,width:7*o,height:7*o,x:e+0*o,y:s+0*o}),(0,r.jsx)("foreignObject",{width:7*o,height:7*o,x:e+0*o,y:s+0*o,children:(0,r.jsx)("div",{style:{borderRadius:12,overflow:"hidden"},children:a})})]}))}const u=Math.floor((l+25)/o),f=n.length/2-u/2,d=n.length/2+u/2-1;return n.forEach(((e,s)=>{e.forEach(((e,i)=>{var h;null!==(h=n[s])&&void 0!==h&&h[i]&&(s<7&&i<7||s>n.length-8&&i<7||s<7&&i>n.length-8||!a&&s>f&&s<d&&i>f&&i<d||t.push((0,r.jsx)("circle",{cx:s*o+o/2,cy:i*o+o/2,fill:"var(--ck-qr-dot-color)",r:o/3},"circle-".concat(s,"-").concat(i))))}))})),t}),[e,a,h,l,c,s]);return(0,r.jsxs)("svg",{height:c,width:c,viewBox:"0 0 ".concat(c," ").concat(c),style:{width:c,height:c},role:"presentation",children:[(0,r.jsx)("rect",{fill:"transparent",height:c,width:c}),u]})}}}]);
//# sourceMappingURL=93246.c3486a6b.chunk.js.map