import { EventEmitter } from '../../../stencil-public-runtime';
import type { TpColor } from '../../../utils/types/color.type';
import { TpPaginationButtonConfig, TpPaginationDirection, TpPaginationSize } from './utils/pagination.type';
export declare class TpPagination {
    /**
     * A variação de cor dos botões do componente.
     */
    color: TpColor;
    /**
     * A variação de tamanho dos botões do componente.
     */
    size: TpPaginationSize;
    /**
     * O número total de páginas.
     */
    pageCount: number;
    /**
     * Índice da página atual.
     */
    currentPage: number;
    /**
     * Emitido quando há clique no botão de uma página específica.
     */
    tpNavigate: EventEmitter<number>;
    /**
     * Emitido quando há clique no botão de seguir para a página anterior.
     */
    tpPrevious: EventEmitter<null>;
    /**
     * Emitido quando há clique no botão de seguir para a próxima página.
     */
    tpNext: EventEmitter<null>;
    /**
     * Emitido quando há clique no botão que oculta páginas
     * específicas, não mostradas nos botões do estado atual.
     */
    tpPageJump: EventEmitter<TpPaginationDirection>;
    onPaginationButtonClick(buttonConfig: TpPaginationButtonConfig): CustomEvent<number> | CustomEvent<"forward" | "backward">;
    getPaginationButtons(): any[];
    render(): any;
}
