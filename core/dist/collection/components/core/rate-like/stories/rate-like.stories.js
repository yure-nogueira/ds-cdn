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
import { defineCustomElement as defineCustomElementSkeletonText } from "@ionic/core/components/ion-skeleton-text";
import { withActions } from "@storybook/addon-actions/decorator";
import { html } from "lit";
import { TP_RATE_LIKE } from "../utils/rate-like.constant";
defineCustomElementSkeletonText();
defineCustomElementIcon();
const meta = {
    component: 'TpRateLike',
    title: 'components/Core/Rate like',
    decorators: [withActions],
    parameters: {
        actions: { handles: ['tpChange'] },
    },
    argTypes: {
        status: {
            control: 'radio',
            options: [...TP_RATE_LIKE.status],
            description: 'Define o status do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: [...TP_RATE_LIKE.status].join('|') },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Define o estado de carregamento do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-rate-like
        status=${args.status}
        ?loading="${args.loading}"
      ></tp-rate-like>
    `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=rate-like.stories.js.map
