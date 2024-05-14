import { h, Host, } from "@stencil/core";
export class TpHeader {
    constructor() {
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
    static get is() { return "tp-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["header.css"]
        };
    }
    static get events() {
        return [{
                "method": "headerResize",
                "name": "headerResize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "complexType": {
                    "original": "headerResizeEventDetail",
                    "resolved": "headerResizeEventDetail",
                    "references": {
                        "headerResizeEventDetail": {
                            "location": "import",
                            "path": "./utils/header.interface",
                            "id": "src/components/core/header/utils/header.interface.ts::headerResizeEventDetail"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=header.js.map
