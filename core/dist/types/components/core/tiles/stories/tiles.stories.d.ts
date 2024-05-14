import type { Meta, StoryObj } from '@storybook/web-components';
import { TpTiles } from '../tiles';
import { TpTilesType } from '../utils/tiles.type';
declare const meta: Meta<TpTiles & TpTilesType>;
export default meta;
type Story = StoryObj<TpTiles & TpTilesType>;
export declare const Default: Story;
