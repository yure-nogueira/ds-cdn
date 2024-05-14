import { newE2EPage } from "@stencil/core/testing";
describe('tp-hero', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-hero></tp-hero>');
        const element = await page.find('tp-hero');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-hero></tp-hero>');
    });
});
//# sourceMappingURL=hero.e2e.js.map
