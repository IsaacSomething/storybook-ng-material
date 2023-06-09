import { Meta, StoryObj } from '@storybook/angular';
import { ClipModule } from './clipboard.component';

const meta: Meta<ClipModule> = {
  title: 'Helpers/Clipboard',
  component: ClipModule,
  parameters: { options: { showPanel: true } }
};

type Story = StoryObj<ClipModule>;
export default meta;
export const Clipboard: Story = {};
