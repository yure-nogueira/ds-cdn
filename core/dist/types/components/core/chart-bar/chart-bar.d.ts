import type { TpColor } from '../../../utils/types/color.type';
export declare class TpChartBar {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define o valor da barra de progresso.
     */
    value: number;
    /**
     * Define a largura do componente.
     */
    width: number;
    /**
     * Define a altura do componente.
     */
    height: number;
    /**
     * Define se um slot será disponibilizado para receber o label do chart.
     */
    noLabel: boolean;
    render(): any;
}
