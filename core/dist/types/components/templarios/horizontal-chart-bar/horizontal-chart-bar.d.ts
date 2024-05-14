import type { TpColor } from '../../../utils/types/color.type';
import { TpHorizontalChartBarSize } from './utils/horizontal-chart-bar.enum';
export declare class TpHorizontalChartBar {
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a variação de tamanho do componente.
     */
    size?: TpHorizontalChartBarSize;
    /**
     * Define o valor da barra de progresso.
     */
    value: number;
    /**
     * Define o valor máximo da barra de progresso.
     */
    maxCount: number;
    /**
     * Define se um slot será disponibilizado para receber o label do chart.
     */
    noLabel: boolean;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    render(): any;
}
