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
import { defineCustomElement as defineCustomElementButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElementButton();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Button/Website',
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
    },
};
export default meta;
export const SolidMarkup = {
    render: () => html `
    <ion-button>Default</ion-button>
    <ion-button disabled>Disabled</ion-button>
  `,
};
SolidMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const FillMarkup = {
    render: () => html `
    <ion-button fill="clear">Clear</ion-button>
    <ion-button fill="outline">Outline</ion-button>
    <ion-button>Default</ion-button>
  `,
};
FillMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const SizeMarkup = {
    render: () => html `
    <div class="markup-button-size">
      <ion-button size="xs">Pequeno</ion-button>
      <ion-button size="sm">Médio</ion-button>
      <ion-button>Padrão</ion-button>
    </div>

    <div class="markup-button-size">
      <ion-button fill="outline" size="xs">Pequeno</ion-button>
      <ion-button fill="outline" size="sm">Médio</ion-button>
      <ion-button fill="outline">Padrão</ion-button>
    </div>

    <div class="markup-button-size">
      <ion-button fill="clear" size="xxs">Muito pequeno</ion-button>
      <ion-button fill="clear" size="xs">Pequeno</ion-button>
      <ion-button fill="clear" size="sm">Médio</ion-button>
      <ion-button fill="clear">Padrão</ion-button>
    </div>
  `,
};
SizeMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const PaddingMarkup = {
    render: () => html `
    <ion-button fill="clear" tp-no-padding>Sem padding</ion-button>
  `,
};
PaddingMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const IconMarkup = {
    render: () => html `
    <ion-button fill="clear" size="xxs">
      <ion-icon
        slot="icon-only"
        src="./assets/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>

    <ion-button fill="clear" size="xs">
      <ion-icon
        slot="icon-only"
        src="./assets/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>

    <ion-button fill="clear" size="s">
      <ion-icon
        slot="icon-only"
        src="./assets/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>

    <ion-button fill="clear" size="sm">
      <ion-icon
        slot="icon-only"
        src="./assets/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>

    <ion-button fill="clear" size="lg">
      <ion-icon
        slot="icon-only"
        src="./assets/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>
  `,
};
IconMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-button color="${args.color}">Cores</ion-button>
  `;
    },
};
//# sourceMappingURL=button.stories.js.map
