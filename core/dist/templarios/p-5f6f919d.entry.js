import{r as a,h as r,H as t}from"./p-5c36ed66.js";import{c as e}from"./p-9655f2f1.js";const c=":host{display:block;width:calc(var(--width) * 1px);height:max-content;color:var(--tp-color-neutral-10);border-radius:2px}.tp-chart-bar__container{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;height:calc(var(--height) + var(--height-label) * 1px);overflow:hidden;border-radius:2px}.tp-chart-bar__label{display:flex;margin-bottom:6px;transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}.tp-chart-bar__progress{width:100%;height:calc(var(--height) * 1px);background:var(--tp-color-brand-4);border-radius:2px;animation:load-chart-bar forwards 400ms ease-in-out}:host(.tp-chart-bar--no-label){background:var(--tp-color-neutral-2)}:host(.tp-color) .tp-chart-bar__progress{background:var(--tp-color-base)}@keyframes load-chart-bar{0%{transform:translateY(calc(var(--height) * 1px))}100%{transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}}";const s=c;const o=class{constructor(r){a(this,r);this.color=undefined;this.value=0;this.width=32;this.height=50;this.noLabel=false}render(){const{color:a,value:c,height:s,width:o,noLabel:h}=this;const l=s*Math.min(Math.max(0,c),100)/100;return r(t,{key:"1f6af6697223a62c1b3c3d59f3cad52ae8e3f0ad",class:e(a,{"tp-chart-bar":true,"tp-chart-bar--no-label":h}),style:{"--value":`${l}`,"--height":`${s}`,"--width":`${o}`}},r("div",{key:"cf6eb7eee3ecc942e579470df2f5e2041c90813f",class:"tp-chart-bar__container"},!h&&r("div",{key:"1ab315a2f7675e971530927b567d0893b98faed1",class:"tp-chart-bar__label"},r("slot",{key:"cee21bf9393643df29e6873e54480b38090a7186"})),r("div",{key:"e5c782e5acf26da11fa86c45330e9d6946e14636",class:"tp-chart-bar__progress"})))}static get assetsDirs(){return["assets"]}};o.style=s;export{o as tp_chart_bar};
//# sourceMappingURL=p-5f6f919d.entry.js.map