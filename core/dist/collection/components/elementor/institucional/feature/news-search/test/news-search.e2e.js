import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-news-search', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-search></tp-elem-news-search>');
        const element = await page.find('tp-elem-news-search');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-search></tp-elem-news-search>');
    });
});
//# sourceMappingURL=news-search.e2e.js.map
