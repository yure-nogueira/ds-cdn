import { newSpecPage } from "@stencil/core/testing";
import { TpElemProductItem } from "../product-item";
describe('tp-elem-product-item', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductItem],
            html: '<tp-elem-product-item></tp-elem-product-item>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-item>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductItem],
            html: '<tp-elem-product-item></tp-elem-product-item>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-item>
    `);
    });
});
//# sourceMappingURL=product-item.spec.js.map
