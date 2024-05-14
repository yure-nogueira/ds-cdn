import { newE2EPage } from "@stencil/core/testing";
describe('tp-toolbar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-toolbar></tp-toolbar>');
        const element = await page.find('tp-toolbar');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=toolbar.e2e.js.map
