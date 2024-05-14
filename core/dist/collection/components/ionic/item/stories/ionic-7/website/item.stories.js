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
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { defineCustomElement as defineCustomElementCheckbox } from "@ionic/core/components/ion-checkbox";
import { defineCustomElement as defineCustomElementButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineCustomElementDatetime } from "@ionic/core/components/ion-datetime";
import { defineCustomElement as defineCustomElementDatetimeButton } from "@ionic/core/components/ion-datetime-button";
import { defineCustomElement as defineCustomElementInput } from "@ionic/core/components/ion-input";
import { defineCustomElement as defineCustomElementRadio } from "@ionic/core/components/ion-radio";
import { defineCustomElement as defineCustomElementRadioGroup } from "@ionic/core/components/ion-radio-group";
import { defineCustomElement as defineCustomElementSearchbar } from "@ionic/core/components/ion-searchbar";
import { defineCustomElement as defineCustomElementTextarea } from "@ionic/core/components/ion-textarea";
import { defineCustomElement as defineCustomElementToggle } from "@ionic/core/components/ion-toggle";
import { html } from "lit";
import { TP_COLORS, TP_COLORS_MEDSOFT, TP_COLORS_RECURSOS, } from "../../../../../../utils/constants/color.constant";
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorProvas, TpColorQuestoes, TpColorRevalida, } from "../../../../../../utils/enums/color.enum";
import { TP_SPACING } from "../../../../../../utils/constants/spacing.constants";
defineCustomElementIcon();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementList();
defineCustomElementText();
defineCustomElementCheckbox();
defineCustomElementDatetime();
defineCustomElementDatetimeButton();
defineCustomElementButton();
defineCustomElementInput();
defineCustomElementRadio();
defineCustomElementRadioGroup();
defineCustomElementSearchbar();
defineCustomElementTextarea();
defineCustomElementToggle();
const meta = {
    title: 'components/Ionic/Item/Website',
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
        ['tp-gap']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-gap']],
            description: 'Define o espaçamento entre os slots do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-gap'].join('|') },
            },
        },
        ['tp-spacingx']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingx']],
            description: 'Define o padding horizontal do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-spacingx'].join('|') },
            },
        },
        ['tp-spacingy']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingy']],
            description: 'Define o padding vertical do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-spacingy'].join('|') },
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

      <ion-item disabled>
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `,
};
DefaultMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const BorderMarkup = {
    render: () => html `
    <ion-list>
      <ion-item lines="full">
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item lines="full">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item lines="full">
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `,
};
BorderMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const GapMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-list>
      <ion-item tp-gap="${args['tp-gap']}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item tp-gap="${args['tp-gap']}">
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>

      <ion-item tp-gap="${args['tp-gap']}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `;
    },
};
GapMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const SpacingMarkup = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-list>
      <ion-item
        tp-spacingx="${args['tp-spacingx']}"
        tp-spacingy="${args['tp-spacingy']}"
      >
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item
        tp-spacingx="${args['tp-spacingx']}"
        tp-spacingy="${args['tp-spacingy']}"
      >
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item
        tp-spacingx="${args['tp-spacingx']}"
        tp-spacingy="${args['tp-spacingy']}"
      >
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `;
    },
};
SpacingMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
};
export const ButtonMarkup = {
    render: () => html `
    <ion-list>
      <ion-item button>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item button>
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item button>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `,
};
ButtonMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
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
    </ion-list>
  `;
    },
};
ColorsMarkup.argTypes = {
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
// Compositions
export const CheckboxMarkup = {
    render: () => html `
    <ion-list>
      <ion-item>
        <ion-checkbox label-placement="start" justify="space-between">
          <ion-text>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </ion-text>
        </ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-checkbox label-placement="end" justify="space-between">
          <ion-text>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </ion-text>
        </ion-checkbox>
      </ion-item>
    </ion-list>
  `,
};
CheckboxMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const DatetimeMarkup = {
    render: () => {
        const openDatetime = () => {
            const datetime = document.getElementById('datetime');
            datetime.style.opacity = '1';
            datetime.style.visibility = 'visible';
        };
        const closeDatetime = () => {
            const datetime = document.getElementById('datetime');
            datetime.style.opacity = '0';
            datetime.style.visibility = 'hidden';
        };
        return html `
      <ion-list>
        <ion-item>
          <tp-input-container @click=${openDatetime}>
            <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
            <ion-datetime-button
              mode="ios"
              datetime="datetime"
            ></ion-datetime-button>
            <ion-icon slot="end" src="./assets/tp-calendar.svg"></ion-icon>
          </tp-input-container>
        </ion-item>
      </ion-list>

      <ion-datetime id="datetime" presentation="date" prefer-wheel="true">
        <div slot="title">
          <ion-button fill="clear" size="xxs">
            <ion-label tp-type="p12b" @click=${closeDatetime}
              >CANCELAR</ion-label
            >
          </ion-button>
          <ion-button fill="clear" size="xxs">
            <ion-label tp-type="p12b" @click=${closeDatetime}
              >SELECIONAR</ion-label
            >
          </ion-button>
        </div>
      </ion-datetime>
    `;
    },
};
DatetimeMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const InputMarkup = {
    render: () => html `
    <ion-list>
      <ion-item>
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Input</ion-label>
          <ion-input
            mode="md"
            placeholder="Digite aqui"
            clear-input="true"
          ></ion-input>
        </tp-input-container>
      </ion-item>
    </ion-list>
  `,
};
InputMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const RadioMarkup = {
    render: () => html `
    <ion-list>
      <ion-radio-group>
        <ion-item>
          <ion-radio label-placement="start" justify="space-between">
            <ion-text>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </ion-text>
          </ion-radio>
        </ion-item>

        <ion-item>
          <ion-radio label-placement="end" justify="space-between">
            <ion-text>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </ion-text>
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  `,
};
RadioMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const SearchbarMarkup = {
    render: () => html `
    <ion-list>
      <ion-item>
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Searchbar</ion-label>
          <ion-searchbar
            mode="md"
            search-icon="./../../../../assets/tp-search.svg"
            clear-icon="./../../../../assets/tp-x.svg"
            placeholder="Lorem ipsum dolor"
          ></ion-searchbar>
        </tp-input-container>
      </ion-item>
    </ion-list>
  `,
};
SearchbarMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const TextareaMarkup = {
    render: () => html `
    <ion-list>
      <ion-item>
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Textarea</ion-label>
          <ion-textarea
            placeholder="Lorem ipsum, dolor sit amet consectetur."
            mode="md"
          ></ion-textarea>
        </tp-input-container>
      </ion-item>
    </ion-list>
  `,
};
TextareaMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
export const ToggleMarkup = {
    render: () => html `
    <ion-list>
      <ion-item button>
        <ion-toggle label-placement="start" justify="space-between">
          <ion-text>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </ion-text
        </ion-toggle>
      </ion-item>

      <ion-item button>
        <ion-toggle label-placement="end" justify="space-between">
          <ion-text>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </ion-text
        </ion-toggle>
      </ion-item>
    </ion-list>
  `,
};
ToggleMarkup.argTypes = {
    color: { table: { disable: true } },
    'tp-gap': { table: { disable: true } },
    'tp-spacingx': { table: { disable: true } },
    'tp-spacingy': { table: { disable: true } },
};
//# sourceMappingURL=item.stories.js.map
