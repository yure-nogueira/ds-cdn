import { Host, h } from "@stencil/core";
export class TpImagesCarousel {
    constructor() {
        /**
         * Parâmetros de configuração do carrossel.
         */
        this.carouselParams = {
            slidesPerView: 1,
            navigation: true,
            loop: true,
        };
        /**
         * Parâmetros de configuração das thumbs.
         */
        this.thumbsParams = {
            spaceBetween: 12,
            watchSlidesProgress: true,
        };
        this.images = [];
        this.aspectRatio = 1 / 1;
        this.zoom = false;
        this.thumbs = false;
    }
    getCarouselImages() {
        const { images, zoom } = this;
        if (!images.length) {
            return (h("swiper-slide", null, h("ion-skeleton-text", { animated: true, "tp-component": "tp-images-carousel" })));
        }
        return zoom
            ? images.map(({ src, alt }) => (h("swiper-slide", { class: "images-carousel__slide" }, h("div", { class: "swiper-zoom-container" }, h("img", { src: src, alt: alt })))))
            : images.map(({ src, alt }) => (h("swiper-slide", { class: "images-carousel__slide" }, h("img", { src: src, alt: alt }))));
    }
    getCarouselThumbs() {
        const { images, thumbs, thumbsParams } = this;
        return (h("swiper-container", Object.assign({ class: {
                ['images-carousel__thumbs']: true,
                ['images-carousel__thumbs--show']: thumbs,
            }, "slides-per-view": images.length }, thumbsParams), images.map(({ src, alt }) => (h("swiper-slide", { class: "images-carousel__thumb" }, h("img", { src: src, alt: alt }))))));
    }
    render() {
        const { aspectRatio, zoom, carouselParams, thumbsParams } = this;
        const carouselImages = this.getCarouselImages();
        const carouselThumbs = this.getCarouselThumbs();
        const extraCarouselParams = {
            ['thumbs-swiper']: '.images-carousel__thumbs',
            zoom,
        };
        return (h(Host, { key: '579a901e4be5d45944f3eb71dba9efddbaddf119', class: "images-carousel", style: {
                '--aspect-ratio': `${aspectRatio}`,
                '--thumbs-margin-top': `${thumbsParams.spaceBetween}`,
            } }, h("swiper-container", Object.assign({ key: '9c8b178841dba29fba7f9901159162394070690a', class: "images-carousel__container" }, carouselParams, extraCarouselParams), carouselImages), carouselThumbs));
    }
    static get is() { return "tp-images-carousel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["images-carousel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["images-carousel.css"]
        };
    }
    static get properties() {
        return {
            "images": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CarouselImage[]",
                    "resolved": "CarouselImage[]",
                    "references": {
                        "CarouselImage": {
                            "location": "import",
                            "path": "./utils/images-carousel.type",
                            "id": "src/components/elementor/core/images-carousel/utils/images-carousel.type.ts::CarouselImage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Os objetos com as imagens a serem mostradas no carrossel."
                },
                "defaultValue": "[]"
            },
            "aspectRatio": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "As propor\u00E7\u00F5es do carrossel no formato h / w (height to width)."
                },
                "attribute": "aspect-ratio",
                "reflect": true,
                "defaultValue": "1 / 1"
            },
            "zoom": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Se as images ter\u00E3o ou n\u00E3o o recurso de zoom."
                },
                "attribute": "zoom",
                "reflect": true,
                "defaultValue": "false"
            },
            "thumbs": {
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
                    "text": "Se o carrossel ter\u00E1 ou n\u00E3o o recurso de thumbs."
                },
                "attribute": "thumbs",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=images-carousel.js.map
