import { EventEmitter } from '../../../stencil-public-runtime';
import { TpColor } from '../../../utils/types/color.type';
import { TpCalendarChangeDirection, TpCalendarTimeframe } from './utils/calendar.type';
import { Gesture } from './utils/gesture/index';
export declare class TpCalendar {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define a etiqueta do conteúdo sendo exibido.
     */
    label: string;
    /**
     * Define o valor inicial do intervalo de tempo que representa
     * o conteúdo sendo exibido.
     */
    initialTimeframe: TpCalendarTimeframe;
    /**
     * Define o valor atual do intervalo de tempo que representa
     * o conteúdo sendo exibido.
     */
    timeframe: TpCalendarTimeframe;
    /**
     * Evento emitido quando o conteúdo deve avançar ou retroceder
     * por requisição do usuário
     */
    tpCalendarChange: EventEmitter;
    /**
     * Evento emitido quando o intervalo de tempo exibido deve mudar
     * por requisição do usuário
     */
    tpTimeframeToggle: EventEmitter;
    /**
     * Objeto que representa as configurações de gestos (eventos customizados).
     */
    gesture: Gesture;
    /**
     * O container do conteúdo sendo exibido.
     */
    container: HTMLDivElement;
    /**
     * Métodos internos
     */
    onTimeframeToggle(): void;
    onCalendarChange(direction: TpCalendarChangeDirection): void;
    setupGesture(): void;
    disconnectGesture(): void;
    /**
     * Lifecycle hooks.
     */
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
