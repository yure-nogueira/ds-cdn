import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';

const sheetExampleCss = ".sc-sheet-example-h{display:block}";

const SheetExample$1 = /*@__PURE__*/ proxyCustomElement(class SheetExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeIcon = getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { closeIcon } = this;
        return (h(Host, null, h("ion-header", { class: "tp-sheet__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { slot: "icon-only", src: closeIcon }))), h("ion-content", { class: "tp-sheet__content" }, h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?")), h("ion-footer", { class: "tp-sheet__footer" }, h("ion-button", { class: "tp-sheet__button", expand: "block" }, "Salvar"))));
    }
    static get style() { return sheetExampleCss; }
}, [2, "sheet-example"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["sheet-example"];
    components.forEach(tagName => { switch (tagName) {
        case "sheet-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SheetExample$1);
            }
            break;
    } });
}

const SheetExample = SheetExample$1;
const defineCustomElement = defineCustomElement$1;

export { SheetExample, defineCustomElement };

//# sourceMappingURL=sheet-example.js.map