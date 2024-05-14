import type { Components, JSX } from "../types/components";

interface TpVideoThumbnail extends Components.TpVideoThumbnail, HTMLElement {}
export const TpVideoThumbnail: {
    prototype: TpVideoThumbnail;
    new (): TpVideoThumbnail;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
