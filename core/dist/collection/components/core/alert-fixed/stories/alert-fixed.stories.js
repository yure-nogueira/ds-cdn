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
import { defineCustomElement as defineCustomElementSkeletonText } from "@ionic/core/components/ion-skeleton-text";
import { html } from "lit";
import { TP_ICONS_STORYBOOK } from "../../../../utils/constants/icon.constant";
defineCustomElementSkeletonText();
const meta = {
    title: 'components/Core/Alert fixed',
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: [...TP_ICONS_STORYBOOK],
            description: 'Define o icone.',
        },
        text: {
            control: 'text',
            description: 'Define o texto a ser exibido no componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string',
                },
            },
        },
    },
    args: {
        color: 'provas-4',
        icon: `${TP_ICONS_STORYBOOK[1]}`,
        text: 'Versão desatualizada',
    },
};
export default meta;
export const Desatualizado = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./assets/${args.icon}`;
        return html `
      <tp-alert-fixed color="${args.color}">
        <ion-icon
          class="tp-alert-fixed__icon"
          slot="icon"
          tp-size="sm"
          src="${iconUrl}"
        ></ion-icon>
        <ion-text class="tp-alert-fixed__text" slot="text" tp-type="p12x">
          ${args.text}
        </ion-text>
      </tp-alert-fixed>
    `;
    },
};
export const Offline = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./assets/${args.icon}`;
        return html `
      <tp-alert-fixed color="${args.color}">
        <ion-icon
          class="tp-alert-fixed__icon"
          slot="icon"
          tp-size="sm"
          src="${iconUrl}"
        ></ion-icon>
        <ion-text class="tp-alert-fixed__text" slot="text" tp-type="p12x">
          ${args.text}
        </ion-text>
      </tp-alert-fixed>
    `;
    },
};
//# sourceMappingURL=alert-fixed.stories.js.map
