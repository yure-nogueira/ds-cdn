import { newSpecPage } from "@stencil/core/testing";
import { TpBanner } from "../banner";
describe('tp-banner', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpBanner],
            html: '<tp-banner></tp-banner>',
        });
        expect(root).toEqualHtml(`
      <tp-banner>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-banner>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpBanner],
            html: `<tp-banner></tp-banner>`,
        });
        expect(root).toEqualHtml(`
      <tp-banner>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-banner>
    `);
    });
});
//# sourceMappingURL=banner.spec.js.map
