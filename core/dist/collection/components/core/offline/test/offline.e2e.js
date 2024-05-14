import { newE2EPage } from "@stencil/core/testing";
describe('tp-offline', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-offline></tp-offline>');
        const element = await page.find('tp-offline');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=offline.e2e.js.map
