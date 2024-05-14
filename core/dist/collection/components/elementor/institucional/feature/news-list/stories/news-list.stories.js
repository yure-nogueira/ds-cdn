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
import { defineCustomElement as defineCustomElementText } from "@ionic/core/components/ion-text";
import { html } from "lit";
import { NewsListModeEnum } from "../utils/news-list.enum";
defineCustomElementText();
const meta = {
    title: 'components/Elementor/Institucional/News list',
    argTypes: {
        mode: {
            control: { type: 'select' },
            options: Object.values(NewsListModeEnum),
            description: 'Define o modo de uso do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: Object.values(NewsListModeEnum).join(' |'),
                },
            },
        },
        perPage: {
            control: { type: 'number', min: 1, max: 20, step: 1 },
            description: 'Define a quantidade de items por página a serem carregados.',
            table: {
                defaultValue: { summary: '5' },
                type: { summary: 'number' },
            },
        },
    },
    args: {
        perPage: 5,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-elem-news-list
        per-page="${args.perPage}"
        mode="${args.mode}"
        ?animated="${args.animated}"
      >
        <ion-text slot="not-found" tp-type="p16xb" color="neutral-8">
          <p>Nenhuma notícia encontrada.</p>
        </ion-text>

        <ion-text slot="connection-error" tp-type="p16xb" color="neutral-8">
          <p>
            Conexão não estabelecida. <br />
            Verifique sua internet ou tente recarregar a página.
          </p>
        </ion-text>
      </tp-elem-news-list>
    `;
    },
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=news-list.stories.js.map
