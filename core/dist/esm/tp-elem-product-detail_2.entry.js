import { r as registerInstance, c as createEvent, h, H as Host } from './index-e49e9bf4.js';

const productDetailCss = ".product-detail.sc-tp-elem-product-detail{display:flex;gap:32px;align-items:flex-start;justify-content:flex-start;width:100%}@media (max-width: 767.98px){.product-detail.sc-tp-elem-product-detail{flex-direction:column;gap:24px}}.product-detail__left.sc-tp-elem-product-detail{flex:1;align-self:center;overflow:hidden}.product-detail__right.sc-tp-elem-product-detail{flex:1}.product-detail__image-container.sc-tp-elem-product-detail{display:flex;overflow:hidden}@media (max-width: 767.98px){.product-detail__image-container.sc-tp-elem-product-detail{width:50%;margin:0 auto}}@media (max-width: 575.98px){.product-detail__image-container.sc-tp-elem-product-detail{width:100%;margin:0}}.product-detail__price-container.sc-tp-elem-product-detail{margin-bottom:16px}.product-detail__description.sc-tp-elem-product-detail{display:block;margin-bottom:16px}.product-detail__info-container.sc-tp-elem-product-detail{margin-bottom:24px}.product-detail__plusminus.sc-tp-elem-product-detail{justify-content:flex-start !important;margin-bottom:16px}.product-detail__message.sc-tp-elem-product-detail{margin-top:8px;display:block}.sc-tp-elem-product-detail-s>[slot=image]{border-radius:8px}.sc-tp-elem-product-detail-s>[slot=title]{display:block;margin-bottom:24px}.sc-tp-elem-product-detail-s>[slot=regular-price]{margin-right:8px;text-decoration:line-through}.sc-tp-elem-product-detail-s>[slot=description]{display:block;margin-bottom:16px}.sc-tp-elem-product-detail-s>[slot=attributes]{display:flex;flex-direction:column}.sc-tp-elem-product-detail-s>[slot=categories]{display:flex;align-items:center}";
const TpElemProductDetailStyle0 = productDetailCss;

const TpElemProductDetail = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addToCartEvent = createEvent(this, "addToCartEvent", 7);
        this.productData = undefined;
        this.value = 1;
    }
    async onAddToCart(productId, quantity) {
        this.addToCartEvent.emit({
            productId,
            quantity,
        });
    }
    handlePlusminus(event) {
        this.value = event.detail;
    }
    render() {
        const { productData, value } = this;
        const { id, stockQuantity, stockStatus, type } = productData;
        return (h(Host, { key: '32b1d4ae9a96b46d503f87107844edb9a7541247' }, h("div", { key: '83bb86fde455cbab7493efe2147daf4b4738b74f', class: "product-detail" }, h("div", { key: '3ee465c9a7f04300c3124542eef4e97a2dbbfa23', class: "product-detail__left" }, h("div", { key: '299e16b50b293822d1988e92863c7bffbe5eb7ae', class: "product-detail__image-container" }, h("slot", { key: '0e843bd7635f1f16cc1abab1c2e589c622ddf244', name: "image" }))), h("div", { key: '7cb9b114383df2e621d5acd700fc8b8634396f75', class: "product-detail__right" }, h("slot", { key: 'd04aa8aad4c5f484a02d95283ae2fa47acae6341', name: "title" }), h("div", { key: 'a40ce79b642bfe5ef2434020457a9dc19340e2b4', class: "product-detail__price-container" }, h("slot", { key: '6dbc3ee83cb934e7b9816ac34b85adf553bca29d', name: "regular-price" }), h("slot", { key: 'c09bdbea5a3b4c2ba173e9273885e9ea48f753fd', name: "price" })), h("slot", { key: '52d790d9a0e1aabc64bd2b25c9f14c6ae960ed08', name: "description" }), h("slot", { key: 'c6f50c2e13815dc976662b1e54f7f0685240d06a', name: "stock" }), h("div", { key: 'cbff6ca58094bd26dbbdceee6a31b3879e36b5cc', class: "product-detail__info-container" }, h("slot", { key: '72e34d7e0d0d769f89e301b4028fd3b30078306f', name: "sku" }), h("slot", { key: 'c75db07129e27efc9dc98db6ea35317e3aa465b4', name: "attributes" }), h("slot", { key: '1ee06c8b26acc312482a316cb9c06277c92b6dd0', name: "categories" })), type === 'external' ? (h("slot", { name: "action" })) : (h("div", null, h("tp-plusminus", { class: "product-detail__plusminus", "use-slot": "false", value: value, min: 1, max: stockQuantity ? stockQuantity : 9, "automatic-disabled": true }), h("ion-button", { color: "brand", onClick: () => this.onAddToCart(id, value), disabled: stockStatus !== 'instock' }, "Add to cart")))))));
    }
};
TpElemProductDetail.style = TpElemProductDetailStyle0;

const imagesCarouselCss = ".sc-tp-images-carousel-h{--width:100%;width:var(--width);overflow:hidden}.images-carousel__container.sc-tp-images-carousel{border-radius:8px;overflow:hidden}.images-carousel__container.sc-tp-images-carousel::part(button-next),.images-carousel__container.sc-tp-images-carousel::part(button-prev){width:48px;height:48px;padding:16px;box-sizing:border-box;border-radius:50%;color:var(--tp-color-neutral-10) !important;background:rgba(var(--tp-color-neutral-2-rgb), 10%) !important;transition:background 300ms ease-in-out, transform 300ms ease-in-out}.images-carousel__container.sc-tp-images-carousel::part(button-next):hover,.images-carousel__container.sc-tp-images-carousel::part(button-prev):hover{background:rgba(var(--tp-color-neutral-2-rgb), 30%) !important}.images-carousel__container.sc-tp-images-carousel::part(button-next):active,.images-carousel__container.sc-tp-images-carousel::part(button-prev):active{transform:scale(0.75)}@media (max-width: 767.98px){.images-carousel__container.sc-tp-images-carousel::part(button-next),.images-carousel__container.sc-tp-images-carousel::part(button-prev){width:40px;height:40px;padding:12px}}.images-carousel__slide.sc-tp-images-carousel{position:relative;height:0;padding-top:calc(var(--aspect-ratio) * 100%)}.images-carousel__slide.sc-tp-images-carousel .swiper-zoom-container.sc-tp-images-carousel{position:absolute;top:0;left:0;width:100%;height:100%}.images-carousel__slide.sc-tp-images-carousel img.sc-tp-images-carousel{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.images-carousel__thumbs.sc-tp-images-carousel{margin-top:12px;visibility:hidden;position:absolute;left:-9999px}.images-carousel__thumbs--show.sc-tp-images-carousel{position:static;visibility:initial}.images-carousel__thumb.sc-tp-images-carousel{display:flex;max-width:120px;border-radius:8px;cursor:pointer;overflow:hidden;filter:grayscale(100%);transition:300ms filter ease-in-out}.images-carousel__thumb.sc-tp-images-carousel img.sc-tp-images-carousel{transition:300ms transform ease-in-out}.images-carousel__thumb.swiper-slide-thumb-active.sc-tp-images-carousel{filter:grayscale(0%)}.images-carousel__thumb.sc-tp-images-carousel:hover img.sc-tp-images-carousel{transform:scale(1.1)}";
const TpImagesCarouselStyle0 = imagesCarouselCss;

const TpImagesCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpImagesCarousel.style = TpImagesCarouselStyle0;

export { TpElemProductDetail as tp_elem_product_detail, TpImagesCarousel as tp_images_carousel };

//# sourceMappingURL=tp-elem-product-detail_2.entry.js.map