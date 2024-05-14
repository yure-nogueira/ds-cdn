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
import { html } from "lit";
import { TP_PLUSMINUS } from "../utils/plusminus.constant";
defineCustomElementIcon();
const meta = {
    title: 'components/Core/Plusminus',
    argTypes: {
        disabled: {
            control: { type: 'select' },
            options: [...TP_PLUSMINUS.disabled],
            description: 'Define o que estará disabled no componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_PLUSMINUS.disabled.join('|') },
            },
        },
        size: {
            control: { type: 'check' },
            options: ['xl'],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: ['xl'].join('|') },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-plusminus
        color=${args.color}
        disabled=${args.disabled}
        size=${args.size}
      >
        500
      </tp-plusminus>
    `;
    },
};
//# sourceMappingURL=plusminus.stories.js.map
