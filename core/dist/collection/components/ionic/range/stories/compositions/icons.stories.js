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
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { defineCustomElement as defineCustomElementRange } from "@ionic/core/components/ion-range";
import { html } from "lit";
defineCustomElementRange();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Range/Compositions',
    argTypes: {
        ['tp-secondary']: {
            control: { type: 'boolean' },
            description: 'Define a variação do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'Secondary' },
            },
        },
        ticks: {
            control: 'boolean',
            description: 'Define se o componente terá ticks em sua extensão.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        snaps: {
            control: 'boolean',
            description: 'Se ticks for ativado este atributo deve ser juntamente ativado.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        min: {
            control: 'number',
            description: 'Define o valor inteiro mínimo do intervalo de ticks.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        max: {
            control: 'number',
            description: 'Define o valor inteiro máximo do intervalo de ticks.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
    },
    args: {
        ticks: true,
        snaps: true,
        min: 0,
        max: 10,
    },
};
export default meta;
export const Icons = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-range
      color="${args.color}"
      ?tp-secondary="${args['tp-secondary']}"
      ?ticks="${args.ticks}"
      ?snaps="${args.snaps}"
      min="${args.min}"
      max="${args.max}"
    >
      <ion-icon slot="start" src="./assets/tp-type-minus.svg"></ion-icon>
      <ion-icon slot="end" src="./assets/tp-type-plus.svg"></ion-icon>
    </ion-range>
  `;
    },
};
//# sourceMappingURL=icons.stories.js.map
