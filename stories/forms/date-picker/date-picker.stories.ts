import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { DatePickerModule } from './date-picker.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<DatePickerModule> = {
  color: { options: ['primary', 'accent', 'warn'], control: { type: 'radio' }, name: 'Color' },
  startView: { options: ['month', 'year', 'multi-year'], control: { type: 'radio' }, name: 'Start View' },
  open: { control: { type: 'boolean' }, name: 'Open' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  inline: { control: { type: 'boolean' }, name: 'Inline' },
  touchUi: { control: { type: 'boolean' }, name: 'Responsive' },
  xPosition: { options: ['start', 'end'], control: { type: 'radio' }, name: 'X Position' },
  yPosition: { options: ['above', 'below'], control: { type: 'radio' }, name: 'Y Position' }
};

const args: Partial<DatePickerModule> = {
  color: 'primary',
  open: false,
  startView: 'month',
  touchUi: false,
  disabled: false,
  inline: false,
  xPosition: 'start',
  yPosition: 'below'
};

const meta: Meta<DatePickerModule> = {
  title: 'Forms/Date Picker',
  component: DatePickerModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const DatePicker: StoryObj<DatePickerModule> = { args };
