export interface CartItem {
    id: number;
    quantity: number;
    cartItemKey: string;
}
export interface ActionCart {
    success: boolean;
    productId: number;
    productName: string;
    newQuantity: number;
    stockStatus: 'instock' | 'outofstock' | 'onbackorder';
    cart: CartItem[];
    manageStock?: boolean;
    stockQuantity?: number | null;
    cartTotal?: number;
    cartCount?: number;
}
export interface CartInfo {
    cart: CartItem[];
    cartTotal: number;
    cartCount: number;
}
