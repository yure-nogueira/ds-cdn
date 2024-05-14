import { Host, getAssetPath, h } from "@stencil/core";
import { createColorClasses } from "../../../../utils/functions/color.function";
export class TpExample {
    constructor() {
        this.color = undefined;
        this.icon = undefined;
        this.defaultIcon = getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { color, icon, defaultIcon } = this;
        return (h(Host, { tabindex: "0", class: createColorClasses(color, {
                'tp-example': true,
            }) }, h("div", { class: "tp-example__container" }, h("span", null, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", null, "ion button"), h("ion-icon", { class: "tp-example__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" })), h("ion-radio-group", { class: "story__ion-radio-group" }, h("ion-radio", { value: "1" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { value: "2" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { value: "3" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")))));
    }
    static get is() { return "tp-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["example.css"]
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
                            "path": "../../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "color",
                "reflect": true
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "defaultIcon": {}
        };
    }
}
//# sourceMappingURL=example.js.map
