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
import { TP_BANNER } from "../utils/banner.constant";
const meta = {
    title: 'components/Elementor/Core/Banner',
    argTypes: {
        slideMode: {
            control: 'boolean',
            description: 'Define se o componente é ou não usado como slide.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        alignment: {
            control: { type: 'select' },
            options: TP_BANNER.ALIGNMENT_VALUES,
            description: 'Define o alinhamento do conteúdo do banner.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_BANNER.ALIGNMENT_VALUES.join('|') },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-banner ?slide-mode="${args.slideMode}" alignment="${args.alignment}">
      <img slot="image" src="https://placehold.co/1745x400" alt="" />
    </tp-banner>
  `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=banner.stories.js.map
