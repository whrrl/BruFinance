"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[36376],{57322:(e,t,n)=>{n.d(t,{W:()=>r});var s=n(3754),i=n(28379);class r extends i.A{constructor(e){let{chains:t=s.k9b,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){var t,n;const s=null!==(t=null===(n=e.explorers)||void 0===n?void 0:n.map((e=>e.url)))&&void 0!==t?t:[];return s.length>0?s:void 0}isChainUnsupported(e){return!this.chains.some((t=>t.chainId===e))}updateChains(e){this.chains=e}}},50646:(e,t,n)=>{n.d(t,{A:()=>o,C:()=>c,R:()=>h,S:()=>d,U:()=>u,a:()=>a});var s=n(10019);class i extends Error{constructor(e,t){const{cause:n,code:s,data:i}=t;if(!Number.isInteger(s))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');super("".concat(e,". Cause: ").concat(JSON.stringify(n))),this.cause=n,this.code=s,this.data=i}}class r extends i{constructor(e,t){const{cause:n,code:s,data:i}=t;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:s,data:i})}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class c extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super('Chain "'.concat(t,'" not configured for connector "').concat(n,'".')),(0,s._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends r{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},69066:(e,t,n)=>{function s(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:()=>s})},36376:(e,t,n)=>{n.d(t,{CoinbaseWalletConnector:()=>l});var s=n(10019),i=n(57322),r=n(50646),o=n(48987),c=n(38045),a=n(89106),h=n(28518),d=n(84406),u=n(69066);n(28379);class l extends i.W{constructor(e){let{chains:t,options:n}=e;super({chains:t,options:{reloadOnDisconnect:!1,...n}}),(0,s._)(this,"id",h.w.coinbase),(0,s._)(this,"name","Coinbase Wallet"),(0,s._)(this,"ready",!0),(0,s._)(this,"onAccountsChanged",(e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:o.getAddress(e[0])})})),(0,s._)(this,"onChainChanged",(e=>{const t=(0,u.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})})),(0,s._)(this,"onDisconnect",(()=>{this.emit("disconnect")}))}async connect(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const n=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const s=await n.enable(),i=o.getAddress(s[0]);let r=await this.getChainId(),a=this.isChainUnsupported(r);if(e&&r!==e)try{r=(await this.switchChain(e)).chainId,a=this.isChainUnsupported(r)}catch(t){console.error("Connected but failed to switch to desired chain ".concat(e),t)}return{account:i,chain:{id:r,unsupported:a},provider:new c.j(n)}}catch(n){if(/(user closed modal|accounts received is empty)/i.test(n.message))throw new r.U(n);throw n}}async disconnect(){if(!this._provider)return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const e=await this.getProvider(),t=await e.request({method:"eth_accounts"});if(0===t.length)throw new Error("No accounts found");return o.getAddress(t[0])}async getChainId(){const e=await this.getProvider();return(0,u.n)(e.chainId)}async getProvider(){if(!this._provider){var e;let t=(await Promise.all([n.e(31453),n.e(7263),n.e(20500),n.e(81599),n.e(48364),n.e(6528)]).then(n.bind(n,48364))).default;"function"!==typeof t&&"function"===typeof t.default&&(t=t.default),this._client=new t(this.options);const s=null===(e=this._client.walletExtension)||void 0===e?void 0:e.getChainId(),i=this.chains.find((e=>this.options.chainId?e.chainId===this.options.chainId:e.chainId===s))||this.chains[0],r=this.options.chainId||(null===i||void 0===i?void 0:i.chainId),o=this.options.jsonRpcUrl||(null===i||void 0===i?void 0:i.rpc[0]);this._provider=this._client.makeWeb3Provider(o,r)}return this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new c.j(t,e).getSigner(n)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider(),n=a.hexValue(e);try{var s;return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),null!==(s=this.chains.find((t=>t.chainId===e)))&&void 0!==s?s:{chainId:e,name:"Chain ".concat(n),slug:"".concat(n),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const s=this.chains.find((t=>t.chainId===e));if(!s)throw new r.C({chainId:e,connectorId:this.id});if(4902===i.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:(0,d.g)(s),blockExplorerUrls:this.getBlockExplorerUrls(s)}]}),s}catch(o){if(this._isUserRejectedRequestError(o))throw new r.U(o);throw new r.A}if(this._isUserRejectedRequestError(i))throw new r.U(i);throw new r.S(i)}}_isUserRejectedRequestError(e){return/(user rejected)/i.test(e.message)}async setupListeners(){const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!this._client)throw new Error("Coinbase Wallet SDK not initialized");return this._client.getQrUrl()}}}}]);
//# sourceMappingURL=36376.d8a6aa81.chunk.js.map