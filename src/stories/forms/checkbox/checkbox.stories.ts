import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { CheckboxModule } from './checkbox.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<CheckboxModule> = {};

const args: Partial<CheckboxModule> = {};

const meta: Meta<CheckboxModule> = {
  title: 'forms/Checkbox',
  component: CheckboxModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<CheckboxModule>;

export const Checkbox: Story = {
  /* args */
};
