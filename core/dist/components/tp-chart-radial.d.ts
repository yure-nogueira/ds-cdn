import type { Components, JSX } from "../types/components";

interface TpChartRadial extends Components.TpChartRadial, HTMLElement {}
export const TpChartRadial: {
    prototype: TpChartRadial;
    new (): TpChartRadial;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
