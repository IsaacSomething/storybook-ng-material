import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { RadioButtonModule } from './radio-button.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<RadioButtonModule> = {};

const args: Partial<RadioButtonModule> = {};

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
