import { TpColor } from '../../../utils/types/color.type';
export declare class TpToggle {
    private iconUp;
    host: HTMLElement;
    element?: HTMLElement;
    /**
     * todo
     */
    color?: TpColor;
    /**
     * todo
     */
    collapsed: boolean;
    /**
     * todo
     */
    iconClick: boolean;
    componentDidLoad(): void;
    setHeight(): void;
    open(): void;
    close(): void;
    toggle(): void;
    onClickComponent(): void;
    onClickIcon(): void;
    render(): any;
}
