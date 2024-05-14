import { newE2EPage } from "@stencil/core/testing";
describe('tp-autocomplete', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-autocomplete></tp-autocomplete>');
        const element = await page.find('tp-autocomplete');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=autocomplete.e2e.js.map
