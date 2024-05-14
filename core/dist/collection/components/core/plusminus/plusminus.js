import { getAssetPath, h, Host, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TpPlusMinusStatus } from "./utils/plusminus.enum";
export class TpPlusMinus {
    constructor() {
        this.iconMinus = getAssetPath('./assets/tp-minus-circle.svg');
        this.iconPlus = getAssetPath('./assets/tp-plus-circle.svg');
        this.onClick = (status) => {
            if (this.min === undefined ||
                this.max === undefined ||
                this.value === undefined ||
                !this.automaticDisabled) {
                return this.tpChange.emit(status);
            }
            if (status === TpPlusMinusStatus.MINUS && this.value === this.min)
                return;
            if (status === TpPlusMinusStatus.PLUS && this.value === this.max)
                return;
            const increment = status === TpPlusMinusStatus.MINUS ? -1 : 1;
            this.tpChangeAlt.emit(this.value + increment);
        };
        this.color = undefined;
        this.size = undefined;
        this.disabled = undefined;
        this.automaticDisabled = false;
        this.useSlot = true;
        this.value = undefined;
        this.min = undefined;
        this.max = undefined;
    }
    disabledHandler(newValue, _) {
        if (this.min === undefined ||
            this.max === undefined ||
            this.value === undefined ||
            !this.automaticDisabled)
            return;
        if (newValue === this.min && newValue === this.max) {
            return (this.disabled = 'both');
        }
        if (newValue === this.min) {
            return (this.disabled = 'minus');
        }
        if (newValue === this.max) {
            return (this.disabled = 'plus');
        }
        this.disabled = undefined;
    }
    componentDidLoad() {
        var _a;
        this.disabledHandler((_a = this.value) !== null && _a !== void 0 ? _a : 0, 0);
    }
    render() {
        const { iconMinus, iconPlus, size, color, disabled, useSlot, value } = this;
        return (h(Host, { key: '5511c82c3171f6155b5024c1d1debec225cad976', "from-stencil": true, class: createColorClasses(color, {
                'tp-plusminus': true,
                [`tp-plusminus--disabled-${disabled}`]: disabled !== undefined,
                [`tp-plusminus--${size}`]: size !== undefined,
            }) }, h("ion-icon", { key: '8d731659cbcc26f92ed5286abb6aaf4153e9c183', class: "tp-plusminus__icon tp-plusminus__icon--minus", src: iconMinus, onClick: () => this.onClick(TpPlusMinusStatus.MINUS) }), useSlot ? h("slot", null) : value !== null && value !== void 0 ? value : 0, h("ion-icon", { key: 'e8402cb37eef56824bbe8b34618d02447944b376', class: "tp-plusminus__icon tp-plusminus__icon--plus", src: iconPlus, onClick: () => this.onClick(TpPlusMinusStatus.PLUS) })));
    }
    static get is() { return "tp-plusminus"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["plusminus.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["plusminus.css"]
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
                    "text": "todo"
                },
                "attribute": "color",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'xl'",
                    "resolved": "\"xl\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "size",
                "reflect": true
            },
            "disabled": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'minus' | 'plus' | 'both'",
                    "resolved": "\"both\" | \"minus\" | \"plus\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "disabled",
                "reflect": true
            },
            "automaticDisabled": {
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
                    "text": "true se deve desabilitar os controles automaticamente"
                },
                "attribute": "automatic-disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "useSlot": {
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
                    "text": "Dever\u00E1 ser true se o valor atual vai ser passado por slot, false se vai ser passado por prop"
                },
                "attribute": "use-slot",
                "reflect": true,
                "defaultValue": "true"
            },
            "value": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "O valor atual (apenas se useSlot \u00E9 false)"
                },
                "attribute": "value",
                "reflect": true
            },
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "O valor m\u00EDnimo"
                },
                "attribute": "min",
                "reflect": true
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "O valor m\u00E1ximo"
                },
                "attribute": "max",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "tpChange",
                "name": "tpChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "complexType": {
                    "original": "TpPlusMinusStatus",
                    "resolved": "TpPlusMinusStatus.MINUS | TpPlusMinusStatus.PLUS",
                    "references": {
                        "TpPlusMinusStatus": {
                            "location": "import",
                            "path": "./utils/plusminus.enum",
                            "id": "src/components/core/plusminus/utils/plusminus.enum.ts::TpPlusMinusStatus"
                        }
                    }
                }
            }, {
                "method": "tpChangeAlt",
                "name": "tpChangeAlt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "disabledHandler"
            }];
    }
}
//# sourceMappingURL=plusminus.js.map
