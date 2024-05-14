import { newE2EPage } from "@stencil/core/testing";
describe('tp-images-carousel', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-images-carousel></tp-images-carousel>');
        const element = await page.find('tp-images-carousel');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-images-carousel></tp-images-carousel>');
    });
});
//# sourceMappingURL=images-carousel.e2e.js.map
