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
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
defineCustomElementButton();
defineCustomElementIcon();
defineCustomElementText();
const meta = {
    title: 'components/Core/Tooltip',
    argTypes: {
        collapsed: {
            control: { type: 'boolean' },
            description: 'Define a variação de estado do componente.',
            defaultValue: true,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'undefined' },
            },
        },
        hover: {
            control: { type: 'boolean' },
            description: 'Habilita o toggle no hover.',
            defaultValue: true,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'undefined' },
            },
        },
        placement: {
            options: [undefined, 'top', 'bottom', 'left', 'right'],
            control: { type: 'radio' },
            description: 'Define posicionamento em relação ao componente parent.',
            table: {
                type: { summary: 'top | bottom | left | right' },
                defaultValue: { summary: 'undefined' },
            },
        },
        position: {
            options: [undefined, 'start', 'center', 'end'],
            control: { type: 'radio' },
            description: 'Define posicionamento horizontal do componente.',
            table: {
                type: { summary: 'start | center | end' },
                defaultValue: { summary: 'undefined' },
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
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <div
        style="display: flex; align-items: center; justify-content: center; height: calc(100vh - 32px);"
      >
        <tp-tooltip
          color="${args.color}"
          .placement="${args.placement}"
          .position="${args.position}"
          ?collapsed="${args.collapsed}"
          ?hover="${args.hover}"
          ?loading="${args.loading}"
        >
          <ion-button slot="trigger" fill="clear" tp-no-padding>
            <ion-icon slot="start" src="./assets/tp-info.svg"></ion-icon>
            Saiba mais
          </ion-button>
          <ion-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur atque velit obcaecati sit veritatis vel? Suscipit,
              repudiandae dolores voluptates ipsa dolore harum. Error,
              exercitationem cum?
            </p>
          </ion-text>
        </tp-tooltip>
      </div>
    `;
    },
};
//# sourceMappingURL=tooltip.stories.js.map
