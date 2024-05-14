import type { Meta, StoryObj } from '@storybook/web-components';
import { TpThemes } from '../themes';
import { TpThemesType } from '../utils/themes.type';
declare const meta: Meta<TpThemes & TpThemesType>;
export default meta;
type Story = StoryObj<TpThemes & TpThemesType>;
export declare const Default: Story;
