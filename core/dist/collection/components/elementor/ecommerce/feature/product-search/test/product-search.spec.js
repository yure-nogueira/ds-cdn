import { newSpecPage } from "@stencil/core/testing";
import { TpElemProductSearch } from "../product-search";
describe('tp-elem-product-search', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductSearch],
            html: '<tp-elem-product-search></tp-elem-product-search>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-search>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-search>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductSearch],
            html: `<tp-elem-product-search></tp-elem-product-search>`,
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-search>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-search>
    `);
    });
});
//# sourceMappingURL=product-search.spec.js.map
