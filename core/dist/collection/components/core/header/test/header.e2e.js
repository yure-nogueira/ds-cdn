import { newE2EPage } from "@stencil/core/testing";
describe('tp-header', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-header></tp-header>');
        const element = await page.find('tp-header');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=header.e2e.js.map
