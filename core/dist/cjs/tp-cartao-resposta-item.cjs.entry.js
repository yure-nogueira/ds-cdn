'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const cartaoRespostaItemCss = ":host{--tp-border-color:var(--tp-color-neutral-3);--tp-color:var(--tp-color-neutral-10);--tp-background:transparent}:host{border-color:var(--tp-border-color);background:var(--tp-background);font-size:20px;font-weight:600;line-height:100%;border-width:1px;border-style:solid;padding:0;width:10vw;min-height:80px;display:flex;justify-content:center;align-items:center}@media (max-width: 1199.98px){:host{width:10vw;height:10vw}}@media (max-width: 991.98px){:host{width:13vw;height:13vw}}@media (max-width: 767.98px){:host{width:14vw;height:14vw}}@media (max-width: 575.98px){:host{width:17vw;height:17vw}}@media (max-width: 379.98px){:host{width:19vw;height:19vw}}:host .tp-cartao-resposta-item__container{position:relative;width:100%;height:100%}:host .tp-cartao-resposta-item__button{color:var(--tp-color);width:100%;height:100%;border:none;background:transparent;outline:none;font:inherit;cursor:pointer}:host(:hover){--tp-background:rgba(var(--tp-color-neutral-10-rgb), 0.16)}:host(.tp-cartao-resposta-item--canceled) .tp-cartao-resposta-item__button{text-decoration:line-through}:host(.tp-cartao-resposta-item--active){--tp-background:linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(var(--tp-color-brand-4-rgb), 0.3) 100%\n  );box-shadow:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);border-bottom:1px solid var(--tp-color-brand-4)}:host(.tp-cartao-resposta-item--printed){--tp-background:repeating-linear-gradient(\n    -45deg,\n    var(--tp-color-neutral-1),\n    var(--tp-color-neutral-1) 2px,\n    var(--tp-color-neutral-3) 2px,\n    var(--tp-color-neutral-3) 4px\n  )}:host(.tp-color){--tp-color:var(--tp-color-base)}:host(.tp-color.tp-cartao-resposta-item--active){--tp-background:linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(var(--tp-color-base-rgb), 0.3) 100%\n  );border-bottom:1px solid var(--tp-color-base)}:host(.tp-cartao-resposta-item--discursive){--tp-color:var(--tp-color-brand-3)}:host(.tp-cartao-resposta-item--incorrect){--tp-color:var(--tp-color-warning)}:host(.tp-cartao-resposta-item--correct){--tp-color:var(--tp-color-success)}";
const TpCartaoRespostaItemStyle0 = cartaoRespostaItemCss;

const TpCartaoRespostaItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.canceled = false;
        this.printed = false;
        this.active = false;
        this.incorrect = false;
        this.correct = false;
        this.discursive = false;
    }
    render() {
        const { color, canceled, printed, active, incorrect, correct, discursive } = this;
        return (index.h(index.Host, { key: '38741616d1e7be6401c43d04a71106802e0d380e', class: color_function.createColorClasses(color, {
                'tp-cartao-resposta-item': true,
                'tp-cartao-resposta-item--canceled': canceled,
                'tp-cartao-resposta-item--printed': printed,
                'tp-cartao-resposta-item--active': active,
                'tp-cartao-resposta-item--incorrect': incorrect,
                'tp-cartao-resposta-item--correct': correct,
                'tp-cartao-resposta-item--discursive': discursive,
            }) }, index.h("div", { key: '0388866318200fbf12489a63c74ef247df5ab6b9', class: "tp-cartao-resposta-item__container" }, index.h("button", { key: '00341a88afc444b1ddc93fffbc9856b1ecc266d2', class: "tp-cartao-resposta-item__button" }, index.h("slot", { key: '27a8fabf86abebcc72e9372dbe2cf76bb2894cd0' })))));
    }
};
TpCartaoRespostaItem.style = TpCartaoRespostaItemStyle0;

exports.tp_cartao_resposta_item = TpCartaoRespostaItem;

//# sourceMappingURL=tp-cartao-resposta-item.cjs.entry.js.map