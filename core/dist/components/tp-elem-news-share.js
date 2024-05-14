import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const newsShareCss = ".sc-tp-elem-news-share-h{display:block}.sc-tp-elem-news-share-s>[slot=text]{display:block;margin-bottom:16px}.sc-tp-elem-news-share-s>[slot=links]{display:flex;align-items:center;gap:24px;flex-wrap:wrap}.sc-tp-elem-news-share-s>[slot=links] a{height:48px;width:48px;border-radius:50%;cursor:pointer;overflow:hidden}";
const TpElemNewsShareStyle0 = newsShareCss;

const TpElemNewsShare$1 = /*@__PURE__*/ proxyCustomElement(class TpElemNewsShare extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '0d96ba0c06a4acba6ed3b7cf6001752bc518edb0', class: "tp-news-share" }, h("slot", { key: 'ecf9970aadc62cd11b161f1ac08523f5d8a7ce32', name: "text" }), h("slot", { key: '3b0a1f9d0ed3f2bb3eac8beb817fcb2e1d034c9e', name: "links" })));
    }
    static get style() { return TpElemNewsShareStyle0; }
}, [6, "tp-elem-news-share"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-elem-news-share"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-elem-news-share":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpElemNewsShare$1);
            }
            break;
    } });
}

const TpElemNewsShare = TpElemNewsShare$1;
const defineCustomElement = defineCustomElement$1;

export { TpElemNewsShare, defineCustomElement };

//# sourceMappingURL=tp-elem-news-share.js.map