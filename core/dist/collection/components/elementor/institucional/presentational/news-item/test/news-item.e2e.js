import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-news-item', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-item></tp-elem-news-item>');
        const element = await page.find('tp-elem-news-item');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-item></tp-elem-news-item>');
    });
});
//# sourceMappingURL=news-item.e2e.js.map
