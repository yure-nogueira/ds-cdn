import type { Components, JSX } from "../types/components";

interface TpCartaoRespostaItem extends Components.TpCartaoRespostaItem, HTMLElement {}
export const TpCartaoRespostaItem: {
    prototype: TpCartaoRespostaItem;
    new (): TpCartaoRespostaItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
