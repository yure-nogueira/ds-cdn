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
import { TP_VIDEO_THUMBNAIL } from "../utils/video-thumbnail.constant";
const meta = {
    title: 'components/Core/Video thumbnail',
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Define o valor da barra de progresso.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        url: {
            control: { type: 'text' },
            description: 'Define a url da img thumbnail do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        size: {
            control: { type: 'select' },
            options: [...TP_VIDEO_THUMBNAIL['sizes']],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_VIDEO_THUMBNAIL['sizes'].join('|') },
            },
        },
    },
    args: {
        value: 50,
        url: 'https://placehold.co/856x524',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-video-thumbnail
        color=${args.color}
        size=${args.size}
        value=${args.value / 100}
        url=${args.url}
      ></tp-video-thumbnail>
    `;
    },
};
//# sourceMappingURL=video-thumbnail.stories.js.map
