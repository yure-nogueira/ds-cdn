import { newSpecPage } from "@stencil/core/testing";
import { TpHeader } from "../header";
describe('tp-header', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpHeader],
            html: '<tp-header></tp-header>',
        });
        expect(root).toEqualHtml(`
      <tp-header>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-header>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpHeader],
            html: `<tp-header></tp-header>`,
        });
        expect(root).toEqualHtml(`
      <tp-header>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-header>
    `);
    });
});
//# sourceMappingURL=header.spec.js.map
