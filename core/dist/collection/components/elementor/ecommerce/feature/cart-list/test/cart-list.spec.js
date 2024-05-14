import { newSpecPage } from "@stencil/core/testing";
import { TpElemCartList } from "../cart-list";
describe('tp-elem-cart-list', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpElemCartList],
            html: '<tp-elem-cart-list></tp-elem-cart-list>',
        });
        expect(root).toEqualHtml(`
      <tp-elem-cart-list>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-cart-list>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpElemCartList],
            html: `<tp-elem-cart-list></tp-elem-cart-list>`,
        });
        expect(root).toEqualHtml(`
      <tp-elem-cart-list>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-elem-cart-list>
    `);
    });
});
//# sourceMappingURL=cart-list.spec.js.map
