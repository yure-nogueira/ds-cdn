import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonText } from "../../../ionic/text/utils/text.type";
import { TpIonItem } from '../../../../components/ionic/item/utils/item.type';
import { TpContextMenu } from '../context-menu';
import { TpContextMenuType } from '../utils/context-menu.type';
declare const meta: Meta<TpContextMenu & TpContextMenuType & TpIonItem & TpIonText>;
export default meta;
type Story = StoryObj<TpContextMenu & TpContextMenuType & TpIonItem & TpIonText>;
export declare const Default: Story;
