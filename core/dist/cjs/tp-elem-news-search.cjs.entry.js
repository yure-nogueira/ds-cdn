'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const config = require('./config-2b56a599.js');

function navigate(route) {
    location.href = `${location.origin}/${route}`;
}

const CONFIG = getEnvironmentConfig();
function getEnvironmentConfig() {
    switch ("production") {
        case 'development':
            return config.DEVELOPMENT_CONFIG;
        case 'production':
            return config.PRODUCTION_CONFIG;
        case 'production:elementor':
            return config.PRODUCTION_ELEMENTOR_CONFIG;
        default:
            return config.DEVELOPMENT_CONFIG;
    }
}

const NEWS_SEARCH = {
    icons: {
        search: `${CONFIG.ASSETS_BASE_PATH}/tp-search.svg`,
        x: `${CONFIG.ASSETS_BASE_PATH}/tp-x.svg`,
    },
    interfaceOptions: { cssClass: 'tp-popover-select' },
    defaultColor: 'neutral-2',
    searchKey: 'busca',
};

const newsSearchCss = ".tp-news-search__container.sc-tp-elem-news-search{display:flex;justify-content:center;align-items:center;gap:0 24px}@media (max-width: 767.98px){.tp-news-search__container.sc-tp-elem-news-search{flex-direction:column}}.tp-news-search__term-search.sc-tp-elem-news-search,.tp-news-search__category-filter.sc-tp-elem-news-search{flex:1 1 auto;width:100%}";
const TpElemNewsSearchStyle0 = newsSearchCss;

const TpElemNewsSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        console.log('ENV:', config.CONFIG);
        console.log('mode:', "production");
        return (index.h(index.Host, { key: 'dd48481ec2e26ce42dd9b5eb6276291aae901f1b', class: "tp-news-search" }, index.h("div", { key: '0b4813012ea521fb1d40310cb209ea219bc79914', class: "tp-news-search__container" }, index.h("tp-input-container", { key: '6847318e8b72153d5ec9174bf769d50c603ab47a', color: color, class: "tp-news-search__term-search" }, index.h("ion-searchbar", { key: '428f56c199991ab4e69b1e542ca75b6ae55ccad3', mode: "md", "search-icon": NEWS_SEARCH.icons.search, "clear-icon": NEWS_SEARCH.icons.x, placeholder: "Buscar", onIonChange: (e) => this.onSearchByTerm(e) })), index.h("tp-input-container", { key: '11a0a6b476225f34a9fb2c02ee5d38e26628f5b0', color: color, class: "tp-news-search__category-filter" }, index.h("ion-select", { key: 'e0c6ce6f42af8a8eecd5df1dcb3531fb17af6f01', placeholder: "Selecione uma categoria", interface: "popover", interfaceOptions: NEWS_SEARCH.interfaceOptions, onIonChange: (e) => this.onFilterByCategory(e) }, index.h("slot", { key: '93d67ab1c8b17daf08727e7460cad99b063f3b81', name: "select-options" }))))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpElemNewsSearch.style = TpElemNewsSearchStyle0;

exports.tp_elem_news_search = TpElemNewsSearch;

//# sourceMappingURL=tp-elem-news-search.cjs.entry.js.map