import type { Meta, StoryObj } from '@storybook/web-components';
import { TpRateBar } from '../rate-bar';
import { TpRatebarType } from '../utils/rate-bar.type';
declare const meta: Meta<TpRateBar & TpRatebarType>;
export default meta;
type Story = StoryObj<TpRateBar & TpRatebarType>;
export declare const Default: Story;
