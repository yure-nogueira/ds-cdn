import { newSpecPage } from "@stencil/core/testing";
import { TpPagination } from "../pagination";
describe('tp-pagination', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpPagination],
            html: '<tp-pagination></tp-pagination>',
        });
        expect(root).toEqualHtml(`
      <tp-pagination>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-pagination>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpPagination],
            html: `<tp-pagination></tp-pagination>`,
        });
        expect(root).toEqualHtml(`
      <tp-pagination>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-pagination>
    `);
    });
});
//# sourceMappingURL=pagination.spec.js.map
