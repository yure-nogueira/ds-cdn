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
import { TP_ICONS_STORYBOOK } from "../../../../utils/constants/icon.constant";
import { TP_ION_ICON } from "../utils/icon.constant";
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Icon',
    argTypes: {
        src: {
            control: { type: 'select' },
            options: [...TP_ICONS_STORYBOOK],
            description: 'Define o path e nome do icone.',
        },
        'tp-size': {
            control: { type: 'select' },
            options: [...TP_ION_ICON['tp-size']],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ICON['tp-size'].join('|'),
                },
            },
        },
    },
    args: {
        src: `${TP_ICONS_STORYBOOK[0]}`,
    },
};
export default meta;
export const Icons = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./assets/${args.src}`;
        return html `<ion-icon
      color="${args.color}"
      tp-size="${args['tp-size']}"
      src="${iconUrl}"
    ></ion-icon>`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-icon/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=icon.stories.js.map
