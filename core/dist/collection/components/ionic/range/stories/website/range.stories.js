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
import { defineCustomElement } from "@ionic/core/components/ion-range";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Range/Website',
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
    render: () => html ` <ion-range></ion-range> `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const TicksMarkup = {
    render: () => html ` <ion-range ticks snaps min="0" max="10"> </ion-range> `,
};
TicksMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const SizeMarkup = {
    render: () => html ` <ion-range tp-secondary></ion-range> `,
};
SizeMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-range color="${args.color}"></ion-range>
  `;
    },
};
export const IconsMarkup = {
    render: () => html `
    <ion-range>
      <ion-icon slot="start" src="./assets/tp-type-minus.svg"></ion-icon>
      <ion-icon slot="end" src="./assets/tp-type-plus.svg"></ion-icon>
    </ion-range>
  `,
};
IconsMarkup.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=range.stories.js.map
