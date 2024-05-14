import { newSpecPage } from "@stencil/core/testing";
import { TpAlertFixed } from "../alert-fixed";
describe('tp-alert-fixed', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpAlertFixed],
            html: '<tp-alert-fixed></tp-alert-fixed>',
        });
        expect(root).toEqualHtml(`
      <tp-alert-fixed>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-alert-fixed>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpAlertFixed],
            html: `<tp-alert-fixed></tp-alert-fixed>`,
        });
        expect(root).toEqualHtml(`
      <tp-alert-fixed>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-alert-fixed>
    `);
    });
});
//# sourceMappingURL=alert-fixed.spec.js.map
