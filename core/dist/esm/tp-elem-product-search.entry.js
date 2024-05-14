import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';
import { A as ApiProduct, c as currency } from './currency.filter-ac0831b7.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';
import './index-54024807.js';

const PRODUCT_SEARCH = {
    DEBOUNCE_TIME: 300,
    LOWER_SKIP_SEARCH_LIMIT: 1,
};

const productSearchCss = ".sc-tp-elem-product-search-h{display:block;position:relative}.product-search__item-wrapper.sc-tp-elem-product-search{display:flex;flex-wrap:nowrap;align-items:center;width:100%}.product-search__image-container.sc-tp-elem-product-search{flex:0 0 auto;width:48px;height:48px;border-radius:4px;margin-right:16px;overflow:hidden}.product-search__image.sc-tp-elem-product-search{object-fit:cover}.product-search__info.sc-tp-elem-product-search{flex:1 1 auto;display:flex;gap:16px;justify-content:space-between;align-items:center}@media (max-width: 379.98px){.product-search__info.sc-tp-elem-product-search{flex-direction:column;align-items:flex-start;gap:4px}}.product-search__info-left.sc-tp-elem-product-search{display:flex;flex-direction:column}.product-search__description.sc-tp-elem-product-search{color:rgba(var(--tp-color-contrast-rgb, var(--tp-color-neutral-10-rgb)), 0.7)}@media (max-width: 575.98px){.product-search__description.sc-tp-elem-product-search{display:none}}.product-search__info-right.sc-tp-elem-product-search{display:flex;flex-direction:column;align-items:center;white-space:nowrap}@media (max-width: 379.98px){.product-search__info-right.sc-tp-elem-product-search{flex-direction:row;gap:8px}}.product-search__sale-price.sc-tp-elem-product-search{text-decoration:line-through;color:rgba(var(--tp-color-contrast-rgb, var(--tp-color-neutral-10-rgb)), 0.7)}.product-search__loader-container.sc-tp-elem-product-search{position:absolute;top:9px;left:9px;display:flex;justify-content:center;align-items:center;background:var(--tp-color-base, var(--tp-color-neutral-2));width:24px;height:24px}.product-search__loader.sc-tp-elem-product-search{box-sizing:border-box;width:20px;height:20px;border:3px solid var(--tp-color-contrast, var(--tp-color-neutral-6));border-top-color:transparent;border-radius:50%;animation:product-search-spinner 1.2s linear infinite}.product-search__search-page-link.sc-tp-elem-product-search{width:100%;text-align:center}.product-search__lightbox.sc-tp-elem-product-search{position:absolute;top:24px;right:16px;display:flex;width:calc(100% - 96px);max-width:240px;height:auto;box-shadow:-4px 4px 8px 1px rgba(var(--tp-color-neutral-1-rgb), 0.8);border-radius:8px;overflow:hidden;z-index:10000;opacity:0;transition:300ms opacity ease-in-out}.product-search__lightbox--show.sc-tp-elem-product-search{opacity:1}.product-search__searchbar-hover.sc-tp-elem-product-search-h .product-search__loader-container.sc-tp-elem-product-search{background:var(--tp-color-neutral-3)}@keyframes product-search-spinner{100%{transform:rotate(360deg)}}";
const TpElemProductSearchStyle0 = productSearchCss;

const TpElemProductSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
        this.searchPageUrl = '#';
        this.maxDropdownHeight = 320;
        this.searchTerm = '';
        this.products = [];
        this.lightboxParams = {
            imageSrc: null,
            display: false,
        };
        this.searchbarHovering = false;
        this.searchItemHovering = false;
        this.dropdownLocked = true;
        this.searching = false;
        this.currentAbortController = undefined;
    }
    /**
     * State e Prop watchers.
     */
    async onUpdatedSearchTerm() {
        if (this.currentAbortController)
            this.currentAbortController.abort();
        if (!this.searchTerm) {
            this.products = [];
            if (this.searching)
                this.searching = false;
            return;
        }
        if (this.searchTerm.length < PRODUCT_SEARCH.LOWER_SKIP_SEARCH_LIMIT) {
            if (this.searching)
                this.searching = false;
            return;
        }
        this.currentAbortController = new AbortController();
        this.searching = true;
        this.dropdownLocked = !this.products.length;
        try {
            const { products } = await ApiProduct.getSearchedProducts(this.searchTerm, { signal: this.currentAbortController.signal });
            if (this.searching) {
                this.products = products;
                this.searching = false;
                this.dropdownLocked = false;
            }
        }
        catch (error) {
            this.products = [];
            this.searching = false;
            this.dropdownLocked = false;
        }
    }
    /**
     * Event listeners.
     */
    onSearchInput(e) {
        const searchTerm = e.detail.value;
        this.searchTerm = searchTerm;
    }
    onSearchFocus() {
        if (this.dropdownLocked && this.products.length) {
            this.dropdownLocked = false;
        }
    }
    onSearchBlur() {
        if (this.searchItemHovering && this.products.length)
            return;
        if (!this.dropdownLocked) {
            this.dropdownLocked = true;
        }
    }
    /**
     * Métodos internos.
     */
    onMouseEnterImage(imageSrc) {
        this.lightboxParams = { imageSrc, display: true };
    }
    onMouseLeavesImage() {
        this.lightboxParams = Object.assign(Object.assign({}, this.lightboxParams), { display: false });
    }
    onMouseEnterSearchbar() {
        this.searchbarHovering = true;
    }
    onMouseLeavesSearchbar() {
        this.searchbarHovering = false;
    }
    onMouseEnterSearchItem() {
        this.searchItemHovering = true;
    }
    onMouseLeavesSearchItem() {
        this.searchItemHovering = false;
    }
    getDropdownItems() {
        const { color } = this;
        return this.products.length
            ? this.products.map(({ name, shortDescription, images, onSale, regularPrice, price, permalink, }) => (h("ion-item", { href: permalink, lines: "full", "tp-spacingy": "s08", color: color, onMouseEnter: () => this.onMouseEnterSearchItem(), onMouseLeave: () => this.onMouseLeavesSearchItem() }, h("div", { class: "product-search__item-wrapper" }, h("div", { onMouseEnter: () => this.onMouseEnterImage(images[0].src), onMouseLeave: () => this.onMouseLeavesImage(), class: "product-search__image-container" }, h("img", { class: "product-search__image", src: images[0].src, alt: "" })), h("div", { class: "product-search__info" }, h("div", { class: "product-search__info-left" }, h("ion-text", { "tp-type": "p16x" }, h("span", null, name)), h("ion-text", { class: "product-search__description", "tp-type": "p14x" }, h("span", null, shortDescription.replace(/<\/?p>/g, '')))), h("div", { class: "product-search__info-right" }, onSale && regularPrice && (h("ion-text", { class: "product-search__sale-price", "tp-type": "p12x" }, currency(regularPrice, 'pt-br'))), h("ion-text", { "tp-type": "p14x" }, currency(price, 'pt-br'))))))))
            : [];
    }
    render() {
        const { color, searchPageUrl, maxDropdownHeight, products, searchTerm, dropdownLocked, searching, searchbarHovering, } = this;
        const dropdownItems = this.getDropdownItems();
        return (h(Host, { key: 'aac8af4edc663a0cda6d44eecf52e2b2206fcfa6', class: createColorClasses(color, {
                'product-search': true,
                'product-search__searchbar-hover': !color && searchbarHovering,
            }) }, h("tp-autocomplete", { key: 'c137078da23814218a88e8287dd99d54e7a7c277', color: color, locked: dropdownLocked, style: { '--tp-dropdown-max-height': `${maxDropdownHeight}px` } }, h("tp-input-container", { key: '5bc4ff1b194a84e8b1bcfe8865061adcaca2c6fe', class: "product-search__searchbar", color: color }, h("ion-searchbar", { key: 'feec3e1cda5b59b043ea840296d75efb1aa77430', inputMode: "search", debounce: PRODUCT_SEARCH.DEBOUNCE_TIME, mode: "md", "search-icon": "./../../../../assets/tp-search.svg", "clear-icon": "./../../../../assets/tp-x.svg", placeholder: "Buscar produto", color: color, onMouseEnter: () => this.onMouseEnterSearchbar(), onMouseLeave: () => this.onMouseLeavesSearchbar() })), searching && (h("div", { key: 'e4a82fbed8da4b840d0187c7b0dc32bde101b526', class: "product-search__loader-container" }, h("div", { key: '9442fb0a805a01388cd69ad9630fc7534ccdc7f9', class: "product-search__loader" }))), h("tp-dropdown", { key: 'd827e47944263672b8686407af84be862d471d31' }, dropdownItems, searchTerm && !products.length && (h("ion-item", { key: '032f761762356569449546603e63626c9f628116', lines: "full", "tp-spacingy": "s08", color: color }, h("ion-text", { key: 'd312fa3c05f92f2ad6dc86ba1c0753cf03e4ccdc', "tp-type": "p14x" }, "Nenhum produto encontrado"))), Boolean(products.length) && (h("ion-item", { key: '6985f45938a1706a272ad2f6bf67fbadfd3553aa', href: `${searchPageUrl}?query=${searchTerm}`, lines: "full", "tp-spacingy": "s08", color: color, onMouseEnter: () => this.onMouseEnterSearchItem(), onMouseLeave: () => this.onMouseLeavesSearchItem() }, h("ion-text", { key: '408fa995702f247ce355a42b480154cf1c235915', "tp-type": "p14x", class: "product-search__search-page-link" }, "Ver todos os resultados"))))), h("div", { key: '5be11d34e15c46c1fdd423845267a58eac48fc4d', class: {
                'product-search__lightbox': true,
                'product-search__lightbox--show': this.lightboxParams.display,
            } }, h("img", { key: '6c76f4e9cdf47a3715d3478c399266d864d03f0c', src: this.lightboxParams.imageSrc, alt: "" }))));
    }
    static get watchers() { return {
        "searchTerm": ["onUpdatedSearchTerm"]
    }; }
};
TpElemProductSearch.style = TpElemProductSearchStyle0;

export { TpElemProductSearch as tp_elem_product_search };

//# sourceMappingURL=tp-elem-product-search.entry.js.map