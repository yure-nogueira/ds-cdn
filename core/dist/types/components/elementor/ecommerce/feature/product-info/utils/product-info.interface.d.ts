import { Product } from '../../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
export interface ProductInfo extends Pick<Product, 'name' | 'description' | 'images' | 'manageStock' | 'stockStatus' | 'stockQuantity' | 'type' | 'externalUrl' | 'regularPrice' | 'price' | 'onSale' | 'sku' | 'categories' | 'attributes'> {
    isFeedbackSuccess: boolean;
    feedbackMessage: string;
}
export interface AddToCartData {
    productId: number;
    quantity: number;
}
