'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');

const TP_SEGMENT_WRAPPER_CLASS = 'tp-segment-container__wrapper';
const TP_SEGMENT_GRADIENT_SHOW_CLASS = 'tp-segment-container--show-gradient';

var TpSegmentContainerGradient;
(function (TpSegmentContainerGradient) {
    TpSegmentContainerGradient["START"] = "start";
    TpSegmentContainerGradient["END"] = "end";
})(TpSegmentContainerGradient || (TpSegmentContainerGradient = {}));

const segmentContainerCss = ":host{position:relative;overflow:hidden}.tp-segment-container__wrapper{display:flex;overflow-x:auto;--tp-scroll-color-content:var(--tp-color-neutral-3);--tp-scroll-color-track:var(--tp-color-neutral-1);--tp-scroll-width:8px;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}.tp-segment-container__wrapper::-webkit-scrollbar{width:var(--tp-scroll-width);height:8px}@media (max-width: 576px){.tp-segment-container__wrapper::-webkit-scrollbar{width:0}}.tp-segment-container__wrapper::-webkit-scrollbar-track{background:var(--tp-scroll-color-track)}.tp-segment-container__wrapper::-webkit-scrollbar-thumb{color:transparent;background:var(--tp-scroll-color-content)}.tp-segment-container__wrapper::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}.tp-segment-container__wrapper::-webkit-scrollbar-thumb{background-clip:content-box;border:2px solid transparent;border-radius:16px;box-shadow:inset 0 0 0 10px}.tp-segment-container__wrapper::-webkit-scrollbar-button{display:none;width:0;height:0}.tp-segment-container__gradient{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.tp-segment-container__gradient::before,.tp-segment-container__gradient::after{position:absolute;top:0;display:none;width:32px;height:100%;content:\"\"}.tp-segment-container__gradient::before{left:0;background:linear-gradient(to left, transparent, var(--tp-color-neutral-2))}.tp-segment-container__gradient::after{right:0;background:linear-gradient(to right, transparent, var(--tp-color-neutral-2))}:host(.tp-segment-container--show-gradient-start) .tp-segment-container__gradient::before{display:block}:host(.tp-segment-container--show-gradient-end) .tp-segment-container__gradient::after{display:block}";

const TpSegmentContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.wrapperEl = this.host.shadowRoot.querySelector(`.${TP_SEGMENT_WRAPPER_CLASS}`);
        this.hasScroll = this.wrapperEl.scrollWidth > this.wrapperEl.clientWidth;
        if (this.hasScroll) {
            this.addGradient(TpSegmentContainerGradient.END);
        }
        this.wrapperEl.addEventListener('scroll', this.updateGradient.bind(this));
    }
    addGradient(position) {
        if (!this.host.classList.contains(`${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`)) {
            this.host.classList.add(`${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`);
        }
    }
    removeGradient(position) {
        if (this.host.classList.contains(`${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`)) {
            this.host.classList.remove(`${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`);
        }
    }
    updateGradient() {
        if (!this.hasScroll) {
            this.removeGradient(TpSegmentContainerGradient.START);
            this.removeGradient(TpSegmentContainerGradient.END);
            return;
        }
        const isAtStart = this.wrapperEl.scrollLeft === 0;
        const isAtEnd = this.wrapperEl.scrollWidth ===
            Math.floor(this.wrapperEl.clientWidth + this.wrapperEl.scrollLeft) ||
            this.wrapperEl.scrollWidth ===
                Math.ceil(this.wrapperEl.clientWidth + this.wrapperEl.scrollLeft);
        if (isAtStart) {
            this.removeGradient(TpSegmentContainerGradient.START);
        }
        if (!isAtStart) {
            this.addGradient(TpSegmentContainerGradient.START);
        }
        if (isAtEnd) {
            this.removeGradient(TpSegmentContainerGradient.END);
        }
        if (!isAtEnd) {
            this.addGradient(TpSegmentContainerGradient.END);
        }
    }
    onWindowReize() {
        this.hasScroll = this.wrapperEl.scrollWidth > this.wrapperEl.clientWidth;
        this.updateGradient();
    }
    disconnectedCallback() {
        this.wrapperEl.removeEventListener('scroll', this.updateGradient.bind(this));
    }
    render() {
        return (index.h(index.Host, { class: "tp-segment-container" }, index.h("div", { class: "tp-segment-container__wrapper" }, index.h("slot", null), index.h("div", { class: "tp-segment-container__gradient" }))));
    }
    get host() { return index.getElement(this); }
};
TpSegmentContainer.style = segmentContainerCss;

exports.tp_segment_container = TpSegmentContainer;

//# sourceMappingURL=tp-segment-container.cjs.entry.js.map