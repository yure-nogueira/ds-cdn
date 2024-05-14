import { h, Host } from "@stencil/core";
export class TpDropdown {
    render() {
        return (h(Host, { key: '9f5e44227cd284a94d9dc3c2f5eed139cf9192c7', class: "tp-dropdown" }, h("slot", { key: 'c9eeedd9ab3f23ba40e69a9c5de52937dbd12841' })));
    }
    static get is() { return "tp-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown.css"]
        };
    }
}
//# sourceMappingURL=dropdown.js.map
