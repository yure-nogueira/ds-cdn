import { newE2EPage } from "@stencil/core/testing";
describe('tp-add-card', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-add-card></tp-add-card>');
        const element = await page.find('tp-add-card');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=add-card.e2e.js.map
