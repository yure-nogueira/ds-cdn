import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonIcon } from '../../../ionic/icon/utils/icon.type';
import { TpAlert } from '../alert';
import { TpAlertType } from '../utils/alert.type';
declare const meta: Meta<TpAlert & TpAlertType & TpIonIcon>;
export default meta;
type Story = StoryObj<TpAlert & TpAlertType & TpIonIcon>;
export declare const Offline: Story;
