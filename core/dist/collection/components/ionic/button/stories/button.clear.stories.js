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
import { defineCustomElement as defineCustomElementButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { html } from "lit";
import { TP_ION_BUTTON } from "../utils/button.constant";
defineCustomElementButton();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Button',
    argTypes: {
        size: {
            control: { type: 'select' },
            options: [...TP_ION_BUTTON.clear.size],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_ION_BUTTON.clear.size.join('|') },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        'tp-no-padding': {
            control: 'boolean',
            description: 'Remove o padding lateral do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
    },
};
export default meta;
export const Clear = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-button
      fill="clear"
      color="${args.color}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?tp-no-padding="${args['tp-no-padding']}"
    >
      ion-button
    </ion-button>

    <ion-button
      fill="clear"
      color="${args.color}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?tp-no-padding="${args['tp-no-padding']}"
    >
      <ion-icon slot="start" src="./assets/tp-chevron-left.svg"></ion-icon>
      ion-button
    </ion-button>

    <ion-button
      fill="clear"
      color="${args.color}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?tp-no-padding="${args['tp-no-padding']}"
    >
      <ion-icon slot="end" src="./assets/tp-chevron-right.svg"></ion-icon>
      ion-button
    </ion-button>
  `;
    },
};
//# sourceMappingURL=button.clear.stories.js.map
