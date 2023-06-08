import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ClipboardModule } from './clipboard.component';

const argTypes: ArgTypes<ClipboardModule> = {};

const args: Partial<ClipboardModule> = {};

const meta: Meta<ClipboardModule> = {
  title: 'Helpers/Clipboard',
  component: ClipboardModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<ClipboardModule>;

export const Clipboard: Story = {
  args
};
