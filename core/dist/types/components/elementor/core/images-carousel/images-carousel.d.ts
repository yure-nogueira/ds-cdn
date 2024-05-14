import { CarouselImage } from './utils/images-carousel.type';
export declare class TpImagesCarousel {
    /**
     * Os objetos com as imagens a serem mostradas no carrossel.
     */
    images: CarouselImage[];
    /**
     * As proporções do carrossel no formato h / w (height to width).
     */
    aspectRatio: number;
    /**
     * Se as images terão ou não o recurso de zoom.
     */
    zoom: boolean;
    /**
     * Se o carrossel terá ou não o recurso de thumbs.
     */
    thumbs: boolean;
    /**
     * Parâmetros de configuração do carrossel.
     */
    carouselParams: {
        slidesPerView: number;
        navigation: boolean;
        loop: boolean;
    };
    /**
     * Parâmetros de configuração das thumbs.
     */
    thumbsParams: {
        spaceBetween: number;
        watchSlidesProgress: boolean;
    };
    getCarouselImages(): any;
    getCarouselThumbs(): any;
    render(): any;
}
