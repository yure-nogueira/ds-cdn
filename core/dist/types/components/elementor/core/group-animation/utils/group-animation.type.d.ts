import { TpGroupAnimationTypeEnum } from './group-animation.enum';
export interface TpGroupAnimationElement {
    target: Element;
    played: boolean;
    shouldPlay: boolean;
}
export type TpGroupAnimationType = `${TpGroupAnimationTypeEnum}`;
