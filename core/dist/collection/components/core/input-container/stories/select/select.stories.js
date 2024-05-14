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
import { defineCustomElement as defineCustomElementSelect } from "@ionic/core/components/ion-select";
import { defineCustomElement as defineCustomElementSelectOption } from "@ionic/core/components/ion-select-option";
import { defineCustomElement as defineCustomElementSkeletonText } from "@ionic/core/components/ion-skeleton-text";
import { html } from "lit";
import { TP_INPUT_CONTAINER } from "../../utils/input-container.constants";
defineCustomElementSelect();
defineCustomElementSelectOption();
defineCustomElementLabel();
defineCustomElementIcon();
defineCustomElementSkeletonText();
const meta = {
    title: 'components/Core/Input Container/Select',
    argTypes: {
        state: {
            control: { type: 'select' },
            options: [...TP_INPUT_CONTAINER.state],
            description: 'Define o estado do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_INPUT_CONTAINER.state.join('|') },
            },
        },
        inverted: {
            control: { type: 'boolean' },
            description: 'Define a direção de abertura do popover (acima ou abaixo do select).',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Define a estilização do estado loading do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
    },
};
export default meta;
export const Select = {
    render: (_a) => {
        var args = __rest(_a, []);
        const interfaceOpts = { cssClass: 'tp-popover-select' };
        return html `
      <tp-input-container
        color="${args.color}"
        state="${args.state}"
        ?inverted="${args.inverted}"
        ?loading="${args.loading}"
      >
        <ion-label slot="label" tp-type="p14">Descrição Select</ion-label>
        <ion-select
          interface="popover"
          .interfaceOptions=${interfaceOpts}
          id="tp-select-01"
          aria-label="option-1"
          placeholder="Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        >
          <ion-select-option value="option-1">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
            dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </ion-select-option>
          <ion-select-option value="option-2"> Option 2 </ion-select-option>
          <ion-select-option value="option-3"> Option 3 </ion-select-option>
          <ion-select-option value="option-4"> Option 4 </ion-select-option>
          <ion-select-option value="option-5"> Option 5 </ion-select-option>
          <ion-select-option value="option-6"> Option 6 </ion-select-option>
        </ion-select>
        <ion-label slot="feedback-error" tp-type="p14">
          *Caracteres invalidos
        </ion-label>
        <ion-label slot="feedback-success" tp-type="p14">
          *Caracteres validos
        </ion-label>
      </tp-input-container>
    `;
    },
};
Select.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=select.stories.js.map
