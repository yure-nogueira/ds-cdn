import { Host, h, } from "@stencil/core";
export class TpElemProductDetail {
    constructor() {
        this.productData = undefined;
        this.value = 1;
    }
    async onAddToCart(productId, quantity) {
        this.addToCartEvent.emit({
            productId,
            quantity,
        });
    }
    handlePlusminus(event) {
        this.value = event.detail;
    }
    render() {
        const { productData, value } = this;
        const { id, stockQuantity, stockStatus, type } = productData;
        return (h(Host, { key: '32b1d4ae9a96b46d503f87107844edb9a7541247' }, h("div", { key: '83bb86fde455cbab7493efe2147daf4b4738b74f', class: "product-detail" }, h("div", { key: '3ee465c9a7f04300c3124542eef4e97a2dbbfa23', class: "product-detail__left" }, h("div", { key: '299e16b50b293822d1988e92863c7bffbe5eb7ae', class: "product-detail__image-container" }, h("slot", { key: '0e843bd7635f1f16cc1abab1c2e589c622ddf244', name: "image" }))), h("div", { key: '7cb9b114383df2e621d5acd700fc8b8634396f75', class: "product-detail__right" }, h("slot", { key: 'd04aa8aad4c5f484a02d95283ae2fa47acae6341', name: "title" }), h("div", { key: 'a40ce79b642bfe5ef2434020457a9dc19340e2b4', class: "product-detail__price-container" }, h("slot", { key: '6dbc3ee83cb934e7b9816ac34b85adf553bca29d', name: "regular-price" }), h("slot", { key: 'c09bdbea5a3b4c2ba173e9273885e9ea48f753fd', name: "price" })), h("slot", { key: '52d790d9a0e1aabc64bd2b25c9f14c6ae960ed08', name: "description" }), h("slot", { key: 'c6f50c2e13815dc976662b1e54f7f0685240d06a', name: "stock" }), h("div", { key: 'cbff6ca58094bd26dbbdceee6a31b3879e36b5cc', class: "product-detail__info-container" }, h("slot", { key: '72e34d7e0d0d769f89e301b4028fd3b30078306f', name: "sku" }), h("slot", { key: 'c75db07129e27efc9dc98db6ea35317e3aa465b4', name: "attributes" }), h("slot", { key: '1ee06c8b26acc312482a316cb9c06277c92b6dd0', name: "categories" })), type === 'external' ? (h("slot", { name: "action" })) : (h("div", null, h("tp-plusminus", { class: "product-detail__plusminus", "use-slot": "false", value: value, min: 1, max: stockQuantity ? stockQuantity : 9, "automatic-disabled": true }), h("ion-button", { color: "brand", onClick: () => this.onAddToCart(id, value), disabled: stockStatus !== 'instock' }, "Add to cart")))))));
    }
    static get is() { return "tp-elem-product-detail"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["product-detail.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["product-detail.css"]
        };
    }
    static get properties() {
        return {
            "productData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ProductDetail",
                    "resolved": "ProductDetail",
                    "references": {
                        "ProductDetail": {
                            "location": "import",
                            "path": "./utils/product-detail.interface",
                            "id": "src/components/elementor/ecommerce/presentational/product-detail/utils/product-detail.interface.ts::ProductDetail"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Dados do produto"
                }
            }
        };
    }
    static get states() {
        return {
            "value": {}
        };
    }
    static get events() {
        return [{
                "method": "addToCartEvent",
                "name": "addToCartEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emite o novo cartCount."
                },
                "complexType": {
                    "original": "AddToCartData",
                    "resolved": "AddToCartData",
                    "references": {
                        "AddToCartData": {
                            "location": "import",
                            "path": "../../feature/product-info/utils/product-info.interface",
                            "id": "src/components/elementor/ecommerce/feature/product-info/utils/product-info.interface.ts::AddToCartData"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "tpChangeAlt",
                "method": "handlePlusminus",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=product-detail.js.map
