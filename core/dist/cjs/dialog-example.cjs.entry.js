'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');

const dialogExampleCss = ".sc-dialog-example-h{display:block}";

const DialogExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("ion-header", { class: "tp-dialog__header" }, index.h("ion-button", { fill: "clear" }, index.h("ion-icon", { class: "tp-dialog__icon", slot: "icon-only", src: "./assets/tp-x.svg" }))), index.h("div", { class: "tp-dialog__content" }, index.h("ion-text", { "tp-type": "p16b" }, index.h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), index.h("ion-footer", { class: "tp-dialog__footer" }, index.h("ion-button", { class: "tp-dialog__button", fill: "outline" }, "Cancelar"), index.h("ion-button", { class: "tp-dialog__button" }, "Salvar"))));
    }
};
DialogExample.style = dialogExampleCss;

exports.dialog_example = DialogExample;

//# sourceMappingURL=dialog-example.cjs.entry.js.map