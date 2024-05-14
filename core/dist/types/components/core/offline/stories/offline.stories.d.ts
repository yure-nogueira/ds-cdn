import type { Meta, StoryObj } from '@storybook/web-components';
import { TpOffline } from '../offline';
import { TpOfflineType } from '../utils/offline.type';
declare const meta: Meta<TpOffline & TpOfflineType>;
export default meta;
type Story = StoryObj<TpOffline & TpOfflineType>;
export declare const Default: Story;
