import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TextareaModule } from './textarea.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<TextareaModule> = {
  minRows: { control: { type: 'range', max: '20', min: 1 }, name: 'Min rows' },
  maxRows: { control: { type: 'range', max: '20', min: 1 }, name: 'Max rows' },
  autoResize: { control: { type: 'boolean' }, name: 'Auto resize' }
};

const args: Partial<TextareaModule> = {
  minRows: 1,
  maxRows: 5,
  autoResize: true
};

const meta: Meta<TextareaModule> = {
  title: 'Forms/Textarea',
  component: TextareaModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Textarea: StoryObj<TextareaModule> = { args };
