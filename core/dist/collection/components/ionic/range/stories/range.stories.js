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
import { defineCustomElement } from "@ionic/core/components/ion-range";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Range',
    argTypes: {
        ['tp-secondary']: {
            control: { type: 'boolean' },
            description: 'Define a variação do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'Secondary',
                },
            },
        },
        ticks: {
            control: 'boolean',
            description: 'Define se o componente terá ticks em sua extensão.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        snaps: {
            control: 'boolean',
            description: 'Se ticks for ativado este atributo deve ser juntamente ativado.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        min: {
            control: 'number',
            description: 'Define o valor inteiro mínimo do intervalo de ticks.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number',
                },
            },
        },
        max: {
            control: 'number',
            description: 'Define o valor inteiro máximo do intervalo de ticks.',
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
        ticks: true,
        snaps: true,
        min: 0,
        max: 10,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-range
      color="${args.color}"
      ?tp-secondary="${args['tp-secondary']}"
      aria-label="volume"
    ></ion-range>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-range/gi)).toBeTruthy();
    }, */
};
export const Ticks = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-range
      color="${args.color}"
      ?tp-secondary="${args['tp-secondary']}"
      aria-label="volume"
      ?ticks="${args.ticks}"
      ?snaps="${args.snaps}"
      min="${args.min}"
      max="${args.max}"
    ></ion-range>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-range/gi)).toBeTruthy();
    }, */
};
Default.argTypes = {
    ticks: { table: { disable: true } },
    snaps: { table: { disable: true } },
    min: { table: { disable: true } },
    max: { table: { disable: true } },
};
//# sourceMappingURL=range.stories.js.map
