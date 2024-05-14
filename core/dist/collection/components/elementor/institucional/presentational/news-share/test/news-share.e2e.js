import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-news-share', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-share></tp-elem-news-share>');
        const element = await page.find('tp-elem-news-share');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-share></tp-elem-news-share>');
    });
});
//# sourceMappingURL=news-share.e2e.js.map
