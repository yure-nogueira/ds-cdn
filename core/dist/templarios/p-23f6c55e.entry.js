import{r as s,c as i,g as t,h as n,H as u}from"./p-5c36ed66.js";import{c as p}from"./p-9655f2f1.js";var e;(function(s){s["MINUS"]="minus";s["PLUS"]="plus"})(e||(e={}));var l;(function(s){s["MINUS"]="minus";s["PLUS"]="plus";s["BOTH"]="both"})(l||(l={}));const c=".sc-tp-plusminus-h{--tp-color:var(--tp-color-neutral-10);--tp-pointer-events:initial}.tp-plusminus.sc-tp-plusminus-h{font-size:32px;font-weight:600;line-height:32px;color:var(--tp-color);max-height:400px;width:100%;display:flex;justify-content:center;align-items:center}.tp-plusminus.sc-tp-plusminus-h .tp-plusminus__icon.sc-tp-plusminus{cursor:pointer;stroke:var(--tp-color);width:24px;height:24px}.tp-plusminus.sc-tp-plusminus-h .tp-plusminus__icon--minus.sc-tp-plusminus{margin-right:16px}.tp-plusminus.sc-tp-plusminus-h .tp-plusminus__icon--plus.sc-tp-plusminus{margin-left:16px}.tp-plusminus--disabled-minus.sc-tp-plusminus-h .tp-plusminus__icon--minus.sc-tp-plusminus,.tp-plusminus--disabled-plus.sc-tp-plusminus-h .tp-plusminus__icon--plus.sc-tp-plusminus{opacity:0.5;pointer-events:var(--tp-pointer-events)}.tp-plusminus--disabled-both.sc-tp-plusminus-h .tp-plusminus__icon--minus.sc-tp-plusminus,.tp-plusminus--disabled-both.sc-tp-plusminus-h .tp-plusminus__icon--plus.sc-tp-plusminus{opacity:0.5;pointer-events:var(--tp-pointer-events)}.tp-plusminus--xl.sc-tp-plusminus-h{font-size:48px}.tp-plusminus--xl.sc-tp-plusminus-h .tp-plusminus__icon.sc-tp-plusminus{width:48px;height:48px}.tp-color.sc-tp-plusminus-h{--tp-color:var(--tp-color-base);stroke:var(--tp-color-base)}";const o=c;const r=class{constructor(n){s(this,n);this.tpChange=i(this,"tpChange",7);this.tpChangeAlt=i(this,"tpChangeAlt",7);this.iconMinus=t("./assets/tp-minus-circle.svg");this.iconPlus=t("./assets/tp-plus-circle.svg");this.onClick=s=>{if(this.min===undefined||this.max===undefined||this.value===undefined||!this.automaticDisabled){return this.tpChange.emit(s)}if(s===e.MINUS&&this.value===this.min)return;if(s===e.PLUS&&this.value===this.max)return;const i=s===e.MINUS?-1:1;this.tpChangeAlt.emit(this.value+i)};this.color=undefined;this.size=undefined;this.disabled=undefined;this.automaticDisabled=false;this.useSlot=true;this.value=undefined;this.min=undefined;this.max=undefined}disabledHandler(s,i){if(this.min===undefined||this.max===undefined||this.value===undefined||!this.automaticDisabled)return;if(s===this.min&&s===this.max){return this.disabled="both"}if(s===this.min){return this.disabled="minus"}if(s===this.max){return this.disabled="plus"}this.disabled=undefined}componentDidLoad(){var s;this.disabledHandler((s=this.value)!==null&&s!==void 0?s:0,0)}render(){const{iconMinus:s,iconPlus:i,size:t,color:l,disabled:c,useSlot:o,value:r}=this;return n(u,{key:"5511c82c3171f6155b5024c1d1debec225cad976","from-stencil":true,class:p(l,{"tp-plusminus":true,[`tp-plusminus--disabled-${c}`]:c!==undefined,[`tp-plusminus--${t}`]:t!==undefined})},n("ion-icon",{key:"8d731659cbcc26f92ed5286abb6aaf4153e9c183",class:"tp-plusminus__icon tp-plusminus__icon--minus",src:s,onClick:()=>this.onClick(e.MINUS)}),o?n("slot",null):r!==null&&r!==void 0?r:0,n("ion-icon",{key:"e8402cb37eef56824bbe8b34618d02447944b376",class:"tp-plusminus__icon tp-plusminus__icon--plus",src:i,onClick:()=>this.onClick(e.PLUS)}))}static get assetsDirs(){return["assets"]}static get watchers(){return{value:["disabledHandler"]}}};r.style=o;export{r as tp_plusminus};
//# sourceMappingURL=p-23f6c55e.entry.js.map