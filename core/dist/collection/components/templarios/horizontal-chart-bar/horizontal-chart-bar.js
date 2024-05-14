import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpHorizontalChartBar {
    constructor() {
        this.color = undefined;
        this.size = undefined;
        this.value = 0;
        this.maxCount = 100;
        this.noLabel = false;
        this.loading = undefined;
    }
    render() {
        const { color, size, value, maxCount, noLabel, loading } = this;
        const percentage = Math.min(Math.max(0, (value / maxCount) * 100), 100);
        const content = loading ? (h("div", { class: "tp-horizontal-chart-bar__container" }, h("ion-skeleton-text", { class: "tp-horizontal-chart-bar__track tp-horizontal-chart-bar__track--skeleton", animated: true }), !noLabel && (h("ion-skeleton-text", { class: "tp-horizontal-chart-bar__label-container tp-horizontal-chart-bar__label-container--skeleton", animated: true })))) : (h("div", { class: "tp-horizontal-chart-bar__container" }, h("div", { class: "tp-horizontal-chart-bar__track" }, h("div", { class: "tp-horizontal-chart-bar__progress" })), !noLabel && (h("div", { class: "tp-horizontal-chart-bar__label-container" }, h("slot", null)))));
        return (h(Host, { class: createColorClasses(color, {
                'tp-horizontal-chart-bar': true,
                'tp-horizontal-chart-bar--spill': percentage >= 100,
                [`tp-horizontal-chart-bar--${size}`]: Boolean(size),
            }), style: { '--tp-fill-percentage': `${percentage}%` } }, content));
    }
    static get is() { return "tp-horizontal-chart-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["horizontal-chart-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["horizontal-chart-bar.css"]
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
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpHorizontalChartBarSize",
                    "resolved": "TpHorizontalChartBarSize",
                    "references": {
                        "TpHorizontalChartBarSize": {
                            "location": "import",
                            "path": "./utils/horizontal-chart-bar.enum",
                            "id": "src/components/templarios/horizontal-chart-bar/utils/horizontal-chart-bar.enum.ts::TpHorizontalChartBarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
                },
                "attribute": "size",
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
            "maxCount": {
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
                    "text": "Define o valor m\u00E1ximo da barra de progresso."
                },
                "attribute": "max-count",
                "reflect": true,
                "defaultValue": "100"
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
//# sourceMappingURL=horizontal-chart-bar.js.map
