import type { Components, JSX } from "../types/components";

interface TpImagesCarousel extends Components.TpImagesCarousel, HTMLElement {}
export const TpImagesCarousel: {
    prototype: TpImagesCarousel;
    new (): TpImagesCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
