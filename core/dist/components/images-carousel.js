import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const imagesCarouselCss = ".sc-tp-images-carousel-h{--width:100%;width:var(--width);overflow:hidden}.images-carousel__container.sc-tp-images-carousel{border-radius:8px;overflow:hidden}.images-carousel__container.sc-tp-images-carousel::part(button-next),.images-carousel__container.sc-tp-images-carousel::part(button-prev){width:48px;height:48px;padding:16px;box-sizing:border-box;border-radius:50%;color:var(--tp-color-neutral-10) !important;background:rgba(var(--tp-color-neutral-2-rgb), 10%) !important;transition:background 300ms ease-in-out, transform 300ms ease-in-out}.images-carousel__container.sc-tp-images-carousel::part(button-next):hover,.images-carousel__container.sc-tp-images-carousel::part(button-prev):hover{background:rgba(var(--tp-color-neutral-2-rgb), 30%) !important}.images-carousel__container.sc-tp-images-carousel::part(button-next):active,.images-carousel__container.sc-tp-images-carousel::part(button-prev):active{transform:scale(0.75)}@media (max-width: 767.98px){.images-carousel__container.sc-tp-images-carousel::part(button-next),.images-carousel__container.sc-tp-images-carousel::part(button-prev){width:40px;height:40px;padding:12px}}.images-carousel__slide.sc-tp-images-carousel{position:relative;height:0;padding-top:calc(var(--aspect-ratio) * 100%)}.images-carousel__slide.sc-tp-images-carousel .swiper-zoom-container.sc-tp-images-carousel{position:absolute;top:0;left:0;width:100%;height:100%}.images-carousel__slide.sc-tp-images-carousel img.sc-tp-images-carousel{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.images-carousel__thumbs.sc-tp-images-carousel{margin-top:12px;visibility:hidden;position:absolute;left:-9999px}.images-carousel__thumbs--show.sc-tp-images-carousel{position:static;visibility:initial}.images-carousel__thumb.sc-tp-images-carousel{display:flex;max-width:120px;border-radius:8px;cursor:pointer;overflow:hidden;filter:grayscale(100%);transition:300ms filter ease-in-out}.images-carousel__thumb.sc-tp-images-carousel img.sc-tp-images-carousel{transition:300ms transform ease-in-out}.images-carousel__thumb.swiper-slide-thumb-active.sc-tp-images-carousel{filter:grayscale(0%)}.images-carousel__thumb.sc-tp-images-carousel:hover img.sc-tp-images-carousel{transform:scale(1.1)}";
const TpImagesCarouselStyle0 = imagesCarouselCss;

const TpImagesCarousel = /*@__PURE__*/ proxyCustomElement(class TpImagesCarousel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get style() { return TpImagesCarouselStyle0; }
}, [2, "tp-images-carousel", {
        "images": [16],
        "aspectRatio": [514, "aspect-ratio"],
        "zoom": [1540],
        "thumbs": [516]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-images-carousel"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-images-carousel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpImagesCarousel);
            }
            break;
    } });
}

export { TpImagesCarousel as T, defineCustomElement as d };

//# sourceMappingURL=images-carousel.js.map