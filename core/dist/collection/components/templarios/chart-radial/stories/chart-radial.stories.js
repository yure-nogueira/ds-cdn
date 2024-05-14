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
import { html } from "lit";
import { TP_CHART_RADIAL } from "../utils/chart-radial.constant";
const meta = {
    title: 'components/Templarios/Chart radial',
    argTypes: {
        size: {
            control: { type: 'select' },
            options: [...TP_CHART_RADIAL['sizes']],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_CHART_RADIAL['sizes'].join('|') },
            },
        },
        items: {
            description: 'Define os valores do gráfico.',
            control: { type: 'array' },
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'TpChartRadialItem[]' },
            },
        },
    },
    args: {
        items: [
            {
                color: 'brand-4',
                label: 'acertos',
                quantity: 65,
                ignore: false,
            },
            {
                color: undefined,
                label: 'restantes',
                quantity: 35,
                ignore: true,
            },
        ],
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        setTimeout(() => {
            const host = document.querySelector('tp-chart-radial');
            host.items = args.items;
        }, 0);
        return html `
      <tp-chart-radial color="${args.color}" size="${args.size}">
      </tp-chart-radial>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=chart-radial.stories.js.map
