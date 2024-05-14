import type { Components, JSX } from "../types/components";

interface TpExample extends Components.TpExample, HTMLElement {}
export const TpExample: {
    prototype: TpExample;
    new (): TpExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
