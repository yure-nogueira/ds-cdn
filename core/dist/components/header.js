import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const headerCss = ":host{--tp-background:var(--tp-color-neutral-1)}:host{background:var(--tp-background);display:block;padding-top:var(--ion-safe-area-top)}";
const TpHeaderStyle0 = headerCss;

const TpHeader = /*@__PURE__*/ proxyCustomElement(class TpHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.headerResize = createEvent(this, "headerResize", 7);
        this.hostHeight = 0;
    }
    componentDidLoad() {
        this.setSize();
    }
    disconnectedCallback() {
        if (this.hostResizeObserver) {
            this.hostResizeObserver.disconnect();
        }
    }
    setSize() {
        this.hostResizeObserver = new ResizeObserver(() => {
            let newHostHeight = Number(this.el.getBoundingClientRect().height);
            if (newHostHeight !== this.hostHeight) {
                this.headerResize.emit({ height: newHostHeight });
                this.hostHeight = newHostHeight;
            }
        });
        this.hostResizeObserver.observe(this.el);
    }
    render() {
        return (h(Host, { key: 'f3a46012ab19867b70cf2f902f27cf8edefc147a', "from-stencil": true }, h("slot", { key: '2968c7bacf1b8dcdce299be958df729c81a8b27b', name: "navbar" }), h("slot", { key: '425c5e28d4141a9d7a38e634a791b2ef05b5e58f', name: "toolbar" }), h("slot", { key: '720e7e8e5df4487e63479c42ad49736247657a91', name: "progress" }), h("slot", { key: 'ba4097d11173e9c54d3cb8c2c2f853347e46bcc2', name: "auxiliar" })));
    }
    get el() { return this; }
    static get style() { return TpHeaderStyle0; }
}, [1, "tp-header"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-header"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpHeader);
            }
            break;
    } });
}

export { TpHeader as T, defineCustomElement as d };

//# sourceMappingURL=header.js.map