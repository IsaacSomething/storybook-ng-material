import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TextareaModule } from './textarea.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<TextareaModule> = {};

const args: Partial<TextareaModule> = {};

const meta: Meta<TextareaModule> = {
  title: 'Forms/Textarea',
  component: TextareaModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<TextareaModule>;

export const Textarea: Story = {
  /* args */
};
