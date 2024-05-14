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
const meta = {
    title: 'components/Elementor/Institucional/News Search',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        baseSearchPath: {
            control: 'text',
            description: 'Define a rota base da página de pesquisa por termo.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        baseCategoryPath: {
            control: 'text',
            description: 'Define a rota base da página de categoria.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string',
                },
            },
        },
    },
    args: {
        baseSearchPath: 'mednews/search',
        baseCategoryPath: 'mednews/category',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-elem-news-search
        ?color="${args.color}"
        base-search-route="${args.baseSearchPath}"
        base-category-route="${args.baseCategoryPath}"
      >
        <div slot="select-options">
          <ion-select-option value="option-1"> Option 1 </ion-select-option>
          <ion-select-option value="option-2"> Option 2 </ion-select-option>
          <ion-select-option value="option-3"> Option 3 </ion-select-option>
          <ion-select-option value="option-4"> Option 4 </ion-select-option>
          <ion-select-option value="option-5"> Option 5 </ion-select-option>
          <ion-select-option value="option-6"> Option 6 </ion-select-option>
        </div>
      </tp-elem-news-search>
    `;
    },
};
//# sourceMappingURL=news-search.stories.js.map
