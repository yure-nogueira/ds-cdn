'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');

const modalExampleCss = ".sc-modal-example-h{display:block}";

const ModalExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("ion-header", { class: "tp-modal__header" }, index.h("ion-button", { fill: "clear" }, index.h("ion-icon", { slot: "icon-only", src: "./assets/tp-x.svg" }))), index.h("div", { class: "tp-modal__content" }, index.h("ion-text", { "tp-type": "p16b" }, index.h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), index.h("ion-footer", { class: "tp-modal__footer" }, index.h("ion-button", { class: "tp-modal__button", fill: "outline" }, "Cancelar"), index.h("ion-button", { class: "tp-modal__button" }, "Salvar"))));
    }
};
ModalExample.style = modalExampleCss;

exports.modal_example = ModalExample;

//# sourceMappingURL=modal-example.cjs.entry.js.map