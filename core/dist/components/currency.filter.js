import { c as camelcaseKeys } from './index2.js';

const ORDERBY = {
    DATE: 'date',
    PRICE: 'price',
    PRICE_ASC: 'price-asc',
    POPULARITY: 'popularity',
    RATING: 'rating',
    TITLE: 'title',
};
const API_CART_ACTIONS = {
    addToCart: 'tp_add_to_cart',
    getCart: 'tp_get_cart',
    updateCart: 'tp_update_cart',
    removeFromCart: 'tp_remove_from_cart',
};
const API_PRODUCT_ACTIONS = {
    getCategories: 'tp_get_categories',
};

class ApiProduct {
    static async getFeaturedProducts() {
        const rawResponse = await fetch(`${process.env.WOOPROXY_BASE_URL}/products/featured`);
        const parsedResponse = await rawResponse.json();
        const { data, totalPages } = parsedResponse;
        const products = camelcaseKeys(data, { deep: true });
        return {
            products,
            totalPages,
        };
    }
    static async getOrderedProducts(params = {}) {
        const { orderby, order, page, category } = params;
        const query = new URLSearchParams({
            order: order !== null && order !== void 0 ? order : 'desc',
            page: page ? `${page}` : '1',
            category: category ? `${category}` : '',
        });
        const rawResponse = await fetch(`${process.env.WOOPROXY_BASE_URL}/products/ordered/${orderby !== null && orderby !== void 0 ? orderby : 'date'}?${query}`);
        const parsedResponse = await rawResponse.json();
        const { data, totalPages } = parsedResponse;
        const products = camelcaseKeys(data, { deep: true });
        return {
            products,
            totalPages,
        };
    }
    static async getSearchedProducts(searchTerm, optionalParams = {}) {
        const rawResponse = await fetch(`${process.env.WOOPROXY_BASE_URL}/products/search/${searchTerm}`, Object.assign({}, optionalParams));
        if (!rawResponse.ok) {
            throw new Error();
        }
        const parsedResponse = await rawResponse.json();
        const { data, totalPages } = parsedResponse;
        const products = camelcaseKeys(data, { deep: true });
        return {
            products,
            totalPages,
        };
    }
    static async getProductById(id) {
        const rawResponse = await fetch(`${process.env.WOOPROXY_BASE_URL}/products/${id}`);
        const parsedResponse = await rawResponse.json();
        const { data } = parsedResponse;
        const product = camelcaseKeys(data, { deep: true });
        return product;
    }
    static async getCategories() {
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(Object.assign({ action: API_PRODUCT_ACTIONS.getCategories })),
        });
        const parsedResponse = await rawResponse.json();
        const { data } = parsedResponse;
        const categories = camelcaseKeys(data, {
            deep: true,
        });
        return categories;
    }
}

function currency(value, locale) {
    switch (locale) {
        case 'pt-br':
            return currencyPtBr(value);
        default:
            return value;
    }
}
function currencyPtBr(value) {
    if (typeof value === 'string') {
        return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
    }
    if (typeof value === 'number') {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
    }
}

export { ApiProduct as A, ORDERBY as O, API_CART_ACTIONS as a, currency as c };

//# sourceMappingURL=currency.filter.js.map