'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');

const newsHeroCss = ".sc-tp-elem-news-hero-h{position:relative;display:flex;width:100%}.tp-news-hero__container.sc-tp-elem-news-hero{display:flex;gap:16px;position:absolute;top:0;left:0;width:100%;height:100%;padding:24px;box-sizing:border-box;background:linear-gradient(180deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.5) 100%)}.tp-news-hero__left.sc-tp-elem-news-hero{flex:2;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;gap:24px}.tp-news-hero__left.sc-tp-elem-news-hero-s>[slot=category],.tp-news-hero__left .sc-tp-elem-news-hero-s>[slot=category]{--padding-start:24px !important;--padding-end:24px !important;--padding-top:2px !important;--padding-bottom:2px !important}.tp-news-hero__left.sc-tp-elem-news-hero-s>[slot=title] h1,.tp-news-hero__left .sc-tp-elem-news-hero-s>[slot=title] h1{font-size:48px;line-height:48px;font-weight:600}@media (max-width: 991.98px){.tp-news-hero__left.sc-tp-elem-news-hero-s>[slot=title] h1,.tp-news-hero__left .sc-tp-elem-news-hero-s>[slot=title] h1{font-size:32px !important;line-height:32px !important}}.tp-news-hero__right.sc-tp-elem-news-hero{flex:0 1 240px;display:flex;justify-content:center;align-items:center}@media (max-width: 767.98px){.tp-news-hero__right.sc-tp-elem-news-hero{display:none}}";
const TpElemNewsHeroStyle0 = newsHeroCss;

const TpElemNewsHero = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '76395e88b31cfc4cf0d6df5f8cd40c5359300d47', class: "tp-news-hero" }, index.h("div", { key: '5ac80bd7c186c96369b2cf04d606c5fe8292973a', class: "tp-news-hero__container" }, index.h("div", { key: 'b9a3e1958e8e93108db9d9396b3178c840dcccf8', class: "tp-news-hero__left" }, index.h("slot", { key: '005cdf6bc41fbf2a79aa93f88bdd02f665f836f2', name: "category" }), index.h("slot", { key: '4b4c7b2aa02ede8de52996f5f63250cb13d8f330', name: "title" }), index.h("slot", { key: '257a1bbd4efc230d4ac30210eddd98adfac23b60', name: "date-time" })), index.h("div", { key: 'db17a67fbda7104f35646491bf99ed1e1d9d145c', class: "tp-news-hero__right" }, index.h("slot", { key: '5ea2ec88ff716711833d046448a993bde3dcca68', name: "watermark" })))));
    }
};
TpElemNewsHero.style = TpElemNewsHeroStyle0;

exports.tp_elem_news_hero = TpElemNewsHero;

//# sourceMappingURL=tp-elem-news-hero.cjs.entry.js.map