import type { TpColor } from '../../../utils/types/color.type';
export declare class TpTooltip {
    /**
     * todo
     */
    color?: TpColor;
    /**
     * Habilita o toggle no hover.
     */
    hover?: boolean;
    /**
     * Define posicionamento em relação ao componente parent.
     */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Define posicionamento horizontal do componente.
     */
    position?: 'start' | 'center' | 'end';
    /**
     * Define a variação de estado do componente.
     */
    collapsed: boolean;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    /**
     * todo
     */
    toggle(event?: any): Promise<void>;
    /**
     * todo
     */
    toggleOnHover(event?: any): Promise<void>;
    render(): any;
}
