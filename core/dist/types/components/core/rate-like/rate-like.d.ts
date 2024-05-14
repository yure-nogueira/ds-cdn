import { EventEmitter } from '../../../stencil-public-runtime';
export declare class TpRateLike {
    private thumbsUpIcon;
    private thumbsDownIcon;
    /**
     * Define o status do componente.
     */
    status?: 'like' | 'dislike';
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    /**
     * Emitido quando a propriedade status é alterada.
     */
    tpChange: EventEmitter<'like' | 'dislike'>;
    private onClick;
    render(): any;
}
