import { EventEmitter } from '../../../../../stencil-public-runtime';
import { AddToCartData } from '../../feature/product-info/utils/product-info.interface';
import { ProductDetail } from './utils/product-detail.interface';
export declare class TpElemProductDetail {
    /**
     * Dados do produto
     */
    productData: ProductDetail;
    /**
     * Quantidade do produto a ser inserido no carrinho, default é 1.
     */
    value: number;
    /**
     * Emite o novo cartCount.
     */
    addToCartEvent: EventEmitter<AddToCartData>;
    onAddToCart(productId: number, quantity: number): Promise<void>;
    handlePlusminus(event: CustomEvent<number>): void;
    render(): any;
}
