import type { Components, JSX } from "../types/components";

interface TpQuestion extends Components.TpQuestion, HTMLElement {}
export const TpQuestion: {
    prototype: TpQuestion;
    new (): TpQuestion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
