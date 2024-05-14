import { newE2EPage } from "@stencil/core/testing";
describe('tp-download-button', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-download-button></tp-download-button>');
        const element = await page.find('tp-download-button');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=download-button.e2e.js.map
