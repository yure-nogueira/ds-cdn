import { html } from "lit";
const meta = {
    title: 'components/Elementor/Core/Animation',
    argTypes: {
    // slideMode: {
    //   control: 'boolean',
    //   description: 'Define se o componente é ou não usado como slide.',
    //   table: {
    //     defaultValue: { summary: 'undefined' },
    //     type: { summary: 'boolean' },
    //   },
    // },
    // alignment: {
    //   control: { type: 'select' },
    //   options: TP_BANNER.ALIGNMENT_VALUES,
    //   description: 'Define o alinhamento do conteúdo do banner.',
    //   table: {
    //     defaultValue: { summary: 'undefined' },
    //     type: { summary: TP_BANNER.ALIGNMENT_VALUES.join('|') },
    //   },
    // },
    },
};
export default meta;
export const Default = {
    render: () => html `
    <tp-animation animation="slideup" scroll-trigger delay="">
      <img src="https://placehold.co/300x300" alt="" />
    </tp-animation>
    <tp-animation animation="slideup" scroll-trigger delay="500">
      <img src="https://placehold.co/300x300" alt="" />
    </tp-animation>
    <tp-animation animation="slideup" scroll-trigger delay="1000">
      <img src="https://placehold.co/300x300" alt="" />
    </tp-animation>
    <tp-animation animation="slideup" scroll-trigger delay="1500">
      <img src="https://placehold.co/300x300" alt="" />
    </tp-animation>
    <tp-animation animation="slideup" scroll-trigger delay="2000">
      <img src="https://placehold.co/300x300" alt="" />
    </tp-animation>
    <tp-animation animation="slideup" scroll-trigger delay="2500">
      <img src="https://placehold.co/300x300" alt="" />
    </tp-animation>
  `,
};
Default.argTypes = {
    // @ts-ignore
    color: { table: { disable: true } },
};
//# sourceMappingURL=animation.stories.js.map
