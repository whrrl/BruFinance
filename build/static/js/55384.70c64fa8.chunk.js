"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[55384],{55384:(a,e,n)=>{n.d(e,{relayEngineTransaction:()=>d});var t=n(38736),r=n(77717),s=n(86511),o=n(15626);const i=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"}],c=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"},{name:"chainid",type:"uint256"}];async function d(a){const{message:e,messageType:n,signature:o}=await async function(a){let{account:e,serializableTransaction:n,transaction:r,gasless:o}=a;const d=(0,t.P)({address:o.relayerForwarderAddress,chain:r.chain,client:r.client}),u=await(0,s.readContract)({contract:d,method:"function getNonce(address) view returns (uint256)",params:[e.address]}),[l,w]=await(async(a,t)=>{if(!n.to)throw new Error("engine transactions must have a 'to' address");if(!n.gas)throw new Error("engine transactions must have a 'gas' value");if(!n.data)throw new Error("engine transactions must have a 'data' value");if(o.experimentalChainlessSupport){const a={from:e.address,to:n.to,value:0n,gas:n.gas,nonce:u,data:n.data,chainid:BigInt(r.chain.id)};return[await e.signTypedData({domain:{name:"GSNv2 Forwarder",version:"0.0.1",verifyingContract:d.address},message:a,primaryType:"ForwardRequest",types:{ForwardRequest:c}}),a]}const s={from:e.address,to:n.to,value:0n,gas:n.gas,nonce:u,data:n.data};return[await e.signTypedData({domain:{name:null!==(a=o.domainName)&&void 0!==a?a:"GSNv2 Forwarder",version:null!==(t=o.domainVersion)&&void 0!==t?t:"0.0.1",chainId:r.chain.id,verifyingContract:d.address},message:s,primaryType:"ForwardRequest",types:{ForwardRequest:i}}),s]})();return{message:w,signature:l,messageType:"forward"}}(a),d=await fetch(a.gasless.relayerUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:(0,r.A)({request:e,type:n,signature:o,forwarderAddress:a.gasless.relayerForwarderAddress})});if(!d.ok)throw new Error("Failed to send transaction: ".concat(await d.text()));const l=await d.json();if(!l.result)throw new Error("Relay transaction failed: ".concat(l.message));const w=l.result.queueId,m=Date.now()+6e4;for(;Date.now()<m;){const e=await u({options:a,queueId:w});if(e)return{transactionHash:e.transactionHash,chain:a.transaction.chain,client:a.transaction.client};await new Promise((a=>setTimeout(a,1e3)))}throw new Error("Failed to find relayed transaction after ".concat(6e4,"ms"))}async function u(a){const{options:e,queueId:n}=a,t=e.gasless.relayerUrl.split("/relayer/")[0],r=await fetch("".concat(t,"/transaction/status/").concat(n),{method:"GET"}),s=await r.json();if(!r.ok)return null;const i=s.result;if(!i)return null;switch(i.status){case"errored":throw new Error("Transaction errored with reason: ".concat(i.errorMessage));case"cancelled":throw new Error("Transaction execution cancelled.");case"mined":return await(0,o.L)({client:e.transaction.client,chain:e.transaction.chain,transactionHash:i.transactionHash});default:return null}}}}]);
//# sourceMappingURL=55384.70c64fa8.chunk.js.map