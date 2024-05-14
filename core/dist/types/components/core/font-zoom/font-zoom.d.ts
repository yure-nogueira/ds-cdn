import { RangeValue } from '../../../components/ionic/range/utils/range.interface';
import { TpFontZoomSize } from './utils/font-zoom.enum';
export declare class TpFontZoom {
    private fontUpIcon;
    private fontDownIcon;
    /**
     * todo
     */
    emitter: {
        emit: (value: TpFontZoomSize) => void;
    };
    /**
     * todo
     */
    value: TpFontZoomSize;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    fontSizeToValue: (fontSize: TpFontZoomSize) => RangeValue;
    onRangeChange: (rangeValue: RangeValue) => void;
    render(): any;
}
