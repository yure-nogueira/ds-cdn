import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpChartRadial {
    constructor() {
        this.color = undefined;
        this.size = undefined;
        this.items = [];
    }
    updateTrackColors() {
        const progresses = this.host.shadowRoot.querySelectorAll('.tp-chart-radial__progress');
        progresses.forEach((progress) => {
            const itemIndex = Number(progress.dataset['index']);
            const item = this.items[itemIndex];
            progress.style.stroke = `var(--tp-color-${item.color})`;
        });
    }
    componentDidLoad() {
        this.updateTrackColors();
    }
    render() {
        const { color, size, items } = this;
        const progressesData = {
            total: 0,
            singles: [],
        };
        items.forEach((item) => {
            progressesData.total += item.quantity;
            progressesData.singles.push(progressesData.total);
        });
        const reversedItems = items.slice(0).reverse();
        return (h(Host, { class: createColorClasses(color, {
                'tp-chart-radial': true,
                [`tp-chart-radial--${size}`]: Boolean(size),
            }) }, h("svg", { class: "tp-chart-radial__container", viewBox: "0 0 36 36" }, h("circle", { class: "tp-chart-radial__track", cx: "18", cy: "18", r: "16" }), reversedItems.map((item, index) => {
            const originalIndex = items.length - index - 1;
            const progressPercentage = (progressesData.singles[originalIndex] / progressesData.total) *
                100;
            if (!item.ignore && item.quantity) {
                return (h("circle", { cx: "18", cy: "18", r: "16", "data-index": originalIndex, class: "tp-chart-radial__progress", style: {
                        '--tp-progress-percentage': `${progressPercentage}`,
                    } }));
            }
        })), h("div", { class: "tp-chart-radial__text-container" }, h("slot", { name: "title" }), h("slot", { name: "subtitle" }))));
    }
    static get is() { return "tp-chart-radial"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-radial.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-radial.css"]
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
                    "original": "TpChartRadialSize",
                    "resolved": "TpChartRadialSize.LG | TpChartRadialSize.MD | TpChartRadialSize.SM | TpChartRadialSize.XS",
                    "references": {
                        "TpChartRadialSize": {
                            "location": "import",
                            "path": "./utils/chart-radial.enum",
                            "id": "src/components/templarios/chart-radial/utils/chart-radial.enum.ts::TpChartRadialSize"
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
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TpChartRadialItem[]",
                    "resolved": "TpChartRadialItem[]",
                    "references": {
                        "TpChartRadialItem": {
                            "location": "import",
                            "path": "./utils/chart-radial.type",
                            "id": "src/components/templarios/chart-radial/utils/chart-radial.type.ts::TpChartRadialItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o valor representado pelo componente."
                },
                "defaultValue": "[]"
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "updateTrackColors"
            }];
    }
}
//# sourceMappingURL=chart-radial.js.map
