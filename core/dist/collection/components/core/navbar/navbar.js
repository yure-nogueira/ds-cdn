import { h, Host } from "@stencil/core";
//import ResizeObserver from 'resize-observer-polyfill';
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpNavbar {
    constructor() {
        this.color = undefined;
        this.name = undefined;
    }
    componentDidLoad() {
        this.setSize();
    }
    disconnectedCallback() {
        if (this.sidesResizeObserver) {
            this.sidesResizeObserver.disconnect();
        }
    }
    setSize() {
        this.sidesResizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const rightWidth = Number(this.rightEl.getBoundingClientRect().width);
                const leftWidth = Number(this.leftEl.getBoundingClientRect().width);
                const leftDiff = entry.contentRect.width - rightWidth;
                const rightDiff = entry.contentRect.width - leftWidth;
                let marginLeft = 0;
                let marginRight = 0;
                if (rightWidth !== leftWidth) {
                    if (entry.target.id === 'left') {
                        if (leftDiff > 0) {
                            marginRight = leftDiff;
                        }
                        else {
                            marginLeft = rightDiff - leftDiff;
                            if (marginLeft < 0) {
                                marginLeft *= -1;
                            }
                        }
                    }
                    else if (entry.target.id === 'right') {
                        if (rightDiff > 0) {
                            marginLeft = rightDiff;
                        }
                        else {
                            marginRight = rightDiff - leftDiff;
                            if (marginRight < 0) {
                                marginRight *= -1;
                            }
                        }
                    }
                }
                this.centerEl.style.setProperty('--padding-left', `${marginLeft}px`);
                this.centerEl.style.setProperty('--padding-right', `${marginRight}px`);
            }
        });
        this.sidesResizeObserver.observe(this.leftEl);
        this.sidesResizeObserver.observe(this.rightEl);
    }
    render() {
        const { color, name } = this;
        return (h(Host, { key: 'bb19521b13d8ff7a96f5b2f90241f1613fd5b245', "from-stencil": true, class: createColorClasses(color, {
                'tp-navbar': true,
                [`tp-navbar--${name}`]: name !== undefined,
            }) }, h("header", { key: 'ca5177a2a395d7b1b419e67b6487e245d0cc8d63', class: "tp-navbar__header" }, h("slot", { key: '7712389526fe42854bb13d69571a4bee925c5aed', name: "top" }), h("div", { key: 'e5f4d6b652448e5d4813511f8deee64443b4fa24', class: "tp-navbar__container" }, h("div", { key: 'f051fc4679301a31f2dc142f6136eaf44d279eb4', id: "left", class: "tp-navbar__left", ref: (el) => (this.leftEl = el) }, h("slot", { key: '838c62dacaba5de56a4a255ba67e8b73a1cbc927', name: "left" })), h("div", { key: 'de0fb77bf12422650a44b0903b2224f026af7a08', class: "tp-navbar__center", ref: (el) => (this.centerEl = el) }, h("slot", { key: '5cd49c6b8f95aef3f17cb390bdfb15553b023df6', name: "title" }), h("slot", { key: 'a45d67852cc2ee132147eec2ff4200442efcae6f', name: "subtitle" })), h("div", { key: '577230017b7ea4913dd02064f4cbccfc39829709', id: "right", class: "tp-navbar__right", ref: (el) => (this.rightEl = el) }, h("slot", { key: 'cadd37ae6983b9932c0a741941bb77ee915aa10f', name: "right" }))))));
    }
    static get is() { return "tp-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "color",
                "reflect": true
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'secondary' | 'transparent'",
                    "resolved": "\"secondary\" | \"transparent\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "name",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=navbar.js.map
