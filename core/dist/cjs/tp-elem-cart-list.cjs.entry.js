'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const cart_api = require('./cart.api-aa725497.js');
const currency_filter = require('./currency.filter-7eaedbf2.js');
require('./index-8c851fa5.js');

const cartListCss = ".cart-list.sc-tp-elem-cart-list{display:flex;flex-direction:column;gap:8px}.cart-list__total.sc-tp-elem-cart-list{display:flex;justify-content:flex-end;align-items:center;gap:8px}";
const TpElemCartListStyle0 = cartListCss;

const TpElemCartList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.updatedCart = index.createEvent(this, "updatedCart", 7);
        this.errorMessage = undefined;
        this.total = undefined;
        this.cartItems = undefined;
        this.itemsData = [];
    }
    componentWillLoad() {
        this.getCart();
    }
    async getCart() {
        const response = await cart_api.ApiCart.getCart();
        this.cartItems = response.cart;
        this.total = response.cartTotal;
    }
    async watchCartItems() {
        const itemsDataPromises = [];
        this.cartItems.forEach((cartItem) => {
            const partialPromise = currency_filter.ApiProduct.getProductById(cartItem.id);
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
            const { success, cart, cartTotal, cartCount } = await cart_api.ApiCart.updateCart(cartItemKey, quantity);
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
            const { success, cart, cartTotal, cartCount } = await cart_api.ApiCart.removeFromCart(id);
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
            return (index.h("tp-elem-cart-item", { class: "cart-list__item", "cart-key-item": cartItemKey }, index.h("a", { href: permalink, slot: "image" }, index.h("img", { src: images[0].src, alt: name })), index.h("ion-text", { "tp-type": "h20x", slot: "title" }, index.h("h2", null, name)), salePrice && (index.h("ion-text", { color: "neutral-8", "tp-type": "p16x", slot: "regular-price" }, index.h("span", null, currency_filter.currency(regularPrice, 'pt-br')))), index.h("ion-text", { color: "neutral-8", "tp-type": "p16xb", slot: "price" }, index.h("span", null, currency_filter.currency(salePrice ? salePrice : regularPrice, 'pt-br'))), salePrice && (index.h("ion-text", { color: "neutral-7", "tp-type": "p14x", slot: "save" }, index.h("span", null, "Economize ", currency_filter.currency(save, 'pt-br')))), index.h("ion-text", { color: "neutral-7", "tp-type": "p16x", slot: "short-description" }, index.h("p", null, shortDescription.replace('<p>', '').replace('</p>', ''))), index.h("tp-plusminus", { "use-slot": "false", value: Number(quantity), min: 1, max: stockQuantity ? stockQuantity : 9, "automatic-disabled": true, slot: "plusminus" }), index.h("ion-button", { color: "brand", fill: "clear", "tp-no-padding": true, slot: "remove", onClick: () => this.onRemoveFromCart(id) }, "Remover item"), index.h("ion-text", { color: "neutral-8", "tp-type": "h20x", slot: "item-total" }, index.h("span", null, currency_filter.currency(itemTotal, 'pt-br'))), salePrice && (index.h("ion-text", { class: "cart-item__save", color: "neutral-7", "tp-type": "p14x", slot: "save-total" }, index.h("span", null, "Economize ", currency_filter.currency(totalSave, 'pt-br'))))));
        });
        return (index.h(index.Host, null, index.h("div", { class: "cart-list" }, items, index.h("div", { class: "cart-list__total" }, errorMessage && (index.h("ion-text", { "tp-type": "p18xb", color: "warning" }, index.h("p", null, errorMessage))), index.h("ion-text", { "tp-type": "p18xb", color: "neutral-8" }, index.h("h4", null, "Total:")), index.h("ion-text", { "tp-type": "h24x" }, index.h("h4", null, currency_filter.currency(total, 'pt-br')))))));
    }
    static get watchers() { return {
        "cartItems": ["watchCartItems"]
    }; }
};
TpElemCartList.style = TpElemCartListStyle0;

exports.tp_elem_cart_list = TpElemCartList;

//# sourceMappingURL=tp-elem-cart-list.cjs.entry.js.map