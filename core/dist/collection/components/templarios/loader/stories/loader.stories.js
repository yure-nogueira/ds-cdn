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
import { TP_LOADER } from "../utils/loader.constants";
import { TpLoaderName } from "../utils/loader.enum";
const meta = {
    title: 'components/Templarios/Loader',
    argTypes: {
        ['tp-name']: {
            control: { type: 'select' },
            options: [...TP_LOADER['tp-name']],
            description: 'Define a variação do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'secondary',
                },
            },
        },
        fixed: {
            control: 'boolean',
            description: `Define a posição do componente.

**OBS**: O atributo **fixed** não está disponível quando o **tp-name="${TpLoaderName.SECONDARY}"** .`,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `<tp-loader
      color="${args.color}"
      ?fixed="${args.fixed}"
      tp-name="${args['tp-name']}"
    ></tp-loader>`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-loader/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=loader.stories.js.map
