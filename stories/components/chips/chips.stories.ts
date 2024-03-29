import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ChipsModule } from './chips.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<ChipsModule> = {
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  },
  hideSingle: { control: { type: 'boolean' }, name: 'Hide Single Selection Indicator' },
  multiple: { control: { type: 'boolean' }, name: 'Select Multiple' },
  selectable: { control: { type: 'boolean' }, name: 'Selectable' },
  highlighted: { control: { type: 'boolean' }, name: 'Highlighted' }
};

const args: Partial<ChipsModule> = {
  color: 'default',
  hideSingle: false,
  multiple: true,
  selectable: true,
  highlighted: false
};

const meta: Meta<ChipsModule> = {
  title: 'Components/Chips',
  component: ChipsModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Chips: StoryObj<ChipsModule> = { args };
