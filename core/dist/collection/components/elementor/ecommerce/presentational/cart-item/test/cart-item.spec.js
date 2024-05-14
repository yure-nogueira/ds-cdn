import { newSpecPage } from "@stencil/core/testing";
import { TpElemCartItem } from "../cart-item";
describe('tp-elem-cart-item', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemCartItem],
            html: '<tp-elem-cart-item></tp-elem-cart-item>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-cart-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-cart-item>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemCartItem],
            html: `<tp-elem-cart-item></tp-elem-cart-item>`,
        });
        expect(root).toEqualHtml(`
      <tp-elem-cart-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-cart-item>
    `);
    });
});
//# sourceMappingURL=cart-item.spec.js.map
