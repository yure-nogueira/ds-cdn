import { Host, getAssetPath, h, } from "@stencil/core";
import { TpRateLikeStatus } from "./utils/rate-like.enum";
export class TpRateLike {
    constructor() {
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
            content = (h("div", { key: '90c3600b5bd92976198489f1194e56162d582cf8', class: "tp-rate-like__container" }, h("ion-skeleton-text", { key: 'ab7dfe82c19517c5dd9dd173c6165c04544031eb', class: "tp-rate-like__skeleton", animated: true }), h("ion-skeleton-text", { key: 'af1a5911c1ac4c4ffc458e99da2a660d6bc254d6', class: "tp-rate-like__skeleton", animated: true })));
        }
        else {
            content = (h("div", { key: '38bb35cb91094df9ab2ca2c8fc08889aa6addaa3', class: "tp-rate-like__container" }, h("button", { key: 'ae29f8d641ea6456ce99a670311107baaa00177b', class: `tp-rate-like__button
          ${status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, h("ion-icon", { key: 'aa18d124629f2526331b04ee4c27c84ab66c1a9a', class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), h("button", { key: '1c40dd04d05af5e30003eca3b2a0aa29dec888a0', class: `tp-rate-like__button
          ${status === TpRateLikeStatus.DISLIKE
                    ? 'tp-rate-like__button--dislike'
                    : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, h("ion-icon", { key: 'b7fdda6ea8d01621e6c1d45236dc36fa743d3df6', class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
        }
        return h(Host, { key: 'f35fd48e3f752d99a7a311b6c6772d161e655341', class: "tp-rate-like" }, content);
    }
    static get is() { return "tp-rate-like"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["rate-like.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["rate-like.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "status": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'like' | 'dislike'",
                    "resolved": "\"dislike\" | \"like\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o status do componente."
                },
                "attribute": "status",
                "reflect": true
            },
            "loading": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o estado de carregamento do componente."
                },
                "attribute": "loading",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "tpChange",
                "name": "tpChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando a propriedade status \u00E9 alterada."
                },
                "complexType": {
                    "original": "'like' | 'dislike'",
                    "resolved": "\"dislike\" | \"like\"",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=rate-like.js.map
