import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const newsItemCss = ".sc-tp-elem-news-item-h{display:block;width:100%}.tp-news-item__container.sc-tp-elem-news-item{display:flex;align-items:center;gap:64px;border:1px solid var(--tp-color-neutral-2);border-radius:8px;padding:40px;cursor:pointer;background-color:transparent;transition:background-color 0.2s ease-in}.tp-news-item__container.sc-tp-elem-news-item:hover{background-color:var(--tp-color-neutral-2)}.tp-news-item__container:hover.sc-tp-elem-news-item-s>[slot=image],.tp-news-item__container:hover .sc-tp-elem-news-item-s>[slot=image]{transform:scale(1.15)}@media (max-width: 1199.98px){.tp-news-item__container.sc-tp-elem-news-item{gap:48px;padding:32px}}@media (max-width: 991.98px){.tp-news-item__container.sc-tp-elem-news-item{gap:32px;padding:24px}}@media (max-width: 767.98px){.tp-news-item__container.sc-tp-elem-news-item{gap:16px}}@media (max-width: 575.98px){.tp-news-item__container.sc-tp-elem-news-item{flex-direction:column;gap:24px}}.tp-news-item__left.sc-tp-elem-news-item{display:flex;justify-content:center;align-items:center;flex:40%}@media (max-width: 575.98px){.tp-news-item__left.sc-tp-elem-news-item{flex:1}}.tp-news-item__image-container.sc-tp-elem-news-item{display:flex;overflow:hidden;border-radius:8px}.tp-news-item.sc-tp-elem-news-item-s>[slot=image],.tp-news-item .sc-tp-elem-news-item-s>[slot=image]{transition:transform 0.3s ease-in}.tp-news-item__right.sc-tp-elem-news-item{display:flex;flex-direction:column;flex:60%}@media (max-width: 575.98px){.tp-news-item__right.sc-tp-elem-news-item{flex:1;align-items:flex-start;width:100%}}.tp-news-item.sc-tp-elem-news-item-s>[slot=category],.tp-news-item .sc-tp-elem-news-item-s>[slot=category]{--padding-start:24px !important;--padding-end:24px !important;--padding-top:2px !important;--padding-bottom:2px !important;margin-bottom:32px;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.tp-news-item.sc-tp-elem-news-item-s>[slot=title],.tp-news-item .sc-tp-elem-news-item-s>[slot=title]{margin-bottom:24px}.tp-news-item.sc-tp-elem-news-item-s>[slot=title],.tp-news-item.sc-tp-elem-news-item-s>[slot=title] h1,.tp-news-item .sc-tp-elem-news-item-s>[slot=title] h1{font-size:32px;line-height:40px;font-weight:600}@media (max-width: 767.98px){.tp-news-item.sc-tp-elem-news-item-s>[slot=title],.tp-news-item.sc-tp-elem-news-item-s>[slot=title] h1,.tp-news-item .sc-tp-elem-news-item-s>[slot=title] h1{font-size:24px;line-height:32px}}";
const TpElemNewsItemStyle0 = newsItemCss;

const TpElemNewsItem = /*@__PURE__*/ proxyCustomElement(class TpElemNewsItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'c84003e683a46dc4fcf7f27c8a073f88c25f306a', class: "tp-news-item" }, h("div", { key: 'f0d57cb78e37704715aad8901abed9038db32e08', class: "tp-news-item__container" }, h("div", { key: '793fde95b1068c0a88f50aa3281a4c40c789f949', class: "tp-news-item__left" }, h("div", { key: '89f3769db44f27cd79807adb237f5281218fd8be', class: "tp-news-item__image-container" }, h("slot", { key: '8372cb2c446d4152d89c98e49795debe0495ddda', name: "image" }))), h("div", { key: '4894aa26fc1b22a587d4b9fba17842e5730ada46', class: "tp-news-item__right" }, h("slot", { key: '2e35237fd41d542f36b8b6ed611a70865d56c0a5', name: "category" }), h("slot", { key: 'f856464ed47a298169f1480b2cb32d94e3ffcc02', name: "title" }), h("slot", { key: '6c36ce053e0be509760da07930f8f935599feaf2', name: "date-time" })))));
    }
    static get style() { return TpElemNewsItemStyle0; }
}, [6, "tp-elem-news-item"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-elem-news-item"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-elem-news-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpElemNewsItem);
            }
            break;
    } });
}

export { TpElemNewsItem as T, defineCustomElement as d };

//# sourceMappingURL=news-item.js.map