import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';

const cartButtonCss = ".cart-button.sc-tp-elem-cart-button{position:relative;width:fit-content}.cart-button__count.sc-tp-elem-cart-button{position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;background:var(--tp-color-warning);color:var(--tp-color-neutral-10);height:24px;width:24px;border-radius:100px;font-size:12px;font-weight:600}";
const TpElemCartButtonStyle0 = cartButtonCss;

const TpElemCartButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cartCount = undefined;
    }
    render() {
        const { cartCount } = this;
        return (h(Host, { key: '345629c53b4dc9e04a64293842173486c9234eb0' }, h("div", { key: '87975c3af440725a79306d649a680aaf513063a4', class: "cart-button" }, h("ion-button", { key: '1231c1e38f0e84e91fceeb4718584aa4cbc06ce5', color: "brand", fill: "clear", "tp-no-padding": true, href: `${process.env.WP_BASE_URL}/cart` }, "Ir para o carrinho"), cartCount && h("span", { key: 'b1b63a20a6c84e58c15c013e88ee7961dfad07ec', class: "cart-button__count" }, cartCount))));
    }
};
TpElemCartButton.style = TpElemCartButtonStyle0;

export { TpElemCartButton as tp_elem_cart_button };

//# sourceMappingURL=tp-elem-cart-button.entry.js.map