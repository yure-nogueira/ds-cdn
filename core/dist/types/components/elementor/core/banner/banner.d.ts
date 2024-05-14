import { TpBannerAlignment } from './utils/banner.type';
export declare class TpBanner {
    /**
     * Define se o componente é ou não usado como slide.
     */
    slideMode: boolean;
    /**
     * Define o alinhamento do conteúdo do banner.
     */
    alignment: TpBannerAlignment;
    /**
     * Define se a animação está ativa ou não.
     */
    animate: boolean;
    /**
     * Observa se o banner está na viewport.
     */
    observer: IntersectionObserver;
    host: HTMLElement;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    setupObserver(): void;
    onObserverTriggered(entries: IntersectionObserverEntry[]): void;
    render(): any;
}
