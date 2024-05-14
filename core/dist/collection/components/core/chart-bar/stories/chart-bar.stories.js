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
const meta = {
    title: 'components/Core/Chart bar',
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Define o valor da barra de progresso.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        width: {
            control: { type: 'number', min: 1 },
            description: 'Define a largura do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        height: {
            control: { type: 'number', min: 1 },
            description: 'Define a altura do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
    },
    args: {
        value: 0,
        height: 50,
        width: 32,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-chart-bar
      color="${args.color}"
      value="${args.value}"
      width="${args.width}"
      height="${args.height}"
      no-label
    >
    </tp-chart-bar>
  `;
    },
};
//# sourceMappingURL=chart-bar.stories.js.map
