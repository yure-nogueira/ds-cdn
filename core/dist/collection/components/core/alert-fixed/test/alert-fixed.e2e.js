import { newE2EPage } from "@stencil/core/testing";
describe('tp-alert-fixed', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-alert-fixed></tp-alert-fixed>');
        const element = await page.find('tp-alert-fixed');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-alert-fixed></tp-alert-fixed>');
    });
});
//# sourceMappingURL=alert-fixed.e2e.js.map
