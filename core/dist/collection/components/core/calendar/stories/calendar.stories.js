var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { withActions } from "@storybook/addon-actions/decorator";
import { html } from "lit";
import { TpCalendarTimeframe } from "../utils/calendar.enum";
const meta = {
    component: 'TpCalendar',
    title: 'components/Core/Calendar',
    decorators: [withActions],
    parameters: {
        actions: {
            handles: ['tpCalendarChange', 'tpTimeframeToggle'],
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Define a etiqueta do conteúdo sendo mostrado.',
            table: {
                defaultValue: {
                    summary: 'Janeiro 2024',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        initialTimeframe: {
            control: { type: 'select' },
            options: Object.values(TpCalendarTimeframe),
            description: 'Define o valor inicial do intervalo de tempo que representa o conteúdo sendo mostrado.',
            table: {
                defaultValue: {
                    summary: 'Semana',
                },
                type: {
                    summary: Object.values(TpCalendarTimeframe).join(' |'),
                },
            },
        },
    },
    args: {
        label: 'Janeiro 2024',
        initialTimeframe: 'Mês',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-calendar
        color=${args.color}
        label=${args.label}
        initial-timeframe=${args.initialTimeframe}
      >
        <tp-calendar-day active>1</tp-calendar-day>
        <tp-calendar-day outlined>2</tp-calendar-day>
        <tp-calendar-day checked>3</tp-calendar-day>
        <tp-calendar-day disabled>4</tp-calendar-day>
        ${getCalenderDaysHtml(27)}
      </tp-calendar>
    `;
    },
};
/**
 * Helper functions
 */
const getCalenderDaysHtml = (dayCount) => {
    const days = Array.from({ length: dayCount }, (_, index) => index + 5);
    return days.map((day) => html `<tp-calendar-day>${day}</tp-calendar-day>`);
};
//# sourceMappingURL=calendar.stories.js.map
