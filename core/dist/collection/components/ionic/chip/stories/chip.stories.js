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
import { defineCustomElement as defineCustomElementChip } from "@ionic/core/components/ion-chip";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
import { TP_ION_CHIP } from "../utils/chip.constants";
defineCustomElementChip();
defineCustomElementIcon();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Chip',
    argTypes: {
        ['tp-size']: {
            control: { type: 'check' },
            options: [...TP_ION_CHIP['tp-size']],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_ION_CHIP['tp-size'].join('|') },
            },
        },
        ['tp-active']: {
            control: 'boolean',
            description: 'Define a estilização do estado ativo do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
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
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-chip
      ?outline="${args['tp-active']}"
      size="${args['tp-size']}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-label>ion-chip</ion-label>
    </ion-chip>

    <ion-chip
      ?outline="${args['tp-active']}"
      size="${args['tp-size']}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
      <ion-label>ion-chip</ion-label>
    </ion-chip>

    <ion-chip
      ?outline="${args['tp-active']}"
      size="${args['tp-size']}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-label>ion-chip</ion-label>
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
    </ion-chip>

    <ion-chip
      ?outline="${args['tp-active']}"
      size="${args['tp-size']}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
      <ion-label>ion-chip</ion-label>
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
    </ion-chip>
  `;
    },
};
//# sourceMappingURL=chip.stories.js.map
