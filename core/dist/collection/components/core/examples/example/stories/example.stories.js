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
import { defineCustomElement as defineCustomElementButton } from "@ionic/core/components/ion-button";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { defineCustomElement as defineCustomElementRadio } from "@ionic/core/components/ion-radio";
import { defineCustomElement as defineCustomElementRadioGroup } from "@ionic/core/components/ion-radio-group";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
import { TP_ICONS_STORYBOOK } from "../../../../../utils/constants/icon.constant";
defineCustomElementButton();
defineCustomElementRadioGroup();
defineCustomElementRadio();
defineCustomElementText();
defineCustomElementIcon();
const meta = {
    title: 'components/Core/Example',
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: [...TP_ICONS_STORYBOOK],
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = args.icon ? `./assets/${args.icon}` : null;
        return html `<tp-example
      .color="${args.color}"
      .icon="${iconUrl}"
    ></tp-example>`;
    },
};
//# sourceMappingURL=example.stories.js.map
