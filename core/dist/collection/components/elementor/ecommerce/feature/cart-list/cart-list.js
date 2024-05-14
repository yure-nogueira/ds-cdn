import { Host, h, } from "@stencil/core";
import { ApiCart } from "../../../../../utils/api/ecommerce/cart.api";
import { ApiProduct } from "../../../../../utils/api/ecommerce/product.api";
import { currency } from "../../../../../utils/filters/currency.filter";
export class TpElemCartList {
    constructor() {
        this.errorMessage = undefined;
        this.total = undefined;
        this.cartItems = undefined;
        this.itemsData = [];
    }
    componentWillLoad() {
        this.getCart();
    }
    async getCart() {
        const response = await ApiCart.getCart();
        this.cartItems = response.cart;
        this.total = response.cartTotal;
    }
    async watchCartItems() {
        const itemsDataPromises = [];
        this.cartItems.forEach((cartItem) => {
            const partialPromise = ApiProduct.getProductById(cartItem.id);
            itemsDataPromises.push(partialPromise);
        });
        const itemsData = await Promise.all(itemsDataPromises);
        this.itemsData = itemsData.map((product) => {
            const cartItem = this.cartItems.find(({ id }) => id === product.id);
            return {
                id: cartItem.id,
                quantity: cartItem.quantity,
                cartItemKey: cartItem.cartItemKey,
                name: product.name,
                shortDescription: product.shortDescription,
                images: product.images,
                regularPrice: product.regularPrice,
                salePrice: product.salePrice,
                stockQuantity: product.stockQuantity,
                permalink: product.permalink,
            };
        });
    }
    handlePlusminus(event) {
        const tpElemCartItem = event.target.closest('tp-elem-cart-item');
        const cartItemKey = tpElemCartItem.getAttribute('cart-key-item');
        const newQuantity = event.detail;
        this.setItemQuantity(cartItemKey, newQuantity);
    }
    // TODO - deletar, era só pra testar se emite o evento
    handleUpdatedCartCount(event) {
        console.log(event.detail);
    }
    async setItemQuantity(cartItemKey, quantity) {
        try {
            const { success, cart, cartTotal, cartCount } = await ApiCart.updateCart(cartItemKey, quantity);
            if (success) {
                this.cartItems = cart;
                this.total = cartTotal;
                this.errorMessage = '';
                const cartInfo = { cart, cartTotal, cartCount };
                this.updatedCart.emit(cartInfo);
            }
            else {
                this.errorMessage = 'O Carrinho não foi atualizado!';
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    async onRemoveFromCart(id) {
        try {
            const { success, cart, cartTotal, cartCount } = await ApiCart.removeFromCart(id);
            if (success) {
                this.cartItems = cart;
                this.total = cartTotal;
                this.errorMessage = '';
                const cartInfo = { cart, cartTotal, cartCount };
                this.updatedCart.emit(cartInfo);
            }
            else {
                this.errorMessage = 'O Carrinho não foi atualizado!';
            }
        }
        catch (error) {
            console.log('Não foi possível remover o item do carrinho.');
        }
    }
    render() {
        const { itemsData, total, errorMessage } = this;
        const items = itemsData === null || itemsData === void 0 ? void 0 : itemsData.map((item) => {
            const { id, quantity, cartItemKey, name, shortDescription, images, regularPrice, salePrice, stockQuantity, permalink, } = item;
            const save = Number(regularPrice) - Number(salePrice);
            const itemTotal = salePrice
                ? Number(salePrice) * quantity
                : Number(regularPrice) * quantity;
            const totalSave = (Number(regularPrice) - Number(salePrice)) * quantity;
            return (h("tp-elem-cart-item", { class: "cart-list__item", "cart-key-item": cartItemKey }, h("a", { href: permalink, slot: "image" }, h("img", { src: images[0].src, alt: name })), h("ion-text", { "tp-type": "h20x", slot: "title" }, h("h2", null, name)), salePrice && (h("ion-text", { color: "neutral-8", "tp-type": "p16x", slot: "regular-price" }, h("span", null, currency(regularPrice, 'pt-br')))), h("ion-text", { color: "neutral-8", "tp-type": "p16xb", slot: "price" }, h("span", null, currency(salePrice ? salePrice : regularPrice, 'pt-br'))), salePrice && (h("ion-text", { color: "neutral-7", "tp-type": "p14x", slot: "save" }, h("span", null, "Economize ", currency(save, 'pt-br')))), h("ion-text", { color: "neutral-7", "tp-type": "p16x", slot: "short-description" }, h("p", null, shortDescription.replace('<p>', '').replace('</p>', ''))), h("tp-plusminus", { "use-slot": "false", value: Number(quantity), min: 1, max: stockQuantity ? stockQuantity : 9, "automatic-disabled": true, slot: "plusminus" }), h("ion-button", { color: "brand", fill: "clear", "tp-no-padding": true, slot: "remove", onClick: () => this.onRemoveFromCart(id) }, "Remover item"), h("ion-text", { color: "neutral-8", "tp-type": "h20x", slot: "item-total" }, h("span", null, currency(itemTotal, 'pt-br'))), salePrice && (h("ion-text", { class: "cart-item__save", color: "neutral-7", "tp-type": "p14x", slot: "save-total" }, h("span", null, "Economize ", currency(totalSave, 'pt-br'))))));
        });
        return (h(Host, null, h("div", { class: "cart-list" }, items, h("div", { class: "cart-list__total" }, errorMessage && (h("ion-text", { "tp-type": "p18xb", color: "warning" }, h("p", null, errorMessage))), h("ion-text", { "tp-type": "p18xb", color: "neutral-8" }, h("h4", null, "Total:")), h("ion-text", { "tp-type": "h24x" }, h("h4", null, currency(total, 'pt-br')))))));
    }
    static get is() { return "tp-elem-cart-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["cart-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["cart-list.css"]
        };
    }
    static get states() {
        return {
            "errorMessage": {},
            "total": {},
            "cartItems": {},
            "itemsData": {}
        };
    }
    static get events() {
        return [{
                "method": "updatedCart",
                "name": "updatedCart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emite o updated cart."
                },
                "complexType": {
                    "original": "CartInfo",
                    "resolved": "CartInfo",
                    "references": {
                        "CartInfo": {
                            "location": "import",
                            "path": "../../../../../utils/api/ecommerce/utils/interfaces/cart.interface",
                            "id": "src/utils/api/ecommerce/utils/interfaces/cart.interface.ts::CartInfo"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "cartItems",
                "methodName": "watchCartItems"
            }];
    }
    static get listeners() {
        return [{
                "name": "tpChangeAlt",
                "method": "handlePlusminus",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "updatedCart",
                "method": "handleUpdatedCartCount",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=cart-list.js.map
