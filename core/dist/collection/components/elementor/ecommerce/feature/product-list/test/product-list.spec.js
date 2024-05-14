import { newSpecPage } from "@stencil/core/testing";
import { TpElemProductList } from "../product-list";
describe('tp-elem-product-list', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductList],
            html: '<tp-elem-product-list></tp-elem-product-list>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-list>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-list>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductList],
            html: `<tp-elem-product-list></tp-elem-product-list>`,
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-list>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-list>
    `);
    });
});
//# sourceMappingURL=product-list.spec.js.map
