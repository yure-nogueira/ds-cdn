import { Components } from '@ionic/core';
import { IonFabButton } from '@ionic/core/components/ion-fab-button';
import { IonFabList } from '@ionic/core/components/ion-fab-list';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonFab } from '../utils/fab.type';
declare const meta: Meta<Components.IonFab & IonFabButton & IonFabList & TpIonFab>;
export default meta;
type Story = StoryObj<Components.IonFab & IonFabButton & IonFabList & TpIonFab>;
export declare const Default: Story;
