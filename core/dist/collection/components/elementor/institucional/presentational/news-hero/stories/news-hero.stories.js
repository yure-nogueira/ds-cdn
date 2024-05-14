import { html } from "lit";
const meta = {
    title: 'components/Elementor/Institucional/News Hero',
    argTypes: {},
    args: {},
};
export default meta;
export const Default = {
    render: () => {
        return html `
      <tp-banner>
        <picture news-hero slot="image">
          <source
            media="(max-width: 576px)"
            srcset="https://placehold.co/414x300"
          />

          <source
            media="(max-width: 992px)"
            srcset="https://placehold.co/1200x400"
          />

          <img src="https://placehold.co/1745x400" alt="" />
        </picture>

        <tp-elem-news-hero slot="content">
          <ion-badge slot="category" color="brand-4"> R1 </ion-badge>
          <ion-text slot="title" color="neutral-10">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              risus tortor
            </h1>
          </ion-text>
          <ion-text slot="date-time" tp-type="p16" color="neutral-8">
            <time>21/03/2024 - 14h53</time>
          </ion-text>

          <img slot="watermark" src="https://placehold.co/400x200" alt="" />
        </tp-elem-news-hero>
      </tp-banner>
    `;
    },
};
Default.argTypes = {
    // @ts-ignore
    color: { table: { disable: true } },
};
//# sourceMappingURL=news-hero.stories.js.map
