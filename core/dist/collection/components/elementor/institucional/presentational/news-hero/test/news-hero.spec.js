import { newSpecPage } from "@stencil/core/testing";
import { TpElemNewsHero } from "../news-hero";
describe('tp-elem-news-hero', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsHero],
            html: '<tp-elem-news-hero></tp-elem-news-hero>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-hero>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-hero>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemNewsHero],
            html: '<tp-elem-news-hero></tp-elem-news-hero>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-news-hero>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-news-hero>
    `);
    });
});
//# sourceMappingURL=news-hero.spec.js.map
