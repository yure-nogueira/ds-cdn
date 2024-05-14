import type { Components, JSX } from "../types/components";

interface TpAutocomplete extends Components.TpAutocomplete, HTMLElement {}
export const TpAutocomplete: {
    prototype: TpAutocomplete;
    new (): TpAutocomplete;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
