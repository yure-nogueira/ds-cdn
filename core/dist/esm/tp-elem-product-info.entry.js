import { r as registerInstance, c as createEvent, h, H as Host } from './index-e49e9bf4.js';
import { A as ApiCart } from './cart.api-f4d4e1bf.js';
import { A as ApiProduct, c as currency } from './currency.filter-ac0831b7.js';
import './index-54024807.js';

const productInfoCss = ".product-info__message.sc-tp-elem-product-info{display:block;margin-top:24px}";
const TpElemProductInfoStyle0 = productInfoCss;

const TpElemProductInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpElemProductInfo.style = TpElemProductInfoStyle0;

export { TpElemProductInfo as tp_elem_product_info };

//# sourceMappingURL=tp-elem-product-info.entry.js.map