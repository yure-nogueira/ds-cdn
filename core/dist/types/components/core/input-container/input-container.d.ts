import type { TpColor } from '../../../utils/types/color.type';
export declare class TpInputContainer {
    /**
     * Quando usado em conjunto com 'select', representa a largura do 'select' definida dinamicamente.
     */
    private hostWidth;
    /**
     * Referência ao componente no DOM.
     */
    host: HTMLElement;
    /**
     * Alvo do evento de click. Evita bugs nos casos em que há mais de um 'select na mesma página.
     */
    clickTarget: Node;
    /**
     * Monitoria se o 'select' foi clicado e está ativo. A propriedade é usada para aplicar estilização e evitar processamentos desnecessários em alguns métodos.
     */
    selectOpen: boolean;
    /**
     * ???
     */
    hasSelect: boolean;
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a variação de estado do componente.
     */
    state?: 'error' | 'success';
    /**
     * Define a estilização do estado disabled do componente.
     */
    disabled: boolean;
    /**
     * ???
     */
    inverted: boolean;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    setClickTarget(e: MouseEvent): void;
    catchSelectIconClick(e: MouseEvent): void;
    setPopoverWidthOnResize(): void;
    setPopoverCharacteristics(): void;
    unsetClikedState(): void;
    componentDidLoad(): void;
    setPopoverPosition(): void;
    render(): any;
}
