import { newSpecPage } from "@stencil/core/testing";
import { TpAddCard } from "../add-card";
describe('tp-add-card', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpAddCard],
            html: '<tp-add-card></tp-add-card>',
        });
        expect(root).toEqualHtml(`
      <tp-add-card>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-add-card>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpAddCard],
            html: `<tp-add-card></tp-add-card>`,
        });
        expect(root).toEqualHtml(`
      <tp-add-card>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-add-card>
    `);
    });
});
//# sourceMappingURL=add-card.spec.js.map
