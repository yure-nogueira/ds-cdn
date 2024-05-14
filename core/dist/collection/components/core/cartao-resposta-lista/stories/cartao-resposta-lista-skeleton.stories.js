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
    title: 'components/Core/Cartão resposta lista',
    argTypes: {
        ['tp-component']: {
            control: { type: 'select' },
            options: ['tp-cartao-resposta-item'],
            description: 'Define o skeleton a ser renderizado.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'string' },
            },
        },
        flex: {
            control: { type: 'boolean' },
            description: 'Define a estilização do componente.',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
    },
    args: {
        ['tp-component']: 'tp-cartao-resposta-item',
    },
};
export default meta;
export const Skeleton = {
    render: (_a) => {
        var args = __rest(_a, []);
        const itemTemplates = [];
        for (let index = 0; index < 31; index++) {
            itemTemplates.push(html `<ion-skeleton-text
          tp-component="${args['tp-component']}"
          animated
        ></ion-skeleton-text>`);
        }
        return html `
      <tp-cartao-resposta-lista ?flex=${args.flex}>
        ${itemTemplates}
      </tp-cartao-resposta-lista>
    `;
    },
};
Skeleton.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=cartao-resposta-lista-skeleton.stories.js.map
