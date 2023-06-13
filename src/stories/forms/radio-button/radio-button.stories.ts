import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { RadioButtonModule } from './radio-button.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<RadioButtonModule> = {
  color: { options: ['primary', 'accent', 'warn'], control: { type: 'radio' }, name: 'Color' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  stacked: { control: { type: 'boolean' }, name: 'Stacked' },
  labelPosition: { options: ['after', 'before'], control: { type: 'radio' }, name: 'Label position' }
};

const args: Partial<RadioButtonModule> = {
  color: 'primary',
  disabled: false,
  stacked: false,
  labelPosition: 'after'
};

const meta: Meta<RadioButtonModule> = {
  title: 'Forms/Radio Button',
  component: RadioButtonModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<RadioButtonModule>;

export const RadioButton: Story = {
  /* args */
};
