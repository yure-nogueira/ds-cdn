import type { Components, JSX } from "../types/components";

interface TpContextMenu extends Components.TpContextMenu, HTMLElement {}
export const TpContextMenu: {
    prototype: TpContextMenu;
    new (): TpContextMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
