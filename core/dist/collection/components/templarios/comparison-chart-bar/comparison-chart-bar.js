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
        this.loading = undefined;
    }
    render() {
        const { color, containerHeight, barValue, hasMarker, markerValue, noLabel, disabled, loading, } = this;
        let content;
        if (loading) {
            content = (h("div", null, h("div", { class: "tp-comparison-chart-bar__container" }, h("ion-skeleton-text", { class: "tp-comparison-chart-bar__skeleton", animated: true }), hasMarker && (h("ion-skeleton-text", { class: "tp-comparison-chart-bar__marker-skeleton", animated: true }))), !noLabel && (h("ion-skeleton-text", { class: "tp-comparison-chart-bar__label-skeleton", animated: true }))));
        }
        else {
            content = (h("div", null, h("div", { class: "tp-comparison-chart-bar__container" }, h("div", { class: "tp-comparison-chart-bar__bar" }), hasMarker && h("div", { class: "tp-comparison-chart-bar__marker" })), !noLabel && (h("div", { class: "tp-comparison-chart-bar__label" }, h("slot", null)))));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-comparison-chart-bar': true,
                'tp-comparison-chart-bar--disabled': disabled,
                'tp-comparison-chart-bar--has-marker': hasMarker,
                'tp-comparison-chart-bar--loading': loading,
            }), style: {
                '--tp-container-height': `${containerHeight}px`,
                '--tp-bar-value': `${barValue}%`,
                '--tp-marker-value': `${markerValue}%`,
            } }, content));
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
                "optional": true,
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
//# sourceMappingURL=comparison-chart-bar.js.map
