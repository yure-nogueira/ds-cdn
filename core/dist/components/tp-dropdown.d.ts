import type { Components, JSX } from "../types/components";

interface TpDropdown extends Components.TpDropdown, HTMLElement {}
export const TpDropdown: {
    prototype: TpDropdown;
    new (): TpDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
