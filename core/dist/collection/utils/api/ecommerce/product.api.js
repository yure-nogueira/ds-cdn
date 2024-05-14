import camelcaseKeys from "camelcase-keys";
import { API_PRODUCT_ACTIONS } from "./utils/constants/requests.constant";
export class ApiProduct {
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
//# sourceMappingURL=product.api.js.map
