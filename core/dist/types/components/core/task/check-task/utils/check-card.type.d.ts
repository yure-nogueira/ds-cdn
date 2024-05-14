import type { TpColor } from '../../../../../utils/types/color.type';
export type TpCheckCardType = {
    color: `${TpColor}`;
    alert: boolean;
    titulo: string;
    categoria: string;
    horaInicial: string;
    horaFinal: string;
    dataInicial: string;
    dataFinal: string;
    iconName: string;
};
