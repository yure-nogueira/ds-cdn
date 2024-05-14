import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonIcon } from '../../../ionic/icon/utils/icon.type';
import { TpAlertFixed } from '../alert-fixed';
import { TpAlertFixedType } from '../utils/alert-fixed.type';
declare const meta: Meta<TpAlertFixed & TpAlertFixedType & TpIonIcon>;
export default meta;
type Story = StoryObj<TpAlertFixed & TpAlertFixedType & TpIonIcon>;
export declare const Desatualizado: Story;
export declare const Offline: Story;
