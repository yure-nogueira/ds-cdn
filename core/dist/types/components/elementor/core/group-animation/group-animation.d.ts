import { TpGroupAnimationElement, TpGroupAnimationType } from './utils/group-animation.type';
export declare class TpGroupAnimation {
    host: HTMLElement;
    /**
     * Define a animação dos componentes do grupo.
     */
    animation: TpGroupAnimationType;
    /**
     * Define se a animação dos componentes será ativada pelo scroll,
     * quando o componente estiver dentro da área de scroll.
     */
    scrollTrigger: boolean;
    /**
     * Define a duração das animações de cada componente do grupo
     * em milissegundos.
     */
    duration: number;
    /**
     * Define o delay do inicio das animações em milissegundos.
     */
    delay: number;
    /**
     * Define o tempo entre o inicio de animações sequenciais
     * em milissegundos.
     */
    stagger: number;
    /**
     * Define a porcentagem da área de scroll que o componente deve
     * atingir para dar inicio a sua animação.
     */
    intersectionTrigger: number;
    /**
     * Define o seletor html/css da área de scroll.
     */
    scroller: string;
    /**
     * O buffer de componenetes que serão animados.
     */
    buffer: TpGroupAnimationElement[];
    /**
     * Observa se o elemento está na viewport.
     */
    observer: IntersectionObserver;
    /**
     * O elemento html da área de scroll.
     */
    scrollContainer: HTMLElement;
    /**
     * A linha do tempo das animações.
     */
    timeline: gsap.core.Timeline;
    /**
     * Define se as animações ja foram iniciadas.
     */
    started: boolean;
    /**
     * Event listeners.
     */
    onBufferUpdate(): void;
    /**
     * Lifecycle hooks.
     */
    componentWillLoad(): void;
    disconnectedCallback(): void;
    /**
     * Métodos internos.
     */
    onBeforeComponentLoad(): void;
    setupObserver(): void;
    onObserverTriggered(entries: IntersectionObserverEntry[]): void;
    play(): void;
    render(): any;
}
