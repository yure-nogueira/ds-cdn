import { newSpecPage } from "@stencil/core/testing";
import { TpOffline } from "../offline";
describe('tp-offline', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpOffline],
            html: '<tp-offline></tp-offline>',
        });
        expect(root).toEqualHtml(`
      <tp-offline>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-offline>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpOffline],
            html: `<tp-offline></tp-offline>`,
        });
        expect(root).toEqualHtml(`
      <tp-offline>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-offline>
    `);
    });
});
//# sourceMappingURL=offline.spec.js.map
