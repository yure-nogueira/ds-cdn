import { newSpecPage } from "@stencil/core/testing";
import { TpToolbar } from "../toolbar";
describe('tp-toolbar', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpToolbar],
            html: '<tp-toolbar></tp-toolbar>',
        });
        expect(root).toEqualHtml(`
      <tp-toolbar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-toolbar>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpToolbar],
            html: `<tp-toolbar></tp-toolbar>`,
        });
        expect(root).toEqualHtml(`
      <tp-toolbar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-toolbar>
    `);
    });
});
//# sourceMappingURL=toolbar.spec.js.map
