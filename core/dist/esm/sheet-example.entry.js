import { r as registerInstance, g as getAssetPath, h, H as Host } from './index-7946b89c.js';

const sheetExampleCss = ".sc-sheet-example-h{display:block}";

const SheetExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeIcon = getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { closeIcon } = this;
        return (h(Host, null, h("ion-header", { class: "tp-sheet__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { slot: "icon-only", src: closeIcon }))), h("ion-content", { class: "tp-sheet__content" }, h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?")), h("ion-footer", { class: "tp-sheet__footer" }, h("ion-button", { class: "tp-sheet__button", expand: "block" }, "Salvar"))));
    }
};
SheetExample.style = sheetExampleCss;

export { SheetExample as sheet_example };

//# sourceMappingURL=sheet-example.entry.js.map