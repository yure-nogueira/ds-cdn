import { TpColor } from '../../../utils/types/color.type';
export declare class TpBase {
    /**
     * todo
     */
    color?: TpColor;
    /**
     * todo
     */
    radius?: 's00' | 's02' | 's04' | 's08' | string;
    /**
     * todo
     */
    gap?: 's00' | 's02' | 's04' | 's08' | string;
    /**
     * todo
     */
    spacingV?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;
    /**
     * todo
     */
    spacingH?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;
    render(): any;
}
