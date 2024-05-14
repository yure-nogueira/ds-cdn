import { Components } from '@ionic/core';
import { IonDatetime } from '@ionic/core/components/ion-datetime';
import { IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonItem } from '../../../utils/item.type';
declare const meta: Meta<Components.IonItem & TpIonItem & IonDatetime & IonDatetimeButton>;
export default meta;
type Story = StoryObj<Components.IonItem & TpIonItem & IonDatetime & IonDatetimeButton>;
export declare const Datetime: Story;
