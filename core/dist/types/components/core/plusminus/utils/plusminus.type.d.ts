import type { TpColor } from '../../../../utils/types/color.type';
import { TpPlusMinusDisabled, TpPlusMinusStatus } from './plusminus.enum';
export type TpPlusMinusType = {
    color: `${TpColor}`;
    disabled: `${TpPlusMinusDisabled}`;
    status: `${TpPlusMinusStatus}`;
    size: string;
};
