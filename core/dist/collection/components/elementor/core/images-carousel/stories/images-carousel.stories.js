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
import { IMAGES_MOCK } from "../utils/images-carousel.mock";
const meta = {
    title: 'components/Elementor/Core/Images Carousel',
    argTypes: {
        images: {
            description: 'Os objetos com as imagens a serem mostradas no carrossel.',
            control: { type: 'array' },
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'CarouselImage[]' },
            },
        },
        // aspectRatio: {
        //   control: 'number',
        //   description:
        //     'As proporções do carrossel no formato h / w (height to width).',
        //   table: {
        //     defaultValue: { summary: 'undefined' },
        //     type: { summary: 'number' },
        //   },
        // },
        zoom: {
            description: 'Se as images terão ou não o recurso de zoom.',
            control: 'boolean',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
        thumbs: {
            description: 'Se o carrossel terá ou não o recurso de thumbs.',
            control: 'boolean',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'boolean' },
            },
        },
    },
    args: {
        images: IMAGES_MOCK,
        aspectRatio: 1 / 1,
        zoom: true,
        thumbs: true,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        setTimeout(() => {
            const host = document.querySelector('tp-images-carousel');
            host.images = args.images;
        }, 0);
        console.log('args', args);
        return html `
      <tp-images-carousel
        ?zoom="${args.zoom}"
        ?thumbs="${args.thumbs}"
      ></tp-images-carousel>
    `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=images-carousel.stories.js.map
