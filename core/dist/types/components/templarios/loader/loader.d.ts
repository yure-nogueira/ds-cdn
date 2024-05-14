import type { TpColor } from '../../../utils/types/color.type';
import { TpLoaderType } from './utils/loader.type';
export declare class TpLoader {
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a posição do componente.
     */
    fixed: boolean;
    /**
     * Define a variação do componente.
     */
    tpName?: TpLoaderType['tp-name'];
    render(): any;
}
