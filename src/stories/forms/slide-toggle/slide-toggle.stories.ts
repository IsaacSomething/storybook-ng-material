import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SlideToggleModule } from './slide-toggle.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SlideToggleModule> = {
  label: { control: { type: 'text' }, name: 'Label' },
  checked: { control: { type: 'boolean' }, name: 'Checked' },
  color: { options: ['primary', 'accent', 'warn'], control: { type: 'radio' }, name: 'Color' },
  labelPosition: { options: ['after', 'before'], control: { type: 'radio' }, name: 'Label position' }
};

const args: Partial<SlideToggleModule> = {
  label: '[Label]',
  checked: false,
  color: 'primary',
  labelPosition: 'after'
};

const meta: Meta<SlideToggleModule> = {
  title: 'Forms/Slide Toggle',
  component: SlideToggleModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

type Story = StoryObj<SlideToggleModule>;
export default meta;
export const SlideToggle: Story = { args };
