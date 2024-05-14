'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const toolbarCss = ":host{--tp-background:var(--tp-color-neutral-2);--tp-center-width:auto;--tp-center-margin:0 16px;--tp-justify-content:space-between;padding:8px 16px;background:var(--tp-background);min-height:48px;height:auto;display:block;display:flex;align-items:center}.tp-toolbar__container{max-width:1200px;width:100%;margin:0 auto;display:flex;align-items:center;justify-content:var(--tp-justify-content)}.tp-toolbar__center{margin:var(--tp-center-margin);width:var(--tp-center-width)}:host(.tp-color.tp-toolbar){--tp-background:var(--tp-color-base)}:host(.tp-color.tp-toolbar) ::slotted(ion-button){color:var(--tp-color-contrast) !important}";
const TpToolbarStyle0 = toolbarCss;

const TpToolbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (index.h(index.Host, { key: 'd7bfddd4fb0fb89b727a652aa8ae3f895c216037', "from-stencil": true, class: color_function.createColorClasses(color, {
                'tp-toolbar': true,
            }) }, index.h("div", { key: '81a132d215d4eca9029fa6f494f88d9194ce891d', class: "tp-toolbar__container" }, index.h("slot", { key: 'da256225059a01a4cb2d23f7f8bbf5102a431a97', name: "start" }), index.h("div", { key: 'e8dbbc017e502efbd3e81bf94f3581856cb4c32f', class: "tp-toolbar__center" }, index.h("slot", { key: 'a28a9c58e641a4fcd3b6dffbe9fc2b4fcceff996' })), index.h("slot", { key: '0be1755de9f9a055dfaec686ad362c7aa6e24c57', name: "end" }))));
    }
};
TpToolbar.style = TpToolbarStyle0;

exports.tp_toolbar = TpToolbar;

//# sourceMappingURL=tp-toolbar.cjs.entry.js.map