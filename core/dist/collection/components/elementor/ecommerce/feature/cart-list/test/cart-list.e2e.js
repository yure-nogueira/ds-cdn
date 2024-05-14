import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-cart-list', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-cart-list></tp-elem-cart-list>');
        const element = await page.find('tp-elem-cart-list');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-cart-list></tp-elem-cart-list>');
    });
});
//# sourceMappingURL=cart-list.e2e.js.map
