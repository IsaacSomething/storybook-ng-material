import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ExpansionModule } from './expansion.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<ExpansionModule> = {
  toggle: { control: { type: 'boolean' }, name: 'Has toggle' },
  description: { control: { type: 'boolean' }, name: 'Has description' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  multi: { control: { type: 'boolean' }, name: 'Open more than one panel' },
  expanded: { control: { type: 'boolean' }, name: 'Expand' },
  displayMode: {
    options: ['default', 'flat'],
    control: { type: 'radio' },
    name: 'Display mode'
  },
  togglePosition: {
    options: ['before', 'after'],
    control: { type: 'radio' },
    name: 'Toggle position'
  },
  opened: { action: 'opened', table: { disable: true } },
  closed: { action: 'closed', table: { disable: true } }
};

const args: Partial<ExpansionModule> = {
  toggle: true,
  description: true,
  disabled: false,
  multi: false,
  expanded: false,
  displayMode: 'default',
  togglePosition: 'before'
};

const meta: Meta<ExpansionModule> = {
  title: 'Components/Expansion',
  component: ExpansionModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Expansion: StoryObj<ExpansionModule> = { args };
