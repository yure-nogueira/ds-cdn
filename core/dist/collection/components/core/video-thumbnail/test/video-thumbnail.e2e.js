import { newE2EPage } from "@stencil/core/testing";
describe('tp-video-thumbnail', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-video-thumbnail></tp-video-thumbnail>');
        const element = await page.find('tp-video-thumbnail');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=video-thumbnail.e2e.js.map
