import { newSpecPage } from "@stencil/core/testing";
import { TpCalendarDay } from "../calendar-day";
describe('tp-calendar-day', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [TpCalendarDay],
            html: '<tp-calendar-day></tp-calendar-day>',
        });
        expect(root).toEqualHtml(`
      <tp-calendar-day>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-calendar-day>
    `);
    });
    it('renders with values', async () => {
        const { root } = await newSpecPage({
            components: [TpCalendarDay],
            html: `<tp-calendar-day></tp-calendar-day>`,
        });
        expect(root).toEqualHtml(`
      <tp-calendar-day>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-calendar-day>
    `);
    });
});
//# sourceMappingURL=calendar-day.spec.js.map
