import { newE2EPage } from "@stencil/core/testing";
describe('tp-question', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<tp-question></tp-question>');
        const element = await page.find('tp-question');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=question.e2e.js.map
