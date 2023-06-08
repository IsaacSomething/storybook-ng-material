import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { FormFieldModule } from './form-field.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<FormFieldModule> = {};

const args: Partial<FormFieldModule> = {};

const meta: Meta<FormFieldModule> = {
  title: 'Forms/Form Field',
  component: FormFieldModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<FormFieldModule>;

export const FormField: Story = {
  /* args */
};
