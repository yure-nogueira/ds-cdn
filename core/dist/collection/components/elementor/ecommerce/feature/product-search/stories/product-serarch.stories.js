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
    title: 'components/Elementor/Ecommerce/Product Search',
    argTypes: {},
    args: {
        searchPageUrl: '#',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-elem-product-search
      search-page-url="${args.searchPageUrl}"
      color="${args.color}"
    ></tp-elem-product-search>
  `;
    },
};
//# sourceMappingURL=product-serarch.stories.js.map
