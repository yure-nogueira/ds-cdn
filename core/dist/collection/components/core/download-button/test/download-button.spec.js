import { newSpecPage } from "@stencil/core/testing";
import { TpDownloadButton } from "../download-button";
describe('tp-download-button', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpDownloadButton],
            html: '<tp-download-button></tp-download-button>',
        });
        expect(root).toEqualHtml(`
      <tp-download-button>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-download-button>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpDownloadButton],
            html: `<tp-download-button></tp-download-button>`,
        });
        expect(root).toEqualHtml(`
      <tp-download-button>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-download-button>
    `);
    });
});
//# sourceMappingURL=download-button.spec.js.map
