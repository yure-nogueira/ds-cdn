import { newSpecPage } from "@stencil/core/testing";
import { TpElemNewsList } from "../news-list";
describe('tp-elem-news-list', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsList],
            html: '<tp-elem-news-list></tp-elem-news-list>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-list>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-list>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsList],
            html: '<tp-elem-news-list></tp-elem-news-list>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-list>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-list>
    `);
    });
});
//# sourceMappingURL=news-list.spec.js.map
