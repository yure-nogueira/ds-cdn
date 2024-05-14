'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const cart_api = require('./cart.api-aa725497.js');
const currency_filter = require('./currency.filter-7eaedbf2.js');
require('./index-8c851fa5.js');

const TP_PRODUCT_LIST = {
    PAGE_JUMP_AMOUNT: 3,
    DEFAULT_PRODUCT_PER_PAGE: 10,
    DIRECTIONS: {
        FORWARD: 'forward',
        BACKWARD: 'backward',
    },
};

const productListCss = ".product-list__top.sc-tp-elem-product-list{margin-bottom:48px}.product-list__filter.sc-tp-elem-product-list{max-width:320px}.product-list__middle.sc-tp-elem-product-list{display:grid;grid-template-columns:repeat(auto-fit, minmax(272px, 1fr));gap:20px 32px;margin-bottom:48px}";
const TpElemProductListStyle0 = productListCss;

const TpElemProductList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Objeto de configuração do select popover
         */
        this.selectInterfaceOptions = { cssClass: 'tp-popover-select' };
        this.categoryId = undefined;
        this.products = undefined;
        this.totalPages = undefined;
        this.cart = [];
        this.filter = {
            orderby: null,
            order: null,
            page: 1,
        };
        this.loadingProducts = undefined;
    }
    onUpdatedFilter() {
        const { categoryId, filter } = this;
        const params = categoryId ? Object.assign(Object.assign({}, filter), { category: categoryId }) : filter;
        this.updateProducts(params);
    }
    onChangeFilter(event) {
        if (!this.filter.orderby && event.detail.value === currency_filter.ORDERBY.DATE)
            return;
        switch (event.detail.value) {
            case currency_filter.ORDERBY.DATE:
                this.filter = {
                    orderby: null,
                    order: null,
                    page: 1,
                };
                break;
            case currency_filter.ORDERBY.POPULARITY:
                this.filter = {
                    orderby: 'popularity',
                    order: null,
                    page: 1,
                };
                break;
            case currency_filter.ORDERBY.PRICE:
                this.filter = {
                    orderby: 'price',
                    order: null,
                    page: 1,
                };
                break;
            case currency_filter.ORDERBY.PRICE_ASC:
                this.filter = {
                    orderby: 'price',
                    order: 'asc',
                    page: 1,
                };
                break;
            case currency_filter.ORDERBY.RATING:
                this.filter = {
                    orderby: 'rating',
                    order: null,
                    page: 1,
                };
                break;
            case currency_filter.ORDERBY.TITLE:
                this.filter = {
                    orderby: 'title',
                    order: null,
                    page: 1,
                };
                break;
        }
    }
    onNavigateToPage(event) {
        const page = event.detail;
        this.filter = Object.assign(Object.assign({}, this.filter), { page });
    }
    onGoToPreviousPage() {
        const currentPage = this.filter.page;
        const page = currentPage - 1;
        this.filter = Object.assign(Object.assign({}, this.filter), { page });
    }
    onGoToNextPage() {
        const currentPage = this.filter.page;
        const page = currentPage + 1;
        this.filter = Object.assign(Object.assign({}, this.filter), { page });
    }
    onPageJump(event) {
        const currentPage = this.filter.page;
        const direction = event.detail;
        let page = currentPage;
        if (direction === TP_PRODUCT_LIST.DIRECTIONS.FORWARD) {
            page =
                currentPage + TP_PRODUCT_LIST.PAGE_JUMP_AMOUNT > this.totalPages
                    ? this.totalPages
                    : currentPage + TP_PRODUCT_LIST.PAGE_JUMP_AMOUNT;
        }
        else {
            page =
                currentPage - TP_PRODUCT_LIST.PAGE_JUMP_AMOUNT < 1
                    ? 1
                    : currentPage - TP_PRODUCT_LIST.PAGE_JUMP_AMOUNT;
        }
        this.filter = Object.assign(Object.assign({}, this.filter), { page });
    }
    async componentWillLoad() {
        const params = this.categoryId ? { category: this.categoryId } : {};
        this.updateProducts(params);
        this.getCurrentCart();
    }
    async onAddToCart(productId) {
        try {
            const { success, cart } = await cart_api.ApiCart.addToCart(productId, 1);
            if (success)
                this.cart = cart;
        }
        catch (error) {
            console.log('Não foi possível adicionar item ao carrinho.');
        }
    }
    async onRemoveFromCart(id) {
        try {
            const { success, cart } = await cart_api.ApiCart.removeFromCart(id);
            if (success)
                this.cart = cart;
        }
        catch (error) {
            console.log('Não foi possível remover o item do carrinho.');
        }
    }
    async updateProducts(params = {}) {
        this.loadingProducts = true;
        const { products, totalPages } = await currency_filter.ApiProduct.getOrderedProducts(params);
        this.products = products;
        if (totalPages !== this.totalPages)
            this.totalPages = totalPages;
        this.loadingProducts = false;
    }
    async getCurrentCart() {
        try {
            const { cart } = await cart_api.ApiCart.getCart();
            this.cart = cart;
        }
        catch (error) {
            console.log('Não foi possível ter acesso ao carrinho.');
        }
    }
    render() {
        const { products, totalPages, filter: { page }, loadingProducts, selectInterfaceOptions, } = this;
        const productItems = loadingProducts
            ? Array.from({ length: TP_PRODUCT_LIST.DEFAULT_PRODUCT_PER_PAGE }).map(() => (index.h("ion-skeleton-text", { animated: true, "tp-component": "tp-elem-product-item" })))
            : products.map((product) => {
                const { permalink, id, name, regularPrice, price, stockQuantity, manageStock, stockStatus, } = product;
                const alreadyOnCart = this.cart.some((item) => item.id === id);
                const haveInStock = (manageStock && stockQuantity >= 1) ||
                    (!manageStock && stockStatus === 'instock');
                return (index.h("tp-elem-product-item", { product: product }, index.h("ion-text", { slot: "title", "tp-type": "p18xb", color: "neutral-10" }, index.h("h3", null, index.h("a", { href: permalink }, name))), index.h("ion-text", { slot: "regular-price", color: "neutral-6", "tp-type": "p14" }, index.h("p", null, currency_filter.currency(regularPrice, 'pt-br'))), index.h("ion-text", { slot: "price", color: "neutral-8" }, index.h("p", null, currency_filter.currency(price, 'pt-br'))), haveInStock && !alreadyOnCart && (index.h("ion-button", { slot: "button", color: "neutral-2", expand: "block", onClick: () => this.onAddToCart(id) }, "Adicionar ao Carrinho")), haveInStock && alreadyOnCart && (index.h("ion-button", { slot: "button", color: "warning", expand: "block", onClick: () => this.onRemoveFromCart(id) }, "Remover do Carrinho"))));
            });
        return (index.h(index.Host, null, index.h("div", { class: "product-list" }, index.h("div", { class: "product-list__top" }, index.h("tp-input-container", { class: "product-list__filter" }, index.h("ion-select", { interface: "popover", interfaceOptions: selectInterfaceOptions, placeholder: "Filtrar" }, index.h("ion-select-option", { value: "date" }, "Padr\u00E3o"), index.h("ion-select-option", { value: "popularity" }, "Classificar por popularidade"), index.h("ion-select-option", { value: "rating" }, "Classificar por avalia\u00E7\u00E3o"), index.h("ion-select-option", { value: "price-asc" }, "Classificar por menor pre\u00E7o"), index.h("ion-select-option", { value: "price" }, "Classificar por maior pre\u00E7o")))), index.h("div", { class: "product-list__middle" }, productItems), totalPages > 1 && (index.h("div", { class: "product-list__bottom" }, index.h("tp-pagination", { pageCount: totalPages, currentPage: page }))))));
    }
    static get watchers() { return {
        "filter": ["onUpdatedFilter"]
    }; }
};
TpElemProductList.style = TpElemProductListStyle0;

exports.tp_elem_product_list = TpElemProductList;

//# sourceMappingURL=tp-elem-product-list.cjs.entry.js.map