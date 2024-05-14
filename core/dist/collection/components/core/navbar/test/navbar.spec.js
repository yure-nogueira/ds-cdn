import { newSpecPage } from "@stencil/core/testing";
import { TpNavbar } from "../navbar";
describe('tp-navbar', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpNavbar],
            html: '<tp-navbar></tp-navbar>',
        });
        expect(root).toEqualHtml(`
      <tp-navbar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-navbar>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpNavbar],
            html: `<tp-navbar></tp-navbar>`,
        });
        expect(root).toEqualHtml(`
      <tp-navbar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-navbar>
    `);
    });
});
//# sourceMappingURL=navbar.spec.js.map
