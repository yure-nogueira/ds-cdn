import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpAlert {
    constructor() {
        this.color = undefined;
        this.loading = undefined;
    }
    render() {
        const { color, loading } = this;
        let content;
        if (loading) {
            content = (h("ion-skeleton-text", { class: "tp-alert__skeleton", animated: true }));
        }
        else {
            content = (h("div", { class: "tp-alert__container" }, h("slot", { name: "icon" }), h("slot", { name: "text" })));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-alert': true,
                'tp-alert--loading': loading,
            }) }, content));
    }
    static get is() { return "tp-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert.css"]
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
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
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
}
//# sourceMappingURL=alert.js.map
