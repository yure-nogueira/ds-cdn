import { Host, h } from "@stencil/core";
export class TpElemNewsContent {
    render() {
        return (h(Host, { key: 'b36cfd9361625859c3269d16655899ac10dcf465' }, h("slot", { key: '25e5249338db8c1ea887935e76e0b0acd6f68bb4' })));
    }
    static get is() { return "tp-elem-news-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["news-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["news-content.css"]
        };
    }
}
//# sourceMappingURL=news-content.js.map
