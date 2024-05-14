import { newSpecPage } from "@stencil/core/testing";
import { TpRateBar } from "../rate-bar";
describe('tp-rate-bar', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpRateBar],
            html: '<tp-rate-bar></tp-rate-bar>',
        });
        expect(root).toEqualHtml(`
      <tp-rate-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-rate-bar>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpRateBar],
            html: `<tp-rate-bar></tp-rate-bar>`,
        });
        expect(root).toEqualHtml(`
      <tp-rate-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-rate-bar>
    `);
    });
});
//# sourceMappingURL=rate-bar.spec.js.map
