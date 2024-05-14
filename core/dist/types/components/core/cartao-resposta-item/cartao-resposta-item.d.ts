import { TpColor } from '../../../utils/types/color.type';
export declare class TpCartaoRespostaItem {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define a estilização de cor do componente (line-through).
     */
    canceled: boolean;
    /**
     * Define a estilização de cor do componente (background).
     */
    printed: boolean;
    /**
     * Define a estilização de cor do componente (background com gradient).
     */
    active: boolean;
    /**
     * Define a estilização de cor do componente (color warning).
     */
    incorrect: boolean;
    /**
     * Define a estilização de cor do componente (color success).
     */
    correct: boolean;
    /**
     * Define a estilização de cor do componente (color brand).
     */
    discursive: boolean;
    render(): any;
}
