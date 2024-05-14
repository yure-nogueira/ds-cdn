import { newSpecPage } from "@stencil/core/testing";
import { TpDropdown } from "../dropdown";
describe('tp-dropdown', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpDropdown],
            html: '<tp-dropdown></tp-dropdown>',
        });
        expect(root).toEqualHtml(`
      <tp-dropdown>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-dropdown>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpDropdown],
            html: `<tp-dropdown></tp-dropdown>`,
        });
        expect(root).toEqualHtml(`
      <tp-dropdown>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-dropdown>
    `);
    });
});
//# sourceMappingURL=dropdown.spec.js.map
