import { Host, h } from "@stencil/core";
import { ApiCart } from "../../../../../utils/api/ecommerce/cart.api";
import { ApiProduct } from "../../../../../utils/api/ecommerce/product.api";
import { currency } from "../../../../../utils/filters/currency.filter";
export class TpElemRelatedProducts {
    constructor() {
        this.productId = undefined;
        this.cart = [];
        this.loadingProducts = undefined;
        this.products = undefined;
    }
    async componentWillLoad() {
        this.getRelatedProducts();
        this.getCurrentCart();
    }
    async getRelatedProducts() {
        this.loadingProducts = true;
        const { relatedIds } = await ApiProduct.getProductById(this.productId);
        const productsPromises = [];
        relatedIds.forEach((id) => {
            const productPromise = ApiProduct.getProductById(id);
            productsPromises.push(productPromise);
        });
        const products = await Promise.all(productsPromises);
        this.products = products;
        this.loadingProducts = false;
    }
    async getCurrentCart() {
        try {
            const { cart } = await ApiCart.getCart();
            this.cart = cart;
        }
        catch (error) {
            console.log('Não foi possível ter acesso ao carrinho.');
        }
    }
    async onAddToCart(productId) {
        try {
            const { success, cart } = await ApiCart.addToCart(productId, 1);
            if (success)
                this.cart = cart;
        }
        catch (error) {
            console.log('Não foi possível adicionar item ao carrinho.');
        }
    }
    async onRemoveFromCart(id) {
        try {
            const { success, cart } = await ApiCart.removeFromCart(id);
            if (success)
                this.cart = cart;
        }
        catch (error) {
            console.log('Não foi possível remover o item do carrinho.');
        }
    }
    render() {
        const { cart, loadingProducts, products } = this;
        let productItems;
        if (loadingProducts) {
            productItems = (h("ion-text", { color: "neutral-8" }, h("p", null, "Carregando...")));
        }
        else {
            productItems =
                products && products.length > 0 ? (products.map((product) => {
                    const { permalink, id, name, regularPrice, price, stockQuantity, manageStock, stockStatus, } = product;
                    const alreadyOnCart = cart.some((item) => item.id === id);
                    const haveInStock = (manageStock && stockQuantity >= 1) ||
                        (!manageStock && stockStatus === 'instock');
                    return (h("tp-elem-product-item", { class: "related-products__item", product: product }, h("ion-text", { slot: "title", "tp-type": "p18xb", color: "neutral-10" }, h("h3", null, h("a", { href: permalink }, name))), h("ion-text", { slot: "regular-price", color: "neutral-6", "tp-type": "p14" }, h("p", null, currency(regularPrice, 'pt-br'))), h("ion-text", { slot: "price", color: "neutral-8" }, h("p", null, currency(price, 'pt-br'))), haveInStock && !alreadyOnCart && (h("ion-button", { slot: "button", color: "neutral-2", expand: "block", onClick: () => this.onAddToCart(id) }, "Adicionar ao Carrinho")), haveInStock && alreadyOnCart && (h("ion-button", { slot: "button", color: "warning", expand: "block", onClick: () => this.onRemoveFromCart(id) }, "Remover do Carrinho"))));
                })) : (h("ion-text", { color: "neutral-8" }, h("p", null, "N\u00E3o h\u00E1 produtos relacionados.")));
        }
        return (h(Host, null, h("div", { class: "related-products" }, productItems)));
    }
    static get is() { return "tp-elem-related-products"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["related-products.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["related-products.css"]
        };
    }
    static get properties() {
        return {
            "productId": {
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
                    "text": "ID do produto"
                },
                "attribute": "product-id",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "cart": {},
            "loadingProducts": {},
            "products": {}
        };
    }
}
//# sourceMappingURL=related-products.js.map
