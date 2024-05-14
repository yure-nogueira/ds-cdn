import { r as registerInstance, h, H as Host } from './index-7946b89c.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

var TpLoaderName;
(function (TpLoaderName) {
    TpLoaderName["SECONDARY"] = "secondary";
})(TpLoaderName || (TpLoaderName = {}));

const loaderCss = ":host(:not(.tp-loader--secondary)){display:flex;flex-direction:column;align-items:center;justify-content:center;width:auto;height:100%;min-height:100%}:host(:not(.tp-loader--secondary)) .loader-container{display:block;width:94px;height:94px}:host(:not(.tp-loader--secondary)) [tp-loader-circle],:host(:not(.tp-loader--secondary)) [tp-loader-polyline],:host(:not(.tp-loader--secondary)) [tp-loader-line]{fill:none;stroke:var(--tp-color-neutral-10);stroke-width:6;stroke-miterlimit:10}:host(:not(.tp-loader--secondary)) [tp-loader-rect]{fill:var(--tp-color-neutral-10)}:host(:not(.tp-loader--secondary)) [tp-loader-circle]{transform-origin:50px 50px;animation:loadingcircle 1s linear infinite alternate, rotate 2s linear infinite;stroke-dasharray:300;stroke-dashoffset:300}:host(:not(.tp-loader--secondary)) [tp-loader-line]{animation:loadingline 1s cubic-bezier(0.83, 0, 0.17, 1) infinite alternate;stroke-dasharray:25;stroke-dashoffset:25}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(2){animation-delay:0.1s}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(3){animation-delay:0.2s}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(4){animation-delay:0.3s}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(5){animation-delay:0.4s}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(6){animation-delay:0.5s}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(7){animation-delay:0.6s}:host(:not(.tp-loader--secondary)) [tp-loader-line]:nth-of-type(8){animation-delay:0.7s}:host(:not(.tp-loader--secondary)) [tp-loader-polyline]{animation:loadingpolyline 1s cubic-bezier(0.83, 0, 0.17, 1) infinite alternate;stroke-dasharray:50;stroke-dashoffset:50}:host(:not(.tp-loader--secondary)) [tp-loader-polyline]:nth-of-type(2){animation-delay:0.2s}:host(:not(.tp-loader--secondary)) [tp-loader-polyline]:nth-of-type(3){animation-delay:0.4s}:host(:not(.tp-loader--secondary)) [tp-loader-polyline]:nth-of-type(4){animation-delay:0.6s}@keyframes loadingline{0%{stroke-dashoffset:25}50%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes loadingpolyline{0%{stroke-dashoffset:50}50%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes loadingcircle{to{stroke-dashoffset:0}}@keyframes rotate{to{transform:rotate(1turn)}}:host(.tp-loader--secondary){position:relative;display:inline-block;width:24px;height:24px}:host(.tp-loader--secondary) div{transform-origin:12px 12px;animation:loader-spinner 0.8s linear infinite}:host(.tp-loader--secondary) div::after{position:absolute;top:1px;left:11px;display:block;width:2px;height:6px;background:var(--tp-color-neutral-10);border-radius:10px;content:\" \"}:host(.tp-loader--secondary) div:nth-child(1){transform:rotate(0deg);animation-delay:-0.7s}:host(.tp-loader--secondary) div:nth-child(2){transform:rotate(45deg);animation-delay:-0.6s}:host(.tp-loader--secondary) div:nth-child(3){transform:rotate(90deg);animation-delay:-0.5s}:host(.tp-loader--secondary) div:nth-child(4){transform:rotate(135deg);animation-delay:-0.4s}:host(.tp-loader--secondary) div:nth-child(5){transform:rotate(180deg);animation-delay:-0.3s}:host(.tp-loader--secondary) div:nth-child(6){transform:rotate(225deg);animation-delay:-0.2s}:host(.tp-loader--secondary) div:nth-child(7){transform:rotate(270deg);animation-delay:-0.1s}:host(.tp-loader--secondary) div:nth-child(8){transform:rotate(315deg);animation-delay:0s}@keyframes loader-spinner{0%{opacity:1}100%{opacity:0.3}}:host(.tp-loader--fixed){position:fixed;top:0;left:0;width:100%}:host(.tp-color) [tp-loader-circle],:host(.tp-color) [tp-loader-polyline],:host(.tp-color) [tp-loader-line]{stroke:var(--tp-color-base)}:host(.tp-color) [tp-loader-rect]{fill:var(--tp-color-base)}:host(.tp-color) div::after{background:var(--tp-color-base)}";

const TpLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpLoader.style = loaderCss;

export { TpLoader as tp_loader };

//# sourceMappingURL=tp-loader.entry.js.map