"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[22622],{69066:(t,i,n)=>{function s(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}n.d(i,{n:()=>s})},22622:(t,i,n)=>{n.d(i,{SignerConnector:()=>h});var s=n(10019),e=n(69066),r=n(19532),o=n(63112);n(28379);class h extends r.C{constructor(t){super(),(0,s._)(this,"onChainChanged",(t=>{const i=(0,e.n)(t),n=!this.options.chains.find((t=>t.chainId===i));this.emit("change",{chain:{id:i,unsupported:n}})})),this.options=t}async connect(t){t.chainId&&this.switchChain(t.chainId);const i=await this.getSigner();return await i.getAddress()}async disconnect(){this._provider=void 0,this._signer=void 0}async getAddress(){const t=await this.getSigner();if(!t)throw new Error("No signer found");return await t.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return this._provider||(this._provider=(0,o.a$)(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),this._provider}async getSigner(){if(!this._signer){const t=await this.getProvider();this._signer=c(this.options.signer,t)}return this._signer}async switchChain(t){const i=this.options.chains.find((i=>i.chainId===t));if(!i)throw new Error("Chain not found for chainId ".concat(t,", please add it to the chains property when creating this wallet"));this._provider=(0,o.a$)(i,{clientId:this.options.clientId,secretKey:this.options.secretKey}),this._signer=c(this.options.signer,this._provider),this.onChainChanged(t)}async setupListeners(){}updateChains(t){this.options.chains=t}}function c(t,i){return i?t.connect(i):t}}}]);
//# sourceMappingURL=22622.fcc81615.chunk.js.map