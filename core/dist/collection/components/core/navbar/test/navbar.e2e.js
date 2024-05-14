import { newE2EPage } from "@stencil/core/testing";
describe('tp-navbar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-navbar></tp-navbar>');
        const element = await page.find('tp-navbar');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=navbar.e2e.js.map
