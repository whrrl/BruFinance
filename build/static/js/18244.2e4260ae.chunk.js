"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[18244],{78527:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},38918:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(54705),s=e(81274),n=e(63112);class c{constructor(t){(0,a.A)(this,"featureName",n.dr.name),(0,a.A)(this,"set",(0,s.f)((async t=>{const r=await n.bH.parseAsync(t);return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},8280:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(54705),s=e(81274),n=e(63112);class c{constructor(t){(0,a.A)(this,"featureName",n.d4.name),(0,a.A)(this,"setRecipient",(0,s.f)((async t=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},16400:(t,r,e)=>{e.d(r,{S:()=>i});var a=e(54705),s=e(63112),n=e(81274),c=e(70475);class i{get chainId(){return this._chainId}constructor(t,r,e){(0,a.A)(this,"transfer",(0,n.f)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,a.A)(this,"setApprovalForAll",(0,n.f)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,a.A)(this,"setApprovalForToken",(0,n.f)((async(t,r)=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,s.aM)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new c.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,s.aM)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,s.aM)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},18244:(t,r,e)=>{e.r(r),e.d(r,{NFTCollection:()=>g});var a=e(54705),s=e(81237),n=e(63112),c=e(81274),i=e(53053),p=e(76328),o=e(78527),h=e(66545),d=e(38918),l=e(43521),f=e(8280),u=e(16400),W=e(70475);e(6373),e(40462),e(28379),e(122);class g extends u.S{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cs(t,r,u,s,e),e,m),(0,a.A)(this,"mint",(0,c.f)((async t=>this.erc721.mint.prepare(t)))),(0,a.A)(this,"mintTo",(0,c.f)((async(t,r)=>this.erc721.mintTo.prepare(t,r)))),(0,a.A)(this,"mintBatch",(0,c.f)((async t=>this.erc721.mintBatch.prepare(t)))),(0,a.A)(this,"mintBatchTo",(0,c.f)((async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)))),(0,a.A)(this,"burn",(0,c.f)((t=>this.erc721.burn.prepare(t)))),this.abi=n.bk.parse(u||[]),this.metadata=new i.C(this.contractWrapper,n.cf,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new l.C(this.contractWrapper,g.contractRoles),this.royalties=new h.C(this.contractWrapper,this.metadata),this.sales=new f.C(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.platformFees=new d.C(this.contractWrapper),this.interceptor=new o.C(this.contractWrapper),this.signature=new W.a(this.contractWrapper,this.storage),this.owner=new h.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,n.H)("transfer"),s.L])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,e){return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.A)(g,"contractRoles",n.dD)}}]);
//# sourceMappingURL=18244.2e4260ae.chunk.js.map