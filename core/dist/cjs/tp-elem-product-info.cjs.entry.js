'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const cart_api = require('./cart.api-aa725497.js');
const currency_filter = require('./currency.filter-7eaedbf2.js');
require('./index-8c851fa5.js');

const productInfoCss = ".product-info__message.sc-tp-elem-product-info{display:block;margin-top:24px}";
const TpElemProductInfoStyle0 = productInfoCss;

const TpElemProductInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.updatedCart = index.createEvent(this, "updatedCart", 7);
        this.productId = undefined;
        this.productInfo = undefined;
    }
    async handleAddToCart(event) {
        const { productId, quantity } = event.detail;
        try {
            const { success, productName, cart, cartTotal, cartCount } = await cart_api.ApiCart.addToCart(productId, quantity);
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
            await currency_filter.ApiProduct.getProductById(this.productId),
            await currency_filter.ApiProduct.getCategories(),
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
            return (index.h("ion-text", { color: "neutral-8", "tp-type": "p14x" }, index.h("span", null, name, ": ", options.join(', '))));
        });
        const categoriesLinks = categoriesWithUrl.map((category) => {
            const { name, url } = category;
            return (index.h("ion-button", { color: "brand", fill: "clear", href: url }, name));
        });
        return (index.h(index.Host, null, index.h("div", { class: "product-info" }, index.h("tp-elem-product-detail", { productData: productData }, index.h("tp-images-carousel", { slot: "image", images: images, thumbs: images.length > 1, zoom: true }), index.h("ion-text", { "tp-type": "h32x", slot: "title" }, index.h("h2", null, name)), onSale && regularPrice && (index.h("ion-text", { color: "neutral-7", "tp-type": "p16x", slot: "regular-price" }, index.h("span", null, currency_filter.currency(regularPrice, 'pt-br')))), index.h("ion-text", { color: "neutral-7", "tp-type": "p16xb", slot: "price" }, index.h("span", null, currency_filter.currency(price, 'pt-br'))), index.h("ion-text", { color: "neutral-8", "tp-type": "p16x", slot: "description" }, index.h("p", null, description.replace('<p>', '').replace('</p>', ''))), index.h("div", { slot: "stock" }, index.h("ion-text", { color: "neutral-8", "tp-type": "p14x" }, index.h("p", null, hasStock ? 'Produto em estoque' : 'Produto esgotado', manageStock && stock))), index.h("ion-text", { color: "neutral-8", "tp-type": "p14x", slot: "sku" }, index.h("span", null, "SKU: ", sku)), attributes && index.h("div", { slot: "attributes" }, attributesList), categories && (index.h("div", { slot: "categories" }, index.h("ion-text", { color: "neutral-8", "tp-type": "p14x" }, index.h("span", null, "Categorias:")), categoriesLinks)), index.h("ion-button", { color: "brand", href: externalUrl, target: "_blank", slot: "action" }, "Comprar (p\u00E1gina externa)")), feedbackMessage && (index.h("ion-text", { class: "product-info__message", color: isFeedbackSuccess ? 'success' : 'warning', "tp-type": "p16x" }, index.h("p", null, feedbackMessage))))));
    }
};
TpElemProductInfo.style = TpElemProductInfoStyle0;

exports.tp_elem_product_info = TpElemProductInfo;

//# sourceMappingURL=tp-elem-product-info.cjs.entry.js.map