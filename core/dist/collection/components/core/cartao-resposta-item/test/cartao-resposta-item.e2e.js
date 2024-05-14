import { newE2EPage } from "@stencil/core/testing";
describe('tp-cartao-resposta-item', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-cartao-resposta-item></tp-cartao-resposta-item>');
        const element = await page.find('tp-cartao-resposta-item');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=cartao-resposta-item.e2e.js.map
