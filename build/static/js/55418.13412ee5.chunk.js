"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[55418],{33037:(t,n,a)=>{a.d(n,{TokenBoundSmartWalletConnector:()=>s});var e=a(2614),o=a(34042),c=a(80267);a(28379),a(84983),a(15452);class s extends o.SmartWalletConnector{constructor(t){super({...t,factoryAddress:t.registryAddress||c.a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,e.YW("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}}}]);
//# sourceMappingURL=55418.13412ee5.chunk.js.map