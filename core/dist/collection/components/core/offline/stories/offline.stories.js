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
    title: 'components/Core/Offline',
    argTypes: {
        offlineTitle: {
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
        offlineText: {
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
    },
    args: {
        offlineTitle: 'Você está offline',
        offlineText: 'Conecte-se à internet para visualizar esse conteúdo',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-offline
        offline-title=${args.offlineTitle}
        offline-text=${args.offlineText}
      ></tp-offline>
    `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=offline.stories.js.map
