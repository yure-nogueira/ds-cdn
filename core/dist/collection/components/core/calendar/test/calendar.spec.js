import { newSpecPage } from "@stencil/core/testing";
import { TpCalendar } from "../calendar";
describe('tp-calendar', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpCalendar],
            html: '<tp-calendar></tp-calendar>',
        });
        expect(root).toEqualHtml(`
      <tp-calendar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-calendar>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpCalendar],
            html: `<tp-calendar></tp-calendar>`,
        });
        expect(root).toEqualHtml(`
      <tp-calendar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-calendar>
    `);
    });
});
//# sourceMappingURL=calendar.spec.js.map
