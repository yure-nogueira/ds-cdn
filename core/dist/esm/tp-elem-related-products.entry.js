import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';
import { A as ApiCart } from './cart.api-f4d4e1bf.js';
import { A as ApiProduct, c as currency } from './currency.filter-ac0831b7.js';
import './index-54024807.js';

const relatedProductsCss = ".related-products.sc-tp-elem-related-products{display:flex;overflow-x:auto;gap:16px;padding-bottom:16px;--tp-scroll-color-content:var(--tp-color-neutral-3);--tp-scroll-color-track:var(--tp-color-neutral-1);--tp-scroll-width:8px;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}.related-products.sc-tp-elem-related-products::-webkit-scrollbar{width:var(--tp-scroll-width);height:8px}@media (max-width: 576px){.related-products.sc-tp-elem-related-products::-webkit-scrollbar{width:0}}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-track{background:var(--tp-scroll-color-track)}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-thumb{color:transparent;background:var(--tp-scroll-color-content)}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-thumb{background-clip:content-box;border:2px solid transparent;border-radius:16px;box-shadow:inset 0 0 0 10px}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-button{display:none;width:0;height:0}.related-products__item.sc-tp-elem-related-products{min-width:295px}";
const TpElemRelatedProductsStyle0 = relatedProductsCss;

const TpElemRelatedProducts = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpElemRelatedProducts.style = TpElemRelatedProductsStyle0;

export { TpElemRelatedProducts as tp_elem_related_products };

//# sourceMappingURL=tp-elem-related-products.entry.js.map