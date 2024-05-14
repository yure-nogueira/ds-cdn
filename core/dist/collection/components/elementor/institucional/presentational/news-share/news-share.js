import { Host, h } from "@stencil/core";
export class TpElemNewsShare {
    render() {
        return (h(Host, { key: '0d96ba0c06a4acba6ed3b7cf6001752bc518edb0', class: "tp-news-share" }, h("slot", { key: 'ecf9970aadc62cd11b161f1ac08523f5d8a7ce32', name: "text" }), h("slot", { key: '3b0a1f9d0ed3f2bb3eac8beb817fcb2e1d034c9e', name: "links" })));
    }
    static get is() { return "tp-elem-news-share"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["news-share.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["news-share.css"]
        };
    }
}
//# sourceMappingURL=news-share.js.map
