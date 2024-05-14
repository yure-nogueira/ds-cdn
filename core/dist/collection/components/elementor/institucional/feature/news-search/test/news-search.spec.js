import { newSpecPage } from "@stencil/core/testing";
import { TpElemNewsSearch } from "../news-search";
describe('tp-elem-news-search', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsSearch],
            html: '<tp-elem-news-search></tp-elem-news-search>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-search>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-search>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsSearch],
            html: '<tp-elem-news-search></tp-elem-news-search>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-search>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-search>
    `);
    });
});
//# sourceMappingURL=news-search.spec.js.map
