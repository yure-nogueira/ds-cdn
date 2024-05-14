import { EventEmitter } from '../../../stencil-public-runtime';
import { headerResizeEventDetail } from './utils/header.interface';
export declare class TpHeader {
    el: HTMLElement;
    /**
     * todo
     */
    headerResize: EventEmitter<headerResizeEventDetail>;
    private hostHeight;
    private hostResizeObserver;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private setSize;
    render(): any;
}
