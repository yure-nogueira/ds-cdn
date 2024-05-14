import type { Meta, StoryObj } from '@storybook/web-components';
import { TpBaseType } from '../utils/base.type';
import { TpBase } from '../base';
declare const meta: Meta<TpBase & TpBaseType>;
export default meta;
type Story = StoryObj<TpBase & TpBaseType>;
export declare const Default: Story;
