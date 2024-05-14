import { Host, h } from "@stencil/core";
import { TP_SEGMENT_WRAPPER_CLASS, TP_SEGMENT_GRADIENT_SHOW_CLASS, } from "./utils/segment-container.constant";
import { TpSegmentContainerGradient } from "./utils/segment-container.enum";
export class TpSegmentContainer {
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
        return (h(Host, { class: "tp-segment-container" }, h("div", { class: "tp-segment-container__wrapper" }, h("slot", null), h("div", { class: "tp-segment-container__gradient" }))));
    }
    static get is() { return "tp-segment-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["segment-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["segment-container.css"]
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onWindowReize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=segment-container.js.map
