import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpBase {
    constructor() {
        this.color = undefined;
        this.radius = undefined;
        this.gap = undefined;
        this.spacingV = undefined;
        this.spacingH = undefined;
    }
    render() {
        const { color, radius, gap, spacingV, spacingH } = this;
        return (h(Host, { key: 'aa9b6c972cf8b386905a6532015b9d5a33f50594', class: createColorClasses(color, {
                'tp-base': true,
                [`tp-base--radius-${radius}`]: radius !== undefined,
                [`tp-base--gap-${gap}`]: gap !== undefined,
                [`tp-base--spacing-v-${spacingV}`]: spacingV !== undefined,
                [`tp-base--spacing-h-${spacingH}`]: spacingH !== undefined,
            }) }, h("slot", { key: '05a187d8c6546fbff3af9be24906a730593b4f95', name: "start" }), h("slot", { key: 'bd30bf6cb980936beaa11d62a400f89fd0e4227d', name: "middle" }), h("slot", { key: '92b041ddab7e82f651a5f809daf7202f07d476d7', name: "end" }), h("slot", { key: 'fc61ebe2c0619ec6d284be367bc1cdb799836e11' })));
    }
    static get is() { return "tp-base"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["base.css"]
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
            "radius": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'s00' | 's02' | 's04' | 's08' | string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "radius",
                "reflect": true
            },
            "gap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'s00' | 's02' | 's04' | 's08' | string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "gap",
                "reflect": true
            },
            "spacingV": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 's00'\r\n    | 's02'\r\n    | 's04'\r\n    | 's08'\r\n    | 's12'\r\n    | 's16'\r\n    | 's24'\r\n    | string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "spacing-v",
                "reflect": true
            },
            "spacingH": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 's00'\r\n    | 's02'\r\n    | 's04'\r\n    | 's08'\r\n    | 's12'\r\n    | 's16'\r\n    | 's24'\r\n    | string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "spacing-h",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=base.js.map
