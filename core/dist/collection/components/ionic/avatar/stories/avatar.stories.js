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
import { defineCustomElement as defineCustomElementAvatar } from "@ionic/core/components/ion-avatar";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../utils/enums/color.enum";
import { TP_ION_AVATAR } from "../utils/avatar.constant";
defineCustomElementAvatar();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Avatar',
    argTypes: {
        'tp-color': {
            control: { type: 'select' },
            options: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS],
            description: `Define a cor do componente.

**OBS**: As cores **'${TpColorAula.Aula}'**, **'${TpColorMaterial.Material}'**, **'${TpColorQuestoes.Questoes}'**, **'${TpColorRevalida.Revalida}'** e **'${TpColorProvas.Provas}'** estão disponiveis apenas no theme **MedSoft**.

**OBS**: A cor **'${TpColorOrange.Orange}'** está disponivel apenas no theme **Recursos**.`,
            table: {
                defaultValue: { summary: 'undefined' },
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
            options: [...TP_ION_AVATAR['tp-size']],
            description: 'Define  o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_ION_AVATAR['tp-size'].join('|') },
            },
        },
        color: { table: { disable: true } },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-avatar tp-color="${args['tp-color']}" tp-size="${args['tp-size']}">
      <ion-label>AB</ion-label>
    </ion-avatar>
  `;
    },
};
//# sourceMappingURL=avatar.stories.js.map
