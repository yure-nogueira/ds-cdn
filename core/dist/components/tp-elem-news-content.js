import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const newsContentCss = ".sc-tp-elem-news-content-h{display:block;color:var(--tp-color-neutral-10);font-size:16px;font-weight:400;line-height:24px}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>p,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>p{font-size:16px;font-weight:400;line-height:24px;padding-top:24px;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>h1,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>h1{font-size:48px;font-weight:600;line-height:64px;padding:0;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>h2,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>h2{font-size:32px;font-weight:600;line-height:40px;padding-top:40px;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>h3,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>h3{font-size:24px;font-weight:600;line-height:32px;padding-top:40px;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>h4,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>h4{font-size:20px;font-weight:600;line-height:24px;padding-top:40px;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>h5,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>h5{font-size:18px;font-weight:600;line-height:32px;padding-top:40px;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>h6,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>h6{font-size:16px;font-weight:600;line-height:24px;padding-top:40px;margin:0}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>figure,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>figure{margin:16px auto 0 !important}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>figure,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>figure img,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>figure img{display:block;height:auto;margin:0 auto;border-radius:8px}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>figure,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>figure figcaption,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>figure figcaption{font-size:14px;font-weight:400;line-height:20px;margin:0;padding-top:8px;color:var(--tp-color-neutral-10);text-align:center}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>img,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>img{display:block;margin:24px auto 0;border-radius:8px !important}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>a,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>a,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>a:hover,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>a:hover,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>a:active,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>a:active,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>a:link,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>a:link,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>a:visited,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>a:visited{text-decoration:none;color:var(--tp-color-brand-4)}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>ul,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>ul,.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>ol,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>ol{margin:0;padding-top:24px}.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>blockquote,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>blockquote{margin:0;padding:24px 40px 0 40px;font-style:italic}@media (max-width: 575.98px){.sc-tp-elem-news-content-h.sc-tp-elem-news-content-s>blockquote,.sc-tp-elem-news-content-h .sc-tp-elem-news-content-s>blockquote{padding:24px 24px 0 24px}}";
const TpElemNewsContentStyle0 = newsContentCss;

const TpElemNewsContent$1 = /*@__PURE__*/ proxyCustomElement(class TpElemNewsContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'b36cfd9361625859c3269d16655899ac10dcf465' }, h("slot", { key: '25e5249338db8c1ea887935e76e0b0acd6f68bb4' })));
    }
    static get style() { return TpElemNewsContentStyle0; }
}, [6, "tp-elem-news-content"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-elem-news-content"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-elem-news-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpElemNewsContent$1);
            }
            break;
    } });
}

const TpElemNewsContent = TpElemNewsContent$1;
const defineCustomElement = defineCustomElement$1;

export { TpElemNewsContent, defineCustomElement };

//# sourceMappingURL=tp-elem-news-content.js.map