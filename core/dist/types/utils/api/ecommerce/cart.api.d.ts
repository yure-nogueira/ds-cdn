import { ActionCart } from './utils/interfaces/cart.interface';
export declare class ApiCart {
    static getCart(): Promise<{
        cart: import("./utils/interfaces/cart.interface").CartItem[];
        cartTotal: number;
        cartCount: number;
    }>;
    static addToCart(productIdNumber: number, quantityNumber: number): Promise<ActionCart>;
    static removeFromCart(productId: number): Promise<ActionCart>;
    static updateCart(cartItemKey: string, quantityNumber: number): Promise<ActionCart>;
}
