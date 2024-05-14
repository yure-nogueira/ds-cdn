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
import { html } from "lit";
defineCustomElementRadio();
defineCustomElementRadioGroup();
const meta = {
    title: 'components/Ionic/Radio/Ionic-7',
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
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-radio-group>
      <ion-radio
        color="${args.color}"
        ?disabled="${args.disabled}"
        value="1"
      ></ion-radio>
      <ion-radio
        color="${args.color}"
        ?disabled="${args.disabled}"
        value="2"
      ></ion-radio>
    </ion-radio-group>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-radio/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=radio.stories.js.map
