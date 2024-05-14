import type { Components, JSX } from "../types/components";

interface TpPlusminus extends Components.TpPlusminus, HTMLElement {}
export const TpPlusminus: {
    prototype: TpPlusminus;
    new (): TpPlusminus;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
