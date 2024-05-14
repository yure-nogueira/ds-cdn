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
import { defineCustomElement as defineCustomElementBadge } from "@ionic/core/components/ion-badge";
import { html } from "lit";
defineCustomElementBadge();
const meta = {
    title: 'components/Core/Base',
    argTypes: {
        radius: {
            control: { type: 'select' },
            options: ['s00', 's02', 's04', 's08'],
            description: 'Define o valor de radius do componente.',
            table: {
                type: { summary: 's00 | s02 | s04 | s08' },
                defaultValue: { summary: 'undefined' },
            },
        },
        gap: {
            control: { type: 'select' },
            options: ['s00', 's02', 's04', 's08'],
            description: 'Define o valor de gap do componente.',
            table: {
                type: { summary: 's00 | s02 | s04 | s08' },
                defaultValue: { summary: 'undefined' },
            },
        },
        spacingH: {
            control: { type: 'select' },
            options: ['s00', 's02', 's04', 's08', 's12', 's16', 's24'],
            description: 'Define o valor de padding horizontal do componente.',
            table: {
                type: { summary: 's00 | s02 | s04 | s08 | s12 | s16 | s24' },
                defaultValue: { summary: 'undefined' },
            },
        },
        spacingV: {
            control: { type: 'select' },
            options: ['s00', 's02', 's04', 's08', 's12', 's16', 's24'],
            description: 'Define o valor de padding vertical do componente.',
            table: {
                type: { summary: 's00 | s02 | s04 | s08 | s12 | s16 | s24' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
    args: {},
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-base
        color=${args.color}
        radius=${args.radius}
        gap=${args.gap}
        spacing-v=${args.spacingV}
        spacing-h=${args.spacingH}
      >
        <ion-text slot="start"><span>Left</span></ion-text>
        <ion-text class="middle" slot="middle"><span>Middle</span></ion-text>
        <ion-text slot="end"><span>Right</span></ion-text>
      </tp-base>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-base/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=base.stories.js.map
