"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[24608],{24608:(a,t,n)=>{n.d(t,{relayBiconomyTransaction:()=>l});var e=n(31376),s=n(28887),o=n(38736),r=n(97779),i=n(24793),c=n(77717),d=n(86511);const h=0n;async function l(a){const[t,n]=await async function(a){var t;let{account:n,serializableTransaction:r,transaction:c,gasless:l}=a;const u=(0,o.P)({address:l.relayerForwarderAddress,chain:c.chain,client:c.client}),w=await(0,d.readContract)({contract:u,method:"function getNonce(address,uint256) view returns (uint256)",params:[n.address,h]}),p=Math.floor(Date.now()/1e3)+(null!==(t=l.deadlineSeconds)&&void 0!==t?t:3600),y={from:n.address,to:r.to,token:s.Y4,txGas:r.gas,tokenGasPrice:0n,batchId:h,batchNonce:w,deadline:p,data:r.data};if(!y.to)throw new Error("Cannot send a transaction without a `to` address");if(!y.txGas)throw new Error("Cannot send a transaction without a `gas` value");if(!y.data)throw new Error("Cannot send a transaction without a `data` value");const f=(0,e.h)([{type:"address"},{type:"address"},{type:"address"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"bytes32"}],[y.from,y.to,y.token,y.txGas,y.tokenGasPrice,y.batchId,y.batchNonce,(0,i.S)(y.data)]);return[y,await n.signMessage({message:f})]}(a),l=await fetch("https://api.biconomy.io/api/v2/meta-tx/native",{method:"POST",body:(0,c.A)({apiId:a.gasless.apiId,params:[t,n],from:t.from,to:t.to,gasLimit:t.txGas}),headers:{"x-api-key":a.gasless.apiKey,"Content-Type":"application/json;charset=utf-8"}});var u;if(!l.ok)throw null===(u=l.body)||void 0===u||u.cancel(),new Error("Failed to send transaction: ".concat(await l.text()));const w=await l.json(),p=w.txHash;if((0,r.q)(p))return{transactionHash:p,chain:a.transaction.chain,client:a.transaction.client};throw new Error("Failed to send transaction: ".concat((0,c.A)(w)))}}}]);
//# sourceMappingURL=24608.da17bb55.chunk.js.map