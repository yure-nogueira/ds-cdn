import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpLoader {
    constructor() {
        this.color = undefined;
        this.fixed = false;
        this.type = undefined;
        this.size = 'full';
    }
    render() {
        const { color, fixed, type, size } = this;
        return type === 'secondary' ? (h(Host, { "tp-loader-secondary": true, color: color, class: createColorClasses(color, {
                'tp-loader--secondary': true,
            }) }, h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null))) : (h(Host, { "tp-loader": true, "ds-color": color, class: createColorClasses(color, {
                'tp-loader--fixed': fixed,
                'tp-loader--auto': size === 'auto',
            }) }, h("div", { class: "loader-container" }, h("svg", { "tp-loader-svg": true, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { "tp-loader-circle": true, cx: "50", cy: "50", r: "47" }), h("polyline", { "tp-loader-polyline": true, points: "85,37 63,37 63,15 " }), h("polyline", { "tp-loader-polyline": true, points: "63,86 63,64 85,64 " }), h("polyline", { "tp-loader-polyline": true, points: "14,64 36,64 36,86 " }), h("polyline", { "tp-loader-polyline": true, points: "36,15 36,37 14,37 " }), h("line", { "tp-loader-line": true, x1: "45", y1: "40", x2: "45", y2: "15" }), h("line", { "tp-loader-line": true, x1: "54", y1: "40", x2: "54", y2: "15" }), h("line", { "tp-loader-line": true, x1: "60", y1: "46", x2: "85", y2: "46" }), h("line", { "tp-loader-line": true, x1: "60", y1: "55", x2: "85", y2: "55" }), h("line", { "tp-loader-line": true, x1: "54", y1: "61", x2: "54", y2: "86" }), h("line", { "tp-loader-line": true, x1: "45", y1: "61", x2: "45", y2: "86" }), h("line", { "tp-loader-line": true, x1: "39", y1: "55", x2: "14", y2: "55" }), h("line", { "tp-loader-line": true, x1: "39", y1: "46", x2: "14", y2: "46" }), h("rect", { "tp-loader-rect": true, x: "42", y: "43", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "42", y: "52", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "51", y: "43", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "51", y: "52", width: "6", height: "6" })))));
    }
    static get is() { return "tp-loader"; }
    static get encapsulation() { return "scoped"; }
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
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
                    "text": ""
                },
                "attribute": "fixed",
                "reflect": true,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'secondary' | undefined",
                    "resolved": "\"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'full' | 'auto'",
                    "resolved": "\"auto\" | \"full\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'full'"
            }
        };
    }
}
//# sourceMappingURL=loader.js.map
