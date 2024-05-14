import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cartButtonCss = ".cart-button.sc-tp-elem-cart-button{position:relative;width:fit-content}.cart-button__count.sc-tp-elem-cart-button{position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;background:var(--tp-color-warning);color:var(--tp-color-neutral-10);height:24px;width:24px;border-radius:100px;font-size:12px;font-weight:600}";
const TpElemCartButtonStyle0 = cartButtonCss;

const TpElemCartButton$1 = /*@__PURE__*/ proxyCustomElement(class TpElemCartButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.cartCount = undefined;
    }
    render() {
        const { cartCount } = this;
        return (h(Host, { key: '345629c53b4dc9e04a64293842173486c9234eb0' }, h("div", { key: '87975c3af440725a79306d649a680aaf513063a4', class: "cart-button" }, h("ion-button", { key: '1231c1e38f0e84e91fceeb4718584aa4cbc06ce5', color: "brand", fill: "clear", "tp-no-padding": true, href: `${process.env.WP_BASE_URL}/cart` }, "Ir para o carrinho"), cartCount && h("span", { key: 'b1b63a20a6c84e58c15c013e88ee7961dfad07ec', class: "cart-button__count" }, cartCount))));
    }
    static get style() { return TpElemCartButtonStyle0; }
}, [2, "tp-elem-cart-button", {
        "cartCount": [2, "cart-count"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-elem-cart-button"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-elem-cart-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpElemCartButton$1);
            }
            break;
    } });
}

const TpElemCartButton = TpElemCartButton$1;
const defineCustomElement = defineCustomElement$1;

export { TpElemCartButton, defineCustomElement };

//# sourceMappingURL=tp-elem-cart-button.js.map