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
    title: 'components/Core/Tiles',
    argTypes: {
        titulo: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        label: {
            control: { type: 'text' },
            description: 'Define o texto do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        selected: {
            control: { type: 'boolean' },
            description: 'Define se o componente esta selecionado.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        solid: {
            control: { type: 'boolean' },
            description: 'Define se ... .',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
    args: {
        titulo: 'Titulo',
        label: 'Lorem ipsum dolor',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-tiles
        color=${args.color}
        titulo=${args.titulo}
        label=${args.label}
        ?selected=${args.selected}
        ?solid=${args.solid}
      >
        <ion-badge color="attention" tp-size="md">ion-badge</ion-badge>
      </tp-tiles>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-tiles/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=tiles.stories.js.map
