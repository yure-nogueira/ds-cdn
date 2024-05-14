import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonText } from '../../../../text/utils/text.type';
import { TpIonToggle } from '../../../utils/toggle.type';
declare const meta: Meta<Components.IonToggle & TpIonToggle & TpIonText>;
export default meta;
type Story = StoryObj<Components.IonToggle & TpIonToggle & TpIonText>;
export declare const Text: Story;
