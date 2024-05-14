import type { Meta, StoryObj } from '@storybook/web-components';
import { TpToolbar } from '../toolbar';
import { TpToolbarType } from '../utils/toolbar.type';
declare const meta: Meta<TpToolbar & TpToolbarType>;
export default meta;
type Story = StoryObj<TpToolbar & TpToolbarType>;
export declare const Default: Story;
