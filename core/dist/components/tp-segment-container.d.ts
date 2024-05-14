import type { Components, JSX } from "../types/components";

interface TpSegmentContainer extends Components.TpSegmentContainer, HTMLElement {}
export const TpSegmentContainer: {
    prototype: TpSegmentContainer;
    new (): TpSegmentContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
