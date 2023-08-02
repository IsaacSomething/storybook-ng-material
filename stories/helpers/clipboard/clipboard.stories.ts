import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ClipModule } from './clipboard.component';

const argTypes: ArgTypes<ClipModule> = {
  text: { table: { disable: true } },
  textValue: { table: { disable: true } },
  textCopy: { table: { disable: true } },
  copied: { table: { disable: true } }
};

const meta: Meta<ClipModule> = {
  title: 'Helpers/Clipboard',
  component: ClipModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

type Story = StoryObj<ClipModule>;
export default meta;
export const Clipboard: Story = {};
