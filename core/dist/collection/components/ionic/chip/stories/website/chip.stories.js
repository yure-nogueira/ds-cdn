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
import { defineCustomElement as defineCustomElementChip } from "@ionic/core/components/ion-chip";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElementChip();
defineCustomElementIcon();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Chip/Website',
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
    <ion-chip>
      <ion-label>ion-chip</ion-label>
    </ion-chip>

    <ion-chip outline>
      <ion-label>ion-chip</ion-label>
    </ion-chip>

    <ion-chip disabled>
      <ion-label>ion-chip</ion-label>
    </ion-chip>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const SizeMarkup = {
    render: () => html `
    <ion-chip size="lg">
      <ion-label>ion-chip</ion-label>
    </ion-chip>
  `,
};
SizeMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const IconMarkup = {
    render: () => html `
    <ion-chip>
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
      <ion-label>ion-chip</ion-label>
    </ion-chip>

    <ion-chip>
      <ion-label>ion-chip</ion-label>
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
    </ion-chip>

    <ion-chip>
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
      <ion-label>ion-chip</ion-label>
      <ion-icon tp-size="md" src="./assets/tp-star.svg"></ion-icon>
    </ion-chip>
  `,
};
IconMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-chip color="${args.color}">
      <ion-label>ion-chip</ion-label>
    </ion-chip>
  `;
    },
};
//# sourceMappingURL=chip.stories.js.map
