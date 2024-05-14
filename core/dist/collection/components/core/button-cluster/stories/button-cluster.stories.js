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
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { withActions } from "@storybook/addon-actions/decorator";
import { html } from "lit";
defineCustomElementSkeletonText();
defineCustomElementText();
defineCustomElementIcon();
const meta = {
    component: 'TpButtonCluster',
    title: 'components/Core/Button cluster',
    decorators: [withActions],
    parameters: {
        actions: {
            handles: ['tpCollapse'],
        },
    },
    argTypes: {
        initialCollapsedState: {
            control: 'boolean',
            description: 'Define o estato inicial do componente.',
            table: {
                defaultValue: { summary: 'true' },
                type: { summary: 'boolean' },
            },
        },
    },
    args: {
        initialCollapsedState: true,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-button-cluster
      ?color="${args.color}"
      initial-collapsed-state="${args.initialCollapsedState}"
    >
      <ion-text slot="text-expand" tp-type="p12"><span>Expandir a lista</span></ion-text>
      <ion-text slot="text-collapse" tp-type="p12"><span>Ocultar a lista<span></ion-text>
    </tp-button-cluster>
  `;
    },
};
//# sourceMappingURL=button-cluster.stories.js.map
