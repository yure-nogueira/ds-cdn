import { TpColor } from '../../../../../components';
export declare class TpElemNewsSearch {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define a rota base da página de pesquisa por termo.
     */
    baseSearchPath: string;
    /**
     * Define a rota base da página de categoria.
     */
    baseCategoryPath: string;
    onSearchByTerm(event: CustomEvent): void;
    onFilterByCategory(event: CustomEvent): void;
    render(): any;
}
