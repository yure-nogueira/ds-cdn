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
import { defineCustomElement } from "@ionic/core/components/ion-badge";
import { html } from "lit";
import { TP_ION_BADGE } from "../utils/badge.constant";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Badge',
    argTypes: {
        'tp-size': {
            control: { type: 'check' },
            options: [...TP_ION_BADGE['tp-size']],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_BADGE['tp-size'].join('|'),
                },
            },
        },
        'tp-fill': {
            control: { type: 'check' },
            options: [...TP_ION_BADGE['tp-fill']],
            description: 'Define o preenchimento do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_BADGE['tp-fill'].join('|'),
                },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html ` <ion-badge
      color="${args.color}"
      tp-size="${args['tp-size']}"
      tp-fill="${args['tp-fill']}"
      >ion-badge</ion-badge
    >`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=badge.stories.js.map
