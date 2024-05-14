import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonItem } from '../../../utils/item.type';
declare const meta: Meta<Components.IonItem & TpIonItem & Components.IonDatetime & Components.IonDatetimeButton>;
export default meta;
type Story = StoryObj<Components.IonItem & TpIonItem & Components.IonDatetime & Components.IonDatetimeButton>;
export declare const Datetime: Story;
