import type { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleModule } from './button-toggle.component';

const argTypes: ArgTypes<ButtonToggleModule> = {
  label: { control: { type: 'text' }, name: 'Label' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  multiple: { control: { type: 'boolean' }, name: 'Multiple' },
  vertical: { control: { type: 'boolean' }, name: 'Vertical' },
  appearance: {
    options: ['legacy', 'standard'],
    control: { type: 'radio' },
    name: 'Button Appearance'
  }
};

const args: Partial<ButtonToggleModule> = {
  label: 'Button',
  appearance: 'standard',
  disabled: false,
  multiple: false,
  vertical: false
};

const meta: Meta<ButtonToggleModule> = {
  title: 'Components/Button Toggle',
  component: ButtonToggleModule,
  parameters: {
    options: { showPanel: true }
  },
  argTypes
};

export default meta;
type Story = StoryObj<ButtonToggleModule>;
export const ButtonToggle: Story = { args };
