"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[36814],{36814:(e,n,t)=>{t.r(n),t.d(n,{FN_SELECTOR:()=>s,decodeOwnerOfResult:()=>y,encodeOwnerOf:()=>h,encodeOwnerOfParams:()=>O,isOwnerOfSupported:()=>m,ownerOf:()=>b});var r=t(86511),c=t(28482),o=t(63206),a=t(73924),d=t(41018);async function u(e){return function(e){if("0x"===e.bytecode)return!1;const n=Array.isArray(e.method)?e.method[0]:(0,a.V)(e.method);return e.bytecode.indexOf(n.slice(2))>-1}({bytecode:await(0,d._)(e.contract),method:e.method})}const s="0x6352211e",i=[{type:"uint256",name:"tokenId"}],f=[{type:"address"}];async function m(e){return u({contract:e,method:[s,i,f]})}function O(e){return(0,c.encodeAbiParameters)(i,[e.tokenId])}function h(e){return s+O(e).slice(2)}function y(e){return(0,o.n)(f,e)[0]}async function b(e){return(0,r.readContract)({contract:e.contract,method:[s,i,f],params:[e.tokenId]})}}}]);
//# sourceMappingURL=36814.40dce7a8.chunk.js.map