import { EventEmitter } from '../../../stencil-public-runtime';
export declare class TpOffline {
    private iconLeft;
    private iconOffline;
    /**
     * Define o title do componente
     */
    offlineTitle: string;
    /**
     * Define o title do componente
     */
    offlineText: string;
    /**
     * todo
     */
    tpClick: EventEmitter<void>;
    private onClick;
    render(): any;
}
