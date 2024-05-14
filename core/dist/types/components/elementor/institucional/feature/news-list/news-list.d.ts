import { NewsItem } from './utils/news-list.type';
import { NewsListMode } from './utils/news-list.type';
export declare class TpElemNewsList {
    /**
     * Define o modo de uso do componente.
     */
    mode: NewsListMode;
    /**
     * Define a quantidade de items por página a serem carregados.
     */
    perPage: number;
    /**
     * Define a página atual.
     */
    page: number;
    /**
     * Define o total de páginas baseado nas configurações atuais.
     * Configurações que impactam são: mode, perPage,
     * termo de busca, categoria.
     */
    totalPages: number;
    /**
     * Conjunto das notícias carregadas até o momento.
     */
    news: NewsItem[];
    /**
     * Define se o compoenente está ou não carregando mais notícias.
     */
    loading: boolean;
    /**
     * Define se o componente detectou falha de conexão com a rede.
     */
    connectionError: boolean;
    /**
     * State and prop change listeners.
     */
    onLoadMore(): void;
    onPerPageChange(): void;
    /**
     * Lifecycle hooks.
     */
    componentWillLoad(): void;
    /**
     * Métodos internos
     */
    getNews(): Promise<import("../../../../../utils/api/institucional/utils/interfaces/news.interface").NewsItem[]>;
    getNewsItemList(): any[];
    render(): any;
}
