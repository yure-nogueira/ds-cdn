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
import { defineCustomElement as defineCustomElementItem, } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementList } from "@ionic/core/components/ion-list";
import { html } from "lit";
import { TP_ION_LIST } from "../../utils/list.constant";
defineCustomElementList();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/List/Ionic-7',
    argTypes: {
        lines: {
            control: { type: 'check' },
            options: [...TP_ION_LIST.lines],
            description: 'Define uma borda no bottom do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_LIST.lines.join('|'),
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
    <ion-list lines="${args.lines}">
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

      <ion-item color="${args.color}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-list/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=list.stories.js.map
