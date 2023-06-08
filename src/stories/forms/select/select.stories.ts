import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SelectModule } from './select.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SelectModule> = {};

const args: Partial<SelectModule> = {};

const meta: Meta<SelectModule> = {
  title: 'Forms/Select',
  component: SelectModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<SelectModule>;

export const Select: Story = {
  /* args */
};
