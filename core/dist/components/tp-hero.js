import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const heroCss = ".hero__slider.sc-tp-hero::part(button-next),.hero__slider.sc-tp-hero::part(button-prev){width:48px;height:48px;padding:16px;box-sizing:border-box;border-radius:50%;color:var(--tp-color-neutral-10) !important;background:rgba(var(--tp-color-neutral-2-rgb), 10%) !important;transition:background 300ms ease-in-out, transform 300ms ease-in-out}.hero__slider.sc-tp-hero::part(button-next):hover,.hero__slider.sc-tp-hero::part(button-prev):hover{background:rgba(var(--tp-color-neutral-2-rgb), 30%) !important}.hero__slider.sc-tp-hero::part(button-next):active,.hero__slider.sc-tp-hero::part(button-prev):active{transform:scale(0.75)}@media (max-width: 767.98px){.hero__slider.sc-tp-hero::part(button-next),.hero__slider.sc-tp-hero::part(button-prev){width:40px;height:40px;padding:12px}}";
const TpHeroStyle0 = heroCss;

const TpHero$1 = /*@__PURE__*/ proxyCustomElement(class TpHero extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get style() { return TpHeroStyle0; }
}, [6, "tp-hero"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-hero"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-hero":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpHero$1);
            }
            break;
    } });
}

const TpHero = TpHero$1;
const defineCustomElement = defineCustomElement$1;

export { TpHero, defineCustomElement };

//# sourceMappingURL=tp-hero.js.map