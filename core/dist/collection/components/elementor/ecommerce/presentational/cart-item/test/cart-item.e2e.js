import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-cart-item', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-cart-item></tp-elem-cart-item>');
        const element = await page.find('tp-elem-cart-item');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-cart-item></tp-elem-cart-item>');
    });
});
//# sourceMappingURL=cart-item.e2e.js.map
