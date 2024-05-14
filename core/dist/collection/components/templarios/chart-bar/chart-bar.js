import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpChartBar {
    constructor() {
        this.color = undefined;
        this.value = 0;
        this.height = 50;
        this.width = 32;
        this.noLabel = false;
        this.loading = undefined;
    }
    render() {
        const { color, value, height, width, noLabel, loading } = this;
        const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;
        let content;
        if (loading) {
            content = (h("div", { class: "tp-chart-bar__container" }, !noLabel && (h("ion-skeleton-text", { class: "tp-chart-bar__label-skeleton", animated: true })), h("ion-skeleton-text", { class: "tp-chart-bar__skeleton", animated: true })));
        }
        else {
            content = (h("div", { class: "tp-chart-bar__container" }, !noLabel && (h("div", { class: "tp-chart-bar__label" }, h("slot", null))), h("div", { class: "tp-chart-bar__progress" })));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-chart-bar': true,
                'tp-chart-bar--no-label': noLabel,
                'tp-chart-bar--loading': loading,
            }), style: {
                '--value': `${percentage}`,
                '--height': `${height}`,
                '--width': `${width}`,
            } }, content));
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
                "optional": true,
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
                    "text": "Define o valor do preenchimento do componente."
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
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
                    "text": "Define se o componente ir\u00E1 apresentar r\u00F3tulo ou n\u00E3o."
                },
                "attribute": "no-label",
                "reflect": true,
                "defaultValue": "false"
            },
            "loading": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o estado de carregamento do componente."
                },
                "attribute": "loading",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=chart-bar.js.map
