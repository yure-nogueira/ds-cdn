import { Components } from '@ionic/core';
import { IonItem } from '@ionic/core/components/ion-item';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonList } from '../../utils/list.type';
declare const meta: Meta<Components.IonList & IonItem & TpIonList>;
export default meta;
type Story = StoryObj<Components.IonList & IonItem & TpIonList>;
export declare const Default: Story;
