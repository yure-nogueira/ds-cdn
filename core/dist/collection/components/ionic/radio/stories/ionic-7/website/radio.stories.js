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
import { defineCustomElement as defineCustomElementRadio } from "@ionic/core/components/ion-radio";
import { defineCustomElement as defineCustomElementRadioGroup } from "@ionic/core/components/ion-radio-group";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../../utils/enums/color.enum";
defineCustomElementRadio();
defineCustomElementRadioGroup();
const meta = {
    title: 'components/Ionic/Radio/Website',
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
    <ion-radio-group>
      <ion-radio value="1"></ion-radio>
      <ion-radio value="2"></ion-radio>
    </ion-radio-group>

    <ion-radio-group>
      <ion-radio value="1" disabled></ion-radio>
      <ion-radio value="2" disabled></ion-radio>
    </ion-radio-group>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const TextMarkup = {
    render: () => html `
    <ion-radio-group class="markup-radio">
      <ion-radio value="1">
        <ion-text tp-type="p14">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </ion-text>
      </ion-radio>
      <ion-radio value="2">
        <ion-text tp-type="p14">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </ion-text>
      </ion-radio>
      <ion-radio value="3">
        <ion-text tp-type="p14">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </ion-text>
      </ion-radio>
    </ion-radio-group>
  `,
};
TextMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-radio-group>
      <ion-radio color="${args.color}" value="1"></ion-radio>
      <ion-radio color="${args.color}" value="2"></ion-radio>
    </ion-radio-group>
  `;
    },
};
//# sourceMappingURL=radio.stories.js.map
