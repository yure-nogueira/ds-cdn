import type { Meta, StoryObj } from '@storybook/web-components';
import { TpDropdown } from '../../dropdown/dropdown';
import { TpInputContainer } from '../../input-container/input-container';
import { TpAutocomplete } from '../autocomplete';
declare const meta: Meta<TpAutocomplete & TpDropdown & TpInputContainer>;
export default meta;
type Story = StoryObj<TpAutocomplete & TpDropdown & TpInputContainer>;
export declare const Searchbar: Story;
export declare const Input: Story;
