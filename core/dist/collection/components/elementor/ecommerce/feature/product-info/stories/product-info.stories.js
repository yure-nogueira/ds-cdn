import { html } from "lit";
const meta = {
    title: 'components/Elementor/Ecommerce/Product Info',
    argTypes: {
        productId: {
            control: 'number',
            description: 'ID do produto.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
    },
    args: {
        productId: 37,
    },
};
export default meta;
export const Default = {
    render: () => html `
    <tp-elem-product-info product-id="36"></tp-elem-product-info>
  `,
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=product-info.stories.js.map
