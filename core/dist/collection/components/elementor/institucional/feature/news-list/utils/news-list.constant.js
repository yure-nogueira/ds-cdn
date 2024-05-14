import { getAssetPath } from "@stencil/core";
export const NEWS_LIST = {
    icons: {
        searchX: getAssetPath('./assets/tp-search-x.svg'),
        plus: getAssetPath('./assets/tp-plus.svg'),
        wifiOff: getAssetPath('./assets/tp-wi-fi-off.svg'),
    },
    modeKeys: {
        search: 'busca',
        category: 'categoria',
    },
    defaultMode: 'all',
    defaultPerPage: 5,
};
//# sourceMappingURL=news-list.constant.js.map
