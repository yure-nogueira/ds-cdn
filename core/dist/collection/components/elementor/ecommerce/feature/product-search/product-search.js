import { Host, h } from "@stencil/core";
import { ApiProduct } from "../../../../../utils/api/ecommerce/product.api";
import { currency } from "../../../../../utils/filters/currency.filter";
import { createColorClasses } from "../../../../../utils/functions/color.function";
import { PRODUCT_SEARCH } from "./utils/product-search.constant";
export class TpElemProductSearch {
    constructor() {
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
    static get is() { return "tp-elem-product-search"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["product-search.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["product-search.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../../../components",
                            "id": "src/components.d.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "searchPageUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "O path da p\u00E1gina de busca."
                },
                "attribute": "search-page-url",
                "reflect": true,
                "defaultValue": "'#'"
            },
            "maxDropdownHeight": {
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
                    "text": "A altura m\u00E1xima do dropdown."
                },
                "attribute": "max-dropdown-height",
                "reflect": true,
                "defaultValue": "320"
            }
        };
    }
    static get states() {
        return {
            "searchTerm": {},
            "products": {},
            "lightboxParams": {},
            "searchbarHovering": {},
            "searchItemHovering": {},
            "dropdownLocked": {},
            "searching": {},
            "currentAbortController": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "searchTerm",
                "methodName": "onUpdatedSearchTerm"
            }];
    }
    static get listeners() {
        return [{
                "name": "ionInput",
                "method": "onSearchInput",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "ionFocus",
                "method": "onSearchFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "ionBlur",
                "method": "onSearchBlur",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=product-search.js.map
