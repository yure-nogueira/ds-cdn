import type { Meta, StoryObj } from '@storybook/web-components';
import { TpToggle } from '../toggle';
import { TpToggleType } from '../utils/toggle.type';
declare const meta: Meta<TpToggle & TpToggleType>;
export default meta;
type Story = StoryObj<TpToggle & TpToggleType>;
export declare const Default: Story;
