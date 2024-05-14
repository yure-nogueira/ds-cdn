import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const dropdownCss = ":host{--tp-background:var(--tp-color-neutral-3);--tp-z-index:1;--tp-left:0;--tp-top:0}:host{display:block;background-color:var(--tp-background);position:absolute;z-index:var(--tp-z-index);left:var(--tp-left);top:var(--tp-top);border-radius:0 0 8px 8px;width:100%;--tp-scroll-color-content:var(--tp-color-neutral-3);--tp-scroll-color-track:var(--tp-color-neutral-1);--tp-scroll-width:8px;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}:host::-webkit-scrollbar{width:var(--tp-scroll-width);height:8px}@media (max-width: 576px){:host::-webkit-scrollbar{width:0}}:host::-webkit-scrollbar-track{background:var(--tp-scroll-color-track)}:host::-webkit-scrollbar-thumb{color:transparent;background:var(--tp-scroll-color-content)}:host::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}:host::-webkit-scrollbar-thumb{background-clip:content-box;border:2px solid transparent;border-radius:16px;box-shadow:inset 0 0 0 10px}:host::-webkit-scrollbar-button{display:none;width:0;height:0}::slotted(ion-item){--background:transparent}::slotted(ion-item.item-lines-full){--border-color:var(--tp-color-neutral-4) !important}::slotted(ion-item.item-lines-full:last-child){--border-width:0}";
const TpDropdownStyle0 = dropdownCss;

const TpDropdown = /*@__PURE__*/ proxyCustomElement(class TpDropdown extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '9f5e44227cd284a94d9dc3c2f5eed139cf9192c7', class: "tp-dropdown" }, h("slot", { key: 'c9eeedd9ab3f23ba40e69a9c5de52937dbd12841' })));
    }
    static get style() { return TpDropdownStyle0; }
}, [1, "tp-dropdown"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-dropdown"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpDropdown);
            }
            break;
    } });
}

export { TpDropdown as T, defineCustomElement as d };

//# sourceMappingURL=dropdown.js.map