import { html } from "lit";
const meta = {
    title: 'components/Elementor/Core/Hero',
    argTypes: {},
};
export default meta;
export const Default = {
    render: () => html `
    <tp-hero>
      <swiper-slide>
        <tp-banner slide-mode alignment="left">
          <img slot="image" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-lg" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-md" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-sm" src="https://placehold.co/414x431" alt="" />

          <ion-label slot="title" tp-type="h48x" color="warning">
            Nome do Produto 1
          </ion-label>

          <ion-label slot="title-lg" tp-type="h32x" color="warning">
            Nome do Produto 1
          </ion-label>

          <ion-label slot="title-md" tp-type="h24x" color="warning">
            Nome do Produto 1
          </ion-label>

          <ion-label slot="title-sm" tp-type="h20x" color="warning">
            Nome do Produto 1
          </ion-label>

          <ion-label slot="subtitle" tp-type="h32x" color="neutral-10">
            Texto Descritivo do produto 1
          </ion-label>

          <ion-label slot="subtitle-lg" tp-type="h24x" color="neutral-10">
            Texto Descritivo do produto 1
          </ion-label>

          <ion-label slot="subtitle-md" tp-type="h20x" color="neutral-10">
            Texto Descritivo do produto 1
          </ion-label>

          <ion-button href="#" slot="link" fill="outline" color="neutral-10">
            Ver Mais
          </ion-button>

          <ion-button href="#" slot="link-lg" fill="outline" color="neutral-10">
            Ver Mais
          </ion-button>

          <ion-button
            href="#"
            slot="link-md"
            size="xs"
            fill="outline"
            color="neutral-10"
          >
            Ver Mais
          </ion-button>

          <ion-button
            href="#"
            slot="link-sm"
            size="xs"
            fill="outline"
            color="neutral-10"
          >
            Ver Mais
          </ion-button>
        </tp-banner>
      </swiper-slide>

      <swiper-slide>
        <tp-banner slide-mode alignment="center">
          <img slot="image" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-lg" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-md" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-sm" src="https://placehold.co/414x431" alt="" />

          <ion-label slot="title" tp-type="h48x" color="warning">
            Nome do Produto 2
          </ion-label>

          <ion-label slot="title-lg" tp-type="h32x" color="warning">
            Nome do Produto 2
          </ion-label>

          <ion-label slot="title-md" tp-type="h24x" color="warning">
            Nome do Produto 2
          </ion-label>

          <ion-label slot="title-sm" tp-type="h20x" color="warning">
            Nome do Produto 2
          </ion-label>

          <ion-label slot="subtitle" tp-type="h32x" color="neutral-10">
            Texto Descritivo do produto 2
          </ion-label>

          <ion-label slot="subtitle-lg" tp-type="h24x" color="neutral-10">
            Texto Descritivo do produto 2
          </ion-label>

          <ion-label slot="subtitle-md" tp-type="h20x" color="neutral-10">
            Texto Descritivo do produto 2
          </ion-label>

          <ion-button href="#" slot="link" fill="outline" color="neutral-10">
            Ver Mais
          </ion-button>

          <ion-button href="#" slot="link-lg" fill="outline" color="neutral-10">
            Ver Mais
          </ion-button>

          <ion-button
            href="#"
            slot="link-md"
            size="xs"
            fill="outline"
            color="neutral-10"
          >
            Ver Mais
          </ion-button>

          <ion-button
            href="#"
            slot="link-sm"
            size="xs"
            fill="outline"
            color="neutral-10"
          >
            Ver Mais
          </ion-button>
        </tp-banner>
      </swiper-slide>

      <swiper-slide>
        <tp-banner slide-mode alignment="right">
          <img slot="image" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-lg" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-md" src="https://placehold.co/1366x504" alt="" />

          <img slot="image-sm" src="https://placehold.co/414x431" alt="" />

          <ion-label slot="title" tp-type="h48x" color="warning">
            Nome do Produto 3
          </ion-label>

          <ion-label slot="title-lg" tp-type="h32x" color="warning">
            Nome do Produto 3
          </ion-label>

          <ion-label slot="title-md" tp-type="h24x" color="warning">
            Nome do Produto 3
          </ion-label>

          <ion-label slot="title-sm" tp-type="h20x" color="warning">
            Nome do Produto 3
          </ion-label>

          <ion-label slot="subtitle" tp-type="h32x" color="neutral-10">
            Texto Descritivo do produto 3
          </ion-label>

          <ion-label slot="subtitle-lg" tp-type="h24x" color="neutral-10">
            Texto Descritivo do produto 3
          </ion-label>

          <ion-label slot="subtitle-md" tp-type="h20x" color="neutral-10">
            Texto Descritivo do produto 3
          </ion-label>

          <ion-button href="#" slot="link" fill="outline" color="neutral-10">
            Ver Mais
          </ion-button>

          <ion-button href="#" slot="link-lg" fill="outline" color="neutral-10">
            Ver Mais
          </ion-button>

          <ion-button
            href="#"
            slot="link-md"
            size="xs"
            fill="outline"
            color="neutral-10"
          >
            Ver Mais
          </ion-button>

          <ion-button
            href="#"
            slot="link-sm"
            size="xs"
            fill="outline"
            color="neutral-10"
          >
            Ver Mais
          </ion-button>
        </tp-banner>
      </swiper-slide>
    </tp-hero>
  `,
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=hero.stories.js.map
