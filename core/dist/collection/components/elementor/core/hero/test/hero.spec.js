import { newSpecPage } from "@stencil/core/testing";
import { TpHero } from "../hero";
describe('tp-hero', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpHero],
            html: '<tp-hero></tp-hero>',
        });
        expect(root).toEqualHtml(`
      <tp-hero>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-hero>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpHero],
            html: `<tp-hero></tp-hero>`,
        });
        expect(root).toEqualHtml(`
      <tp-hero>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-hero>
    `);
    });
});
//# sourceMappingURL=hero.spec.js.map
