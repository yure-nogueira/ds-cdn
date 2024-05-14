import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpTiles {
    constructor() {
        this.color = undefined;
        this.titulo = undefined;
        this.label = undefined;
        this.solid = false;
        this.selected = false;
    }
    render() {
        const { color, titulo, label, selected, solid } = this;
        return (h(Host, { key: 'be8fd62b7396b6ba717770a659597ef9cbac882d', class: createColorClasses(color, {
                'tp-tiles': true,
                'tp-tiles--solid': solid,
                'tp-tiles--selected': selected,
            }) }, h("div", { key: '4bd7b27f31eee8c42f681ac4920f1787c7c1498c', class: "tp-tiles__border" }), h("div", { key: '22af9cbb49cc5d917a10c73426d3718259783d78', class: "tp-tiles__content" }, h("ion-text", { key: '48021d962b71fdf6da532c3778320ebea931c83c', class: "tp-tiles__title", innerHTML: titulo }), h("ion-text", { key: '3a306c426766aea259ea10ba1ed7619656a7c30f', class: "tp-tiles__label", innerHTML: label }), h("slot", { key: '491e904848c63480f2287a4491c64a9df636d444' }))));
    }
    static get is() { return "tp-tiles"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tiles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tiles.css"]
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
                "reflect": false
            },
            "label": {
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
                "attribute": "label",
                "reflect": false
            },
            "solid": {
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
                    "text": "todo"
                },
                "attribute": "solid",
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
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
                    "text": "todo"
                },
                "attribute": "selected",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=tiles.js.map
