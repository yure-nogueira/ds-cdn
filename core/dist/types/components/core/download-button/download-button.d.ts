import { TpColor } from '../../../utils/types/color.type';
import { TpDownloadButtonSizes } from './utils/download-button.type';
export declare class TpDownloadButton {
    /**
     * Define a variação de cor do componente.
     */
    color: TpColor;
    /**
     * Define o progresso do download.
     */
    value: number;
    /**
     * Define se o download está ou não em progresso.
     */
    downloading: boolean;
    /**
     * Define se o download está finalizado.
     */
    downloaded: boolean;
    /**
     * Define a variação de tamanho do componente.
     */
    size: TpDownloadButtonSizes;
    render(): any;
}
