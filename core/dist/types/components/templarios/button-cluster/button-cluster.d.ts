import { EventEmitter } from '../../../stencil-public-runtime';
import type { TpColor } from '../../../utils/types/color.type';
export declare class TpButtonCluster {
    private arrowIcon;
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a variação de estado do componente.
     */
    collapsed: boolean;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    /**
     * Emitido quando a propriedade collapsed é alterada.
     */
    tpButtonClusterCollapsed: EventEmitter<boolean>;
    toggleInternal(event?: Event): void;
    toggleExternal(): Promise<void>;
    render(): any;
}
