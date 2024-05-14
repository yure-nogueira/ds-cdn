import { defineCustomElement } from "@ionic/core/components/ion-skeleton-text";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Skeleton Text',
    argTypes: {},
};
export default meta;
export const Default = {
    render: () => html ` <ion-skeleton-text animated></ion-skeleton-text> `,
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-skeleton-text/gi)).toBeTruthy();
    }, */
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=skeleton-text.stories.js.map
