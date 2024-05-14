import { CartItem } from '../../../../../../utils/api/ecommerce/utils/interfaces/cart.interface';
import { Product } from '../../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
export interface CartItemData extends CartItem, Pick<Product, 'name' | 'shortDescription' | 'images' | 'regularPrice' | 'salePrice' | 'stockQuantity' | 'permalink'> {
}
