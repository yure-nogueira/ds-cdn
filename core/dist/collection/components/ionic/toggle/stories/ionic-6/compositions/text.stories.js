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
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { defineCustomElement as defineCustomElementToggle } from "@ionic/core/components/ion-toggle";
import { html } from "lit";
import { TP_TYPE } from "../../../../../../utils/constants/type.constant";
defineCustomElementToggle();
defineCustomElementText();
const meta = {
    title: 'components/Ionic/Toggle/Ionic-6/Compositions',
    argTypes: {
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
        ['tp-type']: {
            control: { type: 'select' },
            options: [...TP_TYPE],
            description: `Define a estilização do texto do componente **'ion-text'**.

**OBS**: Atributo referente ao componente **'ion-text'**.
`,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_TYPE.join('|'),
                },
            },
        },
    },
};
export default meta;
export const Text = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-item>
      <ion-toggle
        mode="ios"
        color="${args.color}"
        ?disabled="${args.disabled}"
        slot="start"
      ></ion-toggle>
      <ion-label tp-type="${args['tp-type']}">
        Lorem ipsum, dolor sit amet consectetur.
      </ion-label>
      <ion-item> </ion-item
    ></ion-item>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-toggle/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=text.stories.js.map
