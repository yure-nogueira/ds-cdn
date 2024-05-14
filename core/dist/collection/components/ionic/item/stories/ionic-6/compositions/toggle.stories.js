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
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementList } from "@ionic/core/components/ion-list";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { defineCustomElement as defineCustomElementToggle } from "@ionic/core/components/ion-toggle";
import { html } from "lit";
import { TP_SPACING } from "../../../../../../utils/constants/spacing.constants";
defineCustomElementItem();
defineCustomElementList();
defineCustomElementText();
defineCustomElementToggle();
const meta = {
    title: 'components/Ionic/Item/Ionic-6/Compositions',
    argTypes: {
        lines: {
            control: { type: 'check' },
            options: ['full'],
            description: 'Define se o componente terá um border bottom.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: ['full'].join('|'),
                },
            },
        },
        ['tp-gap']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-gap']],
            description: 'Define qual o espaçamento entre o icone e o texto do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_SPACING['tp-gap'].join('|'),
                },
            },
        },
        ['tp-spacingx']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingx']],
            description: 'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_SPACING['tp-spacingx'].join('|'),
                },
            },
        },
        ['tp-spacingy']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingy']],
            description: 'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_SPACING['tp-spacingy'].join('|'),
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
export const Toggle = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-list>
      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        button
        ?disabled="${args.disabled}"
      >
        <ion-toggle label-placement="start" justify="space-between">
          <ion-text>
            Lorem ipsum, dolor sit amet consectetur.
          </ion-text
        </ion-toggle>
      </ion-item>

      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        button
        ?disabled="${args.disabled}"
      >
        <ion-toggle label-placement="end" justify="space-between">
          <ion-text>
            Lorem ipsum, dolor sit amet consectetur.
          </ion-text
        </ion-toggle>
      </ion-item>
    </ion-list>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=toggle.stories.js.map
