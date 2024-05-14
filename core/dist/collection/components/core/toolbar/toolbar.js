import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpToolbar {
    constructor() {
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (h(Host, { key: 'd7bfddd4fb0fb89b727a652aa8ae3f895c216037', "from-stencil": true, class: createColorClasses(color, {
                'tp-toolbar': true,
            }) }, h("div", { key: '81a132d215d4eca9029fa6f494f88d9194ce891d', class: "tp-toolbar__container" }, h("slot", { key: 'da256225059a01a4cb2d23f7f8bbf5102a431a97', name: "start" }), h("div", { key: 'e8dbbc017e502efbd3e81bf94f3581856cb4c32f', class: "tp-toolbar__center" }, h("slot", { key: 'a28a9c58e641a4fcd3b6dffbe9fc2b4fcceff996' })), h("slot", { key: '0be1755de9f9a055dfaec686ad362c7aa6e24c57', name: "end" }))));
    }
    static get is() { return "tp-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["toolbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toolbar.css"]
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
            }
        };
    }
}
//# sourceMappingURL=toolbar.js.map
