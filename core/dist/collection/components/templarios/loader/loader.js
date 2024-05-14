import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TpLoaderName } from "./utils/loader.enum";
export class TpLoader {
    constructor() {
        this.color = undefined;
        this.fixed = false;
        this.tpName = undefined;
    }
    render() {
        const { color, fixed, tpName } = this;
        let content;
        if (tpName === TpLoaderName.SECONDARY) {
            content = (h("div", null, h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null)));
        }
        else {
            content = (h("div", { class: "loader-container" }, h("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { "tp-loader-circle": true, cx: "50", cy: "50", r: "47" }), h("polyline", { "tp-loader-polyline": true, points: "85,37 63,37 63,15 " }), h("polyline", { "tp-loader-polyline": true, points: "63,86 63,64 85,64 " }), h("polyline", { "tp-loader-polyline": true, points: "14,64 36,64 36,86 " }), h("polyline", { "tp-loader-polyline": true, points: "36,15 36,37 14,37 " }), h("line", { "tp-loader-line": true, x1: "45", y1: "40", x2: "45", y2: "15" }), h("line", { "tp-loader-line": true, x1: "54", y1: "40", x2: "54", y2: "15" }), h("line", { "tp-loader-line": true, x1: "60", y1: "46", x2: "85", y2: "46" }), h("line", { "tp-loader-line": true, x1: "60", y1: "55", x2: "85", y2: "55" }), h("line", { "tp-loader-line": true, x1: "54", y1: "61", x2: "54", y2: "86" }), h("line", { "tp-loader-line": true, x1: "45", y1: "61", x2: "45", y2: "86" }), h("line", { "tp-loader-line": true, x1: "39", y1: "55", x2: "14", y2: "55" }), h("line", { "tp-loader-line": true, x1: "39", y1: "46", x2: "14", y2: "46" }), h("rect", { "tp-loader-rect": true, x: "42", y: "43", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "42", y: "52", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "51", y: "43", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "51", y: "52", width: "6", height: "6" }))));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-loader': true,
                'tp-loader--fixed': tpName !== TpLoaderName.SECONDARY && fixed,
                'tp-loader--secondary': tpName === TpLoaderName.SECONDARY,
            }) }, content));
    }
    static get is() { return "tp-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["loader.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["loader.css"]
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
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "fixed": {
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
                    "text": "Define a posi\u00E7\u00E3o do componente."
                },
                "attribute": "fixed",
                "reflect": true,
                "defaultValue": "false"
            },
            "tpName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpLoaderType['tp-name']",
                    "resolved": "\"secondary\"",
                    "references": {
                        "TpLoaderType": {
                            "location": "import",
                            "path": "./utils/loader.type",
                            "id": "src/components/templarios/loader/utils/loader.type.ts::TpLoaderType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o do componente."
                },
                "attribute": "tp-name",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=loader.js.map
