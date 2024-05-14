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
import { defineCustomElement as defineCustomElementTextarea } from "@ionic/core/components/ion-textarea";
import { html } from "lit";
import { TP_INPUT_CONTAINER } from "../../utils/input-container.constants";
defineCustomElementTextarea();
defineCustomElementLabel();
const meta = {
    title: 'components/Templarios/Input Container/Textarea',
    argTypes: {
        state: {
            control: { type: 'select' },
            options: [...TP_INPUT_CONTAINER.state],
            description: 'Define o estado do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_INPUT_CONTAINER.state.join('|'),
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
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-input-container
      color="${args.color}"
      state="${args.state}"
      ?disabled="${args.disabled}"
    >
      <ion-label slot="label" tp-type="p14">Descrição Textarea</ion-label>
      <ion-textarea
        placeholder="Lorem ipsum, dolor sit amet consectetur."
        mode="md"
      ></ion-textarea>
      <ion-label slot="feedback-error" tp-type="p14">
        *Caracteres invalidos.
      </ion-label>
      <ion-label slot="feedback-success" tp-type="p14">
        *Caracteres validos
      </ion-label>
    </tp-input-container>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-textarea/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=textarea.stories.js.map