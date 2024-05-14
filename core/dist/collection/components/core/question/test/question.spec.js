import { newSpecPage } from "@stencil/core/testing";
import { TpQuestion } from "../question";
describe('tp-question', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpQuestion],
            html: '<tp-question></tp-question>',
        });
        expect(root).toEqualHtml(`
      <tp-question>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-question>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpQuestion],
            html: `<tp-question></tp-question>`,
        });
        expect(root).toEqualHtml(`
      <tp-question>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-question>
    `);
    });
});
//# sourceMappingURL=question.spec.js.map
