import { EventEmitter } from '../../../../stencil-public-runtime';
import { TpColor } from '../../../../utils/types/color.type';
export declare class TpCheckCard {
    /**
     * todo
     */
    color?: TpColor;
    /**
     * todo
     */
    alert: boolean;
    /**
     * todo
     */
    titulo?: string;
    /**
     * todo
     */
    categoria?: string;
    /**
     * todo
     */
    horaInicial?: string;
    /**
     * todo
     */
    horaFinal?: string;
    /**
     * todo
     */
    dataInicial?: string;
    /**
     * todo
     */
    dataFinal?: string;
    /**
     * todo
     */
    finalizada?: string;
    /**
     * todo
     */
    iconName?: string;
    /**
     * todo
     */
    tpClick: EventEmitter;
    /**
     * todo
     */
    tpTooltipClose: EventEmitter;
    onClick(): void;
    onTooltipCloseClick(): void;
    render(): any;
}
