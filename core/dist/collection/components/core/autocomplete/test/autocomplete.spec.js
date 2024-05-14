import { newSpecPage } from "@stencil/core/testing";
import { TpAutocomplete } from "../autocomplete";
describe('tp-autocomplete', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpAutocomplete],
            html: '<tp-autocomplete></tp-autocomplete>',
        });
        expect(root).toEqualHtml(`
      <tp-autocomplete>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-autocomplete>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpAutocomplete],
            html: `<tp-autocomplete></tp-autocomplete>`,
        });
        expect(root).toEqualHtml(`
      <tp-autocomplete>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-autocomplete>
    `);
    });
});
//# sourceMappingURL=autocomplete.spec.js.map
