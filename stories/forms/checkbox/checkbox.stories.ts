import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { CheckboxModule } from './checkbox.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<CheckboxModule> = {
  stacked: { control: { type: 'boolean' }, name: 'Stacked' },
  indeterminate: { control: { type: 'boolean' }, name: 'Stacked' },
  labelPosition: {
    options: ['after', 'before'],
    control: { type: 'radio' },
    name: 'Color'
  },
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  }
};

const args: Partial<CheckboxModule> = {
  stacked: false,
  indeterminate: false,
  color: 'default',
  labelPosition: 'after'
};

const meta: Meta<CheckboxModule> = {
  title: 'forms/Checkbox',
  component: CheckboxModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Checkbox: StoryObj<CheckboxModule> = { args };
