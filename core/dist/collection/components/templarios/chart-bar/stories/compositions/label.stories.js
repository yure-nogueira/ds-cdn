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
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementSkeletonText } from "@ionic/core/components/ion-skeleton-text";
import { html } from "lit";
defineCustomElementLabel();
defineCustomElementSkeletonText();
const meta = {
    title: 'components/Templarios/Chart Bar/Compositions',
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Define o valor da barra de progresso.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number',
                },
            },
        },
        width: {
            control: { type: 'number' },
            description: 'Define a largura do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number',
                },
            },
        },
        height: {
            control: { type: 'number', min: 1 },
            description: 'Define a altura do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number',
                },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Define a estilização do estado loading do componente.',
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
    args: {
        value: 0,
        height: 50,
        width: 32,
    },
};
export default meta;
export const Label = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-chart-bar
      color="${args.color}"
      value="${args.value}"
      width="${args.width}"
      height="${args.height}"
      ?loading="${args.loading}"
    >
      <ion-label tp-type="p12b"> ${args.value}% </ion-label>
    </tp-chart-bar>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=label.stories.js.map
