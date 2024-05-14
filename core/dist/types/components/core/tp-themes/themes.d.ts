import { EventEmitter } from '../../../stencil-public-runtime';
import { TpTema } from './utils/themes.interface';
export declare class TpThemes {
    /**
     * todo
     */
    ativo?: 'theme-gold' | 'theme-recursos' | string;
    /**
     * todo
     */
    temas?: TpTema[];
    /**
     * todo
     */
    tpChange: EventEmitter<string>;
    temaSelecionado(temaAtivo: any): void;
    render(): any;
}
