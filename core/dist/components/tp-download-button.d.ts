import type { Components, JSX } from "../types/components";

interface TpDownloadButton extends Components.TpDownloadButton, HTMLElement {}
export const TpDownloadButton: {
    prototype: TpDownloadButton;
    new (): TpDownloadButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
