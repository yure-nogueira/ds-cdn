import type { Components, JSX } from "../types/components";

interface TpCalendar extends Components.TpCalendar, HTMLElement {}
export const TpCalendar: {
    prototype: TpCalendar;
    new (): TpCalendar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
