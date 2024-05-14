import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cartItemCss = ".cart-item.sc-tp-elem-cart-item{display:flex;gap:16px;align-items:center}.cart-item__image-container.sc-tp-elem-cart-item{display:flex;width:200px;overflow:hidden;border-radius:8px}@media (max-width: 767.98px){.cart-item__image-container.sc-tp-elem-cart-item{width:150px}}@media (max-width: 575.98px){.cart-item__image-container.sc-tp-elem-cart-item{width:100px}}.cart-item__middle.sc-tp-elem-cart-item{flex:1}.cart-item__price-container.sc-tp-elem-cart-item{display:flex;gap:4px}.cart-item__right.sc-tp-elem-cart-item{text-align:end}.sc-tp-elem-cart-item-s>[slot=image]{display:flex}.sc-tp-elem-cart-item-s>[slot=title]{display:block;margin-bottom:8px}.sc-tp-elem-cart-item-s>[slot=regular-price]{margin-right:8px;text-decoration:line-through}.sc-tp-elem-cart-item-s>[slot=save]{display:block;margin-bottom:8px}.sc-tp-elem-cart-item-s>[slot=short-description]{display:block;margin-bottom:16px}.sc-tp-elem-cart-item-s>[slot=plusminus]{justify-content:flex-start !important;margin-bottom:4px}.sc-tp-elem-cart-item-s>[slot=item-total]{display:block}";
const TpElemCartItemStyle0 = cartItemCss;

const TpElemCartItem = /*@__PURE__*/ proxyCustomElement(class TpElemCartItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'af3a28e077bf0019db310812616650471a646f92' }, h("div", { key: '12e9113be8ddb9df6f79c9412a29621003a880a9', class: "cart-item" }, h("div", { key: 'cf8194d172317ef75124374a5f9c58945ee8b82b', class: "cart-item__left" }, h("div", { key: '8b10589703a19d78a441e28ed586d3b564ae1d5d', class: "cart-item__image-container" }, h("slot", { key: 'e7daac2bc14054f0b0c4ef0fe310a32743098364', name: "image" }))), h("div", { key: '849d32722b5fa84a8d894ea5b423d15db31c1f6d', class: "cart-item__middle" }, h("slot", { key: 'c486a5ee037c823c2c54dfc6336d5458ffda3a19', name: "title" }), h("div", { key: '2bfb38bd7c1e206baf018f5d9d14b292dd06995f', class: "cart-item__price-container" }, h("slot", { key: 'fd0606a8307395d6fa73fc090e75e22d0f7fdaaa', name: "regular-price" }), h("slot", { key: '91fbfc626af74d046eb6c4ecbbb3d62ca719779c', name: "price" })), h("slot", { key: 'd1cc671d5cc264c43fbb46a90138aa956c063a68', name: "save" }), h("slot", { key: 'ad989a1c4a59d7cc6bf3400e700cceb259db953f', name: "short-description" }), h("slot", { key: '8d7095d88fca4dade22881a9d5d76404e1465e09', name: "plusminus" }), h("slot", { key: '29ef4f439fb8970fd7757ea8700e71536dd00851', name: "remove" })), h("div", { key: '8d7f50fb929ae59458f0854456b5affcd8e9dfeb', class: "cart-item__right" }, h("slot", { key: 'fcb7a5bd8c33261fb81cfefd51bdd5e15158d5ff', name: "item-total" }), h("slot", { key: 'b90ef0ce0103b8af1c7f46fc3a0e2fc8dce51061', name: "save-total" })))));
    }
    static get style() { return TpElemCartItemStyle0; }
}, [6, "tp-elem-cart-item"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-elem-cart-item"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-elem-cart-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpElemCartItem);
            }
            break;
    } });
}

export { TpElemCartItem as T, defineCustomElement as d };

//# sourceMappingURL=cart-item.js.map