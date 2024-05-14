import { Host, h } from "@stencil/core";
import { TP_BANNER } from "./utils/banner.constant";
export class TpBanner {
    constructor() {
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
    static get is() { return "tp-banner"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["banner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["banner.css"]
        };
    }
    static get properties() {
        return {
            "slideMode": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define se o componente \u00E9 ou n\u00E3o usado como slide."
                },
                "attribute": "slide-mode",
                "reflect": true,
                "defaultValue": "false"
            },
            "alignment": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpBannerAlignment",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "TpBannerAlignment": {
                            "location": "import",
                            "path": "./utils/banner.type",
                            "id": "src/components/elementor/core/banner/utils/banner.type.ts::TpBannerAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o alinhamento do conte\u00FAdo do banner."
                },
                "attribute": "alignment",
                "reflect": true,
                "defaultValue": "TP_BANNER.ALIGNMENT.LEFT"
            }
        };
    }
    static get states() {
        return {
            "animate": {}
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=banner.js.map
