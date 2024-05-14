import type { Components, JSX } from "../types/components";

interface TpHorizontalChartBar extends Components.TpHorizontalChartBar, HTMLElement {}
export const TpHorizontalChartBar: {
    prototype: TpHorizontalChartBar;
    new (): TpHorizontalChartBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
