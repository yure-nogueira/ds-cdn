import { newSpecPage } from "@stencil/core/testing";
import { TpElemNewsItem } from "../news-item";
describe('tp-elem-news-item', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsItem],
            html: '<tp-elem-news-item></tp-elem-news-item>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-item>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsItem],
            html: '<tp-elem-news-item></tp-elem-news-item>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-item>
    `);
    });
});
//# sourceMappingURL=news-item.spec.js.map
