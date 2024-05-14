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
import { defineCustomElement } from "@ionic/core/components/ion-back-button";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
import { TP_ION_BACK_BUTTON } from "../../utils/back-button.constant";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Back-button/Website',
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
        ['tp-size']: {
            control: { type: 'select' },
            options: [...TP_ION_BACK_BUTTON['tp-size']],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_ION_BACK_BUTTON['tp-size'].join('|') },
            },
        },
    },
};
export default meta;
export const DefaultMarkup = {
    render: () => html `
    <ion-back-button icon="./assets/tp-chevron-left.svg" mode="ios" text="">
    </ion-back-button>

    <ion-back-button
      disabled
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-size': { table: { disable: true } },
};
export const SizeMarkup = {
    render: () => html `
    <ion-back-button
      tp-size="xxs"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>

    <ion-back-button
      tp-size="xs"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>

    <ion-back-button
      tp-size="s"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>

    <ion-back-button
      tp-size="sm"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>

    <ion-back-button
      tp-size="md"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>

    <ion-back-button
      tp-size="lg"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>
  `,
};
SizeMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-back-button
      color="${args.color}"
      icon="./assets/tp-chevron-left.svg"
      mode="ios"
      text=""
    >
    </ion-back-button>
  `;
    },
};
ColorsMarkup.argTypes = {
    'tp-size': { table: { disable: true } },
};
//# sourceMappingURL=back-button.stories.js.map
