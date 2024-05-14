import { newSpecPage } from "@stencil/core/testing";
import { TpElemNewsContent } from "../news-content";
describe('tp-elem-news-content', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsContent],
            html: '<tp-elem-news-content></tp-elem-news-content>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-content>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-content>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsContent],
            html: '<tp-elem-news-content></tp-elem-news-content>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-content>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-content>
    `);
    });
});
//# sourceMappingURL=news-content.spec.js.map
