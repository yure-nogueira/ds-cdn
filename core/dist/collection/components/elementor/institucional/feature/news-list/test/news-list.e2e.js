import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-news-list', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-list></tp-elem-news-list>');
        const element = await page.find('tp-elem-news-list');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-list></tp-elem-news-list>');
    });
});
//# sourceMappingURL=news-list.e2e.js.map
