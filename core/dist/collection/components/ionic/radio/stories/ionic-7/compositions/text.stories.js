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
import { defineCustomElement as defineCustomElementRadioGroup, } from "@ionic/core/components/ion-radio-group";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
import { TP_TYPE } from "../../../../../../utils/constants/type.constant";
defineCustomElementRadio();
defineCustomElementRadioGroup();
defineCustomElementText();
const meta = {
    title: 'components/Ionic/Radio/Ionic-7/Compositions',
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        ['tp-type']: {
            control: { type: 'select' },
            options: [...TP_TYPE],
            description: `Define a estilização do texto do componente **'ion-text'**.

**OBS**: Atributo referente ao componente **'ion-text'**.
`,
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_TYPE.join('|') },
            },
        },
    },
};
export default meta;
export const Text = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-radio-group class="markup-radio-group">
      <ion-radio color="${args.color}" ?disabled="${args.disabled}" value="1">
        <ion-text tp-type="${args['tp-type']}">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </ion-text>
      </ion-radio>
      <ion-radio color="${args.color}" ?disabled="${args.disabled}" value="2">
        <ion-text tp-type="${args['tp-type']}">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </ion-text>
      </ion-radio>
      <ion-radio color="${args.color}" ?disabled="${args.disabled}" value="3">
        <ion-text tp-type="${args['tp-type']}">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </ion-text>
      </ion-radio>
    </ion-radio-group>
  `;
    },
};
//# sourceMappingURL=text.stories.js.map
