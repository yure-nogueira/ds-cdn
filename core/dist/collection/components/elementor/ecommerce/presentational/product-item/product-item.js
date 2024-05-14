import { Host, h } from "@stencil/core";
export class TpElemProductItem {
    constructor() {
        this.product = undefined;
    }
    render() {
        const { regularPrice, onSale, images, permalink } = this.product;
        return (h(Host, { key: 'b074d51427370d0d4ecebeed65031542bd5f767e' }, h("div", { key: 'd0804f23518451ca25bc3d7122f1c2e523673c99', class: "product-item" }, h("a", { key: 'ab17077e870454b85ac69e99b87205c52e1ec68b', href: permalink, class: "product-item__image-container" }, h("img", { key: '7dfafe7f51b475cf5e7c27b1d52530520fe715fa', class: "product-item__image", src: images[0].src, alt: images[0].alt })), h("div", { key: '24483242fc94899ea6d73177b52ef907154d4594', class: "product-item__basic-info" }, h("slot", { key: '7274beec66f44556767614825bde35f03ba13409', name: "title" }), h("div", { key: 'c4aff073594f56afef2d91c440205f4b41cb8fa2', class: "product-item__prices-container" }, onSale && regularPrice && h("slot", { key: 'f04f7ba93244f68ed755f974914ed14dcde8b0a4', name: "regular-price" }), h("slot", { key: '60b65845369c89d8be0657d6c0ab98e01bf8a574', name: "price" })), h("slot", { key: '98b5510ba9743f008d54dfb44c048eb2cd4a2484', name: "button" })))));
    }
    static get is() { return "tp-elem-product-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["product-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["product-item.css"]
        };
    }
    static get properties() {
        return {
            "product": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ProductItem",
                    "resolved": "ProductItem",
                    "references": {
                        "ProductItem": {
                            "location": "import",
                            "path": "./utils/product-item.interface",
                            "id": "src/components/elementor/ecommerce/presentational/product-item/utils/product-item.interface.ts::ProductItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Dados referentes a um produto espec\u00EDfico."
                }
            }
        };
    }
}
//# sourceMappingURL=product-item.js.map
