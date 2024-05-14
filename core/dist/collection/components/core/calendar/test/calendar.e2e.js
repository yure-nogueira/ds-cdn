import { newE2EPage } from "@stencil/core/testing";
describe('tp-calendar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-calendar></tp-calendar>');
        const element = await page.find('tp-calendar');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=calendar.e2e.js.map
