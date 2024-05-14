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
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementSearchbar } from "@ionic/core/components/ion-searchbar";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
defineCustomElementSearchbar();
defineCustomElementItem();
defineCustomElementText();
const meta = {
    title: 'components/Core/Autocomplete',
    argTypes: {
        locked: {
            control: 'boolean',
            description: 'Define se o componente deve ou não bloquear a renderização do dropdown.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        openOnFocus: {
            control: 'boolean',
            description: 'Define se o componente deve ou não renderizar o dropdown quando o slot que recebe um input ganha foco.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
    },
    args: {
        locked: false,
        openOnFocus: false,
    },
};
export default meta;
export const Searchbar = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-autocomplete
      color=${args.color}
      ?locked="${args.locked}"
      ?open-on-focus="${args.openOnFocus}"
    >
      <tp-dropdown>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
      </tp-dropdown>
      <tp-input-container color=${args.color}>
        <ion-searchbar
          mode="md"
          search-icon="./../../../../assets/tp-search.svg"
          clear-icon="./../../../../assets/tp-x.svg"
          placeholder="Lorem ipsum dolor"
        ></ion-searchbar>
      </tp-input-container>
    </tp-autocomplete>
  `;
    },
};
export const Input = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-autocomplete color=${args.color} ?open-on-focus="${true}">
      <tp-dropdown>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
        <ion-item lines="full" color=${args.color} tp-spacingy="s08">
          <ion-text tp-type="p14">
            <span>Lorem ipsum Dolor</span>
          </ion-text>
        </ion-item>
      </tp-dropdown>
      <tp-input-container color=${args.color}>
        <ion-input
          type="email"
          mode="md"
          clear-input="true"
          placeholder="Digite um e-mail valido"
        ></ion-input>
      </tp-input-container>
    </tp-autocomplete>
  `;
    },
};
//# sourceMappingURL=autocomplete.stories.js.map
