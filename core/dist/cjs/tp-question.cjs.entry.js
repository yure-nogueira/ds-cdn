'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const questionCss = ":host{--tp-color:var(--tp-color-neutral-10);--tp-background:var(--tp-color-brand-1);--tp-lines:1}:host{background:var(--tp-background);color:var(--tp-color);padding:24px;font-size:14px;font-weight:400;line-height:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;width:100%}:host .tp-question__icon{margin-top:8px;font-size:24px;color:var(--tp-color);transition:200ms transform ease}:host .tp-question__text{display:-webkit-box;-webkit-line-clamp:var(--tp-lines);-webkit-box-orient:vertical;overflow:hidden;animation:close 0.15s steps(10, end) backwards}:host(.tp-question--collapsed) .tp-question__text{animation:open 0.15s steps(10, end) forwards}:host(.tp-question--collapsed) .tp-question__icon{transform:rotate(180deg)}@keyframes open{0%{-webkit-line-clamp:var(--tp-lines)}10%{-webkit-line-clamp:calc(var(--tp-lines) + 1)}20%{-webkit-line-clamp:calc(var(--tp-lines) + 2)}30%{-webkit-line-clamp:calc(var(--tp-lines) + 3)}40%{-webkit-line-clamp:calc(var(--tp-lines) + 4)}50%{-webkit-line-clamp:calc(var(--tp-lines) + 5)}60%{-webkit-line-clamp:calc(var(--tp-lines) + 6)}70%{-webkit-line-clamp:calc(var(--tp-lines) + 7)}80%{-webkit-line-clamp:calc(var(--tp-lines) + 8)}90%{-webkit-line-clamp:calc(var(--tp-lines) + 9)}100%{-webkit-line-clamp:initial}}@keyframes close{0%{-webkit-line-clamp:initial}10%{-webkit-line-clamp:calc(var(--tp-lines) + 9)}20%{-webkit-line-clamp:calc(var(--tp-lines) + 8)}30%{-webkit-line-clamp:calc(var(--tp-lines) + 7)}40%{-webkit-line-clamp:calc(var(--tp-lines) + 6)}50%{-webkit-line-clamp:calc(var(--tp-lines) + 5)}60%{-webkit-line-clamp:calc(var(--tp-lines) + 4)}70%{-webkit-line-clamp:calc(var(--tp-lines) + 3)}80%{-webkit-line-clamp:calc(var(--tp-lines) + 2)}90%{-webkit-line-clamp:calc(var(--tp-lines) + 1)}100%{-webkit-line-clamp:var(--tp-lines)}}:host(.tp-color){--tp-color:var(--tp-color-contrast);--tp-background:var(--tp-color-base)}";
const TpQuestionStyle0 = questionCss;

const TpQuestion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconDown = index.getAssetPath('./assets/tp-chevron-down.svg');
        this.color = undefined;
        this.collapsed = false;
        this.texto = undefined;
    }
    /**
     * todo
     */
    toggle() {
        this.collapsed = !this.collapsed;
    }
    render() {
        const { collapsed, texto, color, iconDown } = this;
        return (index.h(index.Host, { key: '6c053327d4448f44fe4af9401b30c04565b462cf', class: color_function.createColorClasses(color, {
                'tp-question': true,
                'tp-question--collapsed': collapsed,
            }), onClick: () => {
                this.toggle();
            } }, texto && index.h("div", { key: '3e3a167917b71fba07be89bb708a580e6a092549', class: "tp-question__text", innerHTML: texto }), index.h("div", { key: '0fb8c0e1ec8e596f79f56c47d8daa9a51d02144e', class: "tp-question__text" }, index.h("slot", { key: '9b8ecc16d15dd3274d48ecd3e64b36853785937e' })), index.h("ion-icon", { key: '81024397ddd64a34843b8f58bea4ac4d86521fa0', class: "tp-question__icon", src: iconDown })));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpQuestion.style = TpQuestionStyle0;

exports.tp_question = TpQuestion;

//# sourceMappingURL=tp-question.cjs.entry.js.map