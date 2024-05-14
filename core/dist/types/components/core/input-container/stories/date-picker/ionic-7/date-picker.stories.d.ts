import { Components } from '@ionic/core';
import { IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpInputContainer } from '../../../input-container';
declare const meta: Meta<Components.IonDatetime & IonDatetimeButton & TpInputContainer>;
export default meta;
type Story = StoryObj<Components.IonDatetime & IonDatetimeButton & TpInputContainer>;
export declare const Default: Story;
