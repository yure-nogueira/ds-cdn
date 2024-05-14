import { newE2EPage } from "@stencil/core/testing";
describe('tp-themes', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-themes></tp-themes>');
        const element = await page.find('tp-themes');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=themes.e2e.js.map
