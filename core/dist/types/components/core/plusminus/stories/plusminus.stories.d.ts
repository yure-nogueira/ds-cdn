import type { Meta, StoryObj } from '@storybook/web-components';
import { TpPlusMinus } from '../plusminus';
import { TpPlusMinusType } from '../utils/plusminus.type';
declare const meta: Meta<TpPlusMinus & TpPlusMinusType>;
export default meta;
type Story = StoryObj<TpPlusMinus & TpPlusMinusType>;
export declare const Default: Story;
