import { newE2EPage } from "@stencil/core/testing";
describe('tp-calendar-day', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-calendar-day></tp-calendar-day>');
        const element = await page.find('tp-calendar-day');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=calendar-day.e2e.js.map
