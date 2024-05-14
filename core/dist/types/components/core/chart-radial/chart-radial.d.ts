import type { TpColor } from '../../../utils/types/color.type';
import { TpChartRadialSize } from './utils/chart-radial.enum';
import { TpChartRadialItem } from './utils/chart-radial.type';
export declare class TpChartRadial {
    host: HTMLElement;
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define o tamanho do componente.
     */
    size?: TpChartRadialSize;
    /**
     * Define os valores representados pelo componente.
     */
    items: TpChartRadialItem[];
    updateTrackColors(): void;
    componentDidLoad(): void;
    render(): any;
}
