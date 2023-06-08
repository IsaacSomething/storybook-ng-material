import type { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ButtonModule } from './button.component';

const argTypes: ArgTypes<ButtonModule> = {
  label: { control: { type: 'text' }, name: 'Label' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  },
  type: {
    options: ['default', 'flat', 'stroked', 'raised'],
    control: { type: 'radio' },
    name: 'Button type'
  }
};

const args: Partial<ButtonModule> = {
  label: '[Button]',
  disabled: false,
  color: 'default',
  type: 'default'
};

const meta: Meta<ButtonModule> = {
  title: 'Components/Button',
  component: ButtonModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<ButtonModule>;

export const Button: Story = { args };
