import { getAssetPath } from "@stencil/core";
export const TP_CALENDAR = {
    icons: {
        chevronRight: getAssetPath('./assets/tp-chevron-right.svg'),
        chevronLeft: getAssetPath('./assets/tp-chevron-left.svg'),
        chevronDown: getAssetPath('./assets/tp-chevron-down.svg'),
    },
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    timeframes: {
        week: 'Semana',
        month: 'Mês',
    },
    directions: {
        left: 'left',
        right: 'right',
    },
};
//# sourceMappingURL=calendar.constant.js.map
