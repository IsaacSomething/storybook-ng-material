import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SelectModule } from './select.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SelectModule> = {
  color: { options: ['primary', 'accent', 'warn'], control: { type: 'radio' }, name: 'Color' },
  label: { control: { type: 'text' }, name: 'Label' },
  multiple: { control: { type: 'boolean' }, name: 'Multiple' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  withReset: { control: { type: 'boolean' }, name: 'With reset' },
  items: { table: { disable: true } }
};

const args: Partial<SelectModule> = {
  label: '[Label]',
  color: 'primary',
  multiple: false,
  disabled: false,
  withReset: false
};

const meta: Meta<SelectModule> = {
  title: 'Forms/Select',
  component: SelectModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

type Story = StoryObj<SelectModule>;
export default meta;
export const Select: Story = { args };
