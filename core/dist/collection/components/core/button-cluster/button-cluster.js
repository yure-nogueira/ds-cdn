import { Host, h, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TP_BUTTON_CLUSTER } from "./utils/button-cluster.constant";
export class TpButtonCluster {
    constructor() {
        this.color = undefined;
        this.initialCollapsedState = true;
        this.collapsed = true;
    }
    /**
     * Métodos internos.
     */
    toggle() {
        this.collapsed = !this.collapsed;
        this.tpCollapse.emit(this.collapsed);
    }
    /**
     * Lifecycle hooks.
     */
    componentWillLoad() {
        if (this.initialCollapsedState !== this.collapsed) {
            this.collapsed = this.initialCollapsedState;
        }
    }
    render() {
        const { color, collapsed } = this;
        return (h(Host, { key: '4bde1d9e6fe412d116cbaac898df541b57da6353', class: createColorClasses(color, {
                'tp-button-cluster': true,
                'tp-button-cluster--collapsed': collapsed,
            }) }, h("div", { key: '5b212862553306db57f83435d92309aa27619cb5', class: "tp-button-cluster__container", onClick: () => this.toggle() }, h("slot", { key: 'e39607e3c852b1689b29f59133089c3eb961c6be', name: "text-expand" }), h("ion-icon", { key: '28a6cdafdb0e460bff15bbc2b3094ebf9a4ca738', class: "tp-button-cluster__icon", src: TP_BUTTON_CLUSTER.icons.chevronDown, "aria-hidden": "true" }), h("slot", { key: '91055d78335fa85fec727fc6b6e8e8b963fe83d2', name: "text-collapse" }))));
    }
    static get is() { return "tp-button-cluster"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["button-cluster.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button-cluster.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "initialCollapsedState": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o estato inicial do componente."
                },
                "attribute": "initial-collapsed-state",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "collapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "tpCollapse",
                "name": "tpCollapse",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando a propriedade collapsed \u00E9 alterada."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=button-cluster.js.map
