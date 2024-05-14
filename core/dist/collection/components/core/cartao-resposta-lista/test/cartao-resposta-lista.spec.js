import { newSpecPage } from "@stencil/core/testing";
import { TpCartaoRespostaLista } from "../cartao-resposta-lista";
describe('tp-cartao-resposta-lista', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpCartaoRespostaLista],
            html: '<tp-cartao-resposta-lista></tp-cartao-resposta-lista>',
        });
        expect(root).toEqualHtml(`
      <tp-cartao-resposta-lista>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-cartao-resposta-lista>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpCartaoRespostaLista],
            html: `<tp-cartao-resposta-lista></tp-cartao-resposta-lista>`,
        });
        expect(root).toEqualHtml(`
      <tp-cartao-resposta-lista>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-cartao-resposta-lista>
    `);
    });
});
//# sourceMappingURL=cartao-resposta-lista.spec.js.map
