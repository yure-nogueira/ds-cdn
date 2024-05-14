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
import { defineCustomElement as defineCustomElementAccordion } from "@ionic/core/components/ion-accordion";
import { defineCustomElement as defineCustomElementAccordionGroup } from "@ionic/core/components/ion-accordion-group";
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
import { TP_SPACING } from "../../../../../utils/constants/spacing.constants";
import { TP_TYPE } from "../../../../../utils/constants/type.constant";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../utils/enums/color.enum";
defineCustomElementAccordionGroup();
defineCustomElementAccordion();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementText();
const meta = {
    title: 'components/Ionic/Accordion/Website',
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
        ['tp-spacingx']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingx']],
            description: `Define o padding horizontal do componente`,
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-spacingx'].join('|') },
            },
        },
        ['tp-spacingy']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingy']],
            description: `Define o padding vertical do componente`,
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-spacingy'].join('|') },
            },
        },
        ['tp-type']: {
            control: { type: 'select' },
            options: [...TP_TYPE],
            description: `Define a estilização de fonte do componente **'ion-label'**.

**OBS**: Atributo referente ao componente **'ion-label'**.
`,
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_TYPE.join('|') },
            },
        },
        color: { table: { disable: true } },
    },
    args: {
        'tp-color': 'neutral-10',
    },
};
export default meta;
export const DefaultMarkup = {
    render: () => html `
    <ion-accordion-group>
      <ion-accordion value="first" toggle-icon="./assets/tp-chevron-down.svg">
        <ion-item slot="header" lines="none">
          <ion-label tp-type="p16xb">First Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>

      <ion-accordion value="second" toggle-icon="./assets/tp-chevron-down.svg">
        <ion-item slot="header" lines="none">
          <ion-label tp-type="p16xb">Second Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>

      <ion-accordion value="third" toggle-icon="./assets/tp-chevron-down.svg">
        <ion-item slot="header" lines="none">
          <ion-label tp-type="p16xb">Third Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  `,
};
DefaultMarkup.argTypes = {
    'tp-color': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
    'tp-type': { table: { disable: true } },
};
export const TypeMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-accordion-group>
      <ion-accordion value="first" toggle-icon="./assets/tp-chevron-down.svg">
        <ion-item slot="header" lines="none">
          <ion-label tp-type="${args['tp-type']}">First Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  `;
    },
};
TypeMarkup.argTypes = {
    'tp-color': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const SpacingMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-accordion-group>
      <ion-accordion
        tp-spacingx="${args['tp-spacingx']}"
        tp-spacingy="${args['tp-spacingy']}"
        value="first"
        toggle-icon="./assets/tp-chevron-down.svg"
      >
        <ion-item slot="header" lines="none">
          <ion-label tp-type="p16xb">First Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  `;
    },
};
SpacingMarkup.argTypes = {
    'tp-color': { table: { disable: true } },
    'tp-type': { table: { disable: true } },
};
export const ColorsMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-accordion-group>
      <ion-accordion
        tp-color="${args['tp-color']}"
        value="first"
        toggle-icon="./assets/tp-chevron-down.svg"
      >
        <ion-item slot="header" lines="none">
          <ion-label tp-type="p16xb">First Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  `;
    },
};
ColorsMarkup.argTypes = {
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
    'tp-type': { table: { disable: true } },
};
//# sourceMappingURL=accordion.stories.js.map
