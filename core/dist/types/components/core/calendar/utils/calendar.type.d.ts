export type TpCalendarTimeframe = 'Semana' | 'Mês';
export type TpCalendarChangeDirection = 'left' | 'right';
export type TpCalendarWeekday = 'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sab' | 'Dom';
export interface TpCalendarConfig {
    icons: {
        chevronRight: string;
        chevronLeft: string;
        chevronDown: string;
    };
    weekdays: TpCalendarWeekday[];
    timeframes: {
        week: TpCalendarTimeframe;
        month: TpCalendarTimeframe;
    };
    directions: {
        left: TpCalendarChangeDirection;
        right: TpCalendarChangeDirection;
    };
}
