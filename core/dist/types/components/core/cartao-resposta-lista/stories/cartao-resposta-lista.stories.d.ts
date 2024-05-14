import type { Meta, StoryObj } from '@storybook/web-components';
import { TpCartaoRespostaLista } from '../cartao-resposta-lista';
import { TpCartaoRespostaItem } from '../../cartao-resposta-item/cartao-resposta-item';
import { TpCartaoRespostaItemType } from '../../cartao-resposta-item/utils/cartao-resposta-item.type';
declare const meta: Meta<TpCartaoRespostaItem & TpCartaoRespostaLista & TpCartaoRespostaItemType>;
export default meta;
type Story = StoryObj<TpCartaoRespostaItem & TpCartaoRespostaLista & TpCartaoRespostaItemType>;
export declare const Default: Story;
