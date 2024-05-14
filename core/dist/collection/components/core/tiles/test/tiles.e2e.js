import { newE2EPage } from "@stencil/core/testing";
describe('tp-tiles', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-tiles></tp-tiles>');
        const element = await page.find('tp-tiles');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=tiles.e2e.js.map
