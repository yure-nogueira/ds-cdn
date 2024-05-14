import { TpColor } from '../../../utils/types/color.type';
import { TpVideoThumbnailSize } from './utils/video-thumbnail.enum';
export declare class TpVideoThumbnail {
    private iconPlay;
    /**
     * todo
     */
    color?: TpColor;
    /**
     * todo
     */
    url?: string;
    /**
     * todo
     */
    size?: TpVideoThumbnailSize;
    /**
     * todo
     */
    value: number;
    render(): any;
}
