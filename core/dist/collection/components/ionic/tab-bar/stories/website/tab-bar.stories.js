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
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementTabBar } from "@ionic/core/components/ion-tab-bar";
import { defineCustomElement as defineCustomElementTabButton } from "@ionic/core/components/ion-tab-button";
import { defineCustomElement as defineCustomElementTabs } from "@ionic/core/components/ion-tabs";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElementTabs();
defineCustomElementTabBar();
defineCustomElementTabButton();
defineCustomElementLabel();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/tab-bar/Website',
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
    <ion-tabs>
      <ion-tab tab="tab1">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab2">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab3">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab4">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab5">
        <ion-nav></ion-nav>
      </ion-tab>

      <ion-tab-bar slot="top">
        <ion-tab-button tab="tab1" selected>
          <ion-icon src="./assets/tp-check-square.svg"></ion-icon>
          <ion-label>Questão</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2">
          <ion-icon src="./assets/tp-chat-2.svg"></ion-icon>
          <ion-label>Gabarito Comentado</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3">
          <ion-icon src="./assets/tp-grid.svg"></ion-icon>
          <ion-label>Cartão Resposta</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4">
          <ion-icon src="./assets/tp-help-circle.svg"></ion-icon>
          <ion-label>Dúvidas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5">
          <ion-icon src="./assets/tp-hourglass.svg"></ion-icon>
          <ion-label>Recursos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <ion-tabs>
      <ion-tab tab="tab1">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab2">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab3">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab4">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab5">
        <ion-nav></ion-nav>
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" disabled selected>
          <ion-icon src="./assets/tp-check-square.svg"></ion-icon>
          <ion-label>Questão</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" disabled>
          <ion-icon src="./assets/tp-chat-2.svg"></ion-icon>
          <ion-label>Gabarito Comentado</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" disabled>
          <ion-icon src="./assets/tp-grid.svg"></ion-icon>
          <ion-label>Cartão Resposta</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" disabled>
          <ion-icon src="./assets/tp-help-circle.svg"></ion-icon>
          <ion-label>Dúvidas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" disabled>
          <ion-icon src="./assets/tp-hourglass.svg"></ion-icon>
          <ion-label>Recursos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-tabs>
      <ion-tab tab="tab1">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab2">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab3">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab4">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab5">
        <ion-nav></ion-nav>
      </ion-tab>

      <ion-tab-bar color="${args.color}" slot="bottom">
        <ion-tab-button tab="tab1" selected>
          <ion-icon src="./assets/tp-check-square.svg"></ion-icon>
          <ion-label>Questão</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2">
          <ion-icon src="./assets/tp-chat-2.svg"></ion-icon>
          <ion-label>Gabarito Comentado</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3">
          <ion-icon src="./assets/tp-grid.svg"></ion-icon>
          <ion-label>Cartão Resposta</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4">
          <ion-icon src="./assets/tp-help-circle.svg"></ion-icon>
          <ion-label>Dúvidas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5">
          <ion-icon src="./assets/tp-hourglass.svg"></ion-icon>
          <ion-label>Recursos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `;
    },
};
//# sourceMappingURL=tab-bar.stories.js.map
