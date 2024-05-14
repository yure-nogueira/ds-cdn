import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const newsItemCss = ".sc-tp-elem-news-item-h{display:block;width:100%}.tp-news-item__container.sc-tp-elem-news-item{display:flex;align-items:center;gap:64px;border:1px solid var(--tp-color-neutral-2);border-radius:8px;padding:40px;cursor:pointer;background-color:transparent;transition:background-color 0.2s ease-in}.tp-news-item__container.sc-tp-elem-news-item:hover{background-color:var(--tp-color-neutral-2)}.tp-news-item__container:hover.sc-tp-elem-news-item-s>[slot=image],.tp-news-item__container:hover .sc-tp-elem-news-item-s>[slot=image]{transform:scale(1.15)}@media (max-width: 1199.98px){.tp-news-item__container.sc-tp-elem-news-item{gap:48px;padding:32px}}@media (max-width: 991.98px){.tp-news-item__container.sc-tp-elem-news-item{gap:32px;padding:24px}}@media (max-width: 767.98px){.tp-news-item__container.sc-tp-elem-news-item{gap:16px}}@media (max-width: 575.98px){.tp-news-item__container.sc-tp-elem-news-item{flex-direction:column;gap:24px}}.tp-news-item__left.sc-tp-elem-news-item{display:flex;justify-content:center;align-items:center;flex:40%}@media (max-width: 575.98px){.tp-news-item__left.sc-tp-elem-news-item{flex:1}}.tp-news-item__image-container.sc-tp-elem-news-item{display:flex;overflow:hidden;border-radius:8px}.tp-news-item.sc-tp-elem-news-item-s>[slot=image],.tp-news-item .sc-tp-elem-news-item-s>[slot=image]{transition:transform 0.3s ease-in}.tp-news-item__right.sc-tp-elem-news-item{display:flex;flex-direction:column;flex:60%}@media (max-width: 575.98px){.tp-news-item__right.sc-tp-elem-news-item{flex:1;align-items:flex-start;width:100%}}.tp-news-item.sc-tp-elem-news-item-s>[slot=category],.tp-news-item .sc-tp-elem-news-item-s>[slot=category]{--padding-start:24px !important;--padding-end:24px !important;--padding-top:2px !important;--padding-bottom:2px !important;margin-bottom:32px;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.tp-news-item.sc-tp-elem-news-item-s>[slot=title],.tp-news-item .sc-tp-elem-news-item-s>[slot=title]{margin-bottom:24px}.tp-news-item.sc-tp-elem-news-item-s>[slot=title],.tp-news-item.sc-tp-elem-news-item-s>[slot=title] h1,.tp-news-item .sc-tp-elem-news-item-s>[slot=title] h1{font-size:32px;line-height:40px;font-weight:600}@media (max-width: 767.98px){.tp-news-item.sc-tp-elem-news-item-s>[slot=title],.tp-news-item.sc-tp-elem-news-item-s>[slot=title] h1,.tp-news-item .sc-tp-elem-news-item-s>[slot=title] h1{font-size:24px;line-height:32px}}";
const TpElemNewsItemStyle0 = newsItemCss;

const TpElemNewsItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c84003e683a46dc4fcf7f27c8a073f88c25f306a', class: "tp-news-item" }, h("div", { key: 'f0d57cb78e37704715aad8901abed9038db32e08', class: "tp-news-item__container" }, h("div", { key: '793fde95b1068c0a88f50aa3281a4c40c789f949', class: "tp-news-item__left" }, h("div", { key: '89f3769db44f27cd79807adb237f5281218fd8be', class: "tp-news-item__image-container" }, h("slot", { key: '8372cb2c446d4152d89c98e49795debe0495ddda', name: "image" }))), h("div", { key: '4894aa26fc1b22a587d4b9fba17842e5730ada46', class: "tp-news-item__right" }, h("slot", { key: '2e35237fd41d542f36b8b6ed611a70865d56c0a5', name: "category" }), h("slot", { key: 'f856464ed47a298169f1480b2cb32d94e3ffcc02', name: "title" }), h("slot", { key: '6c36ce053e0be509760da07930f8f935599feaf2', name: "date-time" })))));
    }
};
TpElemNewsItem.style = TpElemNewsItemStyle0;

const loaderCss = "[tp-type=h64].sc-tp-loader,[tp-type=h64].sc-tp-loader *.sc-tp-loader{font-size:64px !important;font-weight:600 !important;line-height:64px !important;margin:0}[tp-type=h48].sc-tp-loader,[tp-type=h48].sc-tp-loader *.sc-tp-loader{font-size:48px !important;font-weight:600 !important;line-height:48px !important;margin:0}[tp-type=h48x].sc-tp-loader,[tp-type=h48x].sc-tp-loader *.sc-tp-loader{font-size:48px !important;font-weight:600 !important;line-height:64px !important;margin:0}[tp-type=h32].sc-tp-loader,[tp-type=h32].sc-tp-loader *.sc-tp-loader{font-size:32px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=h32x].sc-tp-loader,[tp-type=h32x].sc-tp-loader *.sc-tp-loader{font-size:32px !important;font-weight:600 !important;line-height:40px !important;margin:0}[tp-type=h24].sc-tp-loader,[tp-type=h24].sc-tp-loader *.sc-tp-loader{font-size:24px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=h24x].sc-tp-loader,[tp-type=h24x].sc-tp-loader *.sc-tp-loader{font-size:24px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=h20].sc-tp-loader,[tp-type=h20].sc-tp-loader *.sc-tp-loader{font-size:20px !important;font-weight:600 !important;line-height:20px !important;margin:0}[tp-type=h20x].sc-tp-loader,[tp-type=h20x].sc-tp-loader *.sc-tp-loader{font-size:20px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=p20].sc-tp-loader,[tp-type=p20].sc-tp-loader *.sc-tp-loader{font-size:20px !important;font-weight:400 !important;line-height:24px !important;margin:0}[tp-type=p18x].sc-tp-loader,[tp-type=p18x].sc-tp-loader *.sc-tp-loader{font-size:18px !important;font-weight:400 !important;line-height:32px !important;margin:0}[tp-type=p18xb].sc-tp-loader,[tp-type=p18xb].sc-tp-loader *.sc-tp-loader{font-size:18px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=p16].sc-tp-loader,[tp-type=p16].sc-tp-loader *.sc-tp-loader{font-size:16px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p16b].sc-tp-loader,[tp-type=p16b].sc-tp-loader *.sc-tp-loader{font-size:16px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p16x].sc-tp-loader,[tp-type=p16x].sc-tp-loader *.sc-tp-loader{font-size:16px !important;font-weight:400 !important;line-height:24px !important;margin:0}[tp-type=p16xb].sc-tp-loader,[tp-type=p16xb].sc-tp-loader *.sc-tp-loader{font-size:16px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=p14].sc-tp-loader,[tp-type=p14].sc-tp-loader *.sc-tp-loader{font-size:14px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p14b].sc-tp-loader,[tp-type=p14b].sc-tp-loader *.sc-tp-loader{font-size:14px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p14x].sc-tp-loader,[tp-type=p14x].sc-tp-loader *.sc-tp-loader{font-size:14px !important;font-weight:400 !important;line-height:20px !important;margin:0}[tp-type=p14xb].sc-tp-loader,[tp-type=p14xb].sc-tp-loader *.sc-tp-loader{font-size:14px !important;font-weight:600 !important;line-height:20px !important;margin:0}[tp-type=p12].sc-tp-loader,[tp-type=p12].sc-tp-loader *.sc-tp-loader{font-size:12px !important;font-weight:400 !important;line-height:12px !important;margin:0}[tp-type=p12b].sc-tp-loader,[tp-type=p12b].sc-tp-loader *.sc-tp-loader{font-size:12px !important;font-weight:600 !important;line-height:12px !important;margin:0}[tp-type=p12x].sc-tp-loader,[tp-type=p12x].sc-tp-loader *.sc-tp-loader{font-size:12px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p12xb].sc-tp-loader,[tp-type=p12xb].sc-tp-loader *.sc-tp-loader{font-size:12px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p10].sc-tp-loader,[tp-type=p10].sc-tp-loader *.sc-tp-loader{font-size:10px !important;font-weight:400 !important;line-height:12px !important;margin:0}[tp-type=p10b].sc-tp-loader,[tp-type=p10b].sc-tp-loader *.sc-tp-loader{font-size:10px !important;font-weight:600 !important;line-height:12px !important;margin:0}.sc-tp-loader-h:not(.tp-loader--secondary){display:flex;flex-direction:column;align-items:center;justify-content:center;width:auto;height:100vh;min-height:100vh;background:var(--background, #1a1a1a)}.sc-tp-loader-h:not(.tp-loader--secondary) .loader-container.sc-tp-loader{display:block;height:var(--tp-size, 94px);width:var(--tp-size, 94px)}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-circle].sc-tp-loader,.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-polyline].sc-tp-loader,.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader{fill:none;stroke:var(--stroke, var(--tp-color-neutral-10));stroke-width:6;stroke-miterlimit:10}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-rect].sc-tp-loader{fill:var(--stroke, var(--tp-color-neutral-10))}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-circle].sc-tp-loader{animation:loadingcircle 1s linear infinite alternate, rotate 2s linear infinite;stroke-dasharray:300;stroke-dashoffset:300;transform-origin:50px 50px}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader{animation:loadingline 1s cubic-bezier(0.83, 0, 0.17, 1) infinite alternate;stroke-dasharray:25;stroke-dashoffset:25}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(2){animation-delay:0.1s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(3){animation-delay:0.2s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(4){animation-delay:0.3s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(5){animation-delay:0.4s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(6){animation-delay:0.5s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(7){animation-delay:0.6s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-line].sc-tp-loader:nth-of-type(8){animation-delay:0.7s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-polyline].sc-tp-loader{animation:loadingpolyline 1s cubic-bezier(0.83, 0, 0.17, 1) infinite alternate;stroke-dasharray:50;stroke-dashoffset:50}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-polyline].sc-tp-loader:nth-of-type(2){animation-delay:0.2s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-polyline].sc-tp-loader:nth-of-type(3){animation-delay:0.4s}.sc-tp-loader-h:not(.tp-loader--secondary) [tp-loader-polyline].sc-tp-loader:nth-of-type(4){animation-delay:0.6s}@keyframes loadingline{0%{stroke-dashoffset:25}50%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes loadingpolyline{0%{stroke-dashoffset:50}50%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes loadingcircle{to{stroke-dashoffset:0}}@keyframes rotate{to{transform:rotate(1turn)}}.tp-loader--fixed.sc-tp-loader-h{position:fixed;top:0;left:0;width:100%}.tp-loader--auto.sc-tp-loader-h{height:auto;min-height:unset}.tp-loader-secondary.sc-tp-loader-h{display:inline-block;position:relative;width:24px;height:24px}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader{transform-origin:12px 12px;animation:loader-spinner 0.8s linear infinite}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader::after{content:\" \";display:block;position:absolute;top:1px;left:11px;width:2px;height:6px;border-radius:10px;background:var(--background-secondary, var(--tp-color-neutral-10))}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(1){transform:rotate(0deg);animation-delay:-0.7s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(2){transform:rotate(45deg);animation-delay:-0.6s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(3){transform:rotate(90deg);animation-delay:-0.5s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(4){transform:rotate(135deg);animation-delay:-0.4s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(5){transform:rotate(180deg);animation-delay:-0.3s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(6){transform:rotate(225deg);animation-delay:-0.2s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(7){transform:rotate(270deg);animation-delay:-0.1s}.tp-loader-secondary.sc-tp-loader-h div.sc-tp-loader:nth-child(8){transform:rotate(315deg);animation-delay:0s}@keyframes loader-spinner{0%{opacity:1}100%{opacity:0.3}}";
const TpLoaderStyle0 = loaderCss;

const TpLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpLoader.style = TpLoaderStyle0;

export { TpElemNewsItem as tp_elem_news_item, TpLoader as tp_loader };

//# sourceMappingURL=tp-elem-news-item_2.entry.js.map