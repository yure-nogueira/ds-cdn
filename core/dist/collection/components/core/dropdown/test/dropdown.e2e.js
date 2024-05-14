import { newE2EPage } from "@stencil/core/testing";
describe('tp-dropdown', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-dropdown></tp-dropdown>');
        const element = await page.find('tp-dropdown');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=dropdown.e2e.js.map
