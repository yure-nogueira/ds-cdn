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
import { defineCustomElement } from "@ionic/core/components/ion-text";
import { html } from "lit";
import { TP_TYPE } from "../../../../../utils/constants/type.constant";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Text/Website',
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
        ['tp-type']: {
            control: { type: 'select' },
            options: [...TP_TYPE],
            description: 'Define a estilização do texto do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_TYPE.join('|') },
            },
        },
    },
    args: {
        'tp-type': 'p16b',
    },
};
export default meta;
export const DefaultMarkup = {
    render: () => html `
    <ion-text tp-type="h24">
      <h1>Lorem ipsum, dolor sit amet consectetur.</h1>
    </ion-text>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-type': { table: { disable: true } },
};
export const TypeMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-text tp-type="${args['tp-type']}">
      <h1>Lorem ipsum, dolor sit amet consectetur.</h1>
    </ion-text>
  `;
    },
};
TypeMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-text color="${args.color}" tp-type="p16b">
      <p>Lorem ipsum, dolor sit amet consectetur.</p>
    </ion-text>
  `;
    },
};
ColorsMarkup.argTypes = {
    'tp-type': { table: { disable: true } },
};
//# sourceMappingURL=text.stories.js.map
