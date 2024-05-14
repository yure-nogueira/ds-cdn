import { newE2EPage } from "@stencil/core/testing";
describe('tp-plusminus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-plusminus></tp-plusminus>');
        const element = await page.find('tp-plusminus');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=plusminus.e2e.js.map
