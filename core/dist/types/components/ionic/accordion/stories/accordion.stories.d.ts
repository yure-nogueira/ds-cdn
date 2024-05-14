import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonItem } from '../../item/utils/item.type';
import { TpIonLabel } from '../../label/utils/label.type';
import { TpIonAccordion } from '../utils/accordion.type';
declare const meta: Meta<Components.IonAccordionGroup & Components.IonAccordion & Components.IonItem & Components.IonLabel & Components.IonText & TpIonAccordion & TpIonItem & TpIonLabel>;
export default meta;
type Story = StoryObj<Components.IonAccordionGroup & Components.IonAccordion & Components.IonItem & Components.IonLabel & Components.IonText & TpIonAccordion & TpIonItem & TpIonLabel>;
export declare const Default: Story;
