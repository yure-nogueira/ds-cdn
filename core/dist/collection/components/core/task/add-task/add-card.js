import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../../utils/functions/color.function";
export class TpAddCard {
    constructor() {
        this.color = undefined;
        this.titulo = undefined;
        this.iconName = undefined;
    }
    render() {
        const { titulo, iconName, color } = this;
        return (h(Host, { key: '1c62ff96ac7565902a267a56a200396d336120a7', class: createColorClasses(color, {
                'tp-add-card': true,
            }) }, h("ion-item", { key: '911883614c8b3cdf840e4bbf3186c7eb418a88ae', class: "tp-add-card__container", "tp-spacingx": "s16", "tp-spacingy": "s16" }, h("ion-icon", { key: 'd4d284c4e7a1c4447d9875bfbf4d22895def9263', slot: "start", class: "tp-add-card__icon", src: iconName }), h("ion-text", { key: 'cda45fb53fc81889d95a865c6b9adaa4ac3d4b2b', class: "tp-add-card__text", "tp-type": "p16xb" }, h("span", { key: '5407b3108f844b6bbfdb7903f1a6607f8026d1bc' }, titulo)))));
    }
    static get is() { return "tp-add-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["add-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["add-card.css"]
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
                            "path": "../../../../utils/types/color.type",
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
            "titulo": {
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
                    "text": "todo"
                },
                "attribute": "titulo",
                "reflect": true
            },
            "iconName": {
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
                    "text": "todo"
                },
                "attribute": "icon-name",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=add-card.js.map
