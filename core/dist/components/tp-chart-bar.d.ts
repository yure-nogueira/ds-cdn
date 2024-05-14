import type { Components, JSX } from "../types/components";

interface TpChartBar extends Components.TpChartBar, HTMLElement {}
export const TpChartBar: {
    prototype: TpChartBar;
    new (): TpChartBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
