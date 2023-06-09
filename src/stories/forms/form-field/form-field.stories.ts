import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { FormFieldModule } from './form-field.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<FormFieldModule> = {
  color: { options: ['primary', 'accent', 'warn'], control: { type: 'radio' }, name: 'Color' },
  label: { control: { type: 'text' }, name: 'Label' },
  hint: { control: { type: 'text' }, name: 'Label' },
  hintPosition: { options: ['start', 'end'], control: { type: 'radio' }, name: 'Hint position' },
  icon: { control: { type: 'boolean' }, name: 'Icon' },
  appearance: { options: ['outline', 'fill'], control: { type: 'radio' }, name: 'Appearance' },
  floatLabel: { options: ['auto', 'always', 'never'], control: { type: 'radio' }, name: 'Float label' }
};

const args: Partial<FormFieldModule> = {
  label: 'Label',
  hint: 'Hint',
  hintPosition: 'start',
  icon: false,
  appearance: 'fill',
  color: 'primary',
  floatLabel: 'auto'
};

const meta: Meta<FormFieldModule> = {
  title: 'Forms/Form Field',
  component: FormFieldModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

type Story = StoryObj<FormFieldModule>;
export default meta;
export const FormField: Story = { args };
