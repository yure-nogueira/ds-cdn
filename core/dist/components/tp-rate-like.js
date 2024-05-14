import { proxyCustomElement, HTMLElement, createEvent, getAssetPath, h, Host } from '@stencil/core/internal/client';

var TpRateLikeStatus;
(function (TpRateLikeStatus) {
    TpRateLikeStatus["LIKE"] = "like";
    TpRateLikeStatus["DISLIKE"] = "dislike";
})(TpRateLikeStatus || (TpRateLikeStatus = {}));

const rateLikeCss = ".tp-rate-like__container{display:flex;align-items:center}.tp-rate-like__button{width:24px;height:24px;color:var(--tp-color-neutral-10);background:transparent;border:0;cursor:pointer}.tp-rate-like__button:first-child{margin-right:16px}.tp-rate-like__button--disabled{pointer-events:none}.tp-rate-like__button--disabled .tp-rate-like__icon{color:var(--tp-color-neutral-4)}.tp-rate-like__button--like .tp-rate-like__icon{color:var(--tp-color-success)}.tp-rate-like__button--dislike .tp-rate-like__icon{color:var(--tp-color-warning)}.tp-rate-like__icon{width:24px;height:24px}.tp-rate-like__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:24px;height:24px;margin:0}.tp-rate-like__skeleton:not(:last-child){margin-right:16px}";

const TpRateLike$1 = /*@__PURE__*/ proxyCustomElement(class TpRateLike extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tpChange = createEvent(this, "tpChange", 7);
        this.thumbsUpIcon = getAssetPath('./assets/tp-thumbs-up.svg');
        this.thumbsDownIcon = getAssetPath('./assets/tp-thumbs-down.svg');
        this.onClick = (status) => {
            if (this.status === undefined) {
                return;
            }
            this.status = status;
            this.tpChange.emit(this.status);
        };
        this.status = undefined;
        this.loading = undefined;
    }
    render() {
        const { loading, status, thumbsUpIcon, thumbsDownIcon } = this;
        let content;
        if (loading) {
            content = (h("div", { class: "tp-rate-like__container" }, h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true }), h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true })));
        }
        else {
            content = (h("div", { class: "tp-rate-like__container" }, h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, h("ion-icon", { class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.DISLIKE
                    ? 'tp-rate-like__button--dislike'
                    : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, h("ion-icon", { class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
        }
        return h(Host, { class: "tp-rate-like" }, content);
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return rateLikeCss; }
}, [1, "tp-rate-like", {
        "status": [1537],
        "loading": [1540]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-rate-like"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-rate-like":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpRateLike$1);
            }
            break;
    } });
}

const TpRateLike = TpRateLike$1;
const defineCustomElement = defineCustomElement$1;

export { TpRateLike, defineCustomElement };

//# sourceMappingURL=tp-rate-like.js.map