import { newE2EPage } from "@stencil/core/testing";
describe('tp-check-card', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-check-card></tp-check-card>');
        const element = await page.find('tp-check-card');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=check-card.e2e.js.map
