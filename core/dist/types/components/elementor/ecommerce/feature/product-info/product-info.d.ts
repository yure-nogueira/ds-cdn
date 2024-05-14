import { EventEmitter } from '../../../../../stencil-public-runtime';
import { ProductCategoryWithUrl } from '../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
import { AddToCartData, ProductInfo } from './utils/product-info.interface';
import { CartInfo } from '../../../../../utils/api/ecommerce/utils/interfaces/cart.interface';
export declare class TpElemProductInfo {
    /**
     * ID do produto.
     */
    productId: number;
    /**
     * Dados do produto à mostra.
     */
    productInfo: ProductInfo;
    /**
     * Emite o evento updatedCart.
     */
    updatedCart: EventEmitter<CartInfo>;
    categoriesWithUrl: ProductCategoryWithUrl[];
    handleAddToCart(event: CustomEvent<AddToCartData>): Promise<void>;
    handleUpdatedCartCount(event: CustomEvent<CartInfo>): void;
    componentWillLoad(): Promise<void>;
    updateProductData(): Promise<void>;
    render(): any;
}
