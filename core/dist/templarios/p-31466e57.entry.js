import{g as a,r as e,h as t,H as c}from"./p-5c36ed66.js";const d={icons:{check:a("./assets/tp-check.svg")}};const r=".tp-calendar-day__date{display:flex;align-items:center;justify-content:center;height:48px;cursor:pointer}.tp-calendar-day__container{border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:transparent}.tp-calendar-day__container:hover{background:var(--tp-color-neutral-3)}.tp-calendar-day__text{font-size:12px;font-weight:600;line-height:12px}.tp-calendar-day__checked-icon{display:none;width:16px;height:16px}:host(.tp-calendar-day--active) .tp-calendar-day__container{background:var(--tp-active-background, var(--tp-color-brand-3));color:var(--tp-active-color)}:host(.tp-calendar-day--outlined) .tp-calendar-day__container{border:1px solid var(--tp-color-warning)}:host(.tp-calendar-day--checked) .tp-calendar-day__container{border:1px solid var(--tp-color-neutral-3)}:host(.tp-calendar-day--checked) .tp-calendar-day__text{display:none}:host(.tp-calendar-day--checked) .tp-calendar-day__checked-icon{display:block}:host(.tp-calendar-day--disabled){color:var(--tp-color-neutral-4)}:host(.tp-calendar-day--disabled:hover) .tp-calendar-day__container{background:transparent}:host(.tp-calendar-day--disabled:hover) .tp-calendar-day__date{cursor:initial}";const n=r;const s=class{constructor(a){e(this,a);this.active=false;this.checked=false;this.disabled=false;this.outlined=false}render(){const{active:a,checked:e,outlined:r,disabled:n}=this;return t(c,{key:"616205625c62dc047c90c9cf49862bfb087fbb76",class:{"tp-calendar-day":true,"tp-calendar-day--active":a,"tp-calendar-day--checked":e,"tp-calendar-day--disabled":n,"tp-calendar-day--outlined":r}},t("div",{key:"3c3cc80be721384a1a8e7cb52d8480f11fdbc8ea",class:"tp-calendar-day__date"},t("div",{key:"f54a61381dcc4fde6b146e6de5442ad85312997f",class:"tp-calendar-day__container"},t("ion-text",{key:"ab0f7807a43e13a8172ef66012376221e5cba8d6",class:"tp-calendar-day__text"},t("slot",{key:"2954aab84b1823ef6cd8d3a63276289e2bd1df0e"})),t("ion-icon",{key:"8762e4c3870538b779e561e0c188bdc245e4dedf",class:"tp-calendar-day__checked-icon",src:d.icons.check}))))}static get assetsDirs(){return["assets"]}};s.style=n;export{s as tp_calendar_day};
//# sourceMappingURL=p-31466e57.entry.js.map