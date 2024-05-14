import { TpEnumPaginationDirection, TpEnumPaginationRole, TpEnumPaginationSize, } from "./pagination.enum";
export const TP_PAGINATION = {
    ROLE: Object.fromEntries(Object.entries(TpEnumPaginationRole)),
    DIRECTION: Object.fromEntries(Object.entries(TpEnumPaginationDirection)),
    SIZES: Object.values(TpEnumPaginationSize),
    BUTTON_LIMIT: 5,
    HIDDEN_BUTTON_LABEL: '...',
    DEFAULT_COLOR: 'neutral-2',
    DEFAULT_SIZE: 'xs',
};
//# sourceMappingURL=pagination.contant.js.map
