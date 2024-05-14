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
        return (h(Host, { key: 'a2367bbbc3cc559fd3333b581d5221a3203d39b3', class: createColorClasses(color, {
                'tp-chart-radial': true,
                [`tp-chart-radial--${size}`]: Boolean(size),
            }) }, h("svg", { key: '76a96a8559525cd314d5dd4539b763b26d085a82', class: "tp-chart-radial__container", viewBox: "0 0 36 36" }, h("circle", { key: '984deea52c673b0de9a1ed70f6ffc2b78f39a623', class: "tp-chart-radial__track", cx: "18", cy: "18", r: "16" }), reversedItems.map((item, index) => {
            const originalIndex = items.length - index - 1;
            const progressPercentage = (progressesData.singles[originalIndex] / progressesData.total) *
                100;
            if (!item.ignore && item.quantity) {
                return (h("circle", { cx: "18", cy: "18", r: "16", "data-index": originalIndex, class: "tp-chart-radial__progress", style: {
                        '--tp-progress-percentage': `${progressPercentage}`,
                    } }));
            }
        })), h("div", { key: 'd3527043eb6ec88c04084e90a0620b9294eef6fc', class: "tp-chart-radial__text-container" }, h("slot", { key: '33a94e08c1be307141bd25457bd4113ffc7c84f7', name: "title" }), h("slot", { key: 'cd7beea2b51ea14969880f5646accd67793dd13f', name: "subtitle" }))));
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
                            "id": "src/components/core/chart-radial/utils/chart-radial.enum.ts::TpChartRadialSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o tamanho do componente."
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
                            "id": "src/components/core/chart-radial/utils/chart-radial.type.ts::TpChartRadialItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define os valores representados pelo componente."
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
