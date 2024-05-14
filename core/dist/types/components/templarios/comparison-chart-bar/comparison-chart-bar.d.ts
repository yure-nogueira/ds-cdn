import type { TpColor } from '../../../utils/types/color.type';
export declare class TpComparisonChartBar {
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a altura do componente.
     */
    containerHeight: number;
    /**
     * Define o valor da barra de progresso.
     */
    barValue: number;
    /**
     * Se 'true' o componente vai renderizar o marker.
     */
    hasMarker: boolean;
    /**
     * Define a posição do marker na coluna.
     */
    markerValue: number;
    /**
     * Define a estilização do estado disabled do componente.
     */
    disabled: boolean;
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
