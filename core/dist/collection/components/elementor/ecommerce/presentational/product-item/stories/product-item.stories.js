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
import { html } from "lit";
import { PRODUCT_ITEM_MOCK } from "../utils/product-item.mock";
const meta = {
    title: 'components/Elementor/Ecommerce/Product item',
    argTypes: {
        product: {
            description: 'Dados referentes a um produto específico.',
            control: { type: 'array' },
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'ProductItem' },
            },
        },
    },
    args: {
        product: PRODUCT_ITEM_MOCK,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        setTimeout(() => {
            const host = document.querySelector('tp-elem-product-item');
            host.product = args.product;
        }, 0);
        return html `
      <tp-elem-product-item>
        <ion-text
          slot="title"
          class="product-list__title"
          tp-type="p18xb"
          color="neutral-10"
        >
          <h3>
            <a href="#">Nome do Produto</a>
          </h3>
        </ion-text>

        <ion-text
          slot="regular-price"
          class="product-list__regular-price"
          color="neutral-6"
          tp-type="p14"
        >
          <p>R$ 10,95</p>
        </ion-text>

        <ion-text slot="price" color="neutral-8">
          <p>R$ 8,50</p>
        </ion-text>

        <ion-button
          slot="button"
          class="product-list__item-button"
          color="neutral-2"
          expand="block"
        >
          Adicionar ao carrinho
        </ion-button>
      </tp-elem-product-item>
    `;
    },
};
//# sourceMappingURL=product-item.stories.js.map
