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
import { html } from "lit";
const meta = {
    title: 'components/Core/Cartão resposta item',
    argTypes: {
        canceled: {
            control: { type: 'boolean' },
            description: 'Define a estilização de cor do componente (line-through).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        printed: {
            control: { type: 'boolean' },
            description: 'Define a estilização de cor do componente (background).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        active: {
            control: { type: 'boolean' },
            description: 'Define a estilização de cor do componente (background com gradient).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        incorrect: {
            control: { type: 'boolean' },
            description: 'Define a estilização de cor do componente (color warning).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        correct: {
            control: { type: 'boolean' },
            description: 'Define a estilização de cor do componente (color success).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        discursive: {
            control: { type: 'boolean' },
            description: 'Define a estilização de cor do componente (color brand).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        slot: {
            control: { type: 'text' },
            description: 'Define o texto do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
        },
    },
    args: {
        slot: '01',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-cartao-resposta-lista>
        <tp-cartao-resposta-item
          color=${args.color}
          ?active=${args.active}
          ?printed=${args.printed}
          ?canceled=${args.canceled}
          ?incorrect=${args.incorrect}
          ?correct=${args.correct}
          ?discursive=${args.discursive}
        >
          ${args.slot}
        </tp-cartao-resposta-item>
      </tp-cartao-resposta-lista>
    `;
    },
};
//# sourceMappingURL=cartao-resposta-item.stories.js.map
