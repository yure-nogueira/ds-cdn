import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const videoThumbnailCss = ".sc-tp-video-thumbnail-h{--tp-max-width:856px;--tp-max-height:524px;--tp-padding:16px;--tp-width-icon:48px;--tp-height-icon:48px}.sc-tp-video-thumbnail-h{display:block;max-width:var(--tp-max-width);max-height:var(--tp-max-height);width:100%;height:auto;position:relative;overflow:hidden;border-radius:4px}.tp-video-thumbnail__img.sc-tp-video-thumbnail{width:100%;height:auto}.tp-video-thumbnail__container-icon.sc-tp-video-thumbnail{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);border-radius:50%;display:flex;align-items:center;justify-content:center;padding:var(--tp-padding);background:rgba(var(--tp-color-neutral-1-rgb), 50%)}.tp-video-thumbnail__icon.sc-tp-video-thumbnail{color:var(--tp-color-neutral-10);width:var(--tp-width-icon);height:var(--tp-height-icon)}.tp-video-thumbnail__progress.sc-tp-video-thumbnail{position:absolute;bottom:0;left:0}.tp-video-thumbnail--lg.sc-tp-video-thumbnail-h{--tp-max-width:856px;--tp-max-height:524px;--tp-padding:16px;--tp-width-icon:48px;--tp-height-icon:48px}.tp-video-thumbnail--md.sc-tp-video-thumbnail-h{--tp-max-width:182px;--tp-max-height:108px;--tp-padding:8px;--tp-width-icon:24px;--tp-height-icon:24px}.tp-video-thumbnail--sm.sc-tp-video-thumbnail-h{--tp-max-width:112px;--tp-max-height:68px;--tp-padding:4px;--tp-width-icon:24px;--tp-height-icon:24px}.tp-video-thumbnail--xs.sc-tp-video-thumbnail-h{--tp-max-width:88px;--tp-max-height:60px;--tp-padding:4px;--tp-width-icon:16px;--tp-height-icon:16px}.tp-color.sc-tp-video-thumbnail-h .tp-video-thumbnail__progress.sc-tp-video-thumbnail{--background:rgba(var(--ion-color-base-rgb), 0.4);--progress-background:var(--ion-color-base)}";
const TpVideoThumbnailStyle0 = videoThumbnailCss;

const TpVideoThumbnail$1 = /*@__PURE__*/ proxyCustomElement(class TpVideoThumbnail extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get assetsDirs() { return ["assets"]; }
    static get style() { return TpVideoThumbnailStyle0; }
}, [2, "tp-video-thumbnail", {
        "color": [513],
        "url": [513],
        "size": [513],
        "value": [514]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-video-thumbnail"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-video-thumbnail":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpVideoThumbnail$1);
            }
            break;
    } });
}

const TpVideoThumbnail = TpVideoThumbnail$1;
const defineCustomElement = defineCustomElement$1;

export { TpVideoThumbnail, defineCustomElement };

//# sourceMappingURL=tp-video-thumbnail.js.map