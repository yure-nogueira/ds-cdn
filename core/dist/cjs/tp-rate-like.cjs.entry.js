'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');

var TpRateLikeStatus;
(function (TpRateLikeStatus) {
    TpRateLikeStatus["LIKE"] = "like";
    TpRateLikeStatus["DISLIKE"] = "dislike";
})(TpRateLikeStatus || (TpRateLikeStatus = {}));

const rateLikeCss = ".tp-rate-like__container{display:flex;align-items:center}.tp-rate-like__button{width:24px;height:24px;color:var(--tp-color-neutral-10);background:transparent;border:0;cursor:pointer}.tp-rate-like__button:first-child{margin-right:16px}.tp-rate-like__button--disabled{pointer-events:none}.tp-rate-like__button--disabled .tp-rate-like__icon{color:var(--tp-color-neutral-4)}.tp-rate-like__button--like .tp-rate-like__icon{color:var(--tp-color-success)}.tp-rate-like__button--dislike .tp-rate-like__icon{color:var(--tp-color-warning)}.tp-rate-like__icon{width:24px;height:24px}.tp-rate-like__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:24px;height:24px;margin:0}.tp-rate-like__skeleton:not(:last-child){margin-right:16px}";

const TpRateLike = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tpChange = index.createEvent(this, "tpChange", 7);
        this.thumbsUpIcon = index.getAssetPath('./assets/tp-thumbs-up.svg');
        this.thumbsDownIcon = index.getAssetPath('./assets/tp-thumbs-down.svg');
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
            content = (index.h("div", { class: "tp-rate-like__container" }, index.h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true }), index.h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true })));
        }
        else {
            content = (index.h("div", { class: "tp-rate-like__container" }, index.h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, index.h("ion-icon", { class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), index.h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.DISLIKE
                    ? 'tp-rate-like__button--dislike'
                    : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, index.h("ion-icon", { class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
        }
        return index.h(index.Host, { class: "tp-rate-like" }, content);
    }
    static get assetsDirs() { return ["assets"]; }
};
TpRateLike.style = rateLikeCss;

exports.tp_rate_like = TpRateLike;

//# sourceMappingURL=tp-rate-like.cjs.entry.js.map