import{r as t,h as e,H as r,a as n}from"./p-5c36ed66.js";const o="tp-segment-container__wrapper";const a="tp-segment-container--show-gradient";var i;(function(t){t["START"]="start";t["END"]="end"})(i||(i={}));const s=':host{position:relative;overflow:hidden}.tp-segment-container__wrapper{display:flex;overflow-x:auto;--tp-scroll-color-content:var(--tp-color-neutral-3);--tp-scroll-color-track:var(--tp-color-neutral-1);--tp-scroll-width:8px;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}.tp-segment-container__wrapper::-webkit-scrollbar{width:var(--tp-scroll-width);height:8px}@media (max-width: 576px){.tp-segment-container__wrapper::-webkit-scrollbar{width:0}}.tp-segment-container__wrapper::-webkit-scrollbar-track{background:var(--tp-scroll-color-track)}.tp-segment-container__wrapper::-webkit-scrollbar-thumb{color:transparent;background:var(--tp-scroll-color-content)}.tp-segment-container__wrapper::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}.tp-segment-container__wrapper::-webkit-scrollbar-thumb{background-clip:content-box;border:2px solid transparent;border-radius:16px;box-shadow:inset 0 0 0 10px}.tp-segment-container__wrapper::-webkit-scrollbar-button{display:none;width:0;height:0}.tp-segment-container__gradient{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.tp-segment-container__gradient::before,.tp-segment-container__gradient::after{position:absolute;top:0;display:none;width:32px;height:100%;content:""}.tp-segment-container__gradient::before{left:0;background:linear-gradient(to left, transparent, var(--tp-color-neutral-2))}.tp-segment-container__gradient::after{right:0;background:linear-gradient(to right, transparent, var(--tp-color-neutral-2))}:host(.tp-segment-container--show-gradient-start) .tp-segment-container__gradient::before{display:block}:host(.tp-segment-container--show-gradient-end) .tp-segment-container__gradient::after{display:block}';const c=s;const p=class{constructor(e){t(this,e)}componentDidLoad(){this.wrapperEl=this.host.shadowRoot.querySelector(`.${o}`);this.hasScroll=this.wrapperEl.scrollWidth>this.wrapperEl.clientWidth;if(this.hasScroll){this.addGradient(i.END)}this.wrapperEl.addEventListener("scroll",this.updateGradient.bind(this))}addGradient(t){if(!this.host.classList.contains(`${a}-${t}`)){this.host.classList.add(`${a}-${t}`)}}removeGradient(t){if(this.host.classList.contains(`${a}-${t}`)){this.host.classList.remove(`${a}-${t}`)}}updateGradient(){if(!this.hasScroll){this.removeGradient(i.START);this.removeGradient(i.END);return}const t=this.wrapperEl.scrollLeft===0;const e=this.wrapperEl.scrollWidth===Math.floor(this.wrapperEl.clientWidth+this.wrapperEl.scrollLeft)||this.wrapperEl.scrollWidth===Math.ceil(this.wrapperEl.clientWidth+this.wrapperEl.scrollLeft);if(t){this.removeGradient(i.START)}if(!t){this.addGradient(i.START)}if(e){this.removeGradient(i.END)}if(!e){this.addGradient(i.END)}}onWindowReize(){this.hasScroll=this.wrapperEl.scrollWidth>this.wrapperEl.clientWidth;this.updateGradient()}disconnectedCallback(){this.wrapperEl.removeEventListener("scroll",this.updateGradient.bind(this))}render(){return e(r,{key:"823851e65c90d4b03e4f88ad33de47d46839f236",class:"tp-segment-container"},e("div",{key:"465097a324b5cb701c1f0a18d523a48f549ea33a",class:"tp-segment-container__wrapper"},e("slot",{key:"10fc7bccacd18187215c8b533942e9b3e7186483"}),e("div",{key:"39bc58345168ae74a1332858aadc05d27a58bd38",class:"tp-segment-container__gradient"})))}get host(){return n(this)}};p.style=c;export{p as tp_segment_container};
//# sourceMappingURL=p-e2b9b423.entry.js.map