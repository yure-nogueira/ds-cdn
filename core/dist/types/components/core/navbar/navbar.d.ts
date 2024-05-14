import { TpColor } from '../../../utils/types/color.type';
export declare class TpNavbar {
    el: HTMLElement;
    /**
     * todo
     */
    color?: TpColor;
    /**
     * todo
     */
    name?: 'secondary' | 'transparent';
    private leftEl;
    private rightEl;
    private centerEl;
    private sidesResizeObserver;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private setSize;
    render(): any;
}
