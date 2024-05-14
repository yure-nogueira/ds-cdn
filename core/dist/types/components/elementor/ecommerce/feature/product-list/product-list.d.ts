import { CartItem } from '../../../../../utils/api/ecommerce/utils/interfaces/cart.interface';
import { Product } from '../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
import { OrderedParams } from '../../../../../utils/api/ecommerce/utils/interfaces/requests.interface';
export declare class TpElemProductList {
    /**
     * O ID da categoria de produtos a serem listadas. Se nenhuma categoria
     * for definida, todos os produtos serão listados.
     */
    categoryId: number | null;
    /**
     * Um conjunto de objetos com todos os dados dos produtos à mostra.
     */
    products: Product[];
    /**
     * O total de páginas de produtos
     */
    totalPages: number;
    /**
     * Um conjunto de objetos com todos os dados dos produtos à mostra.
     */
    cart: CartItem[];
    /**
     * O total de páginas de produtos
     */
    filter: OrderedParams;
    /**
     * O total de páginas de produtos
     */
    loadingProducts: boolean;
    /**
     * Objeto de configuração do select popover
     */
    selectInterfaceOptions: {
        cssClass: string;
    };
    onUpdatedFilter(): void;
    onChangeFilter(event: CustomEvent): void;
    onNavigateToPage(event: CustomEvent): void;
    onGoToPreviousPage(): void;
    onGoToNextPage(): void;
    onPageJump(event: CustomEvent): void;
    componentWillLoad(): Promise<void>;
    onAddToCart(productId: number): Promise<void>;
    onRemoveFromCart(id: number): Promise<void>;
    updateProducts(params?: OrderedParams): Promise<void>;
    getCurrentCart(): Promise<void>;
    render(): any;
}
