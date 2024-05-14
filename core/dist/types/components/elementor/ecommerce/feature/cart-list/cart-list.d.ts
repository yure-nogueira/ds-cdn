import { EventEmitter } from '../../../../../stencil-public-runtime';
import { CartInfo, CartItem } from '../../../../../utils/api/ecommerce/utils/interfaces/cart.interface';
import { CartItemData } from './utils/cart-list.interface';
export declare class TpElemCartList {
    /**
     * Dados do carrinho.
     */
    errorMessage: string;
    /**
     * Dados do carrinho.
     */
    total: number;
    /**
     * Dados do carrinho.
     */
    cartItems: CartItem[];
    /**
     * Dados do produto.
     */
    itemsData: CartItemData[];
    /**
     * Emite o updated cart.
     */
    updatedCart: EventEmitter<CartInfo>;
    componentWillLoad(): void;
    getCart(): Promise<void>;
    watchCartItems(): Promise<void>;
    handlePlusminus(event: CustomEvent<number>): void;
    handleUpdatedCartCount(event: CustomEvent<CartInfo>): void;
    setItemQuantity(cartItemKey: string, quantity: number): Promise<void>;
    onRemoveFromCart(id: number): Promise<void>;
    render(): any;
}
