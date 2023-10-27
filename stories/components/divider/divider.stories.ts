import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { DividerModule } from './divider.component';

const argTypes: ArgTypes<DividerModule> = {
  inset: { control: { type: 'boolean' }, name: 'Inset' },
  vertical: { control: { type: 'boolean' }, name: 'Vertical' }
};

const args: Partial<DividerModule> = {
  inset: false,
  vertical: false
};

const meta: Meta<DividerModule> = {
  title: 'Components/Divider',
  component: DividerModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Divider: StoryObj<DividerModule> = { args };
