import { Host, h } from "@stencil/core";
export class TpHero {
    constructor() {
        /**
         * Parâmetros de configuração do swiper.
         */
        this.params = {
            slidesPerView: 1,
            navigation: true,
            rewind: true,
        };
    }
    render() {
        return (h(Host, { key: '795694207e38cce6e7b29013d6e41a2940bda609', class: "hero" }, h("swiper-container", Object.assign({ key: '6332d2721cf2540e78c5a6cf8b2702111880e90d', class: "hero__slider" }, this.params), h("slot", { key: '0b26db7e0bb454b1b69ead71bd7a84c1e5ae6ded' }))));
    }
    static get is() { return "tp-hero"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["hero.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["hero.css"]
        };
    }
}
//# sourceMappingURL=hero.js.map
