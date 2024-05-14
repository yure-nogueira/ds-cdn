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
import { defineCustomElement as defineCustomElementCheckbox } from "@ionic/core/components/ion-checkbox";
import { html } from "lit";
defineCustomElementCheckbox();
const meta = {
    title: 'components/Ionic/Checkbox/Ionic-6',
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Define a estilização do estado checked do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        indeterminate: {
            control: 'boolean',
            description: 'Define a estilização do estado indeterminate do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
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
        return html `
    <ion-checkbox
      color="${args.color}"
      ?checked="${args.checked}"
      ?indeterminate="${args.indeterminate}"
      ?disabled="${args.disabled}"
    ></ion-checkbox>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-checkbox/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=checkbox.stories.js.map
