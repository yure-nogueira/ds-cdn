import { newE2EPage } from "@stencil/core/testing";
describe('tp-base', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-base></tp-base>');
        const element = await page.find('tp-base');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=base.e2e.js.map
