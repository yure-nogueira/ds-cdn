import { newSpecPage } from "@stencil/core/testing";
import { TpBase } from "../base";
describe('tp-base', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpBase],
            html: '<tp-base></tp-base>',
        });
        expect(root).toEqualHtml(`
      <tp-base>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-base>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpBase],
            html: `<tp-base></tp-base>`,
        });
        expect(root).toEqualHtml(`
      <tp-base>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-base>
    `);
    });
});
//# sourceMappingURL=base.spec.js.map
