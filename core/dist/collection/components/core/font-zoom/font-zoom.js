import { getAssetPath, h, Host, } from "@stencil/core";
import { TpFontZoomSize } from "./utils/font-zoom.enum";
export class TpFontZoom {
    constructor() {
        this.fontUpIcon = getAssetPath('./assets/tp-type-minus.svg');
        this.fontDownIcon = getAssetPath('./assets/tp-type-plus.svg');
        this.min = 1;
        this.max = 5;
        this.step = 1;
        this.fontSizeToValue = (fontSize) => {
            switch (fontSize) {
                case TpFontZoomSize.XXXS:
                    return 1;
                case TpFontZoomSize.XXS:
                    return 2;
                case TpFontZoomSize.XS:
                    return 3;
                case TpFontZoomSize.SM:
                    return 4;
                case TpFontZoomSize.MD:
                    return 5;
            }
        };
        this.onRangeChange = (rangeValue) => {
            if (this.emitter) {
                switch (rangeValue) {
                    case 1:
                        this.value = TpFontZoomSize.XXXS;
                        break;
                    case 2:
                        this.value = TpFontZoomSize.XXS;
                        break;
                    case 3:
                        this.value = TpFontZoomSize.XS;
                        break;
                    case 4:
                        this.value = TpFontZoomSize.SM;
                        break;
                    case 5:
                        this.value = TpFontZoomSize.MD;
                        break;
                    default:
                        this.value = TpFontZoomSize.XS;
                }
                this.emitter.emit(this.value);
            }
        };
        this.emitter = undefined;
        this.value = TpFontZoomSize.XS;
    }
    // fix para conflito com popover API do chrome
    // pode remover depois de migração pro ionic 7
    // @Listen('ionPopoverDidPresent', { target: 'body' })
    // fixPopover() {
    //   const popover = document.querySelector('med-font-zoom');
    //   if (!popover) return;
    //   if (popover?.hasAttribute('popover')) {
    //     popover.removeAttribute('popover');
    //   }
    //   popover.style.opacity = '1';
    // }
    render() {
        const { min, max, step, fontUpIcon, fontDownIcon, fontSizeToValue, onRangeChange, } = this;
        return (h(Host, { key: 'c0902223dc70f5c30a2be957efaf5b9da1b3e854', "from-stencil": true }, h("ion-range", { key: 'a95438600d3ac8e5af352a6a21d41a3f847739a9', onIonChange: (ev) => onRangeChange(ev.detail.value), min: min, max: max, step: step, value: fontSizeToValue(this.value) }, h("ion-icon", { key: 'c48ce19dcc90978a245618ffc301f68068595dda', slot: "start", src: fontUpIcon }), h("ion-icon", { key: '7431c17fc89a3fd307ea35a815d4aa2bbfc4bf96', slot: "end", src: fontDownIcon }))));
    }
    static get is() { return "tp-font-zoom"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["font-zoom.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["font-zoom.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "emitter": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ emit: (value: TpFontZoomSize) => void }",
                    "resolved": "{ emit: (value: TpFontZoomSize) => void; }",
                    "references": {
                        "TpFontZoomSize": {
                            "location": "import",
                            "path": "./utils/font-zoom.enum",
                            "id": "src/components/core/font-zoom/utils/font-zoom.enum.ts::TpFontZoomSize"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo"
                }
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TpFontZoomSize",
                    "resolved": "TpFontZoomSize.MD | TpFontZoomSize.SM | TpFontZoomSize.XS | TpFontZoomSize.XXS | TpFontZoomSize.XXXS",
                    "references": {
                        "TpFontZoomSize": {
                            "location": "import",
                            "path": "./utils/font-zoom.enum",
                            "id": "src/components/core/font-zoom/utils/font-zoom.enum.ts::TpFontZoomSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "value",
                "reflect": false,
                "defaultValue": "TpFontZoomSize.XS"
            }
        };
    }
}
//# sourceMappingURL=font-zoom.js.map
