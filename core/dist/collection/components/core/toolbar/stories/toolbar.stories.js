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
import { html } from "lit";
const meta = {
    title: 'components/Core/Toolbar',
    argTypes: {},
    args: {},
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-toolbar color=${args.color}>
        <ion-button fill="clear" slot="start" size="xxs">
          <ion-icon
            slot="icon-only"
            src="./assets/tp-arrow-left-circle.svg"
          ></ion-icon>
        </ion-button>

        <ion-button fill="clear" class="markup-tollbar-button" size="xs">
          <ion-icon slot="icon-only" src="./assets/tp-edit.svg"></ion-icon>
        </ion-button>
        <ion-button fill="clear" class="markup-tollbar-button" size="xxs">
          <ion-icon slot="icon-only" src="./assets/tp-star.svg"></ion-icon>
        </ion-button>
        <ion-button fill="clear" class="markup-tollbar-button" size="xxs">
          <ion-icon slot="icon-only" src="./assets/tp-eye.svg"></ion-icon>
        </ion-button>
        <ion-button fill="clear" class="markup-tollbar-button" size="xs">
          <ion-icon
            slot="icon-only"
            src="./assets/tp-type-duble.svg"
          ></ion-icon>
        </ion-button>

        <ion-button fill="clear" slot="end" size="xxs">
          <ion-icon
            slot="icon-only"
            src="./assets/tp-arrow-right-circle.svg"
          ></ion-icon>
        </ion-button>
      </tp-toolbar>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-tiles/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=toolbar.stories.js.map
