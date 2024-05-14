import { getAssetPath, h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpVideoThumbnail {
    constructor() {
        this.iconPlay = getAssetPath('./assets/tp-play-circle.svg');
        this.color = undefined;
        this.url = undefined;
        this.size = undefined;
        this.value = 0;
    }
    render() {
        const { color, url, value, iconPlay, size } = this;
        return (h(Host, { key: 'c843fe2e24e1272886eb36be6e19afdf3147d402', class: createColorClasses(color, {
                'tp-video-thumbnail': true,
                [`tp-video-thumbnail--${size}`]: Boolean(size),
            }) }, h("img", { key: 'edf4a2d55343697d05ba43dbb677dd780dad9c1e', class: "tp-video-thumbnail__img", src: url }), h("div", { key: 'fd34d08561a0f8a7871a714827b4ea96aad836b7', class: "tp-video-thumbnail__container-icon" }, h("ion-icon", { key: '8428da31f283680d95e6afedbeaefe214e20ffa1', class: "tp-video-thumbnail__icon", src: iconPlay })), h("ion-progress-bar", { key: 'ae9fd08748b93abb1def35f8f45f05047f79eb03', color: color, class: "tp-video-thumbnail__progress", value: value })));
    }
    static get is() { return "tp-video-thumbnail"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["video-thumbnail.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["video-thumbnail.css"]
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
                    "text": "todo"
                },
                "attribute": "color",
                "reflect": true
            },
            "url": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "url",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpVideoThumbnailSize",
                    "resolved": "TpVideoThumbnailSize.LG | TpVideoThumbnailSize.MD | TpVideoThumbnailSize.SM | TpVideoThumbnailSize.XS",
                    "references": {
                        "TpVideoThumbnailSize": {
                            "location": "import",
                            "path": "./utils/video-thumbnail.enum",
                            "id": "src/components/core/video-thumbnail/utils/video-thumbnail.enum.ts::TpVideoThumbnailSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
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
                    "text": "todo"
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
            }
        };
    }
}
//# sourceMappingURL=video-thumbnail.js.map
