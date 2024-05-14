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
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementSegment } from "@ionic/core/components/ion-segment";
import { defineCustomElement as defineCustomElementSegmentButton } from "@ionic/core/components/ion-segment-button";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElementSegment();
defineCustomElementSegmentButton();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Segment/Website',
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
    args: {
        color: 'brand-4',
    },
};
export default meta;
export const DefaultMarkup = {
    render: () => html `
  <dic class="markup-segment">
    <tp-segment-container>
      <ion-segment value="segment-1">
        <ion-segment-button value="segment-1">
          <ion-label>Tabs 1</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-2">
          <ion-label>Tabs 2</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-3">
          <ion-label>Tabs 3</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-4">
          <ion-label>Tabs 4</ion-label>
        </ion-segment-button>
      </ion-segment>
    </tp-segment-container>

    <tp-segment-container>
      <ion-segment value="segment-1" disabled>
        <ion-segment-button value="segment-1">
          <ion-label>Tabs 1</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-2">
          <ion-label>Tabs 2</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-3">
          <ion-label>Tabs 3</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-4">
          <ion-label>Tabs 4</ion-label>
        </ion-segment-button>
      </ion-segment>
    </tp-segment-container>
  </div>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-segment-container>
      <ion-segment value="segment-1" color="${args.color}">
        <ion-segment-button value="segment-1">
          <ion-label>Tabs 1</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-2">
          <ion-label>Tabs 2</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-3">
          <ion-label>Tabs 3</ion-label>
        </ion-segment-button>

        <ion-segment-button value="segment-4">
          <ion-label>Tabs 4</ion-label>
        </ion-segment-button>
      </ion-segment>
    </tp-segment-container>
  `;
    },
};
//# sourceMappingURL=segment.stories.js.map
