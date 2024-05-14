import { Host, h } from "@stencil/core";
export class TpElemNewsItem {
    render() {
        return (h(Host, { key: 'c84003e683a46dc4fcf7f27c8a073f88c25f306a', class: "tp-news-item" }, h("div", { key: 'f0d57cb78e37704715aad8901abed9038db32e08', class: "tp-news-item__container" }, h("div", { key: '793fde95b1068c0a88f50aa3281a4c40c789f949', class: "tp-news-item__left" }, h("div", { key: '89f3769db44f27cd79807adb237f5281218fd8be', class: "tp-news-item__image-container" }, h("slot", { key: '8372cb2c446d4152d89c98e49795debe0495ddda', name: "image" }))), h("div", { key: '4894aa26fc1b22a587d4b9fba17842e5730ada46', class: "tp-news-item__right" }, h("slot", { key: '2e35237fd41d542f36b8b6ed611a70865d56c0a5', name: "category" }), h("slot", { key: 'f856464ed47a298169f1480b2cb32d94e3ffcc02', name: "title" }), h("slot", { key: '6c36ce053e0be509760da07930f8f935599feaf2', name: "date-time" })))));
    }
    static get is() { return "tp-elem-news-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["news-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["news-item.css"]
        };
    }
}
//# sourceMappingURL=news-item.js.map
