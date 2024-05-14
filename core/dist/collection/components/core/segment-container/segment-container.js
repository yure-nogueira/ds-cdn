import { Host, h } from "@stencil/core";
import { TP_SEGMENT_GRADIENT_SHOW_CLASS, TP_SEGMENT_WRAPPER_CLASS, } from "./utils/segment-container.constant";
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
        return (h(Host, { key: '823851e65c90d4b03e4f88ad33de47d46839f236', class: "tp-segment-container" }, h("div", { key: '465097a324b5cb701c1f0a18d523a48f549ea33a', class: "tp-segment-container__wrapper" }, h("slot", { key: '10fc7bccacd18187215c8b533942e9b3e7186483' }), h("div", { key: '39bc58345168ae74a1332858aadc05d27a58bd38', class: "tp-segment-container__gradient" }))));
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
