import { newE2EPage } from "@stencil/core/testing";
describe('tp-font-zoom', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-font-zoom></tp-font-zoom>');
        const element = await page.find('tp-font-zoom');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=font-zoom.e2e.js.map
