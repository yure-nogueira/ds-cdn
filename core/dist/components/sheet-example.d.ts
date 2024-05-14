import type { Components, JSX } from "../types/components";

interface SheetExample extends Components.SheetExample, HTMLElement {}
export const SheetExample: {
    prototype: SheetExample;
    new (): SheetExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
