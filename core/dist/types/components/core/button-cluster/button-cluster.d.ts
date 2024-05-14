import { EventEmitter } from '../../../stencil-public-runtime';
import type { TpColor } from '../../../utils/types/color.type';
export declare class TpButtonCluster {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define o estato inicial do componente.
     */
    initialCollapsedState: boolean;
    /**
     * Define a variação de estado do componente.
     */
    collapsed: boolean;
    /**
     * Emitido quando a propriedade collapsed é alterada.
     */
    tpCollapse: EventEmitter<boolean>;
    /**
     * Métodos internos.
     */
    toggle(): void;
    /**
     * Lifecycle hooks.
     */
    componentWillLoad(): void;
    render(): any;
}
