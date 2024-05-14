import { newSpecPage } from "@stencil/core/testing";
import { TpElemProductDetail } from "../product-detail";
describe('tp-elem-product-detail', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductDetail],
            html: '<tp-elem-product-detail></tp-elem-product-detail>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-detail>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-detail>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemProductDetail],
            html: `<tp-elem-product-detail></tp-elem-product-detail>`,
        });
        expect(root).toEqualHtml(`
      <tp-elem-product-detail>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-product-detail>
    `);
    });
});
//# sourceMappingURL=product-detail.spec.js.map
