'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const TP_DOWNLOAD_BUTTON = {
    icons: {
        arrowDown: index.getAssetPath('./assets/tp-arrow-down-filled.svg'),
    },
};

const downloadButtonCss = "@charset \"UTF-8\";:host{--tp-main-color:var(--tp-color-neutral-95);--tp-secondary-color:var(--tp-color-neutral-95);--tp-track-color:var(--tp-color-neutral-2)}:host{position:relative;cursor:pointer;display:inline-block}.tp-download-button__circles-container{position:relative;display:flex;justify-content:center;align-items:center;width:16px;height:16px;border-radius:50%;background:transparent;transition:transform 0.7s, background-color 0.7s}.tp-download-button__circle{stroke-dashoffset:0;stroke:var(--tp-track-color);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;transition:stroke-dasharray 1s ease-in-out;transform:rotate(-90deg);transform-origin:18px 18px}.tp-download-button__circle--value{stroke:var(--tp-main-color);stroke-dasharray:100 100}.tp-download-button__arrow-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:12px;height:12px;color:var(--tp-color-neutral-10);transition:color 300ms ease-in-out}.tp-download-button__square-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);transform-origin:50% 50%;width:5px;height:5px;background:transparent;transition:background 300ms ease-in-out}:host(.tp-download-button--downloading){--tp-main-color:var(--tp-color-brand-4);--tp-secondary-color:var(--tp-color-neutral-3)}:host(.tp-download-button--downloading) .tp-download-button__arrow-icon{color:transparent}:host(.tp-download-button--downloading) .tp-download-button__square-icon{background:var(--tp-main-color)}:host(.tp-download-button--downloading) .tp-download-button__circle--value{stroke-dasharray:var(--value) 100}:host(.tp-download-button--downloaded){--tp-main-color:var(--tp-color-brand-4);--tp-secondary-color:var(--tp-color-neutral-1)}:host(.tp-download-button--downloaded) .tp-download-button__circles-container{background:var(--tp-main-color)}:host(.tp-download-button--downloaded) .tp-download-button__arrow-icon{color:var(--tp-secondary-color)}:host(.tp-download-button--lg) .tp-download-button__circles-container{position:relative;width:24px;height:24px}:host(.tp-download-button--lg) .tp-download-button__arrow-icon{width:16px;height:16px}:host(.tp-download-button--lg) .tp-download-button__square-icon{width:8px;height:8px}:host(.tp-color.tp-download-button--downloading){--tp-main-color:var(--tp-color-base);--tp-secondary-color:var(--tp-color-contrast)}:host(.tp-color.tp-download-button--downloaded){--tp-main-color:var(--tp-color-base);--tp-secondary-color:var(--tp-color-contrast)}";
const TpDownloadButtonStyle0 = downloadButtonCss;

const TpDownloadButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.value = 0;
        this.downloading = false;
        this.downloaded = false;
        this.size = undefined;
    }
    render() {
        const { color, value, downloading, downloaded, size } = this;
        return (index.h(index.Host, { key: '9dbd336cfb9951c7b8a430073557d31873d78a1a', class: color_function.createColorClasses(color, {
                'tp-download-button': true,
                'tp-download-button--downloading': downloading && !downloaded,
                'tp-download-button--downloaded': downloaded,
                [`tp-download-button--${size}`]: Boolean(size),
            }) }, index.h("div", { key: 'acfc963320472f9ad51c2b112cbc500bfdaa55fe', class: "tp-download-button__circles-container" }, index.h("svg", { key: '8c0eabd124552d24a7309fc036e79a34685a7fee', viewBox: "0 0 36 36" }, index.h("circle", { key: '0cce2b33c6c4ee05d3fad6628fbf456b73286c92', cx: "18", cy: "18", r: "16", class: "tp-download-button__circle" }), index.h("circle", { key: '8b3fe8e13f446bbbfd92a6ce92f0285bce760904', cx: "18", cy: "18", r: "16", class: "tp-download-button__circle tp-download-button__circle--value", style: { '--value': `${value}` } }))), index.h("ion-icon", { key: 'c342023384fef6336739f188d19163d6902fb502', class: "tp-download-button__arrow-icon", src: TP_DOWNLOAD_BUTTON.icons.arrowDown }), index.h("div", { key: '7c0e57b83ddeab52254198a9a05c5bb1223daf81', class: "tp-download-button__square-icon" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpDownloadButton.style = TpDownloadButtonStyle0;

exports.tp_download_button = TpDownloadButton;

//# sourceMappingURL=tp-download-button.cjs.entry.js.map