import { newSpecPage } from "@stencil/core/testing";
import { TpToggle } from "../toggle";
describe('tp-toggle', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpToggle],
            html: '<tp-toggle></tp-toggle>',
        });
        expect(root).toEqualHtml(`
      <tp-toggle>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-toggle>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpToggle],
            html: `<tp-toggle></tp-toggle>`,
        });
        expect(root).toEqualHtml(`
      <tp-toggle>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-toggle>
    `);
    });
});
//# sourceMappingURL=toggle.spec.js.map
