import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-product-search', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-search></tp-elem-product-search>');
        const element = await page.find('tp-elem-product-search');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-search></tp-elem-product-search>');
    });
});
//# sourceMappingURL=product-search.e2e.js.map
