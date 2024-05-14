import { TpColor } from '../../../utils/types/color.type';
import { IonInputCustomEvent } from '@ionic/core';
export declare class TpAutocomplete {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define se o componente deve ou não bloquear a renderização
     * do dropdown.
     */
    locked: boolean;
    /**
     * Define se o componente deve ou não renderizar o dropdown
     * quando o slot que recebe um input ganha foco.
     */
    openOnFocus: boolean;
    /**
     * O estado do dropdown (aberto ou fechado).
     */
    open: boolean;
    /**
     * O valor recebido pelo input renderizado no slot.
     */
    inputValue: string;
    /**
     * Referência ao host.
     */
    host: HTMLElement;
    /**
     * Event listeners.
     */
    closeOnOutsideClick(event: MouseEvent): void;
    handleInput(event: IonInputCustomEvent<any>): void;
    handleFocus(): void;
    render(): any;
}
