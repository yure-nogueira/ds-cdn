import { Product } from '../../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
export interface ProductItem extends Pick<Product, 'regularPrice' | 'onSale' | 'images' | 'permalink'> {
}
