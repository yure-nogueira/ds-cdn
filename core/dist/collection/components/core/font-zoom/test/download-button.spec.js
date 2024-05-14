import { newSpecPage } from "@stencil/core/testing";
import { TpFontZoom } from "../font-zoom";
describe('tp-font-zoom', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpFontZoom],
            html: '<tp-font-zoom></tp-font-zoom>',
        });
        expect(root).toEqualHtml(`
      <tp-font-zoom>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-font-zoom>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpFontZoom],
            html: `<tp-font-zoom></tp-font-zoom>`,
        });
        expect(root).toEqualHtml(`
      <tp-font-zoom>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-font-zoom>
    `);
    });
});
//# sourceMappingURL=download-button.spec.js.map
