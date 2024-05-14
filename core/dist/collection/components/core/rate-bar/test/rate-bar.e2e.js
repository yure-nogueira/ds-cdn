import { newE2EPage } from "@stencil/core/testing";
describe('tp-rate-bar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-rate-bar></tp-rate-bar>');
        const element = await page.find('tp-rate-bar');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=rate-bar.e2e.js.map
