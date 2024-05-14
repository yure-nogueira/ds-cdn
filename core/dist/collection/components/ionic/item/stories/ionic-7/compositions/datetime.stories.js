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
import { defineCustomElement as defineCustomElementDatetime, } from "@ionic/core/components/ion-datetime";
import { defineCustomElement as defineCustomElementDatetimeButton, } from "@ionic/core/components/ion-datetime-button";
import { defineCustomElement as defineCustomElementButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementList } from "@ionic/core/components/ion-list";
import { html } from "lit";
import { TP_SPACING } from "../../../../../../utils/constants/spacing.constants";
defineCustomElementList();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementDatetime();
defineCustomElementDatetimeButton();
defineCustomElementButton();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Item/Ionic-7/Compositions',
    argTypes: {
        lines: {
            control: { type: 'check' },
            options: ['full'],
            description: 'Define se o componente terá um border bottom.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: ['full'].join('|'),
                },
            },
        },
        ['tp-gap']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-gap']],
            description: 'Define qual o espaçamento entre o icone e o texto do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_SPACING['tp-gap'].join('|'),
                },
            },
        },
        ['tp-spacingx']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingx']],
            description: 'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_SPACING['tp-spacingx'].join('|'),
                },
            },
        },
        ['tp-spacingy']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingy']],
            description: 'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_SPACING['tp-spacingy'].join('|'),
                },
            },
        },
        button: {
            control: 'boolean',
            description: 'Define a estilização do estado button do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        presentation: {
            control: 'select',
            options: ['time'],
            description: 'Define o mode de apresentação do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'Time',
                },
            },
        },
    },
    args: {
        presentation: 'date',
    },
};
export default meta;
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
export const Datetime = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <ion-list>
        <ion-item>
          <tp-input-container color="${args.color}" @click=${openDatetime}>
            <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
            <ion-datetime-button
              mode="ios"
              datetime="datetime"
            ></ion-datetime-button>
            <ion-icon src="./assets/tp-calendar.svg"></ion-icon>
          </tp-input-container>
        </ion-item>
      </ion-list>

      <ion-datetime
        id="datetime"
        presentation=${args.presentation}
        prefer-wheel="true"
      >
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
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
    }, */
};
Datetime.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=datetime.stories.js.map
