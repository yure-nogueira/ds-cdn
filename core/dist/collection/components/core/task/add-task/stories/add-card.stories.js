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
import { TP_ICONS_STORYBOOK } from "../../../../../utils/constants/icon.constant";
const meta = {
    title: 'components/Core/Task/Add card',
    argTypes: {
        iconName: {
            control: { type: 'select' },
            options: [...TP_ICONS_STORYBOOK],
            description: 'Define o path e nome do icone.',
        },
        titulo: {
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
        titulo: 'Adicionar tarefa',
        iconName: `${TP_ICONS_STORYBOOK[1]}`,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./assets/${args.iconName}`;
        return html `
      <tp-add-card
        color=${args.color}
        icon-name=${iconUrl}
        titulo=${args.titulo}
      ></tp-add-card>
    `;
    },
};
//# sourceMappingURL=add-card.stories.js.map
