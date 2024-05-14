import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TP_DOWNLOAD_BUTTON } from "./utils/download-button.constant";
export class TpDownloadButton {
    constructor() {
        this.color = undefined;
        this.value = 0;
        this.downloading = false;
        this.downloaded = false;
        this.size = undefined;
    }
    render() {
        const { color, value, downloading, downloaded, size } = this;
        return (h(Host, { key: '9dbd336cfb9951c7b8a430073557d31873d78a1a', class: createColorClasses(color, {
                'tp-download-button': true,
                'tp-download-button--downloading': downloading && !downloaded,
                'tp-download-button--downloaded': downloaded,
                [`tp-download-button--${size}`]: Boolean(size),
            }) }, h("div", { key: 'acfc963320472f9ad51c2b112cbc500bfdaa55fe', class: "tp-download-button__circles-container" }, h("svg", { key: '8c0eabd124552d24a7309fc036e79a34685a7fee', viewBox: "0 0 36 36" }, h("circle", { key: '0cce2b33c6c4ee05d3fad6628fbf456b73286c92', cx: "18", cy: "18", r: "16", class: "tp-download-button__circle" }), h("circle", { key: '8b3fe8e13f446bbbfd92a6ce92f0285bce760904', cx: "18", cy: "18", r: "16", class: "tp-download-button__circle tp-download-button__circle--value", style: { '--value': `${value}` } }))), h("ion-icon", { key: 'c342023384fef6336739f188d19163d6902fb502', class: "tp-download-button__arrow-icon", src: TP_DOWNLOAD_BUTTON.icons.arrowDown }), h("div", { key: '7c0e57b83ddeab52254198a9a05c5bb1223daf81', class: "tp-download-button__square-icon" })));
    }
    static get is() { return "tp-download-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["download-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["download-button.css"]
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
                    "text": "Define o progresso do download."
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
            },
            "downloading": {
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
                    "text": "Define se o download est\u00E1 ou n\u00E3o em progresso."
                },
                "attribute": "downloading",
                "reflect": true,
                "defaultValue": "false"
            },
            "downloaded": {
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
                    "text": "Define se o download est\u00E1 finalizado."
                },
                "attribute": "downloaded",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpDownloadButtonSizes",
                    "resolved": "\"lg\"",
                    "references": {
                        "TpDownloadButtonSizes": {
                            "location": "import",
                            "path": "./utils/download-button.type",
                            "id": "src/components/core/download-button/utils/download-button.type.ts::TpDownloadButtonSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
                },
                "attribute": "size",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=download-button.js.map
