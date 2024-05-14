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
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { withActions } from "@storybook/addon-actions/decorator";
import { html } from "lit";
defineCustomElementText();
defineCustomElementIcon();
defineCustomElementItem();
const meta = {
    component: 'TpContextMenu',
    title: 'components/Core/Context menu',
    decorators: [withActions],
    parameters: {
        actions: {
            handles: ['tpCollapse'],
        },
    },
    argTypes: {
        initialCollapsedState: {
            control: { type: 'boolean' },
            description: 'Define o estato inicial do componente.',
            table: {
                defaultValue: {
                    summary: true,
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
      <div class="markup-context-menu">
        <!-- component markdown -->

        <tp-context-menu
          color=${args.color}
          initial-collapsed-state="${args.initialCollapsedState}"
        >
          <ion-item slot="item" tp-spacingx="s00" tp-spacingy="s00">
            <ion-icon
              slot="start"
              class="tp-context-menu__icon"
              src="./assets/tp-star.svg"
            ></ion-icon>
            <ion-text tp-type="p16">Context Menu Item</ion-text>
          </ion-item>

          <ion-item slot="item" tp-spacingx="s00" tp-spacingy="s00">
            <ion-icon
              slot="start"
              class="tp-context-menu__icon"
              src="./assets/tp-star.svg"
            ></ion-icon>
            <ion-text tp-type="p16">Context Menu Item</ion-text>
          </ion-item>

          <ion-item slot="item" tp-spacingx="s00" tp-spacingy="s00">
            <ion-icon
              slot="start"
              class="tp-context-menu__icon"
              src="./assets/tp-star.svg"
            ></ion-icon>
            <ion-text tp-type="p16">Context Menu Item</ion-text>
          </ion-item>

          <ion-item slot="item" tp-spacingx="s00" tp-spacingy="s00">
            <ion-icon
              slot="start"
              class="tp-context-menu__icon"
              src="./assets/tp-star.svg"
            ></ion-icon>
            <ion-text tp-type="p16">Context Menu Item</ion-text>
          </ion-item>

          <ion-item slot="item" tp-spacingx="s00" tp-spacingy="s00">
            <ion-icon
              slot="start"
              class="tp-context-menu__icon"
              src="./assets/tp-star.svg"
            ></ion-icon>
            <ion-text tp-type="p16">Context Menu Item</ion-text>
          </ion-item>

          <ion-text slot="info" tp-type="p16b" color="neutral-8">
            Criado em 22/01/2024
          </ion-text>
        </tp-context-menu>

        <!-- !component markdown -->
      </div>
    `;
    },
};
//# sourceMappingURL=context-menu.stories.js.map
