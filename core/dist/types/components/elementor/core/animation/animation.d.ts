export declare class TpAnimation {
    /**
     * todo.
     */
    scrollTrigger: boolean;
    /**
     * todo.
     */
    selector: string;
    /**
     * todo.
     */
    animation: 'fadein' | 'slideup' | 'slideupStagger';
    /**
     * todo.
     */
    delay: number;
    /**
     * Define se a animação está ativa ou não.
     */
    played: boolean;
    /**
     * Observa se o elemento está na viewport.
     */
    observer: IntersectionObserver;
    /**
     * todo.
     */
    ionContent: HTMLIonContentElement;
    /**
     * todo.
     */
    host: HTMLElement;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    setupObserver(): void;
    previousY: number;
    previousRatio: number;
    onObserverTriggered(entries: IntersectionObserverEntry[]): void;
    executeAnimations(): void;
    render(): any;
}
