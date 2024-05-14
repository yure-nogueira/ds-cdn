import { html } from "lit";
const meta = {
    title: 'components/Elementor/Institucional/News share',
    argTypes: {},
    args: {},
};
export default meta;
export const Default = {
    render: () => {
        return html `
      <tp-elem-news-share>
        <ion-text slot="text" color="neutral-8" tp-type="p14xb">
          <span>Compartilhar notícia:</span>
        </ion-text>

        <div slot="links">
          <a>
            <img src="https://placehold.co/48x48" alt="" />
          </a>
          <a>
            <img src="https://placehold.co/48x48" alt="" />
          </a>
          <a>
            <img src="https://placehold.co/48x48" alt="" />
          </a>
        </div>
      </tp-elem-news-share>
    `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=news-share.stories.js.map
