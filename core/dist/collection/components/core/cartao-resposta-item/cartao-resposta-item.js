import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpCartaoRespostaItem {
    constructor() {
        this.color = undefined;
        this.canceled = false;
        this.printed = false;
        this.active = false;
        this.incorrect = false;
        this.correct = false;
        this.discursive = false;
    }
    render() {
        const { color, canceled, printed, active, incorrect, correct, discursive } = this;
        return (h(Host, { key: '38741616d1e7be6401c43d04a71106802e0d380e', class: createColorClasses(color, {
                'tp-cartao-resposta-item': true,
                'tp-cartao-resposta-item--canceled': canceled,
                'tp-cartao-resposta-item--printed': printed,
                'tp-cartao-resposta-item--active': active,
                'tp-cartao-resposta-item--incorrect': incorrect,
                'tp-cartao-resposta-item--correct': correct,
                'tp-cartao-resposta-item--discursive': discursive,
            }) }, h("div", { key: '0388866318200fbf12489a63c74ef247df5ab6b9', class: "tp-cartao-resposta-item__container" }, h("button", { key: '00341a88afc444b1ddc93fffbc9856b1ecc266d2', class: "tp-cartao-resposta-item__button" }, h("slot", { key: '27a8fabf86abebcc72e9372dbe2cf76bb2894cd0' })))));
    }
    static get is() { return "tp-cartao-resposta-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["cartao-resposta-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["cartao-resposta-item.css"]
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "canceled": {
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
                    "text": "Define a estiliza\u00E7\u00E3o de cor do componente (line-through)."
                },
                "attribute": "canceled",
                "reflect": true,
                "defaultValue": "false"
            },
            "printed": {
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
                    "text": "Define a estiliza\u00E7\u00E3o de cor do componente (background)."
                },
                "attribute": "printed",
                "reflect": true,
                "defaultValue": "false"
            },
            "active": {
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
                    "text": "Define a estiliza\u00E7\u00E3o de cor do componente (background com gradient)."
                },
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "incorrect": {
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
                    "text": "Define a estiliza\u00E7\u00E3o de cor do componente (color warning)."
                },
                "attribute": "incorrect",
                "reflect": true,
                "defaultValue": "false"
            },
            "correct": {
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
                    "text": "Define a estiliza\u00E7\u00E3o de cor do componente (color success)."
                },
                "attribute": "correct",
                "reflect": true,
                "defaultValue": "false"
            },
            "discursive": {
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
                    "text": "Define a estiliza\u00E7\u00E3o de cor do componente (color brand)."
                },
                "attribute": "discursive",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=cartao-resposta-item.js.map
