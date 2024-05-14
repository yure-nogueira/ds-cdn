import { TpColor } from '../../../../components';
import { TpEnumPaginationDirection, TpEnumPaginationRole, TpEnumPaginationSize } from './pagination.enum';
export type TpPaginationRole = `${TpEnumPaginationRole}` | null;
export type TpPaginationSize = `${TpEnumPaginationSize}`;
export type TpPaginationDirection = `${TpEnumPaginationDirection}`;
export interface TpPaginationButtonConfig {
    label?: number | string;
    role: TpPaginationRole;
    direction?: TpPaginationDirection;
}
export interface TpPaginationConfig {
    ROLE: Record<string, TpEnumPaginationRole>;
    DIRECTION: Record<string, TpEnumPaginationDirection>;
    SIZES: TpPaginationSize[];
    BUTTON_LIMIT: number;
    HIDDEN_BUTTON_LABEL: string;
    DEFAULT_COLOR: TpColor;
    DEFAULT_SIZE: TpPaginationSize;
}
