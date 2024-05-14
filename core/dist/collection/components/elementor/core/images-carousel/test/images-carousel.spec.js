import { newSpecPage } from "@stencil/core/testing";
import { TpImagesCarousel } from "../images-carousel";
describe('tp-images-carousel', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpImagesCarousel],
            html: '<tp-images-carousel></tp-images-carousel>',
        });
        expect(root).toEqualHtml(`
      <tp-images-carousel>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-images-carousel>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpImagesCarousel],
            html: `<tp-images-carousel></tp-images-carousel>`,
        });
        expect(root).toEqualHtml(`
      <tp-images-carousel>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-images-carousel>
    `);
    });
});
//# sourceMappingURL=images-carousel.spec.js.map
