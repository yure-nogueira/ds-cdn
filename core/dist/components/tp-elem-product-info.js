import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { A as ApiCart } from './cart.api.js';
import { A as ApiProduct, c as currency } from './currency.filter.js';
import { d as defineCustomElement$4 } from './product-detail.js';
import { d as defineCustomElement$3 } from './images-carousel.js';
import { d as defineCustomElement$2 } from './plusminus.js';

const productInfoCss = ".product-info__message.sc-tp-elem-product-info{display:block;margin-top:24px}";
const TpElemProductInfoStyle0 = productInfoCss;

const TpElemProductInfo$1 = /*@__PURE__*/ proxyCustomElement(class TpElemProductInfo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.updatedCart = createEvent(this, "updatedCart", 7);
        this.productId = undefined;
        this.productInfo = undefined;
    }
    async handleAddToCart(event) {
        const { productId, quantity } = event.detail;
        try {
            const { success, productName, cart, cartTotal, cartCount } = await ApiCart.addToCart(productId, quantity);
            this.productInfo = Object.assign(Object.assign({}, this.productInfo), { isFeedbackSuccess: success });
            if (this.productInfo.isFeedbackSuccess) {
                this.productInfo = Object.assign(Object.assign({}, this.productInfo), { feedbackMessage: `${productName} foi adicionado ao carrinho!` });
                const cartInfo = { cart, cartTotal, cartCount };
                this.updatedCart.emit(cartInfo);
            }
            else {
                this.productInfo = Object.assign(Object.assign({}, this.productInfo), { feedbackMessage: `${productName} não foi adicionado ao carrinho!` });
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    // TODO - deletar, era só pra testar se emite o evento
    handleUpdatedCartCount(event) {
        console.log(event.detail);
    }
    async componentWillLoad() {
        // TODO await trava a renderização do componente, usar skeleton das partes
        // e tirar o await depois pro componente ficar mais fluido
        await this.updateProductData();
    }
    async updateProductData() {
        const [product, availableCategories] = await Promise.all([
            await ApiProduct.getProductById(this.productId),
            await ApiProduct.getCategories(),
        ]);
        this.productInfo = Object.assign(Object.assign({}, product), { isFeedbackSuccess: false, feedbackMessage: '' });
        this.categoriesWithUrl = product.categories.map((productCategory) => availableCategories.find((availableCategory) => availableCategory.id == productCategory.id));
    }
    render() {
        const { productId, categoriesWithUrl } = this;
        const { name, description, images, manageStock, stockStatus, stockQuantity, type, externalUrl, regularPrice, price, onSale, sku, categories, attributes, isFeedbackSuccess, feedbackMessage, } = this.productInfo;
        const productData = {
            id: productId,
            stockQuantity,
            stockStatus,
            type,
            // isFeedbackSuccess,
            // feedbackMessage,
        };
        const hasStock = (manageStock && stockQuantity >= 1) ||
            (!manageStock && stockStatus === 'instock');
        const stock = stockQuantity == 1
            ? ` (${stockQuantity} unidade)`
            : ` (${stockQuantity} unidades)`;
        const attributesList = attributes.map((attribute) => {
            const { name, options } = attribute;
            return (h("ion-text", { color: "neutral-8", "tp-type": "p14x" }, h("span", null, name, ": ", options.join(', '))));
        });
        const categoriesLinks = categoriesWithUrl.map((category) => {
            const { name, url } = category;
            return (h("ion-button", { color: "brand", fill: "clear", href: url }, name));
        });
        return (h(Host, null, h("div", { class: "product-info" }, h("tp-elem-product-detail", { productData: productData }, h("tp-images-carousel", { slot: "image", images: images, thumbs: images.length > 1, zoom: true }), h("ion-text", { "tp-type": "h32x", slot: "title" }, h("h2", null, name)), onSale && regularPrice && (h("ion-text", { color: "neutral-7", "tp-type": "p16x", slot: "regular-price" }, h("span", null, currency(regularPrice, 'pt-br')))), h("ion-text", { color: "neutral-7", "tp-type": "p16xb", slot: "price" }, h("span", null, currency(price, 'pt-br'))), h("ion-text", { color: "neutral-8", "tp-type": "p16x", slot: "description" }, h("p", null, description.replace('<p>', '').replace('</p>', ''))), h("div", { slot: "stock" }, h("ion-text", { color: "neutral-8", "tp-type": "p14x" }, h("p", null, hasStock ? 'Produto em estoque' : 'Produto esgotado', manageStock && stock))), h("ion-text", { color: "neutral-8", "tp-type": "p14x", slot: "sku" }, h("span", null, "SKU: ", sku)), attributes && h("div", { slot: "attributes" }, attributesList), categories && (h("div", { slot: "categories" }, h("ion-text", { color: "neutral-8", "tp-type": "p14x" }, h("span", null, "Categorias:")), categoriesLinks)), h("ion-button", { color: "brand", href: externalUrl, target: "_blank", slot: "action" }, "Comprar (p\u00E1gina externa)")), feedbackMessage && (h("ion-text", { class: "product-info__message", color: isFeedbackSuccess ? 'success' : 'warning', "tp-type": "p16x" }, h("p", null, feedbackMessage))))));
    }
    static get style() { return TpElemProductInfoStyle0; }
}, [2, "tp-elem-product-info", {
        "productId": [514, "product-id"],
        "productInfo": [32]
    }, [[0, "addToCartEvent", "handleAddToCart"], [0, "updatedCart", "handleUpdatedCartCount"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-elem-product-info", "tp-elem-product-detail", "tp-images-carousel", "tp-plusminus"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-elem-product-info":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpElemProductInfo$1);
            }
            break;
        case "tp-elem-product-detail":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tp-images-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tp-plusminus":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const TpElemProductInfo = TpElemProductInfo$1;
const defineCustomElement = defineCustomElement$1;

export { TpElemProductInfo, defineCustomElement };

//# sourceMappingURL=tp-elem-product-info.js.map