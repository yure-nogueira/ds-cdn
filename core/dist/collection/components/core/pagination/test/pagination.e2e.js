import { newE2EPage } from "@stencil/core/testing";
describe('tp-pagination', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-pagination></tp-pagination>');
        const element = await page.find('tp-pagination');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-pagination></tp-pagination>');
    });
});
//# sourceMappingURL=pagination.e2e.js.map
