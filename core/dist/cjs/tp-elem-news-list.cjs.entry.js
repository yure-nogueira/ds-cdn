'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-f62d7467.js');
const index = require('./index-8c851fa5.js');

const API_NEWS_ACTIONS = {
    getNews: 'tp_get_news',
};

class ApiNews {
    static async getNews(extraParams) {
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(Object.assign(Object.assign({ action: API_NEWS_ACTIONS.getNews }, extraParams))),
        });
        const response = await rawResponse.json();
        const { data: rawData } = response;
        const data = index.camelcaseKeys(rawData, { deep: true });
        return data;
    }
}

const NEWS_LIST = {
    icons: {
        searchX: index$1.getAssetPath('./assets/tp-search-x.svg'),
        plus: index$1.getAssetPath('./assets/tp-plus.svg'),
        wifiOff: index$1.getAssetPath('./assets/tp-wi-fi-off.svg'),
    },
    modeKeys: {
        search: 'busca',
        category: 'categoria',
    },
    defaultMode: 'all',
    defaultPerPage: 5,
};

const newsListCss = ".sc-tp-elem-news-list-h{display:block}.tp-news-list__list.sc-tp-elem-news-list{list-style:none;display:none;flex-direction:column;justify-content:center;align-items:center;gap:32px;margin:0;padding:0}@media (max-width: 991.98px){.tp-news-list__list.sc-tp-elem-news-list{gap:24px}}.tp-news-list__list--show.sc-tp-elem-news-list{display:flex}.tp-news-list__item.sc-tp-elem-news-list{width:100%}.tp-news-list__link.sc-tp-elem-news-list{text-decoration:none}.tp-news-list__warning.sc-tp-elem-news-list{display:none;flex-direction:column;justify-content:center;align-items:center}.tp-news-list__warning--show.sc-tp-elem-news-list{display:flex}.tp-news-list__warning.sc-tp-elem-news-list-s>[slot=not-found] p,.tp-news-list__warning .sc-tp-elem-news-list-s>[slot=not-found] p,.tp-news-list__warning.sc-tp-elem-news-list-s>[slot=connection-error] p,.tp-news-list__warning .sc-tp-elem-news-list-s>[slot=connection-error] p{text-align:center}.tp-news-list__warning-icon.sc-tp-elem-news-list{width:40px;height:40px;margin-bottom:24px;color:var(--tp-color-neutral-10)}.tp-news-list__loader.sc-tp-elem-news-list{--tp-size:48px;display:none !important;margin-top:24px}.tp-news-list__loader--show.sc-tp-elem-news-list{display:flex !important}.tp-news-list__button-container.sc-tp-elem-news-list{display:none;align-items:center;justify-content:center;margin-top:40px}.tp-news-list__button-container--show.sc-tp-elem-news-list{display:flex}";
const TpElemNewsListStyle0 = newsListCss;

const TpElemNewsList = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
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
        return this.news.map((item) => (index$1.h("li", { class: "tp-news-list__item" }, index$1.h("a", { class: "tp-news-list__link", href: item.permalink }, index$1.h("tp-elem-news-item", null, index$1.h("img", { slot: "image", src: item.thumb, title: item.titleText, alt: item.altText }), item.category && (index$1.h("ion-badge", { slot: "category", color: "brand-4" }, item.category)), index$1.h("ion-text", { slot: "title" }, index$1.h("h1", null, item.title)), index$1.h("ion-text", { slot: "date-time", "tp-type": "p14x", color: "neutral-8" }, index$1.h("time", null, item.date, " - ", item.time)))))));
    }
    render() {
        const { perPage, page, news, totalPages, loading, connectionError } = this;
        const newsItems = !news && loading
            ? Array.from({ length: perPage }).map(() => (index$1.h("ion-skeleton-text", { animated: true, "tp-component": "tp-elem-news-item" })))
            : news
                ? this.getNewsItemList()
                : null;
        return (index$1.h(index$1.Host, { key: '4667c40998a74a18a21618be817380680c1f7654', class: "tp-news-list" }, index$1.h("ul", { key: 'f41c0725d1d8147ddea928b1542e1e9181011441', class: {
                'tp-news-list__list': true,
                'tp-news-list__list--show': Boolean(news === null || news === void 0 ? void 0 : news.length) || loading,
            } }, newsItems), index$1.h("div", { key: '583b43eaf33d6d77863ead0729bfca2961359b92', class: {
                'tp-news-list__warning': true,
                'tp-news-list__warning--show': news && !news.length,
            } }, index$1.h("ion-icon", { key: '3243e923283083166e78f23596a40372d1f14818', class: "tp-news-list__warning-icon", src: NEWS_LIST.icons.searchX }), index$1.h("slot", { key: '9175339c385d16abba4c157f74231980de2eb5be', name: "not-found" })), index$1.h("div", { key: 'd26f06613c83edd4ff8d3a6362b14633688196b8', class: {
                'tp-news-list__warning': true,
                'tp-news-list__warning--show': connectionError,
            } }, index$1.h("ion-icon", { key: 'feca36bf0db9dba11f0c924e11f651cbf10084f8', class: "tp-news-list__warning-icon", src: NEWS_LIST.icons.wifiOff }), index$1.h("slot", { key: '6fa581ff30a014331cd0fdb1e81150ffcfb7c53c', name: "connection-error" })), index$1.h("tp-loader", { key: 'a4ea37144c1db30e41f8e248302ee77b490f99b2', class: {
                'tp-news-list__loader': true,
                'tp-news-list__loader--show': (news === null || news === void 0 ? void 0 : news.length) && loading,
            }, size: "auto" }), index$1.h("div", { key: '0c249550fa258a569f780a35eda17981e3a0ea2d', class: {
                'tp-news-list__button-container': true,
                'tp-news-list__button-container--show': page !== totalPages && news && Boolean(news.length),
            } }, index$1.h("ion-button", { key: 'f4f2dbefba672d5640ab365ad575da302a7daef2', color: "brand-4",
            /* @ts-ignore */
            size: "sm", disabled: loading, onClick: () => this.page++ }, "Carregar mais", index$1.h("ion-icon", { key: '2481ba1025d08b41da2dbf5667d5a9f3b463a58e', slot: "end", src: NEWS_LIST.icons.plus })))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get watchers() { return {
        "page": ["onLoadMore"],
        "perPage": ["onPerPageChange"]
    }; }
};
TpElemNewsList.style = TpElemNewsListStyle0;

exports.tp_elem_news_list = TpElemNewsList;

//# sourceMappingURL=tp-elem-news-list.cjs.entry.js.map