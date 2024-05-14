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
import { defineCustomElement as defineCustomElementFab } from "@ionic/core/components/ion-fab";
import { defineCustomElement as defineCustomElementFabButton, } from "@ionic/core/components/ion-fab-button";
import { defineCustomElement as defineCustomElementFabList, } from "@ionic/core/components/ion-fab-list";
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { html } from "lit";
defineCustomElementFab();
defineCustomElementFabList();
defineCustomElementFabButton();
defineCustomElementIcon();
const meta = {
    title: 'components/Ionic/Fab',
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-fab slot="fixed" horizontal="center" vertical="center">
      <ion-fab-button color="${args.color}">
        <ion-icon src="./assets/tp-plus.svg"></ion-icon>
      </ion-fab-button>

      <ion-fab-list side="top">
        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  `;
    },
};
//# sourceMappingURL=fab.stories.js.map
