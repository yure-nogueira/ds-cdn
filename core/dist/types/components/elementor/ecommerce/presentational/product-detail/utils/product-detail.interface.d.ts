import { Product } from '../../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
export interface ProductDetail extends Pick<Product, 'id' | 'stockStatus' | 'stockQuantity' | 'type'> {
}
