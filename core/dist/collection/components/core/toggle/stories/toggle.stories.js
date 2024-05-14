var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { defineCustomElement as defineCustomElementBadge } from "@ionic/core/components/ion-badge";
import { html } from "lit";
defineCustomElementBadge();
const meta = {
    title: 'components/Core/Toggle',
    argTypes: {
        collapsed: {
            control: { type: 'boolean' },
            description: 'Define se o componente esta aberto.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        iconClick: {
            control: { type: 'boolean' },
            description: 'Define se ... .',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
    args: {},
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-toggle
        color=${args.color}
        ?collapsed=${args.collapsed}
        ?icon-click=${args.iconClick}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse.
        Porro excepturi provident et, laborum quas libero odio sunt ab in odit.
        Error officiis, omnis in excepturi assumenda cupiditate voluptate
        dolorum! Dolor dolore veritatis officia tempora architecto eius quidem
        pariatur facilis vitae, ab eos nemo deserunt numquam illo nam natus!
        Quae quo voluptate sequi rerum blanditiis odit neque libero tempora
        excepturi soluta ullam iure, iste minima, ex optio voluptatibus
        repudiandae magnam velit id sapiente autem distinctio. Voluptatibus
        accusamus rem deserunt sapiente quasi tenetur sed suscipit ratione, hic
        soluta ullam, impedit consequuntur provident? Ea, pariatur autem! Veniam
        doloribus facere vel! Ad saepe odit nam quisquam, voluptatem fugiat
        dignissimos. Quod cupiditate quibusdam quam modi, sint tempora.
        Voluptatum omnis tempore accusantium libero odio exercitationem dolorum
        sequi eligendi perspiciatis voluptas mollitia minus culpa, atque maiores
        dolores repellendus recusandae ad facere? Doloribus maxime cupiditate
        neque earum voluptates, inventore quod eveniet quae quisquam natus enim
        veritatis.
      </tp-toggle>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-toggle/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=toggle.stories.js.map
