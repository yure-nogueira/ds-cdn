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
import { defineCustomElement } from "@ionic/core/components/ion-progress-bar";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Progress Bar',
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: `Define a estilização do progresso do componente.`,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number',
                },
            },
        },
    },
    args: {
        value: 50,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-progress-bar
      color="${args.color}"
      value="${args.value / 100}"
    ></ion-progress-bar>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=progress-bar.stories.js.map
