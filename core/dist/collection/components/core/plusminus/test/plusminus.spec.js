import { newSpecPage } from "@stencil/core/testing";
import { TpPlusMinus } from "../plusminus";
describe('tp-plusminus', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpPlusMinus],
            html: '<tp-plusminus></tp-plusminus>',
        });
        expect(root).toEqualHtml(`
      <tp-plusminus>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-plusminus>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpPlusMinus],
            html: `<tp-plusminus></tp-plusminus>`,
        });
        expect(root).toEqualHtml(`
      <tp-plusminus>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-plusminus>
    `);
    });
});
//# sourceMappingURL=plusminus.spec.js.map
