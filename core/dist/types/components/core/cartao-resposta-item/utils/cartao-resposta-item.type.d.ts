import type { TpColor } from '../../../../utils/types/color.type';
export type TpCartaoRespostaItemType = {
    color: `${TpColor}`;
    canceled: boolean;
    printed: boolean;
    active: boolean;
    incorrect: boolean;
    correct: boolean;
    discursive: boolean;
    slot: string;
};
