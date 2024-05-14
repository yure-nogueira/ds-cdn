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
    title: 'components/Templarios/Button cluster',
    decorators: [withActions],
    parameters: {
        actions: {
            handles: ['tpButtonClusterCollapsed'],
        },
    },
    argTypes: {
        collapsed: {
            control: 'boolean',
            description: 'Define a variação de estado do componente.',
            table: {
                defaultValue: {
                    summary: 'true',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Define a estilização do estado loading do componente.',
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
    args: {
        collapsed: true,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `<tp-button-cluster
      color="${args.color}"
      ?collapsed="${args.collapsed}"
      ?loading="${args.loading}"
    >
      <tp-text slot="expand-text" tp-type="p12">Expandir a lista</tp-text>
      <tp-text slot="collapse-text" tp-type="p12">Ocultar a lista</tp-text>
    </tp-button-cluster>`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-button-cluster/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=button-cluster.stories.js.map
