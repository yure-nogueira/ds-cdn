import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-product-item', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-item></tp-elem-product-item>');
        const element = await page.find('tp-elem-product-item');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-product-item></tp-elem-product-item>');
    });
});
//# sourceMappingURL=product-item.e2e.js.map
