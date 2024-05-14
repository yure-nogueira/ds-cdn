import { Host, h } from "@stencil/core";
export class TpElemNewsHero {
    render() {
        return (h(Host, { key: '76395e88b31cfc4cf0d6df5f8cd40c5359300d47', class: "tp-news-hero" }, h("div", { key: '5ac80bd7c186c96369b2cf04d606c5fe8292973a', class: "tp-news-hero__container" }, h("div", { key: 'b9a3e1958e8e93108db9d9396b3178c840dcccf8', class: "tp-news-hero__left" }, h("slot", { key: '005cdf6bc41fbf2a79aa93f88bdd02f665f836f2', name: "category" }), h("slot", { key: '4b4c7b2aa02ede8de52996f5f63250cb13d8f330', name: "title" }), h("slot", { key: '257a1bbd4efc230d4ac30210eddd98adfac23b60', name: "date-time" })), h("div", { key: 'db17a67fbda7104f35646491bf99ed1e1d9d145c', class: "tp-news-hero__right" }, h("slot", { key: '5ea2ec88ff716711833d046448a993bde3dcca68', name: "watermark" })))));
    }
    static get is() { return "tp-elem-news-hero"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["news-hero.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["news-hero.css"]
        };
    }
}
//# sourceMappingURL=news-hero.js.map
