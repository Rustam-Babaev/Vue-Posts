"use strict";(self["webpackChunkvue_first_project"]=self["webpackChunkvue_first_project"]||[]).push([[489],{1489:function(t,e,r){r.r(e),r.d(e,{createSwipeBackGesture:function(){return y}});var n=r(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase());var s=r(9350);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,r,n)=>{const o=a(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let s,c;return t["__zone_symbol__addEventListener"]?(s="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(s="addEventListener",c="removeEventListener"),t[s](e,r,o),()=>{t[c](e,r,o)}},a=t=>{if(void 0===i)try{const e=Object.defineProperty({},"passive",{get:()=>{i=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){i=!1}return!!i};let i;const u=2e3,l=(t,e,r,n,o)=>{let s,a,i,l,v,m,p,h=0;const X=n=>{h=Date.now()+u,e(n)&&(!a&&r&&(a=c(t,"touchmove",r,o)),i||(i=c(n.target,"touchend",Y,o)),l||(l=c(n.target,"touchcancel",Y,o)))},y=n=>{h>Date.now()||e(n)&&(!m&&r&&(m=c(d(t),"mousemove",r,o)),p||(p=c(d(t),"mouseup",f,o)))},Y=t=>{_(),n&&n(t)},f=t=>{b(),n&&n(t)},_=()=>{a&&a(),i&&i(),l&&l(),a=i=l=void 0},b=()=>{m&&m(),p&&p(),m=p=void 0},g=()=>{_(),b()},w=(e=!0)=>{e?(s||(s=c(t,"touchstart",X,o)),v||(v=c(t,"mousedown",y,o))):(s&&s(),v&&v(),s=v=void 0,g())},S=()=>{w(!1),n=r=e=void 0};return{enable:w,stop:g,destroy:S}},d=t=>t instanceof Document?t:t.ownerDocument,v=(t,e,r)=>{const n=r*(Math.PI/180),o="x"===t,s=Math.cos(n),c=e*e;let a=0,i=0,u=!1,l=0;return{start(t,e){a=t,i=e,l=0,u=!0},detect(t,e){if(!u)return!1;const r=t-a,n=e-i,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture(){return 0!==l},getDirection(){return l}}},m=t=>{let e=!1,r=!1,n=!0,o=!1;const c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=c.canStart,i=c.onWillStart,u=c.onStart,d=c.onEnd,m=c.notCaptured,y=c.onMove,Y=c.threshold,f=c.passive,_=c.blurOnStart,b={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},g=v(c.direction,c.threshold,c.maxAngle),w=s.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=t=>{const e=X(t);return!(r||!n)&&(h(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime=e,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!a||!1!==a(b))&&(w.release(),!!w.start()&&(r=!0,0===Y?L():(g.start(b.startX,b.startY),!0))))},T=t=>{e?!o&&n&&(o=!0,p(b,t),requestAnimationFrame(E)):(p(b,t),g.detect(b.currentX,b.currentY)&&(g.isGesture()&&L()||G()))},E=()=>{e&&(o=!1,y&&y(b))},L=()=>!(w&&!w.capture())&&(e=!0,n=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime,i?i(b).then(M):M(),!0),D=()=>{if("undefined"!==typeof document){const t=document.activeElement;null!==t&&t.blur&&t.blur()}},M=()=>{_&&D(),u&&u(b),n=!0},k=()=>{e=!1,r=!1,o=!1,n=!0,w.release()},j=t=>{const r=e,o=n;k(),o&&(p(b,t),r?d&&d(b):m&&m(b))},C=l(c.el,S,T,j,{capture:!1,passive:f}),G=()=>{k(),C.stop(),m&&m(b)};return{enable(t=!0){t||(e&&j(void 0),k()),C.enable(t)},destroy(){w.destroy(),C.destroy()}}},p=(t,e)=>{if(!e)return;const r=t.currentX,n=t.currentY,o=t.currentTime;h(e,t);const s=t.currentX,c=t.currentY,a=t.currentTime=X(e),i=a-o;if(i>0&&i<100){const e=(s-r)/i,o=(c-n)/i;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=c-t.startY,t.event=e},h=(t,e)=>{let r=0,n=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,n=t.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},X=t=>t.timeStamp||Date.now(),y=(t,e,r,s,c)=>{const a=t.ownerDocument.defaultView,i=o(t),u=t=>{const e=50,{startX:r}=t;return i?r>=a.innerWidth-e:r<=e},l=t=>i?-t.deltaX:t.deltaX,d=t=>i?-t.velocityX:t.velocityX,v=t=>u(t)&&e(),p=t=>{const e=l(t),r=e/a.innerWidth;s(r)},h=t=>{const e=l(t),r=a.innerWidth,o=e/r,s=d(t),i=r/2,u=s>=0&&(s>.2||e>i),v=u?1-o:o,m=v*r;let p=0;if(m>5){const t=m/Math.abs(s);p=Math.min(t,540)}c(u,o<=0?.01:(0,n.j)(0,o,.9999),p)};return m({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:v,onStart:r,onMove:p,onEnd:h})}}}]);
//# sourceMappingURL=489.eca3fbd1.js.map