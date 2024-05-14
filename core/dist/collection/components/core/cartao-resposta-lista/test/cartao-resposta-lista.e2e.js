import { newE2EPage } from "@stencil/core/testing";
describe('tp-cartao-resposta-lista', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-cartao-resposta-lista></tp-cartao-resposta-lista>');
        const element = await page.find('tp-cartao-resposta-lista');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=cartao-resposta-lista.e2e.js.map
