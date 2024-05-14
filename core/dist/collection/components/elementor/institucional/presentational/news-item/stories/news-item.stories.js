import { defineCustomElement as defineCustomElementBadge } from "@ionic/core/components/ion-badge";
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
defineCustomElementBadge();
defineCustomElementText();
const meta = {
    title: 'components/Elementor/Institucional/News item',
    argTypes: {},
    args: {},
};
export default meta;
export const Default = {
    render: () => {
        return html `
      <tp-elem-news-item>
        <img slot="image" src="https://placehold.co/450x246" alt="" />

        <ion-badge slot="category" color="brand-4"> R1 </ion-badge>
        <ion-text slot="title">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            risus tortor
          </h1>
        </ion-text>
        <ion-text slot="date-time" tp-type="p14x" color="neutral-8">
          <time>21/03/2024 - 14h53</time>
        </ion-text>
      </tp-elem-news-item>
    `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=news-item.stories.js.map
