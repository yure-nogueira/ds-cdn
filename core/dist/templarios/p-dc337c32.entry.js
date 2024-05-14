import{r as t,h as a,H as r}from"./p-28aab52d.js";import{c as e}from"./p-9655f2f1.js";const s=":host{--tp-skeleton-height:calc(var(--height) * 1px);--tp-skeleton-width:calc(var(--width) * 1px);--tp-skeleton-background-rgb:var(--tp-color-neutral-10-rgb);display:block;width:calc(var(--width) * 1px);height:max-content;color:var(--tp-color-neutral-10);border-radius:2px}.tp-chart-bar__container{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;height:calc(var(--height) + var(--height-label) * 1px);overflow:hidden;border-radius:2px}.tp-chart-bar__label{display:flex;margin-bottom:6px;transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}.tp-chart-bar__progress{width:100%;height:calc(var(--height) * 1px);background:var(--tp-color-brand-4);border-radius:2px;animation:load-chart-bar forwards 400ms ease-in-out}.tp-chart-bar__label-skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:2px;width:var(--tp-skeleton-width);height:12px;margin:0 0 6px}.tp-chart-bar__skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:2px;width:var(--tp-skeleton-width);height:var(--tp-skeleton-height);margin:0}:host(.tp-chart-bar--no-label){background:var(--tp-color-neutral-2)}:host(.tp-chart-bar--loading){background:transparent}:host(.tp-color) .tp-chart-bar__progress{background:var(--tp-color-base)}@keyframes load-chart-bar{0%{transform:translateY(calc(var(--height) * 1px))}100%{transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}}";const o=class{constructor(a){t(this,a);this.color=undefined;this.value=0;this.height=50;this.width=32;this.noLabel=false;this.loading=undefined}render(){const{color:t,value:s,height:o,width:l,noLabel:h,loading:c}=this;const i=o*Math.min(Math.max(0,s),100)/100;let n;if(c){n=a("div",{class:"tp-chart-bar__container"},!h&&a("ion-skeleton-text",{class:"tp-chart-bar__label-skeleton",animated:true}),a("ion-skeleton-text",{class:"tp-chart-bar__skeleton",animated:true}))}else{n=a("div",{class:"tp-chart-bar__container"},!h&&a("div",{class:"tp-chart-bar__label"},a("slot",null)),a("div",{class:"tp-chart-bar__progress"}))}return a(r,{class:e(t,{"tp-chart-bar":true,"tp-chart-bar--no-label":h,"tp-chart-bar--loading":c}),style:{"--value":`${i}`,"--height":`${o}`,"--width":`${l}`}},n)}static get assetsDirs(){return["assets"]}};o.style=s;export{o as tp_chart_bar};
//# sourceMappingURL=p-dc337c32.entry.js.map