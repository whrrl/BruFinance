"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[40663],{40663:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var c=t(70579),r=t(73793),o=t(65043),a=t(19901);const i=function(e){const{onBack:n,done:t,wallet:i,walletInfo:l,onGetStarted:s,locale:u}=e,[f,d]=(0,o.useState)(!1),{client:k,chain:S}=(0,r.c)(),h=(0,o.useCallback)((()=>{d(!1),i.connect({client:k,chain:S}).then((()=>{t()})).catch((e=>{console.error(e),d(!0)}))}),[k,i,S,t]),g=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{g.current||(g.current=!0,h())}),[h]),(0,c.jsx)(a.F,{locale:{getStartedLink:u.getStartedLink,instruction:u.connectionScreen.instruction,tryAgain:u.connectionScreen.retry,inProgress:u.connectionScreen.inProgress,failed:u.connectionScreen.failed},onBack:n,walletName:l.name,walletId:i.id,errorConnecting:f,onRetry:h,onGetStarted:s})}}}]);
//# sourceMappingURL=40663.8c7e01bb.chunk.js.map