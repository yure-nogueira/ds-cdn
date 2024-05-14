import { newE2EPage } from "@stencil/core/testing";
describe('tp-elem-news-hero', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-hero></tp-elem-news-hero>');
        const element = await page.find('tp-elem-news-hero');
        expect(element).toHaveClass('hydrated');
    });
    it('renders changes to the name data', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-elem-news-hero></tp-elem-news-hero>');
    });
});
//# sourceMappingURL=news-hero.e2e.js.map
