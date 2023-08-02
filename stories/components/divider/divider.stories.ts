import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { DividerModule } from './divider.component';

const argTypes: ArgTypes<DividerModule> = {
  inset: { control: { type: 'boolean' }, name: 'Inset' }
};

const args: Partial<DividerModule> = {
  inset: false
};

const meta: Meta<DividerModule> = {
  title: 'Components/Divider',
  component: DividerModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<DividerModule>;

export const Divider: Story = {
  args
};
