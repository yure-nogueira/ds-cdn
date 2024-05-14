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
     * Define a variação de tamanho do componente.
     */
    size?: TpChartRadialSize;
    /**
     * Define o valor representado pelo componente.
     */
    items: TpChartRadialItem[];
    updateTrackColors(): void;
    componentDidLoad(): void;
    render(): any;
}
