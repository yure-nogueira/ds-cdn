import { Host, h } from "@stencil/core";
import { navigate } from "../../../../../utils/functions/navigation.function";
import { NEWS_SEARCH } from "./utils/news-search.constant";
import { CONFIG } from "../../../../../config/config";
export class TpElemNewsSearch {
    constructor() {
        this.color = NEWS_SEARCH.defaultColor;
        this.baseSearchPath = '/';
        this.baseCategoryPath = '/';
    }
    onSearchByTerm(event) {
        navigate(`${this.baseSearchPath}?${NEWS_SEARCH.searchKey}=${event.detail.value}`);
    }
    onFilterByCategory(event) {
        navigate(`${this.baseCategoryPath}/${event.detail.value}`);
    }
    render() {
        const { color } = this;
        console.log('ENV:', CONFIG);
        console.log('mode:', process.env.NODE_ENV);
        return (h(Host, { key: 'dd48481ec2e26ce42dd9b5eb6276291aae901f1b', class: "tp-news-search" }, h("div", { key: '0b4813012ea521fb1d40310cb209ea219bc79914', class: "tp-news-search__container" }, h("tp-input-container", { key: '6847318e8b72153d5ec9174bf769d50c603ab47a', color: color, class: "tp-news-search__term-search" }, h("ion-searchbar", { key: '428f56c199991ab4e69b1e542ca75b6ae55ccad3', mode: "md", "search-icon": NEWS_SEARCH.icons.search, "clear-icon": NEWS_SEARCH.icons.x, placeholder: "Buscar", onIonChange: (e) => this.onSearchByTerm(e) })), h("tp-input-container", { key: '11a0a6b476225f34a9fb2c02ee5d38e26628f5b0', color: color, class: "tp-news-search__category-filter" }, h("ion-select", { key: 'e0c6ce6f42af8a8eecd5df1dcb3531fb17af6f01', placeholder: "Selecione uma categoria", interface: "popover", interfaceOptions: NEWS_SEARCH.interfaceOptions, onIonChange: (e) => this.onFilterByCategory(e) }, h("slot", { key: '93d67ab1c8b17daf08727e7460cad99b063f3b81', name: "select-options" }))))));
    }
    static get is() { return "tp-elem-news-search"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["news-search.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["news-search.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true,
                "defaultValue": "NEWS_SEARCH.defaultColor"
            },
            "baseSearchPath": {
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
                    "text": "Define a rota base da p\u00E1gina de pesquisa por termo."
                },
                "attribute": "base-search-path",
                "reflect": true,
                "defaultValue": "'/'"
            },
            "baseCategoryPath": {
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
                    "text": "Define a rota base da p\u00E1gina de categoria."
                },
                "attribute": "base-category-path",
                "reflect": true,
                "defaultValue": "'/'"
            }
        };
    }
}
//# sourceMappingURL=news-search.js.map
