import { newE2EPage } from "@stencil/core/testing";
describe('tp-context-menu', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-context-menu></tp-context-menu>');
        const element = await page.find('tp-context-menu');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=context-menu.e2e.js.map
