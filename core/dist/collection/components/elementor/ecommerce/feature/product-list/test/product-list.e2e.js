import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-product-list', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-list></tp-elem-product-list>');
        const element = await page.find('tp-elem-product-list');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-list></tp-elem-product-list>');
    });
});
//# sourceMappingURL=product-list.e2e.js.map
