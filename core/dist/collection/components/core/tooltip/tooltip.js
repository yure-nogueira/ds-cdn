import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpTooltip {
    constructor() {
        this.color = undefined;
        this.hover = undefined;
        this.placement = undefined;
        this.position = undefined;
        this.collapsed = true;
        this.loading = undefined;
    }
    /**
     * todo
     */
    async toggle(event) {
        if (!this.hover) {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            this.collapsed = !this.collapsed;
        }
    }
    /**
     * todo
     */
    async toggleOnHover(event) {
        if (this.hover) {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            this.collapsed = !this.collapsed;
        }
    }
    render() {
        const { color, placement, position, collapsed, loading } = this;
        let skeleton;
        if (loading) {
            skeleton = (h("div", { key: 'c1e0c6e05cf8ac2ce1d8c9f13b76fb22d70a01a5', class: "tp-tooltip__content-skeleton" }, h("ion-skeleton-text", { key: '22e33e5b737156aea09e530fa6376d2f3543954a', class: "tp-tooltip__skeleton", animated: true })));
        }
        return (h(Host, { key: '6b49dd8de0041a3ccde0d81a5c41edadb5c71b09', onMouseenter: (event) => {
                this.toggleOnHover(event);
            }, onMouseleave: (event) => {
                this.toggleOnHover(event);
            }, class: createColorClasses(color, {
                'tp-tooltip': true,
                [`tp-tooltip--${placement}`]: placement !== undefined,
                [`tp-tooltip--${position}`]: position !== undefined,
                'tp-tooltip--collapsed': collapsed,
                'tp-tooltip--loading': loading,
            }) }, h("div", { key: '7f4d510b597ae03c83ca6ae5ddd6649266bfbddf', class: "tp-tooltip__trigger-container", onClick: (event) => {
                this.toggle(event);
            } }, h("slot", { key: 'ee706e7f57970a3ea6c95575c07e57925573f382', name: "trigger" })), h("div", { key: 'e215e61e6aa5d7b2b8a8303ae99d0490a0a57de0', class: "tp-tooltip__content" }, h("slot", { key: 'c54dc3824d9d8771cf9cf773b83c6689c11ab60d' })), skeleton));
    }
    static get is() { return "tp-tooltip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
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
            "hover": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Habilita o toggle no hover."
                },
                "attribute": "hover",
                "reflect": false
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'bottom' | 'left' | 'right'",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define posicionamento em rela\u00E7\u00E3o ao componente parent."
                },
                "attribute": "placement",
                "reflect": true
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'center' | 'end'",
                    "resolved": "\"center\" | \"end\" | \"start\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define posicionamento horizontal do componente."
                },
                "attribute": "position",
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
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "(event?: any) => Promise<void>",
                    "parameters": [{
                            "name": "event",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "todo",
                    "tags": []
                }
            },
            "toggleOnHover": {
                "complexType": {
                    "signature": "(event?: any) => Promise<void>",
                    "parameters": [{
                            "name": "event",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "todo",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=tooltip.js.map
