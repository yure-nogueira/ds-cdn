import type { Meta, StoryObj } from '@storybook/web-components';
import { TpAddCard } from '../add-card';
import { TpAddCardType } from '../utils/add-card.type';
declare const meta: Meta<TpAddCard & TpAddCardType>;
export default meta;
type Story = StoryObj<TpAddCard & TpAddCardType>;
export declare const Default: Story;
