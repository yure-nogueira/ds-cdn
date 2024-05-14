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
import { defineCustomElement as defineCustomElementIcon } from "@ionic/core/components/ion-icon";
import { html } from "lit";
import { TpDownloadButtonSizesEnum } from "../utils/download-button.enum";
defineCustomElementIcon();
const meta = {
    title: 'components/Core/Download button',
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Define o progresso do download.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        downloading: {
            control: { type: 'boolean' },
            description: 'Define se o download está ou não em progresso.',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        downloaded: {
            control: { type: 'boolean' },
            description: 'Define se o download está finalizado.',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
        size: {
            control: { type: 'check' },
            options: Object.values(TpDownloadButtonSizesEnum),
            description: 'Define a variação de tamanho do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: Object.values(TpDownloadButtonSizesEnum).join(' | ') },
            },
        },
    },
    args: {
        value: 50,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-download-button
        color=${args.color}
        value=${args.value}
        ?downloading=${args.downloading}
        ?downloaded=${args.downloaded}
        size=${args.size}
      ></tp-download-button>
    `;
    },
};
//# sourceMappingURL=download-button.stories.js.map
