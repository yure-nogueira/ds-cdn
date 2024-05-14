import { Components } from '@ionic/core';
import { IonRadioGroup } from '@ionic/core/components/ion-radio-group';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonText } from '../../../../text/utils/text.type';
declare const meta: Meta<Components.IonRadio & IonRadioGroup & TpIonText>;
export default meta;
type Story = StoryObj<Components.IonRadio & IonRadioGroup & TpIonText>;
export declare const Text: Story;
