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
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementList } from "@ionic/core/components/ion-list";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../../utils/enums/color.enum";
defineCustomElementList();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/List/Website',
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
export const DefaultMarkup = {
    render: () => html `
    <ion-list>
      <ion-item>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const BorderMarkup = {
    render: () => html `
    <ion-list lines="full">
      <ion-item>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `,
};
BorderMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-list>
      <ion-item color="${args.color}">
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item color="${args.color}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item color="${args.color}">
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>

      <ion-item color="${args.color}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `;
    },
};
//# sourceMappingURL=list.stories.js.map
