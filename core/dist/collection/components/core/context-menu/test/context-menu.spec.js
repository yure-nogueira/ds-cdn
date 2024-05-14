import { newSpecPage } from "@stencil/core/testing";
import { TpContextMenu } from "../context-menu";
describe('tp-context-menu', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpContextMenu],
            html: '<tp-context-menu></tp-context-menu>',
        });
        expect(root).toEqualHtml(`
      <tp-context-menu>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-context-menu>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpContextMenu],
            html: `<tp-context-menu></tp-context-menu>`,
        });
        expect(root).toEqualHtml(`
      <tp-context-menu>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-context-menu>
    `);
    });
});
//# sourceMappingURL=context-menu.spec.js.map
