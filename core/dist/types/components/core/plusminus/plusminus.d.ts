import { EventEmitter } from '../../../stencil-public-runtime';
import { TpColor } from '../../../utils/types/color.type';
import { TpPlusMinusStatus } from './utils/plusminus.enum';
export declare class TpPlusMinus {
    private iconMinus;
    private iconPlus;
    /**
     * todo
     */
    color?: TpColor;
    /**
     * todo
     */
    size?: 'xl';
    /**
     * todo
     */
    tpChange: EventEmitter<TpPlusMinusStatus>;
    /**
     * todo
     */
    tpChangeAlt: EventEmitter<number>;
    /**
     * todo
     */
    disabled?: 'minus' | 'plus' | 'both';
    /**
     * true se deve desabilitar os controles automaticamente
     */
    automaticDisabled: boolean;
    /**
     * Deverá ser true se o valor atual vai ser passado por slot, false se vai ser passado por prop
     */
    useSlot: boolean;
    /**
     * O valor atual (apenas se useSlot é false)
     */
    value?: number;
    /**
     * O valor mínimo
     */
    min?: number;
    /**
     * O valor máximo
     */
    max?: number;
    disabledHandler(newValue: number, _: number): "minus" | "plus" | "both";
    private onClick;
    componentDidLoad(): void;
    render(): any;
}
