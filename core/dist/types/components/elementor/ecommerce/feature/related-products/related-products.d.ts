import { CartItem } from '../../../../../utils/api/ecommerce/utils/interfaces/cart.interface';
import { Product } from '../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
export declare class TpElemRelatedProducts {
    /**
     * ID do produto
     */
    productId: number;
    /**
     * Items constantes no carrinho.
     */
    cart: CartItem[];
    /**
     * Estado de carregamento do componente.
     */
    loadingProducts: boolean;
    /**
     * Um conjunto de objetos com todos os dados dos produtos à mostra.
     */
    products: Product[];
    componentWillLoad(): Promise<void>;
    getRelatedProducts(): Promise<void>;
    getCurrentCart(): Promise<void>;
    onAddToCart(productId: number): Promise<void>;
    onRemoveFromCart(id: number): Promise<void>;
    render(): any;
}
