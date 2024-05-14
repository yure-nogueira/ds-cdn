import type { Components, JSX } from "../types/components";

interface TpCalendarDay extends Components.TpCalendarDay, HTMLElement {}
export const TpCalendarDay: {
    prototype: TpCalendarDay;
    new (): TpCalendarDay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
