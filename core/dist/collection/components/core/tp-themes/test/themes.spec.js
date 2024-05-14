import { newSpecPage } from "@stencil/core/testing";
import { TpThemes } from "../themes";
describe('tp-themes', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpThemes],
            html: '<tp-themes></tp-themes>',
        });
        expect(root).toEqualHtml(`
      <tp-themes>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-themes>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpThemes],
            html: `<tp-themes></tp-themes>`,
        });
        expect(root).toEqualHtml(`
      <tp-themes>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-themes>
    `);
    });
});
//# sourceMappingURL=themes.spec.js.map
