import type { Meta, StoryObj } from '@storybook/web-components';
import { TpQuestion } from '../question';
import { TpQuestionType } from '../utils/question.type';
declare const meta: Meta<TpQuestion & TpQuestionType>;
export default meta;
type Story = StoryObj<TpQuestion & TpQuestionType>;
export declare const Default: Story;
