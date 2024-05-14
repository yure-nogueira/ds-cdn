import { TpSegmentContainerType } from './utils/segment-container.type';
export declare class TpSegmentContainer {
    private wrapperEl;
    private hasScroll;
    host: HTMLElement;
    componentDidLoad(): void;
    addGradient(position: TpSegmentContainerType['position']): void;
    removeGradient(position: TpSegmentContainerType['position']): void;
    updateGradient(): void;
    onWindowReize(): void;
    disconnectedCallback(): void;
    render(): any;
}
