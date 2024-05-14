import { Host, getAssetPath, h, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpButtonCluster {
    constructor() {
        this.arrowIcon = getAssetPath('./assets/tp-chevron-down.svg');
        this.color = undefined;
        this.collapsed = true;
        this.loading = undefined;
    }
    toggleInternal(event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.collapsed = !this.collapsed;
        this.tpButtonClusterCollapsed.emit(this.collapsed);
    }
    async toggleExternal() {
        this.collapsed = !this.collapsed;
        this.tpButtonClusterCollapsed.emit(this.collapsed);
    }
    render() {
        const { arrowIcon, collapsed, color, loading } = this;
        let content;
        if (loading) {
            content = (h("div", { class: "tp-button-cluster__container" }, h("ion-skeleton-text", { class: "tp-button-cluster__skeleton-text", animated: true }), h("ion-skeleton-text", { class: "tp-button-cluster__skeleton-icon", animated: true })));
        }
        else {
            content = (h("div", { class: "tp-button-cluster__container", onClick: (event) => {
                    this.toggleInternal(event);
                } }, h("slot", { name: "expand-text" }), h("ion-icon", { class: "tp-button-cluster__icon", src: arrowIcon, "aria-hidden": "true" }), h("slot", { name: "collapse-text" })));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-button-cluster': true,
                'tp-button-cluster--collapsed': collapsed,
                'tp-button-cluster--loading': loading,
            }) }, content));
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "collapsed": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de estado do componente."
                },
                "attribute": "collapsed",
                "reflect": true,
                "defaultValue": "true"
            },
            "loading": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o estado de carregamento do componente."
                },
                "attribute": "loading",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "tpButtonClusterCollapsed",
                "name": "tpButtonClusterCollapsed",
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
    static get methods() {
        return {
            "toggleExternal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=button-cluster.js.map
