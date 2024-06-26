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
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementList } from "@ionic/core/components/ion-list";
import { defineCustomElement as defineCustomElementRadio } from "@ionic/core/components/ion-radio";
import { defineCustomElement as defineCustomElementRadioGroup } from "@ionic/core/components/ion-radio-group";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
import { TP_SPACING } from "../../../../../../utils/constants/spacing.constants";
defineCustomElementItem();
defineCustomElementList();
defineCustomElementText();
defineCustomElementRadio();
defineCustomElementRadioGroup();
const meta = {
    title: 'components/Ionic/Item/Ionic-7/Compositions',
    argTypes: {
        lines: {
            control: { type: 'check' },
            options: ['full'],
            description: 'Define se o componente terá um border bottom.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: ['full'].join('|') },
            },
        },
        ['tp-gap']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-gap']],
            description: 'Define qual o espaçamento entre o icone e o texto do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-gap'].join('|') },
            },
        },
        ['tp-spacingx']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingx']],
            description: 'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-spacingx'].join('|') },
            },
        },
        ['tp-spacingy']: {
            control: { type: 'select' },
            options: [...TP_SPACING['tp-spacingy']],
            description: 'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_SPACING['tp-spacingy'].join('|') },
            },
        },
        button: {
            control: 'boolean',
            description: 'Define a estilização do estado button do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
    },
};
export default meta;
export const Radio = {
    render: (_a) => {
        var args = __rest(_a, []);
        setTimeout(() => {
            const setTpGap = () => {
                const itens = document.querySelectorAll('ion-item');
                itens.forEach((item) => {
                    if (args['tp-gap']) {
                        item.setAttribute('tp-gap', args['tp-gap']);
                    }
                    if (!args['tp-gap']) {
                        item.removeAttribute('tp-gap');
                    }
                });
            };
            const setTpSpacingX = () => {
                const itens = document.querySelectorAll('ion-item');
                itens.forEach((item) => {
                    if (args['tp-spacingx']) {
                        item.setAttribute('tp-spacingx', args['tp-spacingx']);
                    }
                    if (!args['tp-spacingx']) {
                        item.removeAttribute('tp-spacingx');
                    }
                });
            };
            const setTpSpacingY = () => {
                const itens = document.querySelectorAll('ion-item');
                itens.forEach((item) => {
                    if (args['tp-spacingy']) {
                        item.setAttribute('tp-spacingy', args['tp-spacingy']);
                    }
                    if (!args['tp-spacingy']) {
                        item.removeAttribute('tp-spacingy');
                    }
                });
            };
            if (args['tp-gap'] || !args['tp-gap']) {
                setTpGap();
            }
            if (args['tp-spacingx'] || !args['tp-spacingx']) {
                setTpSpacingX();
            }
            if (args['tp-spacingy'] || !args['tp-spacingy']) {
                setTpSpacingY();
            }
        }, 100);
        return html `
      <ion-list>
        <ion-radio-group>
          <ion-item
            .color="${args.color}"
            lines="${args.lines}"
            ?button="${args.button}"
            ?disabled="${args.disabled}"
          >
            <ion-radio label-placement="start" justify="space-between">
              <ion-text>
                <p>Lorem ipsum, dolor sit amet consectetur.</p>
              </ion-text>
            </ion-radio>
          </ion-item>

          <ion-item
            .color="${args.color}"
            lines="${args.lines}"
            tp-gap="${args['tp-gap']}"
            tp-spacingX="${args['tp-spacingx']}"
            tp-spacingY="${args['tp-spacingy']}"
            ?button="${args.button}"
            ?disabled="${args.disabled}"
          >
            <ion-radio label-placement="end" justify="space-between">
              <ion-text>
                <p>Lorem ipsum, dolor sit amet consectetur.</p>
              </ion-text>
            </ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
    `;
    },
};
//# sourceMappingURL=radio.stories.js.map
