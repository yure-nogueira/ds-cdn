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
import { defineCustomElement } from "@ionic/core/components/ion-skeleton-text";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Elementor/Institucional/News hero',
    argTypes: {
        ['tp-component']: {
            control: { type: 'select' },
            options: ['tp-elem-news-hero'],
            description: 'Define o skeleton a ser renderizado.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: '' },
            },
        },
    },
    args: {
        ['tp-component']: 'tp-elem-news-hero',
    },
};
export default meta;
export const Skeleton = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-skeleton-text
      tp-component="${args['tp-component']}"
      animated
    ></ion-skeleton-text>
  `;
    },
};
Skeleton.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=news-hero-skeleton.stories.js.map
