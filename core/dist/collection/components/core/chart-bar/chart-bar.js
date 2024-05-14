import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpChartBar {
    constructor() {
        this.color = undefined;
        this.value = 0;
        this.width = 32;
        this.height = 50;
        this.noLabel = false;
    }
    render() {
        const { color, value, height, width, noLabel } = this;
        const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;
        return (h(Host, { key: '1f6af6697223a62c1b3c3d59f3cad52ae8e3f0ad', class: createColorClasses(color, {
                'tp-chart-bar': true,
                'tp-chart-bar--no-label': noLabel,
            }), style: {
                '--value': `${percentage}`,
                '--height': `${height}`,
                '--width': `${width}`,
            } }, h("div", { key: 'cf6eb7eee3ecc942e579470df2f5e2041c90813f', class: "tp-chart-bar__container" }, !noLabel && (h("div", { key: '1ab315a2f7675e971530927b567d0893b98faed1', class: "tp-chart-bar__label" }, h("slot", { key: 'cee21bf9393643df29e6873e54480b38090a7186' }))), h("div", { key: 'e5c782e5acf26da11fa86c45330e9d6946e14636', class: "tp-chart-bar__progress" }))));
    }
    static get is() { return "tp-chart-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-bar.css"]
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o valor da barra de progresso."
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a largura do componente."
                },
                "attribute": "width",
                "reflect": true,
                "defaultValue": "32"
            },
            "height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a altura do componente."
                },
                "attribute": "height",
                "reflect": true,
                "defaultValue": "50"
            },
            "noLabel": {
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
                    "text": "Define se um slot ser\u00E1 disponibilizado para receber o label do chart."
                },
                "attribute": "no-label",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=chart-bar.js.map
