import { newE2EPage } from "@stencil/core/testing";
describe('tp-banner', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-banner></tp-banner>');
        const element = await page.find('tp-banner');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-banner></tp-banner>');
    });
});
//# sourceMappingURL=banner.e2e.js.map
