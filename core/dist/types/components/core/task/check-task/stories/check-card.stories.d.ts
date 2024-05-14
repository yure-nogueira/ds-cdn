import type { Meta, StoryObj } from '@storybook/web-components';
import { TpCheckCard } from '../check-card';
import { TpCheckCardType } from '../utils/check-card.type';
declare const meta: Meta<TpCheckCard & TpCheckCardType>;
export default meta;
type Story = StoryObj<TpCheckCard & TpCheckCardType>;
export declare const Default: Story;
