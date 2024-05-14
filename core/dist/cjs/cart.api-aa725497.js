'use strict';

const index = require('./index-8c851fa5.js');
const currency_filter = require('./currency.filter-7eaedbf2.js');

class ApiCart {
    static async getCart() {
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(Object.assign({ action: currency_filter.API_CART_ACTIONS.getCart })),
        });
        const response = await rawResponse.json();
        const { data: rawData } = response;
        const data = index.camelcaseKeys(rawData, { deep: true });
        const { cart, cartTotal, cartCount } = data;
        return { cart, cartTotal, cartCount };
    }
    static async addToCart(productIdNumber, quantityNumber) {
        const productId = productIdNumber.toString();
        const quantity = quantityNumber.toString();
        const additionalData = { productId, quantity };
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(Object.assign({ action: currency_filter.API_CART_ACTIONS.addToCart }, additionalData)),
        });
        const response = await rawResponse.json();
        const { data } = response;
        const addedToCartData = index.camelcaseKeys(data, {
            deep: true,
        });
        return addedToCartData;
    }
    static async removeFromCart(productId) {
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: currency_filter.API_CART_ACTIONS.removeFromCart,
                productId: `${productId}`,
            }),
        });
        const response = await rawResponse.json();
        const { data: rawData } = response;
        const data = index.camelcaseKeys(rawData, { deep: true });
        return data;
    }
    static async updateCart(cartItemKey, quantityNumber) {
        const quantity = quantityNumber.toString();
        const additionalData = { cartItemKey, quantity };
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(Object.assign({ action: currency_filter.API_CART_ACTIONS.updateCart }, additionalData)),
        });
        const response = await rawResponse.json();
        const { data: rawData } = response;
        const data = index.camelcaseKeys(rawData, { deep: true });
        return data;
    }
}

exports.ApiCart = ApiCart;

//# sourceMappingURL=cart.api-aa725497.js.map