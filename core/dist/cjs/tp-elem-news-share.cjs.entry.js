'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');

const newsShareCss = ".sc-tp-elem-news-share-h{display:block}.sc-tp-elem-news-share-s>[slot=text]{display:block;margin-bottom:16px}.sc-tp-elem-news-share-s>[slot=links]{display:flex;align-items:center;gap:24px;flex-wrap:wrap}.sc-tp-elem-news-share-s>[slot=links] a{height:48px;width:48px;border-radius:50%;cursor:pointer;overflow:hidden}";
const TpElemNewsShareStyle0 = newsShareCss;

const TpElemNewsShare = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0d96ba0c06a4acba6ed3b7cf6001752bc518edb0', class: "tp-news-share" }, index.h("slot", { key: 'ecf9970aadc62cd11b161f1ac08523f5d8a7ce32', name: "text" }), index.h("slot", { key: '3b0a1f9d0ed3f2bb3eac8beb817fcb2e1d034c9e', name: "links" })));
    }
};
TpElemNewsShare.style = TpElemNewsShareStyle0;

exports.tp_elem_news_share = TpElemNewsShare;

//# sourceMappingURL=tp-elem-news-share.cjs.entry.js.map