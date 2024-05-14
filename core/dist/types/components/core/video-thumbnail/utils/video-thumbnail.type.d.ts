import type { TpColor } from '../../../../utils/types/color.type';
import { TpVideoThumbnailSize } from './video-thumbnail.enum';
export type TpVideoThumbnailType = {
    color: `${TpColor}`;
    url: string;
    value: number;
    size?: `${TpVideoThumbnailSize}`;
};
