import { SearchbarCustomEvent } from '@ionic/core';
import { TpColor } from '../../../../../components';
import { Product } from '../../../../../utils/api/ecommerce/utils/interfaces/product.interface';
export declare class TpElemProductSearch {
    /**
     * A variação de cor do componente.
     */
    color?: TpColor;
    /**
     * O path da página de busca.
     */
    searchPageUrl: string;
    /**
     * A altura máxima do dropdown.
     */
    maxDropdownHeight: number;
    /**
     * O termo buscado pelo usuário.
     */
    searchTerm: string;
    /**
     * Um conjunto de objetos com todos os dados dos produtos encontrados
     * com o termo 'searchTerm'.
     */
    products: Product[];
    /**
     * Configurações do lightbox.
     */
    lightboxParams: {
        imageSrc: string;
        display: boolean;
    };
    /**
     * Se o usuário está ou não com o mouse sobre a caixa de busca.
     */
    searchbarHovering: boolean;
    /**
     * Se o usuário está ou não com o mouse sobre a um item do dropdown.
     */
    searchItemHovering: boolean;
    /**
     * Se o dropdown pode ou não ser mostrado.
     */
    dropdownLocked: boolean;
    /**
     * Se uma busca está ou não sendo realizada.
     */
    searching: boolean;
    /**
     * O abort controller da última chamada http feita pelo component.
     * Caso haja uma nova requisição e a anterior não tenha sido completada,
     * o abort controller permite que ela seja cancelada.
     */
    currentAbortController: AbortController;
    /**
     * State e Prop watchers.
     */
    onUpdatedSearchTerm(): Promise<void>;
    /**
     * Event listeners.
     */
    onSearchInput(e: SearchbarCustomEvent): void;
    onSearchFocus(): void;
    onSearchBlur(): void;
    /**
     * Métodos internos.
     */
    onMouseEnterImage(imageSrc: string): void;
    onMouseLeavesImage(): void;
    onMouseEnterSearchbar(): void;
    onMouseLeavesSearchbar(): void;
    onMouseEnterSearchItem(): void;
    onMouseLeavesSearchItem(): void;
    getDropdownItems(): any[];
    render(): any;
}
