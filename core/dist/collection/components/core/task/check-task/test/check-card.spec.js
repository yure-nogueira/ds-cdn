import { newSpecPage } from "@stencil/core/testing";
import { TpCheckCard } from "../check-card";
describe('tp-check-card', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpCheckCard],
            html: '<tp-check-card></tp-check-card>',
        });
        expect(root).toEqualHtml(`
      <tp-check-card>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-check-card>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpCheckCard],
            html: `<tp-check-card></tp-check-card>`,
        });
        expect(root).toEqualHtml(`
      <tp-check-card>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-check-card>
    `);
    });
});
//# sourceMappingURL=check-card.spec.js.map
