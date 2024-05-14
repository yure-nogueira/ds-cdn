import { Host, h } from "@stencil/core";
export class TpElemCartButton {
    constructor() {
        this.cartCount = undefined;
    }
    render() {
        const { cartCount } = this;
        return (h(Host, { key: '345629c53b4dc9e04a64293842173486c9234eb0' }, h("div", { key: '87975c3af440725a79306d649a680aaf513063a4', class: "cart-button" }, h("ion-button", { key: '1231c1e38f0e84e91fceeb4718584aa4cbc06ce5', color: "brand", fill: "clear", "tp-no-padding": true, href: `${process.env.WP_BASE_URL}/cart` }, "Ir para o carrinho"), cartCount && h("span", { key: 'b1b63a20a6c84e58c15c013e88ee7961dfad07ec', class: "cart-button__count" }, cartCount))));
    }
    static get is() { return "tp-elem-cart-button"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["cart-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["cart-button.css"]
        };
    }
    static get properties() {
        return {
            "cartCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "O total de itens no carrinho"
                },
                "attribute": "cart-count",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=cart-button.js.map
