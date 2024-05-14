import { newSpecPage } from "@stencil/core/testing";
import { TpVideoThumbnail } from "../video-thumbnail";
describe('tp-video-thumbnail', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpVideoThumbnail],
            html: '<tp-video-thumbnail></tp-video-thumbnail>',
        });
        expect(root).toEqualHtml(`
      <tp-video-thumbnail>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-video-thumbnail>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpVideoThumbnail],
            html: `<tp-video-thumbnail></tp-video-thumbnail>`,
        });
        expect(root).toEqualHtml(`
      <tp-video-thumbnail>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-video-thumbnail>
    `);
    });
});
//# sourceMappingURL=video-thumbnail.spec.js.map
