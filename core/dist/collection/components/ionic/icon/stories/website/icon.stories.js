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
import { TP_ICONS_STORYBOOK } from "../../../../../utils/constants/icon.constant";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
import { TP_ION_ICON } from "../../utils/icon.constant";
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Icon/Website',
    argTypes: {
        color: {
            control: { type: 'select' },
            options: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS],
            description: `Define a cor do componente.

**OBS**: As cores **'${TpColorAula.Aula}'**, **'${TpColorMaterial.Material}'**, **'${TpColorQuestoes.Questoes}'**, **'${TpColorRevalida.Revalida}'** e **'${TpColorProvas.Provas}'** estão disponiveis apenas no theme **MedSoft**.

**OBS**: A cor **'${TpColorOrange.Orange}'** está disponivel apenas no theme **Recursos**.`,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: [
                        ...TP_COLORS,
                        ...TP_COLORS_MEDSOFT,
                        ...TP_COLORS_RECURSOS,
                    ].join('|'),
                },
            },
        },
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
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_ION_ICON['tp-size'].join('|') },
            },
        },
    },
    args: {
        src: `${TP_ICONS_STORYBOOK[0]}`,
        color: 'neutral-10',
    },
};
export default meta;
export const DefaultMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./assets/${args.src}`;
        return html ` <ion-icon src="${iconUrl}" color="${args.color}"></ion-icon> `;
    },
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const SizeMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <div class="markup-flex">
      <ion-icon
        src="./assets/tp-activity.svg"
        tp-size="sm"
        color="${args.color}"
      ></ion-icon>

      <ion-icon
        src="./assets/tp-activity.svg"
        tp-size="md"
        color="${args.color}"
      ></ion-icon>

      <ion-icon
        src="./assets/tp-activity.svg"
        tp-size="lg"
        color="${args.color}"
      ></ion-icon>
    </div>
  `;
    },
};
SizeMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-icon color="${args.color}" src="./assets/tp-activity.svg"></ion-icon>
  `;
    },
};
//# sourceMappingURL=icon.stories.js.map
