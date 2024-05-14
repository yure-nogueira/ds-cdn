import { newSpecPage } from "@stencil/core/testing";
import { TpTiles } from "../tiles";
describe('tp-tiles', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpTiles],
            html: '<tp-tiles></tp-tiles>',
        });
        expect(root).toEqualHtml(`
      <tp-tiles>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-tiles>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpTiles],
            html: `<tp-tiles></tp-tiles>`,
        });
        expect(root).toEqualHtml(`
      <tp-tiles>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-tiles>
    `);
    });
});
//# sourceMappingURL=tiles.spec.js.map
