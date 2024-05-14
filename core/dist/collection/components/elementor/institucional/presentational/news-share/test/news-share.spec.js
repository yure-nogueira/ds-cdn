import { newSpecPage } from "@stencil/core/testing";
import { TpElemNewsShare } from "../news-share";
describe('tp-elem-news-share', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsShare],
            html: '<tp-elem-news-share></tp-elem-news-share>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-share>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-share>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsShare],
            html: '<tp-elem-news-share></tp-elem-news-share>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-share>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-share>
    `);
    });
});
//# sourceMappingURL=news-share.spec.js.map
