import { TpColor } from '../../../../../components';
import { TpBannerAlignment as TpBannerAlignmentEnum } from './banner.enum';
export interface TpBanner {
    color: `${TpColor}`;
    slideMode: boolean;
    alignment: `${TpBannerAlignmentEnum}`;
}
export type TpBannerAlignment = `${TpBannerAlignmentEnum}`;
