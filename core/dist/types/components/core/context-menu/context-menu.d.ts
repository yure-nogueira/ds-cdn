import { EventEmitter } from '../../../stencil-public-runtime';
import { TpColor } from '../../../utils/types/color.type';
export declare class TpContextMenu {
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
     * Referência ao host.
     */
    host: HTMLElement;
    /**
     * Métodos internos.
     */
    toggle(): void;
    /**
     * Lifecycle hooks.
     */
    componentWillLoad(): void;
    /**
     * Event listeners.
     */
    closeOnOutsideClick(event: MouseEvent): void;
    closeOnEscapeKey(ev: KeyboardEvent): void;
    render(): any;
}
