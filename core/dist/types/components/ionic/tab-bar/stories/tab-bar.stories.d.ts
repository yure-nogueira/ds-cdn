import { Components } from '@ionic/core';
import { IonTabBar } from '@ionic/core/components/ion-tab-bar';
import { IonTabButton } from '@ionic/core/components/ion-tab-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonTabBar } from '../utils/tab-bar.type';
declare const meta: Meta<Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar>;
export default meta;
type Story = StoryObj<Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar>;
export declare const Default: Story;
