import { newE2EPage } from "@stencil/core/testing";
describe('tp-toggle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-toggle></tp-toggle>');
        const element = await page.find('tp-toggle');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=toggle.e2e.js.map
