import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

var TpBannerAlignment;
(function (TpBannerAlignment) {
    TpBannerAlignment["LEFT"] = "left";
    TpBannerAlignment["CENTER"] = "center";
    TpBannerAlignment["RIGHT"] = "right";
})(TpBannerAlignment || (TpBannerAlignment = {}));

const TP_BANNER = {
    ALIGNMENT: Object.fromEntries(Object.entries(TpBannerAlignment)),
    ALIGNMENT_VALUES: Object.values(TpBannerAlignment),
};

const bannerCss = ".sc-tp-banner-h{display:block;overflow:hidden}.banner__container.sc-tp-banner{display:flex;position:relative}.banner__content.sc-tp-banner{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:absolute;top:0;left:0;width:100%;height:100%}.banner__content.sc-tp-banner-s>[slot=content],.banner__content .sc-tp-banner-s>[slot=content]{height:100%}.banner.sc-tp-banner-s>[slot=image],.banner .sc-tp-banner-s>[slot=image]{display:flex;width:100%;transition:500ms transform ease-in-out;transform:scale(1.15)}.banner.sc-tp-banner-s>[slot=image],.banner.sc-tp-banner-s>[slot=image] img,.banner .sc-tp-banner-s>[slot=image] img{object-fit:cover;width:100%;height:100%}.banner.sc-tp-banner-s>[slot=image],.banner.sc-tp-banner-s>[slot=image][news-hero],.banner .sc-tp-banner-s>[slot=image][news-hero]{min-height:400px}@media (max-width: 991.98px){.banner.sc-tp-banner-s>[slot=image],.banner.sc-tp-banner-s>[slot=image][news-hero],.banner .sc-tp-banner-s>[slot=image][news-hero]{min-height:320px}}@media (max-width: 767.98px){.banner.sc-tp-banner-s>[slot=image],.banner.sc-tp-banner-s>[slot=image][news-hero],.banner .sc-tp-banner-s>[slot=image][news-hero]{min-height:280px}}.banner--align-center.sc-tp-banner-h .banner__content.sc-tp-banner{left:50%;transform:translateX(-50%)}.banner--align-right.sc-tp-banner-h .banner__content.sc-tp-banner{left:unset;right:0}.sc-tp-banner-h.banner--animated.sc-tp-banner-s>[slot=image],.sc-tp-banner-h.banner--animated .sc-tp-banner-s>[slot=image]{transform:scale(1);transition:5s transform cubic-bezier(0.165, 0.84, 0.44, 1)}";
const TpBannerStyle0 = bannerCss;

const TpBanner$1 = /*@__PURE__*/ proxyCustomElement(class TpBanner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.slideMode = false;
        this.alignment = TP_BANNER.ALIGNMENT.LEFT;
        this.animate = false;
    }
    componentWillLoad() {
        this.setupObserver();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    setupObserver() {
        this.observer = new IntersectionObserver(this.onObserverTriggered.bind(this), {
            root: this.slideMode
                ? this.host.parentElement.parentElement
                : this.host.parentElement,
            threshold: 0.1,
        });
        this.observer.observe(this.host);
    }
    onObserverTriggered(entries) {
        if (entries[0].isIntersecting && !this.animate) {
            this.animate = true;
            return;
        }
        if (this.animate)
            this.animate = false;
    }
    render() {
        const { animate, alignment } = this;
        return (h(Host, { key: '2281c0351b23b9af4e62cfe8913aea3f01f189dd', class: {
                banner: true,
                ['banner--animated']: animate,
                [`banner--align-${alignment}`]: true,
            } }, h("div", { key: 'bf2debe53374182009ef20f0af3b994561912ae9', class: "banner__container" }, h("slot", { key: 'fa59ca5b66c2673cf8b743cd19b00dfb5113221a', name: "image" }), h("div", { key: 'cb8f25b43c94ab259506b9ab3ffa217cdc210d6b', class: "banner__content" }, h("slot", { key: '757601674507bd1dcad20ac6a7dee817e7e7916f', name: "content" })))));
    }
    get host() { return this; }
    static get style() { return TpBannerStyle0; }
}, [6, "tp-banner", {
        "slideMode": [516, "slide-mode"],
        "alignment": [513],
        "animate": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-banner"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpBanner$1);
            }
            break;
    } });
}

const TpBanner = TpBanner$1;
const defineCustomElement = defineCustomElement$1;

export { TpBanner, defineCustomElement };

//# sourceMappingURL=tp-banner.js.map