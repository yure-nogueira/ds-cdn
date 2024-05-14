import type { Meta, StoryObj } from '@storybook/web-components';
import { TpVideoThumbnailType } from '../utils/video-thumbnail.type';
import { TpVideoThumbnail } from '../video-thumbnail';
declare const meta: Meta<TpVideoThumbnail & TpVideoThumbnailType>;
export default meta;
type Story = StoryObj<TpVideoThumbnail & TpVideoThumbnailType>;
export declare const Default: Story;
