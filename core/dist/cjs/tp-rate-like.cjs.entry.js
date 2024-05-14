'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');

var TpRateLikeStatus;
(function (TpRateLikeStatus) {
    TpRateLikeStatus["LIKE"] = "like";
    TpRateLikeStatus["DISLIKE"] = "dislike";
})(TpRateLikeStatus || (TpRateLikeStatus = {}));

const rateLikeCss = ":host{--tp-color-rate-like:var(--tp-color-neutral-10)}.tp-rate-like__container{display:flex;align-items:center}.tp-rate-like__button{width:24px;height:24px;color:var(--tp-color-rate-like);background:transparent;border:0;cursor:pointer}.tp-rate-like__button:first-child{margin-right:16px}.tp-rate-like__button--disabled{pointer-events:none}.tp-rate-like__button--disabled .tp-rate-like__icon{color:var(--tp-color-neutral-4)}.tp-rate-like__button--like .tp-rate-like__icon{color:var(--tp-color-success)}.tp-rate-like__button--dislike .tp-rate-like__icon{color:var(--tp-color-warning)}.tp-rate-like__icon{width:24px;height:24px}.tp-rate-like__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:24px;height:24px;margin:0}.tp-rate-like__skeleton:not(:last-child){margin-right:16px}";
const TpRateLikeStyle0 = rateLikeCss;

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
            content = (index.h("div", { key: '90c3600b5bd92976198489f1194e56162d582cf8', class: "tp-rate-like__container" }, index.h("ion-skeleton-text", { key: 'ab7dfe82c19517c5dd9dd173c6165c04544031eb', class: "tp-rate-like__skeleton", animated: true }), index.h("ion-skeleton-text", { key: 'af1a5911c1ac4c4ffc458e99da2a660d6bc254d6', class: "tp-rate-like__skeleton", animated: true })));
        }
        else {
            content = (index.h("div", { key: '38bb35cb91094df9ab2ca2c8fc08889aa6addaa3', class: "tp-rate-like__container" }, index.h("button", { key: 'ae29f8d641ea6456ce99a670311107baaa00177b', class: `tp-rate-like__button
          ${status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, index.h("ion-icon", { key: 'aa18d124629f2526331b04ee4c27c84ab66c1a9a', class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), index.h("button", { key: '1c40dd04d05af5e30003eca3b2a0aa29dec888a0', class: `tp-rate-like__button
          ${status === TpRateLikeStatus.DISLIKE
                    ? 'tp-rate-like__button--dislike'
                    : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, index.h("ion-icon", { key: 'b7fdda6ea8d01621e6c1d45236dc36fa743d3df6', class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
        }
        return index.h(index.Host, { key: 'f35fd48e3f752d99a7a311b6c6772d161e655341', class: "tp-rate-like" }, content);
    }
    static get assetsDirs() { return ["assets"]; }
};
TpRateLike.style = TpRateLikeStyle0;

exports.tp_rate_like = TpRateLike;

//# sourceMappingURL=tp-rate-like.cjs.entry.js.map