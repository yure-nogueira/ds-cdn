import { Host, h, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpAutocomplete {
    constructor() {
        this.color = undefined;
        this.locked = false;
        this.openOnFocus = false;
        this.open = false;
        this.inputValue = undefined;
    }
    /**
     * Event listeners.
     */
    closeOnOutsideClick(event) {
        const target = event.target;
        if (!this.host.contains(target)) {
            this.open = false;
        }
    }
    handleInput(event) {
        this.inputValue = `${event.target.value}`;
        this.open = Boolean(this.inputValue);
    }
    handleFocus() {
        this.open = this.openOnFocus || Boolean(this.inputValue);
    }
    render() {
        const { color, open, locked } = this;
        return (h(Host, { key: '84c302e586d51f2f2892ec1838da781bea54c7c4', class: createColorClasses(color, {
                'tp-autocomplete': true,
                'tp-autocomplete--dropdown-hide': locked || !open,
                'tp-autocomplete--dropdown-show': !locked && open,
            }) }, h("slot", { key: 'a8351e10484e34bf3f36a73235a26b015922a397' })));
    }
    static get is() { return "tp-autocomplete"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["autocomplete.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["autocomplete.css"]
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
            "locked": {
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
                    "text": "Define se o componente deve ou n\u00E3o bloquear a renderiza\u00E7\u00E3o\r\ndo dropdown."
                },
                "attribute": "locked",
                "reflect": true,
                "defaultValue": "false"
            },
            "openOnFocus": {
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
                    "text": "Define se o componente deve ou n\u00E3o renderizar o dropdown\r\nquando o slot que recebe um input ganha foco."
                },
                "attribute": "open-on-focus",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "inputValue": {}
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "closeOnOutsideClick",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "ionInput",
                "method": "handleInput",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "ionFocus",
                "method": "handleFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=autocomplete.js.map
