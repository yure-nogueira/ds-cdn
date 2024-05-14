import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonRange } from '../utils/range.type';
declare const meta: Meta<Components.IonRange & TpIonRange>;
export default meta;
type Story = StoryObj<Components.IonRange & TpIonRange>;
export declare const Default: Story;
export declare const Ticks: Story;
