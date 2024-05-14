import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonTabBar } from '../../utils/tab-bar.type';
declare const meta: Meta<Components.IonTabs & Components.IonTabBar & Components.IonTabButton & TpIonTabBar>;
export default meta;
type Story = StoryObj<Components.IonTabs & Components.IonTabBar & Components.IonTabButton & TpIonTabBar>;
export declare const DefaultMarkup: Story;
export declare const ColorsMarkup: Story;
