import { Host, h } from "@stencil/core";
import { ApiNews } from "../../../../../utils/api/institucional/news.api";
import { NEWS_LIST } from "./utils/news-list.constant";
export class TpElemNewsList {
    constructor() {
        this.mode = NEWS_LIST.defaultMode;
        this.perPage = NEWS_LIST.defaultPerPage;
        this.page = 1;
        this.totalPages = undefined;
        this.news = undefined;
        this.loading = true;
        this.connectionError = false;
    }
    /**
     * State and prop change listeners.
     */
    onLoadMore() {
        this.getNews();
    }
    onPerPageChange() {
        this.news = [];
        if (this.page === 1) {
            this.getNews();
        }
        else {
            this.page = 1;
        }
    }
    /**
     * Lifecycle hooks.
     */
    componentWillLoad() {
        this.getNews();
    }
    /**
     * Métodos internos
     */
    async getNews() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const extraParams = { page: this.page, perPage: this.perPage };
            if (this.mode === 'search') {
                const search = urlParams.get(NEWS_LIST.modeKeys.search) || '';
                Object.assign(extraParams, { search });
            }
            else if (this.mode === 'category') {
                const pathSegments = location.pathname.slice(0, -1).split('/');
                const category = pathSegments[pathSegments.length - 1] || '';
                Object.assign(extraParams, { category });
            }
            this.loading = true;
            const { news, totalPages } = await ApiNews.getNews(extraParams);
            this.loading = false;
            if (this.totalPages !== totalPages) {
                this.totalPages = totalPages;
            }
            if (this.connectionError) {
                this.connectionError = false;
            }
            if (!this.news) {
                return (this.news = news || []);
            }
            this.news = [...this.news, ...news];
        }
        catch (error) {
            this.loading = false;
            this.connectionError = true;
        }
    }
    getNewsItemList() {
        return this.news.map((item) => (h("li", { class: "tp-news-list__item" }, h("a", { class: "tp-news-list__link", href: item.permalink }, h("tp-elem-news-item", null, h("img", { slot: "image", src: item.thumb, title: item.titleText, alt: item.altText }), item.category && (h("ion-badge", { slot: "category", color: "brand-4" }, item.category)), h("ion-text", { slot: "title" }, h("h1", null, item.title)), h("ion-text", { slot: "date-time", "tp-type": "p14x", color: "neutral-8" }, h("time", null, item.date, " - ", item.time)))))));
    }
    render() {
        const { perPage, page, news, totalPages, loading, connectionError } = this;
        const newsItems = !news && loading
            ? Array.from({ length: perPage }).map(() => (h("ion-skeleton-text", { animated: true, "tp-component": "tp-elem-news-item" })))
            : news
                ? this.getNewsItemList()
                : null;
        return (h(Host, { key: '4667c40998a74a18a21618be817380680c1f7654', class: "tp-news-list" }, h("ul", { key: 'f41c0725d1d8147ddea928b1542e1e9181011441', class: {
                'tp-news-list__list': true,
                'tp-news-list__list--show': Boolean(news === null || news === void 0 ? void 0 : news.length) || loading,
            } }, newsItems), h("div", { key: '583b43eaf33d6d77863ead0729bfca2961359b92', class: {
                'tp-news-list__warning': true,
                'tp-news-list__warning--show': news && !news.length,
            } }, h("ion-icon", { key: '3243e923283083166e78f23596a40372d1f14818', class: "tp-news-list__warning-icon", src: NEWS_LIST.icons.searchX }), h("slot", { key: '9175339c385d16abba4c157f74231980de2eb5be', name: "not-found" })), h("div", { key: 'd26f06613c83edd4ff8d3a6362b14633688196b8', class: {
                'tp-news-list__warning': true,
                'tp-news-list__warning--show': connectionError,
            } }, h("ion-icon", { key: 'feca36bf0db9dba11f0c924e11f651cbf10084f8', class: "tp-news-list__warning-icon", src: NEWS_LIST.icons.wifiOff }), h("slot", { key: '6fa581ff30a014331cd0fdb1e81150ffcfb7c53c', name: "connection-error" })), h("tp-loader", { key: 'a4ea37144c1db30e41f8e248302ee77b490f99b2', class: {
                'tp-news-list__loader': true,
                'tp-news-list__loader--show': (news === null || news === void 0 ? void 0 : news.length) && loading,
            }, size: "auto" }), h("div", { key: '0c249550fa258a569f780a35eda17981e3a0ea2d', class: {
                'tp-news-list__button-container': true,
                'tp-news-list__button-container--show': page !== totalPages && news && Boolean(news.length),
            } }, h("ion-button", { key: 'f4f2dbefba672d5640ab365ad575da302a7daef2', color: "brand-4",
            /* @ts-ignore */
            size: "sm", disabled: loading, onClick: () => this.page++ }, "Carregar mais", h("ion-icon", { key: '2481ba1025d08b41da2dbf5667d5a9f3b463a58e', slot: "end", src: NEWS_LIST.icons.plus })))));
    }
    static get is() { return "tp-elem-news-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["news-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["news-list.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NewsListMode",
                    "resolved": "\"all\" | \"category\" | \"search\"",
                    "references": {
                        "NewsListMode": {
                            "location": "import",
                            "path": "./utils/news-list.type",
                            "id": "src/components/elementor/institucional/feature/news-list/utils/news-list.type.ts::NewsListMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o modo de uso do componente."
                },
                "attribute": "mode",
                "reflect": true,
                "defaultValue": "NEWS_LIST.defaultMode"
            },
            "perPage": {
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
                    "text": "Define a quantidade de items por p\u00E1gina a serem carregados."
                },
                "attribute": "per-page",
                "reflect": true,
                "defaultValue": "NEWS_LIST.defaultPerPage"
            }
        };
    }
    static get states() {
        return {
            "page": {},
            "totalPages": {},
            "news": {},
            "loading": {},
            "connectionError": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "page",
                "methodName": "onLoadMore"
            }, {
                "propName": "perPage",
                "methodName": "onPerPageChange"
            }];
    }
}
//# sourceMappingURL=news-list.js.map
