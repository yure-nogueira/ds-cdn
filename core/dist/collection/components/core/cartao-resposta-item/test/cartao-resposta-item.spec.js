import { newSpecPage } from "@stencil/core/testing";
import { TpCartaoRespostaItem } from "../cartao-resposta-item";
describe('tp-cartao-resposta-item', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpCartaoRespostaItem],
            html: '<tp-cartao-resposta-item></tp-cartao-resposta-item>',
        });
        expect(root).toEqualHtml(`
      <tp-cartao-resposta-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-cartao-resposta-item>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpCartaoRespostaItem],
            html: `<tp-cartao-resposta-item></tp-cartao-resposta-item>`,
        });
        expect(root).toEqualHtml(`
      <tp-cartao-resposta-item>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-cartao-resposta-item>
    `);
    });
});
//# sourceMappingURL=cartao-resposta-item.spec.js.map
