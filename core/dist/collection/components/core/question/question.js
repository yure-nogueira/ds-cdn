import { getAssetPath, h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpQuestion {
    constructor() {
        this.iconDown = getAssetPath('./assets/tp-chevron-down.svg');
        this.color = undefined;
        this.collapsed = false;
        this.texto = undefined;
    }
    /**
     * todo
     */
    toggle() {
        this.collapsed = !this.collapsed;
    }
    render() {
        const { collapsed, texto, color, iconDown } = this;
        return (h(Host, { key: '6c053327d4448f44fe4af9401b30c04565b462cf', class: createColorClasses(color, {
                'tp-question': true,
                'tp-question--collapsed': collapsed,
            }), onClick: () => {
                this.toggle();
            } }, texto && h("div", { key: '3e3a167917b71fba07be89bb708a580e6a092549', class: "tp-question__text", innerHTML: texto }), h("div", { key: '0fb8c0e1ec8e596f79f56c47d8daa9a51d02144e', class: "tp-question__text" }, h("slot", { key: '9b8ecc16d15dd3274d48ecd3e64b36853785937e' })), h("ion-icon", { key: '81024397ddd64a34843b8f58bea4ac4d86521fa0', class: "tp-question__icon", src: iconDown })));
    }
    static get is() { return "tp-question"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["question.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["question.css"]
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
                    "text": "todo"
                },
                "attribute": "collapsed",
                "reflect": true,
                "defaultValue": "false"
            },
            "texto": {
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
                "attribute": "texto",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=question.js.map
