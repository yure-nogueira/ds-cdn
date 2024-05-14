'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');

const sheetExampleCss = ".sc-sheet-example-h{display:block}";
const SheetExampleStyle0 = sheetExampleCss;

const SheetExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeIcon = index.getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { closeIcon } = this;
        return (index.h(index.Host, { key: '05af0b54731d38e4fb73dc57b422d2dafd210a52' }, index.h("ion-header", { key: '0bcd4086900d2e5f7ab031ff18280f529c7a247b', class: "tp-sheet__header" }, index.h("ion-button", { key: '677e3490d86f64ad058c5b620d9a37922612b3ff', fill: "clear" }, index.h("ion-icon", { key: '00b4e06c5b6153aa0abca8d0fc6ff9fdee75db6c', slot: "icon-only", src: closeIcon }))), index.h("ion-content", { key: 'eb0ebf23d5775c328e5a6e8a41c820ee1b5680bd', class: "tp-sheet__content" }, index.h("ion-text", { key: 'f9320c1c69b062a6213c3f6fe2e100e2ade1d9be' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), index.h("ion-text", { key: 'e332b657dae8897998b445a55d074a975b07fdeb' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), index.h("ion-text", { key: 'bb39cbe3caff914cc58a5b8074d58a662b866c10' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?")), index.h("ion-footer", { key: '87b77b71c4e4a3a355dc9cfc8792d654b71655f4', class: "tp-sheet__footer" }, index.h("ion-button", { key: '8be164e759b6d81f9961d91b34d4da7dc524c512', class: "tp-sheet__button", expand: "block" }, "Salvar"))));
    }
};
SheetExample.style = SheetExampleStyle0;

exports.sheet_example = SheetExample;

//# sourceMappingURL=sheet-example.cjs.entry.js.map