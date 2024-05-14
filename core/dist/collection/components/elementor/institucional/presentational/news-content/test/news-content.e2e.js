import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-news-content', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-content></tp-elem-news-content>');
        const element = await page.find('tp-elem-news-content');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-content></tp-elem-news-content>');
    });
});
//# sourceMappingURL=news-content.e2e.js.map
