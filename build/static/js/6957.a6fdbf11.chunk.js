"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[6957],{93300:(n,e,t)=>{t.d(e,{y:()=>o});var a=t(97779),i=t(3340);function o(n){const e=n.domain;return void 0!==(null===e||void 0===e?void 0:e.chainId)&&(0,a.q)(e.chainId)&&(n.domain={...n.domain,chainId:(0,i.ME)(n.domain.chainId)}),n}},6957:(n,e,t)=>{t.d(e,{autoConnectInjectedWallet:()=>v,connectInjectedWallet:()=>p});var a=t(33998),i=t(9893),o=t(83423),r=t(3340),s=t(97779),c=t(77717),d=t(49026),u=t(55881),h=t(28902),l=t(93300);function m(n){const e=(0,h.injectedProvider)(n);if(!e)throw new Error('No injected provider found for wallet: "'.concat(n,'"'));return e}async function p(n,e,t){const a=m(n),r=(await a.request({method:"eth_requestAccounts"}))[0];if(!r)throw new Error("no accounts available");const s=(0,o.bv)(r),c=await a.request({method:"eth_chainId"}).then(u.A);let d=e.chain&&e.chain.id===c?e.chain:(0,i.Q4)(c);return e.chain&&e.chain.id!==c&&(await w(a,e.chain),d=e.chain),y(a,s,d,t)}async function v(n,e,t){const a=m(n),r=(await a.request({method:"eth_accounts"}))[0];if(!r)throw new Error("no accounts available");const s=(0,o.bv)(r),c=await a.request({method:"eth_chainId"}).then(u.A);return y(a,s,t&&t.id===c?t:(0,i.Q4)(c),e)}function f(n,e){const t={address:e,async sendTransaction(e){return{transactionHash:await n.request({method:"eth_sendTransaction",params:[{accessList:e.accessList,value:e.value?(0,r.cK)(e.value):void 0,gas:e.gas?(0,r.cK)(e.gas):void 0,from:this.address,to:e.to,data:e.data}]})}},async signMessage(e){let{message:a}=e;if(!t.address)throw new Error("Provider not setup");const i="string"===typeof a?(0,r.i3)(a):a.raw instanceof Uint8Array?(0,r.EY)(a.raw):a.raw;return await n.request({method:"personal_sign",params:[i,t.address]})},async signTypedData(e){if(!n||!t.address)throw new Error("Provider not setup");const i=(0,l.y)(e),{domain:o,message:r,primaryType:d}=i,u={EIP712Domain:(0,a.H4)({domain:o}),...i.types};(0,a.$$)({domain:o,message:r,primaryType:d,types:u});const h=(0,c.A)({domain:null!==o&&void 0!==o?o:{},message:r,primaryType:d,types:u},((n,e)=>(0,s.q)(e)?e.toLowerCase():e));return await n.request({method:"eth_signTypedData_v4",params:[t.address,h]})}};return t}async function y(n,e,t,a){const r=f(n,e);async function s(){n.removeListener("accountsChanged",d),n.removeListener("chainChanged",h),n.removeListener("disconnect",c)}function c(){s(),a.emit("disconnect",void 0)}function d(e){if(e[0]){const t=f(n,(0,o.bv)(e[0]));a.emit("accountChanged",t),a.emit("accountsChanged",e)}else c()}function h(n){const e=(0,i.Q4)((0,u.A)(n));a.emit("chainChanged",e)}return n.on&&(n.on("accountsChanged",d),n.on("chainChanged",h),n.on("disconnect",c)),[r,t,s,e=>w(n,e)]}async function w(n,e){const t=(0,r.cK)(e.id);try{await n.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]})}catch(s){var a;if(4902!==(null===s||void 0===s?void 0:s.code)&&4902!==(null===s||void 0===s||null===(a=s.data)||void 0===a||null===(a=a.originalError)||void 0===a?void 0:a.code))throw s;{var o;const a=await(0,i.PB)(e);await n.request({method:"wallet_addEthereumChain",params:[{chainId:t,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:(0,d.k)(a),blockExplorerUrls:null===(o=a.explorers)||void 0===o?void 0:o.map((n=>n.url))}]})}}}},49026:(n,e,t)=>{function a(n){return function(n,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"http";const a=[];for(const i of n.rpc)("http"!==t||i.startsWith("http"))&&("ws"!==t||i.startsWith("ws"))&&(i.includes("${THIRDWEB_API_KEY}")?e?a.push(i.replace("${THIRDWEB_API_KEY}",e)+("undefined"!==typeof globalThis&&"APP_BUNDLE_ID"in globalThis?"/?bundleId=".concat(globalThis.APP_BUNDLE_ID):"")):a.push(i.replace("${THIRDWEB_API_KEY}","")):i.includes("${")||a.push(i));if(0===a.length)throw new Error('No RPC available for chainId "'.concat(n.chainId,'" with mode ').concat(t));return a}(n).map((n=>{try{const e=new URL(n);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return n}}))}t.d(e,{k:()=>a})},55881:(n,e,t)=>{t.d(e,{A:()=>o});var a=t(97779),i=t(3340);function o(n){return"number"===typeof n?n:(0,a.q)(n)?(0,i.ME)(n):"bigint"===typeof n?Number(n):Number.parseInt(n,10)}},33998:(n,e,t)=>{t.d(e,{H4:()=>h,$$:()=>u});var a=t(97965),i=t(25872),o=t(74074),r=t(22017),s=t(84117);const c=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,d=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u(n){const{domain:e,message:t,primaryType:u,types:h}=n,l=(n,e)=>{for(const t of n){const{name:n,type:u}=t,m=e[n],p=u.match(d);if(p&&("number"===typeof m||"bigint"===typeof m)){const[n,e,t]=p;(0,s.cK)(m,{signed:"int"===e,size:Number.parseInt(t)/8})}if("address"===u&&"string"===typeof m&&!(0,o.P)(m))throw new i.M({address:m});const v=u.match(c);if(v){const[n,e]=v;if(e&&(0,r.E)(m)!==Number.parseInt(e))throw new a.BI({expectedSize:Number.parseInt(e),givenSize:(0,r.E)(m)})}const f=h[u];f&&l(f,m)}};if(h.EIP712Domain&&e&&l(h.EIP712Domain,e),"EIP712Domain"!==u){const n=h[u];l(n,t)}}function h(n){let{domain:e}=n;return["string"===typeof(null===e||void 0===e?void 0:e.name)&&{name:"name",type:"string"},(null===e||void 0===e?void 0:e.version)&&{name:"version",type:"string"},"number"===typeof(null===e||void 0===e?void 0:e.chainId)&&{name:"chainId",type:"uint256"},(null===e||void 0===e?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(null===e||void 0===e?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}}}]);
//# sourceMappingURL=6957.a6fdbf11.chunk.js.map