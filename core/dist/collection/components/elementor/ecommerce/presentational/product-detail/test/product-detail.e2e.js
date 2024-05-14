import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-product-detail', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-detail></tp-elem-product-detail>');
        const element = await page.find('tp-elem-product-detail');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-detail></tp-elem-product-detail>');
    });
});
//# sourceMappingURL=product-detail.e2e.js.map
