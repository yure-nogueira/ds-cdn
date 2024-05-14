import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpComparisonChartBar {
    constructor() {
        this.color = undefined;
        this.containerHeight = 200;
        this.barValue = 0;
        this.hasMarker = false;
        this.markerValue = 0;
        this.disabled = false;
        this.noLabel = false;
    }
    render() {
        const { color, containerHeight, barValue, hasMarker, markerValue, noLabel, disabled, } = this;
        return (h(Host, { key: '376d12e00e570804e5210fec96bd55a70c8d0054', class: createColorClasses(color, {
                'tp-comparison-chart-bar': true,
                'tp-comparison-chart-bar--disabled': disabled,
                'tp-comparison-chart-bar--has-marker': hasMarker,
            }), style: {
                '--tp-container-height': `${containerHeight}px`,
                '--tp-bar-value': `${barValue}%`,
                '--tp-marker-value': `${markerValue}%`,
            } }, h("div", { key: '06e34b96b5473919113c3e18d75eaa76d765f190', class: "tp-comparison-chart-bar__container" }, h("div", { key: '25c4e408221b763806a94f535c0ef29d97f89fb9', class: "tp-comparison-chart-bar__bar" }), hasMarker && h("div", { key: 'd0ccc3110365b706a3adcc4f66e28c7d274e8ca5', class: "tp-comparison-chart-bar__marker" })), !noLabel && (h("div", { key: '403e63af016d8ee30ba249d2e2b786ef72add848', class: "tp-comparison-chart-bar__label" }, h("slot", { key: 'fff655735321dab416a1ce917831f93307e779ef' })))));
    }
    static get is() { return "tp-comparison-chart-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["comparison-chart-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["comparison-chart-bar.css"]
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
            "containerHeight": {
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
                "attribute": "container-height",
                "reflect": true,
                "defaultValue": "200"
            },
            "barValue": {
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
                "attribute": "bar-value",
                "reflect": true,
                "defaultValue": "0"
            },
            "hasMarker": {
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
                    "text": "Se 'true' o componente vai renderizar o marker."
                },
                "attribute": "has-marker",
                "reflect": true,
                "defaultValue": "false"
            },
            "markerValue": {
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
                    "text": "Define a posi\u00E7\u00E3o do marker na coluna."
                },
                "attribute": "marker-value",
                "reflect": true,
                "defaultValue": "0"
            },
            "disabled": {
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
                    "text": "Define a estiliza\u00E7\u00E3o do estado disabled do componente."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
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
//# sourceMappingURL=comparison-chart-bar.js.map
