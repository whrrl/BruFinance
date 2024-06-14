"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[11118,64194],{57322:(e,t,n)=>{n.d(t,{W:()=>o});var i=n(3754),s=n(28379);class o extends s.A{constructor(e){let{chains:t=i.k9b,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){var t,n;const i=null!==(t=null===(n=e.explorers)||void 0===n?void 0:n.map((e=>e.url)))&&void 0!==t?t:[];return i.length>0?i:void 0}isChainUnsupported(e){return!this.chains.some((t=>t.chainId===e))}updateChains(e){this.chains=e}}},50646:(e,t,n)=>{n.d(t,{A:()=>r,C:()=>c,R:()=>h,S:()=>d,U:()=>u,a:()=>a});var i=n(10019);class s extends Error{constructor(e,t){const{cause:n,code:i,data:s}=t;if(!Number.isInteger(i))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');super("".concat(e,". Cause: ").concat(JSON.stringify(n))),this.cause=n,this.code=i,this.data=s}}class o extends s{constructor(e,t){const{cause:n,code:i,data:s}=t;if(!(Number.isInteger(i)&&i>=1e3&&i<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:i,data:s})}}class r extends Error{constructor(){super(...arguments),(0,i._)(this,"name","AddChainError"),(0,i._)(this,"message","Error adding chain")}}class c extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super('Chain "'.concat(t,'" not configured for connector "').concat(n,'".')),(0,i._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,i._)(this,"name","ConnectorNotFoundError"),(0,i._)(this,"message","Connector not found")}}class h extends s{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,i._)(this,"name","ResourceUnavailable")}}class d extends o{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,i._)(this,"name","SwitchChainError")}}class u extends o{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,i._)(this,"name","UserRejectedRequestError")}}},69066:(e,t,n)=>{function i(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:()=>i})},64194:(e,t,n)=>{n.d(t,{InjectedConnector:()=>l});var i=n(10019),s=n(57322),o=n(50646),r=n(61348),c=n(84406),a=n(48987),h=n(38045),d=n(89106),u=n(69066);n(28379);class l extends s.W{constructor(e){const t={...{shimDisconnect:!0,getProvider:()=>{if((0,r.a)(globalThis.window))return globalThis.window.ethereum}},...e.options};super({chains:e.chains,options:t}),(0,i._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,i._)(this,"onAccountsChanged",(async e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:a.getAddress(e[0])})})),(0,i._)(this,"onChainChanged",(e=>{const t=(0,u.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})})),(0,i._)(this,"onDisconnect",(async e=>{if(1013===e.code){if(await this.getProvider())try{if(await this.getAccount())return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)}));const n=t.getProvider();if("string"===typeof t.name)this.name=t.name;else if(n){const e=function(e){var t,n;if(!e)return"Injected";const i=e=>e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":e.isImToken?"imToken":void 0;if(null!==(t=e.providers)&&void 0!==t&&t.length){var s;const t=new Set;let n=1;for(const s of e.providers){let e=i(s);e||(e="Unknown Wallet #".concat(n),n+=1),t.add(e)}const o=[...t];return o.length?o:null!==(s=o[0])&&void 0!==s?s:"Injected"}return null!==(n=i(e))&&void 0!==n?n:"Injected"}(n);t.name?this.name=t.name(e):this.name="string"===typeof e?e:e[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=e.connectorStorage}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const n=await this.getProvider();if(!n)throw new o.a;this.setupListeners(),this.emit("message",{type:"connecting"});const i=await n.request({method:"eth_requestAccounts"}),s=a.getAddress(i[0]);let r=await this.getChainId(),c=this.isChainUnsupported(r);if(e.chainId&&r!==e.chainId)try{await this.switchChain(e.chainId),r=e.chainId,c=this.isChainUnsupported(e.chainId)}catch(t){console.error("Could not switch to chain id: ".concat(e.chainId),t)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={account:s,chain:{id:r,unsupported:c},provider:n};return this.emit("connect",h),h}catch(n){if(this.isUserRejectedRequestError(n))throw new o.U(n);if(-32002===n.code)throw new o.R(n);throw n}}async disconnect(){const e=await this.getProvider();null!==e&&void 0!==e&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new o.a;const t=await e.request({method:"eth_accounts"});return a.getAddress(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new o.a;return e.request({method:"eth_chainId"}).then(u.n)}async getProvider(){const e=this.options.getProvider();return e&&(this._provider=e),this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new h.j(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new o.a;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider();if(!t)throw new o.a;const n=d.hexValue(e);try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});const i=this.chains.find((t=>t.chainId===e));return i||{chainId:e,name:"Chain ".concat(n),slug:"".concat(n),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){var i;const a=this.chains.find((t=>t.chainId===e));if(!a)throw new o.C({chainId:e,connectorId:this.id});if(4902===s.code||4902===(null===s||void 0===s||null===(i=s.data)||void 0===i||null===(i=i.originalError)||void 0===i?void 0:i.code))try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:(0,c.g)(a),blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),a}catch(r){if(this.isUserRejectedRequestError(r))throw new o.U(s);throw new o.A}if(this.isUserRejectedRequestError(s))throw new o.U(s);throw new o.S(s)}}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}}},11118:(e,t,n)=>{n.d(t,{ZerionConnector:()=>o});var i=n(64194),s=n(61348);n(28379);class o extends i.InjectedConnector{constructor(e){const t={...{name:"Zerion",getProvider(){function e(e){if(!(null===e||void 0===e||!e.isZerion))return e}var t;if((0,s.a)(globalThis.window))return null!==(t=globalThis.window.ethereum)&&void 0!==t&&t.providers?globalThis.window.ethereum.providers.find(e):e(globalThis.window.ethereum)}},...e.options};super({chains:e.chains,options:t,connectorStorage:e.connectorStorage})}}}}]);
//# sourceMappingURL=11118.a739b3a5.chunk.js.map